/** Chunk was on 45620 **/
/** chunk id: 763891, original params: e,t,r (module,exports,require) **/
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
    isFetchingCategories: r,
    isFullScreen: N,
    scrollerRef: A,
    tab: w
  } = e, B = (0, p.sp)(), R = null != (t = null == B ? true : B.sessionId) ? t : "", {
    noCache: Z,
    includeUnpublished: D
  } = (0, v.Z)(), M = (0, i.e7)([u.default], () => u.default.getCurrentUser()), F = (0, i.e7)([g.Z], () => g.Z.productsWithVariantsAsGroup), [H, W] = l.useState(1), U = (0, c.Fg)(), V = (0, o.ap)(U), [z, G, q] = l.useMemo(() => {
    switch (w) {
      case O.AW.AVATAR_DECORATIONS:
        return [E.intl.string(E.t.dRZYND), V ? T.Z : j.Z, a.Z.AVATAR_DECORATION];
      case O.AW.PROFILE_EFFECTS:
        return [E.intl.string(E.t["1cNjt7"]), V ? I.Z : k.Z, a.Z.PROFILE_EFFECT];
      case O.AW.NAMEPLATES:
        return [E.intl.string(E.t.V68Fq6), V ? L.Z : P.Z, a.Z.NAMEPLATE];
      case O.AW.BUNDLES:
        return [E.intl.string(E.t.FYFppq), V ? x.Z : S.Z, a.Z.BUNDLE]
    }
  }, [w, V]), K = (0, f.a)(), Y = l.useMemo(() => K(F.filter(e => {
    var t;
    return e.type === q || e.type === a.Z.VARIANTS_GROUP && (null == (t = e.variants) ? true : t.some(e => e.type === q)) === true
  })), [F, q, K]), X = (0, m.l)(Y);
  return (l.useEffect(() => {
    (0, b.n)({
      sessionId: R,
      checkpoint: b.a.SHOP_MOUNTED,
      tab: w,
      isFullScreen: N,
      unpublishedCategoriesShown: D,
      cacheDisabled: Z
    })
  }, []), l.useEffect(() => {
    r || (0, b.n)({
      sessionId: R,
      checkpoint: b.a.SHOP_RENDERED,
      tab: w,
      isFullScreen: N,
      unpublishedCategoriesShown: D,
      cacheDisabled: Z
    })
  }, [R, N, D, Z, r, w]), r || null == M) ? (0, n.jsx)(h.Z, {}) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      style: {
        backgroundImage: "url(".concat(G, ")")
      },
      className: y.bannerContainer,
      children: (0, n.jsx)(s.X6q, {
        variant: "heading-xxl/extrabold",
        children: z
      })
    }), (0, n.jsx)("div", {
      className: y.products,
      children: X.slice(40 * (H - 1), 40 * H).map((e, t) => {
        let r = g.Z.getCategory(e.categorySkuId);
        return null == r ? null : (0, n.jsx)(p.k0, {
          newValue: {
            tilePosition: t
          },
          children: (0, n.jsx)(_.Z, {
            product: e,
            user: M,
            category: r,
            tab: w
          }, e.skuId)
        }, e.skuId)
      })
    }), X.length > 40 && (0, n.jsx)("div", {
      className: y.paginationContainer,
      children: (0, n.jsx)("div", {
        children: (0, n.jsx)(s.DsT, {
          currentPage: H,
          totalCount: X.length,
          pageSize: 40,
          onPageChange: e => {
            var t;
            d.default.track(C.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
              collectibles_shop_session_id: null == B ? true : B.sessionId,
              page_section: null == B ? true : B.pageSection,
              page_category: null == B ? true : B.pageCategory,
              page_index: e,
              page_size: 40,
              cta_name: "".concat(w, " page ").concat(e),
              page_type: w
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