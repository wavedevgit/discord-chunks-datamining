/** Chunk was on 81985 **/
/** chunk id: 236091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk358221 = require("./358221.js"),
  Chunk594190 = require("./594190.js"),
  Chunk199902 = require("./199902.js"),
  Chunk435064 = require("./435064.js"),
  Chunk341569 = require("./341569.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk339012 = require("./339012.js");
let m = e => {
  let {
    channelId: t
  } = e;
  return (0, i.e7)([u.Z, s.Z, d.Z, c.ZP], () => {
    var e;
    if (null == t) returnfalse;
    let n = u.Z.getCurrentUserActiveStream(),
      r = null == (e = c.ZP.getVisibleGame()) ? true : e.windowHandle;
    return !!(null != n && (0, p.LI)() || null != r && (0, p.CY)()) || s.Z.getParticipants(t).some(e => e.type === f.fO.USER && d.Z.isClipsEnabledForUser(e.user.id))
  }) ? (0, r.jsx)(a.u, {
    text: h.intl.string(h.t.DJXW3G),
    children: (0, r.jsxs)("div", {
      className: g.clipsEnabledIndicator,
      children: [(0, r.jsx)(o.G2e, {
        icon: o.AlX,
        shape: o.Dv2.ROUND_LEFT,
        color: l.Z.unsafe_rawColors.PRIMARY_500.css,
        className: g.clipBadgeIcon
      }), (0, r.jsx)(o.IGR, {
        text: h.intl.string(h.t.pCMkDb),
        shape: o.Dv2.ROUND_RIGHT,
        color: l.Z.unsafe_rawColors.PRIMARY_500.css,
        className: g.clipBadgeText
      })]
    })
  }) : null
}