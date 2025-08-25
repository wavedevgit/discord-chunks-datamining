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
  Chunk731290 = require("./731290.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk823379 = require("./823379.js"),
  Chunk981631 = require("./981631.js");

function B(e, t, n) {
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
      B(e, t, n[t])
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

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let H = "party-",
  Y = "channel-",
  W = "user-",
  K = 1e3,
  z = false,
  q = false,
  X = [],
  Q = [],
  J = {},
  $ = {},
  ee = new Set,
  et = new Set;

function en() {
  let e = Chunk699516.Z.getFriendIDs();
  return new Set(Chunk480294.Z.hasConsented(Chunk981631.pjP.PERSONALIZATION) ? [...Chunk752048.Z.getUserAffinities().map(e => e.otherUserId), ...module] : module)
}

function er(e) {
  return L.Z.findActivity(e, e => e.type !== G.IIU.CUSTOM_STATUS)
}

function ei(e) {
  return null == J[e] && (J = V(Z({}, J), {
    [e]: new A.Z({
      name: e
    })
  })), J[e]
}

function ea(e) {
  return null == $[e] && ($ = V(Z({}, $), {
    [e]: new S.Z({
      url: e
    })
  })), $[e]
}

function eo(e) {
  et.has(e) || ee.add(e)
}

function es(e) {
  if ((0, d.Z)(e)) return T.r9;
  if ((0, f.Z)(e)) return ei(e.name);
  let t = null != e.application_id ? m.Z.getApplication(e.application_id) : null;
  return null != t ? t : (0, _.Z)(e) && null != e.url ? ea(e.url) : (null != e.application_id && eo(e.application_id), t)
}

function el(e) {
  let t = m.Z.getApplication(e);
  return null != t ? t : "string" != typeof e ? (new g.Z("NowPlayingViewStore").error("Unknown type for applicationId: ".concat(typeof e, ", value: ").concat(e), {
    tags: {
      source: "ACTIVITIES"
    }
  }), null) : e === T.XB ? T.r9 : e.startsWith(A.H) ? ei(e.slice(A.H.length)) : e.startsWith(S._) ? ea(e.slice(S._.length)) : (eo(e), null)
}

function ec(e) {
  let t = M.Z.getVoiceStateForUser(e);
  return (null == t ? true : t.channelId) != null && x.Z.canWithPartialContext(G.Plq.VIEW_CHANNEL, {
    channelId: t.channelId
  }) ? t.channelId : null
}

function eu(e) {
  return a()(e).groupBy(e => {
    var t;
    let n = ec(e.id),
      r = er(e.id);
    return null != n ? "".concat(Y).concat(n) : (null == r || null == (t = r.party) ? true : t.id) != null ? "".concat(H).concat(r.party.id) : "".concat(W).concat(e.id)
  })
}

function ed(e, t) {
  let n = e => e.game.name;
  return a()(e).orderBy([t, n], ["desc", "asc"])
}

function ef(e) {
  return j.Z.isFriend(e.id)
}

function e_(e, t, n) {
  var r, i, o, s, d;
  let f, _ = k.default.getCurrentUser(),
    h = null != (r = null == _ ? true : _.nsfwAllowed) && r,
    m = O.Z.getUserAffinitiesMap(),
    g = (0, I.C)(t, m, "NowPlayingViewStore - partiedMembers"),
    E = g.map(e => e.id),
    S = g.filter(t => e.has(t.id)),
    A = false,
    R = [],
    j = new Set,
    G = false,
    B = [];
  for (let e of g) {
    let t = C.Z.getAnyStreamForUser(e.id),
      n = N.Z.getChannel(null == t ? true : t.channelId);
    if ((0, p.aC)(n) && (!h || !w.Z.didAgree(null == n ? true : n.getGuildId()))) continue;
    let r = er(e.id);
    if (null != t && B.push({
        stream: t,
        streamUser: e,
        activity: r
      }), null == r) continue;
    let f = (0, b.Z)(r);
    if (null == f) continue;
    G = f === T.XB;
    let m = el(f);
    if ((0, u.Z)(r)) {
      let t = (0, l.a)();
      if ((0, c.ZP)({
          activity: r,
          userId: e.id,
          application: m,
          channelId: null == (o = M.Z.getVoiceStateForUser(e.id)) ? true : o.channelId,
          currentUser: _,
          isActivitiesEnabledForCurrentPlatform: t,
          ChannelStore: N.Z,
          VoiceStateStore: M.Z,
          PermissionStore: x.Z,
          GuildStore: D.Z
        }) !== c.Fw.CAN_JOIN) continue
    }
    if (!y.JE(r) || null == m || j.has(m.id)) continue;
    let E = null != r ? es(r) : null;
    (null == E || E.id !== m.id) && (r = null);
    let O = [];
    O = null != r && null != r.party && null != r.party.id ? Array.from(null != (s = P.Z.getParty(r.party.id)) ? s : []).reduce((e, t) => {
      let n = k.default.getUser(t);
      return null != n && e.push(n), e
    }, []) : g.filter(e => {
      let t = er(e.id),
        n = null != t ? es(t) : null;
      return null != n && n.id === m.id
    }), (O = a().orderBy(O, [ef], ["desc"])).length !== g.length && (A = true), j.add(m.id), R.push({
      game: m,
      activity: r,
      activityUser: e,
      startedPlayingTime: null != (d = null == r || null == (i = r.timestamps) ? true : i.start) ? d : null == r ? true : r.created_at,
      playingMembers: O
    })
  }
  let Z = 1 === S.length,
    F = [],
    V = new Set,
    H = new Set;
  for (let e of g) {
    let t = ec(e.id),
      n = N.Z.getChannel(t),
      r = null != n ? n.getGuildId() : null,
      i = D.Z.getGuild(r);
    if (H.has(r) && V.has(t) || null == n || null == i || n.id === i.afkChannelId) null == n && (f = null, Z = true);
    else {
      let e = M.Z.getVoiceStatesForChannel(n.id),
        o = (0, v.HG)("NowPlayingViewStore - voiceMembers"),
        s = ef;
      null != o && (s = e => {
        var t, n;
        let r = O.Z.getUserAffinity(e.id);
        return "vc_probability" === o ? null != (t = null == r ? true : r.vcProbability) ? t : 0 : null != (n = null == r ? true : r.communicationProbability) ? n : 0
      });
      let l = a()(e).map(e => {
        let {
          userId: t
        } = e;
        return k.default.getUser(t)
      }).filter(U.lm).orderBy([s], ["desc"]).value();
      l.filter(e => !E.includes(e.id)).forEach(e => g.push(e)), Z ? H.has(r) || (f = null) : (f = i, Z = true), H.add(r), V.add(t), F.push({
        channel: n,
        guild: i,
        members: l,
        voiceStates: e
      })
    }
  }
  return {
    id: n,
    voiceChannels: F,
    isSpotifyActivity: G,
    priorityMembers: S.map(e => ({
      user: e,
      status: L.Z.getStatus(e.id)
    })),
    partiedMembers: g,
    showPlayingMembers: A,
    guildContext: f,
    currentActivities: ed(R, e => {
      var t;
      return null != (t = e.startedPlayingTime) ? t : 0
    }).value(),
    applicationStreams: B
  }
}

function ep(e) {
  let t = en(),
    n = e_.bind(null, t);
  return a()(e).mapValues(n)
}

function eh(e) {
  let t = e => e.priorityMembers.map(e => e.user.username.toLowerCase()).join(" "),
    n = e => e.currentActivities.length > 0,
    r = e => e.voiceChannels.length > 0,
    i = e => e.applicationStreams.length > 0,
    a = e => e.partiedMembers.length > 1,
    o = e => e.isSpotifyActivity;
  return e.values().orderBy([em, a, i, r, n, o, t], ["asc", "desc", "desc", "desc", "desc", "asc", "asc"]).value()
}

function em(e) {
  return 0 !== e.voiceChannels.length && e.voiceChannels.length > 0 && e.voiceChannels.some(e => {
    let {
      voiceStates: t
    } = e;
    return Object.values(t).some(e => false === e.discoverable)
  })
}

function eg(e) {
  return 0 !== e.voiceChannels.length && e.voiceChannels.length > 0 && e.voiceChannels.every(e => {
    let {
      voiceStates: t
    } = e;
    return Object.values(t).every(e => false === e.discoverable)
  })
}

function eE(e) {
  return e.partiedMembers.some(e => j.Z.isBlockedOrIgnored(e.id))
}

function eb(e) {
  return e.filter(e => {
    let t = eE(e),
      n = eg(e);
    return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !t && !n
  })
}

function ey(e) {
  return e.map(e => ({
    type: G.GOo.USER,
    party: e
  }))
}

function eO() {
  if (ee.size > 0) {
    let e = Array.from(ee);
    Chunk728345.ZP.fetchApplications(module), module.forEach(e => et.add(e)), ee.clear()
  }
}

function ev() {
  return z && Chunk38618.Z.isConnected()
}

function eI() {
  if (!ev()) returnfalse;
  ee.clear(), Q = ey(X = eb(eh(ep(eu(Array.from(en()).reduce((e, t) => {
    let n = k.default.getUser(t);
    return null == n || n.bot || e.push(n), e
  }, [])))))), eO(), q = true
}
let eT = a().throttle(() => {
  eI(), eP.emitChange()
}, K);

function eS() {
  return !!ev() && (eT(), false)
}

function eA() {
  z = false, X = [], Q = [], ee.clear()
}

function eC() {
  z = true, eT()
}

function eN() {
  z = false
}
class eR extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.syncWith([Chunk594174.default, Chunk812206.Z, Chunk158776.Z, Chunk831506.Z, Chunk979651.Z, Chunk199902.Z, Chunk699516.Z, Chunk480294.Z, Chunk752048.Z], eS), this.waitFor(Chunk38618.Z, Chunk430824.Z, Chunk812206.Z, Chunk594174.default, Chunk752048.Z)
  }
  get currentActivityParties() {
    return X
  }
  get nowPlayingCards() {
    return Q
  }
  get isMounted() {
    return z
  }
  get loaded() {
    return q
  }
}
B(eR, "displayName", "NowPlayingViewStore");
let eP = new eR(Chunk570140.Z, {
    LOGOUT: eA,
    NOW_PLAYING_MOUNTED: eC,
    NOW_PLAYING_UNMOUNTED: eN
  }),
  ew = eP