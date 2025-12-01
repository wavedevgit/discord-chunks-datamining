/** Chunk was on web.js **/
/** chunk id: 673052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  } = e, f = (0, o.ZP)(t), p = (0, s.l)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  })(f), _ = (0, a.q)(t.applicationId);
  if (null == _) return null;
  let m = c.intl.format(c.t.mAtJTC, {
    username: t.author.username,
    usernameHook: p,
    applicationName: _.name,
    applicationNameHook: () => (0, r.jsx)(i.Text, {
      className: u.applicationName,
      variant: "text-md/semibold",
      color: "header-primary",
      children: _.name
    }, _.name),
    helpdeskArticle: "#"
  });
  return (0, r.jsx)(l.Z, {
    iconNode: (0, r.jsx)(i.DuK, {
      size: "sm",
      color: i.TVs.colors.STATUS_POSITIVE
    }),
    timestamp: t.timestamp,
    compact: d,
    contentClassName: u.systemMessage,
    children: m
  })
}