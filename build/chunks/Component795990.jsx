/** Chunk was on 15582 **/
/** chunk id: 795990, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g() {
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
      children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: Chunk388032.intl.string(Chunk388032.t["oqalC+"])
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.O9SQ1c)
      })]
    }), (0, Chunk951288.jsx)("ul", {
      className: Chunk739854.widgetGrid,
      "aria-label": Chunk388032.intl.string(Chunk388032.t["+EIBSA"]),
      children: require.map(t => (0, r.jsx)("li", {
        children: (0, r.jsx)(c.Z, {
          widgetType: t,
          size: "small",
          trackUserProfileEditAction: e
        })
      }, t))
    })]
  })
}