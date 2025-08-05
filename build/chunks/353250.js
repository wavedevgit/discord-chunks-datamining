/** Chunk was on 61643 **/
r.r(t), r.d(t, {
  CaptchaCancelError: () => c,
  CaptchaError: () => s,
  emitCaptchaDistributionMetric: () => i,
  extractCaptchaPropsFromResponse: () => l
}), r(415506);
var n, o = r(644947),
  a = r(234888),
  s = ((n = {}).CANCEL = "cancel", n.ERROR = "error", n.EXPIRED = "expired", n);

function l(e) {
  var t;
  return {
    captchaService: e.captcha_service,
    sitekey: e.captcha_sitekey,
    captchaSessionId: e.captcha_session_id,
    options: {
      rqdata: e.captcha_rqdata,
      rqtoken: e.captcha_rqtoken,
      serveInvisible: null != (t = e.should_serve_invisible) && t,
      userflow: e.user_flow
    }
  }
}

function i(e) {
  (0, o._8)() && setTimeout(() => (0, o.Zq)(), a.i), (0, o.s$)(e)
}
class c extends Error {
  constructor() {
    super("Captcha cancelled")
  }
}