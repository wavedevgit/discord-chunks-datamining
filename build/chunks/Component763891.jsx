/** Chunk was on 45620 **/
/** chunk id: 763891, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk484920 = require("./484920.js"),
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
    scrollerRef: w,
    tab: A
  } = e, B = (0, p.sp)(), R = null != (t = null == B ? true : B.sessionId) ? t : "", {
    noCache: Z,
    includeUnpublished: D
  } = (0, v.Z)(), F = (0, i.e7)([u.default], () => u.default.getCurrentUser()), M = (0, i.e7)([g.Z], () => g.Z.productsWithVariantsAsGroup), [H, W] = l.useState(1), V = () => {
    var e;
    null == w || null == (e = w.current) || e.scrollToTop({
      animate: true
    })
  }, U = (0, c.Fg)(), z = (0, o.ap)(U), [G, q, K] = l.useMemo(() => {
    switch (A) {
      case O.AW.AVATAR_DECORATIONS:
        return [E.intl.string(E.t.dRZYND), z ? T.Z : j.Z, a.Z.AVATAR_DECORATION];
      case O.AW.PROFILE_EFFECTS:
        return [E.intl.string(E.t["1cNjt7"]), z ? I.Z : k.Z, a.Z.PROFILE_EFFECT];
      case O.AW.NAMEPLATES:
        return [E.intl.string(E.t.V68Fq6), z ? L.Z : P.Z, a.Z.NAMEPLATE];
      case O.AW.BUNDLES:
        return [E.intl.string(E.t.FYFppq), z ? x.Z : y.Z, a.Z.BUNDLE]
    }
  }, [A, z]), Y = (0, f.a)(), X = l.useMemo(() => Y(M.filter(e => {
    var t;
    return e.type === K || e.type === a.Z.VARIANTS_GROUP && (null == (t = e.variants) ? true : t.some(e => e.type === K)) === true
  })), [M, K, Y]), J = (0, b.l)(X);
  return (l.useEffect(() => {
    (0, h.n)({
      sessionId: R,
      checkpoint: h.a.SHOP_MOUNTED,
      tab: A,
      isFullScreen: N,
      unpublishedCategoriesShown: D,
      cacheDisabled: Z
    })
  }, []), l.useEffect(() => {
    n || (0, h.n)({
      sessionId: R,
      checkpoint: h.a.SHOP_RENDERED,
      tab: A,
      isFullScreen: N,
      unpublishedCategoriesShown: D,
      cacheDisabled: Z
    })
  }, [R, N, D, Z, n, A]), n || null == F) ? (0, r.jsx)(m.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      style: {
        backgroundImage: "url(".concat(q, ")")
      },
      className: S.bannerContainer,
      children: (0, r.jsx)(s.X6q, {
        variant: "heading-xxl/extrabold",
        children: G
      })
    }), (0, r.jsx)("div", {
      className: S.products,
      children: J.slice(40 * (H - 1), 40 * H).map((e, t) => {
        let n = g.Z.getCategory(e.categorySkuId);
        return null == n ? null : (0, r.jsx)(p.k0, {
          newValue: {
            tilePosition: t
          },
          children: (0, r.jsx)(_.Z, {
            product: e,
            user: F,
            category: n,
            tab: A
          }, e.skuId)
        }, e.skuId)
      })
    }), J.length > 40 && (0, r.jsx)("div", {
      className: S.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(s.DsT, {
          currentPage: H,
          totalCount: J.length,
          pageSize: 40,
          onPageChange: e => {
            d.default.track(C.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == B ? true : B.sessionId,
              page_section: null == B ? true : B.pageSection,
              page_category: null == B ? true : B.pageCategory,
              page_index: e,
              page_size: 40,
              cta_name: "".concat(A, " page ").concat(e),
              page_type: A
            }), W(e), V()
          },
          disablePaginationGap: true
        })
      })
    })]
  })
}