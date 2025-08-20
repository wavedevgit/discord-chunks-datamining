/** Chunk was on 26434 **/
/** chunk id: 504733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk739566 = require("./739566.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981791 = require("./981791.js"),
  Chunk583535 = require("./583535.js");

function u(e) {
  let {
    message: t,
    channel: n,
    compact: u
  } = e, d = (0, l.ZP)(t), p = t.application, m = (0, o.l)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(a.Z, {
    iconNode: (0, r.jsx)(i.Prq, {
      size: "md",
      color: "currentColor",
      className: c.ticketIcon
    }),
    timestamp: t.timestamp,
    compact: u,
    children: (0, s.A)({
      application: p,
      username: d.nick,
      usernameHook: m(d)
    })
  })
}