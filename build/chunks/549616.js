/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => f
}), n(653041);
var r = n(979554),
  i = n(778787),
  o = n(803358);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = d(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
class f extends o.Z {
  static fromServer(e) {
    var {
      products: t,
      logo: n,
      hero_ranking: o,
      pdp_bg: a,
      mobile_bg: l,
      success_modal_bg: d,
      mobile_banner: _,
      hero_banner: p,
      hero_banner_asset: h,
      featured_block: g,
      hero_logo: m
    } = e, E = u(e, ["products", "logo", "hero_ranking", "pdp_bg", "mobile_bg", "success_modal_bg", "mobile_banner", "hero_banner", "hero_banner_asset", "featured_block", "hero_logo"]);
    return new f(c(s({}, super.fromServer(E)), {
      products: t.reduce((e, t) => {
        let n = i.Z.fromServer(t);
        return 0 === (n.type !== r.Z.VARIANTS_GROUP && n.items.length) || e.push(n), e
      }, []),
      logo: n,
      heroRanking: o,
      pdpBg: a,
      mobileBg: l,
      successModalBg: d,
      mobileBanner: _,
      heroBanner: p,
      heroBannerAsset: h,
      featuredBlock: g,
      heroLogo: m
    }))
  }
  constructor(e) {
    super(e), a(this, "products", void 0), a(this, "logo", void 0), a(this, "heroRanking", void 0), a(this, "pdpBg", void 0), a(this, "mobileBg", void 0), a(this, "successModalBg", void 0), a(this, "mobileBanner", void 0), a(this, "heroBanner", void 0), a(this, "heroBannerAsset", void 0), a(this, "featuredBlock", void 0), a(this, "heroLogo", void 0), this.products = e.products, this.logo = e.logo, this.heroRanking = e.heroRanking, this.pdpBg = e.pdpBg, this.mobileBg = e.mobileBg, this.successModalBg = e.successModalBg, this.mobileBanner = e.mobileBanner, this.heroBanner = e.heroBanner, this.featuredBlock = e.featuredBlock, this.heroLogo = e.heroLogo, this.heroBannerAsset = e.heroBannerAsset
  }
}