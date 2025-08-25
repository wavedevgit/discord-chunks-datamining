/** Chunk was on web.js **/
/** chunk id: 317381, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  ZP: () => eC,
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

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
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
  j = new Map,
  k = new Map;

function M(e, t) {
  return "".concat(t, ":").concat(e)
}
let U = new Map,
  G = new Map,
  B = new Map,
  Z = new Map,
  F = new Map,
  V = new Map,
  H = new Map,
  Y = 216e5,
  W = new Map,
  K = Chunk918559.Ez.DISCONNECTED,
  z = Chunk918559.MI.RESIZABLE,
  q = Chunk701488.GM.NORMAL;

function X(e) {
  return null != e ? e : w
}

function Q(e) {
  var t, n, r, i, o, a, s, l;
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
    I = null != (r = k.get(u.id)) ? r : R,
    T = I.find(e => e.applicationId === d),
    A = p.map(e => e.userId),
    N = c.default.getId(),
    P = A.some(e => e === N),
    w = null == (t = p.find(e => e.userId === N)) ? true : t.sessionId,
    j = p.some(e => (0, g.J)(e)),
    G = D.get(d),
    B = U.get(M(null != y ? y : null, d)),
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
      customId: null != (o = null == G ? true : G.customId) ? o : null == Z ? true : Z.customId,
      proxyTicket: h
    };
  P && null != G && D.set(G.applicationId, C(S({}, G, F), {
    proxyTicket: null != (a = F.proxyTicket) ? a : G.proxyTicket
  }));
  let V = !j;
  null != G && u.id === G.location.id && d === G.applicationId && (!P && Array.from(G.userIds).some(e => e === N) || V) ? $(G) : P && (null == G || G.applicationId !== d || G.location.id !== u.id) && (w === c.default.getSessionId() && ei({
    applicationId: d,
    launchId: f,
    compositeInstanceId: _,
    location: u,
    participants: p,
    isFirstActivityInChannel: v,
    isStart: null == T,
    referrerId: F.referrerId,
    customId: F.customId,
    inviterUserId: null == B ? true : B.inviterUserId,
    proxyTicket: F.proxyTicket
  }), eg({
    channelId: null != y ? y : null,
    applicationId: d
  }));
  let H = I.filter(e => e.applicationId !== d);
  if (A.length > 0 && H.push(F), k.set(u.id, H), null != y) {
    let e = (null != (s = L.get(y)) ? s : []).filter(e => e.applicationId !== d),
      t = X((0, E.j)(u)),
      n = (null != (l = x.get(t)) ? l : []).filter(e => e.applicationId !== d || e.location.id !== u.id);
    A.length > 0 && (e.push(F), n.push(F)), L.set(y, e), x.set(t, n)
  }
}

function J(e) {
  let t = e.activity_instances;
  null == t || t.forEach(e => {
    let {
      location: t,
      application_id: n,
      launch_id: r,
      composite_instance_id: i,
      participants: o
    } = e;
    Q({
      location: t,
      applicationId: n,
      launchId: r,
      compositeInstanceId: i,
      participants: o.map(e => ({
        userId: e.user_id,
        sessionId: e.session_id,
        nonce: e.nonce
      }))
    })
  })
}

function $(e) {
  D.delete(e.applicationId), _.S.dispatch(I.CkL.RELEASE_ACTIVITY_WEB_VIEW)
}

function ee(e) {
  let {
    guilds: t
  } = e;
  L.clear(), x.clear(), k.clear(), j.clear(), t.forEach(e => J(e));
  let n = c.default.getId();
  for (let e of Array.from(D.values())) eA.getEmbeddedActivitiesForLocation(e.location).some(t => t.applicationId === e.applicationId && t.launchId === e.launchId && t.userIds.has(n)) || $(e)
}

function et(e) {
  let {
    guild: t
  } = e;
  J(t)
}

function en(e) {
  var t, n;
  let {
    channel: r
  } = e, i = null != (t = L.get(r.id)) ? t : [];
  L.set(r.id, []);
  let o = X(r.guild_id),
    a = (null != (n = x.get(o)) ? n : []).filter(e => (0, E.p)(e.location) !== r.id);
  x.set(o, a), i.forEach(e => {
    k.delete(e.location.id)
  }), j.set(r.id, [])
}

function er(e) {
  let {
    applicationId: t,
    launchId: n,
    compositeInstanceId: r,
    location: i,
    participants: o
  } = e, a = (0, E.p)(i), s = U.get(M(null != a ? a : null, t));
  Q({
    location: i,
    applicationId: t,
    launchId: n,
    compositeInstanceId: r,
    participants: o.map(e => ({
      userId: e.user_id,
      sessionId: e.session_id,
      nonce: e.nonce
    })),
    proxyTicket: null == s ? true : s.proxyTicket
  })
}

function ei(e) {
  var t, n;
  let {
    applicationId: i,
    launchId: o,
    compositeInstanceId: s,
    location: l,
    participants: p,
    isFirstActivityInChannel: g,
    isStart: b,
    referrerId: O,
    customId: T,
    inviterUserId: S,
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
    launchId: o,
    compositeInstanceId: s,
    location: l,
    referrerId: O,
    customId: T,
    proxyTicket: A
  };
  D.set(i, x), _.S.dispatch(I.CkL.OPEN_EMBEDDED_ACTIVITY, {
    location: l,
    applicationId: i,
    isFirstActivityInChannel: g,
    isStart: b,
    participants: p,
    embeddedActivity: x,
    inviterUserId: S
  }), (0, h.R)() ? (K = v.Ez.ACTIVITY_POPOUT_WINDOW, a.Z.wait(() => {
    a.Z.dispatch({
      type: "ACTIVITY_POPOUT_WINDOW_OPEN"
    })
  })) : K = R !== d.Z.getChannelId() || (0, y.Z)(R) ? v.Ez.PIP : v.Ez.PANEL, W.set(eI(l.id, i), Date.now())
}

function eo(e) {
  let {
    applicationId: t
  } = e, n = D.get(t);
  D.delete(t), (null == n ? true : n.location.id) === (null == r ? true : r.id) && (r = true)
}

function ea(e) {
  let {
    layout: t
  } = e;
  q = t
}

function es(e) {
  var t;
  let {
    activity: n
  } = e;
  if (null == n) returnfalse;
  let r = D.get(null != (t = n.application_id) ? t : "");
  if (null == r) returnfalse;
  D.set(r.applicationId, S({}, r))
}

function el(e) {
  let {
    applicationId: t,
    config: n
  } = e, r = D.get(t);
  null != r && D.set(r.applicationId, C(S({}, r), {
    config: n
  }))
}

function ec(e) {
  let {
    guildId: t
  } = e, n = X(t), r = B.get(n);
  B.set(n, {
    isFetching: true,
    lastFetchTimestampMs: null == r ? true : r.lastFetchTimestampMs
  }), N.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString()
}

function eu(e) {
  let {
    guildId: t
  } = e, n = X(t), r = B.get(n);
  B.set(n, {
    isFetching: false,
    lastFetchTimestampMs: null == r ? true : r.lastFetchTimestampMs
  })
}

function ed(e) {
  let {
    activities: t,
    now: n
  } = e, r = (0, b.Z)((0, p.getOS)()), i = t.reduce((e, t) => {
    let i = t.client_platform_config[r];
    if (null == i.label_from || null == i.label_until) return e;
    let o = {
        fromDate: i.label_from,
        untilDate: i.label_until
      },
      a = new Date(i.label_from).getTime(),
      l = new Date(i.label_until).getTime();
    return a > n || l < n || Object.values(s.eR).filter(e => !i.omit_badge_from_surfaces.includes(e)).forEach(t => {
      let n = e[t];
      (null == n || new Date(n.fromDate).getTime() < a) && (e[t] = o)
    }), e
  }, {});
  N.dateRangesForSurfaces = i
}

function ef(e) {
  let {
    guildId: t,
    activities: n
  } = e, r = X(t);
  G.set(r, n);
  let i = Date.now();
  ed({
    activities: n,
    now: i
  }), B.set(r, {
    isFetching: false,
    lastFetchTimestampMs: i
  })
}

function e_(e) {
  let {
    applicationId: t,
    componentId: n,
    commandOrigin: r,
    launchParams: i,
    channelId: o,
    inviterUserId: a
  } = e;
  U.set(M(o, t), {
    isLaunching: true,
    componentId: n,
    inviterUserId: a,
    launchParams: i
  }), z = r === l.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? v.MI.NO_CHAT : v.MI.RESIZABLE
}

function ep(e) {
  let {
    applicationId: t,
    channelId: n,
    proxyTicket: r
  } = e, i = M(n, t), o = U.get(i);
  null != o && U.set(i, C(S({}, o), {
    proxyTicket: r
  }))
}

function eh(e) {
  let {
    applicationId: t
  } = e;
  N.everLaunchedActivities.add(t)
}

function em(e) {
  let {
    applicationId: t,
    channelId: n
  } = e;
  eg({
    applicationId: t,
    channelId: n
  })
}

function eg(e) {
  let {
    applicationId: t,
    channelId: n
  } = e;
  U.delete(M(n, t))
}

function eE(e) {
  let {
    applicationId: t,
    lockState: n,
    pictureInPictureLockState: r,
    gridLockState: i
  } = e;
  null == n ? Z.delete(t) : Z.set(t, n), null === r ? F.delete(t) : true !== r && F.set(t, r), null === i ? V.delete(t) : true !== i && V.set(t, i)
}

function eb(e) {
  let {
    activityPanelMode: t
  } = e;
  K = t
}

function ey(e) {
  let {
    focusedActivityLayout: t
  } = e;
  z = t
}

function eO(e) {
  let {
    applicationId: t,
    layoutMode: n
  } = e;
  H.set(t, n)
}

function ev(e) {
  let {
    channelId: t
  } = e;
  if (null == r) return;
  let n = (0, E.p)(r);
  null != n && n !== t && K === v.Ez.PANEL && (K = v.Ez.PIP)
}

function eI(e, t) {
  return "".concat(e, ":").concat(t)
}

function eT(e) {
  let {
    key: t
  } = e;
  t === I.KJ3.ACTIVITY_POPOUT && (K = v.Ez.PIP)
}
class eS extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    var t;
    let n = new Set(null != (t = null == e ? true : e.everLaunchedActivities) ? t : []);
    null != e && (N = C(S({}, e), {
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
    return null != (t = k.get(e.id)) ? t : R
  }
  getEmbeddedActivitiesForStartingChannel(e) {
    var t;
    return null != (t = j.get(e)) ? t : R
  }
  getEmbeddedActivitiesByChannel() {
    return L
  }
  getEmbeddedActivityDurationMs(e, t) {
    let n = W.get(eI(e, t));
    return null == n ? null : Date.now() - n
  }
  isLaunchingActivity() {
    return U.size > 0
  }
  getShelfActivities(e) {
    var t;
    let n = X(e);
    return null != (t = G.get(n)) ? t : P
  }
  getShelfFetchStatus(e) {
    let t = X(e);
    return B.get(t)
  }
  shouldFetchShelf(e) {
    var t, n;
    let r = X(e),
      i = null != (t = B.get(r)) ? t : {
        isFetching: false
      },
      o = Date.now() - (null != (n = null == i ? true : i.lastFetchTimestampMs) ? n : 0) > Y;
    return !(null == i ? true : i.isFetching) && o
  }
  getOrientationLockStateForApp(e) {
    return Z.get(e)
  }
  getPipOrientationLockStateForApp(e) {
    var t;
    return null != (t = F.get(e)) ? t : this.getOrientationLockStateForApp(e)
  }
  getGridOrientationLockStateForApp(e) {
    var t, n;
    return null != (n = null != (t = V.get(e)) ? t : F.get(e)) ? n : this.getOrientationLockStateForApp(e)
  }
  getLayoutModeForApp(e) {
    return H.get(e)
  }
  getConnectedActivityChannelId() {
    if (null != r) return (0, Chunk16609.p)(r)
  }
  getConnectedActivityLocation() {
    return r
  }
  getActivityPanelMode() {
    return K
  }
  getFocusedLayout() {
    return z
  }
  getCurrentEmbeddedActivity() {
    var e;
    let t = this.getConnectedActivityLocation();
    return null != (e = this.getSelfEmbeddedActivityForLocation(exports)) ? module : true
  }
  getEmbeddedActivityForUserId(e, t) {
    let n;
    if (true !== t) {
      l: for (let [r, i] of k)
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
    if (null != e) return U.get(M(null != t ? t : null, e))
  }
  getLaunchStates() {
    return U
  }
  getActivityPopoutWindowLayout() {
    return q
  }
}
T(eS, "displayName", "EmbeddedActivitiesStore"), T(eS, "persistKey", "EmbeddedActivities"), T(eS, "migrations", [e => C(S({}, e), {
  seenFeaturedActivities: [],
  shouldShowNewActivityIndicator: false
}), e => (delete e.seenFeaturedActivities, S({}, e)), e => (delete e.seenActivities, S({}, e)), e => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, S({}, e)), e => C(S({}, e), {
  seenNewActivities: {},
  seenUpdatedActivities: {}
}), e => {
  var t;
  let n = new Set(null != (t = e.everLaunchedActivities) ? t : []);
  return C(S({}, e), {
    everLaunchedActivities: n
  })
}, e => (delete e.usersHavePlayedByApp, S({}, e)), e => (e.surfacesToShowNewActivityIndicator = new Set, e.shouldShowNewActivityIndicator && e.surfacesToShowNewActivityIndicator.add(s.eR.VOICE_LAUNCHER), delete e.shouldShowNewActivityIndicator, S({}, e)), e => C(S({}, e), {
  lastCheckedForBadgeableActivities: null
}), e => (delete e.surfacesToShowNewActivityIndicator, C(S({}, e), {
  dateRangesForSurfaces: {}
}))]);
let eA = new eS(Chunk570140.Z, {
    ACTIVITY_LAYOUT_MODE_UPDATE: eO,
    CONNECTION_OPEN_SUPPLEMENTAL: ee,
    GUILD_CREATE: et,
    CHANNEL_DELETE: en,
    EMBEDDED_ACTIVITY_LAUNCH_START: e_,
    EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: ep,
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: eh,
    EMBEDDED_ACTIVITY_LAUNCH_FAIL: em,
    EMBEDDED_ACTIVITY_CLOSE: eo,
    EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: ea,
    EMBEDDED_ACTIVITY_UPDATE_V2: er,
    LOCAL_ACTIVITY_UPDATE: es,
    EMBEDDED_ACTIVITY_SET_CONFIG: el,
    EMBEDDED_ACTIVITY_FETCH_SHELF: ec,
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: ef,
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: eu,
    EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: eE,
    EMBEDDED_ACTIVITY_SET_PANEL_MODE: eb,
    EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: ey,
    CHANNEL_SELECT: ev,
    POPOUT_WINDOW_CLOSE: eT
  }),
  eC = eA