/** Chunk was on 31177 **/
r.d(t, {
  Zq: () => h,
  _8: () => u,
  s$: () => l
}), r(388685);
var c = r(97519),
  a = r(286379),
  n = r(731965),
  o = r(797614);

function i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      c = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (c = c.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), c.forEach(function(t) {
      var c;
      c = r[t], t in e ? Object.defineProperty(e, t, {
        value: c,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = c
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var c = Object.getOwnPropertySymbols(e);
      r.push.apply(r, c)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let s = (0, c.U)(e => ({
  captchaServeVolume: {}
}));

function u() {
  return 0 === Object.keys(s.getState().captchaServeVolume).length
}

function l(e) {
  (0, n.j)(() => {
    s.setState(t => null == e ? t : e in t.captchaServeVolume ? {
      captchaServeVolume: p(i({}, t.captchaServeVolume), {
        [e]: t.captchaServeVolume[e] + 1
      })
    } : {
      captchaServeVolume: p(i({}, t.captchaServeVolume), {
        [e]: 1
      })
    })
  })
}

function h() {
  for (let [e, t] of Object.entries(s.getState().captchaServeVolume)) o.Z.distribution({
    name: a.V.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,
    tags: ["user_flow:".concat(e)]
  }, t, !0);
  (0, n.j)(() => s.setState({
    captchaServeVolume: {}
  }))
}