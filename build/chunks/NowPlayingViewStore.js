/** Chunk was on web.js **/
/** chunk id: 943577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => ew
}), require("./896048.js"), require("./321073.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk170148 = require("./170148.js"),
  Chunk550151 = require("./550151.js"),
  Chunk765379 = require("./765379.js"),
  Chunk90644 = require("./90644.js"),
  Chunk61330 = require("./61330.js"),
  Chunk960076 = require("./960076.js"),
  Chunk323073 = require("./323073.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js"),
  Chunk626584 = require("./626584.js"),
  Chunk142120 = require("./142120.js"),
  Chunk294857 = require("./294857.js"),
  Chunk516085 = require("./516085.jsx"),
  Chunk21119 = require("./21119.js"),
  Chunk57985 = require("./57985.js"),
  Chunk907459 = require("./907459.js"),
  Chunk443795 = require("./443795.js"),
  Chunk823441 = require("./823441.js"),
  Chunk47407 = require("./47407.js"),
  Chunk616356 = require("./616356.js"),
  Chunk734057 = require("./734057.js"),
  Chunk153488 = require("./153488.js"),
  Chunk629016 = require("./629016.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk403362 = require("./403362.js"),
  Chunk652215 = require("./652215.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
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
let H = "party-",
  Y = "channel-",
  W = "user-",
  K = 1e3,
  z = false,
  q = false,
  X = [],
  Z = [],
  Q = {},
  $ = {},
  J = new Set,
  ee = new Set;

function et() {
  let e = L.A.getFriendIDs();
  return new Set(R.A.hasConsented(U.YAq.PERSONALIZATION) ? [...O.A.getUserAffinities().filter(e => e.communicationRank <= 15).map(e => e.otherUserId), ...e] : e)
}

function en(e) {
  return x.A.findActivity(e, e => e.type !== U.$pd.CUSTOM_STATUS)
}

function er(e) {
  return null == Q[e] && (Q = B(V({}, Q), {
    [e]: new T.A({
      name: e
    })
  })), Q[e]
}

function ei(e) {
  return null == $[e] && ($ = B(V({}, $), {
    [e]: new I.A({
      url: e
    })
  })), $[e]
}

function ea(e) {
  ee.has(e) || J.add(e)
}

function es(e) {
  if ((0, d.A)(e)) return S.HT;
  if ((0, f.A)(e)) return er(e.name);
  let t = null != e.application_id ? m.A.getApplication(e.application_id) : null;
  return null != t ? t : (0, p.A)(e) && null != e.url ? ei(e.url) : (null != e.application_id && ea(e.application_id), t)
}

function eo(e) {
  let t = m.A.getApplication(e);
  return null != t ? t : "string" != typeof e ? (new g.A("NowPlayingViewStore").error("Unknown type for applicationId: ".concat(typeof e, ", value: ").concat(e), {
    tags: {
      source: "ACTIVITIES"
    }
  }), null) : e === S.WY ? S.HT : e.startsWith(T.W) ? er(e.slice(T.W.length)) : e.startsWith(I.K) ? ei(e.slice(I.K.length)) : (ea(e), null)
}

function el(e) {
  let t = M.A.getVoiceStateForUser(e);
  return (null == t ? true : t.channelId) != null && D.A.canWithPartialContext(U.xBc.VIEW_CHANNEL, {
    channelId: t.channelId
  }) ? t.channelId : null
}

function ec(e) {
  return a()(e).groupBy(e => {
    var t;
    let n = el(e.id),
      r = en(e.id);
    return null != n ? "".concat(Y).concat(n) : (null == r || null == (t = r.party) ? true : t.id) != null ? "".concat(H).concat(r.party.id) : "".concat(W).concat(e.id)
  })
}

function eu(e, t) {
  let n = e => e.game.name;
  return a()(e).orderBy([t, n], ["desc", "asc"])
}

function ed(e) {
  return L.A.isFriend(e.id)
}

function ef(e, t, n) {
  let r, i = j.default.getCurrentUser(),
    s = O.A.getUserAffinitiesMap(),
    o = (0, v.L)(t, s, "NowPlayingViewStore - partiedMembers"),
    d = o.map(e => e.id),
    f = o.filter(t => e.has(t.id)),
    p = false,
    h = [],
    m = new Set,
    g = false,
    E = [];
  for (let e of o) {
    var I, T, R, L;
    let t = C.A.getAnyStreamForUser(e.id),
      n = N.A.getChannel(null == t ? true : t.channelId);
    if ((0, _.qR)(n)) continue;
    let r = en(e.id);
    if (null != t && E.push({
        stream: t,
        streamUser: e,
        activity: r
      }), null == r) continue;
    let s = (0, b.A)(r);
    if (null == s) continue;
    g = s === S.WY;
    let d = eo(s);
    if ((0, u.A)(r)) {
      let t = (0, l.A)();
      if ((0, c.Ay)({
          activity: r,
          userId: e.id,
          application: d,
          channelId: null == (R = M.A.getVoiceStateForUser(e.id)) ? true : R.channelId,
          currentUser: i,
          isActivitiesEnabledForCurrentPlatform: t,
          ChannelStore: N.A,
          VoiceStateStore: M.A,
          PermissionStore: D.A,
          GuildStore: P.A
        }) !== c.Gy.CAN_JOIN) continue
    }
    if (!y.IS(r) || null == d || m.has(d.id)) continue;
    let f = null != r ? es(r) : null;
    (null == f || f.id !== d.id) && (r = null);
    let O = [];
    O = null != r && null != r.party && null != r.party.id ? Array.from(null != (L = w.A.getParty(r.party.id)) ? L : []).reduce((e, t) => {
      let n = j.default.getUser(t);
      return null != n && e.push(n), e
    }, []) : o.filter(e => {
      let t = en(e.id),
        n = null != t ? es(t) : null;
      return null != n && n.id === d.id
    }), (O = a().orderBy(O, [ed], ["desc"])).length !== o.length && (p = true), m.add(d.id), h.push({
      game: d,
      activity: r,
      activityUser: e,
      startedPlayingTime: null != (I = null == r || null == (T = r.timestamps) ? true : T.start) ? I : null == r ? true : r.created_at,
      playingMembers: O
    })
  }
  let U = 1 === f.length,
    G = [],
    V = new Set,
    F = new Set;
  for (let e of o) {
    let t = el(e.id),
      n = N.A.getChannel(t),
      i = null != n ? n.getGuildId() : null,
      s = P.A.getGuild(i);
    if (F.has(i) && V.has(t) || null == n || null == s || n.id === s.afkChannelId) null == n && (r = null, U = true);
    else {
      let e = M.A.getVoiceStatesForChannel(n.id),
        l = (0, A.Y1)("NowPlayingViewStore - voiceMembers"),
        c = ed;
      null != l && (c = e => {
        var t, n;
        let r = O.A.getUserAffinity(e.id);
        return "vc_probability" === l ? null != (t = null == r ? true : r.vcProbability) ? t : 0 : null != (n = null == r ? true : r.communicationProbability) ? n : 0
      });
      let u = a()(e).map(e => {
        let {
          userId: t
        } = e;
        return j.default.getUser(t)
      }).filter(k.Vq).orderBy([c], ["desc"]).value();
      u.filter(e => !d.includes(e.id)).forEach(e => o.push(e)), U ? F.has(i) || (r = null) : (r = s, U = true), F.add(i), V.add(t), G.push({
        channel: n,
        guild: s,
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
      status: x.A.getStatus(e.id)
    })),
    partiedMembers: o,
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
    s = e => e.isSpotifyActivity;
  return e.values().orderBy([eh, a, i, r, n, s, t], ["asc", "desc", "desc", "desc", "desc", "asc", "asc"]).value()
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
  return e.partiedMembers.some(e => L.A.isBlockedOrIgnored(e.id))
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
    type: U.ZzC.USER,
    party: e
  }))
}

function ey() {
  if (J.size > 0) {
    let e = Array.from(J);
    h.Ay.fetchApplications(e), e.forEach(e => ee.add(e)), J.clear()
  }
}

function eO() {
  return z && E.A.isConnected()
}

function eA() {
  if (!eO()) returnfalse;
  J.clear(), Z = eb(X = eE(e_(ep(ec(Array.from(et()).reduce((e, t) => {
    let n = j.default.getUser(t);
    return null == n || n.bot || e.push(n), e
  }, [])))))), ey(), q = true
}
let ev = a().throttle(() => {
  eA(), eR.emitChange()
}, K);

function eS() {
  return !!eO() && (ev(), false)
}

function eI() {
  z = false, X = [], Z = [], J.clear()
}

function eT() {
  z = true, ev()
}

function eC() {
  z = false
}
class eN extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.syncWith([j.default, m.A, x.A, w.A, M.A, C.A, L.A, R.A, O.A], eS), this.waitFor(m.A, C.A, N.A, R.A, w.A, E.A, P.A, D.A, x.A, L.A, O.A, j.default, M.A)
  }
  get currentActivityParties() {
    return X
  }
  get nowPlayingCards() {
    return Z
  }
  get isMounted() {
    return z
  }
  get loaded() {
    return q
  }
}
G(eN, "displayName", "NowPlayingViewStore");
let eR = new eN(Chunk73153.h, {
    LOGOUT: eI,
    NOW_PLAYING_MOUNTED: eT,
    NOW_PLAYING_UNMOUNTED: eC
  }),
  ew = eR