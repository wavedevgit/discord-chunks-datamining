/** Chunk was on 45620 **/
/** chunk id: 795343, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
let x = {
  flattenProductVariants: true
};

function y(e) {
  var t;
  let {
    isFetchingCategories: n,
    scrollerRef: i,
    tab: y
  } = e, T = (0, d.sp)(), j = null != (t = null == T ? true : T.sessionId) ? t : "", {
    noCache: k,
    includeUnpublished: I
  } = (0, E.Z)(), L = (0, o.e7)([c.default], () => c.default.getCurrentUser()), {
    skus: B,
    currentPage: A,
    totalCount: N,
    isFetchingResults: P
  } = (0, m.a)(), R = (0, o.Wu)([g.Z], () => g.Z.getProductsBySkus(B)), Z = l.useCallback(() => {
    var e;
    null == i || null == (e = i.current) || e.scrollToTop({
      animate: true
    })
  }, [i]), w = null == B ? true : B.join("");
  l.useEffect(() => {
    Z()
  }, [w, Z]);
  let D = (0, f.a)(),
    H = l.useMemo(() => D(R), [D, R]);
  l.useEffect(() => {
    n || (0, C.n)({
      sessionId: j,
      checkpoint: C.a.SHOP_RENDERED,
      tab: y,
      unpublishedCategoriesShown: I,
      cacheDisabled: k
    })
  }, [j, I, k, n, y]);
  let M = l.useRef(null),
    {
      setQueryPageSize: F,
      setQueryPageOffset: W,
      queryPageSize: U
    } = (0, p.S)(),
    [z, V] = l.useState(false),
    G = n || P || null == L;
  l.useEffect(() => {
    if (G) return void V(false);
    H.length > 0 && V(true)
  }, [G, H.length]);
  let K = U > 0 && !G && 0 === H.length;
  l.useEffect(() => {
    let e = new ResizeObserver(() => {
      null != M.current && F(Math.floor(5 * getComputedStyle(M.current).gridTemplateColumns.split(/\s+/).length))
    });
    if (null != M.current) return e.observe(M.current), () => e.disconnect()
  }, [F]);
  let Y = l.useCallback(e => {
    u.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == T ? true : T.sessionId,
      page_section: null == T ? true : T.pageSection,
      page_category: null == T ? true : T.pageCategory,
      page_index: e,
      page_size: U,
      cta_name: "filter results page ".concat(e),
      page_type: "catalog"
    }), W((e - 1) * U)
  }, [T, U, W]);
  return (0, r.jsxs)(_.zp.Provider, {
    value: x,
    children: [(0, r.jsxs)("div", {
      className: s()({
        [O.productsEmpty]: K
      }),
      children: [K && (0, r.jsx)(v.Z, {}), (0, r.jsxs)("div", {
        className: s()(O.products, {
          [O.loadIn]: z
        }),
        ref: M,
        children: [G && [...Array(U)].map((e, t) => (0, r.jsx)(b.Z, {}, t)), !G && H.map((e, t) => null == g.Z.getCategory(e.categorySkuId) ? null : (0, r.jsx)(d.k0, {
          newValue: {
            tilePosition: t
          },
          children: (0, r.jsx)(h.Z, {
            skuId: e.skuId,
            onClickAnalytics: (0, _.wO)(e, y, T)
          }, e.skuId)
        }, e.skuId))]
      })]
    }), N > U && (0, r.jsx)("div", {
      className: O.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(a.DsT, {
          currentPage: A,
          totalCount: N,
          pageSize: U,
          onPageChange: Y,
          disablePaginationGap: true
        })
      })
    })]
  })
}