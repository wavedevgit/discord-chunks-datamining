/** Chunk was on 67000 **/
/** chunk id: 134616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => u
});
var Chunk374470 = require("./374470.js"),
  Chunk481060 = require("./481060.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk574254 = require("./574254.js"),
  Chunk585483 = require("./585483.js"),
  Chunk547420 = require("./547420.js"),
  Chunk981631 = require("./981631.js");
let u = function(e) {
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
}({
  POP_LAYER: {
    binds: ["esc"],
    comboKeysBindGlobal: true,
    action(e) {
      if ((0, i.Vbw)()) returnfalse;
      if (o.S.hasSubscribers(c.CkL.CALL_DECLINE)) return o.S.dispatch(c.CkL.CALL_DECLINE), false;
      if (a.Z.close()) returnfalse;
      if ((0, r.kK)(e.target)) {
        let t = (0, l.J5)(e.target);
        if (null == t ? true : t.hasSubscribers(c.CkL.POPOUT_CLOSE)) return t.dispatch(c.CkL.POPOUT_CLOSE), false
      }
      if (o.S.hasSubscribers(c.CkL.MODAL_CLOSE)) return o.S.dispatch(c.CkL.MODAL_CLOSE), false;
      o.S.dispatch(c.CkL.LAYER_POP_ESCAPE_KEY)
    }
  }
}, Chunk547420.ZP)