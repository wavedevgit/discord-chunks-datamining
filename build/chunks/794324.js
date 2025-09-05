/** Chunk was on 2026 **/
/** chunk id: 794324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Oi: () => m,
  YG: () => d,
  hr: () => u,
  kc: () => p,
  mB: () => v,
  t0: () => f
});
var Chunk647438 = require("./647438.js"),
  Chunk264181 = require("./264181.js"),
  Chunk884697 = require("./884697.js"),
  Chunk219778 = require("./219778.js"),
  Chunk619899 = require("./619899.js"),
  Chunk281598 = require("./281598.js"),
  Chunk215023 = require("./215023.js");
let u = e => {
    let t = (0, o.zL)(s.jE.HERO_LOGO),
      n = (0, o.zL)(s.jE.HERO_BANNER_STATIC),
      i = (0, o.zL)(s.jE.HERO_BANNER_ANIMATED),
      l = (0, a.n)(null == e ? true : e.categorySkuId);
    return r.useMemo(() => {
      var r, a, o, s, u, d;
      let m = (0, c.ZS)(e.categorySkuId),
        f = null != n || null != i,
        p = null != n && null == i;
      return {
        bannerOverrides: m,
        bannerStyleOverrides: f ? true : null != (s = e.bannerConfig) ? s : l,
        logoStyleOverrides: f ? true : e.logoConfig,
        heroLogo: null != t ? t : e.logoUrl,
        heroBannerStatic: null != (u = null != n ? n : null == (r = e.bannerAsset) ? true : r.static) ? u : e.fallbackBannerUrl,
        heroBannerAnimated: p ? true : null != (d = null != i ? i : null == m || null == (a = m.heroBanner) ? true : a.animationSource) ? d : null == (o = e.bannerAsset) ? true : o.animated
      }
    }, [t, n, i, e, l])
  },
  d = (e, t) => {
    var n;
    let r = (0, o.zL)(s.jE.FEATURED_BLOCK),
      i = (0, l.uV)(null == e ? true : e.featuredBlock, {
        size: c.J0,
        format: "png"
      });
    return null != (n = null != r ? r : null == t ? true : t.bannerUrl) ? n : i
  },
  m = e => {
    var t, n;
    let r = (0, o.zL)(s.jE.CATALOG_BANNER_STATIC),
      i = (0, o.zL)(s.jE.CATALOG_BANNER_ANIMATED);
    return {
      catalogBannerStatic: null != r ? r : null == (t = e.catalogBannerAsset) ? true : t.static,
      catalogBannerAnimated: null != i ? i : null == (n = e.catalogBannerAsset) ? true : n.animated
    }
  },
  f = e => {
    let t = (0, o.zL)(s.jE.SHOP_ALL_BANNER_STATIC),
      n = (0, o.zL)(s.jE.SHOP_ALL_BANNER_ANIMATED);
    return r.useMemo(() => {
      var r, i, l, a, o, s;
      let u = (0, c.ZS)(e.skuId);
      return {
        bannerOverrides: u,
        shopAllBannerStatic: null != (a = null != (l = null != t ? t : n) ? l : null == (r = e.bannerAsset) ? true : r.static) ? a : e.banner,
        shopAllBannerAnimated: null != (s = null != (o = null != n ? n : t) ? o : null == u ? true : u.animatedBanner) ? s : null == (i = e.bannerAsset) ? true : i.animated
      }
    }, [t, n, e])
  },
  p = e => {
    let t = (0, o.zL)(s.jE.PDP_BACKGROUND);
    return null != t ? t : e.pdpBg
  },
  v = e => {
    let t = (0, o.zL)(s.jE.SHOP_BUTTON_BG_HOVER),
      n = (0, o.zL)(s.jE.SHOP_BUTTON_BG_HOVER_DARK),
      l = (0, o.zL)(s.jE.SHOP_BUTTON_BG_HOVER_LIGHT),
      a = (0, o.zL)(s.jE.SHOP_BUTTON_BG_RESTING),
      c = (0, o.zL)(s.jE.SHOP_BUTTON_BG_RESTING_DARK),
      u = (0, o.zL)(s.jE.SHOP_BUTTON_BG_RESTING_LIGHT),
      d = (0, o.zL)(s.jE.COACHTIP_AVATAR);
    return r.useMemo(() => {
      var r, o, s, m, f;
      let p = [t, n, l, a, c, u, d].some(e => null != e);
      if ((null == e ? true : e.type) === i.Z.COACHMARK) return {
        hasPreviewAssets: false
      };
      let v = null == e || null == (r = e.refTargetBackground) ? true : r.asset,
        g = null == v ? true : v.resting,
        b = null == v ? true : v.hovered;
      return {
        hasPreviewAssets: p,
        buttonBGHoverDark: null != (o = null != n ? n : t) ? o : null == b ? true : b.dark,
        buttonBGHoverLight: null != (s = null != l ? l : t) ? s : null == b ? true : b.light,
        buttonBGRestingDark: null != (m = null != c ? c : a) ? m : null == g ? true : g.dark,
        buttonBGRestingLight: null != (f = null != u ? u : a) ? f : null == g ? true : g.light,
        coachtipAvatar: null != d ? d : null == e ? true : e.avatar
      }
    }, [t, n, l, a, c, u, d, e])
  }