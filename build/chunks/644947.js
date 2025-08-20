/** Chunk was on 36514 **/
/** chunk id: 644947, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Zq: () => h,
  _8: () => u,
  s$: () => l
}), require("./388685.js");
var Chunk879690 = require("./879690.js"),
  Chunk286379 = require("./286379.js"),
  Chunk731965 = require("./731965.js"),
  Chunk797614 = require("./797614.js");

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
        enumerable: true,
        configurable: true,
        writable: true
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
let s = (0, Chunk879690.U)(e => ({
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
  for (let [e, t] of Object.entries(s.getState().captchaServeVolume)) Chunk797614.Z.distribution({
    name: Chunk286379.V.CAPTCHA_SERVE_VOLUME_DISTRIBUTION,
    tags: ["user_flow:".concat(module)]
  }, exports, true);
  (0, Chunk731965.j)(() => s.setState({
    captchaServeVolume: {}
  }))
}