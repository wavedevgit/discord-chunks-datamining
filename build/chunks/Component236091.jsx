/** Chunk was on 5665 **/
/** chunk id: 236091, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk358221 = require("./358221.js"),
  Chunk594190 = require("./594190.js"),
  Chunk199902 = require("./199902.js"),
  Chunk924557 = require("./924557.js"),
  Chunk435064 = require("./435064.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk363862 = require("./363862.js");
let b = e => {
  let {
    className: t,
    channelId: n
  } = e, i = (0, p.Go)(), b = h.Z.isDecoupledGameClippingEnabled();
  return (0, a.e7)([d.Z, c.Z, h.Z, u.ZP], () => {
    var e;
    if (null == n) returnfalse;
    let t = d.Z.getCurrentUserActiveStream(),
      r = null == (e = u.ZP.getVisibleGame()) ? true : e.windowHandle;
    return null != t && !!h.Z.getSettings().clipsEnabled && !!i || null != r && !!h.Z.getSettings().decoupledClipsEnabled && !!b || c.Z.getParticipants(n).some(e => e.type === f.fO.USER && h.Z.isClipsEnabledForUser(e.user.id))
  }) ? (0, r.jsxs)(s.DY3, {
    text: m.intl.string(m.t.DJXW3N),
    color: s.FGA.GREY,
    className: l()(t, g.clipsEnabledIndicator),
    children: [(0, r.jsx)(s.G2e, {
      icon: s.AlX,
      shape: s.Dv2.ROUND_LEFT,
      color: o.Z.unsafe_rawColors.PRIMARY_500.css,
      className: g.clipBadgeIcon
    }), (0, r.jsx)(s.IGR, {
      text: m.intl.string(m.t.pCMkDQ),
      shape: s.Dv2.ROUND_RIGHT,
      color: o.Z.unsafe_rawColors.PRIMARY_500.css,
      className: g.clipBadgeText
    })]
  }) : null
}