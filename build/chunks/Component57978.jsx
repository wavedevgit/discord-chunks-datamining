/** Chunk was on 78376 **/
/** chunk id: 57978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A0: () => en,
  Ay: () => ei,
  NI: () => er,
  Tb: () => et
});
var r, i, l, Chunk627968 = require("./627968.js"),
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
  Chunk56582 = require("./56582.js"),
  et = ((r = {}).CONTAINED = "contained", r.OVERLAY = "overlay", r),
  en = ((i = {}).SMALL = "small", i.MEDIUM = "medium", i.LARGE = "large", i),
  er = ((l = {}).REFERRAL_PROGRAM = "referralProgram", l.SERVER_PROFILES = "serverProfiles", l.SHOW_YOUR_STYLE = "showYourStyle", l.YOUR_SPACE = "yourSpace", l.EMOJIS = "emojis", l.NO_LIMITS = "noLimits", l.CUSTOM_THEMES = "customThemes", l.DISPLAY_NAME_STYLES = "displayNameStyles", l.PREMIUM_GROUP = "premiumGroup", l.ORB_REWARDS = "orbRewards", l);
let ei = () => {
  let {
    analyticsLocations: e
  } = (0, d.Ay)(c.A.PREMIUM_MARKETING_BENTO_BOX), t = (0, p.A)({
    scrollPosition: C._F.TRY_IT_OUT,
    analyticsLocations: e
  }), r = (0, b.O9)(), i = (0, a.useCallback)(() => {
    (0, g.openUserSettings)(m.X.PROFILE_PANEL, {
      section: O.nc_.PROFILE_CUSTOMIZATION,
      analyticsLocations: e
    }, () => (0, _.L)({
      analyticsLocations: e
    }))
  }, [e]), l = (0, A.TM)(), et = f.A.getArticleURL(O.MVz.REFERRAL_PROGRAM), en = {
    premiumGroup: {
      thumbnail: N,
      assetUrl: N
    },
    serverProfiles: {
      thumbnail: j,
      assetUrl: l ? $.Ay : ee.Ay
    },
    customThemes: {
      thumbnail: J.A,
      assetUrl: l ? q.A : Q.A
    },
    displayNameStyles: {
      thumbnail: P.A,
      assetUrl: l ? v.A : R.A
    },
    referralProgram: {
      thumbnail: B.A,
      assetUrl: l ? k.A : H.A
    },
    showYourStyle: {
      thumbnail: F.A,
      assetUrl: l ? V.A : Y.A
    },
    yourSpace: {
      thumbnail: K.A,
      assetUrl: l ? W.A : z.A
    },
    emojis: {
      thumbnail: L.A,
      assetUrl: l ? D.A : w.A
    },
    noLimits: {
      thumbnail: G.A,
      assetUrl: l ? M.A : U.A
    },
    orbRewards: {
      thumbnail: X.A,
      assetUrl: Z.A
    }
  }, er = {
    name: "serverProfiles",
    title: T.intl.string(T.t.I9TYMg),
    description: T.intl.string(T.t.HMSHeH),
    descriptionCta: T.intl.string(T.t.jVcuVY),
    onClick: t,
    previewImage: en.serverProfiles.thumbnail,
    videoUrl: en.serverProfiles.assetUrl
  }, ei = {
    name: "referralProgram",
    title: T.intl.string(T.t.tPY4o9),
    description: T.intl.format(T.t.jRPQUH, {
      learnMoreLink: et
    }),
    previewImage: en.referralProgram.thumbnail,
    videoUrl: en.referralProgram.assetUrl
  }, el = {
    name: "customThemes",
    title: T.intl.string(I.default.XokIHM),
    description: T.intl.string(I.default["7esQMC"]),
    descriptionCta: T.intl.string(T.t.jVcuVY),
    previewImage: en.customThemes.thumbnail,
    onClick: () => {
      (0, u.nf)(u.HP.CUSTOM_THEME)
    },
    videoUrl: en.customThemes.assetUrl
  }, es = {
    name: "displayNameStyles",
    title: T.intl.string(y.default.ABtBDQ),
    description: T.intl.string(y.default.MFNXZh),
    descriptionCta: T.intl.string(T.t.jVcuVY),
    previewImage: en.displayNameStyles.thumbnail,
    onClick: i,
    badgeText: T.intl.string(T.t.y2b7CA).toLocaleUpperCase(),
    videoUrl: en.displayNameStyles.assetUrl
  }, ea = {
    name: "premiumGroup",
    title: T.intl.formatToPlainString(x.default.VFEDDB, {
      premiumGroupProductName: (0, E.DP)()
    }),
    description: T.intl.formatToPlainString(x.default.WudmR3, {
      totalSeats: E.aw,
      premiumGroupProductName: (0, E.DP)()
    }),
    descriptionCta: T.intl.string(T.t.hvVgAZ),
    previewImage: en.premiumGroup.thumbnail,
    videoUrl: en.premiumGroup.assetUrl,
    onClick: () => {
      (0, o.openModalLazy)(async () => {
        let {
          default: e
        } = await n.e("69595").then(n.bind(n, 526710));
        return t => (0, s.jsx)(e, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, t))
      })
    },
    badgeText: T.intl.string(T.t.oW0eUd).toLocaleUpperCase(),
    badgeVariant: "expressive"
  }, eo = {
    name: "showYourStyle",
    title: T.intl.string(T.t.Ij3Zmv),
    description: T.intl.string(T.t.UsOUxY),
    descriptionCta: T.intl.string(T.t.jVcuVY),
    previewImage: en.showYourStyle.thumbnail,
    onClick: t,
    videoUrl: en.showYourStyle.assetUrl
  }, ec = {
    name: "yourSpace",
    title: T.intl.string(T.t.Wme3nX),
    description: T.intl.string(T.t["/aAIqV"]),
    descriptionCta: T.intl.string(T.t.jVcuVY),
    previewImage: en.yourSpace.thumbnail,
    onClick: () => {
      {
        let {
          openUserSettings: t
        } = n(840065);
        t(m.X.APPEARANCE_PANEL, {
          section: O.nc_.APPEARANCE,
          analyticsLocations: e
        })
      }
    },
    videoUrl: en.yourSpace.assetUrl
  }, ed = {
    name: "emojis",
    title: T.intl.string(T.t.zY5PPb),
    description: T.intl.string(T.t.R5Xag2),
    previewImage: en.emojis.thumbnail,
    videoUrl: en.emojis.assetUrl
  }, eu = {
    name: "noLimits",
    title: T.intl.string(T.t["6b3ydG"]),
    description: T.intl.string(T.t["Y+IJyg"]),
    previewImage: en.noLimits.thumbnail,
    videoUrl: en.noLimits.assetUrl
  }, {
    isInTreatment: e_
  } = (0, h.uX)("useBentoBoxes"), ep = {
    name: "orbRewards",
    title: T.intl.string(S.default["ZFJ/NU"]),
    description: T.intl.string(S.default.wMi514),
    descriptionCta: T.intl.string(T.t.hvVgAZ),
    onClick: () => {
      window.open(f.A.getArticleURL(O.MVz.ORBS_REWARDS_FAQ), "_blank")
    },
    previewImage: en.orbRewards.thumbnail,
    previewImageStyle: "overlay",
    backgroundVideoUrl: en.orbRewards.assetUrl,
    badgeText: T.intl.string(T.t.oW0eUd).toLocaleUpperCase(),
    badgeVariant: "expressive"
  };
  return {
    whatsNewBoxes: r ? e_ ? [
      [ea],
      [ep, ei]
    ] : [
      [ea],
      [er, ei]
    ] : e_ ? [
      [ep],
      [er, ei]
    ] : [
      [es],
      [el, ei]
    ],
    bestOfBoxes: [
      [eo],
      [ec],
      [ed, eu]
    ]
  }
}