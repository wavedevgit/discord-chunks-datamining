/** Chunk was on 8087 **/
/** chunk id: 794324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Oi: () => s,
  UI: () => f,
  YG: () => c,
  _M: () => m,
  hr: () => o,
  kc: () => u,
  mB: () => d
});
var Chunk473749 = require("./473749.js"),
  Chunk264181 = require("./264181.js"),
  Chunk619899 = require("./619899.js"),
  Chunk281598 = require("./281598.js");
let o = e => {
    let t = (0, a.zL)(l.jE.HERO_LOGO),
      n = (0, a.zL)(l.jE.HERO_BANNER_STATIC),
      i = (0, a.zL)(l.jE.HERO_BANNER_ANIMATED),
      o = (0, a.zL)(l.jE.HERO_BANNER_RIVE);
    return r.useMemo(() => {
      let r = null != n || null != i || null != o || null != t,
        a = null != n && null == i;
      return {
        bannerDisplayConfig: r ? true : e.bannerDisplayConfig,
        logoDisplayConfig: r ? true : e.logoDisplayConfig,
        heroLogo: null != t ? t : e.heroLogoUrl,
        heroBannerStatic: null != n ? n : e.heroBannerUrl,
        heroBannerAnimated: a ? true : null != i ? i : e.heroBannerAnimatedUrl,
        heroBannerRive: null != o ? o : e.heroRiveUrl
      }
    }, [t, n, i, o, e])
  },
  c = (e, t) => {
    var n;
    let r = (0, a.zL)(l.jE.FEATURED_BLOCK);
    return null != (n = null != r ? r : null == t ? true : t.assetUrl) ? n : null == e ? true : e.featuredBlockUrl
  },
  s = e => {
    let t = (0, a.zL)(l.jE.CATALOG_BANNER_STATIC),
      n = (0, a.zL)(l.jE.CATALOG_BANNER_ANIMATED);
    return {
      catalogBannerStatic: null != t ? t : e.catalogBannerUrl,
      catalogBannerAnimated: null != n ? n : e.catalogBannerAnimatedUrl
    }
  },
  u = e => {
    let t = (0, a.zL)(l.jE.PDP_BACKGROUND);
    return null != t ? t : e.pdpBgUrl
  },
  d = e => {
    let t = (0, a.zL)(l.jE.SHOP_BUTTON_BG_HOVER),
      n = (0, a.zL)(l.jE.SHOP_BUTTON_BG_HOVER_DARK),
      o = (0, a.zL)(l.jE.SHOP_BUTTON_BG_HOVER_LIGHT),
      c = (0, a.zL)(l.jE.SHOP_BUTTON_BG_RESTING),
      s = (0, a.zL)(l.jE.SHOP_BUTTON_BG_RESTING_DARK),
      u = (0, a.zL)(l.jE.SHOP_BUTTON_BG_RESTING_LIGHT),
      d = (0, a.zL)(l.jE.COACHTIP_AVATAR);
    return r.useMemo(() => {
      var r, a, l, m, f;
      let p = [t, n, o, c, s, u, d].some(e => null != e);
      if ((null == e ? true : e.type) === i.Z.COACHMARK) return {
        hasPreviewAssets: false
      };
      let b = null == e || null == (r = e.refTargetBackground) ? true : r.asset,
        v = null == b ? true : b.resting,
        h = null == b ? true : b.hovered;
      return {
        hasPreviewAssets: p,
        buttonBGHoverDark: null != (a = null != n ? n : t) ? a : null == h ? true : h.dark,
        buttonBGHoverLight: null != (l = null != o ? o : t) ? l : null == h ? true : h.light,
        buttonBGRestingDark: null != (m = null != s ? s : c) ? m : null == v ? true : v.dark,
        buttonBGRestingLight: null != (f = null != u ? u : c) ? f : null == v ? true : v.light,
        coachtipAvatar: null != d ? d : null == e ? true : e.avatar
      }
    }, [t, n, o, c, s, u, d, e])
  },
  m = e => ({
    bannerUrl: e.bannerUrl,
    bannerAnimatedUrl: e.bannerAnimatedUrl
  }),
  f = e => ({
    bannerURL: e.bannerURL,
    bannerAnimatedURL: e.bannerAnimatedURL
  })