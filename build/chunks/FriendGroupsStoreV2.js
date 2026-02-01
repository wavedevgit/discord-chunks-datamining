/** Chunk was on 57010 **/
/** chunk id: 870391, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./321073.js"), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk21119 = require("./21119.js"),
  Chunk153488 = require("./153488.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = [],
  g = false;
class I extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (this.waitFor(a.A, u.A, s.A, o.default), null != e) {
      var t, n;
      f = null != (t = e.groups) ? t : [], g = null != (n = e.isInitialized) && n
    }
  }
  getGroups() {
    return f
  }
  getGroup(e) {
    var t;
    return null != (t = f.find(t => t.id === e)) ? t : null
  }
  getGroupIds() {
    return f.map(e => e.id)
  }
  getUserGroups(e) {
    return f.filter(t => t.userIds.includes(e))
  }
  isGroupEmpty(e) {
    let t = this.getGroup(e);
    return null == t || 0 === t.userIds.length
  }
  isInitialized() {
    return g
  }
  getState() {
    return {
      groups: f,
      isInitialized: g
    }
  }
}
d(I, "displayName", "FriendGroupsStore"), d(I, "persistKey", "FriendGroupsStoreV2");
let A = new I(Chunk73153.h, {
  POST_CONNECTION_OPEN: function() {
    if (g || f.length > 0) returnfalse;
    f = [], g = true
  },
  CREATE_FRIEND_GROUP: function(e) {
    let {
      groupId: t,
      name: n
    } = e;
    return !f.some(e => e.id === t) && (f.push({
      id: t,
      name: n,
      userIds: []
    }), true)
  },
  UPDATE_FRIEND_GROUP: function(e) {
    let {
      groupId: t,
      name: n
    } = e, r = f.findIndex(e => e.id === t);
    return false !== r && (f[r] = h(c({}, f[r]), {
      name: n
    }), true)
  },
  DELETE_FRIEND_GROUP: function(e) {
    let {
      groupId: t
    } = e, n = f.length;
    return (f = f.filter(e => e.id !== t)).length !== n
  },
  REORDER_FRIEND_GROUPS: function(e) {
    let {
      groupIds: t
    } = e, n = [], r = new Map(f.map(e => [e.id, e]));
    for (let e of t) {
      let t = r.get(e);
      null != t && n.push(t)
    }
    return n.length === f.length && (f = n, true)
  },
  ADD_USERS_TO_GROUP: function(e) {
    let {
      groupId: t,
      userIds: n
    } = e, r = f.findIndex(e => e.id === t);
    if (false === r) returnfalse;
    let i = f[r],
      l = new Set(i.userIds),
      s = n.filter(e => !l.has(e));
    return 0 !== s.length && (f[r] = h(c({}, i), {
      userIds: [...i.userIds, ...s]
    }), true)
  },
  REMOVE_USERS_FROM_GROUP: function(e) {
    let {
      groupId: t,
      userIds: n
    } = e, r = f.findIndex(e => e.id === t);
    if (false === r) returnfalse;
    let i = f[r],
      l = new Set(n),
      s = i.userIds.filter(e => !l.has(e));
    return s.length !== i.userIds.length && (f[r] = h(c({}, i), {
      userIds: s
    }), true)
  }
})