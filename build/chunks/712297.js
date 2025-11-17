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

function _(e) {
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

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m() {
  let [e, t] = Chunk473749.useState({});
  return {
    previewErrorsById: module,
    setErrorById: Chunk473749.useCallback((e, n) => {
      t(t => h(_({}, t), {
        [e]: n
      }))
    }, [exports])
  }
}

function g(e) {
  let {
    applicationId: t,
    skuIDs: n,
    currentPaymentSourceId: f,
    isGift: _,
    excludeSKUPurchasePreviews: p = false
  } = e, h = r.useMemo(() => n.filter(e => !d.YQ.includes(e)), [JSON.stringify(n)]), g = (0, a.e7)([u.Z], () => h.every(e => !u.Z.isFetching(e) && null != u.Z.get(e))), {
    previewErrorsById: E,
    setErrorById: b
  } = m(), y = (0, a.cj)([u.Z], () => {
    let e = {};
    for (let n of h) {
      var t;
      e[n] = null != (t = u.Z.get(n)) ? t : true
    }
    return e
  }, [h]);
  r.useEffect(() => {
    for (let e of h) u.Z.isFetching(e) || null != u.Z.get(e) || (0, o.$N)(t, e, i.v.VARIANTS_GROUP)
  }, [t, h]);
  let O = (0, a.cj)([c.Z], () => {
    let e = {};
    for (let n of h) {
      var t;
      e[n] = null != (t = c.Z.getPricesForSku(n)) ? t : true
    }
    return e
  }, [h]);
  return r.useEffect(() => {
    if (!p)
      for (let e of h) c.Z.isFetchingSKU(e) || (0, o.x2)(t, e, f, {
        isGift: _
      }).catch(t => {
        t instanceof s.HF && (t.code === l.SM.BILLING_BUNDLE_ALREADY_PURCHASED || t.code === l.SM.BILLING_BUNDLE_PARTIALLY_OWNED || t.code === l.SM.INVALID_BILLING_ADDRESS) && b(e, t)
      })
  }, [t, h, f, _, b, p]), {
    hasFetchedSkus: g,
    skusById: y,
    skuPricePreviewsById: O,
    previewErrorsById: E
  }
}