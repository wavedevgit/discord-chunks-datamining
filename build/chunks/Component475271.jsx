/** Chunk was on 89035 **/
/** chunk id: 475271, original params: e,t,r (module,exports,require) **/
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
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
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
    (0, o.ZDy)(async () => {
      let {
        default: e
      } = await r.e("12192").then(r.bind(r, 718742));
      return r => (0, n.jsx)(e, l({
        onCaptchaVerify: (e, r) => t({
          captcha_key: e,
          captcha_rqtoken: r
        }),
        captchaService: d,
        sitekey: c
      }, s, u, r))
    }, {
      Layer: a.ZP,
      modalKey: i.A
    })
  },
  showCaptchaAsync: function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
      {
        sitekey: c,
        captchaService: d,
        captchaSessionId: u,
        options: p
      } = e;
    return new Promise((e, m) => {
      (0, o.ZDy)(async () => {
        let {
          default: o
        } = await r.e("12192").then(r.bind(r, 718742));
        return r => (0, n.jsx)(o, l({
          onCaptchaVerify: (t, r) => e({
            captcha_key: t,
            captcha_rqtoken: r,
            captcha_session_id: u
          }),
          captchaService: d,
          sitekey: c,
          onReject: e => {
            e === s.CaptchaError.CANCEL ? m(new s.CaptchaCancelError) : m(Error("cancel captcha"))
          }
        }, t, p, r))
      }, {
        Layer: a.ZP,
        modalKey: i.A
      })
    })
  },
  useIsCaptchaModalOpen: function() {
    return (0, Chunk481060.s9z)(e => (0, o.DEQ)(e, i.A))
  }
}