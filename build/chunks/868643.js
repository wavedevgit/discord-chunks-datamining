/** Chunk was on 58593 **/
n.d(t, {
  a: () => m,
  h: () => p
}), n(997841);
var a = n(73800),
  r = n(442837),
  o = n(430198),
  i = n(592125),
  c = n(430824),
  l = n(630388),
  s = n(981631);
let u = s.iLy.CROSSPOSTED | s.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | s.iLy.GUILD_FEED_HIDDEN | s.iLy.HAS_SNAPSHOT | s.iLy.HAS_THREAD | s.iLy.IS_CROSSPOST | s.iLy.IS_VOICE_MESSAGE | s.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | s.iLy.SUPPRESS_EMBEDS | s.iLy.SUPPRESS_NOTIFICATIONS | s.iLy.URGENT | s.iLy.IS_COMPONENTS_V2;

function d(e) {
  return e.state !== s.yb.SEND_FAILED && !!s.V$x.FORWARDABLE.has(e.type) && null == e.poll && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, l.Ge)(e.flags, u) && !0
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
    return !!(null != a && (null == (n = c.Z.getGuild(a)) ? void 0 : n.hasFeature(s.oNc.FORWARDING_DISABLED))) || null != a && o.Z.isChannelOrThreadParentGated(a, e.channel_id)
  });
  return a.useMemo(() => !t && null != e && d(e), [t, e])
}