/** Chunk was on 54844 **/
/** chunk id: 229916, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk778414 = require("./778414.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk514953 = require("./514953.js");
let d = e => {
  let {
    widget: t,
    userId: n
  } = e, d = (0, i.e7)([s.default], () => s.default.getUser(n));
  return null == d ? null : (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsx)(l.Heading, {
      className: c.header,
      variant: "heading-sm/semibold",
      children: o.intl.string(o.t.SpsnDY)
    }), (0, r.jsx)(a.Z, {
      widget: t,
      user: d,
      disableInteraction: true
    })]
  })
}