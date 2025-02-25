/** Chunk was on 64615 **/
n.d(t, {
  Z: () => N
}), n(47120);
var r = n(106351),
  i = n(442837),
  l = n(595519),
  o = n(317381),
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
  O = n(944486),
  j = n(9156),
  _ = n(979651),
  C = n(709054),
  x = n(981631);

function P(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : v.Z;
  return null != e && e.type !== r.d.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(x.S7T.VIEW_CHANNEL, e)
}

function N(e) {
  var t;
  let n = (0, i.e7)([j.ZP], () => j.ZP.isMuted(e)),
    r = (0, u.k5)(e),
    {
      enabled: x
    } = (0, c.bA)("use-guild-media-state"),
    N = (0, i.Wu)([o.ZP, y.Z], () => {
      let t = o.ZP.getEmbeddedActivitiesForGuild(e);
      return x ? t.filter(e => !(0, s.BA)([...e.userIds], y.Z.getBlockedOrIgnoredIDs())) : t
    }),
    S = (0, a.pY)(null === (t = N[0]) || void 0 === t ? void 0 : t.location),
    I = (0, l.NX)(S),
    {
      guildHasVoice: Z,
      guildHasVideo: w,
      selectedVoiceChannelHasVideo: E
    } = (0, i.cj)([O.Z, _.Z, b.Z, v.Z, m.Z], () => {
      var t;
      let r = O.Z.getVoiceChannelId(),
        i = null === (t = b.Z.getGuild(e)) || void 0 === t ? void 0 : t.afkChannelId,
        l = _.Z.getUsersWithVideo(e),
        o = x ? (0, s.DX)(_.Z.getVoiceStates(e)) : _.Z.getVoiceStates(e);
      return {
        guildHasVoice: (() => {
          if (n) return !1;
          for (let e in o)
            if (P(m.Z.getBasicChannel(o[e].channelId), null != i ? i : void 0, v.Z)) return !0;
          return !1
        })(),
        guildHasVideo: (() => {
          if (n) return !1;
          for (let t of l) {
            var e;
            if (P(m.Z.getBasicChannel(null === (e = o[t]) || void 0 === e ? void 0 : e.channelId), null != i ? i : void 0, v.Z)) return !0
          }
          return !1
        })(),
        selectedVoiceChannelHasVideo: null != r && _.Z.hasVideo(r)
      }
    }, [x, e, n]),
    T = g.default.getId();
  return (0, i.cj)([O.Z, m.Z, o.ZP, p.Z, f.Z, v.Z], () => {
    var t, i, l;
    let c = O.Z.getVoiceChannelId(),
      u = (null === (t = m.Z.getChannel(c)) || void 0 === t ? void 0 : t.guild_id) === e,
      g = !1,
      b = !1,
      y = !1,
      j = !1,
      _ = !1,
      P = !1;
    if (!u && n) return {
      audio: g,
      video: j,
      screenshare: _,
      liveStage: y,
      activeEvent: b,
      activity: P,
      isCurrentUserConnected: !1
    };
    let S = C.default.keys(p.Z.getStageInstancesByGuild(e)).some(e => {
        let t = m.Z.getChannel(e);
        return null != t && v.Z.can(d.gl, t)
      }),
      D = u && null !== (l = null === (i = m.Z.getChannel(c)) || void 0 === i ? void 0 : i.isGuildStageVoice()) && void 0 !== l && l,
      A = !!u && null != f.Z.getActiveStreamForUser(T, e),
      R = (x ? (0, s.aK)(f.Z.getAllApplicationStreams()) : f.Z.getAllApplicationStreams()).some(t => t.guildId === e),
      L = u && E,
      k = (() => {
        if (I) return N.length > 0;
        for (let e of N) {
          let t = m.Z.getChannel((0, a.pY)(e.location));
          if (null != t && (0, h.vd)(t.type)) return !0
        }
        return !1
      })(),
      M = o.ZP.getEmbeddedActivitiesForGuild(e).length > 0;
    return u ? (g = !0, b = (null == r ? void 0 : r.channel_id) === c, y = D, j = L, _ = A, P = M) : (g = Z, b = null != r, y = S, j = w, _ = R, P = k), {
      audio: g,
      video: j,
      screenshare: _,
      liveStage: y,
      activeEvent: b,
      activity: P,
      isCurrentUserConnected: u || D
    }
  }, [e, n, x, E, T, I, N, r, Z, w])
}