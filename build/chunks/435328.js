/** Chunk was on 48330 **/
/** chunk id: 435328, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => u
});
var Chunk46054 = require("./46054.js"),
  Chunk556300 = require("./556300.jsx"),
  Chunk49005 = require("./49005.jsx");

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function a(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = a(s({}, Chunk46054.A.guildEventRules.link), {
    react: (0, Chunk49005.A)({
      enableBuildOverrides: false,
      mustConfirmExternalLink: true
    }).react
  }),
  o = a(s({}, Chunk46054.A.guildEventRules.channelMention), {
    react: (0, Chunk556300.A)({
      enableBuildOverrides: false,
      shouldCloseDefaultModals: true,
      shouldStopPropagation: true
    }).react
  }),
  u = Chunk46054.A.reactParserFor(a(s({}, Chunk46054.A.guildEventRules), {
    link: c,
    channelMention: o
  }))