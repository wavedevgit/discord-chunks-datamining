/** Chunk was on web.js **/
/** chunk id: 195387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk549879 = require("./549879.js"),
  Chunk906732 = require("./906732.js"),
  Chunk189432 = require("./189432.js"),
  Chunk189357 = require("./189357.js"),
  Chunk434404 = require("./434404.js"),
  Chunk359110 = require("./359110.js"),
  Chunk314897 = require("./314897.js"),
  Chunk944486 = require("./944486.js"),
  Chunk475413 = require("./475413.js"),
  Chunk176505 = require("./176505.js"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.js");

function E(e) {
  let {
    user: t,
    guildId: n,
    channelId: E,
    onClose: b,
    appContext: y,
    shouldShowTooltip: O
  } = e, {
    newestAnalyticsLocation: v
  } = (0, s.ZP)(), I = (0, i.e7)([f.default], () => f.default.getId() === (null == t ? true : t.id)), T = (0, c.m)(null != n ? n : null), S = (0, i.e7)([_.Z], () => null != E ? E : _.Z.getChannelId(n, true), [E, n]);
  return null == n || !T || I ? null : <p.oY action={"PRESS_MOD_VIEW"} icon={o.HI3} shouldShowTooltip={O} tooltipText={g.intl.string(g.t.kj3tz8)} onClick={() => {
      u.Z.close(), null != S && (0, d.Kh)(S), (0, a.i)(y), (0, l.r)(n, t.id, null != S ? S : h.oC.MEMBER_SAFETY, {
        modViewPanel: m.k.INFO,
        sourceLocation: v
      }), null == b || b()
    }} />
}