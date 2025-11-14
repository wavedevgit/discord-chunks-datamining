/** Chunk was on web.js **/
/** chunk id: 321947, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => u,
  Z: () => d
}), require("./415506.js");
var Chunk659181 = require("./659181.js"),
  Chunk523080 = require("./523080.js"),
  Chunk981631 = require("./981631.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = e => e instanceof d;
class d extends Chunk523080.Z {
  static fromServer(e) {
    let t = r.Z.createFromServer(e.sku);
    if (null == t) throw Error("SKU not found");
    return new d(c(s({}, e), {
      sku: t
    }))
  }
  constructor(e) {
    super(e), o(this, "sku", true), this.skuProductLine = a.POd.SOCIAL_LAYER_GAME_ITEM, this.sku = e.sku
  }
}