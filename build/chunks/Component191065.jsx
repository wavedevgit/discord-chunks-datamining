/** Chunk was on 20725 **/
/** chunk id: 191065, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk170985 = require("./170985.js");
let o = Chunk64700.forwardRef(function(e, t) {
  let {
    isInventory: n,
    style: r,
    children: o
  } = e;
  return (0, l.jsxs)("div", {
    ref: t,
    className: a.Q,
    style: function(e) {
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
    }({
      marginTop: 8 * !!n
    }, r),
    children: [(0, l.jsx)(i.mir, {
      size: "custom",
      className: a.G,
      height: n ? 16 : 12,
      width: n ? 16 : 12,
      color: n ? s.A.colors.TEXT_MUTED.css : s.A.colors.WHITE.css
    }), (0, l.jsx)(i.Text, {
      color: n ? "text-muted" : "always-white",
      variant: n ? "text-xs/normal" : "text-xxs/normal",
      children: o
    })]
  })
})