/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  B: () => i
}), n(47120), n(653041);
var r = n(192379),
  l = n(512969),
  a = n(822857),
  s = n(215023),
  o = n(981631);
let i = (e, t, n) => {
  let {
    enabled: i
  } = (0, a.W)({
    location: "useShopViewTransition"
  }), c = r.useMemo(() => t !== s.AW.ORBS || i ? t : s.AW.HOME, [t, i]), [d, u] = r.useState(c), [m, g] = r.useState(s.f7.HIDDEN);
  r.useEffect(() => {
    u(c), g(s.f7.VISIBLE)
  }, [c]);
  let f = e => new Promise(t => setTimeout(t, e)),
    h = (0, l.k6)();
  return {
    selectedTab: d,
    transitionState: m,
    transitionToTab: r.useCallback(async (t, r) => {
      r ? (g(s.f7.OUT), await f(1.1 * s.lb), u(t), n || h.push(o.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), {
        shallow: !0
      }), g(s.f7.IN)) : (u(t), n || h.push(o.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), {
        shallow: !0
      })), null != e.current && e.current.scrollTo({
        to: 0
      }), g(s.f7.VISIBLE)
    }, [h, n, e])
  }
}