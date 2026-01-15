/** Chunk was on web.js **/
/** chunk id: 195387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk189432 = require("./189432.js"),
  Chunk189357 = require("./189357.js"),
  Chunk434404 = require("./434404.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk887413 = require("./887413.jsx"),
  Chunk359110 = require("./359110.js"),
  Chunk314897 = require("./314897.js"),
  Chunk944486 = require("./944486.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.jsx");

function y(e) {
  let {
    user: t,
    guildId: n,
    channelId: y,
    onClose: O,
    appContext: v
  } = e, {
    newestAnalyticsLocation: S
  } = (0, o.ZP)(), I = (0, u.Aq)(), T = (0, i.e7)([p.default], () => p.default.getId() === (null == t ? true : t.id)), C = (0, l.m)(null != n ? n : null), A = (0, i.e7)([_.Z], () => null != y ? y : _.Z.getChannelId(n, true), [y, n]);
  return null == n || !C || T ? null : (0, r.jsx)(h.oY, {
    action: "PRESS_MOD_VIEW",
    icon: a.HI3,
    tooltipText: b.intl.string(b.t.kj3tz2),
    onClick: () => {
      c.Z.close(), null != A && (0, f.Kh)(A), (0, d.i)(v), I.dispatch(m.CkL.POPOUT_CLOSE), (0, s.r)(n, t.id, null != A ? A : g.oC.MEMBER_SAFETY, {
        modViewPanel: E.k.INFO,
        sourceLocation: S
      }), null == O || O()
    }
  })
}