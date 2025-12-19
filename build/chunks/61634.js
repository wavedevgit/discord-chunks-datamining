/** Chunk was on 67000 **/
/** chunk id: 61634, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk595519 = require("./595519.js"),
  Chunk317381 = require("./317381.js"),
  Chunk16609 = require("./16609.js"),
  Chunk470883 = require("./470883.js"),
  Chunk554747 = require("./554747.js"),
  Chunk146085 = require("./146085.js"),
  Chunk427679 = require("./427679.js"),
  Chunk131704 = require("./131704.js"),
  Chunk199902 = require("./199902.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js"),
  Chunk979651 = require("./979651.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js");

function E(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : m.Z;
  return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(x.S7T.VIEW_CHANNEL, e)
}

function S(e) {
  var t;
  let n = (0, i.e7)([v.ZP], () => v.ZP.isMuted(e)),
    r = (0, c.k5)(e),
    x = (0, i.Wu)([a.ZP, y.Z], () => a.ZP.getEmbeddedActivitiesForGuild(e).filter(e => !(0, s.BA)([...e.userIds], y.Z.getBlockedOrIgnoredIDs()))),
    S = (0, o.p)(null == (t = x[0]) ? true : t.location),
    I = (0, l.NX)(S),
    {
      guildHasVoice: _,
      guildHasVideo: P,
      selectedVoiceChannelHasVideo: N
    } = (0, i.cj)([O.Z, j.Z, b.Z, m.Z, g.Z], () => {
      var t;
      let r = O.Z.getVoiceChannelId(),
        i = null == (t = b.Z.getGuild(e)) ? true : t.afkChannelId,
        l = j.Z.getUsersWithVideo(e),
        a = (0, s.DX)(j.Z.getVoiceStates(e));
      return {
        guildHasVoice: (() => {
          if (n) returnfalse;
          for (let e in a)
            if (E(g.Z.getBasicChannel(a[e].channelId), null != i ? i : true, m.Z)) returntrue;
          returnfalse
        })(),
        guildHasVideo: (() => {
          if (n) returnfalse;
          for (let t of l) {
            var e;
            if (E(g.Z.getBasicChannel(null == (e = a[t]) ? true : e.channelId), null != i ? i : true, m.Z)) returntrue
          }
          returnfalse
        })(),
        selectedVoiceChannelHasVideo: null != r && j.Z.hasVideo(r)
      }
    }, [e, n]),
    Z = p.default.getId();
  return (0, i.cj)([O.Z, g.Z, a.ZP, d.Z, h.Z, m.Z], () => {
    var t, i, l;
    let c = O.Z.getVoiceChannelId(),
      p = (null == (t = g.Z.getChannel(c)) ? true : t.guild_id) === e,
      b = false,
      y = false,
      v = false,
      j = false,
      E = false,
      S = false;
    if (!p && n) return {
      audio: b,
      video: j,
      screenshare: E,
      liveStage: v,
      activeEvent: y,
      activity: S,
      isCurrentUserConnected: false
    };
    let w = C.default.keys(d.Z.getStageInstancesByGuild(e)).some(e => {
        let t = g.Z.getChannel(e);
        return null != t && m.Z.can(u.gl, t)
      }),
      T = p && null != (l = null == (i = g.Z.getChannel(c)) ? true : i.isGuildStageVoice()) && l,
      A = !!p && null != h.Z.getActiveStreamForUser(Z, e),
      R = (0, s.aK)(h.Z.getAllApplicationStreams()).some(t => t.guildId === e),
      D = p && N,
      M = (() => {
        if (I) return x.length > 0;
        for (let e of x) {
          let t = g.Z.getChannel((0, o.p)(e.location));
          if (null != t && (0, f.vd)(t.type)) returntrue
        }
        returnfalse
      })(),
      L = a.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
    return p ? (b = true, y = (null == r ? true : r.channel_id) === c, v = T, j = D, E = A, S = L) : (b = _, y = null != r, v = w, j = P, E = R, S = M), {
      audio: b,
      video: j,
      screenshare: E,
      liveStage: v,
      activeEvent: y,
      activity: S,
      isCurrentUserConnected: p || T
    }
  }, [e, n, N, Z, I, x, r, _, P])
}