/** Chunk was on 34779 **/
/** chunk id: 61634, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : b.Z;
  return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(E.S7T.VIEW_CHANNEL, e)
}

function x(e) {
  var t;
  let n = (0, i.e7)([y.ZP], () => y.ZP.isMuted(e)),
    r = j.Z.useExperiment({
      location: "useGuildMediaState"
    }).enabled,
    E = n && !r,
    x = (0, c.k5)(e),
    I = (0, i.Wu)([o.ZP, O.Z], () => o.ZP.getEmbeddedActivitiesForGuild(e).filter(e => !(0, a.BA)([...e.userIds], O.Z.getBlockedOrIgnoredIDs()))),
    P = (0, s.p)(null == (t = I[0]) ? true : t.location),
    N = (0, l.NX)(P),
    {
      guildHasVoice: w,
      guildHasVideo: Z,
      selectedVoiceChannelHasVideo: T
    } = (0, i.cj)([_.Z, C.Z, m.Z, b.Z, g.Z], () => {
      var t;
      let n = _.Z.getVoiceChannelId(),
        r = null == (t = m.Z.getGuild(e)) ? true : t.afkChannelId,
        i = C.Z.getUsersWithVideo(e),
        l = (0, a.DX)(C.Z.getVoiceStates(e));
      return {
        guildHasVoice: (() => {
          if (E) returnfalse;
          for (let e in l)
            if (S(g.Z.getBasicChannel(l[e].channelId), null != r ? r : true, b.Z)) returntrue;
          returnfalse
        })(),
        guildHasVideo: (() => {
          if (E) returnfalse;
          for (let t of i) {
            var e;
            if (S(g.Z.getBasicChannel(null == (e = l[t]) ? true : e.channelId), null != r ? r : true, b.Z)) returntrue
          }
          returnfalse
        })(),
        selectedVoiceChannelHasVideo: null != n && C.Z.hasVideo(n)
      }
    }, [e, E]),
    A = f.default.getId();
  return (0, i.cj)([_.Z, g.Z, o.ZP, d.Z, p.Z, b.Z], () => {
    var t, n, r;
    let i = _.Z.getVoiceChannelId(),
      l = (null == (t = g.Z.getChannel(i)) ? true : t.guild_id) === e,
      c = false,
      f = false,
      m = false,
      O = false,
      y = false,
      C = false;
    if (!l && E) return {
      audio: c,
      video: O,
      screenshare: y,
      liveStage: m,
      activeEvent: f,
      activity: C,
      isCurrentUserConnected: false
    };
    let j = v.default.keys(d.Z.getStageInstancesByGuild(e)).some(e => {
        let t = g.Z.getChannel(e);
        return null != t && b.Z.can(u.gl, t)
      }),
      S = l && null != (r = null == (n = g.Z.getChannel(i)) ? true : n.isGuildStageVoice()) && r,
      P = !!l && null != p.Z.getActiveStreamForUser(A, e),
      R = (0, a.aK)(p.Z.getAllApplicationStreams()).some(t => t.guildId === e),
      D = l && T,
      L = (() => {
        if (N) return I.length > 0;
        for (let e of I) {
          let t = g.Z.getChannel((0, s.p)(e.location));
          if (null != t && (0, h.vd)(t.type)) returntrue
        }
        returnfalse
      })(),
      M = o.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
    return l ? (c = true, f = (null == x ? true : x.channel_id) === i, m = S, O = D, y = P, C = M) : (c = w, f = null != x, m = j, O = Z, y = R, C = L), {
      audio: c,
      video: O,
      screenshare: y,
      liveStage: m,
      activeEvent: f,
      activity: C,
      isCurrentUserConnected: l || S
    }
  }, [e, E, T, A, N, I, x, w, Z])
}