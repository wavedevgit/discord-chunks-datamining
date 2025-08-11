/** Chunk was on 45620 **/
/** chunk id: 795343, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk501638 = require("./501638.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk538314 = require("./538314.js");

function S(e) {
  var t;
  let {
    isFetchingCategories: n,
    isFullScreen: a,
    scrollerRef: S,
    tab: y
  } = e, x = (0, d.sp)(), j = null != (t = null == x ? true : x.sessionId) ? t : "", {
    noCache: T,
    includeUnpublished: P
  } = (0, v.Z)(), L = (0, o.e7)([c.default], () => c.default.getCurrentUser()), {
    skus: k,
    currentPage: I,
    totalCount: N,
    isFetchingResults: A
  } = (0, b.a)(), w = (0, o.Wu)([p.Z], () => p.Z.getProductsBySkus(k)), B = l.useCallback(() => {
    var e;
    null == S || null == (e = S.current) || e.scrollToTop({
      animate: true
    })
  }, [S]), R = null == k ? true : k.join("");
  l.useEffect(() => {
    B()
  }, [R, B]);
  let Z = (0, g.a)(),
    D = l.useMemo(() => Z(w), [Z, w]);
  l.useEffect(() => {
    n || (0, h.n)({
      sessionId: j,
      checkpoint: h.a.SHOP_RENDERED,
      tab: y,
      isFullScreen: a,
      unpublishedCategoriesShown: P,
      cacheDisabled: T
    })
  }, [j, a, P, T, n, y]);
  let M = l.useRef(null),
    {
      setQueryPageSize: F,
      setQueryPageOffset: H,
      queryPageSize: W
    } = (0, f.S)(),
    [V, U] = l.useState(false),
    z = n || A || null == L;
  l.useEffect(() => {
    if (z) return void U(false);
    D.length > 0 && U(true)
  }, [z, D.length]);
  let G = W > 0 && !z && 0 === D.length;
  l.useEffect(() => {
    let e = new ResizeObserver(() => {
      null != M.current && F(Math.floor(5 * getComputedStyle(M.current).gridTemplateColumns.split(/\s+/).length))
    });
    if (null != M.current) return e.observe(M.current), () => e.disconnect()
  }, [F]);
  let q = l.useCallback(e => {
    u.default.track(C.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == x ? true : x.sessionId,
      page_section: null == x ? true : x.pageSection,
      page_category: null == x ? true : x.pageCategory,
      page_index: e,
      page_size: W,
      cta_name: "filter results page ".concat(e),
      page_type: "catalog"
    }), H((e - 1) * W)
  }, [x, W, H]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: i()({
        [E.productsEmpty]: G
      }),
      children: [G && (0, r.jsx)(O.Z, {}), (0, r.jsxs)("div", {
        className: i()(E.products, {
          [E.loadIn]: V
        }),
        ref: M,
        children: [z && [...Array(W)].map((e, t) => (0, r.jsx)(m.K, {}, t)), !z && D.map((e, t) => {
          let n = p.Z.getCategory(e.categorySkuId);
          return null == n ? null : (0, r.jsx)(d.k0, {
            newValue: {
              tilePosition: t
            },
            children: (0, r.jsx)(_.Z, {
              product: e,
              user: L,
              category: n,
              tab: y
            }, e.skuId)
          }, e.skuId)
        })]
      })]
    }), N > W && (0, r.jsx)("div", {
      className: E.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(s.DsT, {
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