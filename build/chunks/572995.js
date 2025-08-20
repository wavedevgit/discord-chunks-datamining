/** Chunk was on web.js **/
/** chunk id: 572995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NA: () => ee,
  ZP: () => en,
  y$: () => $
});
var Chunk230711 = require("./230711.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk300284 = require("./300284.js"),
  Chunk526167 = require("./526167.js"),
  Chunk63063 = require("./63063.js"),
  Chunk47280 = require("./47280.js"),
  Chunk963590 = require("./963590.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk509614 = require("./509614.js"),
  Chunk880511 = require("./880511.js"),
  Chunk985443 = require("./985443.js"),
  Chunk612253 = require("./612253.js"),
  Chunk872532 = require("./872532.js"),
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
  Chunk91342 = require("./91342.js"),
  Chunk181708 = require("./181708.js"),
  Chunk290650 = require("./290650.js"),
  Chunk751125 = require("./751125.js"),
  Chunk357003 = require("./357003.js"),
  Chunk904505 = require("./904505.js"),
  Chunk712626 = require("./712626.js"),
  Chunk386014 = require("./386014.js"),
  Chunk845571 = require("./845571.js"),
  Chunk220046 = require("./220046.js"),
  Chunk385874 = require("./385874.js"),
  Chunk371000 = require("./371000.js"),
  Chunk310960 = require("./310960.js"),
  Chunk815581 = require("./815581.js"),
  Chunk479390 = require("./479390.js"),
  Chunk377679 = require("./377679.js"),
  Chunk825087 = require("./825087.js");

function Q(e, t, n) {
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
      Q(e, t, n[t])
    })
  }
  return e
}
var $ = function(e) {
    return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e
  }({}),
  ee = function(e) {
    return e.REFERRAL_PROGRAM = "referralProgram", e.SERVER_PROFILES = "serverProfiles", e.SHOW_YOUR_STYLE = "showYourStyle", e.YOUR_SPACE = "yourSpace", e.EMOJIS = "emojis", e.NO_LIMITS = "noLimits", e.PERMADECOS = "permadecos", e.VOICE_FILTERS = "voiceFilters", e
  }({});
let et = (e, t) => J({
    voiceFilters: {
      thumbnail: K.Z,
      assetUrl: e ? W.Z : z.Z
    },
    permadecos: {
      thumbnail: U.Z,
      assetUrl: U.Z
    },
    serverProfiles: {
      thumbnail: E,
      assetUrl: e ? V.ZP : F.ZP
    }
  }, t ? {
    referralProgram: {
      thumbnail: A.Z,
      assetUrl: e ? S.Z : C.Z
    },
    showYourStyle: {
      thumbnail: R.Z,
      assetUrl: e ? N.Z : P.Z
    },
    yourSpace: {
      thumbnail: D.Z,
      assetUrl: e ? w.Z : x.Z
    },
    emojis: {
      thumbnail: y.Z,
      assetUrl: e ? b.Z : O.Z
    },
    noLimits: {
      thumbnail: I.Z,
      assetUrl: e ? v.Z : T.Z
    }
  } : {
    referralProgram: {
      thumbnail: B.Z,
      assetUrl: e ? G.ZP : Z.ZP
    },
    showYourStyle: {
      thumbnail: g,
      assetUrl: e ? H.Z : Y.Z
    },
    yourSpace: {
      thumbnail: m,
      assetUrl: e ? q.Z : X.Z
    },
    emojis: {
      thumbnail: p,
      assetUrl: e ? L.ZP : j.ZP
    },
    noLimits: {
      thumbnail: h,
      assetUrl: e ? M.ZP : k.ZP
    }
  }),
  en = () => {
    let {
      analyticsLocations: e
    } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_MARKETING_BENTO_BOX), t = (0, Chunk300284.Z)({
      scrollPosition: Chunk526761.Y_.TRY_IT_OUT,
      analyticsLocations: module
    }), n = () => {
      Chunk230711.Z.open(Chunk981631.oAB.APPEARANCE, null, {
        openWithoutBackstack: true,
        analyticsLocations: module
      })
    }, p = (0, Chunk526167.rO)(), h = Chunk63063.Z.getArticleURL(Chunk981631.BhN.REFERRAL_PROGRAM), m = (0, Chunk963590.Z)({
      location: "WhatsNewSection"
    }), g = et(Chunk509614, (0, Chunk47280.ZP)({
      location: "useBentoBoxes"
    })), E = {
      name: "voiceFilters",
      title: Chunk388032.intl.format(Chunk388032.t.iAzLOj, {}),
      description: Chunk388032.intl.format(Chunk388032.t["NT0/pa"], {
        learnMoreLink: Chunk981631.EYA.VOICE_FILTERS_BLOG
      }),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      previewImage: Chunk612253.voiceFilters.thumbnail,
      videoUrl: Chunk612253.voiceFilters.assetUrl,
      badgeText: Chunk388032.intl.string(Chunk388032.t.EYxi0t)
    }, b = {
      name: "permadecos",
      title: Chunk388032.intl.string(Chunk388032.t["57ngoq"]),
      description: Chunk388032.intl.string(Chunk388032.t.piFFjY),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      previewImage: Chunk612253.permadecos.thumbnail,
      onClick: exports,
      videoUrl: Chunk612253.permadecos.assetUrl
    }, y = {
      name: "serverProfiles",
      title: Chunk388032.intl.string(Chunk388032.t.I9TYMj),
      description: Chunk388032.intl.string(Chunk388032.t.HMSHeH),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      onClick: exports,
      previewImage: Chunk612253.serverProfiles.thumbnail,
      videoUrl: Chunk612253.serverProfiles.assetUrl
    }, O = {
      name: "referralProgram",
      title: Chunk388032.intl.string(Chunk388032.t.tPY4o6),
      description: Chunk388032.intl.format(Chunk388032.t.jRPQUF, {
        learnMoreLink: Chunk880511
      }),
      previewImage: Chunk612253.referralProgram.thumbnail,
      videoUrl: Chunk612253.referralProgram.assetUrl
    }, v = {
      name: "showYourStyle",
      title: Chunk388032.intl.string(Chunk388032.t.Ij3Zmp),
      description: Chunk388032.intl.string(Chunk388032.t.UsOUxc),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      previewImage: Chunk612253.showYourStyle.thumbnail,
      onClick: exports,
      videoUrl: Chunk612253.showYourStyle.assetUrl
    }, I = {
      name: "yourSpace",
      title: Chunk388032.intl.string(Chunk388032.t.Wme3nZ),
      description: Chunk388032.intl.string(Chunk388032.t["/aAIqa"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      previewImage: Chunk612253.yourSpace.thumbnail,
      onClick: require,
      videoUrl: Chunk612253.yourSpace.assetUrl
    }, T = {
      name: "emojis",
      title: Chunk388032.intl.string(Chunk388032.t.zY5PPT),
      description: Chunk388032.intl.string(Chunk388032.t.R5Xag4),
      previewImage: Chunk612253.emojis.thumbnail,
      videoUrl: Chunk612253.emojis.assetUrl
    };
    return {
      whatsNewBoxes: Chunk985443 ? [
        [Chunk872532],
        [Chunk404583, Chunk631572]
      ] : [
        [Chunk404583],
        [Chunk295349, Chunk631572]
      ],
      bestOfBoxes: [
        [Chunk999675],
        [Chunk238027],
        [Chunk997585, {
          name: "noLimits",
          title: Chunk388032.intl.string(Chunk388032.t["6b3ydH"]),
          description: Chunk388032.intl.string(Chunk388032.t["Y+IJys"]),
          previewImage: Chunk612253.noLimits.thumbnail,
          videoUrl: Chunk612253.noLimits.assetUrl
        }]
      ]
    }
  }