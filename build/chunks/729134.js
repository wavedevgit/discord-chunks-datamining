/** Chunk was on 4670 **/
/** chunk id: 729134, original params: e,t,i (module,exports,require) **/
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
  useTitle: () => u.intl.string(u.t.nHsilt),
  useSubtitle: () => u.intl.string(u.t["s6wq+m"]),
  useValue: () => (0, n.bG)([l.A], () => l.A.getSettings().clipSignals.enablePhraseSignals),
  setValue: e => {
    var t, i;
    let n = l.A.getSettings().clipSignals;
    s.PW((t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
          return Object.getOwnPropertyDescriptor(i, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = i[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, n), i = i = {
      enablePhraseSignals: e
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        i.push.apply(i, n)
      }
      return i
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
    }), t))
  }
})