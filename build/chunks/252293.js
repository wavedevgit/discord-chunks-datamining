/** Chunk was on web.js **/
/** chunk id: 252293, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js"), require("./457529.js");
var Chunk64700 = require("./64700.js"),
  Chunk635358 = require("./635358.js"),
  Chunk417597 = require("./417597.js"),
  Chunk830382 = require("./830382.js"),
  Chunk198982 = require("./198982.js"),
  Chunk136857 = require("./136857.js"),
  Chunk79387 = require("./79387.js"),
  Chunk67480 = require("./67480.js"),
  Chunk788868 = require("./788868.js");

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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m() {
  let [e, t] = r.useState({});
  return {
    previewErrorsById: e,
    setErrorById: r.useCallback((e, n) => {
      t(t => h(p({}, t), {
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
  } = e, h = r.useMemo(() => n.filter(e => !d.oz.includes(e)), [JSON.stringify(n)]), g = (0, a.bG)([u.A], () => h.every(e => !u.A.isFetching(e) && null != u.A.get(e))), {
    previewErrorsById: E,
    setErrorById: y
  } = m(), b = (0, a.cf)([u.A], () => {
    let e = {};
    for (let n of h) {
      var t;
      e[n] = null != (t = u.A.get(n)) ? t : true
    }
    return e
  }, [h]);
  r.useEffect(() => {
    for (let e of h) u.A.isFetching(e) || null != u.A.get(e) || (0, o.EX)(t, e, i.g.VARIANTS_GROUP)
  }, [t, h]);
  let O = (0, a.cf)([c.A], () => {
    let e = {};
    for (let n of h) {
      var t;
      e[n] = null != (t = c.A.getPricesForSku(n)) ? t : true
    }
    return e
  }, [h]);
  return r.useEffect(() => {
    if (!_)
      for (let e of h) c.A.isFetchingSKU(e) || (0, o.QX)(t, e, f, {
        isGift: p
      }).catch(t => {
        t instanceof s.Ey && (t.code === l.tG.BILLING_BUNDLE_ALREADY_PURCHASED || t.code === l.tG.BILLING_BUNDLE_PARTIALLY_OWNED || t.code === l.tG.INVALID_BILLING_ADDRESS) && y(e, t)
      })
  }, [t, h, f, p, y, _]), {
    hasFetchedSkus: g,
    skusById: b,
    skuPricePreviewsById: O,
    previewErrorsById: E
  }
}