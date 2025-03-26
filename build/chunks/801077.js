/** Chunk was on 58173 **/
n.d(t, {
  Z: () => ep
}), n(47120), n(653041), n(627341);
var r, l = n(392711),
  i = n.n(l),
  o = n(278074),
  s = n(442837),
  a = n(570140),
  c = n(782769),
  u = n(527805),
  d = n(841784),
  h = n(503438),
  f = n(802856),
  p = n(420660),
  g = n(728345),
  v = n(812206),
  N = n(750881),
  y = n(710845),
  O = n(38618),
  x = n(656063),
  m = n(761282),
  b = n(814443),
  E = n(789407),
  C = n(630186),
  j = n(250889),
  I = n(199902),
  S = n(592125),
  P = n(480294),
  T = n(831506),
  w = n(731290),
  Z = n(430824),
  _ = n(496675),
  R = n(158776),
  A = n(699516),
  W = n(594174),
  D = n(979651),
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

function G(e, t) {
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
let V = !1,
  F = !1,
  K = [],
  H = [],
  Q = {},
  Y = {},
  z = new Set,
  X = new Set;

function J() {
  let e = A.Z.getFriendIDs();
  return new Set(P.Z.hasConsented(B.pjP.PERSONALIZATION) ? [...b.Z.getUserAffinitiesUserIds(), ...e] : e)
}

function q(e) {
  return R.Z.findActivity(e, e => e.type !== B.IIU.CUSTOM_STATUS)
}

function $(e) {
  return null == Q[e] && (Q = G(L({}, Q), {
    [e]: new j.Z({
      name: e
    })
  })), Q[e]
}

function ee(e) {
  return null == Y[e] && (Y = G(L({}, Y), {
    [e]: new C.Z({
      url: e
    })
  })), Y[e]
}

function et(e) {
  X.has(e) || z.add(e)
}

function en(e) {
  if ((0, h.Z)(e)) return E.r9;
  let t = null != e.application_id ? v.Z.getApplication(e.application_id) : null;
  return null != t ? t : (0, f.Z)(e) ? $(e.name) : (0, p.Z)(e) && null != e.url ? ee(e.url) : (null != e.application_id && et(e.application_id), t)
}

function er(e) {
  let t = D.Z.getVoiceStateForUser(e);
  return (null == t ? void 0 : t.channelId) != null && _.Z.canWithPartialContext(B.Plq.VIEW_CHANNEL, {
    channelId: t.channelId
  }) ? t.channelId : null
}

function el(e) {
  return A.Z.isFriend(e.id)
}

function ei(e, t, n) {
  var r, l, o, s, a, h;
  let f;
  let p = W.default.getCurrentUser(),
    g = null !== (r = null == p ? void 0 : p.nsfwAllowed) && void 0 !== r && r,
    N = t.map(e => e.id),
    O = t.filter(t => e.has(t.id)),
    b = !1,
    P = [],
    A = new Set,
    k = !1,
    B = [];
  for (let e of t) {
    let n = I.Z.getAnyStreamForUser(e.id),
      r = S.Z.getChannel(null == n ? void 0 : n.channelId);
    if ((null == r ? void 0 : r.isNSFW()) && (!g || !w.Z.didAgree(null == r ? void 0 : r.getGuildId()))) continue;
    let h = q(e.id);
    if (null != n && B.push({
        stream: n,
        streamUser: e,
        activity: h
      }), null == h) continue;
    let f = (0, x.Z)(h);
    if (null == f) continue;
    k = f === E.XB;
    let N = function(e) {
      let t = v.Z.getApplication(e);
      return null != t ? t : "string" != typeof e ? (new y.Z("NowPlayingViewStore").error("Unknown type for applicationId: ".concat(typeof e, ", value: ").concat(e), {
        tags: {
          source: "ACTIVITIES"
        }
      }), null) : e === E.XB ? E.r9 : e.startsWith(j.H) ? $(e.slice(j.H.length)) : e.startsWith(C._) ? ee(e.slice(C._.length)) : (et(e), null)
    }(f);
    if ((0, d.Z)(h)) {
      let t = (0, c.a)();
      if ((0, u.ZP)({
          activity: h,
          userId: e.id,
          application: N,
          channelId: null === (o = D.Z.getVoiceStateForUser(e.id)) || void 0 === o ? void 0 : o.channelId,
          currentUser: p,
          isActivitiesEnabledForCurrentPlatform: t,
          ChannelStore: S.Z,
          VoiceStateStore: D.Z,
          PermissionStore: _.Z,
          GuildStore: Z.Z
        }) !== u.Fw.CAN_JOIN) continue
    }
    if (!m.JE(h) || null == N || A.has(N.id)) continue;
    let O = null != h ? en(h) : null;
    (null == O || O.id !== N.id) && (h = null);
    let R = [];
    R = null != h && null != h.party && null != h.party.id ? Array.from(null !== (s = T.Z.getParty(h.party.id)) && void 0 !== s ? s : []).reduce((e, t) => {
      let n = W.default.getUser(t);
      return null != n && e.push(n), e
    }, []) : t.filter(e => {
      let t = q(e.id),
        n = null != t ? en(t) : null;
      return null != n && n.id === N.id
    }), (R = i().orderBy(R, [el], ["desc"])).length !== t.length && (b = !0), A.add(N.id), P.push({
      game: N,
      activity: h,
      activityUser: e,
      startedPlayingTime: null !== (a = null == h ? void 0 : null === (l = h.timestamps) || void 0 === l ? void 0 : l.start) && void 0 !== a ? a : null == h ? void 0 : h.created_at,
      playingMembers: R
    })
  }
  let U = 1 === O.length,
    L = [],
    G = new Set,
    V = new Set;
  for (let e of t) {
    let n = er(e.id),
      r = S.Z.getChannel(n),
      l = null != r ? r.getGuildId() : null,
      o = Z.Z.getGuild(l);
    if (V.has(l) && G.has(n) || null == r || null == o || r.id === o.afkChannelId) null == r && (f = null, U = !0);
    else {
      let e = D.Z.getVoiceStatesForChannel(r.id),
        s = i()(e).map(e => {
          let {
            userId: t
          } = e;
          return W.default.getUser(t)
        }).filter(M.lm).orderBy([el], ["desc"]).value();
      s.filter(e => !N.includes(e.id)).forEach(e => t.push(e)), U ? V.has(l) || (f = null) : (f = o, U = !0), V.add(l), G.add(n), L.push({
        channel: r,
        guild: o,
        members: s,
        voiceStates: e
      })
    }
  }
  return {
    id: n,
    voiceChannels: L,
    isSpotifyActivity: k,
    priorityMembers: O.map(e => ({
      user: e,
      status: R.Z.getStatus(e.id)
    })),
    partiedMembers: t,
    showPlayingMembers: b,
    guildContext: f,
    currentActivities: (h = e => {
      var t;
      return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0
    }, i()(P).orderBy([h, e => e.game.name], ["desc", "asc"])).value(),
    applicationStreams: B
  }
}

function eo(e) {
  return !!(0 !== e.voiceChannels.length && (0, N.$W)("now-playing-view-store")) && e.voiceChannels.length > 0 && e.voiceChannels.some(e => {
    let {
      voiceStates: t
    } = e;
    return Object.values(t).some(e => !1 === e.discoverable)
  })
}

function es(e) {
  return !!(0 !== e.voiceChannels.length && (0, N.$W)("now-playing-view-store")) && e.voiceChannels.length > 0 && e.voiceChannels.every(e => {
    let {
      voiceStates: t
    } = e;
    return Object.values(t).every(e => !1 === e.discoverable)
  })
}

function ea(e) {
  return !!(0, N.sb)("now-playing-view-store") && e.partiedMembers.some(e => A.Z.isBlocked(e.id))
}

function ec() {
  return V && O.Z.isConnected()
}
let eu = i().throttle(() => {
  ! function() {
    var e;
    if (!ec()) return;
    z.clear();
    let t = (function(e) {
        let t = J(),
          n = ei.bind(null, t);
        return i()(e).mapValues(n)
      })((e = Array.from(J()).reduce((e, t) => {
        let n = W.default.getUser(t);
        return null == n || n.bot || e.push(n), e
      }, []), i()(e).groupBy(e => {
        var t;
        let n = er(e.id),
          r = q(e.id);
        return null != n ? "".concat("channel-").concat(n) : (null == r ? void 0 : null === (t = r.party) || void 0 === t ? void 0 : t.id) != null ? "".concat("party-").concat(r.party.id) : "".concat("user-").concat(e.id)
      }))).values().orderBy([eo, e => e.partiedMembers.length > 1, e => e.applicationStreams.length > 0, e => e.voiceChannels.length > 0, e => e.currentActivities.length > 0, e => e.isSpotifyActivity, e => e.priorityMembers.map(e => e.user.username.toLowerCase()).join(" ")], ["asc", "desc", "desc", "desc", "desc", "asc", "asc"]).value(),
      {
        blockeeExperimentEnabled: n,
        blockerExperimentEnabled: r,
        analyticsEligible: l
      } = (0, N.p7)("now-playing-view-store");
    l && t.forEach(e => {
        let t = (0, o.EQ)({
          party: e,
          blockeeExperimentEnabled: n,
          blockerExperimentEnabled: r
        }).returnType().with({
          blockerExperimentEnabled: !0,
          party: o.P.when(ea)
        }, () => N.h9.HIDE).with({
          blockeeExperimentEnabled: !0,
          party: o.P.when(es)
        }, () => N.h9.HIDE).with({
          blockeeExperimentEnabled: !0,
          party: o.P.when(eo)
        }, () => N.h9.DERANK).otherwise(() => N.h9.SHOW);
        e.voiceChannels.forEach(e => {
          let {
            voiceStates: n,
            channel: r
          } = e, l = i().map(n, "userId"), o = i().map(n, "discoverable"), s = i().map(n, e => A.Z.getRelationshipType(e.userId));
          k.default.track(B.rMx.PARTY_VOICE_ACTIVITY_VIEWED, {
            activity_user_ids: l,
            discoverable: o,
            relationship_types: s,
            voice_channel_id: r.id,
            treatment: t,
            surface: "now-playing"
          })
        })
      }), H = (K = t.filter(e => {
        let {
          blockeeExperimentEnabled: t,
          blockerExperimentEnabled: n
        } = (0, N.p7)("now-playing-view-store"), r = n && ea(e), l = t && es(e);
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
class eh extends(r = s.ZP.Store) {
  initialize() {
    this.syncWith([W.default, v.Z, R.Z, T.Z, D.Z, I.Z, A.Z, P.Z, b.Z], ed), this.waitFor(O.Z, Z.Z, v.Z, W.default, b.Z)
  }
  get currentActivityParties() {
    return K
  }
  get nowPlayingCards() {
    return H
  }
  get isMounted() {
    return V
  }
  get loaded() {
    return F
  }
}
U(eh, "displayName", "NowPlayingViewStore");
let ef = new eh(a.Z, {
    LOGOUT: function() {
      V = !1, K = [], H = [], z.clear()
    },
    NOW_PLAYING_MOUNTED: function() {
      V = !0, eu()
    },
    NOW_PLAYING_UNMOUNTED: function() {
      V = !1
    }
  }),
  ep = ef