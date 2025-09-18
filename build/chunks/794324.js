/** Chunk was on 2026 **/
/** chunk id: 794324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Oi: () => d,
  YG: () => u,
  hr: () => c,
  kc: () => m,
  mB: () => p
});
var Chunk647438 = require("./647438.js"),
  Chunk264181 = require("./264181.js"),
  Chunk884697 = require("./884697.js"),
  Chunk619899 = require("./619899.js"),
  Chunk281598 = require("./281598.js"),
  Chunk215023 = require("./215023.js");
let c = e => {
    let t = (0, a.zL)(o.jE.HERO_LOGO),
      n = (0, a.zL)(o.jE.HERO_BANNER_STATIC),
      i = (0, a.zL)(o.jE.HERO_BANNER_ANIMATED);
    return r.useMemo(() => {
      var r, l, a;
      let o = null != n || null != i,
        s = null != n && null == i;
      return {
        bannerStyleOverrides: o ? true : e.bannerConfig,
        logoStyleOverrides: o ? true : e.logoConfig,
        heroLogo: null != t ? t : e.logoUrl,
        heroBannerStatic: null != (a = null != n ? n : null == (r = e.bannerAsset) ? true : r.static) ? a : e.fallbackBannerUrl,
        heroBannerAnimated: s ? true : null != i ? i : null == (l = e.bannerAsset) ? true : l.animated
      }
    }, [t, n, i, e])
  },
  u = (e, t) => {
    var n;
    let r = (0, a.zL)(o.jE.FEATURED_BLOCK),
      i = (0, l.uV)(null == e ? true : e.featuredBlock, {
        size: s.J0,
        format: "png"
      });
    return null != (n = null != r ? r : null == t ? true : t.bannerUrl) ? n : i
  },
  d = e => {
    var t, n;
    let r = (0, a.zL)(o.jE.CATALOG_BANNER_STATIC),
      i = (0, a.zL)(o.jE.CATALOG_BANNER_ANIMATED);
    return {
      catalogBannerStatic: null != r ? r : null == (t = e.catalogBannerAsset) ? true : t.static,
      catalogBannerAnimated: null != i ? i : null == (n = e.catalogBannerAsset) ? true : n.animated
    }
  },
  m = e => {
    let t = (0, a.zL)(o.jE.PDP_BACKGROUND);
    if (null != t) return t;
    let n = e.pdpBg;
    return (null == n ? true : n.startsWith("http")) ? n : (0, l.uV)(n, {
      size: 540,
      format: "jpg"
    })
  },
  p = e => {
    let t = (0, a.zL)(o.jE.SHOP_BUTTON_BG_HOVER),
      n = (0, a.zL)(o.jE.SHOP_BUTTON_BG_HOVER_DARK),
      l = (0, a.zL)(o.jE.SHOP_BUTTON_BG_HOVER_LIGHT),
      s = (0, a.zL)(o.jE.SHOP_BUTTON_BG_RESTING),
      c = (0, a.zL)(o.jE.SHOP_BUTTON_BG_RESTING_DARK),
      u = (0, a.zL)(o.jE.SHOP_BUTTON_BG_RESTING_LIGHT),
      d = (0, a.zL)(o.jE.COACHTIP_AVATAR);
    return r.useMemo(() => {
      var r, a, o, m, p;
      let v = [t, n, l, s, c, u, d].some(e => null != e);
      if ((null == e ? true : e.type) === i.Z.COACHMARK) return {
        hasPreviewAssets: false
      };
      let f = null == e || null == (r = e.refTargetBackground) ? true : r.asset,
        h = null == f ? true : f.resting,
        g = null == f ? true : f.hovered;
      return {
        hasPreviewAssets: v,
        buttonBGHoverDark: null != (a = null != n ? n : t) ? a : null == g ? true : g.dark,
        buttonBGHoverLight: null != (o = null != l ? l : t) ? o : null == g ? true : g.light,
        buttonBGRestingDark: null != (m = null != c ? c : s) ? m : null == h ? true : h.dark,
        buttonBGRestingLight: null != (p = null != u ? u : s) ? p : null == h ? true : h.light,
        coachtipAvatar: null != d ? d : null == e ? true : e.avatar
      }
    }, [t, n, l, s, c, u, d, e])
  }