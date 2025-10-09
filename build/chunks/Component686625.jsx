/** Chunk was on 91053 **/
/** chunk id: 686625, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk689315 = require("./689315.js");

function d(e) {
  let {
    section: t,
    header: n,
    items: l,
    listClassName: d,
    onExpand: u
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
        }), null == u || u())
      },
      children: [(0, r.jsxs)(s.Heading, {
        variant: "text-sm/medium",
        color: "text-default",
        children: [n, " — ", l.length]
      }), (0, r.jsx)(m, {
        size: "md"
      })]
    }), l.length > 0 && (0, r.jsx)("ul", {
      id: p,
      hidden: !f,
      className: a()(c.list, d),
      children: l
    })]
  })
}