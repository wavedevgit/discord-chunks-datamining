/** Chunk was on 36514 **/
a.r(t), a.d(t, {
  default: () => p
}), a(415506);
var n = a(255367);
a(73800);
var c = a(481060),
  r = a(429142),
  o = a(234888);

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = a[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}
let p = {
  showCaptcha: function(e, t) {
    let p = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      {
        sitekey: s,
        captchaService: u,
        options: h
      } = e;
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await a.e("12192").then(a.bind(a, 718742));
      return a => (0, n.jsx)(e, i({
        onCaptchaVerify: (e, a) => t({
          captcha_key: e,
          captcha_rqtoken: a
        }),
        captchaService: u,
        sitekey: s
      }, p, h, a))
    }, {
      Layer: r.ZP,
      modalKey: o.A
    })
  },
  showCaptchaAsync: function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      {
        sitekey: p,
        captchaService: s,
        captchaSessionId: u,
        options: h
      } = e;
    return new Promise((e, l) => {
      (0, c.ZDy)(async () => {
        let {
          default: c
        } = await a.e("12192").then(a.bind(a, 718742));
        return a => (0, n.jsx)(c, i({
          onCaptchaVerify: (t, a) => e({
            captcha_key: t,
            captcha_rqtoken: a,
            captcha_session_id: u
          }),
          captchaService: s,
          sitekey: p,
          onReject: () => l(Error("cancel captcha"))
        }, t, h, a))
      }, {
        Layer: r.ZP,
        modalKey: o.A
      })
    })
  },
  useIsCaptchaModalOpen: function() {
    return (0, c.s9z)(e => (0, c.DEQ)(e, o.A))
  }
}