/** Chunk was on 61195 **/
n.d(t, {
  Z: () => ef
}), n(47120), n(653041), n(627341);
var i, o = n(392711),
  r = n.n(o),
  a = n(278074),
  l = n(442837),
  c = n(570140),
  s = n(782769),
  u = n(527805),
  d = n(841784),
  _ = n(503438),
  h = n(802856),
  f = n(420660),
  p = n(728345),
  g = n(812206),
  v = n(750881),
  b = n(710845),
  y = n(38618),
  m = n(656063),
  I = n(761282),
  O = n(814443),
  N = n(789407),
  C = n(630186),
  S = n(250889),
  x = n(199902),
  w = n(592125),
  T = n(480294),
  P = n(831506),
  E = n(731290),
  j = n(430824),
  Z = n(496675),
  A = n(158776),
  W = n(699516),
  k = n(594174),
  R = n(979651),
  D = n(626135),
  B = n(823379),
  F = n(981631);

function M(e, t, n) {
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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let G = !1,
  H = !1,
  V = [],
  K = [],
  Q = {},
  z = {},
  Y = new Set,
  X = new Set;

function J() {
  let e = W.Z.getFriendIDs();
  return new Set(T.Z.hasConsented(F.pjP.PERSONALIZATION) ? [...O.Z.getUserAffinitiesUserIds(), ...e] : e)
}

function q(e) {
  return A.Z.findActivity(e, e => e.type !== F.IIU.CUSTOM_STATUS)
}

function $(e) {
  return null == Q[e] && (Q = U(L({}, Q), {
    [e]: new S.Z({
      name: e
    })
  })), Q[e]
}

function ee(e) {
  return null == z[e] && (z = U(L({}, z), {
    [e]: new C.Z({
      url: e
    })
  })), z[e]
}

function et(e) {
  X.has(e) || Y.add(e)
}

function en(e) {
  if ((0, _.Z)(e)) return N.r9;
  let t = null != e.application_id ? g.Z.getApplication(e.application_id) : null;
  return null != t ? t : (0, h.Z)(e) ? $(e.name) : (0, f.Z)(e) && null != e.url ? ee(e.url) : (null != e.application_id && et(e.application_id), t)
}

function ei(e) {
  let t = R.Z.getVoiceStateForUser(e);
  return (null == t ? void 0 : t.channelId) != null && Z.Z.canWithPartialContext(F.Plq.VIEW_CHANNEL, {
    channelId: t.channelId
  }) ? t.channelId : null
}

function eo(e) {
  return W.Z.isFriend(e.id)
}

function er(e, t, n) {
  var i, o, a, l, c, _;
  let h;
  let f = k.default.getCurrentUser(),
    p = null !== (i = null == f ? void 0 : f.nsfwAllowed) && void 0 !== i && i,
    v = t.map(e => e.id),
    y = t.filter(t => e.has(t.id)),
    O = !1,
    T = [],
    W = new Set,
    D = !1,
    F = [];
  for (let e of t) {
    let n = x.Z.getAnyStreamForUser(e.id),
      i = w.Z.getChannel(null == n ? void 0 : n.channelId);
    if ((null == i ? void 0 : i.isNSFW()) && (!p || !E.Z.didAgree(null == i ? void 0 : i.getGuildId()))) continue;
    let _ = q(e.id);
    if (null != n && F.push({
        stream: n,
        streamUser: e,
        activity: _
      }), null == _) continue;
    let h = (0, m.Z)(_);
    if (null == h) continue;
    D = h === N.XB;
    let v = function(e) {
      let t = g.Z.getApplication(e);
      return null != t ? t : "string" != typeof e ? (new b.Z("NowPlayingViewStore").error("Unknown type for applicationId: ".concat(typeof e, ", value: ").concat(e), {
        tags: {
          source: "ACTIVITIES"
        }
      }), null) : e === N.XB ? N.r9 : e.startsWith(S.H) ? $(e.slice(S.H.length)) : e.startsWith(C._) ? ee(e.slice(C._.length)) : (et(e), null)
    }(h);
    if ((0, d.Z)(_)) {
      let t = (0, s.a)();
      if ((0, u.ZP)({
          activity: _,
          userId: e.id,
          application: v,
          channelId: null === (a = R.Z.getVoiceStateForUser(e.id)) || void 0 === a ? void 0 : a.channelId,
          currentUser: f,
          isActivitiesEnabledForCurrentPlatform: t,
          ChannelStore: w.Z,
          VoiceStateStore: R.Z,
          PermissionStore: Z.Z,
          GuildStore: j.Z
        }) !== u.Fw.CAN_JOIN) continue
    }
    if (!I.JE(_) || null == v || W.has(v.id)) continue;
    let y = null != _ ? en(_) : null;
    (null == y || y.id !== v.id) && (_ = null);
    let A = [];
    A = null != _ && null != _.party && null != _.party.id ? Array.from(null !== (l = P.Z.getParty(_.party.id)) && void 0 !== l ? l : []).reduce((e, t) => {
      let n = k.default.getUser(t);
      return null != n && e.push(n), e
    }, []) : t.filter(e => {
      let t = q(e.id),
        n = null != t ? en(t) : null;
      return null != n && n.id === v.id
    }), (A = r().orderBy(A, [eo], ["desc"])).length !== t.length && (O = !0), W.add(v.id), T.push({
      game: v,
      activity: _,
      activityUser: e,
      startedPlayingTime: null !== (c = null == _ ? void 0 : null === (o = _.timestamps) || void 0 === o ? void 0 : o.start) && void 0 !== c ? c : null == _ ? void 0 : _.created_at,
      playingMembers: A
    })
  }
  let M = 1 === y.length,
    L = [],
    U = new Set,
    G = new Set;
  for (let e of t) {
    let n = ei(e.id),
      i = w.Z.getChannel(n),
      o = null != i ? i.getGuildId() : null,
      a = j.Z.getGuild(o);
    if (G.has(o) && U.has(n) || null == i || null == a || i.id === a.afkChannelId) null == i && (h = null, M = !0);
    else {
      let e = R.Z.getVoiceStatesForChannel(i.id),
        l = r()(e).map(e => {
          let {
            userId: t
          } = e;
          return k.default.getUser(t)
        }).filter(B.lm).orderBy([eo], ["desc"]).value();
      l.filter(e => !v.includes(e.id)).forEach(e => t.push(e)), M ? G.has(o) || (h = null) : (h = a, M = !0), G.add(o), U.add(n), L.push({
        channel: i,
        guild: a,
        members: l,
        voiceStates: e
      })
    }
  }
  return {
    id: n,
    voiceChannels: L,
    isSpotifyActivity: D,
    priorityMembers: y.map(e => ({
      user: e,
      status: A.Z.getStatus(e.id)
    })),
    partiedMembers: t,
    showPlayingMembers: O,
    guildContext: h,
    currentActivities: (_ = e => {
      var t;
      return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0
    }, r()(T).orderBy([_, e => e.game.name], ["desc", "asc"])).value(),
    applicationStreams: F
  }
}

function ea(e) {
  return !!(0 !== e.voiceChannels.length && (0, v.$W)("now-playing-view-store")) && e.voiceChannels.length > 0 && e.voiceChannels.some(e => {
    let {
      voiceStates: t
    } = e;
    return Object.values(t).some(e => !1 === e.discoverable)
  })
}

function el(e) {
  return !!(0 !== e.voiceChannels.length && (0, v.$W)("now-playing-view-store")) && e.voiceChannels.length > 0 && e.voiceChannels.every(e => {
    let {
      voiceStates: t
    } = e;
    return Object.values(t).every(e => !1 === e.discoverable)
  })
}

function ec(e) {
  return !!(0, v.sb)("now-playing-view-store") && e.partiedMembers.some(e => W.Z.isBlocked(e.id))
}

function es() {
  return G && y.Z.isConnected()
}
let eu = r().throttle(() => {
  ! function() {
    var e;
    if (!es()) return;
    Y.clear();
    let t = (function(e) {
        let t = J(),
          n = er.bind(null, t);
        return r()(e).mapValues(n)
      })((e = Array.from(J()).reduce((e, t) => {
        let n = k.default.getUser(t);
        return null == n || n.bot || e.push(n), e
      }, []), r()(e).groupBy(e => {
        var t;
        let n = ei(e.id),
          i = q(e.id);
        return null != n ? "".concat("channel-").concat(n) : (null == i ? void 0 : null === (t = i.party) || void 0 === t ? void 0 : t.id) != null ? "".concat("party-").concat(i.party.id) : "".concat("user-").concat(e.id)
      }))).values().orderBy([ea, e => e.partiedMembers.length > 1, e => e.applicationStreams.length > 0, e => e.voiceChannels.length > 0, e => e.currentActivities.length > 0, e => e.isSpotifyActivity, e => e.priorityMembers.map(e => e.user.username.toLowerCase()).join(" ")], ["asc", "desc", "desc", "desc", "desc", "asc", "asc"]).value(),
      {
        blockeeExperimentEnabled: n,
        blockerExperimentEnabled: i,
        analyticsEligible: o
      } = (0, v.p7)("now-playing-view-store");
    o && t.forEach(e => {
        let t = (0, a.EQ)({
          party: e,
          blockeeExperimentEnabled: n,
          blockerExperimentEnabled: i
        }).returnType().with({
          blockerExperimentEnabled: !0,
          party: a.P.when(ec)
        }, () => v.h9.HIDE).with({
          blockeeExperimentEnabled: !0,
          party: a.P.when(el)
        }, () => v.h9.HIDE).with({
          blockeeExperimentEnabled: !0,
          party: a.P.when(ea)
        }, () => v.h9.DERANK).otherwise(() => v.h9.SHOW);
        e.voiceChannels.forEach(e => {
          let {
            voiceStates: n,
            channel: i
          } = e, o = r().map(n, "userId"), a = r().map(n, "discoverable"), l = r().map(n, e => W.Z.getRelationshipType(e.userId));
          D.default.track(F.rMx.PARTY_VOICE_ACTIVITY_VIEWED, {
            activity_user_ids: o,
            discoverable: a,
            relationship_types: l,
            voice_channel_id: i.id,
            treatment: t,
            surface: "now-playing"
          })
        })
      }), K = (V = t.filter(e => {
        let {
          blockeeExperimentEnabled: t,
          blockerExperimentEnabled: n
        } = (0, v.p7)("now-playing-view-store"), i = n && ec(e), o = t && el(e);
        return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !i && !o
      })).map(e => ({
        type: F.GOo.USER,
        party: e
      })),
      function() {
        if (Y.size > 0) {
          let e = Array.from(Y);
          p.ZP.fetchApplications(e), e.forEach(e => X.add(e)), Y.clear()
        }
      }(), H = !0
  }(), eh.emitChange()
}, 1e3);

function ed() {
  return !!es() && (eu(), !1)
}
class e_ extends(i = l.ZP.Store) {
  initialize() {
    this.syncWith([k.default, g.Z, A.Z, P.Z, R.Z, x.Z, W.Z, T.Z, O.Z], ed), this.waitFor(y.Z, j.Z, g.Z, k.default, O.Z)
  }
  get currentActivityParties() {
    return V
  }
  get nowPlayingCards() {
    return K
  }
  get isMounted() {
    return G
  }
  get loaded() {
    return H
  }
}
M(e_, "displayName", "NowPlayingViewStore");
let eh = new e_(c.Z, {
    LOGOUT: function() {
      G = !1, V = [], K = [], Y.clear()
    },
    NOW_PLAYING_MOUNTED: function() {
      G = !0, eu()
    },
    NOW_PLAYING_UNMOUNTED: function() {
      G = !1
    }
  }),
  ef = eh