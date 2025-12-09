/** Chunk was on 45620 **/
/** chunk id: 763891, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk653126 = require("./653126.jsx"),
  Chunk786040 = require("./786040.js"),
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

function A(e) {
  var t;
  let {
    isFetchingCategories: n,
    scrollerRef: A,
    tab: P
  } = e, R = (0, g.sp)(), Z = null != (t = null == R ? true : R.sessionId) ? t : "", {
    noCache: w,
    includeUnpublished: D
  } = (0, E.Z)(), H = (0, s.e7)([u.default], () => u.default.getCurrentUser()), M = (0, s.e7)([f.Z], () => f.Z.productsWithVariantsAsGroup), [F, W] = l.useState(1), U = (0, c.Fg)(), V = (0, o.ap)(U), [z, G, K] = l.useMemo(() => {
    switch (P) {
      case v.AW.AVATAR_DECORATIONS:
        return [x.intl.string(x.t.dRZYNE), V ? j.Z : T.Z, i.Z.AVATAR_DECORATION];
      case v.AW.PROFILE_EFFECTS:
        return [x.intl.string(x.t["1cNjtx"]), V ? N.Z : B.Z, i.Z.PROFILE_EFFECT];
      case v.AW.NAMEPLATES:
        return [x.intl.string(x.t.V68Fqz), V ? L.Z : I.Z, i.Z.NAMEPLATE];
      case v.AW.BUNDLES:
        return [x.intl.string(x.t.FYFpps), V ? k.Z : y.Z, i.Z.BUNDLE]
    }
  }, [P, V]), Y = (0, p.a)(), q = l.useMemo(() => Y(M.filter(e => {
    var t;
    return (e.type === K || e.type === i.Z.VARIANTS_GROUP && (null == (t = e.variants) ? true : t.some(e => e.type === K)) === true) && !v.y8.some(t => {
      let {
        categorySkuId: n
      } = t;
      return n === e.categorySkuId
    })
  })), [M, K, Y]), Q = (0, m.l)(q);
  return (l.useEffect(() => {
    (0, C.n)({
      sessionId: Z,
      checkpoint: C.a.SHOP_MOUNTED,
      tab: P,
      unpublishedCategoriesShown: D,
      cacheDisabled: w
    })
  }, []), l.useEffect(() => {
    n || (0, C.n)({
      sessionId: Z,
      checkpoint: C.a.SHOP_RENDERED,
      tab: P,
      unpublishedCategoriesShown: D,
      cacheDisabled: w
    })
  }, [Z, D, w, n, P]), n || null == H) ? (0, r.jsx)(h.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      style: {
        backgroundImage: "url(".concat(G, ")")
      },
      className: O.bannerContainer,
      children: (0, r.jsx)(a.Heading, {
        variant: "heading-xxl/extrabold",
        children: z
      })
    }), (0, r.jsx)("div", {
      className: O.products,
      children: Q.slice(40 * (F - 1), 40 * F).map((e, t) => null == f.Z.getCategory(e.categorySkuId) ? null : (0, r.jsx)(g.k0, {
        newValue: {
          tilePosition: t
        },
        children: (0, r.jsx)(_.Z, {
          skuId: e.skuId,
          onClickAnalytics: (0, b.wO)(e, P, R)
        }, e.skuId)
      }, e.skuId))
    }), Q.length > 40 && (0, r.jsx)("div", {
      className: O.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(a.DsT, {
          currentPage: F,
          totalCount: Q.length,
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