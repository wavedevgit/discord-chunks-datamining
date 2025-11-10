/** Chunk was on 30025 **/
/** chunk id: 110255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk218035 = require("./218035.jsx"),
  Chunk775666 = require("./775666.jsx"),
  Chunk858822 = require("./858822.jsx"),
  Chunk423589 = require("./423589.js"),
  Chunk131704 = require("./131704.js"),
  Chunk430824 = require("./430824.js");

function h(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: h,
    navId: f,
    label: g,
    location: m,
    includeGuildMute: b
  } = e, _ = (0, s.c)(t), y = (0, o.EQ)(t), x = (0, i.e7)([p.Z], () => p.Z.getGuild(t.guild_id)), O = (0, c.Z)(x), j = (0, d.Mn)("ChannelNotificationSettingsPopoutMenu") && u.$N.has(t.type);
  return (0, r.jsxs)(l.v2r, {
    navId: f,
    onClose: n,
    "aria-label": g,
    onSelect: h,
    children: [(0, r.jsx)(l.kSQ, {
      children: (0, a.ZP)(t, m)
    }), b ? (0, r.jsx)(l.kSQ, {
      children: O
    }) : null, j ? y : (0, r.jsx)(l.kSQ, {
      children: _
    })]
  })
}