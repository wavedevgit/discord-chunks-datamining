/** Chunk was on 45620 **/
/** chunk id: 795343, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk81136 = require("./81136.js"),
  Chunk440617 = require("./440617.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk891131 = require("./891131.js");

function v(e) {
  var t;
  let {
    isFetchingCategories: n,
    isFullScreen: a,
    scrollerRef: v,
    tab: x
  } = e, y = (0, d.sp)(), T = null != (t = null == y ? true : y.sessionId) ? t : "", {
    noCache: L,
    includeUnpublished: j
  } = (0, b.Z)(), k = (0, s.e7)([c.default], () => c.default.getCurrentUser()), {
    skus: B,
    currentPage: I,
    totalCount: N,
    isFetchingResults: P
  } = (0, h.a)(), A = (0, s.Wu)([g.Z], () => g.Z.getProductsBySkus(B)), R = l.useCallback(() => {
    var e;
    null == v || null == (e = v.current) || e.scrollToTop({
      animate: true
    })
  }, [v]), Z = null == B ? true : B.join("");
  l.useEffect(() => {
    R()
  }, [Z, R]);
  let w = (0, f.a)(),
    M = l.useMemo(() => w(A), [w, A]);
  l.useEffect(() => {
    n || (0, m.n)({
      sessionId: T,
      checkpoint: m.a.SHOP_RENDERED,
      tab: x,
      isFullScreen: a,
      unpublishedCategoriesShown: j,
      cacheDisabled: L
    })
  }, [T, a, j, L, n, x]);
  let F = l.useRef(null),
    {
      setQueryPageSize: H,
      setQueryPageOffset: D,
      queryPageSize: W
    } = (0, p.S)(),
    [U, V] = l.useState(false),
    z = n || P || null == k;
  l.useEffect(() => {
    if (z) return void V(false);
    M.length > 0 && V(true)
  }, [z, M.length]);
  let G = W > 0 && !z && 0 === M.length;
  l.useEffect(() => {
    let e = new ResizeObserver(() => {
      null != F.current && H(Math.floor(5 * getComputedStyle(F.current).gridTemplateColumns.split(/\s+/).length))
    });
    if (null != F.current) return e.observe(F.current), () => e.disconnect()
  }, [H]);
  let q = l.useCallback(e => {
    u.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == y ? true : y.sessionId,
      page_section: null == y ? true : y.pageSection,
      page_category: null == y ? true : y.pageCategory,
      page_index: e,
      page_size: W,
      cta_name: "filter results page ".concat(e),
      page_type: "catalog"
    }), D((e - 1) * W)
  }, [y, W, D]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: o()({
        [O.productsEmpty]: G
      }),
      children: [G && (0, r.jsx)(E.Z, {}), (0, r.jsxs)("div", {
        className: o()(O.products, {
          [O.loadIn]: U
        }),
        ref: F,
        children: [z && [...Array(W)].map((e, t) => (0, r.jsx)(_.K, {}, t)), !z && M.map((e, t) => {
          let n = g.Z.getCategory(e.categorySkuId);
          return null == n ? null : (0, r.jsx)(d.k0, {
            newValue: {
              tilePosition: t
            },
            children: (0, r.jsx)(C.Z, {
              product: e,
              user: k,
              category: n,
              tab: x
            }, e.skuId)
          }, e.skuId)
        })]
      })]
    }), N > W && (0, r.jsx)("div", {
      className: O.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(i.DsT, {
          currentPage: I,
          totalCount: N,
          pageSize: W,
          onPageChange: q,
          disablePaginationGap: true
        })
      })
    })]
  })
}