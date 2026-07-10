// login.js - animated login UI + client-side form validation

(function () {
  const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const page = document.querySelector('.login-page');
  const form = document.querySelector('form');
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const rememberCheckbox = document.querySelector('input[type="checkbox"]');

  const passwordToggleBtn = document.querySelector('.password-toggle');
  const passwordToggleIcon = passwordToggleBtn ? passwordToggleBtn.querySelector('i') : null;

  // create/locate error elements
  const emailFieldWrap = emailInput ? emailInput.closest('.input-box') : null;
  const passwordFieldWrap = passwordInput ? passwordInput.closest('.input-box') : null;

  function ensureErrorEl(fieldWrap, id) {
    if (!fieldWrap) return null;
    let el = fieldWrap.querySelector(`#${id}`);
    if (!el) {
      el = document.createElement('div');
      el.id = id;
      el.className = 'field-error-msg';
      el.setAttribute('aria-live', 'polite');
      el.style.display = 'none';
      fieldWrap.appendChild(el);
    }
    return el;
  }

  const emailErrorEl = ensureErrorEl(emailFieldWrap, 'email-error');
  const passwordErrorEl = ensureErrorEl(passwordFieldWrap, 'password-error');

  const formMsg = document.createElement('div');
  formMsg.className = 'form-validation-msg';
  formMsg.setAttribute('role', 'alert');
  formMsg.style.display = 'none';
  if (form && form.parentElement) {
    form.parentElement.appendChild(formMsg);
  }

  function setFieldError(input, errEl, message) {
    if (!input || !errEl) return;
    input.classList.add('error-field');
    errEl.textContent = message;
    errEl.style.display = 'block';
  }

  function clearFieldError(input, errEl) {
    if (!input || !errEl) return;
    input.classList.remove('error-field');
    errEl.textContent = '';
    errEl.style.display = 'none';
  }

  function setFormMsg(type, message) {
    if (!formMsg) return;
    formMsg.style.display = 'block';
    formMsg.textContent = message;
    formMsg.style.color = type === 'error' ? '#FF5F56' : '#A0AEC0';
  }

  function clearFormMsg() {
    if (!formMsg) return;
    formMsg.style.display = 'none';
    formMsg.textContent = '';
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
  }

  function validatePassword(value) {
    const v = String(value);
    // at least 8 chars, at least 1 letter and 1 number
    return v.length >= 8 && /[A-Za-z]/.test(v) && /\d/.test(v);
  }

  function validateForm() {
    let ok = true;
    clearFormMsg();

    const emailVal = emailInput ? emailInput.value : '';
    const passVal = passwordInput ? passwordInput.value : '';

    if (!emailVal || !validateEmail(emailVal)) {
      setFieldError(emailInput, emailErrorEl, 'Enter a valid email address.');
      ok = false;
    } else {
      clearFieldError(emailInput, emailErrorEl);
    }

    if (!passVal || !validatePassword(passVal)) {
      setFieldError(
        passwordInput,
        passwordErrorEl,
        'Password must be at least 8 chars and include a letter and a number.'
      );
      ok = false;
    } else {
      clearFieldError(passwordInput, passwordErrorEl);
    }

    return ok;
  }

  // Password visibility toggle
  if (passwordToggleBtn && passwordInput) {
    passwordToggleBtn.addEventListener('click', () => {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');

      if (passwordToggleIcon) {
        // swap icons
        passwordToggleIcon.classList.toggle('fa-eye', isPassword);
        passwordToggleIcon.classList.toggle('fa-eye-slash', !isPassword);
      }
    });
  }

  // Live validation
  if (emailInput) {
    emailInput.addEventListener('input', () => {
      if (!emailErrorEl) return;
      if (emailInput.value && validateEmail(emailInput.value)) clearFieldError(emailInput, emailErrorEl);
    });
    emailInput.addEventListener('blur', () => validateForm());
  }

  if (passwordInput) {
    passwordInput.addEventListener('input', () => {
      if (!passwordErrorEl) return;
      if (passwordInput.value && validatePassword(passwordInput.value)) clearFieldError(passwordInput, passwordErrorEl);
    });
    passwordInput.addEventListener('blur', () => validateForm());
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const ok = validateForm();
      if (!ok) {
        setFormMsg('error', 'Fix the highlighted fields and try again.');
        return;
      }

      // Demo success state (no backend)
      const emailVal = emailInput ? emailInput.value.trim() : 'user';
      setFormMsg('success', `Signed in successfully (demo). Welcome, ${emailVal}!`);

      // Optional: clear password field after success
      if (passwordInput) passwordInput.value = '';
      if (passwordErrorEl) passwordErrorEl.style.display = 'none';
      if (passwordInput) passwordInput.classList.remove('error-field');
    });
  }

  // GSAP entrance animation
  function runAnimations() {
    if (prefersReducedMotion) return;
    if (typeof gsap === 'undefined') return;

    const left = document.querySelector('.login-left');
    const right = document.querySelector('.login-right');
    const card = document.querySelector('.login-card');
    const logo = document.querySelector('.login-wrapper .logo, .login-left .logo');

    gsap.set(page, { opacity: 0, y: 10 });
    gsap.set([left, right].filter(Boolean), { opacity: 0, y: 30 });
    if (card) gsap.set(card, { scale: 0.98, opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.to(page, { opacity: 1, y: 0, duration: 0.7 })
      .to([left, right].filter(Boolean), { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }, '-=0.35')
      .to(card, { opacity: 1, scale: 1, duration: 0.6 }, '-=0.5');

    // Subtle floating gradients (if present)
    const circles = document.querySelectorAll('.gradient-circle, .bg-grid, .gradient-circle');
    if (circles && circles.length) {
      gsap.fromTo(
        circles,
        { y: 0 },
        { y: 10, duration: 2.6, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: 0.15 }
      );
    }
  }

  // wait a tick for layout
  window.addEventListener('load', () => {
    runAnimations();
  });
})();

