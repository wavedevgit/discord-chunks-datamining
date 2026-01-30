/** Chunk was on 48654 **/
/** chunk id: 843626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  m: () => p,
  p: () => d
}), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk717125 = require("./717125.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js");
let u = Chunk652215.pr7.CROSSPOSTED | Chunk652215.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | Chunk652215.pr7.GUILD_FEED_HIDDEN | Chunk652215.pr7.HAS_SNAPSHOT | Chunk652215.pr7.HAS_THREAD | Chunk652215.pr7.IS_CROSSPOST | Chunk652215.pr7.IS_VOICE_MESSAGE | Chunk652215.pr7.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | Chunk652215.pr7.SUPPRESS_EMBEDS | Chunk652215.pr7.SUPPRESS_NOTIFICATIONS | Chunk652215.pr7.URGENT | Chunk652215.pr7.IS_COMPONENTS_V2;

function d(e) {
  var t, n;
  let i = arguments.length > 1 && true !== arguments[1] ? arguments[1] : s.A,
    d = arguments.length > 2 && true !== arguments[2] ? arguments[2] : l.A,
    p = arguments.length > 3 && true !== arguments[3] ? arguments[3] : o.A,
    f = arguments.length > 4 && true !== arguments[4] ? arguments[4] : a.A;
  if (null == e || !(e.state !== c.cmJ.SEND_FAILED && c.MRS.FORWARDABLE.has(e.type) && null == e.poll && null == e.sharedClientTheme && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, r.VL)(e.flags, u) && 1)) returnfalse;
  let m = p.getChannel(e.channel_id),
    O = i.can(c.xBc.READ_MESSAGE_HISTORY, m);
  if (null != m && !O && !m.isPrivate()) returnfalse;
  let b = null == m ? true : m.guild_id;
  return !(null != b && (null == (n = f.getGuild(b)) ? true : n.features.has(c.GuildFeatures.FORWARDING_DISABLED)) || null != b && d.isChannelOrThreadParentGated(b, e.channel_id)) && (null == (t = null == m ? true : m.isModeratorReportChannel()) || !t)
}

function p(e) {
  return (0, i.bG)([s.A, l.A, o.A, a.A], () => d(e, s.A, l.A, o.A, a.A))
}