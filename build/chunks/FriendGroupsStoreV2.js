/** Chunk was on 7685 **/
/** chunk id: 870391, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./321073.js"), require("./896048.js");
var l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk21119 = require("./21119.js"),
  Chunk153488 = require("./153488.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = [],
  f = false;
class p extends(l = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (this.waitFor(a.A, o.A, s.A, u.default), null != e) {
      var t, n;
      g = null != (t = e.groups) ? t : [], f = null != (n = e.isInitialized) && n
    }
  }
  getGroups() {
    return g
  }
  getGroup(e) {
    var t;
    return null != (t = g.find(t => t.id === e)) ? t : null
  }
  getGroupIds() {
    return g.map(e => e.id)
  }
  getUserGroups(e) {
    return g.filter(t => t.userIds.includes(e))
  }
  isGroupEmpty(e) {
    let t = this.getGroup(e);
    return null == t || 0 === t.userIds.length
  }
  isInitialized() {
    return f
  }
  getState() {
    return {
      groups: g,
      isInitialized: f
    }
  }
}
c(p, "displayName", "FriendGroupsStore"), c(p, "persistKey", "FriendGroupsStoreV2");
let I = new p(Chunk73153.h, {
  POST_CONNECTION_OPEN: function() {
    if (f || g.length > 0) returnfalse;
    g = [], f = true
  },
  CREATE_FRIEND_GROUP: function(e) {
    let {
      groupId: t,
      name: n
    } = e;
    return !g.some(e => e.id === t) && (g.push({
      id: t,
      name: n,
      userIds: []
    }), true)
  },
  UPDATE_FRIEND_GROUP: function(e) {
    let {
      groupId: t,
      name: n
    } = e, l = g.findIndex(e => e.id === t);
    return false !== l && (g[l] = h(d({}, g[l]), {
      name: n
    }), true)
  },
  DELETE_FRIEND_GROUP: function(e) {
    let {
      groupId: t
    } = e, n = g.length;
    return (g = g.filter(e => e.id !== t)).length !== n
  },
  REORDER_FRIEND_GROUPS: function(e) {
    let {
      groupIds: t
    } = e, n = [], l = new Map(g.map(e => [e.id, e]));
    for (let e of t) {
      let t = l.get(e);
      null != t && n.push(t)
    }
    return n.length === g.length && (g = n, true)
  },
  ADD_USERS_TO_GROUP: function(e) {
    let {
      groupId: t,
      userIds: n
    } = e, l = g.findIndex(e => e.id === t);
    if (false === l) returnfalse;
    let r = g[l],
      i = new Set(r.userIds),
      s = n.filter(e => !i.has(e));
    return 0 !== s.length && (g[l] = h(d({}, r), {
      userIds: [...r.userIds, ...s]
    }), true)
  },
  REMOVE_USERS_FROM_GROUP: function(e) {
    let {
      groupId: t,
      userIds: n
    } = e, l = g.findIndex(e => e.id === t);
    if (false === l) returnfalse;
    let r = g[l],
      i = new Set(n),
      s = r.userIds.filter(e => !i.has(e));
    return s.length !== r.userIds.length && (g[l] = h(d({}, r), {
      userIds: s
    }), true)
  }
})