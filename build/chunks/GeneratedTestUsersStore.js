/** Chunk was on 71874 **/
/** chunk id: 163558, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./467055.js");
var a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk598077 = require("./598077.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {
  pools: null,
  users: null
};

function c(e) {
  null == s.users && (s.users = new Map), s.users.set(e.id, new i.Z(e))
}
class d extends(a = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (null != e.pools && (s.pools = new Map(Object.entries(e.pools))), null != e.users && (s.users = new Map(Object.entries(e.users))))
  }
  getState() {
    return {
      pools: null != s.pools ? Object.fromEntries(s.pools) : null,
      users: null != s.users ? Object.fromEntries(s.users) : null
    }
  }
  getUsersForPool(e) {
    var t, n;
    return Array.from(null != (n = null == (t = s.users) ? true : t.values()) ? n : []).filter(t => {
      var n, a;
      return null == (a = s.pools) || null == (n = a.get(e)) ? true : n.userIds.includes(t.id)
    })
  }
  getPool(e) {
    var t, n;
    return null != (n = null == (t = s.pools) ? true : t.get(e)) ? n : null
  }
  getUser(e) {
    var t, n;
    return null != (n = null == (t = s.users) ? true : t.get(e)) ? n : null
  }
  getPools() {
    return null === s.pools ? null : Array.from(s.pools.values())
  }
}
o(d, "displayName", "GeneratedTestUsersStore"), o(d, "persistKey", "GeneratedTestUsersStore");
let u = new d(Chunk570140.Z, {
  GENERATED_POOL_BY_ID_FETCH_SUCCESS: function(e) {
    let {
      pool: t,
      users: n
    } = e;
    null == s.pools && (s.pools = new Map), s.pools.set(t.id, t), n.forEach(c)
  },
  GENERATED_POOL_REMOVE_FROM_LIST: function(e) {
    var t, n;
    let {
      poolId: a
    } = e, r = null == (t = s.pools) ? true : t.get(a);
    if (null == r) returnfalse;
    r.userIds.length > 0 && r.userIds.forEach(e => {
      var t;
      null == (t = s.users) || t.delete(e)
    }), null == (n = s.pools) || n.delete(a)
  }
})