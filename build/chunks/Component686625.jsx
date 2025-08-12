/** Chunk was on 21087 **/
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
  Chunk42886 = require("./42886.js");

function u(e) {
  let {
    section: t,
    header: n,
    items: l,
    listClassName: u,
    onExpand: d
  } = e, {
    trackUserProfileAction: h
  } = (0, o.KZ)(), p = i.useId(), [f, g] = i.useState(false), m = f ? s.CJ0 : s.Fbu;
  return (0, r.jsxs)("section", {
    className: c.section,
    children: [(0, r.jsxs)(s.P3F, {
      className: a()(c.header, c.clickable),
      "aria-controls": p,
      "aria-expanded": f,
      onClick: () => {
        g(!f), f || (h({
          action: "PRESS_SECTION",
          section: t
        }), null == d || d())
      },
      children: [(0, r.jsxs)(s.X6q, {
        variant: "text-sm/medium",
        color: "text-default",
        children: [n, " — ", l.length]
      }), (0, r.jsx)(m, {
        size: "md"
      })]
    }), l.length > 0 && (0, r.jsx)("ul", {
      id: p,
      hidden: !f,
      className: a()(c.list, u),
      children: l
    })]
  })
}