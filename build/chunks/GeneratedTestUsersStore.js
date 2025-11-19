/** Chunk was on 91394 **/
/** chunk id: 163558, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./467055.js");
var a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk598077 = require("./598077.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = {
  pools: null,
  users: null
};

function c(e) {
  null == o.users && (o.users = new Map), o.users.set(e.id, new r.Z(e))
}
class d extends(a = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (null != e.pools && (o.pools = new Map(Object.entries(e.pools))), null != e.users && (o.users = new Map(Object.entries(e.users))))
  }
  getState() {
    return {
      pools: null != o.pools ? Object.fromEntries(o.pools) : null,
      users: null != o.users ? Object.fromEntries(o.users) : null
    }
  }
  getUsersForPool(e) {
    var t, n;
    return Array.from(null != (n = null == (t = o.users) ? true : t.values()) ? n : []).filter(t => {
      var n, a;
      return null == (a = o.pools) || null == (n = a.get(e)) ? true : n.userIds.includes(t.id)
    })
  }
  getPool(e) {
    var t, n;
    return null != (n = null == (t = o.pools) ? true : t.get(e)) ? n : null
  }
  getUser(e) {
    var t, n;
    return null != (n = null == (t = o.users) ? true : t.get(e)) ? n : null
  }
  getPools() {
    return null === o.pools ? null : Array.from(o.pools.values())
  }
}
s(d, "displayName", "GeneratedTestUsersStore"), s(d, "persistKey", "GeneratedTestUsersStore");
let u = new d(Chunk570140.Z, {
  GENERATED_POOL_BY_ID_FETCH_SUCCESS: function(e) {
    let {
      pool: t,
      users: n
    } = e;
    null == o.pools && (o.pools = new Map), o.pools.set(t.id, t), n.forEach(c)
  },
  GENERATED_POOL_REMOVE_FROM_LIST: function(e) {
    var t, n;
    let {
      poolId: a
    } = e, l = null == (t = o.pools) ? true : t.get(a);
    if (null == l) returnfalse;
    l.userIds.length > 0 && l.userIds.forEach(e => {
      var t;
      null == (t = o.users) || t.delete(e)
    }), null == (n = o.pools) || n.delete(a)
  }
})