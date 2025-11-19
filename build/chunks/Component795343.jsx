/** Chunk was on 45620 **/
/** chunk id: 795343, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk786040 = require("./786040.js"),
  Chunk401975 = require("./401975.jsx"),
  Chunk81136 = require("./81136.js"),
  Chunk440617 = require("./440617.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk891131 = require("./891131.js");
let k = {
  flattenProductVariants: true
};

function I(e) {
  var t;
  let {
    isFetchingCategories: n,
    scrollerRef: i,
    tab: I
  } = e, T = (0, d.sp)(), L = null != (t = null == T ? true : T.sessionId) ? t : "", {
    noCache: B,
    includeUnpublished: P
  } = (0, O.Z)(), N = (0, s.e7)([c.default], () => c.default.getCurrentUser()), {
    skus: A,
    currentPage: R,
    totalCount: Z,
    isFetchingResults: w
  } = (0, h.a)(), H = (0, s.Wu)([f.Z], () => f.Z.getProductsBySkus(A)), D = l.useCallback(() => {
    var e;
    null == i || null == (e = i.current) || e.scrollToTop({
      animate: true
    })
  }, [i]), M = null == A ? true : A.join("");
  l.useEffect(() => {
    D()
  }, [M, D]);
  let F = (0, p.a)(),
    W = l.useMemo(() => F(H), [F, H]);
  l.useEffect(() => {
    n || (0, C.n)({
      sessionId: L,
      checkpoint: C.a.SHOP_RENDERED,
      tab: I,
      unpublishedCategoriesShown: P,
      cacheDisabled: B
    })
  }, [L, P, B, n, I]);
  let V = l.useRef(null),
    {
      setQueryPageSize: U,
      setQueryPageOffset: z,
      queryPageSize: G
    } = (0, m.S)(),
    [K, Y] = l.useState(false),
    q = n || w || null == N;
  l.useEffect(() => {
    if (q) return void Y(false);
    W.length > 0 && Y(true)
  }, [q, W.length]);
  let J = G > 0 && !q && 0 === W.length;
  l.useEffect(() => {
    let e = new ResizeObserver(() => {
      null != V.current && U(Math.floor(5 * getComputedStyle(V.current).gridTemplateColumns.split(/\s+/).length))
    });
    if (null != V.current) return e.observe(V.current), () => e.disconnect()
  }, [U]);
  let Q = l.useCallback(e => {
      u.default.track(y.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == T ? true : T.sessionId,
        page_section: null == T ? true : T.pageSection,
        page_category: null == T ? true : T.pageCategory,
        page_index: e,
        page_size: G,
        cta_name: "filter results page ".concat(e),
        page_type: "catalog"
      }), z((e - 1) * G)
    }, [T, G, z]),
    X = g.Z.useConfig({
      location: "CollectiblesFilterableShop"
    }).showCardsV2;
  return (0, r.jsxs)(x.zp.Provider, {
    value: k,
    children: [(0, r.jsxs)("div", {
      className: a()({
        [j.productsEmpty]: J
      }),
      children: [J && (0, r.jsx)(S.Z, {}), (0, r.jsxs)("div", {
        className: a()(j.products, {
          [j.loadIn]: K
        }),
        ref: V,
        children: [q && [...Array(G)].map((e, t) => X ? (0, r.jsx)(E.Z, {}, t) : (0, r.jsx)(_.K, {}, t)), !q && W.map((e, t) => {
          let n = f.Z.getCategory(e.categorySkuId);
          return null == n ? null : (0, r.jsx)(d.k0, {
            newValue: {
              tilePosition: t
            },
            children: X ? (0, r.jsx)(v.Z, {
              skuId: e.skuId,
              onClickAnalytics: (0, x.wO)(e, I, T)
            }, e.skuId) : (0, r.jsx)(b.Z, {
              product: e,
              user: N,
              category: n,
              tab: I
            }, e.skuId)
          }, e.skuId)
        })]
      })]
    }), Z > G && (0, r.jsx)("div", {
      className: j.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(o.DsT, {
          currentPage: R,
          totalCount: Z,
          pageSize: G,
          onPageChange: Q,
          disablePaginationGap: true
        })
      })
    })]
  })
}