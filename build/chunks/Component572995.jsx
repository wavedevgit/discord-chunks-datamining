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
    } = (0, s.ZP)(o.Z.PREMIUM_MARKETING_BENTO_BOX), t = (0, d.Z)({
      scrollPosition: O.Y_.TRY_IT_OUT,
      analyticsLocations: e
    }), C = c.JH.useExperiment({
      location: "useBentoBoxes"
    }).enabled, A = h.Z.useExperiment({
      location: "useBentoBoxes"
    }), N = (0, g.QL)(), P = (0, i.useCallback)(() => {
      (0, p.openUserSettings)(f.n.PROFILE_PANEL, {
        section: y.oAB.PROFILE_CUSTOMIZATION,
        analyticsLocations: e
      }, () => (0, u.I)({
        analyticsLocations: e
      }))
    }, [e]), R = () => {
      {
        let {
          openUserSettings: t
        } = n(518596);
        t(f.n.APPEARANCE_PANEL, {
          section: y.oAB.APPEARANCE,
          analyticsLocations: e
        })
      }
    }, w = (0, _.rO)(), D = m.Z.getArticleURL(y.BhN.REFERRAL_PROGRAM), x = en(w), L = {
      name: "serverProfiles",
      title: S.intl.string(S.t.I9TYMg),
      description: S.intl.string(S.t.HMSHeH),
      descriptionCta: S.intl.string(S.t.jVcuVY),
      onClick: t,
      previewImage: x.serverProfiles.thumbnail,
      videoUrl: x.serverProfiles.assetUrl
    }, j = {
      name: "referralProgram",
      title: S.intl.string(S.t.tPY4o9),
      description: S.intl.format(S.t.jRPQUH, {
        learnMoreLink: D
      }),
      previewImage: x.referralProgram.thumbnail,
      videoUrl: x.referralProgram.assetUrl
    }, M = {
      name: "customThemes",
      title: S.intl.string(I.default.XokIHM),
      description: S.intl.string(I.default["7esQMC"]),
      descriptionCta: S.intl.string(S.t.jVcuVY),
      previewImage: x.customThemes.thumbnail,
      onClick: () => {
        (0, l.XO)(l.wh.CUSTOM_THEME)
      },
      videoUrl: x.customThemes.assetUrl
    }, k = {
      name: "displayNameStyles",
      title: S.intl.string(T.default.ABtBDQ),
      description: S.intl.string(T.default.MFNXZh),
      descriptionCta: S.intl.string(S.t.jVcuVY),
      previewImage: x.displayNameStyles.thumbnail,
      onClick: P,
      badgeText: S.intl.string(S.t.y2b7CA).toLocaleUpperCase(),
      videoUrl: x.displayNameStyles.assetUrl
    }, U = {
      name: "premiumGroup",
      title: S.intl.formatToPlainString(v.default.VFEDDB, {
        premiumGroupProductName: (0, b.sO)()
      }),
      description: S.intl.formatToPlainString(v.default.WudmR3, {
        totalSeats: b.Q5,
        premiumGroupProductName: (0, b.sO)()
      }),
      descriptionCta: S.intl.string(S.t.hvVgAZ),
      previewImage: x.premiumGroup.thumbnail,
      videoUrl: x.premiumGroup.assetUrl,
      onClick: () => {
        (0, a.openModalLazy)(async () => {
          let {
            default: e
          } = await n.e("33638").then(n.bind(n, 837244));
          return t => (0, r.jsx)(e, $({}, t))
        })
      },
      badgeText: S.intl.string(S.t.oW0eUd).toLocaleUpperCase(),
      badgeVariant: "expressive"
    }, G = {
      name: "recurring3PPromotions",
      title: S.intl.string(S.t.m7PucM),
      description: S.intl.format(S.t.mqSNPd, {}),
      descriptionCta: S.intl.formatToPlainString(S.t.Bf1cBD, {
        helpdeskArticle: m.Z.getArticleURL(y.BhN.RECURRING_PROMOTION)
      }),
      onClick: () => (0, E.wQ)({
        analyticsLocations: e
      }),
      badgeText: S.intl.string(S.t.oW0eUd).toLocaleUpperCase(),
      previewImage: x.recurring3PPromotions.thumbnail,
      videoUrl: x.recurring3PPromotions.thumbnail
    }, Z = {
      name: "showYourStyle",
      title: S.intl.string(S.t.Ij3Zmv),
      description: S.intl.string(S.t.UsOUxY),
      descriptionCta: S.intl.string(S.t.jVcuVY),
      previewImage: x.showYourStyle.thumbnail,
      onClick: t,
      videoUrl: x.showYourStyle.assetUrl
    }, F = {
      name: "yourSpace",
      title: S.intl.string(S.t.Wme3nX),
      description: S.intl.string(S.t["/aAIqV"]),
      descriptionCta: S.intl.string(S.t.jVcuVY),
      previewImage: x.yourSpace.thumbnail,
      onClick: R,
      videoUrl: x.yourSpace.assetUrl
    }, B = {
      name: "emojis",
      title: S.intl.string(S.t.zY5PPb),
      description: S.intl.string(S.t.R5Xag2),
      previewImage: x.emojis.thumbnail,
      videoUrl: x.emojis.assetUrl
    }, V = {
      name: "noLimits",
      title: S.intl.string(S.t["6b3ydG"]),
      description: S.intl.string(S.t["Y+IJyg"]),
      previewImage: x.noLimits.thumbnail,
      videoUrl: x.noLimits.assetUrl
    };
    return {
      whatsNewBoxes: N ? [
        [U],
        [L, j]
      ] : C ? [
        [k],
        [M, j]
      ] : A.enabled ? [
        [G],
        [L, j]
      ] : [
        [M],
        [L, j]
      ],
      bestOfBoxes: [
        [Z],
        [F],
        [B, V]
      ]
    }
  }