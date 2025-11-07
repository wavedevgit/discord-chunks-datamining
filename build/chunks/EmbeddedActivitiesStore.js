/** Chunk was on web.js **/
/** chunk id: 317381, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  ZP: () => ew,
  i6: () => R
}), require("./388685.js"), require("./539854.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk911969 = require("./911969.js"),
  Chunk895924 = require("./895924.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk358085 = require("./358085.js"),
  Chunk636449 = require("./636449.js"),
  Chunk155268 = require("./155268.js"),
  Chunk413458 = require("./413458.js"),
  Chunk16609 = require("./16609.js"),
  Chunk761122 = require("./761122.js"),
  Chunk917107 = require("./917107.js"),
  Chunk701488 = require("./701488.js"),
  Chunk918559 = require("./918559.js"),
  Chunk981631 = require("./981631.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let N = {
    everLaunchedActivities: new Set,
    seenNewActivities: {},
    seenUpdatedActivities: {},
    lastCheckedForBadgeableActivities: null,
    dateRangesForSurfaces: {}
  },
  R = [],
  P = [],
  w = "0",
  D = new Map,
  x = new Map,
  L = new Map,
  M = new Map,
  j = new Map;

function k(e, t) {
  return "".concat(t, ":").concat(e)
}
let U = new Map,
  G = new Set,
  B = new Map,
  Z = new Map,
  F = new Map,
  V = new Map,
  H = new Map,
  Y = new Map,
  W = 216e5,
  K = new Map,
  z = Chunk918559.Ez.DISCONNECTED,
  q = Chunk918559.MI.RESIZABLE,
  X = Chunk701488.GM.NORMAL;

function Q(e) {
  return null != e ? e : w
}

function J(e) {
  var t, n, r, i, a, o, s, l;
  let {
    location: u,
    applicationId: d,
    launchId: f,
    compositeInstanceId: _,
    participants: p,
    proxyTicket: h
  } = e, b = (0, m.ZP)(d);
  if (null == b) return;
  let y = (0, E.p)(u),
    O = null != y && null != (n = L.get(y)) ? n : R,
    v = null != O && 0 === O.length,
    I = null != (r = j.get(u.id)) ? r : R,
    S = I.find(e => e.applicationId === d),
    A = p.map(e => e.userId),
    N = c.default.getId(),
    P = A.some(e => e === N),
    w = null == (t = p.find(e => e.userId === N)) ? true : t.sessionId,
    M = p.some(e => (0, g.J)(e)),
    G = D.get(d),
    B = U.get(k(null != y ? y : null, d)),
    Z = null == B ? true : B.launchParams,
    F = {
      applicationId: d,
      location: u,
      launchId: f,
      compositeInstanceId: _,
      url: b,
      userIds: new Set(A),
      participants: p,
      referrerId: null != (i = null == G ? true : G.referrerId) ? i : null == Z ? true : Z.referrerId,
      customId: null != (a = null == G ? true : G.customId) ? a : null == Z ? true : Z.customId,
      proxyTicket: h
    };
  P && null != G && D.set(G.applicationId, C(T({}, G, F), {
    proxyTicket: null != (o = F.proxyTicket) ? o : G.proxyTicket
  }));
  let V = !M;
  null != G && u.id === G.location.id && d === G.applicationId && (!P && Array.from(G.userIds).some(e => e === N) || V) ? ee(G) : P && (null == G || G.applicationId !== d || G.location.id !== u.id) && (w === c.default.getSessionId() && ea({
    applicationId: d,
    launchId: f,
    compositeInstanceId: _,
    location: u,
    participants: p,
    isFirstActivityInChannel: v,
    isStart: null == S,
    referrerId: F.referrerId,
    customId: F.customId,
    inviterUserId: null == B ? true : B.inviterUserId,
    proxyTicket: F.proxyTicket
  }), eO({
    channelId: null != y ? y : null,
    applicationId: d
  }));
  let H = I.filter(e => e.applicationId !== d);
  if (A.length > 0 && H.push(F), j.set(u.id, H), null != y) {
    let e = (null != (s = L.get(y)) ? s : []).filter(e => e.applicationId !== d),
      t = Q((0, E.j)(u)),
      n = (null != (l = x.get(t)) ? l : []).filter(e => e.applicationId !== d || e.location.id !== u.id);
    A.length > 0 && (e.push(F), n.push(F)), L.set(y, e), x.set(t, n)
  }
}

function $(e) {
  let t = e.activity_instances;
  null == t || t.forEach(e => {
    let {
      location: t,
      application_id: n,
      launch_id: r,
      composite_instance_id: i,
      participants: a
    } = e;
    J({
      location: t,
      applicationId: n,
      launchId: r,
      compositeInstanceId: i,
      participants: a.map(e => ({
        userId: e.user_id,
        sessionId: e.session_id,
        nonce: e.nonce
      }))
    })
  })
}

function ee(e) {
  D.delete(e.applicationId), _.S.dispatch(I.CkL.RELEASE_ACTIVITY_WEB_VIEW)
}

function et(e) {
  let {
    guilds: t
  } = e;
  L.clear(), x.clear(), j.clear(), M.clear(), t.forEach(e => $(e));
  let n = c.default.getId();
  for (let e of Array.from(D.values())) eP.getEmbeddedActivitiesForLocation(e.location).some(t => t.applicationId === e.applicationId && t.launchId === e.launchId && t.userIds.has(n)) || ee(e)
}

function en(e) {
  let {
    guild: t
  } = e;
  $(t)
}

function er(e) {
  var t, n;
  let {
    channel: r
  } = e, i = null != (t = L.get(r.id)) ? t : [];
  L.set(r.id, []);
  let a = Q(r.guild_id),
    o = (null != (n = x.get(a)) ? n : []).filter(e => (0, E.p)(e.location) !== r.id);
  x.set(a, o), i.forEach(e => {
    j.delete(e.location.id)
  }), M.set(r.id, [])
}

function ei(e) {
  let {
    applicationId: t,
    launchId: n,
    compositeInstanceId: r,
    location: i,
    participants: a
  } = e, o = (0, E.p)(i), s = U.get(k(null != o ? o : null, t));
  J({
    location: i,
    applicationId: t,
    launchId: n,
    compositeInstanceId: r,
    participants: a.map(e => ({
      userId: e.user_id,
      sessionId: e.session_id,
      nonce: e.nonce
    })),
    proxyTicket: null == s ? true : s.proxyTicket
  })
}

function ea(e) {
  var t, n;
  let {
    applicationId: i,
    launchId: a,
    compositeInstanceId: s,
    location: l,
    participants: p,
    isFirstActivityInChannel: g,
    isStart: b,
    referrerId: O,
    customId: S,
    inviterUserId: T,
    proxyTicket: A
  } = e, C = (0, m.ZP)(i), N = c.default.getSessionId();
  if (null == C || null == N || (null == (t = D.get(i)) ? true : t.location.id) === l.id) returnfalse;
  let R = (0, E.p)(l),
    P = u.Z.getChannel(R),
    w = null == P ? true : P.getGuildId();
  if (null == f.default.getCurrentUser() || null == w && !(null != (n = null == P ? true : P.isPrivate()) && n)) returnfalse;
  r = l;
  let x = {
    applicationId: i,
    url: C,
    userIds: new Set(p.map(e => e.userId)),
    participants: p,
    connectedSince: Date.now(),
    launchId: a,
    compositeInstanceId: s,
    location: l,
    referrerId: O,
    customId: S,
    proxyTicket: A
  };
  D.set(i, x), _.S.dispatch(I.CkL.OPEN_EMBEDDED_ACTIVITY, {
    location: l,
    applicationId: i,
    isFirstActivityInChannel: g,
    isStart: b,
    participants: p,
    embeddedActivity: x,
    inviterUserId: T
  }), (0, h.R)() ? (z = v.Ez.ACTIVITY_POPOUT_WINDOW, o.Z.wait(() => {
    o.Z.dispatch({
      type: "ACTIVITY_POPOUT_WINDOW_OPEN"
    })
  })) : z = R !== d.Z.getChannelId() || (0, y.Z)(R) ? v.Ez.PIP : v.Ez.PANEL, K.set(eC(l.id, i), Date.now())
}

function eo(e) {
  let {
    applicationId: t
  } = e, n = D.get(t);
  D.delete(t), (null == n ? true : n.location.id) === (null == r ? true : r.id) && (r = true)
}

function es(e) {
  let {
    layout: t
  } = e;
  X = t
}

function el(e) {
  var t;
  let {
    activity: n
  } = e;
  if (null == n) returnfalse;
  let r = D.get(null != (t = n.application_id) ? t : "");
  if (null == r) returnfalse;
  D.set(r.applicationId, T({}, r))
}

function ec(e) {
  let {
    applicationId: t,
    config: n
  } = e, r = D.get(t);
  null != r && D.set(r.applicationId, C(T({}, r), {
    config: n
  }))
}

function eu(e) {
  let {
    guildId: t
  } = e, n = Q(t), r = Z.get(n);
  Z.set(n, {
    isFetching: true,
    lastFetchTimestampMs: null == r ? true : r.lastFetchTimestampMs
  }), N.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString()
}

function ed(e) {
  let {
    guildId: t
  } = e, n = Q(t), r = Z.get(n);
  Z.set(n, {
    isFetching: false,
    lastFetchTimestampMs: null == r ? true : r.lastFetchTimestampMs
  })
}

function ef(e) {
  let {
    activities: t,
    now: n
  } = e, r = (0, b.Z)((0, p.getOS)()), i = t.reduce((e, t) => {
    let i = t.client_platform_config[r];
    if (null == i.label_from || null == i.label_until) return e;
    let a = {
        fromDate: i.label_from,
        untilDate: i.label_until
      },
      o = new Date(i.label_from).getTime(),
      l = new Date(i.label_until).getTime();
    return o > n || l < n || Object.values(s.eR).filter(e => !i.omit_badge_from_surfaces.includes(e)).forEach(t => {
      let n = e[t];
      (null == n || new Date(n.fromDate).getTime() < o) && (e[t] = a)
    }), e
  }, {});
  N.dateRangesForSurfaces = i
}

function e_(e) {
  let {
    guildId: t,
    activities: n
  } = e, r = Q(t);
  B.set(r, n);
  let i = Date.now();
  ef({
    activities: n,
    now: i
  }), Z.set(r, {
    isFetching: false,
    lastFetchTimestampMs: i
  })
}

function ep(e) {
  let {
    applicationId: t,
    componentId: n,
    commandOrigin: r,
    launchParams: i,
    channelId: a,
    inviterUserId: o
  } = e;
  U.set(k(a, t), {
    isLaunching: true,
    componentId: n,
    inviterUserId: o,
    launchParams: i
  }), q = r === l.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? v.MI.NO_CHAT : v.MI.RESIZABLE
}

function eh(e) {
  let {
    applicationId: t,
    channelId: n,
    proxyTicket: r
  } = e, i = k(n, t), a = U.get(i);
  null != a && U.set(i, C(T({}, a), {
    proxyTicket: r
  }))
}

function em(e) {
  let {
    applicationId: t,
    proxyTicket: n
  } = e, r = D.get(t);
  if (null == r) returnfalse;
  D.set(t, C(T({}, r), {
    proxyTicket: n
  }))
}

function eg(e) {
  let {
    applicationId: t,
    refreshing: n
  } = e;
  n ? G.add(t) : G.delete(t)
}

function eE(e) {
  let {
    applicationId: t
  } = e;
  N.everLaunchedActivities.add(t)
}

function eb(e) {
  let {
    applicationId: t,
    channelId: n
  } = e;
  eO({
    applicationId: t,
    channelId: n
  }), G.delete(t)
}

function ey(e) {
  let {
    applicationId: t,
    channelId: n
  } = e;
  eO({
    applicationId: t,
    channelId: n
  }), G.delete(t)
}

function eO(e) {
  let {
    applicationId: t,
    channelId: n
  } = e;
  U.delete(k(n, t))
}

function ev(e) {
  let {
    applicationId: t,
    lockState: n,
    pictureInPictureLockState: r,
    gridLockState: i
  } = e;
  null == n ? F.delete(t) : F.set(t, n), null === r ? V.delete(t) : true !== r && V.set(t, r), null === i ? H.delete(t) : true !== i && H.set(t, i)
}

function eI(e) {
  let {
    activityPanelMode: t
  } = e;
  z = t
}

function eS(e) {
  let {
    focusedActivityLayout: t
  } = e;
  q = t
}

function eT(e) {
  let {
    applicationId: t,
    layoutMode: n
  } = e;
  Y.set(t, n)
}

function eA(e) {
  let {
    channelId: t
  } = e;
  if (null == r) return;
  let n = (0, E.p)(r);
  null != n && n !== t && z === v.Ez.PANEL && (z = v.Ez.PIP)
}

function eC(e, t) {
  return "".concat(e, ":").concat(t)
}

function eN(e) {
  let {
    key: t
  } = e;
  t === I.KJ3.ACTIVITY_POPOUT && (z = v.Ez.PIP)
}
class eR extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    this.waitFor(c.default, u.Z, d.Z, f.default);
    let n = new Set(null != (t = null == e ? true : e.everLaunchedActivities) ? t : []);
    null != e && (N = C(T({}, e), {
      everLaunchedActivities: n
    }))
  }
  getState() {
    return N
  }
  getSelfEmbeddedActivityForChannel(e) {
    var t;
    return null == e ? null : null != (t = Array.from(D.values()).find(t => (0, E.p)(t.location) === e)) ? t : null
  }
  getSelfEmbeddedActivityForLocation(e) {
    var t;
    return null == e ? null : null != (t = Array.from(D.values()).find(t => t.location.id === e.id)) ? t : null
  }
  getSelfEmbeddedActivities() {
    return D
  }
  getEmbeddedActivitiesForGuild(e) {
    var t;
    return null != (t = x.get(e)) ? t : R
  }
  getEmbeddedActivitiesForChannel(e) {
    var t;
    return null != (t = L.get(e)) ? t : R
  }
  getEmbeddedActivitiesForLocation(e) {
    var t;
    return null != (t = j.get(e.id)) ? t : R
  }
  getEmbeddedActivitiesForStartingChannel(e) {
    var t;
    return null != (t = M.get(e)) ? t : R
  }
  getEmbeddedActivitiesByChannel() {
    return L
  }
  getEmbeddedActivityDurationMs(e, t) {
    let n = K.get(eC(e, t));
    return null == n ? null : Date.now() - n
  }
  isLaunchingActivity() {
    return U.size > 0
  }
  getShelfActivities(e) {
    var t;
    let n = Q(e);
    return null != (t = B.get(n)) ? t : P
  }
  getShelfFetchStatus(e) {
    let t = Q(e);
    return Z.get(t)
  }
  shouldFetchShelf(e) {
    var t, n;
    let r = Q(e),
      i = null != (t = Z.get(r)) ? t : {
        isFetching: false
      },
      a = Date.now() - (null != (n = null == i ? true : i.lastFetchTimestampMs) ? n : 0) > W;
    return !(null == i ? true : i.isFetching) && a
  }
  getOrientationLockStateForApp(e) {
    return F.get(e)
  }
  getPipOrientationLockStateForApp(e) {
    var t;
    return null != (t = V.get(e)) ? t : this.getOrientationLockStateForApp(e)
  }
  getGridOrientationLockStateForApp(e) {
    var t, n;
    return null != (n = null != (t = H.get(e)) ? t : V.get(e)) ? n : this.getOrientationLockStateForApp(e)
  }
  getLayoutModeForApp(e) {
    return Y.get(e)
  }
  getConnectedActivityChannelId() {
    if (null != r) return (0, Chunk16609.p)(r)
  }
  getConnectedActivityLocation() {
    return r
  }
  getActivityPanelMode() {
    return z
  }
  getFocusedLayout() {
    return q
  }
  getCurrentEmbeddedActivity() {
    var e;
    let t = this.getConnectedActivityLocation();
    return null != (e = this.getSelfEmbeddedActivityForLocation(exports)) ? module : true
  }
  isProxyTicketRefreshing(e) {
    return G.has(e)
  }
  getEmbeddedActivityForUserId(e, t) {
    let n;
    if (true !== t) {
      l: for (let [r, i] of j)
        for (let r of i)
          if (r.applicationId === t && r.userIds.has(e)) {
            n = r;
            break l
          }return n
    }
  }
  hasActivityEverBeenLaunched(e) {
    return N.everLaunchedActivities.has(e)
  }
  getLaunchState(e, t) {
    if (null != e) return U.get(k(null != t ? t : null, e))
  }
  getLaunchStates() {
    return U
  }
  getActivityPopoutWindowLayout() {
    return X
  }
}
S(eR, "displayName", "EmbeddedActivitiesStore"), S(eR, "persistKey", "EmbeddedActivities"), S(eR, "migrations", [e => C(T({}, e), {
  seenFeaturedActivities: [],
  shouldShowNewActivityIndicator: false
}), e => (delete e.seenFeaturedActivities, T({}, e)), e => (delete e.seenActivities, T({}, e)), e => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, T({}, e)), e => C(T({}, e), {
  seenNewActivities: {},
  seenUpdatedActivities: {}
}), e => {
  var t;
  let n = new Set(null != (t = e.everLaunchedActivities) ? t : []);
  return C(T({}, e), {
    everLaunchedActivities: n
  })
}, e => (delete e.usersHavePlayedByApp, T({}, e)), e => (e.surfacesToShowNewActivityIndicator = new Set, e.shouldShowNewActivityIndicator && e.surfacesToShowNewActivityIndicator.add(s.eR.VOICE_LAUNCHER), delete e.shouldShowNewActivityIndicator, T({}, e)), e => C(T({}, e), {
  lastCheckedForBadgeableActivities: null
}), e => (delete e.surfacesToShowNewActivityIndicator, C(T({}, e), {
  dateRangesForSurfaces: {}
}))]);
let eP = new eR(Chunk570140.Z, {
    ACTIVITY_LAYOUT_MODE_UPDATE: eT,
    CONNECTION_OPEN_SUPPLEMENTAL: et,
    GUILD_CREATE: en,
    CHANNEL_DELETE: er,
    EMBEDDED_ACTIVITY_LAUNCH_START: ep,
    EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: eh,
    EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET: em,
    EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING: eg,
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: eE,
    EMBEDDED_ACTIVITY_LAUNCH_FAIL: eb,
    EMBEDDED_ACTIVITY_LAUNCH_CANCEL: ey,
    EMBEDDED_ACTIVITY_CLOSE: eo,
    EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: es,
    EMBEDDED_ACTIVITY_UPDATE_V2: ei,
    LOCAL_ACTIVITY_UPDATE: el,
    EMBEDDED_ACTIVITY_SET_CONFIG: ec,
    EMBEDDED_ACTIVITY_FETCH_SHELF: eu,
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: e_,
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: ed,
    EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: ev,
    EMBEDDED_ACTIVITY_SET_PANEL_MODE: eI,
    EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: eS,
    CHANNEL_SELECT: eA,
    POPOUT_WINDOW_CLOSE: eN
  }),
  ew = eP