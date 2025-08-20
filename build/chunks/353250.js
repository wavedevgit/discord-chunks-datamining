/** Chunk was on 61624 **/
/** chunk id: 353250, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  CaptchaCancelError: () => c,
  CaptchaError: () => l,
  emitCaptchaDistributionMetric: () => i,
  extractCaptchaPropsFromResponse: () => s
}), require("./415506.js");
var r, Chunk644947 = require("./644947.js"),
  Chunk234888 = require("./234888.js"),
  l = ((r = {}).CANCEL = "cancel", r.ERROR = "error", r.EXPIRED = "expired", r);

function s(e) {
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
  (0, a._8)() && setTimeout(() => (0, a.Zq)(), o.i), (0, a.s$)(e)
}
class c extends Error {
  constructor() {
    super("Captcha cancelled")
  }
}