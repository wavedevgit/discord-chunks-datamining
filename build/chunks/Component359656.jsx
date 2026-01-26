/** Chunk was on 97887 **/
/** chunk id: 359656, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
    trackUserProfileAction: p
  } = (0, o.NJ)(), h = l.useId(), [f, g] = l.useState(false), m = f ? a.abt : a._BQ;
  return (0, r.jsxs)("section", {
    className: c.uW,
    children: [(0, r.jsxs)(a.DUT, {
      className: s()(c.wx, c.vk),
      "aria-controls": h,
      "aria-expanded": f,
      onClick: () => {
        g(!f), f || (p({
          action: "PRESS_SECTION",
          section: t
        }), null == d || d())
      },
      children: [(0, r.jsxs)(a.Heading, {
        variant: "text-sm/medium",
        color: "text-default",
        children: [n, " — ", i.length]
      }), (0, r.jsx)(m, {
        size: "md"
      })]
    }), i.length > 0 && (0, r.jsx)("ul", {
      id: h,
      hidden: !f,
      className: s()(c.p_, u),
      children: i
    })]
  })
}