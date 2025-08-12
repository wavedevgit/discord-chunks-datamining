/** Chunk was on 67544 **/
/** chunk id: 303582, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk763283 = require("./763283.jsx"),
  Chunk772341 = require("./772341.js");

function a(e) {
  let {
    name: t,
    description: n,
    pointsDescription: a
  } = e;
  return (0, r.jsxs)("div", {
    className: o.tooltipContent,
    children: [(0, r.jsx)(s.Z, {
      variant: "text-md/normal",
      className: o.name,
      color: "clicker-game-brand",
      children: t
    }), (0, r.jsx)(s.Z, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: n
    }), null != a ? (0, r.jsx)(s.Z, {
      variant: "text-sm/normal",
      className: o.pointsDescription,
      children: a
    }) : null]
  })
}