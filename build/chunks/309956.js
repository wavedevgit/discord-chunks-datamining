/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  B: () => i
}), n(47120), n(653041);
var r = n(192379),
  l = n(512969),
  a = n(822857),
  o = n(215023),
  s = n(981631);
let i = (e, t, n) => {
  let {
    enabled: i
  } = (0, a.W)({
    location: "useShopViewTransition"
  }), c = r.useMemo(() => t !== o.AW.ORBS || i ? t : o.AW.HOME, [t, i]), [d, u] = r.useState(c), [g, h] = r.useState(o.f7.HIDDEN);
  r.useEffect(() => {
    u(c), h(o.f7.VISIBLE)
  }, [c]);
  let f = e => new Promise(t => setTimeout(t, e)),
    m = (0, l.k6)();
  return {
    selectedTab: d,
    transitionState: g,
    transitionToTab: r.useCallback(async (t, r) => {
      r ? (h(o.f7.OUT), await f(1.1 * o.lb), u(t), n || m.push(s.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), {
        shallow: !0
      }), h(o.f7.IN)) : (u(t), n || m.push(s.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), {
        shallow: !0
      })), null != e.current && e.current.scrollTo({
        to: 0
      }), h(o.f7.VISIBLE)
    }, [m, n, e])
  }
}