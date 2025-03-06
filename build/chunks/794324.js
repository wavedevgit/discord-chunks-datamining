/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  YG: () => c,
  hr: () => i,
  tK: () => d
});
var r = n(192379),
  l = n(884697),
  a = n(619899),
  s = n(281598),
  o = n(215023);
let i = e => {
    let t = (0, a.z)(s.Fr.HERO_LOGO),
      n = (0, a.z)(s.Fr.HERO_BANNER_STATIC),
      l = (0, a.z)(s.Fr.HERO_BANNER_ANIMATED);
    return r.useMemo(() => {
      var r, a, s, i, c;
      let d = (0, o.ZS)(e.categorySkuId);
      return {
        bannerOverride: d,
        heroLogo: null != t ? t : e.logoUrl,
        heroBannerStatic: null !== (i = null != n ? n : null === (r = e.bannerAsset) || void 0 === r ? void 0 : r.static) && void 0 !== i ? i : e.fallbackBannerUrl,
        heroBannerAnimated: null !== (c = null != l ? l : null == d ? void 0 : null === (a = d.heroBanner) || void 0 === a ? void 0 : a.animationSource) && void 0 !== c ? c : null === (s = e.bannerAsset) || void 0 === s ? void 0 : s.animated
      }
    }, [t, n, l, e])
  },
  c = (e, t) => {
    let n = (0, a.z)(s.Fr.FEATURED_BLOCK);
    return r.useMemo(() => {
      var r;
      let a = null == e ? void 0 : e.featuredBlock,
        s = null != a ? (0, l.uV)(a, {
          size: o.J0,
          format: "png"
        }) : void 0;
      return {
        featuredBlockBanner: null !== (r = null != n ? n : null == t ? void 0 : t.bannerUrl) && void 0 !== r ? r : s
      }
    }, [n, e, t])
  },
  d = e => {
    let t = (0, a.z)(s.Fr.CATEGORY_BANNER_STATIC),
      n = (0, a.z)(s.Fr.CATEGORY_BANNER_ANIMATED);
    return r.useMemo(() => {
      var r, l, a, s;
      let i = (0, o.ZS)(e.skuId);
      return {
        categoryBannerStatic: null !== (a = null != t ? t : null === (r = e.bannerAsset) || void 0 === r ? void 0 : r.static) && void 0 !== a ? a : e.banner,
        categoryBannerAnimated: null !== (s = null != n ? n : null == i ? void 0 : i.animatedBanner) && void 0 !== s ? s : null === (l = e.bannerAsset) || void 0 === l ? void 0 : l.animated
      }
    }, [t, n, e])
  }