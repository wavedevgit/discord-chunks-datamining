/** Chunk was on 34740 **/
/** chunk id: 236091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
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
  Chunk363862 = require("./363862.js");
let g = e => {
  let {
    channelId: t
  } = e;
  return (0, r.e7)([u.Z, s.Z, d.Z, c.ZP], () => {
    var e;
    if (null == t) returnfalse;
    let n = u.Z.getCurrentUserActiveStream(),
      i = null == (e = c.ZP.getVisibleGame()) ? true : e.windowHandle;
    return !!(null != n && (0, p.LI)() || null != i && (0, p.CY)()) || s.Z.getParticipants(t).some(e => e.type === h.fO.USER && d.Z.isClipsEnabledForUser(e.user.id))
  }) ? (0, i.jsx)(a.u, {
    text: f.intl.string(f.t.DJXW3G),
    children: (0, i.jsxs)("div", {
      className: m.clipsEnabledIndicator,
      children: [(0, i.jsx)(o.G2e, {
        icon: o.AlX,
        shape: o.Dv2.ROUND_LEFT,
        color: l.Z.unsafe_rawColors.PRIMARY_500.css,
        className: m.clipBadgeIcon
      }), (0, i.jsx)(o.IGR, {
        text: f.intl.string(f.t.pCMkDb),
        shape: o.Dv2.ROUND_RIGHT,
        color: l.Z.unsafe_rawColors.PRIMARY_500.css,
        className: m.clipBadgeText
      })]
    })
  }) : null
}