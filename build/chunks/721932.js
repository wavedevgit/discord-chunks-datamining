/** Chunk was on web.js **/
/** chunk id: 721932, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => c,
  A: () => u
}), require("./65821.js");
var Chunk731935 = require("./731935.js"),
  Chunk520606 = require("./520606.js");

function a(e, t, n) {
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
      a(e, t, n[t])
    })
  }
  return e
}

function o(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = e => e instanceof u;
class u extends Chunk520606.A {
  static fromServer(e) {
    let t = r.A.createFromServer(e.sku);
    if (null == t) throw Error("SKU not found");
    return new u(l(s({}, e), {
      sku: t
    }))
  }
  constructor(e) {
    super(e), a(this, "sku", true), this.skuProductLine = e.sku.productLine, this.sku = e.sku
  }
}