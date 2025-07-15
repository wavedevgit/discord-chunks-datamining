/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  B: () => p
}), r(388685), r(539854);
var n = r(73800),
  l = r(114858),
  o = r(335818),
  i = r(822857),
  a = r(870289),
  s = r(501431),
  c = r(215023),
  u = r(981631);
let d = {
    [c.AW.AVATAR_DECORATIONS]: o.G.AVATAR_DECORATION,
    [c.AW.PROFILE_EFFECTS]: o.G.PROFILE_EFFECT,
    [c.AW.NAMEPLATES]: o.G.NAMEPLATE,
    [c.AW.BUNDLES]: o.G.BUNDLE
  },
  p = (e, t, r) => {
    let {
      enabled: o
    } = (0, i.WX)({
      location: "useShopViewTransition"
    }), p = (0, a.F)("CollectiblesBrowse"), {
      setItemTypeFilter: f,
      reset: g,
      setCurrentTab: h
    } = (0, s.S)(), b = n.useMemo(() => t !== c.AW.ORBS || o ? (0, c.RE)(t) && p ? c.AW.CATALOG : t : c.AW.HOME, [t, o, p]), [m, _] = n.useState(b), [O, C] = n.useState(c.f7.VISIBLE);
    n.useEffect(() => {
      h(m)
    }, [m, h]), n.useEffect(() => {
      _(b), O !== c.f7.VISIBLE && C(c.f7.VISIBLE)
    }, [b, O]);
    let v = e => new Promise(t => setTimeout(t, e)),
      E = (0, l.k6)(),
      S = n.useCallback(async (t, n) => {
        if (t === c.AW.CATALOG) g();
        else if ((0, c.RE)(t) && t !== m) {
          let e = d[t];
          null != e ? f(e) : g()
        }
        if (m === t) return;
        n && (C(c.f7.OUT), await v(1.1 * c.lb));
        let l = p && ![c.AW.HOME, c.AW.ORBS].includes(t) ? c.AW.CATALOG : t;
        _(l), n && C(c.f7.IN), r || E.push(u.Z5c.COLLECTIBLES_SHOP_WITH_TAB(l), {
          shallow: !0
        }), null != e.current && e.current.scrollTo({
          to: 0
        }), C(c.f7.VISIBLE)
      }, [E, r, e, p, f, g, m]);
    return {
      selectedTab: m,
      transitionState: O,
      transitionToTab: S
    }
  }