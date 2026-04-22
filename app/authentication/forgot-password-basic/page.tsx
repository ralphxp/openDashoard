// Auto-generated from authentication/forgot-password-basic.html
// Route: /authentication/forgot-password-basic

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
              <p>Enter your email to reset your password.</p>
            </div>
            <form action="/authentication/new-password-basic">
              <div class="mb-4">
                <label class="form-label" for="resetEmail">Email address</label>
                <input type="email" class="form-control" id="resetEmail" placeholder="info@example.com">
              </div>
              <div class="clearfix">
                <button type="submit" value="Submit" class="btn btn-primary waves-effect waves-light w-100 mb-3">Forgot Password</button>
                <a href="/authentication/login-basic" class="btn btn-light waves-effect waves-light w-100"> Cancel </a>
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
