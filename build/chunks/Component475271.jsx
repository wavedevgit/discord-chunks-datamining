/** Chunk was on 36514 **/
/** chunk id: 475271, original params: e,t,a (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => s
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk429142 = require("./429142.js"),
  Chunk353250 = require("./353250.js"),
  Chunk234888 = require("./234888.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = a[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}
let s = {
  showCaptcha: function(e, t) {
    let o = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
      {
        sitekey: s,
        captchaService: h,
        options: u
      } = e;
    (0, r.ZDy)(async () => {
      let {
        default: e
      } = await a.e("12192").then(a.bind(a, 718742));
      return a => (0, n.jsx)(e, p({
        onCaptchaVerify: (e, a) => t({
          captcha_key: e,
          captcha_rqtoken: a
        }),
        captchaService: h,
        sitekey: s
      }, o, u, a))
    }, {
      Layer: c.ZP,
      modalKey: i.A
    })
  },
  showCaptchaAsync: function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
      {
        sitekey: s,
        captchaService: h,
        captchaSessionId: u,
        options: l
      } = e;
    return new Promise((e, y) => {
      (0, r.ZDy)(async () => {
        let {
          default: r
        } = await a.e("12192").then(a.bind(a, 718742));
        return a => (0, n.jsx)(r, p({
          onCaptchaVerify: (t, a) => e({
            captcha_key: t,
            captcha_rqtoken: a,
            captcha_session_id: u
          }),
          captchaService: h,
          sitekey: s,
          onReject: e => {
            e === o.CaptchaError.CANCEL ? y(new o.CaptchaCancelError) : y(Error("cancel captcha"))
          }
        }, t, l, a))
      }, {
        Layer: c.ZP,
        modalKey: i.A
      })
    })
  },
  useIsCaptchaModalOpen: function() {
    return (0, Chunk481060.s9z)(e => (0, r.DEQ)(e, i.A))
  }
}