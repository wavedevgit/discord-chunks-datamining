/** Chunk was on 9536 **/
/** chunk id: 894610, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk755930 = require("./755930.jsx"),
  Chunk267101 = require("./267101.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk260178 = require("./260178.js");
let c = (0, Chunk755930.Yn)([(0, Chunk755930.nn)({
  key: "LISTING_NAME",
  cellClassName: Chunk260178.listingNameColumn,
  renderHeader: () => (0, Chunk54381.jsx)(Chunk755930.qN, {
    children: Chunk388032.intl.string(Chunk388032.t.OGpGqO)
  }),
  sort: (0, Chunk755930.Qg)(e => e.listing.name.toLowerCase())
}), (0, Chunk755930.GW)({
  key: "PAYMENTS_COUNT",
  cellClassName: Chunk260178.paymentsCountColumn,
  renderHeader: () => (0, Chunk54381.jsx)(Chunk755930.qN, {
    children: Chunk388032.intl.string(Chunk388032.t.vpHXJ0)
  }),
  getCount: e => e.paymentsCount,
  sort: (0, Chunk755930.Qg)(e => {
    var t;
    return null != (t = e.paymentsCount) ? t : 0
  })
}), (0, Chunk755930.i$)({
  key: "PRICE",
  cellClassName: Chunk260178.priceColumn,
  renderHeader: () => (0, Chunk54381.jsx)(Chunk755930.qN, {
    children: Chunk388032.intl.string(Chunk388032.t.VodAGZ)
  }),
  getAmount(e) {
    let {
      listing: t
    } = e;
    return t.price_tier
  },
  sort: (0, Chunk755930.Qg)(e => {
    var t;
    return null != (t = e.listing.price_tier) ? t : 0
  })
})]);

function d(e) {
  let {
    earningsData: t,
    guildId: n
  } = e, s = (0, a.ue)(n, {
    publishedOnly: false
  }), o = t.currentPeriod, d = i.useMemo(() => s.map(e => {
    var t, n, r;
    let i = null == o ? true : o.ppgs[e.id];
    return n = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, null != i ? i : {}), r = r = {
      key: e.id,
      listing: e,
      paymentsCount: null != (t = null == i ? true : i.purchase_count) ? t : 0
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
    }), n
  }).filter(e => e.listing.published || e.paymentsCount > 0), [s, null == o ? true : o.ppgs]);
  return null == s || 0 === s.length ? null : (0, r.jsx)(l.ZP, {
    columns: c,
    data: d,
    initialSortKey: "LISTING_NAME"
  })
}