/** Chunk was on 89035 **/
/** chunk id: 353250, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  CaptchaCancelError: () => c,
  CaptchaError: () => s,
  emitCaptchaDistributionMetric: () => l,
  extractCaptchaPropsFromResponse: () => i
}), require("./415506.js");
var n, Chunk644947 = require("./644947.js"),
  Chunk234888 = require("./234888.js"),
  s = ((n = {}).CANCEL = "cancel", n.ERROR = "error", n.EXPIRED = "expired", n);

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

function l(e) {
  (0, o._8)() && setTimeout(() => (0, o.Zq)(), a.i), (0, o.s$)(e)
}
class c extends Error {
  constructor() {
    super("Captcha cancelled")
  }
}