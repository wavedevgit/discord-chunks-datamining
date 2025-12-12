/** Chunk was on 1272 **/
/** chunk id: 606081, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./49124.js"), require("./415506.js");
var r, i, l, a, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");

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
  return u({
    "@type": e
  }, function e(t) {
    return Object.keys(t).forEach(n => {
      null == t[n] ? delete t[n] : "object" == typeof t[n] && (t[n] = e(t[n]))
    }), t
  }(function(e) {
    let t;
    try {
      t = JSON.parse(JSON.stringify(e))
    } catch (e) {
      throw Error("[JSONLD] Invalid object format")
    }
    return t
  }(t)))
}

function p(e) {
  return d("Thing", e)
}

function f(e) {
  return d("Product", e)
}
f.Image = function(e) {
  if (null == e) return null;
  let t = e.filter(e => null != e && "" !== e);
  return 0 === t.length ? null : 1 === t.length ? t[0] : t
};
var g = ((i = g || {}).DAMAGED = "http://schema.org/DamagedCondition", i.NEW = "http://schema.org/NewCondition", i.REFURBISHED = "http://schema.org/RefurbishedCondition", i.USED = "http://schema.org/UsedCondition", i),
  h = ((l = h || {}).DISCONTINUED = "http://schema.org/Discontinued", l.IN_STOCK = "http://schema.org/InStock", l.IN_STORE_ONLY = "http://schema.org/InStoreOnly", l.LIMITED_AVAILABILITY = "http://schema.org/LimitedAvailability", l.ONLINE_ONLY = "http://schema.org/OnlineOnly", l.OUT_OF_STOCK = "http://schema.org/OutOfStock", l.PREORDER = "http://schema.org/PreOrder", l.PRESALE = "http://schema.org/PreSale", l.SOLD_OUT = "http://schema.org/SoldOut", l);

function m(e) {
  return d("Offer", e)
}
m.ItemConditions = g, m.ItemAvailability = h;
var b = ((a = b || {}).YEARLY = "ANN", a.MONTHLY = "MON", a);

function E(e) {
  return d("QuantitativeValue", e)
}
E.UnitCodes = b;
class _ extends(r = Chunk473749.Component) {
  render() {
    let {
      debug: e,
      data: t
    } = this.props, n = JSON.stringify(u({
      "@context": "http://schema.org"
    }, exports));
    return (0, Chunk54381.jsx)("script", {
      type: "application/ld+json",
      children: require
    })
  }
}
c(_, "Thing", p), c(_, "Brand", p), c(_, "Person", function(e) {
  return d("Person", e)
}), c(_, "Organization", function(e) {
  return d("Organization", e)
}), c(_, "ItemPage", function(e) {
  return d("ItemPage", e)
}), c(_, "Product", f), c(_, "Offer", m), c(_, "Rating", function(e) {
  return d("Rating", e)
}), c(_, "AggregateRating", function(e) {
  return d("AggregateRating", e)
}), c(_, "AggregateOffer", function(e) {
  return d("AggregateOffer", e)
}), c(_, "QuantitativeValue", E), c(_, "UnitPriceSpecification", function(e) {
  return d("UnitPriceSpecification", e)
});
let O = _