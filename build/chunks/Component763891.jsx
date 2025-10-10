/** Chunk was on 45620 **/
/** chunk id: 763891, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => R
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
  Chunk128922 = require("./128922.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk303952 = require("./303952.js"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk653126 = require("./653126.jsx"),
  Chunk786040 = require("./786040.jsx"),
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

function R(e) {
  var t;
  let {
    isFetchingCategories: n,
    isFullScreen: R,
    scrollerRef: Z,
    tab: w
  } = e, H = (0, g.sp)(), F = null != (t = null == H ? true : H.sessionId) ? t : "", {
    noCache: D,
    includeUnpublished: M
  } = (0, S.Z)(), W = (0, s.e7)([u.default], () => u.default.getCurrentUser()), U = (0, s.e7)([f.Z], () => f.Z.productsWithVariantsAsGroup), [V, z] = l.useState(1), G = (0, c.Fg)(), K = (0, o.ap)(G), [Y, q, Q] = l.useMemo(() => {
    switch (w) {
      case O.AW.AVATAR_DECORATIONS:
        return [y.intl.string(y.t.dRZYND), K ? I.Z : L.Z, i.Z.AVATAR_DECORATION];
      case O.AW.PROFILE_EFFECTS:
        return [y.intl.string(y.t["1cNjt7"]), K ? P.Z : N.Z, i.Z.PROFILE_EFFECT];
      case O.AW.NAMEPLATES:
        return [y.intl.string(y.t.V68Fq6), K ? A.Z : B.Z, i.Z.NAMEPLATE];
      case O.AW.BUNDLES:
        return [y.intl.string(y.t.FYFppq), K ? T.Z : k.Z, i.Z.BUNDLE]
    }
  }, [w, K]), J = (0, C.a)(), X = l.useMemo(() => J(U.filter(e => {
    var t;
    return e.type === Q || e.type === i.Z.VARIANTS_GROUP && (null == (t = e.variants) ? true : t.some(e => e.type === Q)) === true
  })), [U, Q, J]), $ = (0, h.l)(X);
  l.useEffect(() => {
    (0, _.n)({
      sessionId: F,
      checkpoint: _.a.SHOP_MOUNTED,
      tab: w,
      isFullScreen: R,
      unpublishedCategoriesShown: M,
      cacheDisabled: D
    })
  }, []), l.useEffect(() => {
    n || (0, _.n)({
      sessionId: F,
      checkpoint: _.a.SHOP_RENDERED,
      tab: w,
      isFullScreen: R,
      unpublishedCategoriesShown: M,
      cacheDisabled: D
    })
  }, [F, R, M, D, n, w]);
  let ee = p.Z.useConfig({
    location: "CollectiblesFilterableShop"
  }).showCardsV2;
  return n || null == W ? (0, r.jsx)(m.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      style: {
        backgroundImage: "url(".concat(q, ")")
      },
      className: j.bannerContainer,
      children: (0, r.jsx)(a.Heading, {
        variant: "heading-xxl/extrabold",
        children: Y
      })
    }), (0, r.jsx)("div", {
      className: j.products,
      children: $.slice(40 * (V - 1), 40 * V).map((e, t) => {
        let n = f.Z.getCategory(e.categorySkuId);
        return null == n ? null : (0, r.jsx)(g.k0, {
          newValue: {
            tilePosition: t
          },
          children: ee ? (0, r.jsx)(E.Z, {
            skuId: e.skuId,
            onClickAnalytics: (0, v.wO)(e, w, H)
          }, e.skuId) : (0, r.jsx)(b.Z, {
            product: e,
            user: W,
            category: n,
            tab: w
          }, e.skuId)
        }, e.skuId)
      })
    }), $.length > 40 && (0, r.jsx)("div", {
      className: j.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(a.DsT, {
          currentPage: V,
          totalCount: $.length,
          pageSize: 40,
          onPageChange: e => {
            var t;
            d.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == H ? true : H.sessionId,
              page_section: null == H ? true : H.pageSection,
              page_category: null == H ? true : H.pageCategory,
              page_index: e,
              page_size: 40,
              cta_name: "".concat(w, " page ").concat(e),
              page_type: w
            }), z(e), null == Z || null == (t = Z.current) || t.scrollToTop({
              animate: true
            })
          },
          disablePaginationGap: true
        })
      })
    })]
  })
}