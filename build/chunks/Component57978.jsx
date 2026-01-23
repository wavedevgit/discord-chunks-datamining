/** Chunk was on web.js **/
/** chunk id: 57978, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A0: () => et,
  Ay: () => er,
  Tb: () => ee
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk192308 = require("./192308.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk793943 = require("./793943.js"),
  Chunk259065 = require("./259065.jsx"),
  Chunk206835 = require("./206835.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk676279 = require("./676279.js"),
  Chunk975571 = require("./975571.js"),
  Chunk612669 = require("./612669.js"),
  Chunk84483 = require("./84483.js"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js"),
  Chunk519412 = require("./519412.js"),
  Chunk49370 = require("./49370.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk520650 = require("./520650.js"),
  Chunk927961 = require("./927961.js"),
  Chunk817577 = require("./817577.js"),
  Chunk748222 = require("./748222.js"),
  Chunk743501 = require("./743501.js"),
  Chunk652700 = require("./652700.js"),
  Chunk282818 = require("./282818.js"),
  Chunk965132 = require("./965132.js"),
  Chunk576765 = require("./576765.js"),
  Chunk88433 = require("./88433.js"),
  Chunk206771 = require("./206771.js"),
  Chunk533234 = require("./533234.js"),
  Chunk39508 = require("./39508.js"),
  Chunk198962 = require("./198962.js"),
  Chunk636395 = require("./636395.js"),
  Chunk871891 = require("./871891.js"),
  Chunk116427 = require("./116427.js"),
  Chunk281146 = require("./281146.js"),
  Chunk324108 = require("./324108.js"),
  Chunk158178 = require("./158178.js"),
  Chunk199579 = require("./199579.js"),
  Chunk170467 = require("./170467.js"),
  Chunk909340 = require("./909340.js"),
  Chunk455482 = require("./455482.js"),
  Chunk573573 = require("./573573.js"),
  Chunk233572 = require("./233572.js"),
  Chunk437466 = require("./437466.js"),
  Chunk23145 = require("./23145.js"),
  Chunk56582 = require("./56582.js");

function $(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      $(e, t, n[t])
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
      thumbnail: S,
      assetUrl: S
    },
    serverProfiles: {
      thumbnail: T,
      assetUrl: e ? Z.Ay : Q.Ay
    },
    customThemes: {
      thumbnail: q.A,
      assetUrl: e ? z.A : X.A
    },
    displayNameStyles: {
      thumbnail: N.A,
      assetUrl: e ? C.A : R.A
    },
    referralProgram: {
      thumbnail: k.A,
      assetUrl: e ? M.A : U.A
    },
    showYourStyle: {
      thumbnail: V.A,
      assetUrl: e ? G.A : F.A
    },
    yourSpace: {
      thumbnail: H.A,
      assetUrl: e ? B.A : Y.A
    },
    emojis: {
      thumbnail: P.A,
      assetUrl: e ? w.A : D.A
    },
    noLimits: {
      thumbnail: L.A,
      assetUrl: e ? x.A : j.A
    },
    orbRewards: {
      thumbnail: K.A,
      assetUrl: W.A
    }
  }),
  er = () => {
    let e, {
        analyticsLocations: t
      } = (0, o.Ay)(s.A.PREMIUM_MARKETING_BENTO_BOX),
      S = (0, u.A)({
        scrollPosition: y._F.TRY_IT_OUT,
        analyticsLocations: t
      }),
      T = (0, h.O9)(),
      C = (0, i.useCallback)(() => {
        (0, f.openUserSettings)(d.X.PROFILE_PANEL, {
          section: E.nc_.PROFILE_CUSTOMIZATION,
          analyticsLocations: t
        }, () => (0, c.L)({
          analyticsLocations: t
        }))
      }, [t]),
      N = () => {
        {
          let {
            openUserSettings: e
          } = n(840065);
          e(d.X.APPEARANCE_PANEL, {
            section: E.nc_.APPEARANCE,
            analyticsLocations: t
          })
        }
      },
      R = (0, p.TM)(),
      w = _.A.getArticleURL(E.MVz.REFERRAL_PROGRAM),
      P = en(R),
      D = {
        name: "serverProfiles",
        title: v.intl.string(v.t.I9TYMg),
        description: v.intl.string(v.t.HMSHeH),
        descriptionCta: v.intl.string(v.t.jVcuVY),
        onClick: S,
        previewImage: P.serverProfiles.thumbnail,
        videoUrl: P.serverProfiles.assetUrl
      },
      x = {
        name: "referralProgram",
        title: v.intl.string(v.t.tPY4o9),
        description: v.intl.format(v.t.jRPQUH, {
          learnMoreLink: w
        }),
        previewImage: P.referralProgram.thumbnail,
        videoUrl: P.referralProgram.assetUrl
      },
      L = {
        name: "customThemes",
        title: v.intl.string(A.default.XokIHM),
        description: v.intl.string(A.default["7esQMC"]),
        descriptionCta: v.intl.string(v.t.jVcuVY),
        previewImage: P.customThemes.thumbnail,
        onClick: () => {
          (0, l.nf)(l.HP.CUSTOM_THEME)
        },
        videoUrl: P.customThemes.assetUrl
      },
      j = {
        name: "displayNameStyles",
        title: v.intl.string(I.default.ABtBDQ),
        description: v.intl.string(I.default.MFNXZh),
        descriptionCta: v.intl.string(v.t.jVcuVY),
        previewImage: P.displayNameStyles.thumbnail,
        onClick: C,
        badgeText: v.intl.string(v.t.y2b7CA).toLocaleUpperCase(),
        videoUrl: P.displayNameStyles.assetUrl
      },
      M = {
        name: "premiumGroup",
        title: v.intl.formatToPlainString(b.default.VFEDDB, {
          premiumGroupProductName: (0, g.DP)()
        }),
        description: v.intl.formatToPlainString(b.default.WudmR3, {
          totalSeats: g.aw,
          premiumGroupProductName: (0, g.DP)()
        }),
        descriptionCta: v.intl.string(v.t.hvVgAZ),
        previewImage: P.premiumGroup.thumbnail,
        videoUrl: P.premiumGroup.assetUrl,
        onClick: () => {
          (0, a.openModalLazy)(async () => {
            let {
              default: e
            } = await n.e("69595").then(n.bind(n, 526710));
            return t => (0, r.jsx)(e, J({}, t))
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
        previewImage: P.showYourStyle.thumbnail,
        onClick: S,
        videoUrl: P.showYourStyle.assetUrl
      },
      U = {
        name: "yourSpace",
        title: v.intl.string(v.t.Wme3nX),
        description: v.intl.string(v.t["/aAIqV"]),
        descriptionCta: v.intl.string(v.t.jVcuVY),
        previewImage: P.yourSpace.thumbnail,
        onClick: N,
        videoUrl: P.yourSpace.assetUrl
      },
      G = {
        name: "emojis",
        title: v.intl.string(v.t.zY5PPb),
        description: v.intl.string(v.t.R5Xag2),
        previewImage: P.emojis.thumbnail,
        videoUrl: P.emojis.assetUrl
      },
      V = {
        name: "noLimits",
        title: v.intl.string(v.t["6b3ydG"]),
        description: v.intl.string(v.t["Y+IJyg"]),
        previewImage: P.noLimits.thumbnail,
        videoUrl: P.noLimits.assetUrl
      },
      {
        orbsRewardAmount: F,
        isInTreatment: B
      } = (0, m.uX)("useBentoBoxes"),
      H = {
        name: "orbRewards",
        title: v.intl.string(O.default["ZFJ/NU"]),
        description: v.intl.formatToPlainString(O.default.VuvFfT, {
          orbsCount: F
        }),
        descriptionCta: v.intl.string(v.t.hvVgAZ),
        onClick: () => {
          window.open(_.A.getArticleURL(E.MVz.ORBS_REWARDS_FAQ), "_blank")
        },
        previewImage: P.orbRewards.thumbnail,
        previewImageStyle: "overlay",
        backgroundVideoUrl: P.orbRewards.assetUrl,
        badgeText: v.intl.string(v.t.oW0eUd).toLocaleUpperCase(),
        badgeVariant: "expressive"
      },
      Y = [
        [k],
        [U],
        [G, V]
      ];
    return {
      whatsNewBoxes: e = T ? B ? [
        [M],
        [H, x]
      ] : [
        [M],
        [D, x]
      ] : B ? [
        [H],
        [D, x]
      ] : [
        [j],
        [L, x]
      ],
      bestOfBoxes: Y
    }
  }