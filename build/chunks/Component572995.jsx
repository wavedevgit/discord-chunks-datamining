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
  Chunk829716 = require("./829716.jsx"),
  Chunk300284 = require("./300284.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk526167 = require("./526167.js"),
  Chunk63063 = require("./63063.js"),
  Chunk260720 = require("./260720.js"),
  Chunk375527 = require("./375527.js"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk353149 = require("./353149.js"),
  Chunk618435 = require("./618435.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk831989 = require("./831989.js"),
  Chunk143525 = require("./143525.js"),
  Chunk261778 = require("./261778.js"),
  Chunk872532 = require("./872532.js"),
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
  Chunk980463 = require("./980463.js"),
  Chunk584470 = require("./584470.js"),
  Chunk810933 = require("./810933.js"),
  Chunk857245 = require("./857245.js"),
  Chunk900303 = require("./900303.js"),
  Chunk989448 = require("./989448.js"),
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
      thumbnail: T,
      assetUrl: T
    },
    serverProfiles: {
      thumbnail: C,
      assetUrl: e ? Q.ZP : X.ZP
    },
    customThemes: {
      thumbnail: z.Z,
      assetUrl: e ? K.Z : q.Z
    },
    displayNameStyles: {
      thumbnail: N.Z,
      assetUrl: e ? A.Z : P.Z
    },
    referralProgram: {
      thumbnail: k.Z,
      assetUrl: e ? M.Z : U.Z
    },
    showYourStyle: {
      thumbnail: Z.Z,
      assetUrl: e ? G.Z : F.Z
    },
    yourSpace: {
      thumbnail: V.Z,
      assetUrl: e ? B.Z : H.Z
    },
    emojis: {
      thumbnail: R.Z,
      assetUrl: e ? w.Z : D.Z
    },
    noLimits: {
      thumbnail: L.Z,
      assetUrl: e ? x.Z : j.Z
    },
    orbRewards: {
      thumbnail: W.Z,
      assetUrl: Y.Z
    }
  }),
  er = () => {
    let e, {
        analyticsLocations: t
      } = (0, s.ZP)(o.Z.PREMIUM_MARKETING_BENTO_BOX),
      T = (0, u.Z)({
        scrollPosition: b.Y_.TRY_IT_OUT,
        analyticsLocations: t
      }),
      C = (0, h.QL)(),
      A = (0, i.useCallback)(() => {
        (0, f.openUserSettings)(d.n.PROFILE_PANEL, {
          section: E.oAB.PROFILE_CUSTOMIZATION,
          analyticsLocations: t
        }, () => (0, c.I)({
          analyticsLocations: t
        }))
      }, [t]),
      N = () => {
        {
          let {
            openUserSettings: e
          } = n(518596);
          e(d.n.APPEARANCE_PANEL, {
            section: E.oAB.APPEARANCE,
            analyticsLocations: t
          })
        }
      },
      P = (0, p.rO)(),
      w = _.Z.getArticleURL(E.BhN.REFERRAL_PROGRAM),
      R = en(P),
      D = {
        name: "serverProfiles",
        title: v.intl.string(v.t.I9TYMg),
        description: v.intl.string(v.t.HMSHeH),
        descriptionCta: v.intl.string(v.t.jVcuVY),
        onClick: T,
        previewImage: R.serverProfiles.thumbnail,
        videoUrl: R.serverProfiles.assetUrl
      },
      x = {
        name: "referralProgram",
        title: v.intl.string(v.t.tPY4o9),
        description: v.intl.format(v.t.jRPQUH, {
          learnMoreLink: w
        }),
        previewImage: R.referralProgram.thumbnail,
        videoUrl: R.referralProgram.assetUrl
      },
      L = {
        name: "customThemes",
        title: v.intl.string(S.default.XokIHM),
        description: v.intl.string(S.default["7esQMC"]),
        descriptionCta: v.intl.string(v.t.jVcuVY),
        previewImage: R.customThemes.thumbnail,
        onClick: () => {
          (0, l.XO)(l.wh.CUSTOM_THEME)
        },
        videoUrl: R.customThemes.assetUrl
      },
      j = {
        name: "displayNameStyles",
        title: v.intl.string(I.default.ABtBDQ),
        description: v.intl.string(I.default.MFNXZh),
        descriptionCta: v.intl.string(v.t.jVcuVY),
        previewImage: R.displayNameStyles.thumbnail,
        onClick: A,
        badgeText: v.intl.string(v.t.y2b7CA).toLocaleUpperCase(),
        videoUrl: R.displayNameStyles.assetUrl
      },
      M = {
        name: "premiumGroup",
        title: v.intl.formatToPlainString(y.default.VFEDDB, {
          premiumGroupProductName: (0, g.sO)()
        }),
        description: v.intl.formatToPlainString(y.default.WudmR3, {
          totalSeats: g.Q5,
          premiumGroupProductName: (0, g.sO)()
        }),
        descriptionCta: v.intl.string(v.t.hvVgAZ),
        previewImage: R.premiumGroup.thumbnail,
        videoUrl: R.premiumGroup.assetUrl,
        onClick: () => {
          (0, a.openModalLazy)(async () => {
            let {
              default: e
            } = await n.e("33638").then(n.bind(n, 837244));
            return t => (0, r.jsx)(e, $({}, t))
          })
        },
        badgeText: v.intl.string(v.t.oW0eUd).toLocaleUpperCase(),
        badgeVariant: "expressive"
      },
      k = {
        name: "showYourStyle",
        title: v.intl.string(v.t.Ij3Zmv),
        description: v.intl.string(v.t.UsOUxY),
        descriptionCta: v.intl.string(v.t.jVcuVY),
        previewImage: R.showYourStyle.thumbnail,
        onClick: T,
        videoUrl: R.showYourStyle.assetUrl
      },
      U = {
        name: "yourSpace",
        title: v.intl.string(v.t.Wme3nX),
        description: v.intl.string(v.t["/aAIqV"]),
        descriptionCta: v.intl.string(v.t.jVcuVY),
        previewImage: R.yourSpace.thumbnail,
        onClick: N,
        videoUrl: R.yourSpace.assetUrl
      },
      G = {
        name: "emojis",
        title: v.intl.string(v.t.zY5PPb),
        description: v.intl.string(v.t.R5Xag2),
        previewImage: R.emojis.thumbnail,
        videoUrl: R.emojis.assetUrl
      },
      Z = {
        name: "noLimits",
        title: v.intl.string(v.t["6b3ydG"]),
        description: v.intl.string(v.t["Y+IJyg"]),
        previewImage: R.noLimits.thumbnail,
        videoUrl: R.noLimits.assetUrl
      },
      {
        orbsRewardAmount: F,
        isInTreatment: B
      } = (0, m.er)("useBentoBoxes"),
      V = {
        name: "orbRewards",
        title: v.intl.string(O.default["ZFJ/NU"]),
        description: v.intl.formatToPlainString(O.default.VuvFfT, {
          orbsCount: F
        }),
        descriptionCta: v.intl.string(v.t.hvVgAZ),
        onClick: () => {
          window.open(_.Z.getArticleURL(E.BhN.ORBS_REWARDS_FAQ), "_blank")
        },
        previewImage: R.orbRewards.thumbnail,
        previewImageStyle: "overlay",
        backgroundVideoUrl: R.orbRewards.assetUrl,
        badgeText: v.intl.string(v.t.oW0eUd).toLocaleUpperCase(),
        badgeVariant: "expressive"
      },
      H = [
        [k],
        [U],
        [G, Z]
      ];
    return {
      whatsNewBoxes: e = C ? B ? [
        [M],
        [V, x]
      ] : [
        [M],
        [D, x]
      ] : B ? [
        [V],
        [D, x]
      ] : [
        [j],
        [L, x]
      ],
      bestOfBoxes: H
    }
  }