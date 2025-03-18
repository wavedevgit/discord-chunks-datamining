/** Chunk was on 38542 **/
n.d(t, {
  Z: () => ep
}), n(47120), n(653041), n(627341);
var r, l = n(392711),
  o = n.n(l),
  i = n(278074),
  a = n(442837),
  s = n(570140),
  c = n(782769),
  u = n(527805),
  d = n(841784),
  h = n(503438),
  f = n(802856),
  p = n(420660),
  g = n(728345),
  y = n(812206),
  v = n(750881),
  O = n(710845),
  b = n(38618),
  N = n(656063),
  m = n(761282),
  x = n(814443),
  C = n(789407),
  E = n(630186),
  j = n(250889),
  I = n(199902),
  P = n(592125),
  S = n(480294),
  w = n(831506),
  T = n(731290),
  Z = n(430824),
  _ = n(496675),
  R = n(158776),
  A = n(699516),
  D = n(594174),
  W = n(979651),
  k = n(626135),
  M = n(823379),
  B = n(981631);

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let G = !1,
  F = !1,
  H = [],
  K = [],
  Q = {},
  Y = {},
  z = new Set,
  X = new Set;

function J() {
  let e = A.Z.getFriendIDs();
  return new Set(S.Z.hasConsented(B.pjP.PERSONALIZATION) ? [...x.Z.getUserAffinitiesUserIds(), ...e] : e)
}

function q(e) {
  return R.Z.findActivity(e, e => e.type !== B.IIU.CUSTOM_STATUS)
}

function $(e) {
  return null == Q[e] && (Q = V(L({}, Q), {
    [e]: new j.Z({
      name: e
    })
  })), Q[e]
}

function ee(e) {
  return null == Y[e] && (Y = V(L({}, Y), {
    [e]: new E.Z({
      url: e
    })
  })), Y[e]
}

function et(e) {
  X.has(e) || z.add(e)
}

function en(e) {
  if ((0, h.Z)(e)) return C.r9;
  let t = null != e.application_id ? y.Z.getApplication(e.application_id) : null;
  return null != t ? t : (0, f.Z)(e) ? $(e.name) : (0, p.Z)(e) && null != e.url ? ee(e.url) : (null != e.application_id && et(e.application_id), t)
}

function er(e) {
  let t = W.Z.getVoiceStateForUser(e);
  return (null == t ? void 0 : t.channelId) != null && _.Z.canWithPartialContext(B.Plq.VIEW_CHANNEL, {
    channelId: t.channelId
  }) ? t.channelId : null
}

function el(e) {
  return A.Z.isFriend(e.id)
}

function eo(e, t, n) {
  var r, l, i, a, s, h;
  let f;
  let p = D.default.getCurrentUser(),
    g = null !== (r = null == p ? void 0 : p.nsfwAllowed) && void 0 !== r && r,
    v = t.map(e => e.id),
    b = t.filter(t => e.has(t.id)),
    x = !1,
    S = [],
    A = new Set,
    k = !1,
    B = [];
  for (let e of t) {
    let n = I.Z.getAnyStreamForUser(e.id),
      r = P.Z.getChannel(null == n ? void 0 : n.channelId);
    if ((null == r ? void 0 : r.isNSFW()) && (!g || !T.Z.didAgree(null == r ? void 0 : r.getGuildId()))) continue;
    let h = q(e.id);
    if (null != n && B.push({
        stream: n,
        streamUser: e,
        activity: h
      }), null == h) continue;
    let f = (0, N.Z)(h);
    if (null == f) continue;
    k = f === C.XB;
    let v = function(e) {
      let t = y.Z.getApplication(e);
      return null != t ? t : "string" != typeof e ? (new O.Z("NowPlayingViewStore").error("Unknown type for applicationId: ".concat(typeof e, ", value: ").concat(e), {
        tags: {
          source: "ACTIVITIES"
        }
      }), null) : e === C.XB ? C.r9 : e.startsWith(j.H) ? $(e.slice(j.H.length)) : e.startsWith(E._) ? ee(e.slice(E._.length)) : (et(e), null)
    }(f);
    if ((0, d.Z)(h)) {
      let t = (0, c.a)();
      if ((0, u.ZP)({
          activity: h,
          userId: e.id,
          application: v,
          channelId: null === (i = W.Z.getVoiceStateForUser(e.id)) || void 0 === i ? void 0 : i.channelId,
          currentUser: p,
          isActivitiesEnabledForCurrentPlatform: t,
          ChannelStore: P.Z,
          VoiceStateStore: W.Z,
          PermissionStore: _.Z,
          GuildStore: Z.Z
        }) !== u.Fw.CAN_JOIN) continue
    }
    if (!m.JE(h) || null == v || A.has(v.id)) continue;
    let b = null != h ? en(h) : null;
    (null == b || b.id !== v.id) && (h = null);
    let R = [];
    R = null != h && null != h.party && null != h.party.id ? Array.from(null !== (a = w.Z.getParty(h.party.id)) && void 0 !== a ? a : []).reduce((e, t) => {
      let n = D.default.getUser(t);
      return null != n && e.push(n), e
    }, []) : t.filter(e => {
      let t = q(e.id),
        n = null != t ? en(t) : null;
      return null != n && n.id === v.id
    }), (R = o().orderBy(R, [el], ["desc"])).length !== t.length && (x = !0), A.add(v.id), S.push({
      game: v,
      activity: h,
      activityUser: e,
      startedPlayingTime: null !== (s = null == h ? void 0 : null === (l = h.timestamps) || void 0 === l ? void 0 : l.start) && void 0 !== s ? s : null == h ? void 0 : h.created_at,
      playingMembers: R
    })
  }
  let U = 1 === b.length,
    L = [],
    V = new Set,
    G = new Set;
  for (let e of t) {
    let n = er(e.id),
      r = P.Z.getChannel(n),
      l = null != r ? r.getGuildId() : null,
      i = Z.Z.getGuild(l);
    if (G.has(l) && V.has(n) || null == r || null == i || r.id === i.afkChannelId) null == r && (f = null, U = !0);
    else {
      let e = W.Z.getVoiceStatesForChannel(r.id),
        a = o()(e).map(e => {
          let {
            userId: t
          } = e;
          return D.default.getUser(t)
        }).filter(M.lm).orderBy([el], ["desc"]).value();
      a.filter(e => !v.includes(e.id)).forEach(e => t.push(e)), U ? G.has(l) || (f = null) : (f = i, U = !0), G.add(l), V.add(n), L.push({
        channel: r,
        guild: i,
        members: a,
        voiceStates: e
      })
    }
  }
  return {
    id: n,
    voiceChannels: L,
    isSpotifyActivity: k,
    priorityMembers: b.map(e => ({
      user: e,
      status: R.Z.getStatus(e.id)
    })),
    partiedMembers: t,
    showPlayingMembers: x,
    guildContext: f,
    currentActivities: (h = e => {
      var t;
      return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0
    }, o()(S).orderBy([h, e => e.game.name], ["desc", "asc"])).value(),
    applicationStreams: B
  }
}

function ei(e) {
  return !!(0 !== e.voiceChannels.length && (0, v.$W)("now-playing-view-store")) && e.voiceChannels.length > 0 && e.voiceChannels.some(e => {
    let {
      voiceStates: t
    } = e;
    return Object.values(t).some(e => !1 === e.discoverable)
  })
}

function ea(e) {
  return !!(0 !== e.voiceChannels.length && (0, v.$W)("now-playing-view-store")) && e.voiceChannels.length > 0 && e.voiceChannels.every(e => {
    let {
      voiceStates: t
    } = e;
    return Object.values(t).every(e => !1 === e.discoverable)
  })
}

function es(e) {
  return !!(0, v.sb)("now-playing-view-store") && e.partiedMembers.some(e => A.Z.isBlocked(e.id))
}

function ec() {
  return G && b.Z.isConnected()
}
let eu = o().throttle(() => {
  ! function() {
    var e;
    if (!ec()) return;
    z.clear();
    let t = (function(e) {
        let t = J(),
          n = eo.bind(null, t);
        return o()(e).mapValues(n)
      })((e = Array.from(J()).reduce((e, t) => {
        let n = D.default.getUser(t);
        return null == n || n.bot || e.push(n), e
      }, []), o()(e).groupBy(e => {
        var t;
        let n = er(e.id),
          r = q(e.id);
        return null != n ? "".concat("channel-").concat(n) : (null == r ? void 0 : null === (t = r.party) || void 0 === t ? void 0 : t.id) != null ? "".concat("party-").concat(r.party.id) : "".concat("user-").concat(e.id)
      }))).values().orderBy([ei, e => e.partiedMembers.length > 1, e => e.applicationStreams.length > 0, e => e.voiceChannels.length > 0, e => e.currentActivities.length > 0, e => e.isSpotifyActivity, e => e.priorityMembers.map(e => e.user.username.toLowerCase()).join(" ")], ["asc", "desc", "desc", "desc", "desc", "asc", "asc"]).value(),
      {
        blockeeExperimentEnabled: n,
        blockerExperimentEnabled: r,
        analyticsEligible: l
      } = (0, v.p7)("now-playing-view-store");
    l && t.forEach(e => {
        let t = (0, i.EQ)({
          party: e,
          blockeeExperimentEnabled: n,
          blockerExperimentEnabled: r
        }).returnType().with({
          blockerExperimentEnabled: !0,
          party: i.P.when(es)
        }, () => v.h9.HIDE).with({
          blockeeExperimentEnabled: !0,
          party: i.P.when(ea)
        }, () => v.h9.HIDE).with({
          blockeeExperimentEnabled: !0,
          party: i.P.when(ei)
        }, () => v.h9.DERANK).otherwise(() => v.h9.SHOW);
        e.voiceChannels.forEach(e => {
          let {
            voiceStates: n,
            channel: r
          } = e, l = o().map(n, "userId"), i = o().map(n, "discoverable"), a = o().map(n, e => A.Z.getRelationshipType(e.userId));
          k.default.track(B.rMx.PARTY_VOICE_ACTIVITY_VIEWED, {
            activity_user_ids: l,
            discoverable: i,
            relationship_types: a,
            voice_channel_id: r.id,
            treatment: t,
            surface: "now-playing"
          })
        })
      }), K = (H = t.filter(e => {
        let {
          blockeeExperimentEnabled: t,
          blockerExperimentEnabled: n
        } = (0, v.p7)("now-playing-view-store"), r = n && es(e), l = t && ea(e);
        return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !r && !l
      })).map(e => ({
        type: B.GOo.USER,
        party: e
      })),
      function() {
        if (z.size > 0) {
          let e = Array.from(z);
          g.ZP.fetchApplications(e), e.forEach(e => X.add(e)), z.clear()
        }
      }(), F = !0
  }(), ef.emitChange()
}, 1e3);

function ed() {
  return !!ec() && (eu(), !1)
}
class eh extends(r = a.ZP.Store) {
  initialize() {
    this.syncWith([D.default, y.Z, R.Z, w.Z, W.Z, I.Z, A.Z, S.Z, x.Z], ed), this.waitFor(b.Z, Z.Z, y.Z, D.default, x.Z)
  }
  get currentActivityParties() {
    return H
  }
  get nowPlayingCards() {
    return K
  }
  get isMounted() {
    return G
  }
  get loaded() {
    return F
  }
}
U(eh, "displayName", "NowPlayingViewStore");
let ef = new eh(s.Z, {
    LOGOUT: function() {
      G = !1, H = [], K = [], z.clear()
    },
    NOW_PLAYING_MOUNTED: function() {
      G = !0, eu()
    },
    NOW_PLAYING_UNMOUNTED: function() {
      G = !1
    }
  }),
  ep = ef