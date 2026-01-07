/** Chunk was on 60646 **/
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
  Chunk875699 = require("./875699.js");

function f() {
  let {
    trackUserProfileAction: e,
    trackUserProfileEditAction: t
  } = (0, l.KZ)(), n = i.useRef(false), f = (0, o.Z)(), g = i.useMemo(() => {
    let e = new Set(f);
    return s.rR.filter(t => e.has(t))
  }, [f]);
  return i.useEffect(() => {
    n.current || (e({
      action: "VIEW_WIDGETS_EMPTY_STATE"
    }), n.current = true)
  }, [e]), (0, r.jsxs)("div", {
    className: d.empty,
    children: [(0, r.jsxs)("div", {
      className: d.textContainer,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-md/medium",
        color: "text-strong",
        children: u.intl.string(u.t["oqalC+"])
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: u.intl.string(u.t.O9SQ1c)
      })]
    }), (0, r.jsx)("ul", {
      className: d.widgetGrid,
      "aria-label": u.intl.string(u.t["+EIBSA"]),
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