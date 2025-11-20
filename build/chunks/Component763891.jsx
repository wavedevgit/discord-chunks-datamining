/** Chunk was on 45620 **/
/** chunk id: 763891, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => R
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
  Chunk128922 = require("./128922.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk303952 = require("./303952.js"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
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

function R(e) {
  var t;
  let {
    isFetchingCategories: n,
    scrollerRef: R,
    tab: Z
  } = e, w = (0, f.sp)(), D = null != (t = null == w ? true : w.sessionId) ? t : "", {
    noCache: H,
    includeUnpublished: M
  } = (0, E.Z)(), F = (0, a.e7)([u.default], () => u.default.getCurrentUser()), W = (0, a.e7)([g.Z], () => g.Z.productsWithVariantsAsGroup), [V, U] = l.useState(1), z = (0, c.Fg)(), G = (0, o.ap)(z), [K, Y, q] = l.useMemo(() => {
    switch (Z) {
      case O.AW.AVATAR_DECORATIONS:
        return [y.intl.string(y.t.dRZYNE), G ? L.Z : T.Z, i.Z.AVATAR_DECORATION];
      case O.AW.PROFILE_EFFECTS:
        return [y.intl.string(y.t["1cNjtx"]), G ? A.Z : N.Z, i.Z.PROFILE_EFFECT];
      case O.AW.NAMEPLATES:
        return [y.intl.string(y.t.V68Fqz), G ? P.Z : B.Z, i.Z.NAMEPLATE];
      case O.AW.BUNDLES:
        return [y.intl.string(y.t.FYFpps), G ? I.Z : k.Z, i.Z.BUNDLE]
    }
  }, [Z, G]), J = (0, m.a)(), Q = l.useMemo(() => J(W.filter(e => {
    var t;
    return e.type === q || e.type === i.Z.VARIANTS_GROUP && (null == (t = e.variants) ? true : t.some(e => e.type === q)) === true
  })), [W, q, J]), X = (0, h.l)(Q);
  l.useEffect(() => {
    (0, C.n)({
      sessionId: D,
      checkpoint: C.a.SHOP_MOUNTED,
      tab: Z,
      unpublishedCategoriesShown: M,
      cacheDisabled: H
    })
  }, []), l.useEffect(() => {
    n || (0, C.n)({
      sessionId: D,
      checkpoint: C.a.SHOP_RENDERED,
      tab: Z,
      unpublishedCategoriesShown: M,
      cacheDisabled: H
    })
  }, [D, M, H, n, Z]);
  let $ = p.Z.useConfig({
    location: "CollectiblesFilterableShop"
  }).showCardsV2;
  return n || null == F ? (0, r.jsx)(_.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      style: {
        backgroundImage: "url(".concat(Y, ")")
      },
      className: j.bannerContainer,
      children: (0, r.jsx)(s.Heading, {
        variant: "heading-xxl/extrabold",
        children: K
      })
    }), (0, r.jsx)("div", {
      className: j.products,
      children: X.slice(40 * (V - 1), 40 * V).map((e, t) => {
        let n = g.Z.getCategory(e.categorySkuId);
        return null == n ? null : (0, r.jsx)(f.k0, {
          newValue: {
            tilePosition: t
          },
          children: $ ? (0, r.jsx)(v.Z, {
            skuId: e.skuId,
            onClickAnalytics: (0, x.wO)(e, Z, w)
          }, e.skuId) : (0, r.jsx)(b.Z, {
            product: e,
            user: F,
            category: n,
            tab: Z
          }, e.skuId)
        }, e.skuId)
      })
    }), X.length > 40 && (0, r.jsx)("div", {
      className: j.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(s.DsT, {
          currentPage: V,
          totalCount: X.length,
          pageSize: 40,
          onPageChange: e => {
            var t;
            d.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == w ? true : w.sessionId,
              page_section: null == w ? true : w.pageSection,
              page_category: null == w ? true : w.pageCategory,
              page_index: e,
              page_size: 40,
              cta_name: "".concat(Z, " page ").concat(e),
              page_type: Z
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