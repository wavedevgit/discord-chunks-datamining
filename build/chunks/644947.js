/** Chunk was on 61624 **/
/** chunk id: 644947, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Zq: () => p,
  _8: () => u,
  s$: () => d
}), require("./388685.js");
var Chunk879690 = require("./879690.js"),
  Chunk286379 = require("./286379.js"),
  Chunk731965 = require("./731965.js"),
  Chunk797614 = require("./797614.js");

function s(e) {
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

function i(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = (0, Chunk879690.U)(e => ({
  captchaServeVolume: {}
}));

function u() {
  return 0 === Object.keys(c.getState().captchaServeVolume).length
}

function d(e) {
  (0, o.j)(() => {
    c.setState(t => null == e ? t : e in t.captchaServeVolume ? {
      captchaServeVolume: i(s({}, t.captchaServeVolume), {
        [e]: t.captchaServeVolume[e] + 1
      })
    } : {
      captchaServeVolume: i(s({}, t.captchaServeVolume), {
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