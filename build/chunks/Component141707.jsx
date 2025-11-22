/** Chunk was on 35129 **/
/** chunk id: 141707, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk302051 = require("./302051.js");
let o = Chunk473749.forwardRef(function(e, t) {
  let {
    isInventory: n,
    style: l,
    children: o
  } = e;
  return (0, r.jsxs)("div", {
    ref: t,
    className: a.desktopTooltip,
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
    children: [(0, r.jsx)(s.d3s, {
      size: "custom",
      className: a.infoIcon,
      height: n ? 16 : 12,
      width: n ? 16 : 12,
      color: n ? i.Z.TEXT_MUTED : i.Z.WHITE
    }), (0, r.jsx)(s.Text, {
      color: n ? "text-muted" : "always-white",
      variant: n ? "text-xs/normal" : "text-xxs/normal",
      children: o
    })]
  })
})