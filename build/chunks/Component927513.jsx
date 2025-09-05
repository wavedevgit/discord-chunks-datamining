/** Chunk was on web.js **/
/** chunk id: 927513, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk958783 = require("./958783.jsx"),
  Chunk483444 = require("./483444.jsx"),
  Chunk586502 = require("./586502.js"),
  Chunk787528 = require("./787528.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk58858 = require("./58858.js");
let _ = e => {
  let {
    profileBadge: t,
    tenureBadge: n
  } = e, i = (0, c.Z)(), _ = (0, u.J)(n.id, {
    ambient: i
  });
  return (0, r.jsxs)(s.Z, {
    assetComponent: (0, r.jsx)("img", {
      src: _,
      alt: "",
      className: a()(f.badgeImage, {
        [f.ambient]: i
      }),
      height: i ? 80 : true
    }),
    tooltipWordmarkComponent: (0, r.jsx)(l.Z, {
      width: 56,
      className: f.tooltipWordmark
    }),
    children: [(0, r.jsx)(o.X6, {
      variant: "heading-xl/extrabold",
      children: d.intl.string(n.nameUnformatted)
    }), (0, r.jsx)(o.xv, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: f.tooltipDescription,
      children: t.description
    })]
  })
}