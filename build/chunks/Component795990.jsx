/** Chunk was on 56848 **/
/** chunk id: 795990, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk810473 = require("./810473.js"),
  Chunk299560 = require("./299560.jsx"),
  Chunk247397 = require("./247397.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk739854 = require("./739854.js");

function f() {
  let {
    trackUserProfileEditAction: e
  } = (0, Chunk785717.KZ)(), t = (0, Chunk810473.Z)(), n = Chunk647438.useMemo(() => {
    let e = new Set(exports);
    return Chunk247397.rR.filter(t => e.has(t))
  }, [exports]);
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk739854.empty,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk739854.textContainer,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: Chunk388032.intl.string(Chunk388032.t.oqalCw)
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.O9SQ1d)
      })]
    }), (0, Chunk951288.jsx)("ul", {
      className: Chunk739854.widgetGrid,
      "aria-label": Chunk388032.intl.string(Chunk388032.t["+EIBSE"]),
      children: require.map(t => (0, r.jsx)("li", {
        children: (0, r.jsx)(o.Z, {
          widgetType: t,
          size: "small",
          trackUserProfileEditAction: e
        })
      }, t))
    })]
  })
}