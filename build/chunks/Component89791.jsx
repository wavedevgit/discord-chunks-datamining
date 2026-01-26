/** Chunk was on 39048 **/
/** chunk id: 89791, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk242564 = require("./242564.jsx"),
  Chunk250627 = require("./250627.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk276539 = require("./276539.js");
let c = (0, Chunk242564.IE)([(0, Chunk242564.mP)({
  key: "LISTING_NAME",
  cellClassName: Chunk276539.Qy,
  renderHeader: () => (0, r.jsx)(l.A3, {
    children: a.intl.string(a.t.OGpGqO)
  }),
  sort: (0, Chunk242564.vc)(e => e.listing.name.toLowerCase())
}), (0, Chunk242564.b1)({
  key: "PAYMENTS_COUNT",
  cellClassName: Chunk276539.bw,
  renderHeader: () => (0, r.jsx)(l.A3, {
    children: a.intl.string(a.t.vpHXJ0)
  }),
  getCount: e => e.paymentsCount,
  sort: (0, Chunk242564.vc)(e => {
    var t;
    return null != (t = e.paymentsCount) ? t : 0
  })
}), (0, Chunk242564.CU)({
  key: "PRICE",
  cellClassName: Chunk276539.k1,
  renderHeader: () => (0, r.jsx)(l.A3, {
    children: a.intl.string(a.t.VodAGZ)
  }),
  getAmount(e) {
    let {
      listing: t
    } = e;
    return t.price_tier
  },
  sort: (0, Chunk242564.vc)(e => {
    var t;
    return null != (t = e.listing.price_tier) ? t : 0
  })
})]);

function d(e) {
  let {
    earningsData: t,
    guildId: n
  } = e, a = (0, s.fZ)(n, {
    publishedOnly: false
  }), o = t.currentPeriod, d = i.useMemo(() => a.map(e => {
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
  }).filter(e => e.listing.published || e.paymentsCount > 0), [a, null == o ? true : o.ppgs]);
  return null == a || 0 === a.length ? null : (0, r.jsx)(l.Ay, {
    columns: c,
    data: d,
    initialSortKey: "LISTING_NAME"
  })
}