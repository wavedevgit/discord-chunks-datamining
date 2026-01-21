/** Chunk was on 82124 **/
/** chunk id: 686625, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk117170 = require("./117170.js");

function u(e) {
  let {
    section: t,
    header: n,
    items: l,
    listClassName: u,
    onExpand: d
  } = e, {
    trackUserProfileAction: p
  } = (0, s.KZ)(), f = i.useId(), [h, g] = i.useState(false), m = h ? o.CJ0 : o.Fbu;
  return (0, r.jsxs)("section", {
    className: c.section,
    children: [(0, r.jsxs)(o.P3F, {
      className: a()(c.header, c.clickable),
      "aria-controls": f,
      "aria-expanded": h,
      onClick: () => {
        g(!h), h || (p({
          action: "PRESS_SECTION",
          section: t
        }), null == d || d())
      },
      children: [(0, r.jsxs)(o.Heading, {
        variant: "text-sm/medium",
        color: "text-default",
        children: [n, " — ", l.length]
      }), (0, r.jsx)(m, {
        size: "md"
      })]
    }), l.length > 0 && (0, r.jsx)("ul", {
      id: f,
      hidden: !h,
      className: a()(c.list, u),
      children: l
    })]
  })
}