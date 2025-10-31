/** Chunk was on 6377 **/
/** chunk id: 794324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Oi: () => m,
  UI: () => h,
  YG: () => d,
  _M: () => v,
  hr: () => u,
  kc: () => p,
  mB: () => f
});
var Chunk647438 = require("./647438.js"),
  Chunk264181 = require("./264181.js"),
  Chunk884697 = require("./884697.js"),
  Chunk15400 = require("./15400.js"),
  Chunk619899 = require("./619899.js"),
  Chunk281598 = require("./281598.js"),
  Chunk215023 = require("./215023.js");
let u = e => {
    let t = (0, o.zL)(s.jE.HERO_LOGO),
      n = (0, o.zL)(s.jE.HERO_BANNER_STATIC),
      i = (0, o.zL)(s.jE.HERO_BANNER_ANIMATED),
      a = (0, l.Y)("HeroBlock");
    return r.useMemo(() => {
      var r, l;
      let o = null != n || null != i,
        s = null != n && null == i;
      if (a) return {
        bannerStyleOverrides: o ? true : e.bannerDisplayConfig,
        logoStyleOverrides: o ? true : e.logoDisplayConfig,
        heroLogo: null != t ? t : e.heroLogoUrl,
        heroBannerStatic: null != n ? n : e.heroBannerUrl,
        heroBannerAnimated: s ? true : null != i ? i : e.heroBannerAnimatedUrl,
        heroBannerRive: null != i ? i : e.heroRiveUrl
      };
      let c = null == (r = e.bannerAsset) ? true : r.animated,
        u = (null == c ? true : c.endsWith(".riv")) ? c : e.heroRiveUrl;
      return {
        bannerStyleOverrides: o ? true : e.bannerDisplayConfig,
        logoStyleOverrides: o ? true : e.logoDisplayConfig,
        heroLogo: null != t ? t : e.logoUrl,
        heroBannerStatic: null != n ? n : null == (l = e.bannerAsset) ? true : l.static,
        heroBannerAnimated: s ? true : null != i ? i : c,
        heroBannerRive: s ? true : null != i ? i : u
      }
    }, [t, n, i, e, a])
  },
  d = (e, t) => {
    var n, r;
    let i = (0, o.zL)(s.jE.FEATURED_BLOCK);
    if ((0, l.Y)("FeaturedBlock")) return null != (n = null != i ? i : null == t ? true : t.assetUrl) ? n : null == e ? true : e.featuredBlockUrl;
    let u = (0, a.uV)(null == e ? true : e.featuredBlock, {
      size: c.J0,
      format: "png"
    });
    return null != (r = null != i ? i : null == t ? true : t.bannerUrl) ? r : u
  },
  m = e => {
    var t, n;
    let r = (0, o.zL)(s.jE.CATALOG_BANNER_STATIC),
      i = (0, o.zL)(s.jE.CATALOG_BANNER_ANIMATED);
    return (0, l.Y)("CatalogBanner") ? {
      catalogBannerStatic: null != r ? r : e.catalogBannerUrl,
      catalogBannerAnimated: null != i ? i : e.catalogBannerAnimatedUrl
    } : {
      catalogBannerStatic: null != r ? r : null == (t = e.catalogBannerAsset) ? true : t.static,
      catalogBannerAnimated: null != i ? i : null == (n = e.catalogBannerAsset) ? true : n.animated
    }
  },
  p = e => {
    let t = (0, o.zL)(s.jE.PDP_BACKGROUND),
      n = (0, l.Y)("PDPBackground");
    if (null != t) return t;
    if (n) return e.pdpBgUrl;
    let r = e.pdpBg;
    return (null == r ? true : r.startsWith("http")) ? r : (0, a.uV)(r, {
      size: 540,
      format: "jpg"
    })
  },
  f = e => {
    let t = (0, o.zL)(s.jE.SHOP_BUTTON_BG_HOVER),
      n = (0, o.zL)(s.jE.SHOP_BUTTON_BG_HOVER_DARK),
      a = (0, o.zL)(s.jE.SHOP_BUTTON_BG_HOVER_LIGHT),
      l = (0, o.zL)(s.jE.SHOP_BUTTON_BG_RESTING),
      c = (0, o.zL)(s.jE.SHOP_BUTTON_BG_RESTING_DARK),
      u = (0, o.zL)(s.jE.SHOP_BUTTON_BG_RESTING_LIGHT),
      d = (0, o.zL)(s.jE.COACHTIP_AVATAR);
    return r.useMemo(() => {
      var r, o, s, m, p;
      let f = [t, n, a, l, c, u, d].some(e => null != e);
      if ((null == e ? true : e.type) === i.Z.COACHMARK) return {
        hasPreviewAssets: false
      };
      let v = null == e || null == (r = e.refTargetBackground) ? true : r.asset,
        h = null == v ? true : v.resting,
        g = null == v ? true : v.hovered;
      return {
        hasPreviewAssets: f,
        buttonBGHoverDark: null != (o = null != n ? n : t) ? o : null == g ? true : g.dark,
        buttonBGHoverLight: null != (s = null != a ? a : t) ? s : null == g ? true : g.light,
        buttonBGRestingDark: null != (m = null != c ? c : l) ? m : null == h ? true : h.dark,
        buttonBGRestingLight: null != (p = null != u ? u : l) ? p : null == h ? true : h.light,
        coachtipAvatar: null != d ? d : null == e ? true : e.avatar
      }
    }, [t, n, a, l, c, u, d, e])
  },
  v = e => {
    var t, n;
    return (0, l.Y)("ImmersiveBanner") ? {
      bannerUrl: e.bannerUrl,
      bannerAnimatedUrl: e.bannerAnimatedUrl
    } : {
      bannerUrl: null == (t = e.bannerAsset) ? true : t.static,
      bannerAnimatedUrl: null == (n = e.bannerAsset) ? true : n.animated
    }
  },
  h = e => (0, l.Y)("WideBanner") ? {
    bannerURL: e.bannerURL,
    bannerAnimatedURL: e.bannerAnimatedURL
  } : {
    bannerURL: e.oldBannerURL,
    bannerAnimatedURL: true
  }