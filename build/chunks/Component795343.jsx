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
  Chunk466875 = require("./466875.js");
let _ = {
  flattenProductVariants: true
};

function y(e) {
  var t;
  let {
    isFetchingCategories: n,
    scrollerRef: a,
    tab: y
  } = e, j = (0, d.sp)(), k = null != (t = null == j ? true : j.sessionId) ? t : "", {
    noCache: T,
    includeUnpublished: I
  } = (0, v.Z)(), L = (0, i.e7)([c.default], () => c.default.getCurrentUser()), {
    skus: A,
    currentPage: B,
    totalCount: N,
    isFetchingResults: R
  } = (0, p.a)(), P = (0, i.Wu)([f.Z], () => f.Z.getProductsBySkus(A)), w = l.useCallback(() => {
    var e;
    null == a || null == (e = a.current) || e.scrollToTop({
      animate: true
    })
  }, [a]), Z = null == A ? true : A.join("");
  l.useEffect(() => {
    w()
  }, [Z, w]);
  let D = (0, g.a)(),
    M = l.useMemo(() => D(P), [D, P]);
  l.useEffect(() => {
    n || (0, h.n)({
      sessionId: k,
      checkpoint: h.a.SHOP_RENDERED,
      tab: y,
      unpublishedCategoriesShown: I,
      cacheDisabled: T
    })
  }, [k, I, T, n, y]);
  let H = l.useRef(null),
    {
      setQueryPageSize: F,
      setQueryPageOffset: W,
      queryPageSize: U
    } = (0, b.S)(),
    [z, V] = l.useState(false),
    G = n || R || null == L;
  l.useEffect(() => {
    if (G) return void V(false);
    M.length > 0 && V(true)
  }, [G, M.length]);
  let K = U > 0 && !G && 0 === M.length;
  l.useEffect(() => {
    let e = new ResizeObserver(() => {
      null != H.current && F(Math.floor(5 * getComputedStyle(H.current).gridTemplateColumns.split(/\s+/).length))
    });
    if (null != H.current) return e.observe(H.current), () => e.disconnect()
  }, [F]);
  let Y = l.useCallback(e => {
    u.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == j ? true : j.sessionId,
      page_section: null == j ? true : j.pageSection,
      page_category: null == j ? true : j.pageCategory,
      page_index: e,
      page_size: U,
      cta_name: "filter results page ".concat(e),
      page_type: "catalog"
    }), W((e - 1) * U)
  }, [j, U, W]);
  return (0, r.jsxs)(C.zp.Provider, {
    value: _,
    children: [(0, r.jsxs)("div", {
      className: s()({
        [O.productsEmpty]: K
      }),
      children: [K && (0, r.jsx)(x.Z, {}), (0, r.jsxs)("div", {
        className: s()(O.products, {
          [O.loadIn]: z
        }),
        ref: H,
        children: [G && [...Array(U)].map((e, t) => (0, r.jsx)(E.Z, {}, t)), !G && M.map((e, t) => null == f.Z.getCategory(e.categorySkuId) ? null : (0, r.jsx)(d.k0, {
          newValue: {
            tilePosition: t
          },
          children: (0, r.jsx)(m.Z, {
            skuId: e.skuId,
            onClickAnalytics: (0, C.wO)(e, y, j)
          }, e.skuId)
        }, e.skuId))]
      })]
    }), N > U && (0, r.jsx)("div", {
      className: O.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(o.DsT, {
          currentPage: B,
          totalCount: N,
          pageSize: U,
          onPageChange: Y,
          disablePaginationGap: true
        })
      })
    })]
  })
}