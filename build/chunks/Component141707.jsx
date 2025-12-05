/** Chunk was on 35129 **/
/** chunk id: 141707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk302051 = require("./302051.js");
let a = Chunk473749.forwardRef(function(e, t) {
  let {
    isInventory: n,
    style: r,
    children: a
  } = e;
  return (0, l.jsxs)("div", {
    ref: t,
    className: o.desktopTooltip,
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
    children: [(0, l.jsx)(i.d3s, {
      size: "custom",
      className: o.infoIcon,
      height: n ? 16 : 12,
      width: n ? 16 : 12,
      color: n ? s.Z.colors.TEXT_MUTED.css : s.Z.colors.WHITE.css
    }), (0, l.jsx)(i.Text, {
      color: n ? "text-muted" : "always-white",
      variant: n ? "text-xs/normal" : "text-xxs/normal",
      children: a
    })]
  })
})