/** Chunk was on web.js **/
/** chunk id: 225890, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk305325 = require("./305325.js"),
  Chunk281956 = require("./281956.js"),
  Chunk922482 = require("./922482.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk897285 = require("./897285.js"),
  Chunk924301 = require("./924301.js"),
  Chunk482241 = require("./482241.js"),
  Chunk11868 = require("./11868.jsx"),
  Chunk231338 = require("./231338.js");

function E(e) {
  let {
    code: t
  } = e, [n, E, b] = t.split("-"), {
    guildScheduledEvent: y,
    guild: O,
    channel: v,
    isMember: I
  } = (0, a.cj)([p.ZP, d.Z, c.Z, u.ZP, f.default], () => {
    var e, t;
    let r = null != (t = p.ZP.getGuildScheduledEvent(E)) ? t : true,
      i = d.Z.getGuild(n),
      a = c.Z.getChannel(null == r ? true : r.channel_id);
    return {
      guildScheduledEvent: r,
      guild: i,
      channel: a,
      isMember: u.ZP.isMember(n, null == (e = f.default.getCurrentUser()) ? true : e.id)
    }
  }, [n, E]);

  function T() {
    if ((0, s.n)(n)) return void(0, o.hk)(n);
    (null == v ? true : v.isGuildStageVoice()) ? (0, l.Cq)(v) : (null == v ? true : v.isGuildVoice()) && h.Z.joinVoiceEvent(v.guild_id, v.id)
  }
  return i.useEffect(() => {
    (null == y ? true : y.id) == null && h.Z.fetchGuildEvent(n, E), _.Z.getGuildEventUserCounts(n, E, null != b ? [b] : []), _.Z.getGuildEventsForCurrentUser(n)
  }, [E, n, null == y ? true : y.id, b]), (0, r.jsx)(m.ZP, {
    guild: O,
    channel: v,
    guildScheduledEvent: y,
    isMember: I,
    onAcceptInstantInvite: g.dG,
    onTransitionToInviteChannel: T,
    recurrenceId: b
  })
}