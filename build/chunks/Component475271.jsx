/** Chunk was on 73268 **/
/** chunk id: 475271, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => l
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk429142 = require("./429142.js"),
  Chunk353250 = require("./353250.js"),
  Chunk234888 = require("./234888.js");

function c(e) {
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
let l = {
  showCaptcha: function(e, t) {
    let o = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
      {
        sitekey: l,
        captchaService: d,
        options: u
      } = e;
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("12192").then(n.bind(n, 718742));
      return n => (0, r.jsx)(e, c({
        onCaptchaVerify: (e, n) => t({
          captcha_key: e,
          captcha_rqtoken: n
        }),
        captchaService: d,
        sitekey: l
      }, o, u, n))
    }, {
      Layer: i.ZP,
      modalKey: s.A
    })
  },
  showCaptchaAsync: function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
      {
        sitekey: l,
        captchaService: d,
        captchaSessionId: u,
        options: f
      } = e;
    return new Promise((e, p) => {
      (0, a.ZDy)(async () => {
        let {
          default: a
        } = await n.e("12192").then(n.bind(n, 718742));
        return n => (0, r.jsx)(a, c({
          onCaptchaVerify: (t, n) => e({
            captcha_key: t,
            captcha_rqtoken: n,
            captcha_session_id: u
          }),
          captchaService: d,
          sitekey: l,
          onReject: e => {
            e === o.CaptchaError.CANCEL ? p(new o.CaptchaCancelError) : p(Error("cancel captcha"))
          }
        }, t, f, n))
      }, {
        Layer: i.ZP,
        modalKey: s.A
      })
    })
  },
  useIsCaptchaModalOpen: function() {
    return (0, Chunk481060.s9z)(e => (0, a.DEQ)(e, s.A))
  }
}