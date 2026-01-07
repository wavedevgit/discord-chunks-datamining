/** Chunk was on 29709 **/
/** chunk id: 643327, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./642613.js"), require("./539854.js"), require("./290780.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk752048 = require("./752048.js"),
  Chunk480294 = require("./480294.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
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

function g(e, t) {
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
  h = false;
class O extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(o.Z, a.Z, s.Z, u.default), null != e) {
      var t, n;
      f = null != (t = e.groups) ? t : [], h = null != (n = e.isInitialized) && n
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
    return h
  }
  getState() {
    return {
      groups: f,
      isInitialized: h
    }
  }
}
d(O, "displayName", "FriendGroupsStore"), d(O, "persistKey", "FriendGroupsStore");
let m = new O(Chunk570140.Z, {
  POST_CONNECTION_OPEN: function() {
    if (h || f.length > 0) returnfalse;
    f = [{
      id: "favorites",
      name: "Favorites",
      userIds: function() {
        if (!o.Z.hasConsented(c.pjP.PERSONALIZATION)) return [];
        let e = s.Z.getUserAffinities();
        if (0 === e.length) return [];
        let t = [...e].sort((e, t) => s.Z.compare(e.otherUserId, t.otherUserId)),
          n = [];
        for (let e of t) {
          if (n.length >= 5) break;
          let t = e.otherUserId;
          null != u.default.getUser(t) && a.Z.isFriend(t) && !a.Z.isIgnored(t) && !a.Z.isBlocked(t) && n.push(t)
        }
        return n
      }()
    }], h = true
  },
  CREATE_FRIEND_GROUP: function(e) {
    let {
      groupId: t,
      name: n
    } = e;
    return !f.some(e => e.id === t) && (f.unshift({
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
    return false !== r && (f[r] = g(p({}, f[r]), {
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
    return 0 !== s.length && (f[r] = g(p({}, i), {
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
    return s.length !== i.userIds.length && (f[r] = g(p({}, i), {
      userIds: s
    }), true)
  }
})