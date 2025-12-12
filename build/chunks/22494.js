/** Chunk was on web.js **/
/** chunk id: 22494, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk81825 = require("./81825.js"),
  Chunk973616 = require("./973616.js"),
  Chunk523080 = require("./523080.js"),
  Chunk541699 = require("./541699.js"),
  Chunk321947 = require("./321947.js"),
  Chunk981631 = require("./981631.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
class m extends Chunk81825.Z {
  static fromServer(e) {
    var t, n, {
        user_id: r,
        wishlist_items: c
      } = e,
      d = p(e, ["user_id", "wishlist_items"]);
    let _ = c.map(e => {
      switch (e.sku_product_line) {
        case l.POd.COLLECTIBLES:
          return o.Z.fromServer(e);
        case l.POd.SOCIAL_LAYER_GAME_ITEM:
          return s.Z.fromServer(e);
        default:
          return a.Z.fromServer(e)
      }
    });
    return new m(f(u({}, d), {
      userId: r,
      items: _,
      applications: null != (n = null == (t = d.applications) ? true : t.map(e => i.ZP.createFromServer(e))) ? n : true
    }))
  }
  getSkuIds() {
    return this.items.map(e => e.skuId)
  }
  hasSkuId(e) {
    return this.items.some(t => t.skuId === e)
  }
  getProductLines() {
    return new Set(this.items.map(e => e.skuProductLine))
  }
  constructor(e) {
    var t;
    super(), c(this, "id", true), c(this, "userId", true), c(this, "items", true), c(this, "applications", true), this.id = e.id, this.userId = e.userId, this.items = e.items, this.applications = null != (t = e.applications) ? t : true
  }
}