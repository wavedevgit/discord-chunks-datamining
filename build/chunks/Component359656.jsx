/** Chunk was on 97492 **/
/** chunk id: 359656, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk752458 = require("./752458.js");

function u(e) {
  let {
    section: t,
    header: n,
    items: i,
    listClassName: u,
    onExpand: d
  } = e, {
    trackUserProfileAction: f
  } = (0, o.NJ)(), p = l.useId(), [h, b] = l.useState(false), g = h ? s.abt : s._BQ;
  return (0, r.jsxs)("section", {
    className: c.uW,
    children: [(0, r.jsxs)(s.DUT, {
      className: a()(c.wx, c.vk),
      "aria-controls": p,
      "aria-expanded": h,
      onClick: () => {
        b(!h), h || (f({
          action: "PRESS_SECTION",
          section: t
        }), null == d || d())
      },
      children: [(0, r.jsxs)(s.Heading, {
        variant: "text-sm/medium",
        color: "text-default",
        children: [n, " — ", i.length]
      }), (0, r.jsx)(g, {
        size: "md"
      })]
    }), i.length > 0 && (0, r.jsx)("ul", {
      id: p,
      hidden: !h,
      className: a()(c.p_, u),
      children: i
    })]
  })
}