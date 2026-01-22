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

function A() {
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

function v() {
  A({
    keepLocalItems: true
  })
}

function S() {
  y.loading = true
}

function I() {
  y.loading = false, y.initialized = true, y.errored = true
}

function T(e) {
  return b(g({}, e), {
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
  y.notifCenterLocalItems = y.notifCenterLocalItems.filter(e => null == e.applicationId || !n.has(e.applicationId))
}

function N(e) {
  A();
  let t = [],
    n = new Set;
  e.relationships.forEach(e => {
    let {
      type: r,
      user: i,
      since: a,
      is_spam_request: s,
      user_ignored: o,
      origin_application_id: l
    } = e;
    if (null == i || (o && n.add(i.id), r !== h.eA$.PENDING_INCOMING || s || o || null == a)) return null;
    let c = d.default.getUser(i.id);
    if (null == c) return null;
    t.push((0, _.Qi)(c, a, l))
  }), e.gameRelationships.forEach(e => {
    let {
      type: r,
      id: i,
      application_id: a,
      since: s
    } = e;
    if (r !== h.eA$.PENDING_INCOMING || n.has(i)) return;
    let o = d.default.getUser(i);
    null != o && t.push((0, _.KS)(o, s, a))
  }), e.guilds.forEach(e => {
    e.guild_scheduled_events.forEach(e => {
      W(e)
    })
  }), y.notifCenterLocalItems = t
}

function R(e) {
  let {
    items: t,
    hasMore: n,
    cursor: r
  } = e;
  y.loading && (y.loading = false, y.initialized = true, y.errored = false, y.isDataStale = false, null != r && y.notifCenterIds.has(r) || (y.paginationHasMore = t.length > 0 && n, y.paginationCursor = t.length > 0 ? r : true), y.notifCenterItems = [...y.notifCenterItems, ...t.map(T).filter(e => !y.notifCenterIds.has(e.id))], y.notifCenterItems.sort((e, t) => f.default.compare(t.id, e.id)), t.forEach(e => y.notifCenterIds.add(e.id)))
}

function w(e) {
  let t = "NOTIFICATION_CENTER_ITEM_CREATE" === e.type ? T(e.item) : e.item;
  if (!y.initialized || !O(t) || y.notifCenterIds.has(t.id)) returnfalse;
  y.notifCenterIds.add(t.id), y.notifCenterItems = [t, ...y.notifCenterItems], y.notifCenterItems.sort((e, t) => f.default.compare(t.id, e.id))
}

function P(e) {
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
    user: s,
    since: o,
    originApplicationId: l
  } = t;
  if (r === h.eA$.PENDING_INCOMING && !i && !a) {
    if (null == o) return null;
    if (null != s) {
      let e = d.default.getUser(s.id);
      null != e && (y.notifCenterLocalItems = [...y.notifCenterLocalItems, (0, _.Qi)(e, o, l)])
    }
  }
  r !== h.eA$.FRIEND || null == t.user || a || (y.notifCenterLocalItems = y.notifCenterLocalItems.map(e => k(e, p.Uo.INCOMING_FRIEND_REQUESTS, t.user.id) ? b(g({}, e), {
    acked: true,
    forceUnacked: false,
    local_id: "incoming_friend_requests_accepted_".concat(s.id, "_").concat(e.id),
    type: p.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED
  }) : e)), (r === h.eA$.BLOCKED || a) && (y.notifCenterLocalItems = y.notifCenterLocalItems.filter(e => !k(e, p.Uo.INCOMING_FRIEND_REQUESTS, n) && !k(e, p.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED, n) && !k(e, p.Uo.INCOMING_GAME_FRIEND_REQUESTS, n) && !k(e, p.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, n)))
}

function V(e) {
  y.notifCenterLocalItems = y.notifCenterLocalItems.filter(t => !k(t, p.Uo.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !k(t, p.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id))
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
  if (u.A.isBlockedOrIgnored(n)) returnfalse;
  if (r === h.eA$.PENDING_INCOMING) {
    let e = d.default.getUser(n);
    null != i && null != e && (y.notifCenterLocalItems = [...y.notifCenterLocalItems, (0, _.KS)(e, i, a)])
  } else {
    if (r !== h.eA$.FRIEND) returnfalse;
    y.notifCenterLocalItems = y.notifCenterLocalItems.map(e => U(e, p.Uo.INCOMING_GAME_FRIEND_REQUESTS, n, a) ? b(g({}, e), {
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
  y.notifCenterLocalItems = y.notifCenterLocalItems.filter(e => !U(e, p.Uo.INCOMING_GAME_FRIEND_REQUESTS, t, n) && !U(e, p.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED, t, n))
}

function H(e) {
  let {
    item_enum: t
  } = e;
  y.notifCenterItems = y.notifCenterItems.map(e => e.item_enum === t ? b(g({}, e), {
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
  (0, o.AZ)(e) && (y.notifCenterItems = y.notifCenterItems.map(t => t.type === p.hW.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id ? b(g({}, t), {
    disable_action: true
  }) : t))
}

function K(e) {
  let {
    newBuild: t
  } = e;
  if (null !== t) {
    let e = (0, _._u)(t);
    true === y.notifCenterLocalItems.find(t => t.local_id === e.local_id) && (y.notifCenterLocalItems = [...y.notifCenterLocalItems.filter(t => t.kind !== e.kind), e])
  }
}
class z extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (this.waitFor(d.default, u.A, s.A), null != e) {
      let t = e => b(g({}, e), {
          message: null != e.message ? new c.Ay(e.message) : true
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
m(z, "displayName", "NotificationCenterItemsStore"), m(z, "persistKey", "NotificationCenterItemsStore_v2");
let q = new z(Chunk73153.h, {
  CONNECTION_OPEN: N,
  LOGOUT: () => A(),
  NOTIFICATION_CENTER_ITEMS_ACK: x,
  NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: L,
  GUILD_SCHEDULED_EVENT_UPDATE: Y,
  NOTIFICATION_CENTER_ITEM_CREATE: w,
  NOTIFICATION_CENTER_ITEM_DELETE: P,
  NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: w,
  LOAD_NOTIFICATION_CENTER_ITEMS: S,
  LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: I,
  LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: R,
  RESET_NOTIFICATION_CENTER: () => v(),
  NOTIFICATION_CENTER_SET_ACTIVE: j,
  NOTIFICATION_CENTER_TAB_FOCUSED: M,
  RELATIONSHIP_ADD: G,
  RELATIONSHIP_UPDATE: G,
  RELATIONSHIP_REMOVE: V,
  GAME_RELATIONSHIP_ADD: F,
  GAME_RELATIONSHIP_REMOVE: B,
  NOTIFICATION_CENTER_ITEM_COMPLETED: H,
  SET_RECENT_MENTIONS_FILTER: () => v(),
  MOBILE_NATIVE_UPDATE_CHECK_FINISHED: K,
  APPLICATIONS_FETCH_SUCCESS: C
})