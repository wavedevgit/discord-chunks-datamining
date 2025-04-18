/** Chunk was on 58593 **/
n.d(t, {
  a: () => m,
  h: () => p
}), n(997841);
var a = n(192379),
  r = n(442837),
  o = n(430198),
  i = n(592125),
  c = n(430824),
  s = n(630388),
  l = n(981631);
let u = l.iLy.CROSSPOSTED | l.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | l.iLy.GUILD_FEED_HIDDEN | l.iLy.HAS_SNAPSHOT | l.iLy.HAS_THREAD | l.iLy.IS_CROSSPOST | l.iLy.IS_VOICE_MESSAGE | l.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | l.iLy.SUPPRESS_EMBEDS | l.iLy.SUPPRESS_NOTIFICATIONS | l.iLy.URGENT | l.iLy.IS_COMPONENTS_V2;

function d(e) {
  return e.state !== l.yb.SEND_FAILED && !!l.V$x.FORWARDABLE.has(e.type) && null == e.poll && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, s.Ge)(e.flags, u) && !0
}

function p(e) {
  var t;
  if (!d(e)) return !1;
  let n = null == (t = i.Z.getChannel(e.channel_id)) ? void 0 : t.guild_id;
  return !(null != n && o.Z.isChannelOrThreadParentGated(n, e.channel_id))
}

function m(e) {
  let t = (0, r.e7)([c.Z, o.Z, i.Z], () => {
    var t, n;
    if (null == e) return !0;
    let a = null == (t = i.Z.getChannel(e.channel_id)) ? void 0 : t.guild_id;
    return !!(null != a && (null == (n = c.Z.getGuild(a)) ? void 0 : n.hasFeature(l.oNc.FORWARDING_DISABLED))) || null != a && o.Z.isChannelOrThreadParentGated(a, e.channel_id)
  });
  return a.useMemo(() => !t && null != e && d(e), [t, e])
}