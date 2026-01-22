/** Chunk was on 59275 **/
/** chunk id: 685533, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => _
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
let O = {
  flattenProductVariants: true
};

function _(e) {
  var t;
  let {
    isFetchingCategories: l,
    scrollerRef: s,
    tab: _
  } = e, y = (0, d.uM)(), j = null != (t = null == y ? true : y.sessionId) ? t : "", {
    noCache: L,
    includeUnpublished: T
  } = (0, A.A)(), I = (0, i.bG)([c.default], () => c.default.getCurrentUser()), {
    skus: N,
    currentPage: k,
    totalCount: R,
    isFetchingResults: P
  } = (0, p.S)(), D = (0, i.yK)([f.A], () => f.A.getProductsBySkus(N)), w = r.useCallback(() => {
    var e;
    null == s || null == (e = s.current) || e.scrollToTop({
      animate: true
    })
  }, [s]), B = null == N ? true : N.join("");
  r.useEffect(() => {
    w()
  }, [B, w]);
  let M = (0, b.p)(),
    H = r.useMemo(() => M(D), [M, D]);
  r.useEffect(() => {
    l || (0, m.z)({
      sessionId: j,
      checkpoint: m.t.SHOP_RENDERED,
      tab: _,
      unpublishedCategoriesShown: T,
      cacheDisabled: L
    })
  }, [j, T, L, l, _]);
  let G = r.useRef(null),
    {
      setQueryPageSize: F,
      setQueryPageOffset: U,
      queryPageSize: z
    } = (0, g.v)(),
    [V, K] = r.useState(false),
    W = l || P || null == I;
  r.useEffect(() => {
    W ? K(false) : H.length > 0 && K(true)
  }, [W, H.length]);
  let Y = z > 0 && !W && 0 === H.length;
  r.useEffect(() => {
    let e = new ResizeObserver(() => {
      null == G.current || F(Math.floor(5 * getComputedStyle(G.current).gridTemplateColumns.split(/\s+/).length))
    });
    if (null != G.current) return e.observe(G.current), () => e.disconnect()
  }, [F]);
  let q = r.useCallback(e => {
    u.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
      collectibles_shop_session_id: null == y ? true : y.sessionId,
      page_section: null == y ? true : y.pageSection,
      page_category: null == y ? true : y.pageCategory,
      page_index: e,
      page_size: z,
      cta_name: "filter results page ".concat(e),
      page_type: "catalog"
    }), U((e - 1) * z)
  }, [y, z, U]);
  return (0, n.jsxs)(E.v3.Provider, {
    value: O,
    children: [(0, n.jsxs)("div", {
      className: a()({
        [C.oE]: Y
      }),
      children: [Y && (0, n.jsx)(x.A, {}), (0, n.jsxs)("div", {
        className: a()(C.ZE, {
          [C.Kp]: V
        }),
        ref: G,
        children: [W && [...Array(z)].map((e, t) => (0, n.jsx)(v.A, {}, t)), !W && H.map((e, t) => null == f.A.getCategory(e.categorySkuId) ? null : (0, n.jsx)(d.R9, {
          newValue: {
            tilePosition: t
          },
          children: (0, n.jsx)(h.A, {
            skuId: e.skuId,
            onClickAnalytics: (0, E.UU)(e, _, y)
          }, e.skuId)
        }, e.skuId))]
      })]
    }), R > z && (0, n.jsx)("div", {
      className: C.Ej,
      children: (0, n.jsx)("div", {
        children: (0, n.jsx)(o.mgR, {
          currentPage: k,
          totalCount: R,
          pageSize: z,
          onPageChange: q,
          disablePaginationGap: true
        })
      })
    })]
  })
}