/** Chunk was on 45620 **/
/** chunk id: 795343, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => T
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
  Chunk81136 = require("./81136.js"),
  Chunk440617 = require("./440617.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk891131 = require("./891131.js");

function T(e) {
  var t;
  let {
    isFetchingCategories: n,
    isFullScreen: a,
    scrollerRef: T,
    tab: y
  } = e, L = (0, d.sp)(), j = null != (t = null == L ? true : L.sessionId) ? t : "", {
    noCache: k,
    includeUnpublished: I
  } = (0, S.Z)(), P = (0, i.e7)([c.default], () => c.default.getCurrentUser()), {
    skus: N,
    currentPage: B,
    totalCount: A,
    isFetchingResults: R
  } = (0, _.a)(), Z = (0, i.Wu)([g.Z], () => g.Z.getProductsBySkus(N)), w = l.useCallback(() => {
    var e;
    null == T || null == (e = T.current) || e.scrollToTop({
      animate: true
    })
  }, [T]), F = null == N ? true : N.join("");
  l.useEffect(() => {
    w()
  }, [F, w]);
  let H = (0, f.a)(),
    M = l.useMemo(() => H(Z), [H, Z]);
  l.useEffect(() => {
    n || (0, h.n)({
      sessionId: j,
      checkpoint: h.a.SHOP_RENDERED,
      tab: y,
      isFullScreen: a,
      unpublishedCategoriesShown: I,
      cacheDisabled: k
    })
  }, [j, a, I, k, n, y]);
  let D = l.useRef(null),
    {
      setQueryPageSize: W,
      setQueryPageOffset: U,
      queryPageSize: V
    } = (0, C.S)(),
    [z, G] = l.useState(false),
    K = n || R || null == P;
  l.useEffect(() => {
    if (K) return void G(false);
    M.length > 0 && G(true)
  }, [K, M.length]);
  let q = V > 0 && !K && 0 === M.length;
  l.useEffect(() => {
    let e = new ResizeObserver(() => {
      null != D.current && W(Math.floor(5 * getComputedStyle(D.current).gridTemplateColumns.split(/\s+/).length))
    });
    if (null != D.current) return e.observe(D.current), () => e.disconnect()
  }, [W]);
  let Y = l.useCallback(e => {
      u.default.track(x.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == L ? true : L.sessionId,
        page_section: null == L ? true : L.pageSection,
        page_category: null == L ? true : L.pageCategory,
        page_index: e,
        page_size: V,
        cta_name: "filter results page ".concat(e),
        page_type: "catalog"
      }), U((e - 1) * V)
    }, [L, V, U]),
    X = p.Z.useConfig({
      location: "CollectiblesFilterableShop"
    }).showCardsV2;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()({
        [O.productsEmpty]: q
      }),
      children: [q && (0, r.jsx)(v.Z, {}), (0, r.jsxs)("div", {
        className: s()(O.products, {
          [O.loadIn]: z
        }),
        ref: D,
        children: [K && [...Array(V)].map((e, t) => (0, r.jsx)(m.K, {}, t)), !K && M.map((e, t) => {
          let n = g.Z.getCategory(e.categorySkuId);
          return null == n ? null : (0, r.jsx)(d.k0, {
            newValue: {
              tilePosition: t
            },
            children: X ? (0, r.jsx)(E.Z, {
              skuId: e.skuId
            }, e.skuId) : (0, r.jsx)(b.Z, {
              product: e,
              user: P,
              category: n,
              tab: y
            }, e.skuId)
          }, e.skuId)
        })]
      })]
    }), A > V && (0, r.jsx)("div", {
      className: O.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(o.DsT, {
          currentPage: B,
          totalCount: A,
          pageSize: V,
          onPageChange: Y,
          disablePaginationGap: true
        })
      })
    })]
  })
}