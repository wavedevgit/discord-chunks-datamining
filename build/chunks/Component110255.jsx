/** Chunk was on 82124 **/
/** chunk id: 110255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk218035 = require("./218035.jsx"),
  Chunk775666 = require("./775666.jsx"),
  Chunk858822 = require("./858822.jsx"),
  Chunk423589 = require("./423589.js"),
  Chunk131704 = require("./131704.js"),
  Chunk430824 = require("./430824.js");

function f(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: f,
    navId: h,
    label: g,
    location: m,
    includeGuildMute: b
  } = e, y = (0, o.c)(t), v = (0, s.EQ)(t), O = (0, i.e7)([p.Z], () => p.Z.getGuild(t.guild_id)), j = (0, c.Z)(O), x = (0, u.Mn)("ChannelNotificationSettingsPopoutMenu") && d.$N.has(t.type);
  return (0, r.jsxs)(l.v2r, {
    navId: h,
    onClose: n,
    "aria-label": g,
    onSelect: f,
    children: [(0, r.jsx)(l.kSQ, {
      children: (0, a.ZP)(t, m)
    }), b ? (0, r.jsx)(l.kSQ, {
      children: j
    }) : null, x ? v : (0, r.jsx)(l.kSQ, {
      children: y
    })]
  })
}