/** Chunk was on web.js **/
/** chunk id: 572995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P6: () => ee,
  ZP: () => er,
  y$: () => et
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk952265 = require("./952265.js"),
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
  Chunk340625 = require("./340625.js"),
  Chunk260720 = require("./260720.js"),
  Chunk469165 = require("./469165.jsx"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk831989 = require("./831989.js"),
  Chunk143525 = require("./143525.js"),
  Chunk261778 = require("./261778.js"),
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
  Chunk378325 = require("./378325.js"),
  Chunk962526 = require("./962526.js");

function J(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function $(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      J(e, t, n[t])
    })
  }
  return e
}
var ee = function(e) {
    return e.CONTAINED = "contained", e.OVERLAY = "overlay", e
  }({}),
  et = function(e) {
    return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e
  }({});
let en = e => ({
    premiumGroup: {
      thumbnail: C,
      assetUrl: C
    },
    serverProfiles: {
      thumbnail: A,
      assetUrl: e ? Q.ZP : X.ZP
    },
    customThemes: {
      thumbnail: z.Z,
      assetUrl: e ? K.Z : q.Z
    },
    displayNameStyles: {
      thumbnail: R.Z,
      assetUrl: e ? P.Z : w.Z
    },
    recurring3PPromotions: {
      thumbnail: N.Z,
      assetUrl: " "
    },
    referralProgram: {
      thumbnail: G.Z,
      assetUrl: e ? U.Z : Z.Z
    },
    showYourStyle: {
      thumbnail: B.Z,
      assetUrl: e ? F.Z : V.Z
    },
    yourSpace: {
      thumbnail: Y.Z,
      assetUrl: e ? H.Z : W.Z
    },
    emojis: {
      thumbnail: x.Z,
      assetUrl: e ? D.Z : L.Z
    },
    noLimits: {
      thumbnail: M.Z,
      assetUrl: e ? j.Z : k.Z
    }
  }),
  er = () => {
    let {
      analyticsLocations: e
    } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_MARKETING_BENTO_BOX), t = (0, Chunk300284.Z)({
      scrollPosition: Chunk526761.Y_.TRY_IT_OUT,
      analyticsLocations: module
    }), C = Chunk594928.JH.useExperiment({
      location: "useBentoBoxes"
    }).enabled, A = Chunk340625.Z.useExperiment({
      location: "useBentoBoxes"
    }), N = (0, Chunk260720.QL)(), P = (0, Chunk473749.useCallback)(() => {
      (0, Chunk518596.openUserSettings)(Chunk313789.n.PROFILE_PANEL, {
        section: Chunk981631.oAB.PROFILE_CUSTOMIZATION,
        analyticsLocations: module
      }, () => (0, Chunk829716.I)({
        analyticsLocations: module
      }))
    }, [module]), R = () => {
      {
        letChunk518596 = require("./518596.jsx");
        exports(Chunk313789.n.APPEARANCE_PANEL, {
          section: Chunk981631.oAB.APPEARANCE,
          analyticsLocations: module
        })
      }
    }, w = (0, Chunk526167.rO)(), D = Chunk63063.Z.getArticleURL(Chunk981631.BhN.REFERRAL_PROGRAM), x = en(Chunk967830), L = {
      name: "serverProfiles",
      title: Chunk388032.intl.string(Chunk388032.t.I9TYMg),
      description: Chunk388032.intl.string(Chunk388032.t.HMSHeH),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      onClick: exports,
      previewImage: Chunk406459.serverProfiles.thumbnail,
      videoUrl: Chunk406459.serverProfiles.assetUrl
    }, j = {
      name: "referralProgram",
      title: Chunk388032.intl.string(Chunk388032.t.tPY4o9),
      description: Chunk388032.intl.format(Chunk388032.t.jRPQUH, {
        learnMoreLink: Chunk742694
      }),
      previewImage: Chunk406459.referralProgram.thumbnail,
      videoUrl: Chunk406459.referralProgram.assetUrl
    }, M = {
      name: "customThemes",
      title: Chunk388032.intl.string(Chunk831989.default.XokIHM),
      description: Chunk388032.intl.string(Chunk831989.default["7esQMC"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      previewImage: Chunk406459.customThemes.thumbnail,
      onClick: () => {
        (0, Chunk550385.XO)(Chunk550385.wh.CUSTOM_THEME)
      },
      videoUrl: Chunk406459.customThemes.assetUrl
    }, k = {
      name: "displayNameStyles",
      title: Chunk388032.intl.string(Chunk143525.default.ABtBDQ),
      description: Chunk388032.intl.string(Chunk143525.default.MFNXZh),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      previewImage: Chunk406459.displayNameStyles.thumbnail,
      onClick: Chunk94314,
      badgeText: Chunk388032.intl.string(Chunk388032.t.y2b7CA).toLocaleUpperCase(),
      videoUrl: Chunk406459.displayNameStyles.assetUrl
    }, U = {
      name: "premiumGroup",
      title: Chunk388032.intl.formatToPlainString(Chunk353149.default.VFEDDB, {
        premiumGroupProductName: (0, Chunk282793.sO)()
      }),
      description: Chunk388032.intl.formatToPlainString(Chunk353149.default.WudmR3, {
        totalSeats: Chunk282793.Q5,
        premiumGroupProductName: (0, Chunk282793.sO)()
      }),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.hvVgAZ),
      previewImage: Chunk406459.premiumGroup.thumbnail,
      videoUrl: Chunk406459.premiumGroup.assetUrl,
      onClick: () => {
        (0, Chunk952265.openModalLazy)(async () => {
          let {
            default: e
          } = await require.e("33638").then(require.bind(require, 837244));
          return t => (0, r.jsx)(e, $({}, t))
        })
      },
      badgeText: Chunk388032.intl.string(Chunk388032.t.oW0eUd).toLocaleUpperCase(),
      badgeVariant: "expressive"
    }, G = {
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
      previewImage: Chunk406459.recurring3PPromotions.thumbnail,
      videoUrl: Chunk406459.recurring3PPromotions.thumbnail
    }, Z = {
      name: "showYourStyle",
      title: Chunk388032.intl.string(Chunk388032.t.Ij3Zmv),
      description: Chunk388032.intl.string(Chunk388032.t.UsOUxY),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      previewImage: Chunk406459.showYourStyle.thumbnail,
      onClick: exports,
      videoUrl: Chunk406459.showYourStyle.assetUrl
    }, F = {
      name: "yourSpace",
      title: Chunk388032.intl.string(Chunk388032.t.Wme3nX),
      description: Chunk388032.intl.string(Chunk388032.t["/aAIqV"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
      previewImage: Chunk406459.yourSpace.thumbnail,
      onClick: Chunk548475,
      videoUrl: Chunk406459.yourSpace.assetUrl
    }, B = {
      name: "emojis",
      title: Chunk388032.intl.string(Chunk388032.t.zY5PPb),
      description: Chunk388032.intl.string(Chunk388032.t.R5Xag2),
      previewImage: Chunk406459.emojis.thumbnail,
      videoUrl: Chunk406459.emojis.assetUrl
    }, V = {
      name: "noLimits",
      title: Chunk388032.intl.string(Chunk388032.t["6b3ydG"]),
      description: Chunk388032.intl.string(Chunk388032.t["Y+IJyg"]),
      previewImage: Chunk406459.noLimits.thumbnail,
      videoUrl: Chunk406459.noLimits.assetUrl
    };
    return {
      whatsNewBoxes: Chunk836236 ? [
        [Chunk739790],
        [Chunk91830, Chunk32357]
      ] : Chunk261778 ? [
        [Chunk801794],
        [Chunk147146, Chunk32357]
      ] : Chunk872532.enabled ? [
        [Chunk779235],
        [Chunk91830, Chunk32357]
      ] : [
        [Chunk147146],
        [Chunk91830, Chunk32357]
      ],
      bestOfBoxes: [
        [Chunk511974],
        [Chunk508111],
        [Chunk459872, Chunk860751]
      ]
    }
  }