/** Chunk was on 82575 **/
/** chunk id: 378729, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Vn: () => c,
  e8: () => o
});
var Chunk600975 = require("./600975.js"),
  Chunk428835 = require("./428835.js");

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function r(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let a = (0, Chunk600975.C)({
    id: "2025-11_game_update_notification",
    kind: "user",
    label: "Game Update Notification",
    defaultConfig: {
      showToggle: false
    },
    treatments: [{
      id: 1,
      label: "User can receive game update notifications. Show settings toggle.",
      config: {
        showToggle: true
      }
    }]
  }),
  o = e => (0, s.u5)(a, r(l({}, e), {
    autoTrackExposure: false
  })),
  c = e => (0, s.P2)(a, r(l({}, e), {
    autoTrackExposure: false
  })).showToggle