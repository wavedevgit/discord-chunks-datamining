/** Chunk was on web.js **/
/** chunk id: 927513, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk958783 = require("./958783.jsx"),
  Chunk483444 = require("./483444.jsx"),
  Chunk787528 = require("./787528.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk139180 = require("./139180.js");
let u = e => {
  let {
    profileBadge: t,
    tenureBadge: n
  } = e, u = (0, s.J)(n.id);
  return (0, r.jsxs)(a.Z, {
    assetComponent: (0, r.jsx)("img", {
      src: u,
      alt: ""
    }),
    tooltipWordmarkComponent: (0, r.jsx)(o.Z, {
      width: 56,
      className: c.tooltipWordmark
    }),
    children: [(0, r.jsx)(i.X6q, {
      variant: "heading-xl/extrabold",
      children: l.intl.string(n.nameUnformatted)
    }), (0, r.jsx)(i.xvT, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: c.tooltipDescription,
      children: t.description
    })]
  })
}