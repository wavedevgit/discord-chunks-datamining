/** Chunk was on 82477 **/
/** chunk id: 61634, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
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
  Chunk209114 = require("./209114.js"),
  Chunk981631 = require("./981631.js");

function S(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : m.Z;
  return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(E.S7T.VIEW_CHANNEL, e)
}

function I(e) {
  var t;
  let n = (0, i.e7)([v.ZP], () => v.ZP.isMuted(e)),
    r = x.Z.useConfig({
      location: "useGuildMediaState"
    }).enabled,
    E = n && !r,
    I = (0, c.k5)(e),
    _ = (0, i.Wu)([a.ZP, y.Z], () => a.ZP.getEmbeddedActivitiesForGuild(e).filter(e => !(0, s.BA)([...e.userIds], y.Z.getBlockedOrIgnoredIDs()))),
    P = (0, o.p)(null == (t = _[0]) ? true : t.location),
    N = (0, l.NX)(P),
    {
      guildHasVoice: Z,
      guildHasVideo: w,
      selectedVoiceChannelHasVideo: T
    } = (0, i.cj)([O.Z, j.Z, b.Z, m.Z, g.Z], () => {
      var t;
      let n = O.Z.getVoiceChannelId(),
        r = null == (t = b.Z.getGuild(e)) ? true : t.afkChannelId,
        i = j.Z.getUsersWithVideo(e),
        l = (0, s.DX)(j.Z.getVoiceStates(e));
      return {
        guildHasVoice: (() => {
          if (E) returnfalse;
          for (let e in l)
            if (S(g.Z.getBasicChannel(l[e].channelId), null != r ? r : true, m.Z)) returntrue;
          returnfalse
        })(),
        guildHasVideo: (() => {
          if (E) returnfalse;
          for (let t of i) {
            var e;
            if (S(g.Z.getBasicChannel(null == (e = l[t]) ? true : e.channelId), null != r ? r : true, m.Z)) returntrue
          }
          returnfalse
        })(),
        selectedVoiceChannelHasVideo: null != n && j.Z.hasVideo(n)
      }
    }, [e, E]),
    A = p.default.getId();
  return (0, i.cj)([O.Z, g.Z, a.ZP, d.Z, h.Z, m.Z], () => {
    var t, n, r;
    let i = O.Z.getVoiceChannelId(),
      l = (null == (t = g.Z.getChannel(i)) ? true : t.guild_id) === e,
      c = false,
      p = false,
      b = false,
      y = false,
      v = false,
      j = false;
    if (!l && E) return {
      audio: c,
      video: y,
      screenshare: v,
      liveStage: b,
      activeEvent: p,
      activity: j,
      isCurrentUserConnected: false
    };
    let x = C.default.keys(d.Z.getStageInstancesByGuild(e)).some(e => {
        let t = g.Z.getChannel(e);
        return null != t && m.Z.can(u.gl, t)
      }),
      S = l && null != (r = null == (n = g.Z.getChannel(i)) ? true : n.isGuildStageVoice()) && r,
      P = !!l && null != h.Z.getActiveStreamForUser(A, e),
      R = (0, s.aK)(h.Z.getAllApplicationStreams()).some(t => t.guildId === e),
      D = l && T,
      M = (() => {
        if (N) return _.length > 0;
        for (let e of _) {
          let t = g.Z.getChannel((0, o.p)(e.location));
          if (null != t && (0, f.vd)(t.type)) returntrue
        }
        returnfalse
      })(),
      L = a.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
    return l ? (c = true, p = (null == I ? true : I.channel_id) === i, b = S, y = D, v = P, j = L) : (c = Z, p = null != I, b = x, y = w, v = R, j = M), {
      audio: c,
      video: y,
      screenshare: v,
      liveStage: b,
      activeEvent: p,
      activity: j,
      isCurrentUserConnected: l || S
    }
  }, [e, E, T, A, N, _, I, Z, w])
}