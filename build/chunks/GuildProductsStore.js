/** Chunk was on 84239 **/
/** chunk id: 240864, original params: e,t,u (module,exports,require) **/
require.d(exports, {
  M: () => s,
  Z: () => G
}), require("./539854.js"), require("./388685.js");
var n, r, l, Chunk442837 = require("./442837.js"),
  Chunk759174 = require("./759174.js"),
  Chunk570140 = require("./570140.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js"),
  s = ((r = {})[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r);
let E = {},
  C = {},
  f = {},
  _ = 10 * Chunk70956.Z.Millis.MINUTE;

function D(e) {
  return "guild:".concat(e)
}

function T(e) {
  return "guild:".concat(e, ":published")
}
let P = new Chunk759174.h(e => {
    let t = [D(e.guild_id)];
    return e.published && t.push(T(e.guild_id)), t
  }, e => (function(e) {
    let t = a.default.extractTimestamp(e.id);
    return e.published ? -t : -t + 1e12
  })(e)),
  U = [];
class O extends(n = Chunk442837.ZP.Store) {
  getGuildProductsForGuildFetchState(e) {
    var t;
    return null != (t = E[e]) ? t : 0
  }
  getGuildProduct(e) {
    return P.get(e)
  }
  getGuildProductsForGuild(e, t) {
    let {
      publishedOnly: u
    } = t;
    return null == e ? U : P.values(u ? T(e) : D(e))
  }
  getGuildProductFetchState(e) {
    var t;
    return null != (t = C[e]) ? t : 0
  }
  isGuildProductsCacheExpired(e) {
    var t;
    return Date.now() - (null != (t = f[e]) ? t : 0) > _
  }
}(l = "displayName") in O ? Object.defineProperty(O, l, {
  value: "GuildProductsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : O[l] = "GuildProductsStore";
let G = new O(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    P.clear(), E = {}, C = {}, f = {}
  },
  GUILD_PRODUCTS_FETCH: function(e) {
    let {
      guildId: t
    } = e;
    E[t] = 1, [...P.values(D(t))].forEach(e => {
      P.delete(e.id)
    })
  },
  GUILD_PRODUCTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      products: u
    } = e;
    E[t] = 2, f[t] = Date.now(), u.forEach(e => {
      P.set(e.id, e), C[e.id] = 2
    })
  },
  GUILD_PRODUCTS_FETCH_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    E[t] = 2
  },
  GUILD_PRODUCT_CREATE: function(e) {
    let {
      product: t
    } = e;
    P.set(t.id, t)
  },
  GUILD_PRODUCT_UPDATE: function(e) {
    let {
      product: t
    } = e;
    P.set(t.id, t)
  },
  GUILD_PRODUCT_DELETE: function(e) {
    let {
      productId: t
    } = e;
    P.delete(t)
  },
  GUILD_PRODUCT_FETCH: function(e) {
    let {
      productId: t
    } = e;
    C[t] = 1
  },
  GUILD_PRODUCT_FETCH_SUCCESS: function(e) {
    let {
      product: t
    } = e;
    C[t.id] = 2, P.set(t.id, t)
  },
  GUILD_PRODUCT_FETCH_FAILURE: function(e) {
    let {
      productId: t,
      error: u
    } = e;
    C[t] = 2, 404 === u.status && P.delete(t)
  }
})