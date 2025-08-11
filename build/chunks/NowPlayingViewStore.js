/** Chunk was on web.js **/
/** chunk id: 801077, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eR
}), require("./388685.js"), require("./539854.js");
var r, Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
  Chunk789407 = require("./789407.js"),
  Chunk630186 = require("./630186.js"),
  Chunk250889 = require("./250889.js"),
  Chunk199902 = require("./199902.js"),
  Chunk592125 = require("./592125.js"),
  Chunk480294 = require("./480294.js"),
  Chunk831506 = require("./831506.js"),
  Chunk731290 = require("./731290.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
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

function B(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let F = "party-",
  V = "channel-",
  H = "user-",
  Y = 1e3,
  W = false,
  K = false,
  z = [],
  q = [],
  X = {},
  Q = {},
  J = new Set,
  $ = new Set;

function ee() {
  let e = Chunk699516.Z.getFriendIDs();
  return new Set(Chunk480294.Z.hasConsented(Chunk981631.pjP.PERSONALIZATION) ? [...Chunk752048.Z.getUserAffinities().map(e => e.otherUserId), ...module] : module)
}

function et(e) {
  return D.Z.findActivity(e, e => e.type !== j.IIU.CUSTOM_STATUS)
}

function en(e) {
  return null == X[e] && (X = Z(G({}, X), {
    [e]: new T.Z({
      name: e
    })
  })), X[e]
}

function er(e) {
  return null == Q[e] && (Q = Z(G({}, Q), {
    [e]: new I.Z({
      url: e
    })
  })), Q[e]
}

function ei(e) {
  $.has(e) || J.add(e)
}

function eo(e) {
  if ((0, d.Z)(e)) return v.r9;
  if ((0, f.Z)(e)) return en(e.name);
  let t = null != e.application_id ? m.Z.getApplication(e.application_id) : null;
  return null != t ? t : (0, _.Z)(e) && null != e.url ? er(e.url) : (null != e.application_id && ei(e.application_id), t)
}

function ea(e) {
  let t = m.Z.getApplication(e);
  return null != t ? t : "string" != typeof e ? (new g.Z("NowPlayingViewStore").error("Unknown type for applicationId: ".concat(typeof e, ", value: ").concat(e), {
    tags: {
      source: "ACTIVITIES"
    }
  }), null) : e === v.XB ? v.r9 : e.startsWith(T.H) ? en(e.slice(T.H.length)) : e.startsWith(I._) ? er(e.slice(I._.length)) : (ei(e), null)
}

function es(e) {
  let t = M.Z.getVoiceStateForUser(e);
  return (null == t ? true : t.channelId) != null && w.Z.canWithPartialContext(j.Plq.VIEW_CHANNEL, {
    channelId: t.channelId
  }) ? t.channelId : null
}

function el(e) {
  return o()(e).groupBy(e => {
    var t;
    let n = es(e.id),
      r = et(e.id);
    return null != n ? "".concat(V).concat(n) : (null == r || null == (t = r.party) ? true : t.id) != null ? "".concat(F).concat(r.party.id) : "".concat(H).concat(e.id)
  })
}

function ec(e, t) {
  let n = e => e.game.name;
  return o()(e).orderBy([t, n], ["desc", "asc"])
}

function eu(e) {
  return L.Z.isFriend(e.id)
}

function ed(e, t, n) {
  var r, i, a, s, d;
  let f, _ = x.default.getCurrentUser(),
    h = null != (r = null == _ ? true : _.nsfwAllowed) && r,
    m = t.map(e => e.id),
    g = t.filter(t => e.has(t.id)),
    E = false,
    O = [],
    I = new Set,
    T = false,
    N = [];
  for (let e of t) {
    let n = S.Z.getAnyStreamForUser(e.id),
      r = A.Z.getChannel(null == n ? true : n.channelId);
    if ((0, p.aC)(r) && (!h || !R.Z.didAgree(null == r ? true : r.getGuildId()))) continue;
    let f = et(e.id);
    if (null != n && N.push({
        stream: n,
        streamUser: e,
        activity: f
      }), null == f) continue;
    let m = (0, b.Z)(f);
    if (null == m) continue;
    T = m === v.XB;
    let g = ea(m);
    if ((0, u.Z)(f)) {
      let t = (0, l.a)();
      if ((0, c.ZP)({
          activity: f,
          userId: e.id,
          application: g,
          channelId: null == (a = M.Z.getVoiceStateForUser(e.id)) ? true : a.channelId,
          currentUser: _,
          isActivitiesEnabledForCurrentPlatform: t,
          ChannelStore: A.Z,
          VoiceStateStore: M.Z,
          PermissionStore: w.Z,
          GuildStore: P.Z
        }) !== c.Fw.CAN_JOIN) continue
    }
    if (!y.JE(f) || null == g || I.has(g.id)) continue;
    let D = null != f ? eo(f) : null;
    (null == D || D.id !== g.id) && (f = null);
    let L = [];
    L = null != f && null != f.party && null != f.party.id ? Array.from(null != (s = C.Z.getParty(f.party.id)) ? s : []).reduce((e, t) => {
      let n = x.default.getUser(t);
      return null != n && e.push(n), e
    }, []) : t.filter(e => {
      let t = et(e.id),
        n = null != t ? eo(t) : null;
      return null != n && n.id === g.id
    }), (L = o().orderBy(L, [eu], ["desc"])).length !== t.length && (E = true), I.add(g.id), O.push({
      game: g,
      activity: f,
      activityUser: e,
      startedPlayingTime: null != (d = null == f || null == (i = f.timestamps) ? true : i.start) ? d : null == f ? true : f.created_at,
      playingMembers: L
    })
  }
  let L = 1 === g.length,
    j = [],
    U = new Set,
    G = new Set;
  for (let e of t) {
    let n = es(e.id),
      r = A.Z.getChannel(n),
      i = null != r ? r.getGuildId() : null,
      a = P.Z.getGuild(i);
    if (G.has(i) && U.has(n) || null == r || null == a || r.id === a.afkChannelId) null == r && (f = null, L = true);
    else {
      let e = M.Z.getVoiceStatesForChannel(r.id),
        s = o()(e).map(e => {
          let {
            userId: t
          } = e;
          return x.default.getUser(t)
        }).filter(k.lm).orderBy([eu], ["desc"]).value();
      s.filter(e => !m.includes(e.id)).forEach(e => t.push(e)), L ? G.has(i) || (f = null) : (f = a, L = true), G.add(i), U.add(n), j.push({
        channel: r,
        guild: a,
        members: s,
        voiceStates: e
      })
    }
  }
  return {
    id: n,
    voiceChannels: j,
    isSpotifyActivity: T,
    priorityMembers: g.map(e => ({
      user: e,
      status: D.Z.getStatus(e.id)
    })),
    partiedMembers: t,
    showPlayingMembers: E,
    guildContext: f,
    currentActivities: ec(O, e => {
      var t;
      return null != (t = e.startedPlayingTime) ? t : 0
    }).value(),
    applicationStreams: N
  }
}

function ef(e) {
  let t = ee(),
    n = ed.bind(null, t);
  return o()(e).mapValues(n)
}

function e_(e) {
  let t = e => e.priorityMembers.map(e => e.user.username.toLowerCase()).join(" "),
    n = e => e.currentActivities.length > 0,
    r = e => e.voiceChannels.length > 0,
    i = e => e.applicationStreams.length > 0,
    o = e => e.partiedMembers.length > 1,
    a = e => e.isSpotifyActivity;
  return e.values().orderBy([ep, o, i, r, n, a, t], ["asc", "desc", "desc", "desc", "desc", "asc", "asc"]).value()
}

function ep(e) {
  return 0 !== e.voiceChannels.length && e.voiceChannels.length > 0 && e.voiceChannels.some(e => {
    let {
      voiceStates: t
    } = e;
    return Object.values(t).some(e => false === e.discoverable)
  })
}

function eh(e) {
  return 0 !== e.voiceChannels.length && e.voiceChannels.length > 0 && e.voiceChannels.every(e => {
    let {
      voiceStates: t
    } = e;
    return Object.values(t).every(e => false === e.discoverable)
  })
}

function em(e) {
  return e.partiedMembers.some(e => L.Z.isBlockedOrIgnored(e.id))
}

function eg(e) {
  return e.filter(e => {
    let t = em(e),
      n = eh(e);
    return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !t && !n
  })
}

function eE(e) {
  return e.map(e => ({
    type: j.GOo.USER,
    party: e
  }))
}

function eb() {
  if (J.size > 0) {
    let e = Array.from(J);
    Chunk728345.ZP.fetchApplications(module), module.forEach(e => $.add(e)), J.clear()
  }
}

function ey() {
  return W && Chunk38618.Z.isConnected()
}

function eO() {
  if (!ey()) returnfalse;
  J.clear(), q = eE(z = eg(e_(ef(el(Array.from(ee()).reduce((e, t) => {
    let n = x.default.getUser(t);
    return null == n || n.bot || e.push(n), e
  }, [])))))), eb(), K = true
}
let ev = o().throttle(() => {
  eO(), eC.emitChange()
}, Y);

function eI() {
  return !!ey() && (ev(), false)
}

function eT() {
  W = false, z = [], q = [], J.clear()
}

function eS() {
  W = true, ev()
}

function eA() {
  W = false
}
class eN extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([Chunk594174.default, Chunk812206.Z, Chunk158776.Z, Chunk831506.Z, Chunk979651.Z, Chunk199902.Z, Chunk699516.Z, Chunk480294.Z, Chunk752048.Z], eI), this.waitFor(Chunk38618.Z, Chunk430824.Z, Chunk812206.Z, Chunk594174.default, Chunk752048.Z)
  }
  get currentActivityParties() {
    return z
  }
  get nowPlayingCards() {
    return q
  }
  get isMounted() {
    return W
  }
  get loaded() {
    return K
  }
}
U(eN, "displayName", "NowPlayingViewStore");
let eC = new eN(Chunk570140.Z, {
    LOGOUT: eT,
    NOW_PLAYING_MOUNTED: eS,
    NOW_PLAYING_UNMOUNTED: eA
  }),
  eR = eC