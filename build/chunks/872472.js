/** Chunk was on web.js **/
/** chunk id: 872472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m,
  L: () => h
}), require("./321073.js"), require("./896048.js"), require("./65821.js");
var Chunk575593 = require("./575593.js"),
  Chunk898461 = require("./898461.js"),
  Chunk837015 = require("./837015.js"),
  Chunk203632 = require("./203632.js"),
  Chunk731935 = require("./731935.js"),
  Chunk520606 = require("./520606.js"),
  Chunk652215 = require("./652215.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = e => {
    switch (e.type) {
      case r.R.AVATAR_DECORATION:
        return i.A.fromServer(e);
      case r.R.PROFILE_EFFECT:
        return o.A.fromServer(e);
      case r.R.NAMEPLATE:
        return a.A.fromServer(e);
      default:
        return null
    }
  },
  h = e => e instanceof m;
class m extends Chunk520606.A {
  static fromServer(e) {
    return new m(p(d({}, e), {
      sku: null != e.sku ? s.A.createFromServer(e.sku) : true
    }))
  }
  constructor(e) {
    if (super(e), u(this, "collectiblesItem", true), u(this, "bundleItems", true), this.skuProductLine = c.EZt.COLLECTIBLES, null != e.bundle_items) {
      const t = [];
      for (const n of e.bundle_items) {
        const e = _(n);
        null != e && t.push(e)
      }
      if (0 === t.length) throw Error("Bundle has no valid items");
      this.bundleItems = t
    } else if (null != e.collectibles_item) {
      const t = _(e.collectibles_item);
      if (null == t) throw Error("Collectibles item not found");
      this.collectiblesItem = t
    } else throw Error("Collectibles wishlist item missing both collectibles_item and bundle_items")
  }
}