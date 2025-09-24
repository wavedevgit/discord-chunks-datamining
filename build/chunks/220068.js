/** Chunk was on 1272 **/
/** chunk id: 220068, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk948789 = require("./948789.js"),
  Chunk972959 = require("./972959.js"),
  Chunk113434 = require("./113434.js"),
  Chunk981631 = require("./981631.js");
let o = Object.freeze({
    tab: Chunk113434.e5.ALL
  }),
  s = (0, Chunk972959.H)(e => {
    var t, n;
    return t = function(e) {
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
    }({}, o), n = n = {
      initializeFromUrl: (t, n) => {
        let r = new URLSearchParams(t).get(l.tR.TAB);
        if (r === l.e5.PREVIEW_TOOL && !n) return void e({
          tab: l.e5.ALL
        });
        null != r && Object.values(l.e5).includes(r) ? e({
          tab: r
        }) : e({
          tab: l.e5.ALL
        })
      },
      setTab: t => {
        e({
          tab: t
        });
        let n = new URLSearchParams;
        n.set(l.tR.TAB, t);
        let i = "".concat(a.Z5c.QUEST_HOME_V2, "?").concat(n.toString());
        (0, r.uL)(i.toString())
      }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t
  })