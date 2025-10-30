/** Chunk was on 39476 **/
/** chunk id: 868643, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => m,
  h: () => p
}), require("./997841.js");
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430198 = require("./430198.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk630388 = require("./630388.js"),
  Chunk981631 = require("./981631.js");
let c = Chunk981631.iLy.CROSSPOSTED | Chunk981631.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | Chunk981631.iLy.GUILD_FEED_HIDDEN | Chunk981631.iLy.HAS_SNAPSHOT | Chunk981631.iLy.HAS_THREAD | Chunk981631.iLy.IS_CROSSPOST | Chunk981631.iLy.IS_VOICE_MESSAGE | Chunk981631.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | Chunk981631.iLy.SUPPRESS_EMBEDS | Chunk981631.iLy.SUPPRESS_NOTIFICATIONS | Chunk981631.iLy.URGENT | Chunk981631.iLy.IS_COMPONENTS_V2;

function d(e) {
  return e.state !== u.yb.SEND_FAILED && !!u.V$x.FORWARDABLE.has(e.type) && null == e.poll && null == e.sharedClientTheme && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, s.Ge)(e.flags, c) && true
}

function p(e) {
  var t;
  if (!d(e)) returnfalse;
  let n = null == (t = a.Z.getChannel(e.channel_id)) ? true : t.guild_id;
  return !(null != n && r.Z.isChannelOrThreadParentGated(n, e.channel_id))
}

function m(e) {
  let t = (0, l.e7)([o.Z, r.Z, a.Z], () => {
    var t, n, i;
    if (null == e) returntrue;
    let l = null == (t = a.Z.getChannel(e.channel_id)) ? true : t.guild_id;
    if (null != l && (null == (n = o.Z.getGuild(l)) ? true : n.features.has(u.GuildFeatures.FORWARDING_DISABLED))) returntrue;
    let s = null != l && r.Z.isChannelOrThreadParentGated(l, e.channel_id),
      c = null != e && (null == (i = a.Z.getChannel(e.channel_id)) ? true : i.isModeratorReportChannel());
    return s || c
  });
  return i.useMemo(() => !t && null != e && d(e), [t, e])
}