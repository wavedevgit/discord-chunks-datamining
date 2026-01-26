/** Chunk was on 97887 **/
/** chunk id: 461678, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk995102 = require("./995102.jsx"),
  Chunk288104 = require("./288104.jsx"),
  Chunk661504 = require("./661504.jsx"),
  Chunk507238 = require("./507238.jsx"),
  Chunk769591 = require("./769591.js"),
  Chunk95701 = require("./95701.js"),
  Chunk71393 = require("./71393.js");

function h(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: h,
    navId: f,
    label: g,
    location: m,
    includeGuildMute: b
  } = e, A = (0, a.b)(t), y = (0, o.A0)(t), _ = (0, l.bG)([p.A], () => p.A.getGuild(t.guild_id)), O = (0, c.A)(_), j = (0, u.os)("ChannelNotificationSettingsPopoutMenu") && d.B4.has(t.type);
  return (0, r.jsxs)(i.W1t, {
    "data-menu-migration-ready": true,
    navId: f,
    onClose: n,
    "aria-label": g,
    onSelect: h,
    children: [(0, r.jsx)(i.rXV, {
      children: (0, s.Ay)(t, m)
    }), b ? (0, r.jsx)(i.rXV, {
      children: O
    }) : null, j ? y : (0, r.jsx)(i.rXV, {
      children: A
    })]
  })
}