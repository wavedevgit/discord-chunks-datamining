/** Chunk was on 48654 **/
/** chunk id: 843626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => f,
  p: () => p
}), require("./938796.js");
var Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk717125 = require("./717125.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js");
let u = Chunk652215.pr7.CROSSPOSTED | Chunk652215.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | Chunk652215.pr7.GUILD_FEED_HIDDEN | Chunk652215.pr7.HAS_SNAPSHOT | Chunk652215.pr7.HAS_THREAD | Chunk652215.pr7.IS_CROSSPOST | Chunk652215.pr7.IS_VOICE_MESSAGE | Chunk652215.pr7.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | Chunk652215.pr7.SUPPRESS_EMBEDS | Chunk652215.pr7.SUPPRESS_NOTIFICATIONS | Chunk652215.pr7.URGENT | Chunk652215.pr7.IS_COMPONENTS_V2;

function d(e) {
  return e.state !== c.cmJ.SEND_FAILED && !!c.MRS.FORWARDABLE.has(e.type) && null == e.poll && null == e.sharedClientTheme && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, i.VL)(e.flags, u) && true
}

function p(e) {
  var t;
  if (!d(e)) returnfalse;
  let n = null == (t = a.A.getChannel(e.channel_id)) ? true : t.guild_id;
  return !(null != n && o.A.isChannelOrThreadParentGated(n, e.channel_id))
}

function f(e) {
  let t = (0, l.bG)([s.A, o.A, a.A], () => {
    var t, n, r;
    if (null == e) returntrue;
    let i = null == (t = a.A.getChannel(e.channel_id)) ? true : t.guild_id;
    if (null != i && (null == (n = s.A.getGuild(i)) ? true : n.features.has(c.GuildFeatures.FORWARDING_DISABLED))) returntrue;
    let l = null != i && o.A.isChannelOrThreadParentGated(i, e.channel_id),
      u = null != e && (null == (r = a.A.getChannel(e.channel_id)) ? true : r.isModeratorReportChannel());
    return l || u
  });
  return r.useMemo(() => !t && null != e && d(e), [t, e])
}