// Auto-generated from authentication/forgot-password-frame.html
// Route: /authentication/forgot-password-frame

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
            <form action="/authentication/new-password-frame">
              <div class="mb-4">
                <label class="form-label" for="resetEmail">Email address</label>
                <input type="email" class="form-control" id="resetEmail" placeholder="info@example.com">
              </div>
              <div class="clearfix">
                <button type="submit" value="Submit" class="btn btn-primary waves-effect waves-light w-100 mb-3">Forgot Password</button>
                <a href="/authentication/login-frame" class="btn btn-light waves-effect waves-light w-100"> Cancel </a>
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
