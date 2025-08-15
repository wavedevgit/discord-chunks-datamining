/** Chunk was on 37447 **/
/** chunk id: 26650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk882771 = require("./882771.js");
let l = Chunk647438.forwardRef(function(e, t) {
  let {
    isInventory: n,
    style: s,
    children: l
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
    }, s),
    children: [(0, r.jsx)(o.d3s, {
      size: "custom",
      className: a.infoIcon,
      height: n ? 16 : 12,
      width: n ? 16 : 12,
      color: n ? i.Z.TEXT_MUTED : i.Z.WHITE
    }), (0, r.jsx)(o.Text, {
      color: n ? "text-muted" : "always-white",
      variant: n ? "text-xs/normal" : "text-xxs/normal",
      children: l
    })]
  })
})