/** Chunk was on 59275 **/
/** chunk id: 773591, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js"),
  Chunk417597 = require("./417597.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk511265 = require("./511265.js"),
  Chunk206077 = require("./206077.js"),
  Chunk100057 = require("./100057.js"),
  Chunk392183 = require("./392183.jsx"),
  Chunk751304 = require("./751304.jsx"),
  Chunk561769 = require("./561769.js"),
  Chunk998694 = require("./998694.js"),
  Chunk758836 = require("./758836.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk157884 = require("./157884.js"),
  Chunk517700 = require("./517700.js"),
  Chunk304009 = require("./304009.js"),
  Chunk495482 = require("./495482.js"),
  Chunk479512 = require("./479512.js"),
  Chunk867341 = require("./867341.js"),
  Chunk632728 = require("./632728.js"),
  Chunk368146 = require("./368146.js"),
  Chunk536003 = require("./536003.js");

function R(e) {
  var t;
  let {
    isFetchingCategories: n,
    scrollerRef: R,
    tab: P
  } = e, B = (0, g.uM)(), w = null != (t = null == B ? true : B.sessionId) ? t : "", {
    noCache: D,
    includeUnpublished: M
  } = (0, v.A)(), H = (0, a.bG)([u.default], () => u.default.getCurrentUser()), G = (0, a.bG)([p.A], () => p.A.productsWithVariantsAsGroup), [U, F] = l.useState(1), V = (0, c.DP)(), z = (0, i.qB)(V), [K, W, Y] = l.useMemo(() => {
    switch (P) {
      case C.G2.AVATAR_DECORATIONS:
        return [x.intl.string(x.t.dRZYNE), z ? L.A : j.A, s.R.AVATAR_DECORATION];
      case C.G2.PROFILE_EFFECTS:
        return [x.intl.string(x.t["1cNjtx"]), z ? N.A : k.A, s.R.PROFILE_EFFECT];
      case C.G2.NAMEPLATES:
        return [x.intl.string(x.t.V68Fqz), z ? I.A : T.A, s.R.NAMEPLATE];
      case C.G2.BUNDLES:
        return [x.intl.string(x.t.FYFpps), z ? y.A : O.A, s.R.BUNDLE]
    }
  }, [P, z]), q = (0, m.p)(), Z = l.useMemo(() => q(G.filter(e => {
    var t;
    return (e.type === Y || e.type === s.R.VARIANTS_GROUP && (null == (t = e.variants) ? true : t.some(e => e.type === Y)) === true) && !C.MS.some(t => {
      let {
        categorySkuId: n
      } = t;
      return n === e.categorySkuId
    })
  })), [G, Y, q]), X = (0, f.X)(Z);
  return (l.useEffect(() => {
    (0, b.z)({
      sessionId: w,
      checkpoint: b.t.SHOP_MOUNTED,
      tab: P,
      unpublishedCategoriesShown: M,
      cacheDisabled: D
    })
  }, []), l.useEffect(() => {
    n || (0, b.z)({
      sessionId: w,
      checkpoint: b.t.SHOP_RENDERED,
      tab: P,
      unpublishedCategoriesShown: M,
      cacheDisabled: D
    })
  }, [w, M, D, n, P]), n || null == H) ? (0, r.jsx)(h.A, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      style: {
        backgroundImage: "url(".concat(W, ")")
      },
      className: S.cI,
      children: (0, r.jsx)(o.Heading, {
        variant: "heading-xxl/extrabold",
        children: K
      })
    }), (0, r.jsx)("div", {
      className: S.ZE,
      children: X.slice(40 * (U - 1), 40 * U).map((e, t) => null == p.A.getCategory(e.categorySkuId) ? null : (0, r.jsx)(g.R9, {
        newValue: {
          tilePosition: t
        },
        children: (0, r.jsx)(_.A, {
          skuId: e.skuId,
          onClickAnalytics: (0, E.UU)(e, P, B)
        }, e.skuId)
      }, e.skuId))
    }), X.length > 40 && (0, r.jsx)("div", {
      className: S.Ej,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(o.mgR, {
          currentPage: U,
          totalCount: X.length,
          pageSize: 40,
          onPageChange: e => {
            var t;
            d.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == B ? true : B.sessionId,
              page_section: null == B ? true : B.pageSection,
              page_category: null == B ? true : B.pageCategory,
              page_index: e,
              page_size: 40,
              cta_name: "".concat(P, " page ").concat(e),
              page_type: P
            }), F(e), null == R || null == (t = R.current) || t.scrollToTop({
              animate: true
            })
          },
          disablePaginationGap: true
        })
      })
    })]
  })
}