/** Chunk was on 73444 **/
/** chunk id: 643327, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./642613.js"), require("./539854.js"), require("./290780.js");
var n, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk752048 = require("./752048.js"),
  Chunk480294 = require("./480294.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function a(e, r, t) {
  return r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e
}

function c(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {},
      n = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), n.forEach(function(r) {
      a(e, r, t[r])
    })
  }
  return e
}

function f(e, r) {
  return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t.push.apply(t, n)
    }
    return t
  })(Object(r)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
  }), e
}
let O = [],
  h = false;
class E extends(n = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(o.Z, l.Z, u.Z, d.default), null != e) {
      var r, t;
      O = null != (r = e.groups) ? r : [], h = null != (t = e.isInitialized) && t
    }
  }
  getGroups() {
    return O
  }
  getGroup(e) {
    var r;
    return null != (r = O.find(r => r.id === e)) ? r : null
  }
  getGroupIds() {
    return O.map(e => e.id)
  }
  getUserGroups(e) {
    return O.filter(r => r.userIds.includes(e))
  }
  isGroupEmpty(e) {
    let r = this.getGroup(e);
    return null == r || 0 === r.userIds.length
  }
  isInitialized() {
    return h
  }
  getState() {
    return {
      groups: O,
      isInitialized: h
    }
  }
}
a(E, "displayName", "FriendGroupsStore"), a(E, "persistKey", "FriendGroupsStore");
let g = new E(Chunk570140.Z, {
  POST_CONNECTION_OPEN: function() {
    if (h || O.length > 0) returnfalse;
    O = [{
      id: "favorites",
      name: "Favorites",
      userIds: function() {
        if (!Chunk480294.Z.hasConsented(Chunk981631.pjP.PERSONALIZATION)) return [];
        let e = Chunk752048.Z.getUserAffinities();
        if (0 === module.length) return [];
        let r = [...module].sort((e, r) => u.Z.compare(e.otherUserId, r.otherUserId)),
          t = [];
        for (let e of exports) {
          if (require.length >= 5) break;
          let r = module.otherUserId;
          null != Chunk594174.default.getUser(exports) && Chunk699516.Z.isFriend(exports) && !Chunk699516.Z.isIgnored(exports) && !Chunk699516.Z.isBlocked(exports) && require.push(exports)
        }
        return require
      }()
    }], h = true
  },
  CREATE_FRIEND_GROUP: function(e) {
    let {
      groupId: r,
      name: t
    } = e;
    return !O.some(e => e.id === r) && (O.unshift({
      id: r,
      name: t,
      userIds: []
    }), true)
  },
  UPDATE_FRIEND_GROUP: function(e) {
    let {
      groupId: r,
      name: t
    } = e, n = O.findIndex(e => e.id === r);
    return false !== n && (O[n] = f(c({}, O[n]), {
      name: t
    }), true)
  },
  DELETE_FRIEND_GROUP: function(e) {
    let {
      groupId: r
    } = e, t = O.length;
    return (O = O.filter(e => e.id !== r)).length !== t
  },
  REORDER_FRIEND_GROUPS: function(e) {
    let {
      groupIds: r
    } = e, t = [], n = new Map(O.map(e => [e.id, e]));
    for (let e of r) {
      let r = n.get(e);
      null != r && t.push(r)
    }
    return t.length === O.length && (O = t, true)
  },
  ADD_USERS_TO_GROUP: function(e) {
    let {
      groupId: r,
      userIds: t
    } = e, n = O.findIndex(e => e.id === r);
    if (false === n) returnfalse;
    let s = O[n],
      i = new Set(s.userIds),
      u = t.filter(e => !i.has(e));
    return 0 !== u.length && (O[n] = f(c({}, s), {
      userIds: [...s.userIds, ...u]
    }), true)
  },
  REMOVE_USERS_FROM_GROUP: function(e) {
    let {
      groupId: r,
      userIds: t
    } = e, n = O.findIndex(e => e.id === r);
    if (false === n) returnfalse;
    let s = O[n],
      i = new Set(t),
      u = s.userIds.filter(e => !i.has(e));
    return u.length !== s.userIds.length && (O[n] = f(c({}, s), {
      userIds: u
    }), true)
  }
})