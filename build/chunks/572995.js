/** Chunk was on web.js **/
/** chunk id: 572995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NA: () => el,
  ZP: () => eu,
  y$: () => es
});
var Chunk647438 = require("./647438.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk457398 = require("./457398.js"),
  Chunk569165 = require("./569165.js"),
  Chunk509614 = require("./509614.js"),
  Chunk880511 = require("./880511.js"),
  Chunk985443 = require("./985443.js"),
  Chunk612253 = require("./612253.js"),
  Chunk872532 = require("./872532.js"),
  Chunk184071 = require("./184071.js"),
  Chunk368243 = require("./368243.js"),
  Chunk119121 = require("./119121.js"),
  Chunk404583 = require("./404583.js"),
  Chunk295349 = require("./295349.js"),
  Chunk631572 = require("./631572.js"),
  Chunk999675 = require("./999675.js"),
  Chunk238027 = require("./238027.js"),
  Chunk997585 = require("./997585.js"),
  Chunk138431 = require("./138431.js"),
  Chunk305516 = require("./305516.js"),
  Chunk980984 = require("./980984.js"),
  Chunk952842 = require("./952842.js"),
  Chunk38244 = require("./38244.js"),
  Chunk491878 = require("./491878.js"),
  Chunk751049 = require("./751049.js"),
  Chunk518971 = require("./518971.js"),
  Chunk85726 = require("./85726.js"),
  Chunk281652 = require("./281652.js"),
  Chunk982935 = require("./982935.js"),
  Chunk831399 = require("./831399.js"),
  Chunk91342 = require("./91342.js"),
  Chunk181708 = require("./181708.js"),
  Chunk290650 = require("./290650.js"),
  Chunk751125 = require("./751125.js"),
  Chunk904505 = require("./904505.js"),
  Chunk712626 = require("./712626.js"),
  Chunk386014 = require("./386014.js"),
  Chunk845571 = require("./845571.js"),
  Chunk220046 = require("./220046.js"),
  Chunk385874 = require("./385874.js"),
  Chunk371000 = require("./371000.js"),
  Chunk377679 = require("./377679.js"),
  Chunk825087 = require("./825087.js");

function ea(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ea(e, t, n[t])
    })
  }
  return e
}
var es = function(e) {
    return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e
  }({}),
  el = function(e) {
    return e.REFERRAL_PROGRAM = "referralProgram", e.SERVER_PROFILES = "serverProfiles", e.SHOW_YOUR_STYLE = "showYourStyle", e.YOUR_SPACE = "yourSpace", e.EMOJIS = "emojis", e.NO_LIMITS = "noLimits", e.CUSTOM_THEMES = "customThemes", e.DISPLAY_NAME_STYLES = "displayNameStyles", e
  }({});
let ec = (e, t) => eo({
    serverProfiles: {
      thumbnail: T,
      assetUrl: e ? $.ZP : ee.ZP
    },
    customThemes: {
      thumbnail: H.Z,
      assetUrl: e ? V.Z : Y.Z
    },
    displayNameStyles: {
      thumbnail: A.Z,
      assetUrl: e ? S.Z : C.Z
    }
  }, t ? {
    referralProgram: {
      thumbnail: M.Z,
      assetUrl: e ? x.Z : k.Z
    },
    showYourStyle: {
      thumbnail: U.Z,
      assetUrl: e ? j.Z : G.Z
    },
    yourSpace: {
      thumbnail: Z.Z,
      assetUrl: e ? B.Z : F.Z
    },
    emojis: {
      thumbnail: R.Z,
      assetUrl: e ? N.Z : P.Z
    },
    noLimits: {
      thumbnail: D.Z,
      assetUrl: e ? w.Z : L.Z
    }
  } : {
    referralProgram: {
      thumbnail: Q.Z,
      assetUrl: e ? X.ZP : J.ZP
    },
    showYourStyle: {
      thumbnail: I,
      assetUrl: e ? et.Z : en.Z
    },
    yourSpace: {
      thumbnail: v,
      assetUrl: e ? er.Z : ei.Z
    },
    emojis: {
      thumbnail: y,
      assetUrl: e ? W.ZP : K.ZP
    },
    noLimits: {
      thumbnail: O,
      assetUrl: e ? z.ZP : q.ZP
    }
  }),
  eu = () => {
    let e, {
        analyticsLocations: t
      } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_MARKETING_BENTO_BOX),
      y = (0, Chunk300284.Z)({
        scrollPosition: Chunk526761.Y_.TRY_IT_OUT,
        analyticsLocations: exports
      }),
      O = (0, Chunk594928.cL)({
        location: "useBentoBoxes"
      }),
      v = (0, Chunk647438.useCallback)(() => {
        (0, Chunk518596.openUserSettings)(Chunk313789.n.PROFILE_PANEL, {
          section: Chunk981631.oAB.PROFILE_CUSTOMIZATION,
          analyticsLocations: exports
        }, () => (0, Chunk829716.I)({
          analyticsLocations: exports
        }))
      }, [exports]),
      I = () => {
        {
          letChunk518596 = require("./518596.jsx");
          module(Chunk313789.n.APPEARANCE_PANEL, {
            section: Chunk981631.oAB.APPEARANCE,
            analyticsLocations: exports
          })
        }
      },
      T = (0, Chunk526167.rO)(),
      S = Chunk63063.Z.getArticleURL(Chunk981631.BhN.REFERRAL_PROGRAM),
      A = ec(Chunk872532, (0, Chunk283066.Z)({
        location: "useBentoBoxes"
      })),
      C = {
        name: "serverProfiles",
        title: Chunk388032.intl.string(Chunk388032.t.I9TYMg),
        description: Chunk388032.intl.string(Chunk388032.t.HMSHeH),
        descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
        onClick: Chunk509614,
        previewImage: Chunk368243.serverProfiles.thumbnail,
        videoUrl: Chunk368243.serverProfiles.assetUrl
      },
      N = {
        name: "referralProgram",
        title: Chunk388032.intl.string(Chunk388032.t.tPY4o9),
        description: Chunk388032.intl.format(Chunk388032.t.jRPQUH, {
          learnMoreLink: Chunk184071
        }),
        previewImage: Chunk368243.referralProgram.thumbnail,
        videoUrl: Chunk368243.referralProgram.assetUrl
      },
      R = {
        name: "customThemes",
        title: Chunk388032.intl.string(Chunk457398.default.XokIHM),
        description: Chunk388032.intl.string(Chunk457398.default["7esQMC"]),
        descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
        previewImage: Chunk368243.customThemes.thumbnail,
        onClick: () => {
          (0, Chunk550385.XO)(Chunk550385.wh.CUSTOM_THEME)
        },
        videoUrl: Chunk368243.customThemes.assetUrl
      },
      P = {
        name: "displayNameStyles",
        title: Chunk388032.intl.string(Chunk569165.default.ABtBDQ),
        description: Chunk388032.intl.string(Chunk569165.default.MFNXZh),
        descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
        previewImage: Chunk368243.displayNameStyles.thumbnail,
        onClick: Chunk985443,
        badgeText: Chunk388032.intl.string(Chunk388032.t.y2b7CA).toLocaleUpperCase(),
        videoUrl: Chunk368243.displayNameStyles.assetUrl
      },
      w = {
        name: "showYourStyle",
        title: Chunk388032.intl.string(Chunk388032.t.Ij3Zmv),
        description: Chunk388032.intl.string(Chunk388032.t.UsOUxY),
        descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
        previewImage: Chunk368243.showYourStyle.thumbnail,
        onClick: Chunk509614,
        videoUrl: Chunk368243.showYourStyle.assetUrl
      },
      D = {
        name: "yourSpace",
        title: Chunk388032.intl.string(Chunk388032.t.Wme3nX),
        description: Chunk388032.intl.string(Chunk388032.t["/aAIqV"]),
        descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVY),
        previewImage: Chunk368243.yourSpace.thumbnail,
        onClick: Chunk612253,
        videoUrl: Chunk368243.yourSpace.assetUrl
      },
      L = {
        name: "emojis",
        title: Chunk388032.intl.string(Chunk388032.t.zY5PPb),
        description: Chunk388032.intl.string(Chunk388032.t.R5Xag2),
        previewImage: Chunk368243.emojis.thumbnail,
        videoUrl: Chunk368243.emojis.assetUrl
      },
      x = [
        [Chunk999675],
        [Chunk238027],
        [Chunk997585, {
          name: "noLimits",
          title: Chunk388032.intl.string(Chunk388032.t["6b3ydG"]),
          description: Chunk388032.intl.string(Chunk388032.t["Y+IJyg"]),
          previewImage: Chunk368243.noLimits.thumbnail,
          videoUrl: Chunk368243.noLimits.assetUrl
        }]
      ];
    return {
      whatsNewBoxes: e = Chunk880511 ? [
        [Chunk631572],
        [Chunk295349, Chunk404583]
      ] : [
        [Chunk295349],
        [Chunk119121, Chunk404583]
      ],
      bestOfBoxes: Chunk138431
    }
  }