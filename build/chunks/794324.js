/** Chunk was on 17768 **/
/** chunk id: 794324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Oi: () => p,
  YG: () => d,
  hr: () => u,
  kc: () => g,
  mB: () => f,
  t0: () => m
});
var Chunk647438 = require("./647438.js"),
  Chunk264181 = require("./264181.js"),
  Chunk884697 = require("./884697.js"),
  Chunk219778 = require("./219778.js"),
  Chunk619899 = require("./619899.js"),
  Chunk281598 = require("./281598.js"),
  Chunk215023 = require("./215023.js");
let u = e => {
    let t = (0, l.zL)(c.jE.HERO_LOGO),
      n = (0, l.zL)(c.jE.HERO_BANNER_STATIC),
      a = (0, l.zL)(c.jE.HERO_BANNER_ANIMATED),
      i = (0, o.n)(null == e ? true : e.categorySkuId);
    return r.useMemo(() => {
      var r, o, l, c, u, d;
      let p = (0, s.ZS)(e.categorySkuId),
        m = null != n || null != a,
        g = null != n && null == a;
      return {
        bannerOverrides: p,
        bannerStyleOverrides: m ? true : null != (c = e.bannerConfig) ? c : i,
        logoStyleOverrides: m ? true : e.logoConfig,
        heroLogo: null != t ? t : e.logoUrl,
        heroBannerStatic: null != (u = null != n ? n : null == (r = e.bannerAsset) ? true : r.static) ? u : e.fallbackBannerUrl,
        heroBannerAnimated: g ? true : null != (d = null != a ? a : null == p || null == (o = p.heroBanner) ? true : o.animationSource) ? d : null == (l = e.bannerAsset) ? true : l.animated
      }
    }, [t, n, a, e, i])
  },
  d = (e, t) => {
    var n;
    let r = (0, l.zL)(c.jE.FEATURED_BLOCK),
      a = (0, i.uV)(null == e ? true : e.featuredBlock, {
        size: s.J0,
        format: "png"
      });
    return null != (n = null != r ? r : null == t ? true : t.bannerUrl) ? n : a
  },
  p = e => {
    var t, n;
    let r = (0, l.zL)(c.jE.CATALOG_BANNER_STATIC),
      a = (0, l.zL)(c.jE.CATALOG_BANNER_ANIMATED);
    return {
      catalogBannerStatic: null != r ? r : null == (t = e.catalogBannerAsset) ? true : t.static,
      catalogBannerAnimated: null != a ? a : null == (n = e.catalogBannerAsset) ? true : n.animated
    }
  },
  m = e => {
    let t = (0, l.zL)(c.jE.SHOP_ALL_BANNER_STATIC),
      n = (0, l.zL)(c.jE.SHOP_ALL_BANNER_ANIMATED);
    return r.useMemo(() => {
      var r, a, i, o, l, c;
      let u = (0, s.ZS)(e.skuId);
      return {
        bannerOverrides: u,
        shopAllBannerStatic: null != (o = null != (i = null != t ? t : n) ? i : null == (r = e.bannerAsset) ? true : r.static) ? o : e.banner,
        shopAllBannerAnimated: null != (c = null != (l = null != n ? n : t) ? l : null == u ? true : u.animatedBanner) ? c : null == (a = e.bannerAsset) ? true : a.animated
      }
    }, [t, n, e])
  },
  g = e => {
    let t = (0, l.zL)(c.jE.PDP_BACKGROUND);
    return null != t ? t : e.pdpBg
  },
  f = e => {
    let t = (0, l.zL)(c.jE.SHOP_BUTTON_BG_HOVER),
      n = (0, l.zL)(c.jE.SHOP_BUTTON_BG_HOVER_DARK),
      i = (0, l.zL)(c.jE.SHOP_BUTTON_BG_HOVER_LIGHT),
      o = (0, l.zL)(c.jE.SHOP_BUTTON_BG_RESTING),
      s = (0, l.zL)(c.jE.SHOP_BUTTON_BG_RESTING_DARK),
      u = (0, l.zL)(c.jE.SHOP_BUTTON_BG_RESTING_LIGHT),
      d = (0, l.zL)(c.jE.COACHTIP_AVATAR);
    return r.useMemo(() => {
      var r, l, c, p, m;
      let g = [t, n, i, o, s, u, d].some(e => null != e);
      if ((null == e ? true : e.type) === a.Z.COACHMARK) return {
        hasPreviewAssets: false
      };
      let f = null == e || null == (r = e.refTargetBackground) ? true : r.asset,
        _ = null == f ? true : f.resting,
        b = null == f ? true : f.hovered;
      return {
        hasPreviewAssets: g,
        buttonBGHoverDark: null != (l = null != n ? n : t) ? l : null == b ? true : b.dark,
        buttonBGHoverLight: null != (c = null != i ? i : t) ? c : null == b ? true : b.light,
        buttonBGRestingDark: null != (p = null != s ? s : o) ? p : null == _ ? true : _.dark,
        buttonBGRestingLight: null != (m = null != u ? u : o) ? m : null == _ ? true : _.light,
        coachtipAvatar: null != d ? d : null == e ? true : e.avatar
      }
    }, [t, n, i, o, s, u, d, e])
  }