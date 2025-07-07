/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => _
});
var r = n(255367),
  l = n(73800),
  o = n(399606),
  i = n(481060),
  a = n(594174),
  s = n(381585),
  c = n(597688),
  u = n(370039),
  d = n(501431),
  p = n(149705),
  f = n(303952),
  g = n(38900),
  h = n(709999),
  b = n(81136),
  m = n(484920);

function _(e) {
  var t;
  let {
    isFetchingCategories: n,
    isFullScreen: _,
    scrollerRef: C,
    tab: O
  } = e, v = (0, s.sp)(), E = null != (t = null == v ? void 0 : v.sessionId) ? t : "", {
    noCache: S,
    includeUnpublished: x
  } = (0, b.Z)(), y = (0, o.e7)([a.default], () => a.default.getCurrentUser()), {
    skus: j,
    currentPage: T,
    totalCount: P
  } = (0, p.a)(), L = (0, o.Wu)([c.Z], () => c.Z.getProductsBySkus(j)), I = l.useCallback(() => {
    var e;
    null == C || null == (e = C.current) || e.scrollToTop({
      animate: !0
    })
  }, [C]), k = (0, u.a)(), B = l.useMemo(() => k(L), [k, L]);
  l.useEffect(() => {
    n || (0, f.n)({
      sessionId: E,
      checkpoint: f.a.SHOP_RENDERED,
      tab: O,
      isFullScreen: _,
      unpublishedCategoriesShown: x,
      cacheDisabled: S
    })
  }, [E, _, x, S, n, O]);
  let N = l.useRef(null),
    {
      setQueryPageSize: A,
      setQueryPageOffset: R,
      queryPageSize: w
    } = (0, d.S)();
  return (l.useEffect(() => {
    if (null != N.current) {
      let e = new ResizeObserver(() => {
        if (null == N.current) return;
        let {
          clientWidth: e
        } = N.current;
        A(Math.floor(5 * Math.max(1, Math.floor(e / 246))))
      });
      return e.observe(N.current), () => e.disconnect()
    }
  }, [A]), n || null == y) ? (0, r.jsx)(g.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: m.products,
      ref: N,
      children: B.map((e, t) => {
        let n = c.Z.getCategory(e.categorySkuId);
        return null == n ? null : (0, r.jsx)(s.k0, {
          newValue: {
            tilePosition: t
          },
          children: (0, r.jsx)(h.Z, {
            product: e,
            user: y,
            category: n,
            tab: O
          }, e.skuId)
        }, e.skuId)
      })
    }), P > w && (0, r.jsx)("div", {
      className: m.paginationContainer,
      children: (0, r.jsx)("div", {
        children: (0, r.jsx)(i.DsT, {
          currentPage: T,
          totalCount: P,
          pageSize: w,
          onPageChange: e => {
            R((e - 1) * w), I()
          },
          disablePaginationGap: !0
        })
      })
    })]
  })
}