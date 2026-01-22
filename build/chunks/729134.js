/** Chunk was on 28979 **/
/** chunk id: 729134, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  C: () => o
});
var Chunk311907 = require("./311907.js"),
  Chunk274372 = require("./274372.js"),
  Chunk399925 = require("./399925.js"),
  Chunk419954 = require("./419954.js"),
  Chunk780964 = require("./780964.js"),
  Chunk985018 = require("./985018.jsx");
let o = (0, Chunk419954.zD)(Chunk780964.X.CLIPS_ENABLE_PHRASE_SIGNALS, {
  useTitle: () => a.intl.string(a.t.nHsilt),
  useSubtitle: () => a.intl.string(a.t["s6wq+m"]),
  useValue: () => (0, n.bG)([l.A], () => l.A.getSettings().clipSignals.enablePhraseSignals),
  setValue: t => {
    var e, i;
    let n = l.A.getSettings().clipSignals;
    s.PW((e = function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {},
          n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
          return Object.getOwnPropertyDescriptor(i, t).enumerable
        }))), n.forEach(function(e) {
          var n;
          n = i[e], e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = n
        })
      }
      return t
    }({}, n), i = i = {
      enablePhraseSignals: t
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        i.push.apply(i, n)
      }
      return i
    })(Object(i)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
    }), e))
  }
})