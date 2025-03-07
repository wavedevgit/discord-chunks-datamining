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
  }), d = r.useMemo(() => t !== s.AW.ORBS || i ? t : s.AW.HOME, [t, i]), [c, u] = r.useState(d), [m, g] = r.useState(s.f7.HIDDEN);
  r.useEffect(() => {
    u(d), g(s.f7.VISIBLE)
  }, [d]);
  let h = e => new Promise(t => setTimeout(t, e)),
    f = (0, l.k6)();
  return {
    selectedTab: c,
    transitionState: m,
    transitionToTab: r.useCallback(async (t, r) => {
      r ? (g(s.f7.OUT), await h(1.1 * s.lb), u(t), n || f.push(o.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), {
        shallow: !0
      }), g(s.f7.IN)) : (u(t), n || f.push(o.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), {
        shallow: !0
      })), null != e.current && e.current.scrollTo({
        to: 0
      }), g(s.f7.VISIBLE)
    }, [f, n, e])
  }
}