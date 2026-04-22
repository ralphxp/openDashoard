// Auto-generated from authentication/new-password-frame.html
// Route: /authentication/new-password-frame

export default function Page() {
  return (
    <div
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `<div class="page-layout">

    <div class="auth-frame-wrapper">
      <div class="row g-0 h-100">
        <div class="col-xl-8 col-lg-7 col-md-6">
          <div class="auth-frame" style="background-image: url(/assets/images/auth/auth-frame.webp);"></div>
        </div>
        <div class="col-xl-4 col-lg-5 col-md-6 align-self-center">
          <div class="p-4 p-sm-5 maxw-450px m-auto">
            <div class="mb-4 text-center">
              <a href="/" aria-label="NexLink logo">
                <img class="visible-light" src="../../..//assets/images/logo.svg" alt="NexLink logo">
              </a>
            </div>
            <div class="text-center mb-5">
              <h5 class="mb-1">Welcome to NexLink</h5>
              <p>Enter your email to reset your password.</p>
            </div>
            <form action="/authentication/login-frame">
              <div class="mb-4">
                <label class="form-label" for="newPassword">New Password</label>
                <div class="password-wrapper">
                  <input type="password" class="form-control" id="newPassword" placeholder="********">
                  <button type="button" class="toggle-password" aria-pressed="false" aria-label="Show password" title="Show password">
                    <i class="close fi fi-rr-eye-crossed" aria-hidden="true"></i>
                    <i class="open fi fi-rr-eye" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div class="mb-4">
                <label class="form-label" for="confirmPassword">Confirm Password</label>
                <div class="password-wrapper">
                  <input type="password" class="form-control" id="confirmPassword" placeholder="********">
                  <button type="button" class="toggle-password" aria-pressed="false" aria-label="Show password" title="Show password">
                    <i class="close fi fi-rr-eye-crossed" aria-hidden="true"></i>
                    <i class="open fi fi-rr-eye" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div class="mb-4">
                <div class="form-check mb-0">
                  <input class="form-check-input" type="checkbox" id="termsConditions" name="terms">
                  <label class="form-check-label" for="termsConditions">
                    I Agree & <a href="javascript:void(0);">Terms and conditions.</a>
                  </label>
                </div>
              </div>
              <div class="clearfix">
                <button type="submit" value="Submit" class="btn btn-primary waves-effect waves-light w-100 mb-3">Submit</button>
              </div>
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
