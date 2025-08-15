/** Chunk was on 66866 **/
/** chunk id: 225890, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function b(e) {
  let {
    code: t
  } = e, [n, b, E] = t.split("-"), {
    guildScheduledEvent: C,
    guild: v,
    channel: O,
    isMember: y
  } = (0, l.cj)([f.ZP, d.Z, c.Z, u.ZP, p.default], () => {
    var e, t;
    let r = null != (t = f.ZP.getGuildScheduledEvent(b)) ? t : true,
      i = d.Z.getGuild(n),
      l = c.Z.getChannel(null == r ? true : r.channel_id);
    return {
      guildScheduledEvent: r,
      guild: i,
      channel: l,
      isMember: u.ZP.isMember(n, null == (e = p.default.getCurrentUser()) ? true : e.id)
    }
  }, [n, b]);
  return i.useEffect(() => {
    (null == C ? true : C.id) == null && _.Z.fetchGuildEvent(n, b), m.Z.getGuildEventUserCounts(n, b, null != E ? [E] : []), m.Z.getGuildEventsForCurrentUser(n)
  }, [b, n, null == C ? true : C.id, E]), (0, r.jsx)(g.ZP, {
    guild: v,
    channel: O,
    guildScheduledEvent: C,
    isMember: y,
    onAcceptInstantInvite: h.dG,
    onTransitionToInviteChannel: function() {
      if ((0, o.n)(n)) return void(0, a.hk)(n);
      (null == O ? true : O.isGuildStageVoice()) ? (0, s.Cq)(O) : (null == O ? true : O.isGuildVoice()) && _.Z.joinVoiceEvent(O.guild_id, O.id)
    },
    recurrenceId: E
  })
}