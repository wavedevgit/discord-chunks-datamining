/** Chunk was on 64935 **/
/** chunk id: 871109, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v,
  e: () => d
}), require("./321073.js"), require("./896048.js");
var r, i, l, Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js"),
  d = ((i = {})[i.NOT_FETCHED = 0] = "NOT_FETCHED", i[i.FETCHING = 1] = "FETCHING", i[i.FETCHED = 2] = "FETCHED", i);
let p = {},
  m = {},
  f = {},
  g = 10 * Chunk927813.A.Millis.MINUTE;

function _(e) {
  return "guild:".concat(e)
}

function h(e) {
  return "guild:".concat(e, ":published")
}
let b = new Chunk713402.J(e => {
    let t = [_(e.guild_id)];
    return e.published && t.push(h(e.guild_id)), t
  }, e => {
    let t;
    return t = u.default.extractTimestamp(e.id), e.published ? -t : -t + 1e12
  }),
  A = [];
class y extends(r = Chunk311907.Ay.Store) {
  getGuildProductsForGuildFetchState(e) {
    var t;
    return null != (t = p[e]) ? t : 0
  }
  getGuildProduct(e) {
    return b.get(e)
  }
  getGuildProductsForGuild(e, t) {
    let {
      publishedOnly: n
    } = t;
    return null == e ? A : b.values(n ? h(e) : _(e))
  }
  getGuildProductFetchState(e) {
    var t;
    return null != (t = m[e]) ? t : 0
  }
  isGuildProductsCacheExpired(e) {
    var t;
    return Date.now() - (null != (t = f[e]) ? t : 0) > g
  }
}(l = "displayName") in y ? Object.defineProperty(y, l, {
  value: "GuildProductsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : y[l] = "GuildProductsStore";
let v = new y(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    b.clear(), p = {}, m = {}, f = {}
  },
  GUILD_PRODUCTS_FETCH: function(e) {
    let {
      guildId: t
    } = e;
    p[t] = 1, [...b.values(_(t))].forEach(e => {
      b.delete(e.id)
    })
  },
  GUILD_PRODUCTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      products: n
    } = e;
    p[t] = 2, f[t] = Date.now(), n.forEach(e => {
      b.set(e.id, e), m[e.id] = 2
    })
  },
  GUILD_PRODUCTS_FETCH_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    p[t] = 2
  },
  GUILD_PRODUCT_CREATE: function(e) {
    let {
      product: t
    } = e;
    b.set(t.id, t)
  },
  GUILD_PRODUCT_UPDATE: function(e) {
    let {
      product: t
    } = e;
    b.set(t.id, t)
  },
  GUILD_PRODUCT_DELETE: function(e) {
    let {
      productId: t
    } = e;
    b.delete(t)
  },
  GUILD_PRODUCT_FETCH: function(e) {
    let {
      productId: t
    } = e;
    m[t] = 1
  },
  GUILD_PRODUCT_FETCH_SUCCESS: function(e) {
    let {
      product: t
    } = e;
    m[t.id] = 2, b.set(t.id, t)
  },
  GUILD_PRODUCT_FETCH_FAILURE: function(e) {
    let {
      productId: t,
      error: n
    } = e;
    m[t] = 2, 404 === n.status && b.delete(t)
  }
})