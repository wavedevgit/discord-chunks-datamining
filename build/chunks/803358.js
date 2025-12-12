/** Chunk was on web.js **/
/** chunk id: 803358, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./781311.js");
var Chunk979590 = require("./979590.js"),
  i = require.n(Chunk979590),
  Chunk866442 = require("./866442.js"),
  Chunk81825 = require("./81825.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
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

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let p = e => null == e ? e : {
  backgroundColors: e.background_colors.map(e => i()((0, o.Rf)(e))),
  buttonColors: e.button_colors.map(e => i()((0, o.Rf)(e))),
  confettiColors: e.confetti_colors.map(e => i()((0, o.Rf)(e)))
};
class _ extends Chunk81825.Z {
  static fromServer(e) {
    var {
      store_listing_id: t,
      sku_id: n,
      unpublished_at: r,
      styles: i
    } = e, o = d(e, ["store_listing_id", "sku_id", "unpublished_at", "styles"]);
    let a = null != r ? new Date(r) : null;
    return new _(u(l({}, o), {
      storeListingId: t,
      skuId: n,
      unpublishedAt: a,
      styles: p(i)
    }))
  }
  constructor(e) {
    super(), s(this, "storeListingId", true), s(this, "skuId", true), s(this, "name", true), s(this, "summary", true), s(this, "unpublishedAt", true), s(this, "styles", true), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary.trim(), this.unpublishedAt = e.unpublishedAt, this.styles = e.styles
  }
}