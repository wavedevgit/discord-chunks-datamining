/** Chunk was on 59275 **/
/** chunk id: 60140, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk770178 = require("./770178.js"),
  Chunk765548 = require("./765548.js"),
  Chunk408238 = require("./408238.jsx"),
  Chunk440938 = require("./440938.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk379177 = require("./379177.js"),
  Chunk511265 = require("./511265.js"),
  Chunk313276 = require("./313276.js"),
  Chunk206077 = require("./206077.js"),
  Chunk751304 = require("./751304.jsx"),
  Chunk561769 = require("./561769.js"),
  Chunk484469 = require("./484469.jsx"),
  Chunk940622 = require("./940622.js"),
  Chunk758836 = require("./758836.js"),
  Chunk201073 = require("./201073.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}
let S = e => {
    var t, l;
    let {
      cardContainerRef: o,
      totalCards: c
    } = (() => {
      let [e, t] = r.useState(1), l = (0, s.rdh)(s.LU0.space.SPACE_XL), n = (0, i.A)(() => {
        (null == o ? true : o.current) == null || t(Math.max(1, Math.floor((o.current.offsetWidth + l) / (246 + l))))
      }), o = (0, a.w)(n, [l], {
        fireOnMount: true,
        fireOnDepsChange: true
      });
      return {
        cardContainerRef: r.useCallback(e => {
          o.current = e, null != e && n()
        }, [n, o]),
        totalCards: e
      }
    })();
    return (0, n.jsx)("div", {
      className: A.nM,
      ref: o,
      children: (0, n.jsx)(_, (t = x({}, e), l = l = {
        totalCards: c
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var l = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          l.push.apply(l, n)
        }
        return l
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
      }), t))
    })
  },
  C = e => (0, n.jsx)("div", {
    className: A.hm,
    children: (0, n.jsx)(_, x({}, e))
  }),
  O = e => (0, n.jsx)(o.A, {
    gap: "xl",
    children: (0, n.jsx)(_, x({}, e))
  }),
  _ = e => {
    let {
      heroBlockRecord: t,
      isLoading: l,
      products: r,
      tab: s,
      totalCards: a
    } = e, i = (0, c.uM)(), o = (0, d.rR)("HeroBlockCards") && t.categorySkuId === v.op, f = (0, d.eJ)("HeroBlockCards");
    if (l) return (0, n.jsx)(n.Fragment, {
      children: [...Array(null != a ? a : 4)].map((e, t) => (0, n.jsx)(h.A, {}, t))
    });
    let b = null != a ? r.slice(0, a) : r;
    return (0, n.jsx)(p.v3.Provider, {
      value: {
        rentalDuration: o ? f : true,
        flattenProductVariants: o
      },
      children: b.map((e, t) => {
        let l = u.A.getCategoryForProduct(e.skuId);
        return null == e || null == l ? null : (0, n.jsx)(c.R9, {
          newValue: {
            tilePosition: t,
            pageSection: "top 4",
            categoryPosition: 0
          },
          children: (0, n.jsx)(m.A, {
            skuId: null == e ? true : e.skuId,
            prioritizedCurrency: s === v.G2.ORBS ? p.Hi.ORBS : true,
            onClickAnalytics: (0, p.UU)(e, s, i)
          }, e.skuId)
        }, e.skuId)
      })
    })
  },
  y = e => {
    let t, l, s, a, {
        heroBlockRecord: i,
        layout: o,
        tab: c,
        isBlockLoading: d = false
      } = e,
      {
        products: m
      } = (t = (0, b.A)(), l = r.useMemo(() => d ? [] : t(i.rankedSkuIds), [d, t, i.rankedSkuIds]), s = (0, f.p)()(l), a = (0, g.X)(s), {
        products: (0, E.od)(a)
      }),
      p = r.useMemo(() => !d && 0 !== i.rankedSkuIds.length && !(m.length > 0) && i.rankedSkuIds.every(e => {
        var t;
        return (null == (t = u.A.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
      }), [d, i.rankedSkuIds, m.length]),
      h = d || p;
    switch (o) {
      case "row":
        return (0, n.jsx)(S, {
          heroBlockRecord: i,
          isLoading: h,
          products: m,
          tab: c
        });
      case "feed":
        return (0, n.jsx)(C, {
          heroBlockRecord: i,
          isLoading: h,
          products: m,
          tab: c
        });
      case "hscroll":
        return (0, n.jsx)(O, {
          heroBlockRecord: i,
          isLoading: h,
          products: m,
          tab: c
        })
    }
  }