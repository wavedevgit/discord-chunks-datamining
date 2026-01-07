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
  m = ((l = m || {}).DISCONTINUED = "http://schema.org/Discontinued", l.IN_STOCK = "http://schema.org/InStock", l.IN_STORE_ONLY = "http://schema.org/InStoreOnly", l.LIMITED_AVAILABILITY = "http://schema.org/LimitedAvailability", l.ONLINE_ONLY = "http://schema.org/OnlineOnly", l.OUT_OF_STOCK = "http://schema.org/OutOfStock", l.PREORDER = "http://schema.org/PreOrder", l.PRESALE = "http://schema.org/PreSale", l.SOLD_OUT = "http://schema.org/SoldOut", l);

function h(e) {
  return d("Offer", e)
}
h.ItemConditions = g, h.ItemAvailability = m;
var b = ((a = b || {}).YEARLY = "ANN", a.MONTHLY = "MON", a);

function _(e) {
  return d("QuantitativeValue", e)
}
_.UnitCodes = b;
class E extends(r = Chunk473749.Component) {
  render() {
    let {
      debug: e,
      data: t
    } = this.props, n = JSON.stringify(u({
      "@context": "http://schema.org"
    }, t));
    return (0, o.jsx)("script", {
      type: "application/ld+json",
      children: n
    })
  }
}
c(E, "Thing", p), c(E, "Brand", p), c(E, "Person", function(e) {
  return d("Person", e)
}), c(E, "Organization", function(e) {
  return d("Organization", e)
}), c(E, "ItemPage", function(e) {
  return d("ItemPage", e)
}), c(E, "Product", f), c(E, "Offer", h), c(E, "Rating", function(e) {
  return d("Rating", e)
}), c(E, "AggregateRating", function(e) {
  return d("AggregateRating", e)
}), c(E, "AggregateOffer", function(e) {
  return d("AggregateOffer", e)
}), c(E, "QuantitativeValue", _), c(E, "UnitPriceSpecification", function(e) {
  return d("UnitPriceSpecification", e)
});
let O = E