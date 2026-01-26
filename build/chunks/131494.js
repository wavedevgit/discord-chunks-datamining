/** Chunk was on 97887 **/
/** chunk id: 131494, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js");
var Chunk478437 = require("./478437.js"),
  Chunk311907 = require("./311907.js"),
  Chunk811024 = require("./811024.js"),
  Chunk933958 = require("./933958.js"),
  Chunk969151 = require("./969151.js"),
  Chunk297334 = require("./297334.js"),
  Chunk508654 = require("./508654.js"),
  Chunk233993 = require("./233993.js"),
  Chunk446600 = require("./446600.js"),
  Chunk95701 = require("./95701.js"),
  Chunk616356 = require("./616356.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js"),
  Chunk977997 = require("./977997.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js");

function x(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : b.A;
  return null != e && e.type !== r.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(v.hVb.VIEW_CHANNEL, e)
}

function E(e) {
  var t;
  let n = (0, l.bG)([_.Ay], () => _.Ay.isMuted(e)),
    r = (0, c.BP)(e),
    v = (0, l.yK)([s.Ay, A.A], () => s.Ay.getEmbeddedActivitiesForGuild(e).filter(e => !(0, o.PH)([...e.userIds], A.A.getBlockedOrIgnoredIDs()))),
    E = (0, a.H)(null == (t = v[0]) ? true : t.location),
    C = (0, i.Gp)(E),
    {
      guildHasVoice: S,
      guildHasVideo: I,
      selectedVoiceChannelHasVideo: N
    } = (0, l.cf)([y.A, O.A, m.A, b.A, g.A], () => {
      var t;
      let r = y.A.getVoiceChannelId(),
        l = null == (t = m.A.getGuild(e)) ? true : t.afkChannelId,
        i = O.A.getUsersWithVideo(e),
        s = (0, o.hs)(O.A.getVoiceStates(e));
      return {
        guildHasVoice: (() => {
          if (n) returnfalse;
          for (let e in s)
            if (x(g.A.getBasicChannel(s[e].channelId), null != l ? l : true, b.A)) returntrue;
          returnfalse
        })(),
        guildHasVideo: (() => {
          if (n) returnfalse;
          for (let t of i) {
            var e;
            if (x(g.A.getBasicChannel(null == (e = s[t]) ? true : e.channelId), null != l ? l : true, b.A)) returntrue
          }
          returnfalse
        })(),
        selectedVoiceChannelHasVideo: null != r && O.A.hasVideo(r)
      }
    }, [e, n]),
    T = f.default.getId();
  return (0, l.cf)([y.A, g.A, s.Ay, d.A, h.A, b.A], () => {
    var t, l, i;
    let c = y.A.getVoiceChannelId(),
      f = (null == (l = g.A.getChannel(c)) ? true : l.guild_id) === e,
      m = false,
      A = false,
      _ = false,
      O = false,
      x = false,
      E = false;
    if (!f && n) return {
      audio: m,
      video: O,
      screenshare: x,
      liveStage: _,
      activeEvent: A,
      activity: E,
      isCurrentUserConnected: false
    };
    let P = j.default.keys(d.A.getStageInstancesByGuild(e)).some(e => {
        let t = g.A.getChannel(e);
        return null != t && b.A.can(u.Gk, t)
      }),
      w = f && null != (t = null == (i = g.A.getChannel(c)) ? true : i.isGuildStageVoice()) && t,
      R = !!f && null != h.A.getActiveStreamForUser(T, e),
      D = (0, o.Mt)(h.A.getAllApplicationStreams()).some(t => t.guildId === e),
      M = f && N,
      L = (() => {
        if (C) return v.length > 0;
        for (let e of v) {
          let t = g.A.getChannel((0, a.H)(e.location));
          if (null != t && (0, p.gV)(t.type)) returntrue
        }
        returnfalse
      })(),
      k = s.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
    return f ? (m = true, A = (null == r ? true : r.channel_id) === c, _ = w, O = M, x = R, E = k) : (m = S, A = null != r, _ = P, O = I, x = D, E = L), {
      audio: m,
      video: O,
      screenshare: x,
      liveStage: _,
      activeEvent: A,
      activity: E,
      isCurrentUserConnected: f || w
    }
  }, [e, n, N, T, C, v, r, S, I])
}