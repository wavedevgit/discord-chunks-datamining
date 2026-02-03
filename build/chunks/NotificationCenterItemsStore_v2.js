/** Chunk was on web.js **/
/** chunk id: 252431, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => q
}), require("./896048.js"), require("./321073.js"), require("./638769.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk49463 = require("./49463.js"),
  Chunk698441 = require("./698441.js"),
  Chunk141468 = require("./141468.js"),
  Chunk383233 = require("./383233.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk661191 = require("./661191.js"),
  Chunk322387 = require("./322387.js"),
  Chunk995273 = require("./995273.js"),
  Chunk652215 = require("./652215.js");

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

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = {
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
  b = {
    loading: false,
    initialized: false,
    errored: false,
    isDataStale: false,
    notifCenterItems: [],
    staleNotifCenterItems: [],
    notifCenterIds: new Set,
    notifCenterLocalItems: e ? b.notifCenterLocalItems : [],
    paginationHasMore: true,
    paginationCursor: true,
    notifCenterActive: false,
    notifCenterTabFocused: false
  }
}

function A() {
  v({
    keepLocalItems: true
  })
}

function I() {
  b.loading = true
}

function S() {
  b.loading = false, b.initialized = true, b.errored = true
}

function T(e) {
  return y(g({}, e), {
    kind: "notification-center-item",
    message: null != e.message ? (0, l.rh)(e.message) : true,
    applicationId: null != e.application ? e.application.id : true
  })
}

function C(e) {
  let {
    unknownApplicationIds: t
  } = e;
  if (null == t) return;
  let n = new Set(t);
  b.notifCenterLocalItems = b.notifCenterLocalItems.filter(e => null == e.applicationId || !n.has(e.applicationId))
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
    if (null == i || (s && n.add(i.id), r !== h.eA$.PENDING_INCOMING || o || s || null == a)) return null;
    let c = d.default.getUser(i.id);
    if (null == c) return null;
    t.push((0, _.Qi)(c, a, l))
  }), e.gameRelationships.forEach(e => {
    let {
      type: r,
      id: i,
      application_id: a,
      since: o
    } = e;
    if (r !== h.eA$.PENDING_INCOMING || n.has(i)) return;
    let s = d.default.getUser(i);
    null != s && t.push((0, _.KS)(s, o, a))
  }), e.guilds.forEach(e => {
    e.guild_scheduled_events.forEach(e => {
      W(e)
    })
  }), b.notifCenterLocalItems = t
}

function w(e) {
  let {
    items: t,
    hasMore: n,
    cursor: r
  } = e;
  b.loading && (b.loading = false, b.initialized = true, b.errored = false, b.isDataStale = false, null != r && b.notifCenterIds.has(r) || (b.paginationHasMore = t.length > 0 && n, b.paginationCursor = t.length > 0 ? r : true), b.notifCenterItems = [...b.notifCenterItems, ...t.map(T).filter(e => !b.notifCenterIds.has(e.id))], b.notifCenterItems.sort((e, t) => f.default.compare(t.id, e.id)), t.forEach(e => b.notifCenterIds.add(e.id)))
}

function R(e) {
  let t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? T(e.item) : e.item;
  if (!b.initialized || !O(t) || b.notifCenterIds.has(t.id)) returnfalse;
  b.notifCenterIds.add(t.id), b.notifCenterItems = [t, ...b.notifCenterItems], b.notifCenterItems.sort((e, t) => f.default.compare(t.id, e.id))
}

function P(e) {
  let {
    id: t
  } = e;
  if (!b.notifCenterIds.has(t)) returnfalse;
  b.notifCenterIds.delete(t), b.notifCenterItems = b.notifCenterItems.filter(e => e.id !== t)
}

function D(e, t) {
  b.notifCenterItems = b.notifCenterItems.map(n => e.includes(n.id) ? y(g({}, n), {
    acked: t
  }) : n).filter(O)
}

function L(e) {
  let {
    ids: t
  } = e;
  D(t, true)
}

function x(e) {
  let {
    ids: t
  } = e;
  D(t, false)
}

function M(e) {
  let {
    active: t
  } = e;
  b.notifCenterActive = t
}

function j(e) {
  let {
    focused: t
  } = e;
  b.notifCenterTabFocused = t
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
  if (r === h.eA$.PENDING_INCOMING && !i && !a) {
    if (null == s) return null;
    if (null != o) {
      let e = d.default.getUser(o.id);
      null != e && (b.notifCenterLocalItems = [...b.notifCenterLocalItems, (0, _.Qi)(e, s, l)])
    }
  }
  r !== h.eA$.FRIEND || null == t.user || a || (b.notifCenterLocalItems = b.notifCenterLocalItems.map(e => k(e, p.Uo.INCOMING_FRIEND_REQUESTS, t.user.id) ? y(g({}, e), {
    acked: true,
    forceUnacked: false,
    local_id: "incoming_friend_requests_accepted_".concat(o.id, "_").concat(e.id),
    type: p.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED
  }) : e)), (r === h.eA$.BLOCKED || a) && (b.notifCenterLocalItems = b.notifCenterLocalItems.filter(e => !k(e, p.Uo.INCOMING_FRIEND_REQUESTS, n) && !k(e, p.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED, n) && !k(e, p.Uo.INCOMING_GAME_FRIEND_REQUESTS, n) && !k(e, p.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, n)))
}

function F(e) {
  b.notifCenterLocalItems = b.notifCenterLocalItems.filter(t => !k(t, p.Uo.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !k(t, p.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id))
}

function V(e) {
  let {
    gameRelationship: t
  } = e, {
    id: n,
    type: r,
    since: i,
    applicationId: a
  } = t;
  if (u.A.isBlockedOrIgnored(n)) returnfalse;
  if (r === h.eA$.PENDING_INCOMING) {
    let e = d.default.getUser(n);
    null != i && null != e && (b.notifCenterLocalItems = [...b.notifCenterLocalItems, (0, _.KS)(e, i, a)])
  } else {
    if (r !== h.eA$.FRIEND) returnfalse;
    b.notifCenterLocalItems = b.notifCenterLocalItems.map(e => U(e, p.Uo.INCOMING_GAME_FRIEND_REQUESTS, n, a) ? y(g({}, e), {
      acked: true,
      forceUnacked: false,
      local_id: "incoming_game_friend_requests_accepted_".concat(n, "_").concat(e.id),
      type: p.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED
    }) : e)
  }
}

function B(e) {
  let {
    userId: t,
    applicationId: n
  } = e;
  b.notifCenterLocalItems = b.notifCenterLocalItems.filter(e => !U(e, p.Uo.INCOMING_GAME_FRIEND_REQUESTS, t, n) && !U(e, p.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, t, n))
}

function H(e) {
  let {
    item_enum: t
  } = e;
  b.notifCenterItems = b.notifCenterItems.map(e => e.item_enum === t ? y(g({}, e), {
    completed: true,
    acked: true
  }) : e).filter(O)
}

function Y(e) {
  let {
    guildScheduledEvent: t
  } = e;
  W(t)
}

function W(e) {
  (0, s.AZ)(e) && (b.notifCenterItems = b.notifCenterItems.map(t => t.type === p.hW.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id ? y(g({}, t), {
    disable_action: true
  }) : t))
}

function K(e) {
  let {
    newBuild: t
  } = e;
  if (null !== t) {
    let e = (0, _._u)(t);
    true === b.notifCenterLocalItems.find(t => t.local_id === e.local_id) && (b.notifCenterLocalItems = [...b.notifCenterLocalItems.filter(t => t.kind !== e.kind), e])
  }
}
class z extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (this.waitFor(d.default, u.A, o.A), null != e) {
      let t = e => y(g({}, e), {
          message: null != e.message ? new c.Ay(e.message) : true
        }),
        n = e.notifCenterItems.map(t);
      n.length > 0 && (b = y(g({}, b), {
        initialized: true,
        isDataStale: true,
        notifCenterItems: [],
        staleNotifCenterItems: n
      }))
    }
  }
  getState() {
    let e = e => y(g({}, e), {
      message: null != e.message ? e.message.toJS() : true
    });
    return y(g({}, b), {
      notifCenterItems: b.notifCenterItems.map(e),
      staleNotifCenterItems: b.staleNotifCenterItems.map(e)
    })
  }
  get loading() {
    return b.loading
  }
  get initialized() {
    return b.initialized
  }
  get items() {
    return b.isDataStale ? b.staleNotifCenterItems : b.notifCenterItems
  }
  get hasMore() {
    return b.paginationHasMore
  }
  get cursor() {
    return b.paginationCursor
  }
  get errored() {
    return b.errored
  }
  get active() {
    return b.notifCenterActive
  }
  get localItems() {
    return b.notifCenterLocalItems
  }
  get tabFocused() {
    return b.notifCenterTabFocused
  }
}
m(z, "displayName", "NotificationCenterItemsStore"), m(z, "persistKey", "NotificationCenterItemsStore_v2");
let q = new z(Chunk73153.h, {
  CONNECTION_OPEN: N,
  LOGOUT: () => v(),
  NOTIFICATION_CENTER_ITEMS_ACK: L,
  NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: x,
  GUILD_SCHEDULED_EVENT_UPDATE: Y,
  NOTIFICATION_CENTER_ITEM_CREATE: R,
  NOTIFICATION_CENTER_ITEM_DELETE: P,
  NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: R,
  LOAD_NOTIFICATION_CENTER_ITEMS: I,
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: S,
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: w,
  RESET_NOTIFICATION_CENTER: () => A(),
  NOTIFICATION_CENTER_SET_ACTIVE: M,
  NOTIFICATION_CENTER_TAB_FOCUSED: j,
  RELATIONSHIP_ADD: G,
  RELATIONSHIP_UPDATE: G,
  RELATIONSHIP_REMOVE: F,
  GAME_RELATIONSHIP_ADD: V,
  GAME_RELATIONSHIP_REMOVE: B,
  NOTIFICATION_CENTER_ITEM_COMPLETED: H,
  SET_RECENT_MENTIONS_FILTER: () => A(),
  MOBILE_NATIVE_UPDATE_CHECK_FINISHED: K,
  APPLICATIONS_FETCH_SUCCESS: C
})