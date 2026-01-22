/** Chunk was on web.js **/
/** chunk id: 855052, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk315069 = require("./315069.js"),
  Chunk611010 = require("./611010.js"),
  Chunk520606 = require("./520606.js"),
  Chunk872472 = require("./872472.js"),
  Chunk721932 = require("./721932.js"),
  Chunk652215 = require("./652215.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = _(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
class h extends Chunk315069.A {
  static fromServer(e) {
    var t, n;
    let {
      user_id: r,
      wishlist_items: c
    } = e, d = p(e, ["user_id", "wishlist_items"]), _ = c.map(e => {
      switch (e.sku_product_line) {
        case l.EZt.COLLECTIBLES:
          return s.A.fromServer(e);
        case l.EZt.SOCIAL_LAYER_GAME_ITEM:
          return o.A.fromServer(e);
        default:
          return a.A.fromServer(e)
      }
    });
    return new h(f(u({}, d), {
      userId: r,
      items: _,
      applications: null != (t = null == (n = d.applications) ? true : n.map(e => i.Ay.createFromServer(e))) ? t : true
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