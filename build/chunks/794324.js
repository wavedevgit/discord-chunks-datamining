/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  YG: () => c,
  hr: () => a,
  tK: () => u
});
var n = r(192379),
  l = r(884697),
  i = r(619899),
  o = r(281598),
  s = r(215023);
let a = e => {
    let t = (0, i.z)(o.Fr.HERO_LOGO),
      r = (0, i.z)(o.Fr.HERO_BANNER_STATIC),
      l = (0, i.z)(o.Fr.HERO_BANNER_ANIMATED);
    return n.useMemo(() => {
      var n, i, o, a, c;
      let u = (0, s.ZS)(e.categorySkuId);
      return {
        bannerOverride: u,
        heroLogo: null != t ? t : e.logoUrl,
        heroBannerStatic: null !== (a = null != r ? r : null === (n = e.bannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== a ? a : e.fallbackBannerUrl,
        heroBannerAnimated: null !== (c = null != l ? l : null == u ? void 0 : null === (i = u.heroBanner) || void 0 === i ? void 0 : i.animationSource) && void 0 !== c ? c : null === (o = e.bannerAsset) || void 0 === o ? void 0 : o.animated
      }
    }, [t, r, l, e])
  },
  c = (e, t) => {
    let r = (0, i.z)(o.Fr.FEATURED_BLOCK);
    return n.useMemo(() => {
      var n;
      let i = null == e ? void 0 : e.featuredBlock,
        o = null != i ? (0, l.uV)(i, {
          size: s.J0,
          format: "png"
        }) : void 0;
      return {
        featuredBlockBanner: null !== (n = null != r ? r : null == t ? void 0 : t.bannerUrl) && void 0 !== n ? n : o
      }
    }, [r, e, t])
  },
  u = e => {
    let t = (0, i.z)(o.Fr.CATEGORY_BANNER_STATIC),
      r = (0, i.z)(o.Fr.CATEGORY_BANNER_ANIMATED);
    return n.useMemo(() => {
      var n, l, i, o;
      let a = (0, s.ZS)(e.skuId);
      return {
        categoryBannerStatic: null !== (i = null != t ? t : null === (n = e.bannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== i ? i : e.banner,
        categoryBannerAnimated: null !== (o = null != r ? r : null == a ? void 0 : a.animatedBanner) && void 0 !== o ? o : null === (l = e.bannerAsset) || void 0 === l ? void 0 : l.animated
      }
    }, [t, r, e])
  }