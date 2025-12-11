/** Chunk was on 45620 **/
/** chunk id: 986105, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk624968 = require("./624968.jsx"),
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
  Chunk222194 = require("./222194.js");

function _(e) {
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
      cardContainerRef: a,
      totalCards: c
    } = (() => {
      let [e, t] = l.useState(1), n = (0, i.dQu)(i.TVs.space.SPACE_XL), r = (0, s.Z)(() => {
        (null == a ? true : a.current) != null && t(Math.max(1, Math.floor((a.current.offsetWidth + n) / (246 + n))))
      }), a = (0, o.y)(r, [n], {
        fireOnMount: true,
        fireOnDepsChange: true
      });
      return {
        cardContainerRef: l.useCallback(e => {
          a.current = e, null != e && r()
        }, [r, a]),
        totalCards: e
      }
    })();
    return (0, r.jsx)("div", {
      className: S.row,
      ref: a,
      children: (0, r.jsx)(j, (t = _({}, e), n = n = {
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
  x = e => (0, r.jsx)("div", {
    className: S.feed,
    children: (0, r.jsx)(j, _({}, e))
  }),
  y = e => (0, r.jsx)(c.Z, {
    gap: "xl",
    children: (0, r.jsx)(j, _({}, e))
  }),
  j = e => {
    let {
      heroBlockRecord: t,
      isLoading: n,
      products: l,
      tab: a,
      totalCards: i
    } = e, o = (0, u.sp)(), s = (0, f.Pc)("HeroBlockCards") && t.categorySkuId === E.Hi, c = (0, f.IT)("HeroBlockCards");
    if (n) return (0, r.jsx)(r.Fragment, {
      children: [...Array(null != i ? i : 4)].map((e, t) => (0, r.jsx)(h.Z, {}, t))
    });
    let g = null != i ? l.slice(0, i) : l;
    return (0, r.jsx)(m.zp.Provider, {
      value: {
        rentalDuration: s ? c : true,
        flattenProductVariants: s
      },
      children: g.map((e, t) => {
        let n = d.Z.getCategoryForProduct(e.skuId);
        return null == e || null == n ? null : (0, r.jsx)(u.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "top 4",
            categoryPosition: 0
          },
          children: (0, r.jsx)(b.Z, {
            skuId: null == e ? true : e.skuId,
            prioritizedCurrency: a === E.AW.ORBS ? m.tA.ORBS : true,
            onClickAnalytics: (0, m.wO)(e, a, o)
          }, e.skuId)
        }, e.skuId)
      })
    })
  },
  k = e => {
    let {
      heroBlockRecord: t,
      layout: n,
      tab: i,
      isBlockLoading: o = false
    } = e, {
      products: s
    } = ((e, t) => {
      let n = (0, C.Z)(),
        r = (0, a.e7)([d.Z], () => d.Z.products),
        i = l.useMemo(() => e ? [] : r.size > 0 ? n(t.rankedSkuIds) : [], [e, n, t.rankedSkuIds, r]),
        o = (0, g.a)()(i),
        s = (0, p.l)(o);
      return {
        products: (0, v.St)(s)
      }
    })(o, t), c = l.useMemo(() => !o && 0 !== t.rankedSkuIds.length && !(s.length > 0) && t.rankedSkuIds.every(e => {
      var t;
      return (null == (t = d.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [o, t.rankedSkuIds, s.length]), u = o || c;
    switch (n) {
      case "row":
        return (0, r.jsx)(O, {
          heroBlockRecord: t,
          isLoading: u,
          products: s,
          tab: i
        });
      case "feed":
        return (0, r.jsx)(x, {
          heroBlockRecord: t,
          isLoading: u,
          products: s,
          tab: i
        });
      case "hscroll":
        return (0, r.jsx)(y, {
          heroBlockRecord: t,
          isLoading: u,
          products: s,
          tab: i
        })
    }
  }