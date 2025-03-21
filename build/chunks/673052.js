/** Chunk was on 8473 **/
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(481060),
  a = n(835473),
  o = n(739566),
  l = n(942951),
  s = n(834129),
  c = n(388032),
  u = n(18461);

function d(e) {
  let {
    message: t,
    channel: n,
    compact: d
  } = e, p = (0, o.ZP)(t), m = (0, l.l)({
    user: t.author,
    channelId: n.id,
    guildId: n.guild_id,
    messageId: t.id
  })(p), f = (0, a.q)(t.applicationId);
  if (null == f) return null;
  let h = c.NW.format(c.t.mAtJTE, {
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
    children: h
  })
}