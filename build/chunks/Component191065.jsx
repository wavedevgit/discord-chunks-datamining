/** Chunk was on 52390 **/
/** chunk id: 191065, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk170985 = require("./170985.js");
let s = Chunk64700.forwardRef(function(e, t) {
  let {
    isInventory: n,
    style: l,
    children: s
  } = e;
  return (0, r.jsxs)("div", {
    ref: t,
    className: o.Q,
    style: function(e) {
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
      marginTop: 8 * !!n
    }, l),
    children: [(0, r.jsx)(a.mir, {
      size: "custom",
      className: o.G,
      height: n ? 16 : 12,
      width: n ? 16 : 12,
      color: n ? i.A.colors.TEXT_MUTED.css : i.A.colors.WHITE.css
    }), (0, r.jsx)(a.Text, {
      color: n ? "text-muted" : "always-white",
      variant: n ? "text-xs/normal" : "text-xxs/normal",
      children: s
    })]
  })
})