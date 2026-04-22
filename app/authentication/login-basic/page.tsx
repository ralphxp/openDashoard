// Auto-generated from authentication/login-basic.html
// Route: /authentication/login-basic

export default function Page() {
  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `<div class="page-layout">

    <div class="auth-wrapper min-vh-100 px-2">
      <div class="row g-0 min-vh-100">
        <div class="col-xl-5 col-lg-6 ms-auto px-sm-4 align-self-center py-4 d-none d-lg-block">
          <img src="../../..//assets/images/auth/vector2.svg" alt="" class="img-fluid">
        </div>
        <div class="col-xl-5 col-lg-6 ms-auto px-sm-4 align-self-center py-4">
          <div class="card card-body p-4 p-sm-5 maxw-450px m-auto rounded-4">
            <div class="mb-4 text-center">
              <a href="/" aria-label="NexLink logo">
                <img class="visible-light" src="../../..//assets/images/logo.svg" alt="NexLink logo">
              </a>
            </div>
            <div class="text-center mb-4">
              <h5 class="mb-1">Welcome to NexLink</h5>
              <p>Sign in to access your secure admin dashboard.</p>
            </div>
            <form action="/">
              <div class="mb-4">
                <label class="form-label" for="loginEmail">Email Address</label>
                <input type="email" class="form-control" id="loginEmail" placeholder="info@example.com">
              </div>
              <div class="mb-4">
                <label class="form-label" for="loginPassword">Password</label>
                <div class="password-wrapper">
                  <input type="password" class="form-control password-input" id="loginPassword" placeholder="********">
                  <button type="button" id="togglePassword" class="toggle-password" aria-pressed="false" aria-label="Show password" title="Show password">
                    <i class="close fi fi-rr-eye-crossed" aria-hidden="true"></i>
                    <i class="open fi fi-rr-eye" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div class="mb-4">
                <div class="d-flex justify-content-between">
                  <div class="form-check mb-0">
                    <input class="form-check-input" type="checkbox" id="rememberMe">
                    <label class="form-check-label" for="rememberMe"> Remember Me </label>
                  </div>
                  <a href="/authentication/forgot-password-basic">Forgot Password?</a>
                </div>
              </div>
              <div class="mb-3">
                <button type="submit" value="Submit" class="btn btn-primary waves-effect waves-light w-100">Login</button>
              </div>
              <p class="mb-5 text-center">Don’t have an account? <a href="/authentication/register-basic">Sign Up here</a>
              </p>
              <div class="border-bottom position-relative my-4 text-center">
                <span class="px-3 position-absolute translate-middle top-50 start-50 bg-body">Or Continue With</span>
              </div>
              <button type="submit" class="btn btn-light waves-effect waves-light w-100">
                <img src="../../..//assets/images/icons/google.svg" alt="" class="me-1"> Login with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
  <!-- begin::NexLink Page Scripts -->
  <!-- end::NexLink Page Scripts -->`,
      }}
    />
  )
}
