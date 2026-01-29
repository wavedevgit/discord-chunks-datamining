/** Chunk was on 73734 **/
/** chunk id: 340913, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk945810 = require("./945810.js");

function i(e) {
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

function l(e, t) {
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
let a = {
    showPTTJoinTooltip: false,
    showPTTIconIndicator: false,
    showPTTNoKeybindWarning: false,
    showPTTSpeakingIndicator: false
  },
  o = (0, Chunk945810.mj)({
    name: "2025-12-09-ptt-education",
    kind: "user",
    defaultConfig: a,
    variations: {
      1: l(i({}, a), {
        showPTTJoinTooltip: true,
        showPTTNoKeybindWarning: true,
        showPTTSpeakingIndicator: true
      }),
      2: l(i({}, a), {
        showPTTIconIndicator: true
      })
    }
  })