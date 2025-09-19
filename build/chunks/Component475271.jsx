/** Chunk was on 96861 **/
/** chunk id: 475271, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => c
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk429142 = require("./429142.js"),
  Chunk353250 = require("./353250.js"),
  Chunk234888 = require("./234888.js");

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}
let c = {
  showCaptcha: function(e, t) {
    let s = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
      {
        sitekey: c,
        captchaService: d,
        options: u
      } = e;
    (0, r.ZDy)(async () => {
      let {
        default: e
      } = await n.e("12192").then(n.bind(n, 718742));
      return n => (0, a.jsx)(e, l({
        onCaptchaVerify: (e, n) => t({
          captcha_key: e,
          captcha_rqtoken: n
        }),
        captchaService: d,
        sitekey: c
      }, s, u, n))
    }, {
      Layer: i.ZP,
      modalKey: o.A
    })
  },
  showCaptchaAsync: function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
      {
        sitekey: c,
        captchaService: d,
        captchaSessionId: u,
        options: f
      } = e;
    return new Promise((e, h) => {
      (0, r.ZDy)(async () => {
        let {
          default: r
        } = await n.e("12192").then(n.bind(n, 718742));
        return n => (0, a.jsx)(r, l({
          onCaptchaVerify: (t, n) => e({
            captcha_key: t,
            captcha_rqtoken: n,
            captcha_session_id: u
          }),
          captchaService: d,
          sitekey: c,
          onReject: e => {
            e === s.CaptchaError.CANCEL ? h(new s.CaptchaCancelError) : h(Error("cancel captcha"))
          }
        }, t, f, n))
      }, {
        Layer: i.ZP,
        modalKey: o.A
      })
    })
  },
  useIsCaptchaModalOpen: function() {
    return (0, Chunk481060.s9z)(e => (0, r.DEQ)(e, o.A))
  }
}