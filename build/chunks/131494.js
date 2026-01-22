/** Chunk was on 97492 **/
/** chunk id: 131494, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function E(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : m.A;
  return null != e && e.type !== r.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(x.hVb.VIEW_CHANNEL, e)
}

function _(e) {
  var t;
  let n = (0, l.bG)([O.Ay], () => O.Ay.isMuted(e)),
    r = (0, c.BP)(e),
    x = (0, l.yK)([a.Ay, A.A], () => a.Ay.getEmbeddedActivitiesForGuild(e).filter(e => !(0, o.PH)([...e.userIds], A.A.getBlockedOrIgnoredIDs()))),
    _ = (0, s.H)(null == (t = x[0]) ? true : t.location),
    C = (0, i.Gp)(_),
    {
      guildHasVoice: S,
      guildHasVideo: I,
      selectedVoiceChannelHasVideo: N
    } = (0, l.cf)([y.A, j.A, g.A, m.A, b.A], () => {
      var t;
      let r = y.A.getVoiceChannelId(),
        l = null == (t = g.A.getGuild(e)) ? true : t.afkChannelId,
        i = j.A.getUsersWithVideo(e),
        a = (0, o.hs)(j.A.getVoiceStates(e));
      return {
        guildHasVoice: (() => {
          if (n) returnfalse;
          for (let e in a)
            if (E(b.A.getBasicChannel(a[e].channelId), null != l ? l : true, m.A)) returntrue;
          returnfalse
        })(),
        guildHasVideo: (() => {
          if (n) returnfalse;
          for (let t of i) {
            var e;
            if (E(b.A.getBasicChannel(null == (e = a[t]) ? true : e.channelId), null != l ? l : true, m.A)) returntrue
          }
          returnfalse
        })(),
        selectedVoiceChannelHasVideo: null != r && j.A.hasVideo(r)
      }
    }, [e, n]),
    T = h.default.getId();
  return (0, l.cf)([y.A, b.A, a.Ay, d.A, p.A, m.A], () => {
    var t, l, i;
    let c = y.A.getVoiceChannelId(),
      h = (null == (l = b.A.getChannel(c)) ? true : l.guild_id) === e,
      g = false,
      A = false,
      O = false,
      j = false,
      E = false,
      _ = false;
    if (!h && n) return {
      audio: g,
      video: j,
      screenshare: E,
      liveStage: O,
      activeEvent: A,
      activity: _,
      isCurrentUserConnected: false
    };
    let P = v.default.keys(d.A.getStageInstancesByGuild(e)).some(e => {
        let t = b.A.getChannel(e);
        return null != t && m.A.can(u.Gk, t)
      }),
      w = h && null != (t = null == (i = b.A.getChannel(c)) ? true : i.isGuildStageVoice()) && t,
      R = !!h && null != p.A.getActiveStreamForUser(T, e),
      D = (0, o.Mt)(p.A.getAllApplicationStreams()).some(t => t.guildId === e),
      M = h && N,
      L = (() => {
        if (C) return x.length > 0;
        for (let e of x) {
          let t = b.A.getChannel((0, s.H)(e.location));
          if (null != t && (0, f.gV)(t.type)) returntrue
        }
        returnfalse
      })(),
      G = a.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
    return h ? (g = true, A = (null == r ? true : r.channel_id) === c, O = w, j = M, E = R, _ = G) : (g = S, A = null != r, O = P, j = I, E = D, _ = L), {
      audio: g,
      video: j,
      screenshare: E,
      liveStage: O,
      activeEvent: A,
      activity: _,
      isCurrentUserConnected: h || w
    }
  }, [e, n, N, T, C, x, r, S, I])
}