/** Chunk was on 65354 **/
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
  Chunk209114 = require("./209114.js"),
  Chunk981631 = require("./981631.js");

function E(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : b.Z;
  return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(C.S7T.VIEW_CHANNEL, e)
}

function S(e) {
  var t;
  let n = (0, i.e7)([O.ZP], () => O.ZP.isMuted(e)),
    r = x.Z.useConfig({
      location: "useGuildMediaState"
    }).enabled,
    C = n && !r,
    S = (0, c.k5)(e),
    I = (0, i.Wu)([o.ZP, _.Z], () => o.ZP.getEmbeddedActivitiesForGuild(e).filter(e => !(0, s.BA)([...e.userIds], _.Z.getBlockedOrIgnoredIDs()))),
    P = (0, a.p)(null == (t = I[0]) ? true : t.location),
    N = (0, l.NX)(P),
    {
      guildHasVoice: Z,
      guildHasVideo: w,
      selectedVoiceChannelHasVideo: T
    } = (0, i.cj)([y.Z, v.Z, m.Z, b.Z, g.Z], () => {
      var t;
      let n = y.Z.getVoiceChannelId(),
        r = null == (t = m.Z.getGuild(e)) ? true : t.afkChannelId,
        i = v.Z.getUsersWithVideo(e),
        l = (0, s.DX)(v.Z.getVoiceStates(e));
      return {
        guildHasVoice: (() => {
          if (C) returnfalse;
          for (let e in l)
            if (E(g.Z.getBasicChannel(l[e].channelId), null != r ? r : true, b.Z)) returntrue;
          returnfalse
        })(),
        guildHasVideo: (() => {
          if (C) returnfalse;
          for (let t of i) {
            var e;
            if (E(g.Z.getBasicChannel(null == (e = l[t]) ? true : e.channelId), null != r ? r : true, b.Z)) returntrue
          }
          returnfalse
        })(),
        selectedVoiceChannelHasVideo: null != n && v.Z.hasVideo(n)
      }
    }, [e, C]),
    A = h.default.getId();
  return (0, i.cj)([y.Z, g.Z, o.ZP, d.Z, f.Z, b.Z], () => {
    var t, n, r;
    let i = y.Z.getVoiceChannelId(),
      l = (null == (t = g.Z.getChannel(i)) ? true : t.guild_id) === e,
      c = false,
      h = false,
      m = false,
      _ = false,
      O = false,
      v = false;
    if (!l && C) return {
      audio: c,
      video: _,
      screenshare: O,
      liveStage: m,
      activeEvent: h,
      activity: v,
      isCurrentUserConnected: false
    };
    let x = j.default.keys(d.Z.getStageInstancesByGuild(e)).some(e => {
        let t = g.Z.getChannel(e);
        return null != t && b.Z.can(u.gl, t)
      }),
      E = l && null != (r = null == (n = g.Z.getChannel(i)) ? true : n.isGuildStageVoice()) && r,
      P = !!l && null != f.Z.getActiveStreamForUser(A, e),
      R = (0, s.aK)(f.Z.getAllApplicationStreams()).some(t => t.guildId === e),
      D = l && T,
      L = (() => {
        if (N) return I.length > 0;
        for (let e of I) {
          let t = g.Z.getChannel((0, a.p)(e.location));
          if (null != t && (0, p.vd)(t.type)) returntrue
        }
        returnfalse
      })(),
      M = o.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
    return l ? (c = true, h = (null == S ? true : S.channel_id) === i, m = E, _ = D, O = P, v = M) : (c = Z, h = null != S, m = x, _ = w, O = R, v = L), {
      audio: c,
      video: _,
      screenshare: O,
      liveStage: m,
      activeEvent: h,
      activity: v,
      isCurrentUserConnected: l || E
    }
  }, [e, C, T, A, N, I, S, Z, w])
}