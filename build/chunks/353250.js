/** Chunk was on 36514 **/
r.r(t), r.d(t, {
  CaptchaCancelError: () => s,
  CaptchaError: () => o,
  emitCaptchaDistributionMetric: () => p,
  extractCaptchaPropsFromResponse: () => i
}), r(415506);
var c, a = r(644947),
  n = r(234888),
  o = ((c = {}).CANCEL = "cancel", c.ERROR = "error", c.EXPIRED = "expired", c);

function i(e) {
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

function p(e) {
  (0, a._8)() && setTimeout(() => (0, a.Zq)(), n.i), (0, a.s$)(e)
}
class s extends Error {
  constructor() {
    super("Captcha cancelled")
  }
}