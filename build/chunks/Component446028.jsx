/** Chunk was on web.js **/
/** chunk id: 446028, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  } = e, d = (0, a.Ay)(t), f = t.application, p = (0, s.P)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  });
  return (0, r.jsx)(o.A, {
    iconNode: (0, r.jsx)(i.qyI, {
      size: "md",
      color: "currentColor",
      className: c.C
    }),
    timestamp: t.timestamp,
    compact: u,
    children: (0, l.X)({
      application: f,
      username: d.nick,
      usernameHook: p(d)
    })
  })
}