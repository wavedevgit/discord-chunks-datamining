/** Chunk was on 53494 **/
n.d(t, {
  Z: () => P
}), n(47120);
var r = n(106351),
  i = n(442837),
  o = n(595519),
  l = n(317381),
  a = n(16609),
  s = n(470883),
  c = n(750881),
  u = n(554747),
  d = n(146085),
  p = n(427679),
  h = n(131704),
  f = n(199902),
  g = n(314897),
  m = n(592125),
  b = n(430824),
  v = n(496675),
  y = n(699516),
  _ = n(944486),
  O = n(9156),
  j = n(979651),
  C = n(709054),
  x = n(981631);

function S(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v.Z;
  return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(x.S7T.VIEW_CHANNEL, e)
}

function P(e) {
  var t;
  let n = (0, i.e7)([O.ZP], () => O.ZP.isMuted(e)),
    r = (0, u.k5)(e),
    {
      enabled: x
    } = (0, c.bA)("use-guild-media-state"),
    P = (0, i.Wu)([l.ZP, y.Z], () => {
      let t = l.ZP.getEmbeddedActivitiesForGuild(e);
      return x ? t.filter(e => !(0, s.BA)([...e.userIds], y.Z.getBlockedOrIgnoredIDs())) : t
    }),
    I = (0, a.pY)(null === (t = P[0]) || void 0 === t ? void 0 : t.location),
    N = (0, o.NX)(I),
    {
      guildHasVoice: Z,
      guildHasVideo: w,
      selectedVoiceChannelHasVideo: E
    } = (0, i.cj)([_.Z, j.Z, b.Z, v.Z, m.Z], () => {
      var t;
      let r = _.Z.getVoiceChannelId(),
        i = null === (t = b.Z.getGuild(e)) || void 0 === t ? void 0 : t.afkChannelId,
        o = j.Z.getUsersWithVideo(e),
        l = x ? (0, s.DX)(j.Z.getVoiceStates(e)) : j.Z.getVoiceStates(e);
      return {
        guildHasVoice: (() => {
          if (n) return !1;
          for (let e in l)
            if (S(m.Z.getBasicChannel(l[e].channelId), null != i ? i : void 0, v.Z)) return !0;
          return !1
        })(),
        guildHasVideo: (() => {
          if (n) return !1;
          for (let t of o) {
            var e;
            if (S(m.Z.getBasicChannel(null === (e = l[t]) || void 0 === e ? void 0 : e.channelId), null != i ? i : void 0, v.Z)) return !0
          }
          return !1
        })(),
        selectedVoiceChannelHasVideo: null != r && j.Z.hasVideo(r)
      }
    }, [x, e, n]),
    T = g.default.getId();
  return (0, i.cj)([_.Z, m.Z, l.ZP, p.Z, f.Z, v.Z], () => {
    var t, i, o;
    let c = _.Z.getVoiceChannelId(),
      u = (null === (t = m.Z.getChannel(c)) || void 0 === t ? void 0 : t.guild_id) === e,
      g = !1,
      b = !1,
      y = !1,
      O = !1,
      j = !1,
      S = !1;
    if (!u && n) return {
      audio: g,
      video: O,
      screenshare: j,
      liveStage: y,
      activeEvent: b,
      activity: S,
      isCurrentUserConnected: !1
    };
    let I = C.default.keys(p.Z.getStageInstancesByGuild(e)).some(e => {
        let t = m.Z.getChannel(e);
        return null != t && v.Z.can(d.gl, t)
      }),
      A = u && null !== (o = null === (i = m.Z.getChannel(c)) || void 0 === i ? void 0 : i.isGuildStageVoice()) && void 0 !== o && o,
      D = !!u && null != f.Z.getActiveStreamForUser(T, e),
      R = (x ? (0, s.aK)(f.Z.getAllApplicationStreams()) : f.Z.getAllApplicationStreams()).some(t => t.guildId === e),
      L = u && E,
      k = (() => {
        if (N) return P.length > 0;
        for (let e of P) {
          let t = m.Z.getChannel((0, a.pY)(e.location));
          if (null != t && (0, h.vd)(t.type)) return !0
        }
        return !1
      })(),
      M = l.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
    return u ? (g = !0, b = (null == r ? void 0 : r.channel_id) === c, y = A, O = L, j = D, S = M) : (g = Z, b = null != r, y = I, O = w, j = R, S = k), {
      audio: g,
      video: O,
      screenshare: j,
      liveStage: y,
      activeEvent: b,
      activity: S,
      isCurrentUserConnected: u || A
    }
  }, [e, n, x, E, T, N, P, r, Z, w])
}