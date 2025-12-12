/** Chunk was on web.js **/
/** chunk id: 195387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk189432 = require("./189432.js"),
  Chunk189357 = require("./189357.js"),
  Chunk434404 = require("./434404.js"),
  Chunk887413 = require("./887413.jsx"),
  Chunk359110 = require("./359110.js"),
  Chunk314897 = require("./314897.js"),
  Chunk944486 = require("./944486.js"),
  Chunk732380 = require("./732380.jsx"),
  Chunk176505 = require("./176505.js"),
  Chunk50493 = require("./50493.js"),
  Chunk388032 = require("./388032.jsx");

function E(e) {
  let {
    user: t,
    guildId: n,
    channelId: E,
    onClose: b,
    appContext: y
  } = e, {
    newestAnalyticsLocation: O
  } = (0, a.ZP)(), v = (0, i.e7)([f.default], () => f.default.getId() === (null == t ? true : t.id)), S = (0, l.m)(null != n ? n : null), I = (0, i.e7)([p.Z], () => null != E ? E : p.Z.getChannelId(n, true), [E, n]);
  return null == n || !S || v ? null : (0, r.jsx)(_.f6, {
    action: "PRESS_MOD_VIEW",
    icon: o.HI3,
    tooltipText: g.intl.string(g.t.kj3tz2),
    onClick: () => {
      c.Z.close(), null != I && (0, d.Kh)(I), (0, u.i)(y), (0, s.r)(n, t.id, null != I ? I : m.oC.MEMBER_SAFETY, {
        modViewPanel: h.k.INFO,
        sourceLocation: O
      }), null == b || b()
    }
  })
}