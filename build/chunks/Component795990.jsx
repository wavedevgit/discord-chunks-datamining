/** Chunk was on 11080 **/
/** chunk id: 795990, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk810473 = require("./810473.js"),
  Chunk299560 = require("./299560.jsx"),
  Chunk247397 = require("./247397.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk739854 = require("./739854.js");

function f() {
  let {
    trackUserProfileAction: e,
    trackUserProfileEditAction: t
  } = (0, Chunk785717.KZ)(), n = Chunk473749.useRef(false), f = (0, Chunk810473.Z)(), g = Chunk473749.useMemo(() => {
    let e = new Set(f);
    return Chunk247397.rR.filter(t => e.has(t))
  }, [f]);
  return Chunk473749.useEffect(() => {
    require.current || (module({
      action: "VIEW_WIDGETS_EMPTY_STATE"
    }), require.current = true)
  }, [module]), (0, Chunk54381.jsxs)("div", {
    className: Chunk739854.empty,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk739854.textContainer,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/medium",
        color: "header-primary",
        children: Chunk388032.intl.string(Chunk388032.t["oqalC+"])
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.O9SQ1c)
      })]
    }), (0, Chunk54381.jsx)("ul", {
      className: Chunk739854.widgetGrid,
      "aria-label": Chunk388032.intl.string(Chunk388032.t["+EIBSA"]),
      children: g.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(c.Z, {
          widgetType: e,
          size: "small",
          trackUserProfileEditAction: t
        })
      }, e))
    })]
  })
}