/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  B: () => s
}), r(47120), r(653041);
var n = r(192379),
  l = r(512969),
  i = r(822857),
  o = r(215023),
  a = r(981631);
let s = (e, t, r) => {
  let {
    enabled: s
  } = (0, i.W)({
    location: "useShopViewTransition"
  }), c = n.useMemo(() => t !== o.AW.ORBS || s ? t : o.AW.HOME, [t, s]), [u, d] = n.useState(c), [p, f] = n.useState(o.f7.HIDDEN);
  n.useEffect(() => {
    d(c), f(o.f7.VISIBLE)
  }, [c]);
  let b = e => new Promise(t => setTimeout(t, e)),
    h = (0, l.k6)();
  return {
    selectedTab: u,
    transitionState: p,
    transitionToTab: n.useCallback(async (t, n) => {
      n ? (f(o.f7.OUT), await b(1.1 * o.lb), d(t), r || h.push(a.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), {
        shallow: !0
      }), f(o.f7.IN)) : (d(t), r || h.push(a.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), {
        shallow: !0
      })), null != e.current && e.current.scrollTo({
        to: 0
      }), f(o.f7.VISIBLE)
    }, [h, r, e])
  }
}