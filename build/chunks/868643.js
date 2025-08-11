/** Chunk was on web.js **/
/** chunk id: 868643, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => _,
  h: () => f
}), require("./997841.js");
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430198 = require("./430198.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk630388 = require("./630388.js"),
  Chunk981631 = require("./981631.js");
let u = Chunk981631.iLy.CROSSPOSTED | Chunk981631.iLy.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | Chunk981631.iLy.GUILD_FEED_HIDDEN | Chunk981631.iLy.HAS_SNAPSHOT | Chunk981631.iLy.HAS_THREAD | Chunk981631.iLy.IS_CROSSPOST | Chunk981631.iLy.IS_VOICE_MESSAGE | Chunk981631.iLy.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | Chunk981631.iLy.SUPPRESS_EMBEDS | Chunk981631.iLy.SUPPRESS_NOTIFICATIONS | Chunk981631.iLy.URGENT | Chunk981631.iLy.IS_COMPONENTS_V2;

function d(e) {
  return e.state !== c.yb.SEND_FAILED && !!c.V$x.FORWARDABLE.has(e.type) && null == e.poll && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, l.Ge)(e.flags, u) && true
}

function f(e) {
  var t;
  if (!d(e)) returnfalse;
  let n = null == (t = a.Z.getChannel(e.channel_id)) ? true : t.guild_id;
  return !(null != n && o.Z.isChannelOrThreadParentGated(n, e.channel_id))
}

function _(e) {
  let t = (0, i.e7)([s.Z, o.Z, a.Z], () => {
    var t, n, r;
    if (null == e) returntrue;
    let i = null == (t = a.Z.getChannel(e.channel_id)) ? true : t.guild_id;
    if (null != i && (null == (n = s.Z.getGuild(i)) ? true : n.features.has(c.oNc.FORWARDING_DISABLED))) returntrue;
    let l = null != i && o.Z.isChannelOrThreadParentGated(i, e.channel_id),
      u = null != e && (null == (r = a.Z.getChannel(e.channel_id)) ? true : r.isModeratorReportChannel());
    return l || u
  });
  return r.useMemo(() => !t && null != e && d(e), [t, e])
}