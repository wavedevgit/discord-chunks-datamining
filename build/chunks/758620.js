/** Chunk was on 77069 **/
/** chunk id: 758620, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  C: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk509613 = require("./509613.js"),
  Chunk313789 = require("./313789.js"),
  Chunk388032 = require("./388032.jsx");
let o = (0, Chunk509613.qs)(Chunk313789.n.CLIPS_ENABLE_GAME_SIGNALS, {
  useTitle: () => a.intl.string(a.t.iV6KcI),
  useSubtitle: () => a.intl.string(a.t["dJ2tX+"]),
  useValue: () => (0, i.e7)([l.Z], () => l.Z.getSettings().clipSignals.enableGameSignals),
  setValue: t => {
    var e, n;
    let i = l.Z.getSettings().clipSignals;
    s.Rr((e = function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), i.forEach(function(e) {
          var i;
          i = n[e], e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = i
        })
      }
      return t
    }({}, i), n = n = {
      enableGameSignals: t
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    }), e))
  }
})