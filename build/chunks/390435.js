/** Chunk was on 77870 **/
/** chunk id: 390435, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => u
});
var Chunk621466 = require("./621466.js"),
  Chunk397927 = require("./397927.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk712687 = require("./712687.js"),
  Chunk203982 = require("./203982.js"),
  Chunk406975 = require("./406975.js"),
  Chunk652215 = require("./652215.js");
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
      if ((0, l.ny_)()) returnfalse;
      if (a._.hasSubscribers(c.jej.CALL_DECLINE)) return a._.dispatch(c.jej.CALL_DECLINE), false;
      if (s.A.close()) returnfalse;
      if ((0, r.vq)(e.target)) {
        let t = (0, i.mU)(e.target);
        if (null == t ? true : t.hasSubscribers(c.jej.POPOUT_CLOSE)) return t.dispatch(c.jej.POPOUT_CLOSE), false
      }
      if (a._.hasSubscribers(c.jej.MODAL_CLOSE)) return a._.dispatch(c.jej.MODAL_CLOSE), false;
      a._.dispatch(c.jej.LAYER_POP_ESCAPE_KEY)
    }
  }
}, Chunk406975.Ay)