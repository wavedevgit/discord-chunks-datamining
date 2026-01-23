/** Chunk was on web.js **/
/** chunk id: 871109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D,
  e: () => u
}), require("./321073.js"), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js"),
  Chunk661191 = require("./661191.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var u = function(e) {
  return e[e.NOT_FETCHED = 0] = "NOT_FETCHED", e[e.FETCHING = 1] = "FETCHING", e[e.FETCHED = 2] = "FETCHED", e
}({});
let d = {},
  f = {},
  p = {},
  _ = 10 * Chunk927813.A.Millis.MINUTE,
  h = 1e12;

function m(e) {
  return "guild:".concat(e)
}

function g(e) {
  return "guild:".concat(e, ":published")
}

function E(e) {
  let t = l.default.extractTimestamp(e.id);
  return e.published ? -t : -t + h
}
let y = new Chunk713402.J(e => {
    let t = [m(e.guild_id)];
    return e.published && t.push(g(e.guild_id)), t
  }, e => E(e)),
  b = [];

function O() {
  y.clear(), d = {}, f = {}, p = {}
}

function v(e) {
  let {
    guildId: t
  } = e;
  d[t] = 1, [...y.values(m(t))].forEach(e => {
    y.delete(e.id)
  })
}

function A(e) {
  let {
    guildId: t,
    products: n
  } = e;
  d[t] = 2, p[t] = Date.now(), n.forEach(e => {
    y.set(e.id, e), f[e.id] = 2
  })
}

function I(e) {
  let {
    guildId: t
  } = e;
  d[t] = 2
}

function S(e) {
  let {
    productId: t
  } = e;
  f[t] = 1
}

function T(e) {
  let {
    product: t
  } = e;
  f[t.id] = 2, y.set(t.id, t)
}

function C(e) {
  let {
    productId: t,
    error: n
  } = e;
  f[t] = 2, 404 === n.status && y.delete(t)
}

function N(e) {
  let {
    product: t
  } = e;
  y.set(t.id, t)
}

function w(e) {
  let {
    product: t
  } = e;
  y.set(t.id, t)
}

function R(e) {
  let {
    productId: t
  } = e;
  y.delete(t)
}
class P extends(r = Chunk311907.Ay.Store) {
  getGuildProductsForGuildFetchState(e) {
    var t;
    return null != (t = d[e]) ? t : 0
  }
  getGuildProduct(e) {
    return y.get(e)
  }
  getGuildProductsForGuild(e, t) {
    let {
      publishedOnly: n
    } = t;
    return null == e ? b : y.values(n ? g(e) : m(e))
  }
  getGuildProductFetchState(e) {
    var t;
    return null != (t = f[e]) ? t : 0
  }
  isGuildProductsCacheExpired(e) {
    var t;
    return Date.now() - (null != (t = p[e]) ? t : 0) > _
  }
}
c(P, "displayName", "GuildProductsStore");
let D = new P(Chunk73153.h, {
  CONNECTION_OPEN: O,
  GUILD_PRODUCTS_FETCH: v,
  GUILD_PRODUCTS_FETCH_SUCCESS: A,
  GUILD_PRODUCTS_FETCH_FAILURE: I,
  GUILD_PRODUCT_CREATE: N,
  GUILD_PRODUCT_UPDATE: w,
  GUILD_PRODUCT_DELETE: R,
  GUILD_PRODUCT_FETCH: S,
  GUILD_PRODUCT_FETCH_SUCCESS: T,
  GUILD_PRODUCT_FETCH_FAILURE: C
})