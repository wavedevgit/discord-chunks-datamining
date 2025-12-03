/** Chunk was on 45620 **/
/** chunk id: 795343, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk370039 = require("./370039.js"),
  Chunk501431 = require("./501431.js"),
  Chunk149705 = require("./149705.js"),
  Chunk303952 = require("./303952.js"),
  Chunk653126 = require("./653126.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk401975 = require("./401975.jsx"),
  Chunk81136 = require("./81136.js"),
  Chunk440617 = require("./440617.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk891131 = require("./891131.js");
let S = {
  flattenProductVariants: true
};

function y(e) {
  var t;
  let {
    isFetchingCategories: n,
    scrollerRef: i,
    tab: y
  } = e, j = (0, d.sp)(), I = null != (t = null == j ? true : j.sessionId) ? t : "", {
    noCache: k,
    includeUnpublished: T
  } = (0, v.Z)(), L = (0, a.e7)([c.default], () => c.default.getCurrentUser()), {
    skus: P,
    currentPage: B,
    totalCount: N,
    isFetchingResults: A
  } = (0, m.a)(), R = (0, a.Wu)([f.Z], () => f.Z.getProductsBySkus(P)), Z = l.useCallback(() => {
    var e;
    null == i || null == (e = i.current) || e.scrollToTop({
      animate: true
    })
  }, [i]), w = null == P ? true : P.join("");
  l.useEffect(() => {
    Z()
  }, [w, Z]);
  let H = (0, g.a)(),
    D = l.useMemo(() => H(R), [H, R]);
  l.useEffect(() => {
    n || (0, h.n)({
      sessionId: I,
      checkpoint: h.a.SHOP_RENDERED,
      tab: y,
      unpublishedCategoriesShown: T,
      cacheDisabled: k
    })
  }, [I, T, k, n, y]);
  let M = l.useRef(null),
    {
      setQueryPageSize: F,
      setQueryPageOffset: W,
      queryPageSize: V
    } = (0, p.S)(),
    [U, z] = l.useState(false),
    G = n || A || null == L;
  l.useEffect(() => {
    if (G) return void z(false);
    D.length > 0 && z(true)
  }, [G, D.length]);
  let K = V > 0 && !G && 0 === D.length;
  l.useEffect(() => {
    let e = new ResizeObserver(() => {
      null != M.current && F(Math.floor(5 * getComputedStyle(M.current).gridTemplateColumns.split(/\s+/).length))
    });
    if (null != M.current) return e.observe(M.current), () => e.disconnect()
  }, [F]);
  let Y = l.useCallback(e => {
    u.default.track(E.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == j ? true : j.sessionId,
      page_section: null == j ? true : j.pageSection,
      page_category: null == j ? true : j.pageCategory,
      page_index: e,
      page_size: V,
      cta_name: "filter results page ".concat(e),
      page_type: "catalog"
    }), W((e - 1) * V)
  }, [j, V, W]);
  return (0, r.jsxs)(_.zp.Provider, {
    value: S,
    children: [(0, r.jsxs)("div", {
      className: o()({
        [O.productsEmpty]: K
      }),
      children: [K && (0, r.jsx)(x.Z, {}), (0, r.jsxs)("div", {
        className: o()(O.products, {
          [O.loadIn]: U
        }),
        ref: M,
        children: [G && [...Array(V)].map((e, t) => (0, r.jsx)(b.Z, {}, t)), !G && D.map((e, t) => null == f.Z.getCategory(e.categorySkuId) ? null : (0, r.jsx)(d.k0, {
          newValue: {
            tilePosition: t
          },
          children: (0, r.jsx)(C.Z, {
            skuId: e.skuId,
            onClickAnalytics: (0, _.wO)(e, y, j)
          }, e.skuId)
        }, e.skuId))]
      })]
    }), N > V && (0, r.jsx)("div", {
      className: O.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(s.DsT, {
          currentPage: B,
          totalCount: N,
          pageSize: V,
          onPageChange: Y,
          disablePaginationGap: true
        })
      })
    })]
  })
}