/** Chunk was on 77313 **/
/** chunk id: 212407, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Kk: () => s,
  MV: () => c,
  U1: () => u,
  bv: () => d,
  qY: () => m,
  s4: () => o,
  w$: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk488430 = require("./488430.js"),
  Chunk940622 = require("./940622.js"),
  Chunk559474 = require("./559474.js");
let s = e => {
    let t = (0, i.mb)(a.RN.HERO_LOGO),
      n = (0, i.mb)(a.RN.HERO_BANNER_STATIC),
      l = (0, i.mb)(a.RN.HERO_BANNER_ANIMATED),
      s = (0, i.mb)(a.RN.HERO_BANNER_RIVE);
    return r.useMemo(() => {
      let r = null != n || null != l || null != s || null != t,
        i = null != n && null == l;
      return {
        bannerDisplayConfig: r ? true : e.bannerDisplayConfig,
        logoDisplayConfig: r ? true : e.logoDisplayConfig,
        heroLogo: null != t ? t : e.heroLogoUrl,
        heroBannerStatic: null != n ? n : e.heroBannerUrl,
        heroBannerAnimated: i ? true : null != l ? l : e.heroBannerAnimatedUrl,
        heroBannerRive: null != s ? s : e.heroRiveUrl
      }
    }, [t, n, l, s, e])
  },
  o = (e, t) => {
    var n;
    let r = (0, i.mb)(a.RN.FEATURED_BLOCK);
    return null != (n = null != r ? r : null == t ? true : t.assetUrl) ? n : null == e ? true : e.featuredBlockUrl
  },
  c = e => {
    let t = (0, i.mb)(a.RN.CATALOG_BANNER_STATIC),
      n = (0, i.mb)(a.RN.CATALOG_BANNER_ANIMATED),
      r = (0, i.mb)(a.RN.CATALOG_BANNER_RIVE);
    return {
      catalogBannerStatic: null != t ? t : e.catalogBannerUrl,
      catalogBannerAnimated: null != n ? n : e.catalogBannerAnimatedUrl,
      catalogBannerRive: null != r ? r : e.catalogBannerRiveUrl
    }
  },
  u = e => {
    let t = (0, i.mb)(a.RN.PDP_BACKGROUND);
    return null != t ? t : e.pdpBgUrl
  },
  d = e => {
    let t = (0, i.mb)(a.RN.SHOP_BUTTON_BG_HOVER),
      n = (0, i.mb)(a.RN.SHOP_BUTTON_BG_HOVER_DARK),
      s = (0, i.mb)(a.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
      o = (0, i.mb)(a.RN.SHOP_BUTTON_BG_RESTING),
      c = (0, i.mb)(a.RN.SHOP_BUTTON_BG_RESTING_DARK),
      u = (0, i.mb)(a.RN.SHOP_BUTTON_BG_RESTING_LIGHT),
      d = (0, i.mb)(a.RN.COACHTIP_AVATAR);
    return r.useMemo(() => {
      var r, i, a, m, p;
      let f = [t, n, s, o, c, u, d].some(e => null != e);
      if ((null == e ? true : e.type) === l.G.COACHMARK) return {
        hasPreviewAssets: false
      };
      let x = null == e || null == (p = e.refTargetBackground) ? true : p.asset,
        h = null == x ? true : x.resting,
        v = null == x ? true : x.hovered;
      return {
        hasPreviewAssets: f,
        buttonBGHoverDark: null != (r = null != n ? n : t) ? r : null == v ? true : v.dark,
        buttonBGHoverLight: null != (i = null != s ? s : t) ? i : null == v ? true : v.light,
        buttonBGRestingDark: null != (a = null != c ? c : o) ? a : null == h ? true : h.dark,
        buttonBGRestingLight: null != (m = null != u ? u : o) ? m : null == h ? true : h.light,
        coachtipAvatar: null != d ? d : null == e ? true : e.avatar
      }
    }, [t, n, s, o, c, u, d, e])
  },
  m = e => ({
    bannerUrl: e.bannerUrl,
    bannerAnimatedUrl: e.bannerAnimatedUrl
  }),
  p = e => ({
    bannerURL: e.bannerURL,
    bannerAnimatedURL: e.bannerAnimatedURL
  })