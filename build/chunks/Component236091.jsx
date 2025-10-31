/** Chunk was on 88647 **/
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
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk363862 = require("./363862.js");
let g = e => {
  let {
    channelId: t
  } = e, n = (0, d.Go)(), g = p.Z.isDecoupledGameClippingEnabled();
  return (0, i.e7)([u.Z, s.Z, p.Z, c.ZP], () => {
    var e;
    if (null == t) returnfalse;
    let r = u.Z.getCurrentUserActiveStream(),
      i = null == (e = c.ZP.getVisibleGame()) ? true : e.windowHandle;
    return null != r && !!p.Z.getSettings().clipsEnabled && !!n || null != i && !!p.Z.getSettings().decoupledClipsEnabled && !!g || s.Z.getParticipants(t).some(e => e.type === f.fO.USER && p.Z.isClipsEnabledForUser(e.user.id))
  }) ? (0, r.jsx)(a.u, {
    text: h.intl.string(h.t.DJXW3G),
    children: (0, r.jsxs)("div", {
      className: m.clipsEnabledIndicator,
      children: [(0, r.jsx)(o.G2e, {
        icon: o.AlX,
        shape: o.Dv2.ROUND_LEFT,
        color: l.Z.unsafe_rawColors.PRIMARY_500.css,
        className: m.clipBadgeIcon
      }), (0, r.jsx)(o.IGR, {
        text: h.intl.string(h.t.pCMkDb),
        shape: o.Dv2.ROUND_RIGHT,
        color: l.Z.unsafe_rawColors.PRIMARY_500.css,
        className: m.clipBadgeText
      })]
    })
  }) : null
}