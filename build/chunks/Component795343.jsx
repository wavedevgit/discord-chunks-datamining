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
let O = {
  flattenProductVariants: true
};

function y(e) {
  var t;
  let {
    isFetchingCategories: n,
    scrollerRef: a,
    tab: y
  } = e, k = (0, d.sp)(), T = null != (t = null == k ? true : k.sessionId) ? t : "", {
    noCache: j,
    includeUnpublished: L
  } = (0, v.Z)(), I = (0, o.e7)([c.default], () => c.default.getCurrentUser()), {
    skus: A,
    currentPage: B,
    totalCount: N,
    isFetchingResults: R
  } = (0, p.a)(), P = (0, o.Wu)([f.Z], () => f.Z.getProductsBySkus(A)), Z = l.useCallback(() => {
    var e;
    null == a || null == (e = a.current) || e.scrollToTop({
      animate: true
    })
  }, [a]), w = null == A ? true : A.join("");
  l.useEffect(() => {
    Z()
  }, [w, Z]);
  let D = (0, g.a)(),
    H = l.useMemo(() => D(P), [D, P]);
  l.useEffect(() => {
    n || (0, m.n)({
      sessionId: T,
      checkpoint: m.a.SHOP_RENDERED,
      tab: y,
      unpublishedCategoriesShown: L,
      cacheDisabled: j
    })
  }, [T, L, j, n, y]);
  let M = l.useRef(null),
    {
      setQueryPageSize: F,
      setQueryPageOffset: W,
      queryPageSize: U
    } = (0, b.S)(),
    [z, V] = l.useState(false),
    G = n || R || null == I;
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
    u.default.track(_.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == k ? true : k.sessionId,
      page_section: null == k ? true : k.pageSection,
      page_category: null == k ? true : k.pageCategory,
      page_index: e,
      page_size: U,
      cta_name: "filter results page ".concat(e),
      page_type: "catalog"
    }), W((e - 1) * U)
  }, [k, U, W]);
  return (0, r.jsxs)(C.zp.Provider, {
    value: O,
    children: [(0, r.jsxs)("div", {
      className: s()({
        [x.productsEmpty]: K
      }),
      children: [K && (0, r.jsx)(S.Z, {}), (0, r.jsxs)("div", {
        className: s()(x.products, {
          [x.loadIn]: z
        }),
        ref: M,
        children: [G && [...Array(U)].map((e, t) => (0, r.jsx)(E.Z, {}, t)), !G && H.map((e, t) => null == f.Z.getCategory(e.categorySkuId) ? null : (0, r.jsx)(d.k0, {
          newValue: {
            tilePosition: t
          },
          children: (0, r.jsx)(h.Z, {
            skuId: e.skuId,
            onClickAnalytics: (0, C.wO)(e, y, k)
          }, e.skuId)
        }, e.skuId))]
      })]
    }), N > U && (0, r.jsx)("div", {
      className: x.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(i.DsT, {
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