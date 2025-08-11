/** Chunk was on web.js **/
/** chunk id: 927513, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk958783 = require("./958783.js"),
  Chunk483444 = require("./483444.jsx"),
  Chunk586502 = require("./586502.js"),
  Chunk787528 = require("./787528.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk381054 = require("./381054.js");
let _ = e => {
  let {
    profileBadge: t,
    tenureBadge: n
  } = e, i = (0, c.Z)(), _ = (0, u.J)(n.id, {
    ambient: i
  });
  return <s.Z assetComponent={(0, r.jsx)("img", {
      src: _,
      alt: "",
      className: o()(f.badgeImage, {
        [f.ambient]: i
      }),
      height: i ? 80 : true
    })} tooltipWordmarkComponent={(0, r.jsx)(l.Z, {
      width: 56,
      className: f.tooltipWordmark
    })}>{<a.X6 variant={"heading-xl/extrabold"}>{d.intl.string(n.nameUnformatted)}</a.X6>}{<a.xv variant={"text-xs/normal"} color={"text-muted"} className={f.tooltipDescription}>{t.description}</a.xv>}</s.Z>
}