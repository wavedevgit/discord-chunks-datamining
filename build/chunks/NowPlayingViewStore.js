/** Chunk was on web.js **/
/** chunk id: 801077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => ew
}), require("./388685.js"), require("./539854.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk790920 = require("./790920.js"),
  Chunk527805 = require("./527805.js"),
  Chunk841784 = require("./841784.js"),
  Chunk503438 = require("./503438.js"),
  Chunk802856 = require("./802856.js"),
  Chunk420660 = require("./420660.js"),
  Chunk622822 = require("./622822.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk710845 = require("./710845.js"),
  Chunk38618 = require("./38618.js"),
  Chunk656063 = require("./656063.js"),
  Chunk761282 = require("./761282.jsx"),
  Chunk752048 = require("./752048.js"),
  Chunk992261 = require("./992261.js"),
  Chunk439944 = require("./439944.js"),
  Chunk789407 = require("./789407.js"),
  Chunk630186 = require("./630186.js"),
  Chunk250889 = require("./250889.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk480294 = require("./480294.js"),
  Chunk831506 = require("./831506.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let V = "party-",
  H = "channel-",
  Y = "user-",
  W = 1e3,
  K = false,
  z = false,
  q = [],
  Q = [],
  X = {},
  J = {},
  $ = new Set,
  ee = new Set;

function et() {
  let e = L.Z.getFriendIDs();
  return new Set(P.Z.hasConsented(U.pjP.PERSONALIZATION) ? [...O.Z.getUserAffinities().filter(e => e.communicationRank <= 15).map(e => e.otherUserId), ...e] : e)
}

function en(e) {
  return x.Z.findActivity(e, e => e.type !== U.IIU.CUSTOM_STATUS)
}

function er(e) {
  return null == X[e] && (X = B(Z({}, X), {
    [e]: new C.Z({
      name: e
    })
  })), X[e]
}

function ei(e) {
  return null == J[e] && (J = B(Z({}, J), {
    [e]: new T.Z({
      url: e
    })
  })), J[e]
}

function ea(e) {
  ee.has(e) || $.add(e)
}

function eo(e) {
  if ((0, d.Z)(e)) return I.r9;
  if ((0, f.Z)(e)) return er(e.name);
  let t = null != e.application_id ? m.Z.getApplication(e.application_id) : null;
  return null != t ? t : (0, p.Z)(e) && null != e.url ? ei(e.url) : (null != e.application_id && ea(e.application_id), t)
}

function es(e) {
  let t = m.Z.getApplication(e);
  return null != t ? t : "string" != typeof e ? (new g.Z("NowPlayingViewStore").error("Unknown type for applicationId: ".concat(typeof e, ", value: ").concat(e), {
    tags: {
      source: "ACTIVITIES"
    }
  }), null) : e === I.XB ? I.r9 : e.startsWith(C.H) ? er(e.slice(C.H.length)) : e.startsWith(T._) ? ei(e.slice(T._.length)) : (ea(e), null)
}

function el(e) {
  let t = M.Z.getVoiceStateForUser(e);
  return (null == t ? true : t.channelId) != null && D.Z.canWithPartialContext(U.Plq.VIEW_CHANNEL, {
    channelId: t.channelId
  }) ? t.channelId : null
}

function ec(e) {
  return a()(e).groupBy(e => {
    var t;
    let n = el(e.id),
      r = en(e.id);
    return null != n ? "".concat(H).concat(n) : (null == r || null == (t = r.party) ? true : t.id) != null ? "".concat(V).concat(r.party.id) : "".concat(Y).concat(e.id)
  })
}

function eu(e, t) {
  let n = e => e.game.name;
  return a()(e).orderBy([t, n], ["desc", "asc"])
}

function ed(e) {
  return L.Z.isFriend(e.id)
}

function ef(e, t, n) {
  let r, i = j.default.getCurrentUser(),
    o = O.Z.getUserAffinitiesMap(),
    s = (0, S.C)(t, o, "NowPlayingViewStore - partiedMembers"),
    d = s.map(e => e.id),
    f = s.filter(t => e.has(t.id)),
    p = false,
    h = [],
    m = new Set,
    g = false,
    E = [];
  for (let e of s) {
    var T, C, P, L;
    let t = A.Z.getAnyStreamForUser(e.id),
      n = N.Z.getChannel(null == t ? true : t.channelId);
    if ((0, _.Y3)(n)) continue;
    let r = en(e.id);
    if (null != t && E.push({
        stream: t,
        streamUser: e,
        activity: r
      }), null == r) continue;
    let o = (0, b.Z)(r);
    if (null == o) continue;
    g = o === I.XB;
    let d = es(o);
    if ((0, u.Z)(r)) {
      let t = (0, l.a)();
      if ((0, c.ZP)({
          activity: r,
          userId: e.id,
          application: d,
          channelId: null == (C = M.Z.getVoiceStateForUser(e.id)) ? true : C.channelId,
          currentUser: i,
          isActivitiesEnabledForCurrentPlatform: t,
          ChannelStore: N.Z,
          VoiceStateStore: M.Z,
          PermissionStore: D.Z,
          GuildStore: R.Z
        }) !== c.Fw.CAN_JOIN) continue
    }
    if (!y.JE(r) || null == d || m.has(d.id)) continue;
    let f = null != r ? eo(r) : null;
    (null == f || f.id !== d.id) && (r = null);
    let O = [];
    O = null != r && null != r.party && null != r.party.id ? Array.from(null != (P = w.Z.getParty(r.party.id)) ? P : []).reduce((e, t) => {
      let n = j.default.getUser(t);
      return null != n && e.push(n), e
    }, []) : s.filter(e => {
      let t = en(e.id),
        n = null != t ? eo(t) : null;
      return null != n && n.id === d.id
    }), (O = a().orderBy(O, [ed], ["desc"])).length !== s.length && (p = true), m.add(d.id), h.push({
      game: d,
      activity: r,
      activityUser: e,
      startedPlayingTime: null != (L = null == r || null == (T = r.timestamps) ? true : T.start) ? L : null == r ? true : r.created_at,
      playingMembers: O
    })
  }
  let U = 1 === f.length,
    G = [],
    Z = new Set,
    F = new Set;
  for (let e of s) {
    let t = el(e.id),
      n = N.Z.getChannel(t),
      i = null != n ? n.getGuildId() : null,
      o = R.Z.getGuild(i);
    if (F.has(i) && Z.has(t) || null == n || null == o || n.id === o.afkChannelId) null == n && (r = null, U = true);
    else {
      let e = M.Z.getVoiceStatesForChannel(n.id),
        l = (0, v.HG)("NowPlayingViewStore - voiceMembers"),
        c = ed;
      null != l && (c = e => {
        var t, n;
        let r = O.Z.getUserAffinity(e.id);
        return "vc_probability" === l ? null != (t = null == r ? true : r.vcProbability) ? t : 0 : null != (n = null == r ? true : r.communicationProbability) ? n : 0
      });
      let u = a()(e).map(e => {
        let {
          userId: t
        } = e;
        return j.default.getUser(t)
      }).filter(k.lm).orderBy([c], ["desc"]).value();
      u.filter(e => !d.includes(e.id)).forEach(e => s.push(e)), U ? F.has(i) || (r = null) : (r = o, U = true), F.add(i), Z.add(t), G.push({
        channel: n,
        guild: o,
        members: u,
        voiceStates: e
      })
    }
  }
  return {
    id: n,
    voiceChannels: G,
    isSpotifyActivity: g,
    priorityMembers: f.map(e => ({
      user: e,
      status: x.Z.getStatus(e.id)
    })),
    partiedMembers: s,
    showPlayingMembers: p,
    guildContext: r,
    currentActivities: eu(h, e => {
      var t;
      return null != (t = e.startedPlayingTime) ? t : 0
    }).value(),
    applicationStreams: E
  }
}

function ep(e) {
  let t = et(),
    n = ef.bind(null, t);
  return a()(e).mapValues(n)
}

function e_(e) {
  let t = e => e.priorityMembers.map(e => e.user.username.toLowerCase()).join(" "),
    n = e => e.currentActivities.length > 0,
    r = e => e.voiceChannels.length > 0,
    i = e => e.applicationStreams.length > 0,
    a = e => e.partiedMembers.length > 1,
    o = e => e.isSpotifyActivity;
  return e.values().orderBy([eh, a, i, r, n, o, t], ["asc", "desc", "desc", "desc", "desc", "asc", "asc"]).value()
}

function eh(e) {
  return 0 !== e.voiceChannels.length && e.voiceChannels.length > 0 && e.voiceChannels.some(e => {
    let {
      voiceStates: t
    } = e;
    return Object.values(t).some(e => false === e.discoverable)
  })
}

function em(e) {
  return 0 !== e.voiceChannels.length && e.voiceChannels.length > 0 && e.voiceChannels.every(e => {
    let {
      voiceStates: t
    } = e;
    return Object.values(t).every(e => false === e.discoverable)
  })
}

function eg(e) {
  return e.partiedMembers.some(e => L.Z.isBlockedOrIgnored(e.id))
}

function eE(e) {
  return e.filter(e => {
    let t = eg(e),
      n = em(e);
    return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !t && !n
  })
}

function eb(e) {
  return e.map(e => ({
    type: U.GOo.USER,
    party: e
  }))
}

function ey() {
  if ($.size > 0) {
    let e = Array.from($);
    h.ZP.fetchApplications(e), e.forEach(e => ee.add(e)), $.clear()
  }
}

function eO() {
  return K && E.Z.isConnected()
}

function ev() {
  if (!eO()) returnfalse;
  $.clear(), Q = eb(q = eE(e_(ep(ec(Array.from(et()).reduce((e, t) => {
    let n = j.default.getUser(t);
    return null == n || n.bot || e.push(n), e
  }, [])))))), ey(), z = true
}
let eS = a().throttle(() => {
  ev(), eP.emitChange()
}, W);

function eI() {
  return !!eO() && (eS(), false)
}

function eT() {
  K = false, q = [], Q = [], $.clear()
}

function eC() {
  K = true, eS()
}

function eA() {
  K = false
}
class eN extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([j.default, m.Z, x.Z, w.Z, M.Z, A.Z, L.Z, P.Z, O.Z], eI), this.waitFor(m.Z, A.Z, N.Z, P.Z, w.Z, E.Z, R.Z, D.Z, x.Z, L.Z, O.Z, j.default, M.Z)
  }
  get currentActivityParties() {
    return q
  }
  get nowPlayingCards() {
    return Q
  }
  get isMounted() {
    return K
  }
  get loaded() {
    return z
  }
}
G(eN, "displayName", "NowPlayingViewStore");
let eP = new eN(Chunk570140.Z, {
    LOGOUT: eT,
    NOW_PLAYING_MOUNTED: eC,
    NOW_PLAYING_UNMOUNTED: eA
  }),
  ew = eP