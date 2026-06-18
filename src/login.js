import './style.css';

document.addEventListener('DOMContentLoaded', () => {

  // Current Authentication Mode ('login' or 'signup')
  let authMode = 'login';
  
  // Current Active Form Tab ('email' or 'phone')
  let activeTab = 'email';

  /* ─────────────────────────────────────────────────────────
     1. DOM ELEMENT REFERENCES
     ───────────────────────────────────────────────────────── */
  const loginCard = document.getElementById('login-tilt-card');
  const camFrame = document.getElementById('camcorder-frame');
  
  // Form Navigation / Mode Headers
  const formTitle = document.getElementById('form-title');
  const formSubtitle = document.getElementById('form-subtitle');
  
  // Tabs
  const tabEmail = document.getElementById('tab-email');
  const tabPhone = document.getElementById('tab-phone');
  const tabSlider = document.getElementById('tab-slider');
  
  // Form Groups
  const groupEmail = document.getElementById('group-email');
  const groupPhone = document.getElementById('group-phone');
  const groupConfirmPassword = document.getElementById('group-confirm-password');
  
  // Inputs
  const inputIdentifier = document.getElementById('input-identifier');
  const inputPhone = document.getElementById('input-phone');
  const inputPassword = document.getElementById('input-password');
  const inputConfirmPassword = document.getElementById('input-confirm-password');
  const checkRemember = document.getElementById('check-remember');
  const checkboxLabelText = document.getElementById('checkbox-label-text');
  
  // Errors
  const errorIdentifier = document.getElementById('error-identifier');
  const errorPhone = document.getElementById('error-phone');
  const errorPassword = document.getElementById('error-password');
  const errorConfirmPassword = document.getElementById('error-confirm-password');
  
  // Toggles and Actions
  const btnSubmit = document.getElementById('btn-submit');
  const btnSubmitText = document.getElementById('btn-submit-text');
  const btnSubmitTextClone = document.getElementById('btn-submit-text-clone');
  const passwordToggle = document.getElementById('password-toggle');
  const passwordToggleIcon = document.getElementById('password-toggle-icon');
  
  // Mode Switches
  const switchPromptText = document.getElementById('switch-prompt-text');
  const linkSwitchMode = document.getElementById('link-switch-mode');
  const linkForgot = document.getElementById('link-forgot');
  const authForm = document.getElementById('auth-form');
  
  // Success Overlay
  const successOverlay = document.getElementById('success-overlay');
  const loadingBarFill = document.querySelector('.loading-bar-fill');

  // Country Picker Elements
  const countryWrapper = document.querySelector('.country-dropdown-wrapper');
  const countrySelectBtn = document.getElementById('country-select-btn');
  const selectedFlag = document.getElementById('selected-flag');
  const selectedCode = document.getElementById('selected-code');
  const countryOptions = document.querySelectorAll('.country-option');

  /* ─────────────────────────────────────────────────────────
     2. DYNAMIC LOGIN/SIGNUP MODE TOGGLING
     ───────────────────────────────────────────────────────── */
  function setAuthMode(mode) {
    authMode = mode;
    
    if (mode === 'signup') {
      formTitle.textContent = 'Create Account';
      formSubtitle.textContent = 'Register a new retro editor ID';
      btnSubmitText.innerHTML = 'Register ID <span class="material-symbols-outlined">how_to_reg</span>';
      btnSubmitTextClone.innerHTML = 'Register ID <span class="material-symbols-outlined">how_to_reg</span>';
      checkboxLabelText.textContent = 'I accept the Terms and Conditions';
      switchPromptText.textContent = 'Already have an account?';
      linkSwitchMode.textContent = 'Log in now';
      linkForgot.style.visibility = 'hidden';
      groupConfirmPassword.classList.add('show');
    } else {
      formTitle.textContent = 'Login to Studio';
      formSubtitle.textContent = 'Enter your credentials to enter the workspace';
      btnSubmitText.innerHTML = 'Enter Studio <span class="material-symbols-outlined">key</span>';
      btnSubmitTextClone.innerHTML = 'Enter Studio <span class="material-symbols-outlined">key</span>';
      checkboxLabelText.textContent = 'Remember me on this cam';
      switchPromptText.textContent = "Don't have an account?";
      linkSwitchMode.textContent = 'Register now';
      linkForgot.style.visibility = 'visible';
      groupConfirmPassword.classList.remove('show');
    }

    // Reset validations and errors
    clearFormErrors();
  }

  // Handle click switches
  linkSwitchMode.addEventListener('click', (e) => {
    e.preventDefault();
    const targetMode = authMode === 'login' ? 'signup' : 'login';
    window.location.hash = targetMode;
  });

  // Sync with URL hashes (#login / #signup)
  function handleHashRoute() {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#signup') {
      setAuthMode('signup');
    } else {
      setAuthMode('login');
    }
  }

  window.addEventListener('hashchange', handleHashRoute);
  // Run hash checks on start
  handleHashRoute();

  /* ─────────────────────────────────────────────────────────
     3. TAB SWITCHING (Email/Username vs Phone Input)
     ───────────────────────────────────────────────────────── */
  function setActiveTab(tab) {
    activeTab = tab;
    
    if (tab === 'phone') {
      tabEmail.classList.remove('active');
      tabPhone.classList.add('active');
      groupEmail.classList.remove('active');
      groupPhone.classList.add('active');
      tabSlider.style.transform = 'translateX(100%)';
    } else {
      tabPhone.classList.remove('active');
      tabEmail.classList.add('active');
      groupPhone.classList.remove('active');
      groupEmail.classList.add('active');
      tabSlider.style.transform = 'translateX(0)';
    }
    
    // Clear errors when swapping tabs
    clearFormErrors();
  }

  tabEmail.addEventListener('click', () => setActiveTab('email'));
  tabPhone.addEventListener('click', () => setActiveTab('phone'));

  /* ─────────────────────────────────────────────────────────
     4. CUSTOM COUNTRY PICKER DROPDOWN
     ───────────────────────────────────────────────────────── */
  countrySelectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    countryWrapper.classList.toggle('open');
  });

  countryOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Remove active from all options
      countryOptions.forEach(opt => opt.classList.remove('active'));
      
      // Set current option active
      option.classList.add('active');
      
      // Update selected codes/flags
      const flag = option.dataset.flag;
      const code = option.dataset.code;
      selectedFlag.textContent = flag;
      selectedCode.textContent = code;
      
      // Close list
      countryWrapper.classList.remove('open');
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    countryWrapper.classList.remove('open');
  });

  /* ─────────────────────────────────────────────────────────
     5. PASSWORD VISIBILITY TOGGLER
     ───────────────────────────────────────────────────────── */
  passwordToggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
      passwordToggleIcon.textContent = 'visibility_off';
    } else {
      inputPassword.type = 'password';
      passwordToggleIcon.textContent = 'visibility';
    }
  });

  /* ─────────────────────────────────────────────────────────
     6. FORM VALIDATION & SUCCESS FEEDBACK SIMULATION
     ───────────────────────────────────────────────────────── */
  function clearFormErrors() {
    const inputs = [inputIdentifier, inputPhone, inputPassword, inputConfirmPassword];
    const errors = [errorIdentifier, errorPhone, errorPassword, errorConfirmPassword];
    
    inputs.forEach(input => input.classList.remove('invalid'));
    errors.forEach(err => err.style.display = 'none');
  }

  function shakeCard() {
    loginCard.classList.remove('shake-animation');
    // Trigger reflow to restart animation
    void loginCard.offsetWidth;
    loginCard.classList.add('shake-animation');
    setTimeout(() => {
      loginCard.classList.remove('shake-animation');
    }, 450);
  }

  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearFormErrors();
    
    let isValid = true;
    
    // 1. Validate Active Tab input (Email vs Phone)
    if (activeTab === 'email') {
      const idVal = inputIdentifier.value.trim();
      if (idVal.length < 3) {
        inputIdentifier.classList.add('invalid');
        errorIdentifier.style.display = 'block';
        isValid = false;
      }
    } else {
      const phoneVal = inputPhone.value.replace(/\D/g, ''); // leave only digits
      if (phoneVal.length < 7) {
        inputPhone.classList.add('invalid');
        errorPhone.style.display = 'block';
        isValid = false;
      }
    }
    
    // 2. Validate Password
    const passwordVal = inputPassword.value;
    if (passwordVal.length < 8) {
      inputPassword.classList.add('invalid');
      errorPassword.style.display = 'block';
      isValid = false;
    }
    
    // 3. Validate Confirm Password (if registration mode)
    if (authMode === 'signup') {
      const confirmVal = inputConfirmPassword.value;
      if (confirmVal !== passwordVal) {
        inputConfirmPassword.classList.add('invalid');
        errorConfirmPassword.style.display = 'block';
        isValid = false;
      }
    }

    if (!isValid) {
      // Trigger card shake on validation failure
      shakeCard();
      return;
    }

    // Success Authentication sequence
    triggerSuccessAnimation();
  });

  function triggerSuccessAnimation() {
    // Show overlay
    successOverlay.classList.add('show');
    
    // Simulate progression bar filling
    setTimeout(() => {
      loadingBarFill.style.width = '100%';
    }, 100);
    
    // Redirect after delay
    setTimeout(() => {
      window.location.href = '/editor.html';
    }, 1600);
  }

  /* ─────────────────────────────────────────────────────────
     7. TACTILE CARD MOUSE-TILT (3D Parallax Hover)
     ───────────────────────────────────────────────────────── */
  function addTilt(el, strength = 8) {
    if (!el) return;
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const cx   = rect.left + rect.width / 2;
      const cy   = rect.top + rect.height / 2;
      const dx   = (e.clientX - cx) / (rect.width / 2);
      const dy   = (e.clientY - cy) / (rect.height / 2);
      el.style.transform = `perspective(800px) rotateY(${dx * strength}deg) rotateX(${-dy * strength}deg) scale(1.02)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  }

  addTilt(loginCard, 4);
  addTilt(camFrame, 4);

  /* ─────────────────────────────────────────────────────────
     8. CAMCORDER VIEWPORT CLOCK & RECORDING CONTROLS
     ───────────────────────────────────────────────────────── */
  let hours = 0, minutes = 4, seconds = 20, frames = 0;
  const timecodeElement = document.getElementById('live-timecode');
  const tapeReelElement = document.getElementById('tape-reel-indicator');
  const recContainer = document.getElementById('login-rec-toggle');
  const recDot       = recContainer ? recContainer.querySelector('.rec-dot') : null;
  const recLabel     = recContainer ? recContainer.querySelector('.rec-label') : null;
  let isRecording    = true;
  let timecodeInterval;

  function updateTimecode() {
    frames++;
    if (frames >= 30) {
      frames = 0; seconds++;
      if (seconds >= 60) {
        seconds = 0; minutes++;
        if (minutes >= 60) {
          minutes = 0; hours++;
          if (hours >= 24) hours = 0;
        }
      }
    }
    if (timecodeElement) {
      timecodeElement.textContent =
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
    }
  }

  function pad(n) { return String(n).padStart(2, '0'); }

  // Toggle Timecode update loop
  function startTicker() {
    timecodeInterval = setInterval(updateTimecode, 33.3);
  }
  
  function stopTicker() {
    clearInterval(timecodeInterval);
  }

  if (recContainer) {
    recContainer.style.cursor = 'pointer';
    recContainer.setAttribute('title', 'Click to pause/resume recording');

    recContainer.addEventListener('click', () => {
      isRecording = !isRecording;
      if (isRecording) {
        recDot.classList.add('blink');
        recDot.style.backgroundColor = 'var(--color-accent-pink)';
        recLabel.textContent = 'REC';
        recLabel.style.color = 'var(--color-accent-pink)';
        if (tapeReelElement) tapeReelElement.style.animationPlayState = 'running';
        startTicker();
      } else {
        recDot.classList.remove('blink');
        recDot.style.backgroundColor = 'var(--color-cyan)';
        recLabel.textContent = 'PAUSED';
        recLabel.style.color = 'var(--color-cyan)';
        if (tapeReelElement) tapeReelElement.style.animationPlayState = 'paused';
        stopTicker();
      }
    });
  }

  // Start timecode running on load
  startTicker();
});
