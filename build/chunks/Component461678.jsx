/** Chunk was on 61344 **/
/** chunk id: 461678, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let {
    channel: t,
    closePopout: n,
    onSelect: p,
    navId: f,
    label: m,
    location: g,
    includeGuildMute: A
  } = e, b = (0, s.b)(t), _ = (0, o.A0)(t), y = (0, r.bG)([h.A], () => h.A.getGuild(t.guild_id)), v = (0, c.A)(y), E = (0, u.os)("ChannelNotificationSettingsPopoutMenu") && d.B4.has(t.type);
  return (0, l.jsxs)(i.W1t, {
    "data-menu-migrated": true,
    navId: f,
    onClose: n,
    "aria-label": m,
    onSelect: p,
    children: [(0, l.jsx)(i.rXV, {
      children: (0, a.Ay)(t, g)
    }), A ? (0, l.jsx)(i.rXV, {
      children: v
    }) : null, E ? _ : (0, l.jsx)(i.rXV, {
      children: b
    })]
  })
}