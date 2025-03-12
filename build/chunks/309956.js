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
  }), c = r.useMemo(() => t !== s.AW.ORBS || i ? t : s.AW.HOME, [t, i]), [d, u] = r.useState(c), [g, f] = r.useState(s.f7.HIDDEN);
  r.useEffect(() => {
    u(c), f(s.f7.VISIBLE)
  }, [c]);
  let h = e => new Promise(t => setTimeout(t, e)),
    p = (0, l.k6)();
  return {
    selectedTab: d,
    transitionState: g,
    transitionToTab: r.useCallback(async (t, r) => {
      r ? (f(s.f7.OUT), await h(1.1 * s.lb), u(t), n || p.push(o.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), {
        shallow: !0
      }), f(s.f7.IN)) : (u(t), n || p.push(o.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), {
        shallow: !0
      })), null != e.current && e.current.scrollTo({
        to: 0
      }), f(s.f7.VISIBLE)
    }, [p, n, e])
  }
}