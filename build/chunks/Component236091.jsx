/** Chunk was on web.js **/
/** chunk id: 236091, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk79551 = require("./79551.js");
let g = e => {
  let {
    className: t,
    channelId: n
  } = e, i = (0, f.Go)(), g = _.Z.isDecoupledGameClippingEnabled();
  return (0, a.e7)([d.Z, c.Z, _.Z, u.ZP], () => {
    var e;
    if (null == n) returnfalse;
    let t = d.Z.getCurrentUserActiveStream(),
      r = null == (e = u.ZP.getVisibleGame()) ? true : e.windowHandle;
    return null != t && !!_.Z.getSettings().clipsEnabled && !!i || null != r && !!_.Z.getSettings().decoupledClipsEnabled && !!g || c.Z.getParticipants(n).some(e => e.type === p.fO.USER && _.Z.isClipsEnabledForUser(e.user.id))
  }) ? (0, r.jsxs)(l.DY3, {
    text: h.intl.string(h.t.DJXW3N),
    color: l.FGA.GREY,
    className: o()(t, m.clipsEnabledIndicator),
    children: [(0, r.jsx)(l.G2e, {
      icon: l.AlX,
      shape: l.Dv2.ROUND_LEFT,
      color: s.Z.unsafe_rawColors.PRIMARY_500.css,
      className: m.clipBadgeIcon
    }), (0, r.jsx)(l.IGR, {
      text: h.intl.string(h.t.pCMkDQ),
      shape: l.Dv2.ROUND_RIGHT,
      color: s.Z.unsafe_rawColors.PRIMARY_500.css,
      className: m.clipBadgeText
    })]
  }) : null
}