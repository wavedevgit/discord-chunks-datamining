/** Chunk was on web.js **/
/** chunk id: 225890, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk749210 = require("./749210.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk305325 = require("./305325.js"),
  Chunk281956 = require("./281956.js"),
  Chunk542256 = require("./542256.js"),
  Chunk922482 = require("./922482.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk897285 = require("./897285.js"),
  Chunk924301 = require("./924301.js"),
  Chunk482241 = require("./482241.js"),
  Chunk11868 = require("./11868.jsx"),
  Chunk981631 = require("./981631.js");

function O(e) {
  let {
    code: t
  } = e, [n, O, v] = t.split("-"), {
    analyticsLocations: I
  } = (0, s.ZP)(), {
    guildScheduledEvent: T,
    guild: S,
    channel: A,
    isMember: C
  } = (0, a.cj)([g.ZP, p.Z, f.Z, _.ZP, h.default], () => {
    var e, t;
    let r = null != (t = g.ZP.getGuildScheduledEvent(O)) ? t : true,
      i = p.Z.getGuild(n),
      a = f.Z.getChannel(null == r ? true : r.channel_id);
    return {
      guildScheduledEvent: r,
      guild: i,
      channel: a,
      isMember: _.ZP.isMember(n, null == (e = h.default.getCurrentUser()) ? true : e.id)
    }
  }, [n, O]), N = () => {
    if ((0, u.o)({
        guild: S,
        isMember: C,
        analyticsLocations: I
      }) === u.e.PROCEED) {
      if ((0, c.n)(n)) return void(0, l.hk)(n);
      o.Z.joinGuild(n, {
        source: y.vtS.GUILD_EVENT_EMBED
      }).catch(() => {})
    }
  };

  function R() {
    if ((0, c.n)(n)) return void(0, l.hk)(n);
    (null == A ? true : A.isGuildStageVoice()) ? (0, d.Cq)(A) : (null == A ? true : A.isGuildVoice()) && E.Z.joinVoiceEvent(A.guild_id, A.id)
  }
  return i.useEffect(() => {
    (null == T ? true : T.id) == null && E.Z.fetchGuildEvent(n, O), m.Z.getGuildEventUserCounts(n, O, null != v ? [v] : []), m.Z.getGuildEventsForCurrentUser(n)
  }, [O, n, null == T ? true : T.id, v]), (0, r.jsx)(b.ZP, {
    guild: S,
    channel: A,
    guildScheduledEvent: T,
    isMember: C,
    onAcceptInstantInvite: N,
    onTransitionToInviteChannel: R,
    recurrenceId: v
  })
}