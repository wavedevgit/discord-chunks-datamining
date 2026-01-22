/** Chunk was on 59275 **/
/** chunk id: 773591, original params: e,t,l (module,exports,require) **/
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
    isFetchingCategories: l,
    scrollerRef: R,
    tab: P
  } = e, D = (0, f.uM)(), w = null != (t = null == D ? true : D.sessionId) ? t : "", {
    noCache: B,
    includeUnpublished: M
  } = (0, A.A)(), H = (0, a.bG)([u.default], () => u.default.getCurrentUser()), G = (0, a.bG)([b.A], () => b.A.productsWithVariantsAsGroup), [F, U] = r.useState(1), z = (0, c.DP)(), V = (0, i.qB)(z), [K, W, Y] = r.useMemo(() => {
    switch (P) {
      case x.G2.AVATAR_DECORATIONS:
        return [C.intl.string(C.t.dRZYNE), V ? L.A : j.A, s.R.AVATAR_DECORATION];
      case x.G2.PROFILE_EFFECTS:
        return [C.intl.string(C.t["1cNjtx"]), V ? k.A : N.A, s.R.PROFILE_EFFECT];
      case x.G2.NAMEPLATES:
        return [C.intl.string(C.t.V68Fqz), V ? I.A : T.A, s.R.NAMEPLATE];
      case x.G2.BUNDLES:
        return [C.intl.string(C.t.FYFpps), V ? y.A : _.A, s.R.BUNDLE]
    }
  }, [P, V]), q = (0, g.p)(), Z = r.useMemo(() => q(G.filter(e => {
    var t;
    return (e.type === Y || e.type === s.R.VARIANTS_GROUP && (null == (t = e.variants) ? true : t.some(e => e.type === Y)) === true) && !x.MS.some(t => {
      let {
        categorySkuId: l
      } = t;
      return l === e.categorySkuId
    })
  })), [G, Y, q]), X = (0, p.X)(Z);
  return (r.useEffect(() => {
    (0, m.z)({
      sessionId: w,
      checkpoint: m.t.SHOP_MOUNTED,
      tab: P,
      unpublishedCategoriesShown: M,
      cacheDisabled: B
    })
  }, []), r.useEffect(() => {
    l || (0, m.z)({
      sessionId: w,
      checkpoint: m.t.SHOP_RENDERED,
      tab: P,
      unpublishedCategoriesShown: M,
      cacheDisabled: B
    })
  }, [w, M, B, l, P]), l || null == H) ? (0, n.jsx)(h.A, {}) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      style: {
        backgroundImage: "url(".concat(W, ")")
      },
      className: O.cI,
      children: (0, n.jsx)(o.Heading, {
        variant: "heading-xxl/extrabold",
        children: K
      })
    }), (0, n.jsx)("div", {
      className: O.ZE,
      children: X.slice(40 * (F - 1), 40 * F).map((e, t) => null == b.A.getCategory(e.categorySkuId) ? null : (0, n.jsx)(f.R9, {
        newValue: {
          tilePosition: t
        },
        children: (0, n.jsx)(E.A, {
          skuId: e.skuId,
          onClickAnalytics: (0, v.UU)(e, P, D)
        }, e.skuId)
      }, e.skuId))
    }), X.length > 40 && (0, n.jsx)("div", {
      className: O.Ej,
      children: (0, n.jsx)("div", {
        children: (0, n.jsx)(o.mgR, {
          currentPage: F,
          totalCount: X.length,
          pageSize: 40,
          onPageChange: e => {
            var t;
            d.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == D ? true : D.sessionId,
              page_section: null == D ? true : D.pageSection,
              page_category: null == D ? true : D.pageCategory,
              page_index: e,
              page_size: 40,
              cta_name: "".concat(P, " page ").concat(e),
              page_type: P
            }), U(e), null == R || null == (t = R.current) || t.scrollToTop({
              animate: true
            })
          },
          disablePaginationGap: true
        })
      })
    })]
  })
}