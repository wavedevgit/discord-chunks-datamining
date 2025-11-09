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
  Chunk786040 = require("./786040.js"),
  Chunk401975 = require("./401975.jsx"),
  Chunk81136 = require("./81136.js"),
  Chunk440617 = require("./440617.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk843084 = require("./843084.js");

function k(e) {
  var t;
  let {
    isFetchingCategories: n,
    scrollerRef: i,
    tab: k
  } = e, I = (0, d.sp)(), T = null != (t = null == I ? true : I.sessionId) ? t : "", {
    noCache: L,
    includeUnpublished: B
  } = (0, O.Z)(), P = (0, a.e7)([c.default], () => c.default.getCurrentUser()), {
    skus: A,
    currentPage: N,
    totalCount: R,
    isFetchingResults: Z
  } = (0, C.a)(), w = (0, a.Wu)([p.Z], () => p.Z.getProductsBySkus(A)), H = l.useCallback(() => {
    var e;
    null == i || null == (e = i.current) || e.scrollToTop({
      animate: true
    })
  }, [i]), D = null == A ? true : A.join("");
  l.useEffect(() => {
    H()
  }, [D, H]);
  let M = (0, f.a)(),
    F = l.useMemo(() => M(w), [M, w]);
  l.useEffect(() => {
    n || (0, m.n)({
      sessionId: T,
      checkpoint: m.a.SHOP_RENDERED,
      tab: k,
      unpublishedCategoriesShown: B,
      cacheDisabled: L
    })
  }, [T, B, L, n, k]);
  let W = l.useRef(null),
    {
      setQueryPageSize: V,
      setQueryPageOffset: U,
      queryPageSize: z
    } = (0, h.S)(),
    [G, K] = l.useState(false),
    Y = n || Z || null == P;
  l.useEffect(() => {
    if (Y) return void K(false);
    F.length > 0 && K(true)
  }, [Y, F.length]);
  let q = z > 0 && !Y && 0 === F.length;
  l.useEffect(() => {
    let e = new ResizeObserver(() => {
      null != W.current && V(Math.floor(5 * getComputedStyle(W.current).gridTemplateColumns.split(/\s+/).length))
    });
    if (null != W.current) return e.observe(W.current), () => e.disconnect()
  }, [V]);
  let J = l.useCallback(e => {
      u.default.track(y.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
        collectibles_shop_session_id: null == I ? true : I.sessionId,
        page_section: null == I ? true : I.pageSection,
        page_category: null == I ? true : I.pageCategory,
        page_index: e,
        page_size: z,
        cta_name: "filter results page ".concat(e),
        page_type: "catalog"
      }), U((e - 1) * z)
    }, [I, z, U]),
    Q = g.Z.useConfig({
      location: "CollectiblesFilterableShop"
    }).showCardsV2;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s()({
        [j.productsEmpty]: q
      }),
      children: [q && (0, r.jsx)(S.Z, {}), (0, r.jsxs)("div", {
        className: s()(j.products, {
          [j.loadIn]: G
        }),
        ref: W,
        children: [Y && [...Array(z)].map((e, t) => Q ? (0, r.jsx)(x.Z, {}, t) : (0, r.jsx)(_.K, {}, t)), !Y && F.map((e, t) => {
          let n = p.Z.getCategory(e.categorySkuId);
          return null == n ? null : (0, r.jsx)(d.k0, {
            newValue: {
              tilePosition: t
            },
            children: Q ? (0, r.jsx)(v.Z, {
              skuId: e.skuId,
              onClickAnalytics: (0, E.wO)(e, k, I)
            }, e.skuId) : (0, r.jsx)(b.Z, {
              product: e,
              user: P,
              category: n,
              tab: k
            }, e.skuId)
          }, e.skuId)
        })]
      })]
    }), R > z && (0, r.jsx)("div", {
      className: j.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(o.DsT, {
          currentPage: N,
          totalCount: R,
          pageSize: z,
          onPageChange: J,
          disablePaginationGap: true
        })
      })
    })]
  })
}