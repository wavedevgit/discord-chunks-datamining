/** Chunk was on 36514 **/
/** chunk id: 475271, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => s
}), require("./415506.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk429142 = require("./429142.js"),
  Chunk353250 = require("./353250.js"),
  Chunk234888 = require("./234888.js");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      c = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), c.forEach(function(t) {
      var c;
      c = r[t], t in e ? Object.defineProperty(e, t, {
        value: c,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = c
    })
  }
  return e
}
let s = {
  showCaptcha: function(e, t) {
    let o = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
      {
        sitekey: s,
        captchaService: u,
        options: l
      } = e;
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await r.e("12192").then(r.bind(r, 718742));
      return r => (0, c.jsx)(e, p({
        onCaptchaVerify: (e, r) => t({
          captcha_key: e,
          captcha_rqtoken: r
        }),
        captchaService: u,
        sitekey: s
      }, o, l, r))
    }, {
      Layer: n.ZP,
      modalKey: i.A
    })
  },
  showCaptchaAsync: function(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
      {
        sitekey: s,
        captchaService: u,
        captchaSessionId: l,
        options: h
      } = e;
    return new Promise((e, f) => {
      (0, a.ZDy)(async () => {
        let {
          default: a
        } = await r.e("12192").then(r.bind(r, 718742));
        return r => (0, c.jsx)(a, p({
          onCaptchaVerify: (t, r) => e({
            captcha_key: t,
            captcha_rqtoken: r,
            captcha_session_id: l
          }),
          captchaService: u,
          sitekey: s,
          onReject: e => {
            e === o.CaptchaError.CANCEL ? f(new o.CaptchaCancelError) : f(Error("cancel captcha"))
          }
        }, t, h, r))
      }, {
        Layer: n.ZP,
        modalKey: i.A
      })
    })
  },
  useIsCaptchaModalOpen: function() {
    return (0, Chunk481060.s9z)(e => (0, a.DEQ)(e, i.A))
  }
}