/** Chunk was on web.js **/
/** chunk id: 353250, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  CaptchaCancelError: () => l,
  CaptchaError: () => o,
  emitCaptchaDistributionMetric: () => s,
  extractCaptchaPropsFromResponse: () => a
}), require("./415506.js");
var Chunk644947 = require("./644947.js"),
  Chunk234888 = require("./234888.js"),
  o = function(e) {
    return e.CANCEL = "cancel", e.ERROR = "error", e.EXPIRED = "expired", e
  }({});

function a(e) {
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

function s(e) {
  (0, r._8)() && setTimeout(() => (0, r.Zq)(), i.i), (0, r.s$)(e)
}
class l extends Error {
  constructor() {
    super("Captcha cancelled")
  }
}