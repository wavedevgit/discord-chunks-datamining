/** Chunk was on 45620 **/
/** chunk id: 763891, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => N
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
  Chunk213875 = require("./213875.js"),
  Chunk274472 = require("./274472.js"),
  Chunk3961 = require("./3961.js"),
  Chunk697751 = require("./697751.js"),
  Chunk38700 = require("./38700.js"),
  Chunk617373 = require("./617373.js"),
  Chunk330840 = require("./330840.js"),
  Chunk750846 = require("./750846.js"),
  Chunk860846 = require("./860846.js");

function N(e) {
  var t;
  let {
    isFetchingCategories: n,
    scrollerRef: N,
    tab: R
  } = e, P = (0, f.sp)(), Z = null != (t = null == P ? true : P.sessionId) ? t : "", {
    noCache: w,
    includeUnpublished: D
  } = (0, v.Z)(), H = (0, s.e7)([u.default], () => u.default.getCurrentUser()), M = (0, s.e7)([g.Z], () => g.Z.productsWithVariantsAsGroup), [F, W] = l.useState(1), U = (0, c.Fg)(), z = (0, o.ap)(U), [V, G, K] = l.useMemo(() => {
    switch (R) {
      case S.AW.AVATAR_DECORATIONS:
        return [x.intl.string(x.t.dRZYNE), z ? j.Z : T.Z, a.Z.AVATAR_DECORATION];
      case S.AW.PROFILE_EFFECTS:
        return [x.intl.string(x.t["1cNjtx"]), z ? B.Z : A.Z, a.Z.PROFILE_EFFECT];
      case S.AW.NAMEPLATES:
        return [x.intl.string(x.t.V68Fqz), z ? I.Z : L.Z, a.Z.NAMEPLATE];
      case S.AW.BUNDLES:
        return [x.intl.string(x.t.FYFpps), z ? k.Z : y.Z, a.Z.BUNDLE]
    }
  }, [R, z]), Y = (0, b.a)(), q = l.useMemo(() => Y(M.filter(e => {
    var t;
    return (e.type === K || e.type === a.Z.VARIANTS_GROUP && (null == (t = e.variants) ? true : t.some(e => e.type === K)) === true) && !S.y8.some(t => {
      let {
        categorySkuId: n
      } = t;
      return n === e.categorySkuId
    })
  })), [M, K, Y]), Q = (0, p.l)(q);
  return (l.useEffect(() => {
    (0, m.n)({
      sessionId: Z,
      checkpoint: m.a.SHOP_MOUNTED,
      tab: R,
      unpublishedCategoriesShown: D,
      cacheDisabled: w
    })
  }, []), l.useEffect(() => {
    n || (0, m.n)({
      sessionId: Z,
      checkpoint: m.a.SHOP_RENDERED,
      tab: R,
      unpublishedCategoriesShown: D,
      cacheDisabled: w
    })
  }, [Z, D, w, n, R]), n || null == H) ? (0, r.jsx)(h.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      style: {
        backgroundImage: "url(".concat(G, ")")
      },
      className: O.bannerContainer,
      children: (0, r.jsx)(i.Heading, {
        variant: "heading-xxl/extrabold",
        children: V
      })
    }), (0, r.jsx)("div", {
      className: O.products,
      children: Q.slice(40 * (F - 1), 40 * F).map((e, t) => null == g.Z.getCategory(e.categorySkuId) ? null : (0, r.jsx)(f.k0, {
        newValue: {
          tilePosition: t
        },
        children: (0, r.jsx)(C.Z, {
          skuId: e.skuId,
          onClickAnalytics: (0, E.wO)(e, R, P)
        }, e.skuId)
      }, e.skuId))
    }), Q.length > 40 && (0, r.jsx)("div", {
      className: O.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(i.DsT, {
          currentPage: F,
          totalCount: Q.length,
          pageSize: 40,
          onPageChange: e => {
            var t;
            d.default.track(_.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == P ? true : P.sessionId,
              page_section: null == P ? true : P.pageSection,
              page_category: null == P ? true : P.pageCategory,
              page_index: e,
              page_size: 40,
              cta_name: "".concat(R, " page ").concat(e),
              page_type: R
            }), W(e), null == N || null == (t = N.current) || t.scrollToTop({
              animate: true
            })
          },
          disablePaginationGap: true
        })
      })
    })]
  })
}