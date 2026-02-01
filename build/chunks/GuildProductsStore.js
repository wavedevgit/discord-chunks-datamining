/** Chunk was on 49607 **/
/** chunk id: 871109, original params: e,t,u (module,exports,require) **/
require.d(exports, {
  A: () => G,
  e: () => s
}), require("./321073.js"), require("./896048.js");
var n, r, l, Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  s = ((r = {})[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r);
let E = {},
  C = {},
  _ = {},
  T = 10 * Chunk927813.A.Millis.MINUTE;

function D(e) {
  return "guild:".concat(e)
}

function f(e) {
  return "guild:".concat(e, ":published")
}
let P = new Chunk713402.J(e => {
    let t = [D(e.guild_id)];
    return e.published && t.push(f(e.guild_id)), t
  }, e => {
    let t;
    return t = a.default.extractTimestamp(e.id), e.published ? -t : -t + 1e12
  }),
  U = [];
class O extends(n = Chunk311907.Ay.Store) {
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
    return null == e ? U : P.values(u ? f(e) : D(e))
  }
  getGuildProductFetchState(e) {
    var t;
    return null != (t = C[e]) ? t : 0
  }
  isGuildProductsCacheExpired(e) {
    var t;
    return Date.now() - (null != (t = _[e]) ? t : 0) > T
  }
}(l = "displayName") in O ? Object.defineProperty(O, l, {
  value: "GuildProductsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : O[l] = "GuildProductsStore";
let G = new O(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    P.clear(), E = {}, C = {}, _ = {}
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
    E[t] = 2, _[t] = Date.now(), u.forEach(e => {
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