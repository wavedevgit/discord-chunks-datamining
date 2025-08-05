/** Chunk was on 61643 **/
r.d(t, {
  Zq: () => p,
  _8: () => u,
  s$: () => d
}), r(388685);
var n = r(97519),
  o = r(286379),
  a = r(731965),
  s = r(797614);

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
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function i(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}
let c = (0, n.U)(e => ({
  captchaServeVolume: {}
}));

function u() {
  return 0 === Object.keys(c.getState().captchaServeVolume).length
}

function d(e) {
  (0, a.j)(() => {
    c.setState(t => null == e ? t : e in t.captchaServeVolume ? {
      captchaServeVolume: i(l({}, t.captchaServeVolume), {
        [e]: t.captchaServeVolume[e] + 1
      })
    } : {
      captchaServeVolume: i(l({}, t.captchaServeVolume), {
        [e]: 1
      })
    })
  })
}

function p() {
  for (let [e, t] of Object.entries(c.getState().captchaServeVolume)) s.Z.distribution({
    name: o.V.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,
    tags: ["user_flow:".concat(e)]
  }, t, !0);
  (0, a.j)(() => c.setState({
    captchaServeVolume: {}
  }))
}