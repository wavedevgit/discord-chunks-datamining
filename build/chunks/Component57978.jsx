/** Chunk was on 5606 **/
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
  } = (0, d.Ay)(c.A.PREMIUM_MARKETING_BENTO_BOX), t = (0, _.A)({
    scrollPosition: O._F.TRY_IT_OUT,
    analyticsLocations: e
  }), r = (0, h.O9)(), i = (0, a.useCallback)(() => {
    (0, g.openUserSettings)(m.X.PROFILE_PANEL, {
      section: x.nc_.PROFILE_CUSTOMIZATION,
      analyticsLocations: e
    }, () => (0, p.L)({
      analyticsLocations: e
    }))
  }, [e]), l = (0, f.TM)(), et = b.A.getArticleURL(x.MVz.REFERRAL_PROGRAM), en = {
    premiumGroup: {
      thumbnail: S,
      assetUrl: S
    },
    serverProfiles: {
      thumbnail: I,
      assetUrl: l ? $.Ay : ee.Ay
    },
    customThemes: {
      thumbnail: J.A,
      assetUrl: l ? X.A : Q.A
    },
    displayNameStyles: {
      thumbnail: P.A,
      assetUrl: l ? N.A : R.A
    },
    referralProgram: {
      thumbnail: H.A,
      assetUrl: l ? k.A : B.A
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
      thumbnail: w.A,
      assetUrl: l ? D.A : L.A
    },
    noLimits: {
      thumbnail: G.A,
      assetUrl: l ? M.A : U.A
    },
    orbRewards: {
      thumbnail: q.A,
      assetUrl: Z.A
    }
  }, er = {
    name: "serverProfiles",
    title: j.intl.string(j.t.I9TYMg),
    description: j.intl.string(j.t.HMSHeH),
    descriptionCta: j.intl.string(j.t.jVcuVY),
    onClick: t,
    previewImage: en.serverProfiles.thumbnail,
    videoUrl: en.serverProfiles.assetUrl
  }, ei = {
    name: "referralProgram",
    title: j.intl.string(j.t.tPY4o9),
    description: j.intl.format(j.t.jRPQUH, {
      learnMoreLink: et
    }),
    previewImage: en.referralProgram.thumbnail,
    videoUrl: en.referralProgram.assetUrl
  }, el = {
    name: "customThemes",
    title: j.intl.string(T.default.XokIHM),
    description: j.intl.string(T.default["7esQMC"]),
    descriptionCta: j.intl.string(j.t.jVcuVY),
    previewImage: en.customThemes.thumbnail,
    onClick: () => {
      (0, u.nf)(u.HP.CUSTOM_THEME)
    },
    videoUrl: en.customThemes.assetUrl
  }, es = {
    name: "displayNameStyles",
    title: j.intl.string(v.default.ABtBDQ),
    description: j.intl.string(v.default.MFNXZh),
    descriptionCta: j.intl.string(j.t.jVcuVY),
    previewImage: en.displayNameStyles.thumbnail,
    onClick: i,
    badgeText: j.intl.string(j.t.y2b7CA).toLocaleUpperCase(),
    videoUrl: en.displayNameStyles.assetUrl
  }, ea = {
    name: "premiumGroup",
    title: j.intl.formatToPlainString(C.default.VFEDDB, {
      premiumGroupProductName: (0, E.DP)()
    }),
    description: j.intl.formatToPlainString(C.default.WudmR3, {
      totalSeats: E.aw,
      premiumGroupProductName: (0, E.DP)()
    }),
    descriptionCta: j.intl.string(j.t.hvVgAZ),
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
    badgeText: j.intl.string(j.t.oW0eUd).toLocaleUpperCase(),
    badgeVariant: "expressive"
  }, eo = {
    name: "showYourStyle",
    title: j.intl.string(j.t.Ij3Zmv),
    description: j.intl.string(j.t.UsOUxY),
    descriptionCta: j.intl.string(j.t.jVcuVY),
    previewImage: en.showYourStyle.thumbnail,
    onClick: t,
    videoUrl: en.showYourStyle.assetUrl
  }, ec = {
    name: "yourSpace",
    title: j.intl.string(j.t.Wme3nX),
    description: j.intl.string(j.t["/aAIqV"]),
    descriptionCta: j.intl.string(j.t.jVcuVY),
    previewImage: en.yourSpace.thumbnail,
    onClick: () => {
      {
        let {
          openUserSettings: t
        } = n(840065);
        t(m.X.APPEARANCE_PANEL, {
          section: x.nc_.APPEARANCE,
          analyticsLocations: e
        })
      }
    },
    videoUrl: en.yourSpace.assetUrl
  }, ed = {
    name: "emojis",
    title: j.intl.string(j.t.zY5PPb),
    description: j.intl.string(j.t.R5Xag2),
    previewImage: en.emojis.thumbnail,
    videoUrl: en.emojis.assetUrl
  }, eu = {
    name: "noLimits",
    title: j.intl.string(j.t["6b3ydG"]),
    description: j.intl.string(j.t["Y+IJyg"]),
    previewImage: en.noLimits.thumbnail,
    videoUrl: en.noLimits.assetUrl
  }, {
    isInTreatment: ep
  } = (0, A.uX)("useBentoBoxes"), e_ = {
    name: "orbRewards",
    title: j.intl.string(y.default["ZFJ/NU"]),
    description: j.intl.string(y.default.wMi514),
    descriptionCta: j.intl.string(j.t.hvVgAZ),
    onClick: () => {
      window.open(b.A.getArticleURL(x.MVz.ORBS_REWARDS_FAQ), "_blank")
    },
    previewImage: en.orbRewards.thumbnail,
    previewImageStyle: "overlay",
    backgroundVideoUrl: en.orbRewards.assetUrl,
    badgeText: j.intl.string(j.t.oW0eUd).toLocaleUpperCase(),
    badgeVariant: "expressive"
  };
  return {
    whatsNewBoxes: r ? ep ? [
      [ea],
      [e_, ei]
    ] : [
      [ea],
      [er, ei]
    ] : ep ? [
      [e_],
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