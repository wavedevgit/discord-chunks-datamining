/** Chunk was on 91173 **/
/** chunk id: 673052, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk739566 = require("./739566.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk427070 = require("./427070.js");

function d(e) {
  let {
    message: t,
    channel: n,
    compact: d
  } = e, p = (0, o.ZP)(t), m = (0, a.l)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  })(p), f = (0, l.q)(t.applicationId);
  if (null == f) return null;
  let g = c.intl.format(c.t.mAtJTE, {
    username: t.author.username,
    usernameHook: m,
    applicationName: f.name,
    applicationNameHook: () => (0, r.jsx)(i.Text, {
      className: u.applicationName,
      variant: "text-md/semibold",
      color: "header-primary",
      children: f.name
    }, f.name),
    helpdeskArticle: "#"
  });
  return (0, r.jsx)(s.Z, {
    iconNode: (0, r.jsx)(i.DuK, {
      size: "sm",
      color: i.TVs.colors.STATUS_POSITIVE
    }),
    timestamp: t.timestamp,
    compact: d,
    contentClassName: u.systemMessage,
    children: g
  })
}