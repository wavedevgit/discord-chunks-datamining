/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  B: () => g
}), n(388685), n(539854);
var r = n(73800),
  l = n(114858),
  i = n(335818),
  a = n(822857),
  o = n(870289),
  s = n(501431),
  c = n(149705),
  u = n(215023),
  d = n(981631);
let p = {
    [u.AW.AVATAR_DECORATIONS]: i.G.AVATAR_DECORATION,
    [u.AW.PROFILE_EFFECTS]: i.G.PROFILE_EFFECT,
    [u.AW.NAMEPLATES]: i.G.NAMEPLATE,
    [u.AW.BUNDLES]: i.G.BUNDLE
  },
  g = (e, t, n) => {
    let {
      enabled: i
    } = (0, a.WX)({
      location: "useShopViewTransition"
    }), g = (0, o.F)("CollectiblesBrowse"), {
      setItemTypeFilter: f,
      reset: h
    } = (0, s.S)(), {
      clear: b
    } = (0, c.a)();
    r.useEffect(() => {
      let e = p[t];
      null != e && (h(), f(e))
    }, [t, f, h]);
    let m = r.useMemo(() => t !== u.AW.ORBS || i ? (0, u.RE)(t) && g ? u.AW.CATALOG : t : u.AW.HOME, [t, i, g]),
      [_, C] = r.useState(m),
      [O, v] = r.useState(u.f7.VISIBLE);
    r.useEffect(() => {
      C(m), O !== u.f7.VISIBLE && v(u.f7.VISIBLE)
    }, [m, O]);
    let E = e => new Promise(t => setTimeout(t, e)),
      S = (0, l.k6)(),
      x = r.useCallback(async (t, r) => {
        if (b(), h(), _ === t) return;
        r && (v(u.f7.OUT), await E(1.1 * u.lb)), (0, u.RE)(t) && f(p[t]);
        let l = g && ![u.AW.HOME, u.AW.ORBS].includes(t) ? u.AW.CATALOG : t;
        C(l), r && v(u.f7.IN), n || S.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(l), {
          shallow: !0
        }), null != e.current && e.current.scrollTo({
          to: 0
        }), v(u.f7.VISIBLE)
      }, [S, n, e, g, f, h, _, b]);
    return {
      selectedTab: _,
      transitionState: O,
      transitionToTab: x
    }
  }