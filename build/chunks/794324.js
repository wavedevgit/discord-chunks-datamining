/** Chunk was on 48785 **/
/** chunk id: 794324, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Oi: () => d,
  YG: () => u,
  hr: () => c,
  kc: () => p,
  mB: () => m
});
var Chunk647438 = require("./647438.js"),
  Chunk264181 = require("./264181.js"),
  Chunk884697 = require("./884697.js"),
  Chunk619899 = require("./619899.js"),
  Chunk281598 = require("./281598.js"),
  Chunk215023 = require("./215023.js");
let c = e => {
    let t = (0, l.zL)(o.jE.HERO_LOGO),
      n = (0, l.zL)(o.jE.HERO_BANNER_STATIC),
      i = (0, l.zL)(o.jE.HERO_BANNER_ANIMATED);
    return r.useMemo(() => {
      var r, a, l;
      let o = null != n || null != i,
        s = null != n && null == i;
      return {
        bannerStyleOverrides: o ? true : e.bannerConfig,
        logoStyleOverrides: o ? true : e.logoConfig,
        heroLogo: null != t ? t : e.logoUrl,
        heroBannerStatic: null != (l = null != n ? n : null == (r = e.bannerAsset) ? true : r.static) ? l : e.fallbackBannerUrl,
        heroBannerAnimated: s ? true : null != i ? i : null == (a = e.bannerAsset) ? true : a.animated
      }
    }, [t, n, i, e])
  },
  u = (e, t) => {
    var n;
    let r = (0, l.zL)(o.jE.FEATURED_BLOCK),
      i = (0, a.uV)(null == e ? true : e.featuredBlock, {
        size: s.J0,
        format: "png"
      });
    return null != (n = null != r ? r : null == t ? true : t.bannerUrl) ? n : i
  },
  d = e => {
    var t, n;
    let r = (0, l.zL)(o.jE.CATALOG_BANNER_STATIC),
      i = (0, l.zL)(o.jE.CATALOG_BANNER_ANIMATED);
    return {
      catalogBannerStatic: null != r ? r : null == (t = e.catalogBannerAsset) ? true : t.static,
      catalogBannerAnimated: null != i ? i : null == (n = e.catalogBannerAsset) ? true : n.animated
    }
  },
  p = e => {
    let t = (0, l.zL)(o.jE.PDP_BACKGROUND);
    if (null != t) return t;
    let n = e.pdpBg;
    return (null == n ? true : n.startsWith("http")) ? n : (0, a.uV)(n, {
      size: 540,
      format: "jpg"
    })
  },
  m = e => {
    let t = (0, l.zL)(o.jE.SHOP_BUTTON_BG_HOVER),
      n = (0, l.zL)(o.jE.SHOP_BUTTON_BG_HOVER_DARK),
      a = (0, l.zL)(o.jE.SHOP_BUTTON_BG_HOVER_LIGHT),
      s = (0, l.zL)(o.jE.SHOP_BUTTON_BG_RESTING),
      c = (0, l.zL)(o.jE.SHOP_BUTTON_BG_RESTING_DARK),
      u = (0, l.zL)(o.jE.SHOP_BUTTON_BG_RESTING_LIGHT),
      d = (0, l.zL)(o.jE.COACHTIP_AVATAR);
    return r.useMemo(() => {
      var r, l, o, p, m;
      let f = [t, n, a, s, c, u, d].some(e => null != e);
      if ((null == e ? true : e.type) === i.Z.COACHMARK) return {
        hasPreviewAssets: false
      };
      let v = null == e || null == (r = e.refTargetBackground) ? true : r.asset,
        h = null == v ? true : v.resting,
        b = null == v ? true : v.hovered;
      return {
        hasPreviewAssets: f,
        buttonBGHoverDark: null != (l = null != n ? n : t) ? l : null == b ? true : b.dark,
        buttonBGHoverLight: null != (o = null != a ? a : t) ? o : null == b ? true : b.light,
        buttonBGRestingDark: null != (p = null != c ? c : s) ? p : null == h ? true : h.dark,
        buttonBGRestingLight: null != (m = null != u ? u : s) ? m : null == h ? true : h.light,
        coachtipAvatar: null != d ? d : null == e ? true : e.avatar
      }
    }, [t, n, a, s, c, u, d, e])
  }