/** Chunk was on 54844 **/
/** chunk id: 229916, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk778414 = require("./778414.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk641081 = require("./641081.js");
let c = e => {
  let {
    widget: t,
    userId: n
  } = e, c = (0, i.e7)([s.default], () => s.default.getUser(n));
  return null == c ? null : (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsx)(l.Heading, {
      className: d.header,
      variant: "heading-sm/semibold",
      children: o.intl.string(o.t.SpsnDY)
    }), (0, r.jsx)(a.Z, {
      widget: t,
      user: c,
      disableInteraction: true
    })]
  })
}