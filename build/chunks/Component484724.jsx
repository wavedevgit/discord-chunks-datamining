/** Chunk was on 92917 **/
/** chunk id: 484724, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk686956 = require("./686956.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk202384 = require("./202384.js"),
  Chunk51758 = require("./51758.js"),
  Chunk665066 = require("./665066.js"),
  Chunk323443 = require("./323443.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk285059 = require("./285059.js"),
  Chunk698441 = require("./698441.js"),
  Chunk496092 = require("./496092.js"),
  Chunk427080 = require("./427080.jsx"),
  Chunk652215 = require("./652215.js");

function v(e) {
  let {
    code: t
  } = e, [n, v, x] = t.split("-"), {
    analyticsLocations: O
  } = (0, s.Ay)(), {
    guildScheduledEvent: E,
    guild: j,
    channel: C,
    isMember: I
  } = (0, l.cf)([_.Ay, f.A, p.A, m.Ay, g.default], () => {
    var e, t;
    let r = null != (e = _.Ay.getGuildScheduledEvent(v)) ? e : true,
      i = f.A.getGuild(n),
      l = p.A.getChannel(null == r ? true : r.channel_id);
    return {
      guildScheduledEvent: r,
      guild: i,
      channel: l,
      isMember: m.Ay.isMember(n, null == (t = g.default.getCurrentUser()) ? true : t.id)
    }
  }, [n, v]);
  return i.useEffect(() => {
    (null == E ? true : E.id) == null && b.A.fetchGuildEvent(n, v), h.A.getGuildEventUserCounts(n, v, null != x ? [x] : []), h.A.getGuildEventsForCurrentUser(n)
  }, [v, n, null == E ? true : E.id, x]), (0, r.jsx)(A.Ay, {
    guild: j,
    channel: C,
    guildScheduledEvent: E,
    isMember: I,
    onAcceptInstantInvite: () => {
      if ((0, u.g)({
          guild: j,
          isMember: I,
          analyticsLocations: O
        }) === u.W.PROCEED) {
        if ((0, c.V)(n)) return void(0, o.Ze)(n);
        a.A.joinGuild(n, {
          source: y.Q4z.GUILD_EVENT_EMBED
        }).catch(() => {})
      }
    },
    onTransitionToInviteChannel: function() {
      (0, c.V)(n) ? (0, o.Ze)(n) : (null == C ? true : C.isGuildStageVoice()) ? (0, d.av)(C) : (null == C ? true : C.isGuildVoice()) && b.A.joinVoiceEvent(C.guild_id, C.id)
    },
    recurrenceId: x
  })
}