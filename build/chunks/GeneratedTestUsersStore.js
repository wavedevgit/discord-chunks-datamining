/** Chunk was on 22477 **/
/** chunk id: 624622, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js"), require("./446912.js");
var a, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk427157 = require("./427157.js");

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
  null == o.users && (o.users = new Map), o.users.set(e.id, new i.A(e))
}
class d extends(a = Chunk311907.Ay.PersistedStore) {
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
    return Array.from(null != (t = null == (n = o.users) ? true : n.values()) ? t : []).filter(t => {
      var n, a;
      return null == (a = o.pools) || null == (n = a.get(e)) ? true : n.userIds.includes(t.id)
    })
  }
  getPool(e) {
    var t, n;
    return null != (t = null == (n = o.pools) ? true : n.get(e)) ? t : null
  }
  getUser(e) {
    var t, n;
    return null != (t = null == (n = o.users) ? true : n.get(e)) ? t : null
  }
  getPools() {
    return null === o.pools ? null : Array.from(o.pools.values())
  }
}
s(d, "displayName", "GeneratedTestUsersStore"), s(d, "persistKey", "GeneratedTestUsersStore");
let u = new d(Chunk73153.h, {
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