/** Chunk was on 92917 **/
/** chunk id: 724382, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk429913 = require("./429913.js"),
  Chunk763754 = require("./763754.js"),
  Chunk447215 = require("./447215.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk893112 = require("./893112.js");

function d(e) {
  let {
    message: t,
    channel: n,
    compact: d
  } = e, p = (0, a.Ay)(t), m = (0, s.P)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  })(p), f = (0, l.h)(t.applicationId);
  if (null == f) return null;
  let g = c.intl.format(c.t.mAtJTC, {
    username: t.author.username,
    usernameHook: m,
    applicationName: f.name,
    applicationNameHook: () => (0, r.jsx)(i.Text, {
      className: u.S,
      variant: "text-md/semibold",
      color: "text-strong",
      children: f.name
    }, f.name),
    helpdeskArticle: "#"
  });
  return (0, r.jsx)(o.A, {
    iconNode: (0, r.jsx)(i.fNY, {
      size: "sm",
      color: i.LU0.colors.STATUS_POSITIVE
    }),
    timestamp: t.timestamp,
    compact: d,
    contentClassName: u.H,
    children: g
  })
}