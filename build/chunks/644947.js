/** Chunk was on 61643 **/
/** chunk id: 644947, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Zq: () => p,
  _8: () => u,
  s$: () => d
}), require("./388685.js");
var Chunk97519 = require("./97519.js"),
  Chunk286379 = require("./286379.js"),
  Chunk731965 = require("./731965.js"),
  Chunk797614 = require("./797614.js");

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
let c = (0, Chunk97519.U)(e => ({
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
  for (let [e, t] of Object.entries(c.getState().captchaServeVolume)) Chunk797614.Z.distribution({
    name: Chunk286379.V.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,
    tags: ["user_flow:".concat(module)]
  }, exports, true);
  (0, Chunk731965.j)(() => c.setState({
    captchaServeVolume: {}
  }))
}