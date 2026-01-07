/** Chunk was on web.js **/
/** chunk id: 712297, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./49124.js");
var Chunk473749 = require("./473749.js"),
  Chunk311570 = require("./311570.js"),
  Chunk399606 = require("./399606.js"),
  Chunk16084 = require("./16084.js"),
  Chunk881052 = require("./881052.js"),
  Chunk128069 = require("./128069.js"),
  Chunk855775 = require("./855775.js"),
  Chunk55563 = require("./55563.js"),
  Chunk474936 = require("./474936.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h() {
  let [e, t] = r.useState({});
  return {
    previewErrorsById: e,
    setErrorById: r.useCallback((e, n) => {
      t(t => m(p({}, t), {
        [e]: n
      }))
    }, [t])
  }
}

function g(e) {
  let {
    applicationId: t,
    skuIDs: n,
    currentPaymentSourceId: f,
    isGift: p,
    excludeSKUPurchasePreviews: _ = false
  } = e, m = r.useMemo(() => n.filter(e => !d.YQ.includes(e)), [JSON.stringify(n)]), g = (0, a.e7)([u.Z], () => m.every(e => !u.Z.isFetching(e) && null != u.Z.get(e))), {
    previewErrorsById: E,
    setErrorById: b
  } = h(), y = (0, a.cj)([u.Z], () => {
    let e = {};
    for (let n of m) {
      var t;
      e[n] = null != (t = u.Z.get(n)) ? t : true
    }
    return e
  }, [m]);
  r.useEffect(() => {
    for (let e of m) u.Z.isFetching(e) || null != u.Z.get(e) || (0, o.$N)(t, e, i.v.VARIANTS_GROUP)
  }, [t, m]);
  let O = (0, a.cj)([c.Z], () => {
    let e = {};
    for (let n of m) {
      var t;
      e[n] = null != (t = c.Z.getPricesForSku(n)) ? t : true
    }
    return e
  }, [m]);
  return r.useEffect(() => {
    if (!_)
      for (let e of m) c.Z.isFetchingSKU(e) || (0, o.x2)(t, e, f, {
        isGift: p
      }).catch(t => {
        t instanceof s.HF && (t.code === l.SM.BILLING_BUNDLE_ALREADY_PURCHASED || t.code === l.SM.BILLING_BUNDLE_PARTIALLY_OWNED || t.code === l.SM.INVALID_BILLING_ADDRESS) && b(e, t)
      })
  }, [t, m, f, p, b, _]), {
    hasFetchedSkus: g,
    skusById: y,
    skuPricePreviewsById: O,
    previewErrorsById: E
  }
}