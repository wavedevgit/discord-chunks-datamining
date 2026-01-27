/** Chunk was on 92917 **/
/** chunk id: 446028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk763754 = require("./763754.js"),
  Chunk447215 = require("./447215.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk345981 = require("./345981.js"),
  Chunk657678 = require("./657678.js");

function u(e) {
  let {
    message: t,
    channel: n,
    compact: u
  } = e, d = (0, l.Ay)(t), p = t.application, m = (0, a.P)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(s.A, {
    iconNode: (0, r.jsx)(i.qyI, {
      size: "md",
      color: "currentColor",
      className: c.C
    }),
    timestamp: t.timestamp,
    compact: u,
    children: (0, o.X)({
      application: p,
      username: d.nick,
      usernameHook: m(d)
    })
  })
}