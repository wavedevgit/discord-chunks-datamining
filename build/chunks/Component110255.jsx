/** Chunk was on 21087 **/
/** chunk id: 110255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk218035 = require("./218035.jsx"),
  Chunk775666 = require("./775666.jsx"),
  Chunk858822 = require("./858822.jsx"),
  Chunk423589 = require("./423589.js"),
  Chunk131704 = require("./131704.js"),
  Chunk430824 = require("./430824.js");

function p(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: p,
    navId: f,
    label: g,
    location: m,
    includeGuildMute: b
  } = e, y = (0, s.c)(t), x = (0, o.EQ)(t), j = (0, i.e7)([h.Z], () => h.Z.getGuild(t.guild_id)), _ = (0, c.Z)(j), O = (0, u.Mn)("ChannelNotificationSettingsPopoutMenu") && d.$N.has(t.type);
  return (0, r.jsxs)(l.v2r, {
    navId: f,
    onClose: n,
    "aria-label": g,
    onSelect: p,
    children: [(0, r.jsx)(l.kSQ, {
      children: (0, a.ZP)(t, m)
    }), b ? (0, r.jsx)(l.kSQ, {
      children: _
    }) : null, O ? x : (0, r.jsx)(l.kSQ, {
      children: y
    })]
  })
}