/** Chunk was on web.js **/
"use strict";
n.d(t, {
  AW: () => v,
  Cm: () => O,
  HU: () => P,
  IV: () => S,
  J0: () => N,
  K8: () => R,
  Ve: () => u,
  ZS: () => d,
  a$: () => C,
  aK: () => b,
  f7: () => E,
  gJ: () => A,
  i0: () => m,
  iA: () => I,
  lb: () => y,
  pv: () => T,
  rL: () => f,
  yf: () => g
}), n(47120), n(192379);
var r = n(463570),
  i = n.n(r),
  o = n(961238),
  a = n.n(o),
  s = n(705108),
  l = n.n(s),
  c = n(180650);
let u = {
    [c.T.FANTASY]: {
      addLogo: !0,
      addAttributionLogo: !0,
      addGradient: !0,
      blur: !0
    },
    [c.T.DISXCORE]: {
      addLogo: !0,
      addAttributionLogo: !0,
      addGradient: !0,
      blur: !0
    },
    [c.T.CYBERPUNK]: {
      addLogo: !0,
      addAttributionLogo: !0,
      addGradient: !0,
      blur: !0
    },
    [c.T.ELEMENTS]: {
      addLogo: !0,
      addAttributionLogo: !0,
      addGradient: !0,
      blur: !0
    },
    [c.T.ANIME_V2]: {
      addLogo: !0,
      addAttributionLogo: !0,
      showDarkBannerText: !0,
      blur: !0
    },
    [c.T.SPRINGTOONS]: {
      addLogo: !0,
      addAttributionLogo: !0,
      logoMaxWidth: "48%",
      showDarkBannerText: !0,
      blur: !0
    },
    [c.T.LOFI_VIBES]: {
      addLogo: !0,
      addAttributionLogo: !0,
      addGradient: !0,
      blur: !0
    },
    [c.T.GALAXY]: {
      addLogo: !0,
      addAttributionLogo: !0,
      addGradient: !0,
      blur: !0
    },
    [c.T.FEELIN_RETRO]: {
      addLogo: !0,
      addAttributionLogo: !0,
      addGradient: !0,
      blur: !0
    },
    [c.T.PIRATES]: {
      addLogo: !0,
      addAttributionLogo: !0,
      addGradient: !0,
      blur: !0
    },
    [c.T.ARCADE]: {
      addLogo: !0,
      addAttributionLogo: !0,
      logoMaxWidth: "35%",
      blur: !0
    },
    [c.T.TIDE]: {
      addLogo: !0,
      addAttributionLogo: !0,
      addGradient: !0,
      blur: !0
    },
    [c.T.DARK_FANTASY]: {
      addAttributionLogo: !0,
      blur: !0
    },
    [c.T.ROBERT]: {
      showDarkBannerText: !0,
      pdpLogoStyle: {
        maxHeight: "60px"
      }
    },
    [c.T.DOJO]: {
      showDarkBannerText: !0
    },
    [c.T.BAND]: {
      animatedBanner: "//cdn.discordapp.com/assets/content/7e328a07e057745faad2366c9ebdf03e2bd69d22dfe8d41c81a10d29a8de7cf7.png"
    },
    [c.T.WARRIOR]: {
      animatedBanner: "https://cdn.discordapp.com/assets/content/db9fb34f490b777a6e9712b129f9e23ad930595d2df73ca85d2b54f247806e01.png"
    },
    [c.T.KAWAII_MODE]: {
      showDarkBannerText: !0,
      heroBanner: {
        darker: !0,
        gradientLeft: "linear-gradient(284deg, rgba(228, 23, 180, 0.00) 29.64%, rgba(228, 23, 180, 0.30) 68.69%)",
        gradientRight: "linear-gradient(76deg, rgba(228, 23, 180, 0.00) 29.64%, rgba(228, 23, 180, 0.30) 68.69%)",
        animationSource: "https://cdn.discordapp.com/assets/collectibles/drops/kawaii_mode/hero_banner.webm"
      },
      animatedBanner: "https://cdn.discordapp.com/assets/collectibles/drops/kawaii_mode/banner_animated.webm"
    },
    [c.T.LOFI_GIRL]: {
      heroBanner: {
        animationSource: "https://cdn.discordapp.com/assets/collectibles/drops/lofi_girl/hero_banner.webm"
      },
      animatedBanner: "https://cdn.discordapp.com/assets/collectibles/drops/lofi_girl/banner_animated.webm"
    }
  },
  d = e => u[e],
  f = "1225876188074082374",
  _ = ["1324454240676216873", "1324454240701124750", "1324454240718164114", "1324454240734806087", "1324454240747262063", "1324454240768364554", "1324454240781074513", "1324454240806109284", "1324454240839663708", "1324454240860766340", "1324454240885932242", "1324454240911097908", "1324454240936263823", "1324454240961429554", "1324454240982401234", "1324454241007435869", "1324454241028538418", "1324454241049509968", "1324454241074544720", "1324454241095647351", "1324454241120813056", "1324454241141784697", "1324454241196310685", "1324454241221476525"],
  p = ["1329609528441831537", "1329609528471195659", "1329609528492429332", "1329609528504746075", "1329609528525979658", "1329609528546693170", "1329609528571858975", "1329611507381829702", "1329611507402801312"],
  h = ["1144308439720394944", "1154896005045694555", "1144307257807491094", "1144305233707671573", "1144307629225672846", "1144308196723408958", "1144307957425778779", "1212569856189407352", "1212570343567261736", "1212570596970467378", "1212581390936178768", "1212569433839636530", "1212581147675205652", "1139323101881061466", "1139323093551165533", "1139323101008642101", "1212582298893946880", "1212582372877541427", "1212582452640350238", "1139323100568244355"],
  g = a()([...l()(_, i()(Array(_.length), new Date("2025-01-16").getTime())), ...l()(p, i()(Array(p.length), new Date("2025-01-31").getTime()))]),
  m = a()([...l()(h, i()(Array(h.length), new Date("2025-03-08").getTime()))]);
var E = function(e) {
    return e[e.VISIBLE = 0] = "VISIBLE", e[e.HIDDEN = 1] = "HIDDEN", e[e.IN = 2] = "IN", e[e.OUT = 3] = "OUT", e
  }({}),
  v = function(e) {
    return e.HOME = "home", e.CATALOG = "catalog", e.ORBS = "orbs", e
  }({});
let b = e => null != e && "home" !== e && "catalog" !== e,
  y = 800,
  O = 6048e5,
  S = 12,
  I = 36,
  T = 1128,
  N = 518,
  A = new Date("2025-01-02T23:59:00-08:00"),
  C = new Date("2025-02-15T23:59:00-08:00"),
  R = 3,
  P = ["1212569433839636530", "1212570343567261736", "1212582298893946880"]