/** Chunk was on 21738 **/
/** chunk id: 636781, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk92674 = require("./92674.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk450510 = require("./450510.js"),
  Chunk808728 = require("./808728.js"),
  Chunk576705 = require("./576705.js"),
  Chunk606748 = require("./606748.jsx"),
  Chunk215307 = require("./215307.jsx"),
  Chunk48686 = require("./48686.js"),
  Chunk652215 = require("./652215.js");

function f(e) {
  let {
    channel: t,
    guild: n
  } = e, o = (0, l.bG)([s.HP], () => s.HP.hasHotspot(s._2.HUB_STUDY_ROOM_NOTICE)), c = (0, p.Q)(t.guild_id), h = (0, a.zhh)({
    maxHeight: 300 * !c,
    overflow: "hidden",
    delay: 400
  });
  return (0, r.jsx)(i.animated.div, {
    style: h,
    children: o ? (0, r.jsx)(u.A, {
      channel: t,
      guild: n
    }) : (0, r.jsx)(d.A, {
      name: "\uD83D\uDCDA☕ ".concat(t.name),
      channel: t
    })
  })
}
let g = function(e) {
  let {
    guild: t
  } = e, n = (0, l.bG)([o.Ay], () => o.Ay.getChannels(t.id)[o.vM][0]), i = (0, l.bG)([c.A], () => null != n && c.A.can(h.xBc.CONNECT, n.channel));
  return t.features.has(h.GuildFeatures.HUB) && null != n && i ? (0, r.jsx)(f, {
    channel: n.channel,
    guild: t
  }) : null
}