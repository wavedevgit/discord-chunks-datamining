/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  B: () => s
}), n(47120), n(653041);
var r = n(192379),
  l = n(512969),
  o = n(822857),
  a = n(215023),
  i = n(981631);
let s = (e, t, n) => {
  let {
    enabled: s
  } = (0, o.W)({
    location: "useShopViewTransition"
  }), c = r.useMemo(() => t !== a.AW.ORBS || s ? t : a.AW.HOME, [t, s]), [u, d] = r.useState(c), [b, p] = r.useState(a.f7.HIDDEN);
  r.useEffect(() => {
    d(c), p(a.f7.VISIBLE)
  }, [c]);
  let f = e => new Promise(t => setTimeout(t, e)),
    g = (0, l.k6)();
  return {
    selectedTab: u,
    transitionState: b,
    transitionToTab: r.useCallback(async (t, r) => {
      r ? (p(a.f7.OUT), await f(1.1 * a.lb), d(t), n || g.push(i.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), {
        shallow: !0
      }), p(a.f7.IN)) : (d(t), n || g.push(i.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), {
        shallow: !0
      })), null != e.current && e.current.scrollTo({
        to: 0
      }), p(a.f7.VISIBLE)
    }, [g, n, e])
  }
}