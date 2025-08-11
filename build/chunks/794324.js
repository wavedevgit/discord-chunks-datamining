/** Chunk was on 78223 **/
/** chunk id: 794324, original params: e,n,r (module,exports,require) **/
require.d(exports, {
  OR: () => m,
  YG: () => g,
  hr: () => d,
  mB: () => v,
  t0: () => b
});
var Chunk73800 = require("./73800.js"),
  Chunk264181 = require("./264181.js"),
  Chunk884697 = require("./884697.js"),
  Chunk823941 = require("./823941.js"),
  Chunk219778 = require("./219778.js"),
  Chunk619899 = require("./619899.js"),
  Chunk281598 = require("./281598.js"),
  Chunk215023 = require("./215023.js");
let d = e => {
    let n = (0, i.zL)(s.jE.HERO_LOGO),
      r = (0, i.zL)(s.jE.HERO_BANNER_STATIC),
      t = (0, i.zL)(s.jE.HERO_BANNER_ANIMATED),
      o = (0, u.n)(null == e ? true : e.categorySkuId);
    return l.useMemo(() => {
      var l, a, u, i, s, d;
      let g = (0, c.ZS)(e.categorySkuId),
        b = null != r || null != t,
        m = null != r && null == t;
      return {
        bannerOverrides: g,
        bannerStyleOverrides: b ? true : null != (i = e.bannerConfig) ? i : o,
        logoStyleOverrides: b ? true : e.logoConfig,
        heroLogo: null != n ? n : e.logoUrl,
        heroBannerStatic: null != (s = null != r ? r : null == (l = e.bannerAsset) ? true : l.static) ? s : e.fallbackBannerUrl,
        heroBannerAnimated: m ? true : null != (d = null != t ? t : null == g || null == (a = g.heroBanner) ? true : a.animationSource) ? d : null == (u = e.bannerAsset) ? true : u.animated
      }
    }, [n, r, t, e, o])
  },
  g = (e, n) => {
    let r = (0, i.zL)(s.jE.FEATURED_BLOCK);
    return l.useMemo(() => {
      var l;
      let t = null == e ? true : e.featuredBlock,
        a = null != t ? (0, o.uV)(t, {
          size: c.J0,
          format: "png"
        }) : true;
      return {
        featuredBlockBanner: null != (l = null != r ? r : null == n ? true : n.bannerUrl) ? l : a
      }
    }, [r, e, n])
  },
  b = e => {
    let n = (0, i.zL)(s.jE.SHOP_ALL_BANNER_STATIC),
      r = (0, i.zL)(s.jE.SHOP_ALL_BANNER_ANIMATED);
    return l.useMemo(() => {
      var l, t, o, a, u, i;
      let s = (0, c.ZS)(e.skuId);
      return {
        bannerOverrides: s,
        shopAllBannerStatic: null != (a = null != (o = null != n ? n : r) ? o : null == (l = e.bannerAsset) ? true : l.static) ? a : e.banner,
        shopAllBannerAnimated: null != (i = null != (u = null != r ? r : n) ? u : null == s ? true : s.animatedBanner) ? i : null == (t = e.bannerAsset) ? true : t.animated
      }
    }, [n, r, e])
  },
  m = e => {
    let n = (0, i.zL)(s.jE.PDP_BACKGROUND),
      r = (0, i.zL)(s.jE.PDP_LOGO);
    return l.useMemo(() => ({
      pdpBackground: null != n ? n : e.pdpBg,
      logo: null != r ? r : (0, o.uV)(e.logo, {
        size: a.n
      })
    }), [n, e.pdpBg, e.logo, r])
  },
  v = e => {
    let n = (0, i.zL)(s.jE.SHOP_BUTTON_BG_HOVER),
      r = (0, i.zL)(s.jE.SHOP_BUTTON_BG_HOVER_DARK),
      o = (0, i.zL)(s.jE.SHOP_BUTTON_BG_HOVER_LIGHT),
      a = (0, i.zL)(s.jE.SHOP_BUTTON_BG_RESTING),
      u = (0, i.zL)(s.jE.SHOP_BUTTON_BG_RESTING_DARK),
      c = (0, i.zL)(s.jE.SHOP_BUTTON_BG_RESTING_LIGHT),
      d = (0, i.zL)(s.jE.COACHTIP_AVATAR);
    return l.useMemo(() => {
      var l, i, s, g, b;
      let m = [n, r, o, a, u, c, d].some(e => null != e);
      if ((null == e ? true : e.type) === t.Z.COACHMARK) return {
        hasPreviewAssets: false
      };
      let v = null == e || null == (l = e.refTargetBackground) ? true : l.asset,
        O = null == v ? true : v.resting,
        p = null == v ? true : v.hovered;
      return {
        hasPreviewAssets: m,
        buttonBGHoverDark: null != (i = null != r ? r : n) ? i : null == p ? true : p.dark,
        buttonBGHoverLight: null != (s = null != o ? o : n) ? s : null == p ? true : p.light,
        buttonBGRestingDark: null != (g = null != u ? u : a) ? g : null == O ? true : O.dark,
        buttonBGRestingLight: null != (b = null != c ? c : a) ? b : null == O ? true : O.light,
        coachtipAvatar: null != d ? d : null == e ? true : e.avatar
      }
    }, [n, r, o, a, u, c, d, e])
  }