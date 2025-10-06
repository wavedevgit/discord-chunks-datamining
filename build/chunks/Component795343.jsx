/** Chunk was on 45620 **/
/** chunk id: 795343, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
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
  Chunk128922 = require("./128922.js"),
  Chunk370039 = require("./370039.js"),
  Chunk501431 = require("./501431.js"),
  Chunk149705 = require("./149705.js"),
  Chunk303952 = require("./303952.js"),
  Chunk38900 = require("./38900.jsx"),
  Chunk709999 = require("./709999.jsx"),
  Chunk653126 = require("./653126.jsx"),
  Chunk401975 = require("./401975.jsx"),
  Chunk81136 = require("./81136.js"),
  Chunk440617 = require("./440617.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk891131 = require("./891131.js");

function y(e) {
  var t;
  let {
    isFetchingCategories: n,
    isFullScreen: a,
    scrollerRef: y,
    tab: j
  } = e, L = (0, d.sp)(), k = null != (t = null == L ? true : L.sessionId) ? t : "", {
    noCache: I,
    includeUnpublished: P
  } = (0, v.Z)(), N = (0, i.e7)([c.default], () => c.default.getCurrentUser()), {
    skus: B,
    currentPage: A,
    totalCount: R,
    isFetchingResults: Z
  } = (0, h.a)(), w = (0, i.Wu)([g.Z], () => g.Z.getProductsBySkus(B)), H = l.useCallback(() => {
    var e;
    null == y || null == (e = y.current) || e.scrollToTop({
      animate: true
    })
  }, [y]), F = null == B ? true : B.join("");
  l.useEffect(() => {
    H()
  }, [F, H]);
  let D = (0, f.a)(),
    M = l.useMemo(() => D(w), [D, w]);
  l.useEffect(() => {
    n || (0, _.n)({
      sessionId: k,
      checkpoint: _.a.SHOP_RENDERED,
      tab: j,
      isFullScreen: a,
      unpublishedCategoriesShown: P,
      cacheDisabled: I
    })
  }, [k, a, P, I, n, j]);
  let W = l.useRef(null),
    {
      setQueryPageSize: U,
      setQueryPageOffset: V,
      queryPageSize: z
    } = (0, C.S)(),
    [G, K] = l.useState(false),
    q = n || Z || null == N;
  l.useEffect(() => {
    if (q) return void K(false);
    M.length > 0 && K(true)
  }, [q, M.length]);
  let Y = z > 0 && !q && 0 === M.length;
  l.useEffect(() => {
    let e = new ResizeObserver(() => {
      null != W.current && U(Math.floor(5 * getComputedStyle(W.current).gridTemplateColumns.split(/\s+/).length))
    });
    if (null != W.current) return e.observe(W.current), () => e.disconnect()
  }, [U]);
  let X = l.useCallback(e => {
      u.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == L ? true : L.sessionId,
        page_section: null == L ? true : L.pageSection,
        page_category: null == L ? true : L.pageCategory,
        page_index: e,
        page_size: z,
        cta_name: "filter results page ".concat(e),
        page_type: "catalog"
      }), V((e - 1) * z)
    }, [L, z, V]),
    Q = p.Z.useConfig({
      location: "CollectiblesFilterableShop"
    }).showCardsV2;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()({
        [T.productsEmpty]: Y
      }),
      children: [Y && (0, r.jsx)(x.Z, {}), (0, r.jsxs)("div", {
        className: s()(T.products, {
          [T.loadIn]: G
        }),
        ref: W,
        children: [q && [...Array(z)].map((e, t) => Q ? (0, r.jsx)(S.Z, {}, t) : (0, r.jsx)(m.K, {}, t)), !q && M.map((e, t) => {
          let n = g.Z.getCategory(e.categorySkuId);
          return null == n ? null : (0, r.jsx)(d.k0, {
            newValue: {
              tilePosition: t
            },
            children: Q ? (0, r.jsx)(E.Z, {
              skuId: e.skuId
            }, e.skuId) : (0, r.jsx)(b.Z, {
              product: e,
              user: N,
              category: n,
              tab: j
            }, e.skuId)
          }, e.skuId)
        })]
      })]
    }), R > z && (0, r.jsx)("div", {
      className: T.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(o.DsT, {
          currentPage: A,
          totalCount: R,
          pageSize: z,
          onPageChange: X,
          disablePaginationGap: true
        })
      })
    })]
  })
}