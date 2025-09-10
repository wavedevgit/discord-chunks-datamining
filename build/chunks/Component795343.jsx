/** Chunk was on 45620 **/
/** chunk id: 795343, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk81136 = require("./81136.js"),
  Chunk440617 = require("./440617.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk891131 = require("./891131.js");

function O(e) {
  var t;
  let {
    isFetchingCategories: n,
    isFullScreen: a,
    scrollerRef: O,
    tab: x
  } = e, y = (0, d.sp)(), T = null != (t = null == y ? true : y.sessionId) ? t : "", {
    noCache: L,
    includeUnpublished: j
  } = (0, b.Z)(), k = (0, i.e7)([c.default], () => c.default.getCurrentUser()), {
    skus: B,
    currentPage: I,
    totalCount: N,
    isFetchingResults: A
  } = (0, h.a)(), P = (0, i.Wu)([g.Z], () => g.Z.getProductsBySkus(B)), R = l.useCallback(() => {
    var e;
    null == O || null == (e = O.current) || e.scrollToTop({
      animate: true
    })
  }, [O]), Z = null == B ? true : B.join("");
  l.useEffect(() => {
    R()
  }, [Z, R]);
  let w = (0, f.a)(),
    F = l.useMemo(() => w(P), [w, P]);
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
  let H = l.useRef(null),
    {
      setQueryPageSize: D,
      setQueryPageOffset: M,
      queryPageSize: W
    } = (0, p.S)(),
    [U, V] = l.useState(false),
    z = n || A || null == k;
  l.useEffect(() => {
    if (z) return void V(false);
    F.length > 0 && V(true)
  }, [z, F.length]);
  let G = W > 0 && !z && 0 === F.length;
  l.useEffect(() => {
    let e = new ResizeObserver(() => {
      null != H.current && D(Math.floor(5 * getComputedStyle(H.current).gridTemplateColumns.split(/\s+/).length))
    });
    if (null != H.current) return e.observe(H.current), () => e.disconnect()
  }, [D]);
  let q = l.useCallback(e => {
    u.default.track(S.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == y ? true : y.sessionId,
      page_section: null == y ? true : y.pageSection,
      page_category: null == y ? true : y.pageCategory,
      page_index: e,
      page_size: W,
      cta_name: "filter results page ".concat(e),
      page_type: "catalog"
    }), M((e - 1) * W)
  }, [y, W, M]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()({
        [v.productsEmpty]: G
      }),
      children: [G && (0, r.jsx)(E.Z, {}), (0, r.jsxs)("div", {
        className: s()(v.products, {
          [v.loadIn]: U
        }),
        ref: H,
        children: [z && [...Array(W)].map((e, t) => (0, r.jsx)(_.K, {}, t)), !z && F.map((e, t) => {
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
      className: v.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(o.DsT, {
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