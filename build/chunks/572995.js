/** Chunk was on web.js **/
/** chunk id: 572995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NA: () => ed,
  ZP: () => ep,
  y$: () => eu
});
var Chunk473749 = require("./473749.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk550385 = require("./550385.js"),
  Chunk594928 = require("./594928.js"),
  Chunk829716 = require("./829716.jsx"),
  Chunk300284 = require("./300284.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk526167 = require("./526167.js"),
  Chunk63063 = require("./63063.js"),
  Chunk283066 = require("./283066.js"),
  Chunk340625 = require("./340625.js"),
  Chunk469165 = require("./469165.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk831989 = require("./831989.js"),
  Chunk143525 = require("./143525.js"),
  Chunk509614 = require("./509614.js"),
  Chunk880511 = require("./880511.js"),
  Chunk985443 = require("./985443.js"),
  Chunk612253 = require("./612253.js"),
  Chunk872532 = require("./872532.js"),
  Chunk836236 = require("./836236.js"),
  Chunk94314 = require("./94314.js"),
  Chunk548475 = require("./548475.js"),
  Chunk967830 = require("./967830.js"),
  Chunk742694 = require("./742694.js"),
  Chunk406459 = require("./406459.js"),
  Chunk91830 = require("./91830.js"),
  Chunk32357 = require("./32357.js"),
  Chunk147146 = require("./147146.js"),
  Chunk801794 = require("./801794.js"),
  Chunk739790 = require("./739790.js"),
  Chunk779235 = require("./779235.js"),
  Chunk511974 = require("./511974.js"),
  Chunk508111 = require("./508111.js"),
  Chunk459872 = require("./459872.js"),
  Chunk860751 = require("./860751.js"),
  Chunk584470 = require("./584470.js"),
  Chunk810933 = require("./810933.js"),
  Chunk857245 = require("./857245.js"),
  Chunk383057 = require("./383057.js"),
  Chunk370026 = require("./370026.js"),
  Chunk120368 = require("./120368.js"),
  Chunk73500 = require("./73500.js"),
  Chunk763341 = require("./763341.js"),
  Chunk778851 = require("./778851.js"),
  Chunk399299 = require("./399299.js"),
  Chunk646560 = require("./646560.js"),
  Chunk27217 = require("./27217.js"),
  Chunk918009 = require("./918009.js"),
  Chunk378325 = require("./378325.js"),
  Chunk962526 = require("./962526.js"),
  Chunk670948 = require("./670948.js"),
  Chunk965468 = require("./965468.js"),
  Chunk222419 = require("./222419.js"),
  Chunk740778 = require("./740778.js");

function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ec(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      el(e, t, n[t])
    })
  }
  return e
}
var eu = function(e) {
    return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e
  }({}),
  ed = function(e) {
    return e.REFERRAL_PROGRAM = "referralProgram", e.SERVER_PROFILES = "serverProfiles", e.SHOW_YOUR_STYLE = "showYourStyle", e.YOUR_SPACE = "yourSpace", e.EMOJIS = "emojis", e.NO_LIMITS = "noLimits", e.CUSTOM_THEMES = "customThemes", e.DISPLAY_NAME_STYLES = "displayNameStyles", e.RECURRING_3P_PROMOTIONS = "recurring3PPromotions", e
  }({});
let ef = (e, t) => ec({
    serverProfiles: {
      thumbnail: C,
      assetUrl: e ? en.ZP : er.ZP
    },
    customThemes: {
      thumbnail: K.Z,
      assetUrl: e ? W.Z : z.Z
    },
    displayNameStyles: {
      thumbnail: P.Z,
      assetUrl: e ? N.Z : R.Z
    },
    recurring3PPromotions: {
      thumbnail: A.Z,
      assetUrl: " "
    }
  }, t ? {
    referralProgram: {
      thumbnail: U.Z,
      assetUrl: e ? k.Z : G.Z
    },
    showYourStyle: {
      thumbnail: F.Z,
      assetUrl: e ? Z.Z : B.Z
    },
    yourSpace: {
      thumbnail: H.Z,
      assetUrl: e ? V.Z : Y.Z
    },
    emojis: {
      thumbnail: D.Z,
      assetUrl: e ? w.Z : x.Z
    },
    noLimits: {
      thumbnail: j.Z,
      assetUrl: e ? L.Z : M.Z
    }
  } : {
    referralProgram: {
      thumbnail: ee.Z,
      assetUrl: e ? $.ZP : et.ZP
    },
    showYourStyle: {
      thumbnail: T,
      assetUrl: e ? ei.Z : ea.Z
    },
    yourSpace: {
      thumbnail: I,
      assetUrl: e ? eo.Z : es.Z
    },
    emojis: {
      thumbnail: v,
      assetUrl: e ? q.ZP : Q.ZP
    },
    noLimits: {
      thumbnail: S,
      assetUrl: e ? X.ZP : J.ZP
    }
  }),
  ep = () => {
    let {
      analyticsLocations: e
    } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_MARKETING_BENTO_BOX), t = (0, Chunk300284.Z)({
      scrollPosition: Chunk526761.Y_.TRY_IT_OUT,
      analyticsLocations: module
    }), v = Chunk594928.JH.useExperiment({
      location: "useBentoBoxes"
    }).enabled, S = Chunk340625.Z.useExperiment({
      location: "useBentoBoxes"
    }), I = (0, Chunk473749.useCallback)(() => {
      (0, Chunk518596.openUserSettings)(Chunk313789.n.PROFILE_PANEL, {
        section: Chunk981631.oAB.PROFILE_CUSTOMIZATION,
        analyticsLocations: module
      }, () => (0, Chunk829716.I)({
        analyticsLocations: module
      }))
    }, [module]), T = () => {
      {
        letChunk518596 = require("./518596.jsx");
        exports(Chunk313789.n.APPEARANCE_PANEL, {
          section: Chunk981631.oAB.APPEARANCE,
          analyticsLocations: module
        })
      }
    }, C = (0, Chunk526167.rO)(), A = Chunk63063.Z.getArticleURL(Chunk981631.BhN.REFERRAL_PROGRAM), N = ef(Chunk872532, (0, Chunk283066.Z)({
      location: "useBentoBoxes"
    })), P = {
      name: "serverProfiles",
      title: Chunk388032.intl.string(Chunk388032.t.I9TYMg),
      description: Chunk388032.intl.string(Chunk388032.t.HMSHeH),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      onClick: exports,
      previewImage: Chunk94314.serverProfiles.thumbnail,
      videoUrl: Chunk94314.serverProfiles.assetUrl
    }, R = {
      name: "referralProgram",
      title: Chunk388032.intl.string(Chunk388032.t.tPY4o9),
      description: Chunk388032.intl.format(Chunk388032.t.jRPQUH, {
        learnMoreLink: Chunk836236
      }),
      previewImage: Chunk94314.referralProgram.thumbnail,
      videoUrl: Chunk94314.referralProgram.assetUrl
    }, w = {
      name: "customThemes",
      title: Chunk388032.intl.string(Chunk831989.default.XokIHM),
      description: Chunk388032.intl.string(Chunk831989.default["7esQMC"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      previewImage: Chunk94314.customThemes.thumbnail,
      onClick: () => {
        (0, Chunk550385.XO)(Chunk550385.wh.CUSTOM_THEME)
      },
      videoUrl: Chunk94314.customThemes.assetUrl
    }, D = {
      name: "displayNameStyles",
      title: Chunk388032.intl.string(Chunk143525.default.ABtBDQ),
      description: Chunk388032.intl.string(Chunk143525.default.MFNXZh),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      previewImage: Chunk94314.displayNameStyles.thumbnail,
      onClick: Chunk985443,
      badgeText: Chunk388032.intl.string(Chunk388032.t.y2b7CA).toLocaleUpperCase(),
      videoUrl: Chunk94314.displayNameStyles.assetUrl
    }, x = {
      name: "recurring3PPromotions",
      title: Chunk388032.intl.string(Chunk388032.t.m7PucM),
      description: Chunk388032.intl.format(Chunk388032.t.mqSNPd, {}),
      descriptionCta: Chunk388032.intl.formatToPlainString(Chunk388032.t.Bf1cBD, {
        helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.RECURRING_PROMOTION)
      }),
      onClick: () => (0, Chunk469165.wQ)({
        analyticsLocations: module
      }),
      badgeText: Chunk388032.intl.string(Chunk388032.t.oW0eUd).toLocaleUpperCase(),
      previewImage: Chunk94314.recurring3PPromotions.thumbnail,
      videoUrl: Chunk94314.recurring3PPromotions.thumbnail
    }, L = {
      name: "showYourStyle",
      title: Chunk388032.intl.string(Chunk388032.t.Ij3Zmv),
      description: Chunk388032.intl.string(Chunk388032.t.UsOUxY),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      previewImage: Chunk94314.showYourStyle.thumbnail,
      onClick: exports,
      videoUrl: Chunk94314.showYourStyle.assetUrl
    }, j = {
      name: "yourSpace",
      title: Chunk388032.intl.string(Chunk388032.t.Wme3nX),
      description: Chunk388032.intl.string(Chunk388032.t["/aAIqV"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      previewImage: Chunk94314.yourSpace.thumbnail,
      onClick: Chunk612253,
      videoUrl: Chunk94314.yourSpace.assetUrl
    }, M = {
      name: "emojis",
      title: Chunk388032.intl.string(Chunk388032.t.zY5PPb),
      description: Chunk388032.intl.string(Chunk388032.t.R5Xag2),
      previewImage: Chunk94314.emojis.thumbnail,
      videoUrl: Chunk94314.emojis.assetUrl
    }, k = {
      name: "noLimits",
      title: Chunk388032.intl.string(Chunk388032.t["6b3ydG"]),
      description: Chunk388032.intl.string(Chunk388032.t["Y+IJyg"]),
      previewImage: Chunk94314.noLimits.thumbnail,
      videoUrl: Chunk94314.noLimits.assetUrl
    };
    return {
      whatsNewBoxes: Chunk509614 ? [
        [Chunk406459],
        [Chunk742694, Chunk967830]
      ] : Chunk880511.enabled ? [
        [Chunk91830],
        [Chunk548475, Chunk967830]
      ] : [
        [Chunk742694],
        [Chunk548475, Chunk967830]
      ],
      bestOfBoxes: [
        [Chunk32357],
        [Chunk147146],
        [Chunk801794, Chunk739790]
      ]
    }
  }