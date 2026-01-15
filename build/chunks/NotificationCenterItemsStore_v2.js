/** Chunk was on web.js **/
/** chunk id: 140155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => z
}), require("./388685.js"), require("./539854.js"), require("./642613.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk353926 = require("./353926.js"),
  Chunk924301 = require("./924301.js"),
  Chunk786761 = require("./786761.js"),
  Chunk23750 = require("./23750.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js"),
  Chunk497089 = require("./497089.js"),
  Chunk178480 = require("./178480.js"),
  Chunk981631 = require("./981631.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = {
  loading: false,
  initialized: false,
  errored: false,
  isDataStale: false,
  notifCenterItems: [],
  staleNotifCenterItems: [],
  notifCenterIds: new Set,
  notifCenterLocalItems: [],
  paginationHasMore: true,
  paginationCursor: true,
  notifCenterActive: false,
  notifCenterTabFocused: false
};

function O(e) {
  return null != e.id && null != e.type
}

function v() {
  let {
    keepLocalItems: e = false
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  y = {
    loading: false,
    initialized: false,
    errored: false,
    isDataStale: false,
    notifCenterItems: [],
    staleNotifCenterItems: [],
    notifCenterIds: new Set,
    notifCenterLocalItems: e ? y.notifCenterLocalItems : [],
    paginationHasMore: true,
    paginationCursor: true,
    notifCenterActive: false,
    notifCenterTabFocused: false
  }
}

function S() {
  v({
    keepLocalItems: true
  })
}

function I() {
  y.loading = true
}

function T() {
  y.loading = false, y.initialized = true, y.errored = true
}

function C(e) {
  return b(g({}, e), {
    kind: "notification-center-item",
    message: null != e.message ? (0, l.e5)(e.message) : true,
    applicationId: null != e.application ? e.application.id : true
  })
}

function A(e) {
  let {
    unknownApplicationIds: t
  } = e;
  if (null == t) return;
  let n = new Set(t);
  y.notifCenterLocalItems = y.notifCenterLocalItems.filter(e => null == e.applicationId || !n.has(e.applicationId))
}

function N(e) {
  v();
  let t = [],
    n = new Set;
  e.relationships.forEach(e => {
    let {
      type: r,
      user: i,
      since: a,
      is_spam_request: o,
      user_ignored: s,
      origin_application_id: l
    } = e;
    if (null == i || (s && n.add(i.id), r !== h.OGo.PENDING_INCOMING || o || s || null == a)) return null;
    let c = d.default.getUser(i.id);
    if (null == c) return null;
    t.push((0, _.mH)(c, a, l))
  }), e.gameRelationships.forEach(e => {
    let {
      type: r,
      id: i,
      application_id: a,
      since: o
    } = e;
    if (r !== h.OGo.PENDING_INCOMING || n.has(i)) return;
    let s = d.default.getUser(i);
    null != s && t.push((0, _.LF)(s, o, a))
  }), e.guilds.forEach(e => {
    e.guild_scheduled_events.forEach(e => {
      Y(e)
    })
  }), y.notifCenterLocalItems = t
}

function P(e) {
  let {
    items: t,
    hasMore: n,
    cursor: r
  } = e;
  y.loading && (y.loading = false, y.initialized = true, y.errored = false, y.isDataStale = false, null != r && y.notifCenterIds.has(r) || (y.paginationHasMore = t.length > 0 && n, y.paginationCursor = t.length > 0 ? r : true), y.notifCenterItems = [...y.notifCenterItems, ...t.map(C).filter(e => !y.notifCenterIds.has(e.id))], y.notifCenterItems.sort((e, t) => f.default.compare(t.id, e.id)), t.forEach(e => y.notifCenterIds.add(e.id)))
}

function w(e) {
  let t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? C(e.item) : e.item;
  if (!y.initialized || !O(t) || y.notifCenterIds.has(t.id)) returnfalse;
  y.notifCenterIds.add(t.id), y.notifCenterItems = [t, ...y.notifCenterItems], y.notifCenterItems.sort((e, t) => f.default.compare(t.id, e.id))
}

function R(e) {
  let {
    id: t
  } = e;
  if (!y.notifCenterIds.has(t)) returnfalse;
  y.notifCenterIds.delete(t), y.notifCenterItems = y.notifCenterItems.filter(e => e.id !== t)
}

function D(e, t) {
  y.notifCenterItems = y.notifCenterItems.map(n => e.includes(n.id) ? b(g({}, n), {
    acked: t
  }) : n).filter(O)
}

function x(e) {
  let {
    ids: t
  } = e;
  D(t, true)
}

function L(e) {
  let {
    ids: t
  } = e;
  D(t, false)
}

function j(e) {
  let {
    active: t
  } = e;
  y.notifCenterActive = t
}

function M(e) {
  let {
    focused: t
  } = e;
  y.notifCenterTabFocused = t
}

function k(e, t, n) {
  var r;
  return e.type === t && (null == (r = e.other_user) ? true : r.id) === n
}

function U(e, t, n, r) {
  return k(e, t, n) && e.applicationId === r
}

function G(e) {
  let {
    relationship: t
  } = e, {
    id: n,
    type: r,
    isSpamRequest: i,
    userIgnored: a,
    user: o,
    since: s,
    originApplicationId: l
  } = t;
  if (r === h.OGo.PENDING_INCOMING && !i && !a) {
    if (null == s) return null;
    if (null != o) {
      let e = d.default.getUser(o.id);
      null != e && (y.notifCenterLocalItems = [...y.notifCenterLocalItems, (0, _.mH)(e, s, l)])
    }
  }
  r !== h.OGo.FRIEND || null == t.user || a || (y.notifCenterLocalItems = y.notifCenterLocalItems.map(e => k(e, p.O7.INCOMING_FRIEND_REQUESTS, t.user.id) ? b(g({}, e), {
    acked: true,
    forceUnacked: false,
    local_id: "incoming_friend_requests_accepted_".concat(o.id, "_").concat(e.id),
    type: p.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED
  }) : e)), (r === h.OGo.BLOCKED || a) && (y.notifCenterLocalItems = y.notifCenterLocalItems.filter(e => !k(e, p.O7.INCOMING_FRIEND_REQUESTS, n) && !k(e, p.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, n) && !k(e, p.O7.INCOMING_GAME_FRIEND_REQUESTS, n) && !k(e, p.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, n)))
}

function Z(e) {
  y.notifCenterLocalItems = y.notifCenterLocalItems.filter(t => !k(t, p.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !k(t, p.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id))
}

function F(e) {
  let {
    gameRelationship: t
  } = e, {
    id: n,
    type: r,
    since: i,
    applicationId: a
  } = t;
  if (u.Z.isBlockedOrIgnored(n)) returnfalse;
  if (r === h.OGo.PENDING_INCOMING) {
    let e = d.default.getUser(n);
    null != i && null != e && (y.notifCenterLocalItems = [...y.notifCenterLocalItems, (0, _.LF)(e, i, a)])
  } else {
    if (r !== h.OGo.FRIEND) returnfalse;
    y.notifCenterLocalItems = y.notifCenterLocalItems.map(e => U(e, p.O7.INCOMING_GAME_FRIEND_REQUESTS, n, a) ? b(g({}, e), {
      acked: true,
      forceUnacked: false,
      local_id: "incoming_game_friend_requests_accepted_".concat(n, "_").concat(e.id),
      type: p.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED
    }) : e)
  }
}

function B(e) {
  let {
    userId: t,
    applicationId: n
  } = e;
  y.notifCenterLocalItems = y.notifCenterLocalItems.filter(e => !U(e, p.O7.INCOMING_GAME_FRIEND_REQUESTS, t, n) && !U(e, p.O7.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, t, n))
}

function V(e) {
  let {
    item_enum: t
  } = e;
  y.notifCenterItems = y.notifCenterItems.map(e => e.item_enum === t ? b(g({}, e), {
    completed: true,
    acked: true
  }) : e).filter(O)
}

function H(e) {
  let {
    guildScheduledEvent: t
  } = e;
  Y(t)
}

function Y(e) {
  (0, s.Z2)(e) && (y.notifCenterItems = y.notifCenterItems.map(t => t.type === p.DY.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id ? b(g({}, t), {
    disable_action: true
  }) : t))
}

function W(e) {
  let {
    newBuild: t
  } = e;
  if (null !== t) {
    let e = (0, _.hn)(t);
    true === y.notifCenterLocalItems.find(t => t.local_id === e.local_id) && (y.notifCenterLocalItems = [...y.notifCenterLocalItems.filter(t => t.kind !== e.kind), e])
  }
}
class K extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(d.default, u.Z, o.Z), null != e) {
      let t = e => b(g({}, e), {
          message: null != e.message ? new c.ZP(e.message) : true
        }),
        n = e.notifCenterItems.map(t);
      n.length > 0 && (y = b(g({}, y), {
        initialized: true,
        isDataStale: true,
        notifCenterItems: [],
        staleNotifCenterItems: n
      }))
    }
  }
  getState() {
    let e = e => b(g({}, e), {
      message: null != e.message ? e.message.toJS() : true
    });
    return b(g({}, y), {
      notifCenterItems: y.notifCenterItems.map(e),
      staleNotifCenterItems: y.staleNotifCenterItems.map(e)
    })
  }
  get loading() {
    return y.loading
  }
  get initialized() {
    return y.initialized
  }
  get items() {
    return y.isDataStale ? y.staleNotifCenterItems : y.notifCenterItems
  }
  get hasMore() {
    return y.paginationHasMore
  }
  get cursor() {
    return y.paginationCursor
  }
  get errored() {
    return y.errored
  }
  get active() {
    return y.notifCenterActive
  }
  get localItems() {
    return y.notifCenterLocalItems
  }
  get tabFocused() {
    return y.notifCenterTabFocused
  }
}
m(K, "displayName", "NotificationCenterItemsStore"), m(K, "persistKey", "NotificationCenterItemsStore_v2");
let z = new K(Chunk570140.Z, {
  CONNECTION_OPEN: N,
  LOGOUT: () => v(),
  NOTIFICATION_CENTER_ITEMS_ACK: x,
  NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: L,
  GUILD_SCHEDULED_EVENT_UPDATE: H,
  NOTIFICATION_CENTER_ITEM_CREATE: w,
  NOTIFICATION_CENTER_ITEM_DELETE: R,
  NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: w,
  LOAD_NOTIFICATION_CENTER_ITEMS: I,
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: T,
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: P,
  RESET_NOTIFICATION_CENTER: () => S(),
  NOTIFICATION_CENTER_SET_ACTIVE: j,
  NOTIFICATION_CENTER_TAB_FOCUSED: M,
  RELATIONSHIP_ADD: G,
  RELATIONSHIP_UPDATE: G,
  RELATIONSHIP_REMOVE: Z,
  GAME_RELATIONSHIP_ADD: F,
  GAME_RELATIONSHIP_REMOVE: B,
  NOTIFICATION_CENTER_ITEM_COMPLETED: V,
  SET_RECENT_MENTIONS_FILTER: () => S(),
  MOBILE_NATIVE_UPDATE_CHECK_FINISHED: W,
  APPLICATIONS_FETCH_SUCCESS: A
})