/** Chunk was on 21738 **/
/** chunk id: 631001, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk877227 = require("./877227.js"),
  Chunk839214 = require("./839214.js"),
  Chunk890687 = require("./890687.js"),
  Chunk652215 = require("./652215.js");
let s = Object.freeze({
    tab: Chunk890687.NC.ALL
  }),
  o = (0, Chunk839214.D)(e => {
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
    }({}, s), n = n = {
      initializeFromUrl: (t, n) => {
        let r = new URLSearchParams(t).get(l.L1.TAB);
        (r !== l.NC.PREVIEW_TOOL || n) && null != r && Object.values(l.NC).includes(r) ? e({
          tab: r
        }) : e({
          tab: l.NC.ALL
        })
      },
      setTab: t => {
        e({
          tab: t
        });
        let n = new URLSearchParams;
        n.set(l.L1.TAB, t);
        let i = "".concat(a.BVt.QUEST_HOME_V2, "?").concat(n.toString());
        (0, r.pX)(i.toString())
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