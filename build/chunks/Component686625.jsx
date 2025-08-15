/** Chunk was on 86357 **/
/** chunk id: 686625, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk689315 = require("./689315.js");

function u(e) {
  let {
    section: t,
    header: n,
    items: l,
    listClassName: u,
    onExpand: d
  } = e, {
    trackUserProfileAction: p
  } = (0, s.KZ)(), h = i.useId(), [f, m] = i.useState(false), g = f ? o.CJ0 : o.Fbu;
  return (0, r.jsxs)("section", {
    className: c.section,
    children: [(0, r.jsxs)(o.P3F, {
      className: a()(c.header, c.clickable),
      "aria-controls": h,
      "aria-expanded": f,
      onClick: () => {
        m(!f), f || (p({
          action: "PRESS_SECTION",
          section: t
        }), null == d || d())
      },
      children: [(0, r.jsxs)(o.X6q, {
        variant: "text-sm/medium",
        color: "text-default",
        children: [n, " — ", l.length]
      }), (0, r.jsx)(g, {
        size: "md"
      })]
    }), l.length > 0 && (0, r.jsx)("ul", {
      id: h,
      hidden: !f,
      className: a()(c.list, u),
      children: l
    })]
  })
}