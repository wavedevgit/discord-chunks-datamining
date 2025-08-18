/** Chunk was on 64838 **/
/** chunk id: 26650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk882771 = require("./882771.js");
let a = Chunk647438.forwardRef(function(e, t) {
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
    children: [(0, l.jsx)(s.d3s, {
      size: "custom",
      className: o.infoIcon,
      height: n ? 16 : 12,
      width: n ? 16 : 12,
      color: n ? i.Z.TEXT_MUTED : i.Z.WHITE
    }), (0, l.jsx)(s.Text, {
      color: n ? "text-muted" : "always-white",
      variant: n ? "text-xs/normal" : "text-xxs/normal",
      children: a
    })]
  })
})