/** Chunk was on 34082 **/
/** chunk id: 725436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => u
});
var Chunk454585 = require("./454585.js"),
  Chunk551452 = require("./551452.jsx"),
  Chunk532901 = require("./532901.jsx");

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

function a(e, t) {
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
let o = a(s({}, Chunk454585.Z.guildEventRules.link), {
    react: (0, Chunk532901.Z)({
      enableBuildOverrides: false,
      mustConfirmExternalLink: true
    }).react
  }),
  c = a(s({}, Chunk454585.Z.guildEventRules.channelMention), {
    react: (0, Chunk551452.Z)({
      enableBuildOverrides: false,
      shouldCloseDefaultModals: true,
      shouldStopPropagation: true
    }).react
  }),
  u = Chunk454585.Z.reactParserFor(a(s({}, Chunk454585.Z.guildEventRules), {
    link: o,
    channelMention: c
  }))