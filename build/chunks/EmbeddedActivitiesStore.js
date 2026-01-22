/** Chunk was on web.js **/
/** chunk id: 933958, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Am: () => R,
  Ay: () => eP
}), require("./896048.js"), require("./321073.js");
var i, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk155718 = require("./155718.js"),
  Chunk392054 = require("./392054.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk203982 = require("./203982.js"),
  Chunk723702 = require("./723702.js"),
  Chunk646865 = require("./646865.js"),
  Chunk956518 = require("./956518.js"),
  Chunk878549 = require("./878549.js"),
  Chunk969151 = require("./969151.js"),
  Chunk847381 = require("./847381.js"),
  Chunk108959 = require("./108959.js"),
  Chunk360469 = require("./360469.js"),
  Chunk5867 = require("./5867.js"),
  Chunk652215 = require("./652215.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
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

function T(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
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
  w = [],
  P = "0",
  D = new Map,
  x = new Map,
  L = new Map,
  j = new Map,
  M = new Map;

function k(e, t) {
  return "".concat(t, ":").concat(e)
}
let U = new Map,
  G = new Set,
  V = new Map,
  F = new Map,
  B = new Map,
  H = new Map,
  Y = new Map,
  W = new Map,
  K = 216e5,
  z = new Map,
  q = Chunk5867.Gd.DISCONNECTED,
  X = Chunk5867.E8.RESIZABLE,
  Z = Chunk360469.M1.NORMAL;

function Q(e) {
  return null != e ? e : P
}

function $(e) {
  var t, n, r, i, a, s, o, l;
  let {
    location: u,
    applicationId: d,
    launchId: f,
    compositeInstanceId: p,
    participants: _,
    proxyTicket: h
  } = e, b = (0, m.Ay)(d);
  if (null == b) return;
  let y = (0, E.H)(u),
    O = null != y && null != (t = L.get(y)) ? t : R,
    A = null != O && 0 === O.length,
    v = null != (n = M.get(u.id)) ? n : R,
    S = v.find(e => e.applicationId === d),
    T = _.map(e => e.userId),
    N = c.default.getId(),
    w = T.some(e => e === N),
    P = null == (a = _.find(e => e.userId === N)) ? true : a.sessionId,
    j = _.some(e => (0, g.S)(e)),
    G = D.get(d),
    V = U.get(k(null != y ? y : null, d)),
    F = null == V ? true : V.launchParams,
    B = {
      applicationId: d,
      location: u,
      launchId: f,
      compositeInstanceId: p,
      url: b,
      userIds: new Set(T),
      participants: _,
      referrerId: null != (r = null == G ? true : G.referrerId) ? r : null == F ? true : F.referrerId,
      customId: null != (i = null == G ? true : G.customId) ? i : null == F ? true : F.customId,
      proxyTicket: h
    };
  w && null != G && D.set(G.applicationId, C(I({}, G, B), {
    proxyTicket: null != (s = B.proxyTicket) ? s : G.proxyTicket
  }));
  let H = !j;
  null != G && u.id === G.location.id && d === G.applicationId && (!w && Array.from(G.userIds).some(e => e === N) || H) ? ee(G) : w && (null == G || G.applicationId !== d || G.location.id !== u.id) && (P === c.default.getSessionId() && ea({
    applicationId: d,
    launchId: f,
    compositeInstanceId: p,
    location: u,
    participants: _,
    isFirstActivityInChannel: A,
    isStart: null == S,
    referrerId: B.referrerId,
    customId: B.customId,
    inviterUserId: null == V ? true : V.inviterUserId,
    proxyTicket: B.proxyTicket
  }), eO({
    channelId: null != y ? y : null,
    applicationId: d
  }));
  let Y = v.filter(e => e.applicationId !== d);
  if (T.length > 0 && Y.push(B), M.set(u.id, Y), null != y) {
    let e = (null != (o = L.get(y)) ? o : []).filter(e => e.applicationId !== d),
      t = Q((0, E.D)(u)),
      n = (null != (l = x.get(t)) ? l : []).filter(e => e.applicationId !== d || e.location.id !== u.id);
    T.length > 0 && (e.push(B), n.push(B)), L.set(y, e), x.set(t, n)
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
      participants: a
    } = e;
    $({
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
  D.delete(e.applicationId), p._.dispatch(v.jej.RELEASE_ACTIVITY_WEB_VIEW)
}

function et(e) {
  let {
    guilds: t
  } = e;
  L.clear(), x.clear(), M.clear(), j.clear(), t.forEach(e => J(e));
  let n = c.default.getId();
  for (let e of Array.from(D.values())) ew.getEmbeddedActivitiesForLocation(e.location).some(t => t.applicationId === e.applicationId && t.launchId === e.launchId && t.userIds.has(n)) || ee(e)
}

function en(e) {
  let {
    guild: t
  } = e;
  J(t)
}

function er(e) {
  var t, n;
  let {
    channel: r
  } = e, i = null != (t = L.get(r.id)) ? t : [];
  L.set(r.id, []);
  let a = Q(r.guild_id),
    s = (null != (n = x.get(a)) ? n : []).filter(e => (0, E.H)(e.location) !== r.id);
  x.set(a, s), i.forEach(e => {
    M.delete(e.location.id)
  }), j.set(r.id, [])
}

function ei(e) {
  let {
    applicationId: t,
    launchId: n,
    compositeInstanceId: r,
    location: i,
    participants: a
  } = e, s = (0, E.H)(i), o = U.get(k(null != s ? s : null, t));
  $({
    location: i,
    applicationId: t,
    launchId: n,
    compositeInstanceId: r,
    participants: a.map(e => ({
      userId: e.user_id,
      sessionId: e.session_id,
      nonce: e.nonce
    })),
    proxyTicket: null == o ? true : o.proxyTicket
  })
}

function ea(e) {
  var t, n;
  let {
    applicationId: i,
    launchId: a,
    compositeInstanceId: o,
    location: l,
    participants: _,
    isFirstActivityInChannel: g,
    isStart: b,
    referrerId: O,
    customId: S,
    inviterUserId: I,
    proxyTicket: T
  } = e, C = (0, m.Ay)(i), N = c.default.getSessionId();
  if (null == C || null == N || (null == (n = D.get(i)) ? true : n.location.id) === l.id) returnfalse;
  let R = (0, E.H)(l),
    w = u.A.getChannel(R),
    P = null == w ? true : w.getGuildId();
  if (null == f.default.getCurrentUser() || null == P && !(null != (t = null == w ? true : w.isPrivate()) && t)) returnfalse;
  r = l;
  let x = {
    applicationId: i,
    url: C,
    userIds: new Set(_.map(e => e.userId)),
    participants: _,
    connectedSince: Date.now(),
    launchId: a,
    compositeInstanceId: o,
    location: l,
    referrerId: O,
    customId: S,
    proxyTicket: T
  };
  D.set(i, x), p._.dispatch(v.jej.OPEN_EMBEDDED_ACTIVITY, {
    location: l,
    applicationId: i,
    isFirstActivityInChannel: g,
    isStart: b,
    participants: _,
    embeddedActivity: x,
    inviterUserId: I
  }), (0, h.f)() ? (q = A.Gd.ACTIVITY_POPOUT_WINDOW, s.h.wait(() => {
    s.h.dispatch({
      type: "ACTIVITY_POPOUT_WINDOW_OPEN"
    })
  })) : q = R !== d.A.getChannelId() || (0, y.A)(R) ? A.Gd.PIP : A.Gd.PANEL, z.set(eC(l.id, i), Date.now())
}

function es(e) {
  let {
    applicationId: t
  } = e, n = D.get(t);
  D.delete(t), (null == n ? true : n.location.id) === (null == r ? true : r.id) && (r = true)
}

function eo(e) {
  let {
    layout: t
  } = e;
  Z = t
}

function el(e) {
  var t;
  let {
    activity: n
  } = e;
  if (null == n) returnfalse;
  let r = D.get(null != (t = n.application_id) ? t : "");
  if (null == r) returnfalse;
  D.set(r.applicationId, I({}, r))
}

function ec(e) {
  let {
    applicationId: t,
    config: n
  } = e, r = D.get(t);
  null != r && D.set(r.applicationId, C(I({}, r), {
    config: n
  }))
}

function eu(e) {
  let {
    guildId: t
  } = e, n = Q(t), r = F.get(n);
  F.set(n, {
    isFetching: true,
    lastFetchTimestampMs: null == r ? true : r.lastFetchTimestampMs
  }), N.lastCheckedForBadgeableActivities = new Date(Date.now()).toISOString()
}

function ed(e) {
  let {
    guildId: t
  } = e, n = Q(t), r = F.get(n);
  F.set(n, {
    isFetching: false,
    lastFetchTimestampMs: null == r ? true : r.lastFetchTimestampMs
  })
}

function ef(e) {
  let {
    activities: t,
    now: n
  } = e, r = (0, b.A)((0, _.getOS)()), i = t.reduce((e, t) => {
    let i = t.client_platform_config[r];
    if (null == i.label_from || null == i.label_until) return e;
    let a = {
        fromDate: i.label_from,
        untilDate: i.label_until
      },
      s = new Date(i.label_from).getTime(),
      l = new Date(i.label_until).getTime();
    return s > n || l < n || Object.values(o.YI).filter(e => !i.omit_badge_from_surfaces.includes(e)).forEach(t => {
      let n = e[t];
      (null == n || new Date(n.fromDate).getTime() < s) && (e[t] = a)
    }), e
  }, {});
  N.dateRangesForSurfaces = i
}

function ep(e) {
  let {
    guildId: t,
    activities: n
  } = e, r = Q(t);
  V.set(r, n);
  let i = Date.now();
  ef({
    activities: n,
    now: i
  }), F.set(r, {
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
    channelId: a,
    inviterUserId: s
  } = e;
  U.set(k(a, t), {
    isLaunching: true,
    componentId: n,
    inviterUserId: s,
    launchParams: i
  }), X = r === l.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON ? A.E8.NO_CHAT : A.E8.RESIZABLE
}

function eh(e) {
  let {
    applicationId: t,
    channelId: n,
    proxyTicket: r
  } = e, i = k(n, t), a = U.get(i);
  null != a && U.set(i, C(I({}, a), {
    proxyTicket: r
  }))
}

function em(e) {
  let {
    applicationId: t,
    proxyTicket: n
  } = e, r = D.get(t);
  if (null == r) returnfalse;
  D.set(t, C(I({}, r), {
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

function eA(e) {
  let {
    applicationId: t,
    lockState: n,
    pictureInPictureLockState: r,
    gridLockState: i
  } = e;
  null == n ? B.delete(t) : B.set(t, n), null === r ? H.delete(t) : true !== r && H.set(t, r), null === i ? Y.delete(t) : true !== i && Y.set(t, i)
}

function ev(e) {
  let {
    activityPanelMode: t
  } = e;
  q = t
}

function eS(e) {
  let {
    focusedActivityLayout: t
  } = e;
  X = t
}

function eI(e) {
  let {
    applicationId: t,
    layoutMode: n
  } = e;
  W.set(t, n)
}

function eT(e) {
  let {
    channelId: t
  } = e;
  if (null == r) return;
  let n = (0, E.H)(r);
  null != n && n !== t && q === A.Gd.PANEL && (q = A.Gd.PIP)
}

function eC(e, t) {
  return "".concat(e, ":").concat(t)
}

function eN(e) {
  let {
    key: t
  } = e;
  t === v.MLl.ACTIVITY_POPOUT && (q = A.Gd.PIP)
}
class eR extends(i = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    var t;
    this.waitFor(c.default, u.A, d.A, f.default);
    let n = new Set(null != (t = null == e ? true : e.everLaunchedActivities) ? t : []);
    null != e && (N = C(I({}, e), {
      everLaunchedActivities: n
    }))
  }
  getState() {
    return N
  }
  getSelfEmbeddedActivityForChannel(e) {
    var t;
    return null == e ? null : null != (t = Array.from(D.values()).find(t => (0, E.H)(t.location) === e)) ? t : null
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
    return null != (t = M.get(e.id)) ? t : R
  }
  getEmbeddedActivitiesForStartingChannel(e) {
    var t;
    return null != (t = j.get(e)) ? t : R
  }
  getEmbeddedActivitiesByChannel() {
    return L
  }
  getEmbeddedActivityDurationMs(e, t) {
    let n = z.get(eC(e, t));
    return null == n ? null : Date.now() - n
  }
  isLaunchingActivity() {
    return U.size > 0
  }
  getShelfActivities(e) {
    var t;
    let n = Q(e);
    return null != (t = V.get(n)) ? t : w
  }
  getShelfFetchStatus(e) {
    let t = Q(e);
    return F.get(t)
  }
  shouldFetchShelf(e) {
    var t, n;
    let r = Q(e),
      i = null != (t = F.get(r)) ? t : {
        isFetching: false
      },
      a = Date.now() - (null != (n = null == i ? true : i.lastFetchTimestampMs) ? n : 0) > K;
    return !(null == i ? true : i.isFetching) && a
  }
  getOrientationLockStateForApp(e) {
    return B.get(e)
  }
  getPipOrientationLockStateForApp(e) {
    var t;
    return null != (t = H.get(e)) ? t : this.getOrientationLockStateForApp(e)
  }
  getGridOrientationLockStateForApp(e) {
    var t, n;
    return null != (t = null != (n = Y.get(e)) ? n : H.get(e)) ? t : this.getOrientationLockStateForApp(e)
  }
  getLayoutModeForApp(e) {
    return W.get(e)
  }
  getConnectedActivityChannelId() {
    if (null != r) return (0, E.H)(r)
  }
  getConnectedActivityLocation() {
    return r
  }
  getActivityPanelMode() {
    return q
  }
  getFocusedLayout() {
    return X
  }
  getCurrentEmbeddedActivity() {
    var e;
    let t = this.getConnectedActivityLocation();
    return null != (e = this.getSelfEmbeddedActivityForLocation(t)) ? e : true
  }
  isProxyTicketRefreshing(e) {
    return G.has(e)
  }
  getEmbeddedActivityForUserId(e, t) {
    let n;
    if (true !== t) {
      l: for (let [r, i] of M)
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
    return Z
  }
}
S(eR, "displayName", "EmbeddedActivitiesStore"), S(eR, "persistKey", "EmbeddedActivities"), S(eR, "migrations", [e => C(I({}, e), {
  seenFeaturedActivities: [],
  shouldShowNewActivityIndicator: false
}), e => (delete e.seenFeaturedActivities, I({}, e)), e => (delete e.seenActivities, I({}, e)), e => (delete e.currentFreeActivity, delete e.lastFreeActivityRotationTimestampMs, delete e.freePeriodActivities, delete e.shouldShowFreeActivityIndicator, I({}, e)), e => C(I({}, e), {
  seenNewActivities: {},
  seenUpdatedActivities: {}
}), e => {
  var t;
  let n = new Set(null != (t = e.everLaunchedActivities) ? t : []);
  return C(I({}, e), {
    everLaunchedActivities: n
  })
}, e => (delete e.usersHavePlayedByApp, I({}, e)), e => (e.surfacesToShowNewActivityIndicator = new Set, e.shouldShowNewActivityIndicator && e.surfacesToShowNewActivityIndicator.add(o.YI.VOICE_LAUNCHER), delete e.shouldShowNewActivityIndicator, I({}, e)), e => C(I({}, e), {
  lastCheckedForBadgeableActivities: null
}), e => (delete e.surfacesToShowNewActivityIndicator, C(I({}, e), {
  dateRangesForSurfaces: {}
}))]);
let ew = new eR(Chunk73153.h, {
    ACTIVITY_LAYOUT_MODE_UPDATE: eI,
    CONNECTION_OPEN_SUPPLEMENTAL: et,
    GUILD_CREATE: en,
    CHANNEL_DELETE: er,
    EMBEDDED_ACTIVITY_LAUNCH_START: e_,
    EMBEDDED_ACTIVITY_LAUNCH_SET_PROXY_TICKET: eh,
    EMBEDDED_ACTIVITY_UPDATE_CONNECTED_PROXY_TICKET: em,
    EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING: eg,
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: eE,
    EMBEDDED_ACTIVITY_LAUNCH_FAIL: eb,
    EMBEDDED_ACTIVITY_LAUNCH_CANCEL: ey,
    EMBEDDED_ACTIVITY_CLOSE: es,
    EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT: eo,
    EMBEDDED_ACTIVITY_UPDATE_V2: ei,
    LOCAL_ACTIVITY_UPDATE: el,
    EMBEDDED_ACTIVITY_SET_CONFIG: ec,
    EMBEDDED_ACTIVITY_FETCH_SHELF: eu,
    EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS: ep,
    EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL: ed,
    EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE: eA,
    EMBEDDED_ACTIVITY_SET_PANEL_MODE: ev,
    EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT: eS,
    CHANNEL_SELECT: eT,
    POPOUT_WINDOW_CLOSE: eN
  }),
  eP = ew