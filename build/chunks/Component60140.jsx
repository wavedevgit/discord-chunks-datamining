/** Chunk was on 59275 **/
/** chunk id: 60140, original params: e,t,n (module,exports,require) **/
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

function C(e) {
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
let A = e => {
    var t, n;
    let {
      cardContainerRef: o,
      totalCards: c
    } = (() => {
      let [e, t] = l.useState(1), n = (0, s.rdh)(s.LU0.space.SPACE_XL), r = (0, i.A)(() => {
        (null == o ? true : o.current) == null || t(Math.max(1, Math.floor((o.current.offsetWidth + n) / (246 + n))))
      }), o = (0, a.w)(r, [n], {
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
      className: v.nM,
      ref: o,
      children: (0, r.jsx)(O, (t = C({}, e), n = n = {
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
    className: v.hm,
    children: (0, r.jsx)(O, C({}, e))
  }),
  x = e => (0, r.jsx)(o.A, {
    gap: "xl",
    children: (0, r.jsx)(O, C({}, e))
  }),
  O = e => {
    let {
      heroBlockRecord: t,
      isLoading: n,
      products: l,
      tab: s,
      totalCards: a
    } = e, i = (0, c.uM)(), o = (0, d.rR)("HeroBlockCards") && t.categorySkuId === E.op, g = (0, d.eJ)("HeroBlockCards");
    if (n) return (0, r.jsx)(r.Fragment, {
      children: [...Array(null != a ? a : 4)].map((e, t) => (0, r.jsx)(b.A, {}, t))
    });
    let f = null != a ? l.slice(0, a) : l;
    return (0, r.jsx)(_.v3.Provider, {
      value: {
        rentalDuration: o ? g : true,
        flattenProductVariants: o
      },
      children: f.map((e, t) => {
        let n = u.A.getCategoryForProduct(e.skuId);
        return null == e || null == n ? null : (0, r.jsx)(c.R9, {
          newValue: {
            tilePosition: t,
            pageSection: "top 4",
            categoryPosition: 0
          },
          children: (0, r.jsx)(p.A, {
            skuId: null == e ? true : e.skuId,
            prioritizedCurrency: s === E.G2.ORBS ? _.Hi.ORBS : true,
            onClickAnalytics: (0, _.UU)(e, s, i)
          }, e.skuId)
        }, e.skuId)
      })
    })
  },
  y = e => {
    let t, n, s, a, {
        heroBlockRecord: i,
        layout: o,
        tab: c,
        isBlockLoading: d = false
      } = e,
      {
        products: p
      } = (t = (0, f.A)(), n = l.useMemo(() => d ? [] : t(i.rankedSkuIds), [d, t, i.rankedSkuIds]), s = (0, g.p)()(n), a = (0, m.X)(s), {
        products: (0, h.od)(a)
      }),
      _ = l.useMemo(() => !d && 0 !== i.rankedSkuIds.length && !(p.length > 0) && i.rankedSkuIds.every(e => {
        var t;
        return (null == (t = u.A.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
      }), [d, i.rankedSkuIds, p.length]),
      b = d || _;
    switch (o) {
      case "row":
        return (0, r.jsx)(A, {
          heroBlockRecord: i,
          isLoading: b,
          products: p,
          tab: c
        });
      case "feed":
        return (0, r.jsx)(S, {
          heroBlockRecord: i,
          isLoading: b,
          products: p,
          tab: c
        });
      case "hscroll":
        return (0, r.jsx)(x, {
          heroBlockRecord: i,
          isLoading: b,
          products: p,
          tab: c
        })
    }
  }