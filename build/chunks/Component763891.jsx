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
    scrollerRef: N,
    tab: A
  } = e, R = (0, f.sp)(), Z = null != (t = null == R ? true : R.sessionId) ? t : "", {
    noCache: w,
    includeUnpublished: H
  } = (0, v.Z)(), D = (0, o.e7)([u.default], () => u.default.getCurrentUser()), M = (0, o.e7)([g.Z], () => g.Z.productsWithVariantsAsGroup), [F, W] = l.useState(1), V = (0, c.Fg)(), U = (0, a.ap)(V), [z, G, K] = l.useMemo(() => {
    switch (A) {
      case x.AW.AVATAR_DECORATIONS:
        return [O.intl.string(O.t.dRZYNE), U ? k.Z : I.Z, i.Z.AVATAR_DECORATION];
      case x.AW.PROFILE_EFFECTS:
        return [O.intl.string(O.t["1cNjtx"]), U ? B.Z : P.Z, i.Z.PROFILE_EFFECT];
      case x.AW.NAMEPLATES:
        return [O.intl.string(O.t.V68Fqz), U ? L.Z : T.Z, i.Z.NAMEPLATE];
      case x.AW.BUNDLES:
        return [O.intl.string(O.t.FYFpps), U ? j.Z : y.Z, i.Z.BUNDLE]
    }
  }, [A, U]), Y = (0, p.a)(), q = l.useMemo(() => Y(M.filter(e => {
    var t;
    return (e.type === K || e.type === i.Z.VARIANTS_GROUP && (null == (t = e.variants) ? true : t.some(e => e.type === K)) === true) && !x.y8.some(t => {
      let {
        categorySkuId: n
      } = t;
      return n === e.categorySkuId
    })
  })), [M, K, Y]), J = (0, m.l)(q);
  return (l.useEffect(() => {
    (0, h.n)({
      sessionId: Z,
      checkpoint: h.a.SHOP_MOUNTED,
      tab: A,
      unpublishedCategoriesShown: H,
      cacheDisabled: w
    })
  }, []), l.useEffect(() => {
    n || (0, h.n)({
      sessionId: Z,
      checkpoint: h.a.SHOP_RENDERED,
      tab: A,
      unpublishedCategoriesShown: H,
      cacheDisabled: w
    })
  }, [Z, H, w, n, A]), n || null == D) ? (0, r.jsx)(C.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      style: {
        backgroundImage: "url(".concat(G, ")")
      },
      className: S.bannerContainer,
      children: (0, r.jsx)(s.Heading, {
        variant: "heading-xxl/extrabold",
        children: z
      })
    }), (0, r.jsx)("div", {
      className: S.products,
      children: J.slice(40 * (F - 1), 40 * F).map((e, t) => null == g.Z.getCategory(e.categorySkuId) ? null : (0, r.jsx)(f.k0, {
        newValue: {
          tilePosition: t
        },
        children: (0, r.jsx)(_.Z, {
          skuId: e.skuId,
          onClickAnalytics: (0, b.wO)(e, A, R)
        }, e.skuId)
      }, e.skuId))
    }), J.length > 40 && (0, r.jsx)("div", {
      className: S.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(s.DsT, {
          currentPage: F,
          totalCount: J.length,
          pageSize: 40,
          onPageChange: e => {
            var t;
            d.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == R ? true : R.sessionId,
              page_section: null == R ? true : R.pageSection,
              page_category: null == R ? true : R.pageCategory,
              page_index: e,
              page_size: 40,
              cta_name: "".concat(A, " page ").concat(e),
              page_type: A
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