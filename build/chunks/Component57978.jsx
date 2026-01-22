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
      thumbnail: I,
      assetUrl: I
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
      I = (0, u.A)({
        scrollPosition: b._F.TRY_IT_OUT,
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
        title: A.intl.string(A.t.I9TYMg),
        description: A.intl.string(A.t.HMSHeH),
        descriptionCta: A.intl.string(A.t.jVcuVY),
        onClick: I,
        previewImage: P.serverProfiles.thumbnail,
        videoUrl: P.serverProfiles.assetUrl
      },
      x = {
        name: "referralProgram",
        title: A.intl.string(A.t.tPY4o9),
        description: A.intl.format(A.t.jRPQUH, {
          learnMoreLink: w
        }),
        previewImage: P.referralProgram.thumbnail,
        videoUrl: P.referralProgram.assetUrl
      },
      L = {
        name: "customThemes",
        title: A.intl.string(v.default.XokIHM),
        description: A.intl.string(v.default["7esQMC"]),
        descriptionCta: A.intl.string(A.t.jVcuVY),
        previewImage: P.customThemes.thumbnail,
        onClick: () => {
          (0, l.nf)(l.HP.CUSTOM_THEME)
        },
        videoUrl: P.customThemes.assetUrl
      },
      j = {
        name: "displayNameStyles",
        title: A.intl.string(S.default.ABtBDQ),
        description: A.intl.string(S.default.MFNXZh),
        descriptionCta: A.intl.string(A.t.jVcuVY),
        previewImage: P.displayNameStyles.thumbnail,
        onClick: C,
        badgeText: A.intl.string(A.t.y2b7CA).toLocaleUpperCase(),
        videoUrl: P.displayNameStyles.assetUrl
      },
      M = {
        name: "premiumGroup",
        title: A.intl.formatToPlainString(y.default.VFEDDB, {
          premiumGroupProductName: (0, g.DP)()
        }),
        description: A.intl.formatToPlainString(y.default.WudmR3, {
          totalSeats: g.aw,
          premiumGroupProductName: (0, g.DP)()
        }),
        descriptionCta: A.intl.string(A.t.hvVgAZ),
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
        badgeText: A.intl.string(A.t.oW0eUd).toLocaleUpperCase(),
        badgeVariant: "expressive"
      },
      k = {
        name: "showYourStyle",
        title: A.intl.string(A.t.Ij3Zmv),
        description: A.intl.string(A.t.UsOUxY),
        descriptionCta: A.intl.string(A.t.jVcuVY),
        previewImage: P.showYourStyle.thumbnail,
        onClick: I,
        videoUrl: P.showYourStyle.assetUrl
      },
      U = {
        name: "yourSpace",
        title: A.intl.string(A.t.Wme3nX),
        description: A.intl.string(A.t["/aAIqV"]),
        descriptionCta: A.intl.string(A.t.jVcuVY),
        previewImage: P.yourSpace.thumbnail,
        onClick: N,
        videoUrl: P.yourSpace.assetUrl
      },
      G = {
        name: "emojis",
        title: A.intl.string(A.t.zY5PPb),
        description: A.intl.string(A.t.R5Xag2),
        previewImage: P.emojis.thumbnail,
        videoUrl: P.emojis.assetUrl
      },
      V = {
        name: "noLimits",
        title: A.intl.string(A.t["6b3ydG"]),
        description: A.intl.string(A.t["Y+IJyg"]),
        previewImage: P.noLimits.thumbnail,
        videoUrl: P.noLimits.assetUrl
      },
      {
        orbsRewardAmount: F,
        isInTreatment: B
      } = (0, m.uX)("useBentoBoxes"),
      H = {
        name: "orbRewards",
        title: A.intl.string(O.default["ZFJ/NU"]),
        description: A.intl.formatToPlainString(O.default.VuvFfT, {
          orbsCount: F
        }),
        descriptionCta: A.intl.string(A.t.hvVgAZ),
        onClick: () => {
          window.open(_.A.getArticleURL(E.MVz.ORBS_REWARDS_FAQ), "_blank")
        },
        previewImage: P.orbRewards.thumbnail,
        previewImageStyle: "overlay",
        backgroundVideoUrl: P.orbRewards.assetUrl,
        badgeText: A.intl.string(A.t.oW0eUd).toLocaleUpperCase(),
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