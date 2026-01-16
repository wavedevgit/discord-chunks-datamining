/** Chunk was on 45620 **/
/** chunk id: 986105, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk624968 = require("./624968.jsx"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk763941 = require("./763941.js"),
  Chunk370039 = require("./370039.js"),
  Chunk155066 = require("./155066.js"),
  Chunk937510 = require("./937510.js"),
  Chunk653126 = require("./653126.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk401975 = require("./401975.jsx"),
  Chunk619899 = require("./619899.js"),
  Chunk215023 = require("./215023.js"),
  Chunk222194 = require("./222194.js");

function x(e) {
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
let S = e => {
    var t, n;
    let {
      cardContainerRef: o,
      totalCards: c
    } = (() => {
      let [e, t] = l.useState(1), n = (0, a.dQu)(a.TVs.space.SPACE_XL), r = (0, i.Z)(() => {
        (null == o ? true : o.current) != null && t(Math.max(1, Math.floor((o.current.offsetWidth + n) / (246 + n))))
      }), o = (0, s.y)(r, [n], {
        fireOnMount: true,
        fireOnDepsChange: true
      });
      return {
        cardContainerRef: l.useCallback(e => {
          o.current = e, null != e && r()
        }, [r, o]),
        totalCards: e
      }
    })();
    return (0, r.jsx)("div", {
      className: v.row,
      ref: o,
      children: (0, r.jsx)(y, (t = x({}, e), n = n = {
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
  O = e => (0, r.jsx)("div", {
    className: v.feed,
    children: (0, r.jsx)(y, x({}, e))
  }),
  _ = e => (0, r.jsx)(o.Z, {
    gap: "xl",
    children: (0, r.jsx)(y, x({}, e))
  }),
  y = e => {
    let {
      heroBlockRecord: t,
      isLoading: n,
      products: l,
      tab: a,
      totalCards: s
    } = e, i = (0, c.sp)(), o = (0, d.Pc)("HeroBlockCards") && t.categorySkuId === E.Hi, f = (0, d.IT)("HeroBlockCards");
    if (n) return (0, r.jsx)(r.Fragment, {
      children: [...Array(null != s ? s : 4)].map((e, t) => (0, r.jsx)(h.Z, {}, t))
    });
    let g = null != s ? l.slice(0, s) : l;
    return (0, r.jsx)(m.zp.Provider, {
      value: {
        rentalDuration: o ? f : true,
        flattenProductVariants: o
      },
      children: g.map((e, t) => {
        let n = u.Z.getCategoryForProduct(e.skuId);
        return null == e || null == n ? null : (0, r.jsx)(c.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "top 4",
            categoryPosition: 0
          },
          children: (0, r.jsx)(p.Z, {
            skuId: null == e ? true : e.skuId,
            prioritizedCurrency: a === E.AW.ORBS ? m.tA.ORBS : true,
            onClickAnalytics: (0, m.wO)(e, a, i)
          }, e.skuId)
        }, e.skuId)
      })
    })
  },
  j = e => {
    let {
      heroBlockRecord: t,
      layout: n,
      tab: a,
      isBlockLoading: s = false
    } = e, {
      products: i
    } = ((e, t) => {
      let n = (0, g.Z)(),
        r = l.useMemo(() => e ? [] : n(t.rankedSkuIds), [e, n, t.rankedSkuIds]),
        a = (0, f.a)()(r),
        s = (0, b.l)(a);
      return {
        products: (0, C.St)(s)
      }
    })(s, t), o = l.useMemo(() => !s && 0 !== t.rankedSkuIds.length && !(i.length > 0) && t.rankedSkuIds.every(e => {
      var t;
      return (null == (t = u.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [s, t.rankedSkuIds, i.length]), c = s || o;
    switch (n) {
      case "row":
        return (0, r.jsx)(S, {
          heroBlockRecord: t,
          isLoading: c,
          products: i,
          tab: a
        });
      case "feed":
        return (0, r.jsx)(O, {
          heroBlockRecord: t,
          isLoading: c,
          products: i,
          tab: a
        });
      case "hscroll":
        return (0, r.jsx)(_, {
          heroBlockRecord: t,
          isLoading: c,
          products: i,
          tab: a
        })
    }
  }