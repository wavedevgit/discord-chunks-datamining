/** Chunk was on web.js **/
/** chunk id: 577015, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  CaptchaCancelError: () => o,
  CaptchaError: () => i,
  emitCaptchaDistributionMetric: () => s,
  extractCaptchaPropsFromResponse: () => a
}), require("./65821.js");
var Chunk1136 = require("./1136.js");
require("./320028.js");
var i = function(e) {
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
  (0, r.N6)() && setTimeout(() => (0, r.il)(), 3e4), (0, r.di)(e)
}
class o extends Error {
  constructor() {
    super("Captcha cancelled")
  }
}