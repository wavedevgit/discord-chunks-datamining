/** Chunk was on 45620 **/
/** chunk id: 795343, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => k
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
  Chunk786040 = require("./786040.jsx"),
  Chunk401975 = require("./401975.jsx"),
  Chunk81136 = require("./81136.js"),
  Chunk440617 = require("./440617.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk891131 = require("./891131.js");

function k(e) {
  var t;
  let {
    isFetchingCategories: n,
    isFullScreen: i,
    scrollerRef: k,
    tab: T
  } = e, L = (0, d.sp)(), I = null != (t = null == L ? true : L.sessionId) ? t : "", {
    noCache: B,
    includeUnpublished: A
  } = (0, O.Z)(), N = (0, o.e7)([c.default], () => c.default.getCurrentUser()), {
    skus: P,
    currentPage: R,
    totalCount: Z,
    isFetchingResults: w
  } = (0, h.a)(), H = (0, o.Wu)([g.Z], () => g.Z.getProductsBySkus(P)), F = l.useCallback(() => {
    var e;
    null == k || null == (e = k.current) || e.scrollToTop({
      animate: true
    })
  }, [k]), D = null == P ? true : P.join("");
  l.useEffect(() => {
    F()
  }, [D, F]);
  let M = (0, p.a)(),
    W = l.useMemo(() => M(H), [M, H]);
  l.useEffect(() => {
    n || (0, _.n)({
      sessionId: I,
      checkpoint: _.a.SHOP_RENDERED,
      tab: T,
      isFullScreen: i,
      unpublishedCategoriesShown: A,
      cacheDisabled: B
    })
  }, [I, i, A, B, n, T]);
  let U = l.useRef(null),
    {
      setQueryPageSize: V,
      setQueryPageOffset: z,
      queryPageSize: G
    } = (0, C.S)(),
    [K, Y] = l.useState(false),
    q = n || w || null == N;
  l.useEffect(() => {
    if (q) return void Y(false);
    W.length > 0 && Y(true)
  }, [q, W.length]);
  let Q = G > 0 && !q && 0 === W.length;
  l.useEffect(() => {
    let e = new ResizeObserver(() => {
      null != U.current && V(Math.floor(5 * getComputedStyle(U.current).gridTemplateColumns.split(/\s+/).length))
    });
    if (null != U.current) return e.observe(U.current), () => e.disconnect()
  }, [V]);
  let J = l.useCallback(e => {
      u.default.track(y.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == L ? true : L.sessionId,
        page_section: null == L ? true : L.pageSection,
        page_category: null == L ? true : L.pageCategory,
        page_index: e,
        page_size: G,
        cta_name: "filter results page ".concat(e),
        page_type: "catalog"
      }), z((e - 1) * G)
    }, [L, G, z]),
    X = f.Z.useConfig({
      location: "CollectiblesFilterableShop"
    }).showCardsV2;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()({
        [j.productsEmpty]: Q
      }),
      children: [Q && (0, r.jsx)(x.Z, {}), (0, r.jsxs)("div", {
        className: s()(j.products, {
          [j.loadIn]: K
        }),
        ref: U,
        children: [q && [...Array(G)].map((e, t) => X ? (0, r.jsx)(S.Z, {}, t) : (0, r.jsx)(m.K, {}, t)), !q && W.map((e, t) => {
          let n = g.Z.getCategory(e.categorySkuId);
          return null == n ? null : (0, r.jsx)(d.k0, {
            newValue: {
              tilePosition: t
            },
            children: X ? (0, r.jsx)(E.Z, {
              skuId: e.skuId,
              onClickAnalytics: (0, v.wO)(e, T, L)
            }, e.skuId) : (0, r.jsx)(b.Z, {
              product: e,
              user: N,
              category: n,
              tab: T
            }, e.skuId)
          }, e.skuId)
        })]
      })]
    }), Z > G && (0, r.jsx)("div", {
      className: j.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(a.DsT, {
          currentPage: R,
          totalCount: Z,
          pageSize: G,
          onPageChange: J,
          disablePaginationGap: true
        })
      })
    })]
  })
}