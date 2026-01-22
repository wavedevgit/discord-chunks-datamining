/** Chunk was on web.js **/
/** chunk id: 721932, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => u,
  A: () => d
}), require("./65821.js");
var Chunk731935 = require("./731935.js"),
  Chunk520606 = require("./520606.js"),
  Chunk652215 = require("./652215.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
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
class d extends Chunk520606.A {
  static fromServer(e) {
    let t = r.A.createFromServer(e.sku);
    if (null == t) throw Error("SKU not found");
    return new d(c(o({}, e), {
      sku: t
    }))
  }
  constructor(e) {
    super(e), s(this, "sku", true), this.skuProductLine = a.EZt.SOCIAL_LAYER_GAME_ITEM, this.sku = e.sku
  }
}