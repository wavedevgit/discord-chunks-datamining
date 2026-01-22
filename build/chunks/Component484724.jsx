/** Chunk was on web.js **/
/** chunk id: 484724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
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

function O(e) {
  let {
    code: t
  } = e, [n, O, A] = t.split("-"), {
    analyticsLocations: v
  } = (0, o.Ay)(), {
    guildScheduledEvent: S,
    guild: I,
    channel: T,
    isMember: C
  } = (0, a.cf)([g.Ay, _.A, f.A, p.Ay, h.default], () => {
    var e, t;
    let r = null != (e = g.Ay.getGuildScheduledEvent(O)) ? e : true,
      i = _.A.getGuild(n),
      a = f.A.getChannel(null == r ? true : r.channel_id);
    return {
      guildScheduledEvent: r,
      guild: i,
      channel: a,
      isMember: p.Ay.isMember(n, null == (t = h.default.getCurrentUser()) ? true : t.id)
    }
  }, [n, O]), N = () => {
    if ((0, u.g)({
        guild: I,
        isMember: C,
        analyticsLocations: v
      }) === u.W.PROCEED) {
      if ((0, c.V)(n)) return void(0, l.Ze)(n);
      s.A.joinGuild(n, {
        source: y.Q4z.GUILD_EVENT_EMBED
      }).catch(() => {})
    }
  };

  function R() {
    (0, c.V)(n) ? (0, l.Ze)(n) : (null == T ? true : T.isGuildStageVoice()) ? (0, d.av)(T) : (null == T ? true : T.isGuildVoice()) && E.A.joinVoiceEvent(T.guild_id, T.id)
  }
  return i.useEffect(() => {
    (null == S ? true : S.id) == null && E.A.fetchGuildEvent(n, O), m.A.getGuildEventUserCounts(n, O, null != A ? [A] : []), m.A.getGuildEventsForCurrentUser(n)
  }, [O, n, null == S ? true : S.id, A]), (0, r.jsx)(b.Ay, {
    guild: I,
    channel: T,
    guildScheduledEvent: S,
    isMember: C,
    onAcceptInstantInvite: N,
    onTransitionToInviteChannel: R,
    recurrenceId: A
  })
}