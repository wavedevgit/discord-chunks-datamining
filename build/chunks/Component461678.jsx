/** Chunk was on 97492 **/
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
    navId: h,
    label: b,
    location: g,
    includeGuildMute: m
  } = e, A = (0, s.b)(t), y = (0, o.A0)(t), O = (0, l.bG)([f.A], () => f.A.getGuild(t.guild_id)), j = (0, c.A)(O), v = (0, u.os)("ChannelNotificationSettingsPopoutMenu") && d.B4.has(t.type);
  return (0, r.jsxs)(i.W1t, {
    navId: h,
    onClose: n,
    "aria-label": b,
    onSelect: p,
    children: [(0, r.jsx)(i.rXV, {
      children: (0, a.Ay)(t, g)
    }), m ? (0, r.jsx)(i.rXV, {
      children: j
    }) : null, v ? y : (0, r.jsx)(i.rXV, {
      children: A
    })]
  })
}