/** Chunk was on 59275 **/
/** chunk id: 685533, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk511265 = require("./511265.js"),
  Chunk365491 = require("./365491.js"),
  Chunk856686 = require("./856686.js"),
  Chunk100057 = require("./100057.js"),
  Chunk751304 = require("./751304.jsx"),
  Chunk561769 = require("./561769.js"),
  Chunk484469 = require("./484469.jsx"),
  Chunk998694 = require("./998694.js"),
  Chunk438166 = require("./438166.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk695865 = require("./695865.js");
let x = {
  flattenProductVariants: true
};

function O(e) {
  var t;
  let {
    isFetchingCategories: n,
    scrollerRef: s,
    tab: O
  } = e, y = (0, d.uM)(), j = null != (t = null == y ? true : y.sessionId) ? t : "", {
    noCache: L,
    includeUnpublished: T
  } = (0, v.A)(), I = (0, i.bG)([c.default], () => c.default.getCurrentUser()), {
    skus: k,
    currentPage: N,
    totalCount: R,
    isFetchingResults: P
  } = (0, p.S)(), B = (0, i.yK)([g.A], () => g.A.getProductsBySkus(k)), w = l.useCallback(() => {
    var e;
    null == s || null == (e = s.current) || e.scrollToTop({
      animate: true
    })
  }, [s]), D = null == k ? true : k.join("");
  l.useEffect(() => {
    w()
  }, [D, w]);
  let M = (0, f.p)(),
    H = l.useMemo(() => M(B), [M, B]);
  l.useEffect(() => {
    n || (0, h.z)({
      sessionId: j,
      checkpoint: h.t.SHOP_RENDERED,
      tab: O,
      unpublishedCategoriesShown: T,
      cacheDisabled: L
    })
  }, [j, T, L, n, O]);
  let G = l.useRef(null),
    {
      setQueryPageSize: U,
      setQueryPageOffset: F,
      queryPageSize: V
    } = (0, m.v)(),
    [z, K] = l.useState(false),
    W = n || P || null == I;
  l.useEffect(() => {
    W ? K(false) : H.length > 0 && K(true)
  }, [W, H.length]);
  let Y = V > 0 && !W && 0 === H.length;
  l.useEffect(() => {
    let e = new ResizeObserver(() => {
      null == G.current || U(Math.floor(5 * getComputedStyle(G.current).gridTemplateColumns.split(/\s+/).length))
    });
    if (null != G.current) return e.observe(G.current), () => e.disconnect()
  }, [U]);
  let q = l.useCallback(e => {
    u.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == y ? true : y.sessionId,
      page_section: null == y ? true : y.pageSection,
      page_category: null == y ? true : y.pageCategory,
      page_index: e,
      page_size: V,
      cta_name: "filter results page ".concat(e),
      page_type: "catalog"
    }), F((e - 1) * V)
  }, [y, V, F]);
  return (0, r.jsxs)(_.v3.Provider, {
    value: x,
    children: [(0, r.jsxs)("div", {
      className: a()({
        [S.oE]: Y
      }),
      children: [Y && (0, r.jsx)(C.A, {}), (0, r.jsxs)("div", {
        className: a()(S.ZE, {
          [S.Kp]: z
        }),
        ref: G,
        children: [W && [...Array(V)].map((e, t) => (0, r.jsx)(E.A, {}, t)), !W && H.map((e, t) => null == g.A.getCategory(e.categorySkuId) ? null : (0, r.jsx)(d.R9, {
          newValue: {
            tilePosition: t
          },
          children: (0, r.jsx)(b.A, {
            skuId: e.skuId,
            onClickAnalytics: (0, _.UU)(e, O, y)
          }, e.skuId)
        }, e.skuId))]
      })]
    }), R > V && (0, r.jsx)("div", {
      className: S.Ej,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(o.mgR, {
          currentPage: N,
          totalCount: R,
          pageSize: V,
          onPageChange: q,
          disablePaginationGap: true
        })
      })
    })]
  })
}