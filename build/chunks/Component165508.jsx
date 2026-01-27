/** Chunk was on 67299 **/
/** chunk id: 165508, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => c
}), require("./65821.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk80556 = require("./80556.js"),
  Chunk577015 = require("./577015.js"),
  Chunk320028 = require("./320028.js");

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let c = {
  showCaptcha: function(e, t) {
    let a = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
      {
        sitekey: c,
        captchaService: u,
        options: d
      } = e;
    (0, s.mMO)(async () => {
      let {
        default: e
      } = await n.e("39522").then(n.bind(n, 252345));
      return n => (0, r.jsx)(e, l({
        onCaptchaVerify: (e, n) => t({
          captcha_key: e,
          captcha_rqtoken: n
        }),
        captchaService: u,
        sitekey: c
      }, a, d, n))
    }, {
      Layer: i.Ay,
      modalKey: o.f
    })
  },
  showCaptchaAsync: function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
      {
        sitekey: c,
        captchaService: u,
        captchaSessionId: d,
        options: m
      } = e;
    return new Promise((e, p) => {
      (0, s.mMO)(async () => {
        let {
          default: s
        } = await n.e("39522").then(n.bind(n, 252345));
        return n => (0, r.jsx)(s, l({
          onCaptchaVerify: (t, n) => e({
            captcha_key: t,
            captcha_rqtoken: n,
            captcha_session_id: d
          }),
          captchaService: u,
          sitekey: c,
          onReject: e => {
            e === a.CaptchaError.CANCEL ? p(new a.CaptchaCancelError) : p(Error("cancel captcha"))
          }
        }, t, m, n))
      }, {
        Layer: i.Ay,
        modalKey: o.f
      })
    })
  },
  useIsCaptchaModalOpen: function() {
    return (0, s.red)(e => (0, s.fDT)(e, o.f))
  }
}