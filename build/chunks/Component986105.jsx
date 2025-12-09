/** Chunk was on 45620 **/
/** chunk id: 986105, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk763941 = require("./763941.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk653126 = require("./653126.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk401975 = require("./401975.jsx"),
  Chunk934760 = require("./934760.js"),
  Chunk619899 = require("./619899.js"),
  Chunk215023 = require("./215023.js"),
  Chunk310582 = require("./310582.js");

function E(e) {
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
}
let O = e => {
    var t, n;
    let {
      cardContainerRef: i,
      totalCards: c
    } = (() => {
      let [e, t] = l.useState(1), n = (0, s.dQu)(s.TVs.space.SPACE_XL), r = (0, a.Z)(() => {
        (null == i ? true : i.current) != null && t(Math.max(1, Math.floor((i.current.offsetWidth + n) / (246 + n))))
      }), i = (0, o.y)(r, [n], {
        fireOnMount: true,
        fireOnDepsChange: true
      });
      return {
        cardContainerRef: l.useCallback(e => {
          i.current = e, null != e && r()
        }, [r, i]),
        totalCards: e
      }
    })();
    return (0, r.jsx)("div", {
      className: v.row,
      ref: i,
      children: (0, r.jsx)(x, (t = E({}, e), n = n = {
        totalCards: c
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    })
  },
  S = e => (0, r.jsx)("div", {
    className: v.feed,
    children: (0, r.jsx)(x, E({}, e))
  }),
  x = e => {
    let {
      heroBlockRecord: t,
      isLoading: n,
      products: l,
      tab: i,
      totalCards: s
    } = e, o = (0, c.sp)(), a = (0, d.Pc)("HeroBlockCards") && t.categorySkuId === b.Hi, g = (0, d.IT)("HeroBlockCards");
    if (n) return (0, r.jsx)(r.Fragment, {
      children: [...Array(null != s ? s : 4)].map((e, t) => (0, r.jsx)(C.Z, {}, t))
    });
    let f = null != s ? l.slice(0, s) : l;
    return (0, r.jsx)(m.zp.Provider, {
      value: {
        rentalDuration: a ? g : true
      },
      children: f.map((e, t) => {
        let n = u.Z.getCategoryForProduct(e.skuId);
        return null == e || null == n ? null : (0, r.jsx)(c.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "top 4",
            categoryPosition: 0
          },
          children: (0, r.jsx)(p.Z, {
            skuId: null == e ? true : e.skuId,
            prioritizedCurrency: i === b.AW.ORBS ? m.tA.ORBS : true,
            onClickAnalytics: (0, m.wO)(e, i, o)
          }, e.skuId)
        }, e.skuId)
      })
    })
  },
  y = e => {
    let {
      heroBlockRecord: t,
      layout: n,
      tab: s,
      isBlockLoading: o = false
    } = e, {
      products: a
    } = ((e, t) => {
      let n = (0, h.Z)(),
        r = (0, i.e7)([u.Z], () => u.Z.products),
        s = l.useMemo(() => e ? [] : r.size > 0 ? n(t.rankedSkuIds) : [], [e, n, t.rankedSkuIds, r]),
        o = (0, g.a)()(s),
        a = (0, f.l)(o);
      return {
        products: (0, _.St)(a)
      }
    })(o, t), c = l.useMemo(() => !o && 0 !== t.rankedSkuIds.length && !(a.length > 0) && t.rankedSkuIds.every(e => {
      var t;
      return (null == (t = u.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [o, t.rankedSkuIds, a.length]), d = o || c;
    return "row" === n ? (0, r.jsx)(O, {
      heroBlockRecord: t,
      isLoading: d,
      products: a,
      tab: s
    }) : (0, r.jsx)(S, {
      heroBlockRecord: t,
      isLoading: d,
      products: a,
      tab: s
    })
  }