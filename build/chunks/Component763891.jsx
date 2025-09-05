/** Chunk was on 45620 **/
/** chunk id: 763891, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk399606 = require("./399606.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk303952 = require("./303952.js"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk81136 = require("./81136.js"),
  Chunk215023 = require("./215023.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk887353 = require("./887353.js"),
  Chunk558513 = require("./558513.js"),
  Chunk662128 = require("./662128.js"),
  Chunk676790 = require("./676790.js"),
  Chunk665195 = require("./665195.js"),
  Chunk42742 = require("./42742.js"),
  Chunk283727 = require("./283727.js"),
  Chunk266058 = require("./266058.js"),
  Chunk719138 = require("./719138.js");

function N(e) {
  var t;
  let {
    isFetchingCategories: n,
    isFullScreen: N,
    scrollerRef: A,
    tab: P
  } = e, R = (0, g.sp)(), Z = null != (t = null == R ? true : R.sessionId) ? t : "", {
    noCache: w,
    includeUnpublished: F
  } = (0, b.Z)(), H = (0, s.e7)([u.default], () => u.default.getCurrentUser()), D = (0, s.e7)([f.Z], () => f.Z.productsWithVariantsAsGroup), [M, W] = l.useState(1), U = (0, c.Fg)(), V = (0, o.ap)(U), [z, G, q] = l.useMemo(() => {
    switch (P) {
      case E.AW.AVATAR_DECORATIONS:
        return [O.intl.string(O.t.dRZYND), V ? L.Z : T.Z, a.Z.AVATAR_DECORATION];
      case E.AW.PROFILE_EFFECTS:
        return [O.intl.string(O.t["1cNjt7"]), V ? I.Z : B.Z, a.Z.PROFILE_EFFECT];
      case E.AW.NAMEPLATES:
        return [O.intl.string(O.t.V68Fq6), V ? k.Z : j.Z, a.Z.NAMEPLATE];
      case E.AW.BUNDLES:
        return [O.intl.string(O.t.FYFppq), V ? y.Z : x.Z, a.Z.BUNDLE]
    }
  }, [P, V]), K = (0, p.a)(), Y = l.useMemo(() => K(D.filter(e => {
    var t;
    return e.type === q || e.type === a.Z.VARIANTS_GROUP && (null == (t = e.variants) ? true : t.some(e => e.type === q)) === true
  })), [D, q, K]), X = (0, m.l)(Y);
  return (l.useEffect(() => {
    (0, h.n)({
      sessionId: Z,
      checkpoint: h.a.SHOP_MOUNTED,
      tab: P,
      isFullScreen: N,
      unpublishedCategoriesShown: F,
      cacheDisabled: w
    })
  }, []), l.useEffect(() => {
    n || (0, h.n)({
      sessionId: Z,
      checkpoint: h.a.SHOP_RENDERED,
      tab: P,
      isFullScreen: N,
      unpublishedCategoriesShown: F,
      cacheDisabled: w
    })
  }, [Z, N, F, w, n, P]), n || null == H) ? (0, r.jsx)(_.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      style: {
        backgroundImage: "url(".concat(G, ")")
      },
      className: v.bannerContainer,
      children: (0, r.jsx)(i.X6q, {
        variant: "heading-xxl/extrabold",
        children: z
      })
    }), (0, r.jsx)("div", {
      className: v.products,
      children: X.slice(40 * (M - 1), 40 * M).map((e, t) => {
        let n = f.Z.getCategory(e.categorySkuId);
        return null == n ? null : (0, r.jsx)(g.k0, {
          newValue: {
            tilePosition: t
          },
          children: (0, r.jsx)(C.Z, {
            product: e,
            user: H,
            category: n,
            tab: P
          }, e.skuId)
        }, e.skuId)
      })
    }), X.length > 40 && (0, r.jsx)("div", {
      className: v.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(i.DsT, {
          currentPage: M,
          totalCount: X.length,
          pageSize: 40,
          onPageChange: e => {
            var t;
            d.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == R ? true : R.sessionId,
              page_section: null == R ? true : R.pageSection,
              page_category: null == R ? true : R.pageCategory,
              page_index: e,
              page_size: 40,
              cta_name: "".concat(P, " page ").concat(e),
              page_type: P
            }), W(e), null == A || null == (t = A.current) || t.scrollToTop({
              animate: true
            })
          },
          disablePaginationGap: true
        })
      })
    })]
  })
}