/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => j
});
var r = n(255367),
  l = n(73800),
  a = n(120356),
  o = n.n(a),
  i = n(180650),
  s = n(442837),
  c = n(607070),
  u = n(594174),
  d = n(960048),
  p = n(381585),
  f = n(597688),
  b = n(1870),
  g = n(744112),
  h = n(193227),
  m = n(752053),
  _ = n(81136),
  C = n(312030),
  v = n(566564),
  O = n(763891),
  S = n(215023),
  x = n(484920);
let E = [S.AW.HOME, S.AW.ORBS],
  y = [S.AW.AVATAR_DECORATIONS, S.AW.PROFILE_EFFECTS, S.AW.NAMEPLATES, S.AW.BUNDLES];

function j(e) {
  let {
    tab: t,
    isFullScreen: n,
    scrollerRef: a,
    sortedCategories: u,
    transitionToTab: d,
    transitionState: f,
    updateAnalyticsState: b,
    refreshCategories: g,
    setIsGiftEasterEggEnabled: _,
    isGiftEasterEggEnabled: j
  } = e, T = k();
  P(T);
  let I = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
    {
      handlePageChange: L,
      currentPage: B,
      setCategoryRef: w,
      scrollToCategory: N
    } = (0, C.h)({
      scrollerRef: a,
      sortedCategories: u
    }),
    A = l.useCallback(async (e, t, r) => {
      b(e, t);
      let l = r && !n && !I,
        a = t === i.T.ORB ? S.AW.ORBS : S.AW.CATALOG;
      await d(a, l), null != t && N(t)
    }, [n, I, d, N, b]);
  return null != T ? (0, r.jsx)(m.Z, {
    onRetry: g,
    errorMessage: T,
    errorOrigin: m.i.SHOP_PAGE
  }) : E.includes(t) ? (0, r.jsx)(v.Z, {
    isFullScreen: n,
    scrollerRef: a,
    handleTransition: A,
    tab: t,
    transitionState: f
  }) : (0, r.jsx)("div", {
    className: x.pageWrapper,
    children: (0, r.jsx)("main", {
      className: o()(x.page, {
        [x.pageFullscreen]: n
      }),
      children: y.includes(t) ? (0, r.jsx)(O.Z, {
        isFullScreen: n,
        scrollerRef: a,
        tab: t
      }, t) : (0, r.jsx)(p.k0, {
        newValue: {
          pageIndex: B
        },
        children: (0, r.jsx)(h.Z, {
          isFullScreen: n,
          sortedCategories: u,
          setCategoryRef: w,
          setIsGiftEasterEggEnabled: _,
          isGiftEasterEggEnabled: j,
          currentPage: B,
          handlePageChange: L
        })
      })
    })
  })
}
let k = () => (0, s.e7)([f.Z, b.Z], () => null != f.Z.error ? "shop load fetch categories error: ".concat(f.Z.error.message) : null != b.Z.claimError ? "shop load claim error: ".concat(b.Z.claimError.message) : null != b.Z.fetchError ? "shop load fetch purchase error: ".concat(b.Z.fetchError.message) : void 0),
  P = e => {
    let t = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
      n = (0, g.b)("Collectibles Shop Button"),
      {
        noCache: r,
        includeUnpublished: a
      } = (0, _.Z)();
    l.useEffect(() => {
      var l, o;
      null != e && d.Z.captureMessage(e, {
        tags: {
          isStaff: null != (o = null == t || null == (l = t.isStaff()) ? void 0 : l.toString()) ? o : "unknown",
          preloadEnabled: n.toString(),
          disableCache: r.toString(),
          includeUnpublished: a.toString()
        }
      })
    }, [e, t, n, r, a])
  }