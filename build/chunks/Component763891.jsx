/** Chunk was on 45620 **/
/** chunk id: 763891, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P
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

function P(e) {
  var t;
  let {
    isFetchingCategories: n,
    isFullScreen: P,
    scrollerRef: R,
    tab: Z
  } = e, w = (0, g.sp)(), H = null != (t = null == w ? true : w.sessionId) ? t : "", {
    noCache: F,
    includeUnpublished: D
  } = (0, S.Z)(), M = (0, o.e7)([u.default], () => u.default.getCurrentUser()), W = (0, o.e7)([f.Z], () => f.Z.productsWithVariantsAsGroup), [U, V] = l.useState(1), z = (0, c.Fg)(), G = (0, s.ap)(z), [K, Y, q] = l.useMemo(() => {
    switch (Z) {
      case v.AW.AVATAR_DECORATIONS:
        return [x.intl.string(x.t.dRZYND), G ? k.Z : L.Z, i.Z.AVATAR_DECORATION];
      case v.AW.PROFILE_EFFECTS:
        return [x.intl.string(x.t["1cNjt7"]), G ? A.Z : N.Z, i.Z.PROFILE_EFFECT];
      case v.AW.NAMEPLATES:
        return [x.intl.string(x.t.V68Fq6), G ? B.Z : I.Z, i.Z.NAMEPLATE];
      case v.AW.BUNDLES:
        return [x.intl.string(x.t.FYFppq), G ? j.Z : T.Z, i.Z.BUNDLE]
    }
  }, [Z, G]), Q = (0, C.a)(), J = l.useMemo(() => Q(W.filter(e => {
    var t;
    return e.type === q || e.type === i.Z.VARIANTS_GROUP && (null == (t = e.variants) ? true : t.some(e => e.type === q)) === true
  })), [W, q, Q]), X = (0, h.l)(J);
  l.useEffect(() => {
    (0, _.n)({
      sessionId: H,
      checkpoint: _.a.SHOP_MOUNTED,
      tab: Z,
      isFullScreen: P,
      unpublishedCategoriesShown: D,
      cacheDisabled: F
    })
  }, []), l.useEffect(() => {
    n || (0, _.n)({
      sessionId: H,
      checkpoint: _.a.SHOP_RENDERED,
      tab: Z,
      isFullScreen: P,
      unpublishedCategoriesShown: D,
      cacheDisabled: F
    })
  }, [H, P, D, F, n, Z]);
  let $ = p.Z.useConfig({
    location: "CollectiblesFilterableShop"
  }).showCardsV2;
  return n || null == M ? (0, r.jsx)(m.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      style: {
        backgroundImage: "url(".concat(Y, ")")
      },
      className: y.bannerContainer,
      children: (0, r.jsx)(a.Heading, {
        variant: "heading-xxl/extrabold",
        children: K
      })
    }), (0, r.jsx)("div", {
      className: y.products,
      children: X.slice(40 * (U - 1), 40 * U).map((e, t) => {
        let n = f.Z.getCategory(e.categorySkuId);
        return null == n ? null : (0, r.jsx)(g.k0, {
          newValue: {
            tilePosition: t
          },
          children: $ ? (0, r.jsx)(E.Z, {
            skuId: e.skuId
          }, e.skuId) : (0, r.jsx)(b.Z, {
            product: e,
            user: M,
            category: n,
            tab: Z
          }, e.skuId)
        }, e.skuId)
      })
    }), X.length > 40 && (0, r.jsx)("div", {
      className: y.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(a.DsT, {
          currentPage: U,
          totalCount: X.length,
          pageSize: 40,
          onPageChange: e => {
            var t;
            d.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == w ? true : w.sessionId,
              page_section: null == w ? true : w.pageSection,
              page_category: null == w ? true : w.pageCategory,
              page_index: e,
              page_size: 40,
              cta_name: "".concat(Z, " page ").concat(e),
              page_type: Z
            }), V(e), null == R || null == (t = R.current) || t.scrollToTop({
              animate: true
            })
          },
          disablePaginationGap: true
        })
      })
    })]
  })
}