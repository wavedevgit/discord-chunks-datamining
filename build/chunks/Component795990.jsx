/** Chunk was on 90882 **/
/** chunk id: 795990, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk500143 = require("./500143.js"),
  Chunk299560 = require("./299560.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk875699 = require("./875699.js");

function d() {
  let {
    trackUserProfileAction: e,
    trackUserProfileEditAction: t
  } = (0, a.KZ)(), n = i.useRef(false), d = (0, o.Z)({
    location: "UserProfileModalV2WidgetsEmptyState"
  });
  return i.useEffect(() => {
    n.current || (e({
      action: "VIEW_WIDGETS_EMPTY_STATE"
    }), n.current = true)
  }, [e]), (0, r.jsxs)("div", {
    className: u.empty,
    children: [(0, r.jsxs)("div", {
      className: u.textContainer,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-md/medium",
        color: "text-strong",
        children: s.intl.string(s.t["oqalC+"])
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: s.intl.string(s.t.O9SQ1c)
      })]
    }), (0, r.jsx)("ul", {
      className: u.widgetGrid,
      "aria-label": s.intl.string(s.t["+EIBSA"]),
      children: d.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(c.Z, {
          widget: e,
          size: "small",
          trackUserProfileEditAction: t
        })
      }, e.getUniqueKey()))
    })]
  })
}