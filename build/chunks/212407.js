/** Chunk was on 21738 **/
/** chunk id: 212407, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Kk: () => s,
  MV: () => c,
  U1: () => u,
  bv: () => d,
  qY: () => p,
  s4: () => o,
  w$: () => f
});
var Chunk64700 = require("./64700.js"),
  Chunk488430 = require("./488430.js"),
  Chunk940622 = require("./940622.js"),
  Chunk559474 = require("./559474.js");
let s = e => {
    let t = (0, l.mb)(a.RN.HERO_LOGO),
      n = (0, l.mb)(a.RN.HERO_BANNER_STATIC),
      i = (0, l.mb)(a.RN.HERO_BANNER_ANIMATED),
      s = (0, l.mb)(a.RN.HERO_BANNER_RIVE);
    return r.useMemo(() => {
      let r = null != n || null != i || null != s || null != t,
        l = null != n && null == i;
      return {
        bannerDisplayConfig: r ? true : e.bannerDisplayConfig,
        logoDisplayConfig: r ? true : e.logoDisplayConfig,
        heroLogo: null != t ? t : e.heroLogoUrl,
        heroBannerStatic: null != n ? n : e.heroBannerUrl,
        heroBannerAnimated: l ? true : null != i ? i : e.heroBannerAnimatedUrl,
        heroBannerRive: null != s ? s : e.heroRiveUrl
      }
    }, [t, n, i, s, e])
  },
  o = (e, t) => {
    var n;
    let r = (0, l.mb)(a.RN.FEATURED_BLOCK);
    return null != (n = null != r ? r : null == t ? true : t.assetUrl) ? n : null == e ? true : e.featuredBlockUrl
  },
  c = e => {
    let t = (0, l.mb)(a.RN.CATALOG_BANNER_STATIC),
      n = (0, l.mb)(a.RN.CATALOG_BANNER_ANIMATED),
      r = (0, l.mb)(a.RN.CATALOG_BANNER_RIVE);
    return {
      catalogBannerStatic: null != t ? t : e.catalogBannerUrl,
      catalogBannerAnimated: null != n ? n : e.catalogBannerAnimatedUrl,
      catalogBannerRive: null != r ? r : e.catalogBannerRiveUrl
    }
  },
  u = e => {
    let t = (0, l.mb)(a.RN.PDP_BACKGROUND);
    return null != t ? t : e.pdpBgUrl
  },
  d = e => {
    let t = (0, l.mb)(a.RN.SHOP_BUTTON_BG_HOVER),
      n = (0, l.mb)(a.RN.SHOP_BUTTON_BG_HOVER_DARK),
      s = (0, l.mb)(a.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
      o = (0, l.mb)(a.RN.SHOP_BUTTON_BG_RESTING),
      c = (0, l.mb)(a.RN.SHOP_BUTTON_BG_RESTING_DARK),
      u = (0, l.mb)(a.RN.SHOP_BUTTON_BG_RESTING_LIGHT),
      d = (0, l.mb)(a.RN.COACHTIP_AVATAR);
    return r.useMemo(() => {
      var r, l, a, p, f;
      let h = [t, n, s, o, c, u, d].some(e => null != e);
      if ((null == e ? true : e.type) === i.G.COACHMARK) return {
        hasPreviewAssets: false
      };
      let A = null == e || null == (f = e.refTargetBackground) ? true : f.asset,
        g = null == A ? true : A.resting,
        m = null == A ? true : A.hovered;
      return {
        hasPreviewAssets: h,
        buttonBGHoverDark: null != (r = null != n ? n : t) ? r : null == m ? true : m.dark,
        buttonBGHoverLight: null != (l = null != s ? s : t) ? l : null == m ? true : m.light,
        buttonBGRestingDark: null != (a = null != c ? c : o) ? a : null == g ? true : g.dark,
        buttonBGRestingLight: null != (p = null != u ? u : o) ? p : null == g ? true : g.light,
        coachtipAvatar: null != d ? d : null == e ? true : e.avatar
      }
    }, [t, n, s, o, c, u, d, e])
  },
  p = e => ({
    bannerUrl: e.bannerUrl,
    bannerAnimatedUrl: e.bannerAnimatedUrl
  }),
  f = e => ({
    bannerURL: e.bannerURL,
    bannerAnimatedURL: e.bannerAnimatedURL
  })