/** Chunk was on 81985 **/
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
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : b.Z;
  return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(C.S7T.VIEW_CHANNEL, e)
}

function S(e) {
  var t;
  let n = (0, i.e7)([O.ZP], () => O.ZP.isMuted(e)),
    r = (0, c.k5)(e),
    C = (0, i.Wu)([a.ZP, y.Z], () => a.ZP.getEmbeddedActivitiesForGuild(e).filter(e => !(0, s.BA)([...e.userIds], y.Z.getBlockedOrIgnoredIDs()))),
    S = (0, o.p)(null == (t = C[0]) ? true : t.location),
    _ = (0, l.NX)(S),
    {
      guildHasVoice: I,
      guildHasVideo: P,
      selectedVoiceChannelHasVideo: Z
    } = (0, i.cj)([v.Z, j.Z, m.Z, b.Z, g.Z], () => {
      var t;
      let r = v.Z.getVoiceChannelId(),
        i = null == (t = m.Z.getGuild(e)) ? true : t.afkChannelId,
        l = j.Z.getUsersWithVideo(e),
        a = (0, s.DX)(j.Z.getVoiceStates(e));
      return {
        guildHasVoice: (() => {
          if (n) returnfalse;
          for (let e in a)
            if (E(g.Z.getBasicChannel(a[e].channelId), null != i ? i : true, b.Z)) returntrue;
          returnfalse
        })(),
        guildHasVideo: (() => {
          if (n) returnfalse;
          for (let t of l) {
            var e;
            if (E(g.Z.getBasicChannel(null == (e = a[t]) ? true : e.channelId), null != i ? i : true, b.Z)) returntrue
          }
          returnfalse
        })(),
        selectedVoiceChannelHasVideo: null != r && j.Z.hasVideo(r)
      }
    }, [e, n]),
    N = h.default.getId();
  return (0, i.cj)([v.Z, g.Z, a.ZP, d.Z, f.Z, b.Z], () => {
    var t, i, l;
    let c = v.Z.getVoiceChannelId(),
      h = (null == (t = g.Z.getChannel(c)) ? true : t.guild_id) === e,
      m = false,
      y = false,
      O = false,
      j = false,
      E = false,
      S = false;
    if (!h && n) return {
      audio: m,
      video: j,
      screenshare: E,
      liveStage: O,
      activeEvent: y,
      activity: S,
      isCurrentUserConnected: false
    };
    let T = x.default.keys(d.Z.getStageInstancesByGuild(e)).some(e => {
        let t = g.Z.getChannel(e);
        return null != t && b.Z.can(u.gl, t)
      }),
      A = h && null != (l = null == (i = g.Z.getChannel(c)) ? true : i.isGuildStageVoice()) && l,
      w = !!h && null != f.Z.getActiveStreamForUser(N, e),
      R = (0, s.aK)(f.Z.getAllApplicationStreams()).some(t => t.guildId === e),
      D = h && Z,
      M = (() => {
        if (_) return C.length > 0;
        for (let e of C) {
          let t = g.Z.getChannel((0, o.p)(e.location));
          if (null != t && (0, p.vd)(t.type)) returntrue
        }
        returnfalse
      })(),
      k = a.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
    return h ? (m = true, y = (null == r ? true : r.channel_id) === c, O = A, j = D, E = w, S = k) : (m = I, y = null != r, O = T, j = P, E = R, S = M), {
      audio: m,
      video: j,
      screenshare: E,
      liveStage: O,
      activeEvent: y,
      activity: S,
      isCurrentUserConnected: h || A
    }
  }, [e, n, Z, N, _, C, r, I, P])
}