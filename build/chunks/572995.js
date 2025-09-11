/** Chunk was on web.js **/
/** chunk id: 572995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  NA: () => eo,
  ZP: () => el,
  y$: () => ea
});
var Chunk230711 = require("./230711.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk866419 = require("./866419.js"),
  Chunk550385 = require("./550385.js"),
  Chunk300284 = require("./300284.js"),
  Chunk526167 = require("./526167.js"),
  Chunk63063 = require("./63063.js"),
  Chunk47280 = require("./47280.js"),
  Chunk963590 = require("./963590.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk684555 = require("./684555.js"),
  Chunk509614 = require("./509614.js"),
  Chunk880511 = require("./880511.js"),
  Chunk985443 = require("./985443.js"),
  Chunk612253 = require("./612253.js"),
  Chunk872532 = require("./872532.js"),
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
  Chunk76452 = require("./76452.js"),
  Chunk646560 = require("./646560.js"),
  Chunk27217 = require("./27217.js"),
  Chunk918009 = require("./918009.js"),
  Chunk378325 = require("./378325.js"),
  Chunk962526 = require("./962526.js"),
  Chunk670948 = require("./670948.js"),
  Chunk965468 = require("./965468.js"),
  Chunk636769 = require("./636769.js"),
  Chunk8900 = require("./8900.js"),
  Chunk430916 = require("./430916.js"),
  Chunk222419 = require("./222419.js"),
  Chunk740778 = require("./740778.js");

function er(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      er(e, t, n[t])
    })
  }
  return e
}
var ea = function(e) {
    return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e
  }({}),
  eo = function(e) {
    return e.REFERRAL_PROGRAM = "referralProgram", e.SERVER_PROFILES = "serverProfiles", e.SHOW_YOUR_STYLE = "showYourStyle", e.YOUR_SPACE = "yourSpace", e.EMOJIS = "emojis", e.NO_LIMITS = "noLimits", e.PERMADECOS = "permadecos", e.VOICE_FILTERS = "voiceFilters", e.CUSTOM_THEMES = "customThemes", e
  }({});
let es = (e, t) => ei({
    voiceFilters: {
      thumbnail: $.Z,
      assetUrl: e ? J.Z : ee.Z
    },
    permadecos: {
      thumbnail: H.Z,
      assetUrl: H.Z
    },
    serverProfiles: {
      thumbnail: O,
      assetUrl: e ? z.ZP : q.ZP
    },
    customThemes: {
      thumbnail: U.Z,
      assetUrl: e ? k.Z : G.Z
    }
  }, t ? {
    referralProgram: {
      thumbnail: R.Z,
      assetUrl: e ? N.Z : P.Z
    },
    showYourStyle: {
      thumbnail: D.Z,
      assetUrl: e ? w.Z : x.Z
    },
    yourSpace: {
      thumbnail: j.Z,
      assetUrl: e ? L.Z : M.Z
    },
    emojis: {
      thumbnail: I.Z,
      assetUrl: e ? v.Z : T.Z
    },
    noLimits: {
      thumbnail: A.Z,
      assetUrl: e ? S.Z : C.Z
    }
  } : {
    referralProgram: {
      thumbnail: W.Z,
      assetUrl: e ? Y.ZP : K.ZP
    },
    showYourStyle: {
      thumbnail: y,
      assetUrl: e ? X.Z : Q.Z
    },
    yourSpace: {
      thumbnail: b,
      assetUrl: e ? et.Z : en.Z
    },
    emojis: {
      thumbnail: g,
      assetUrl: e ? B.ZP : Z.ZP
    },
    noLimits: {
      thumbnail: E,
      assetUrl: e ? F.ZP : V.ZP
    }
  }),
  el = () => {
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
    }, g = (0, Chunk526167.rO)(), E = Chunk63063.Z.getArticleURL(Chunk981631.BhN.REFERRAL_PROGRAM), b = (0, Chunk963590.Z)({
      location: "WhatsNewSection"
    }), y = (0, Chunk866419.YZ)("useBentoBoxes"), O = es(Chunk509614, (0, Chunk47280.ZP)({
      location: "useBentoBoxes"
    })), v = {
      name: "voiceFilters",
      title: Chunk388032.intl.format(Chunk388032.t.iAzLOj, {}),
      description: Chunk388032.intl.format(Chunk388032.t["NT0/pa"], {
        learnMoreLink: Chunk981631.EYA.VOICE_FILTERS_BLOG
      }),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      previewImage: Chunk872532.voiceFilters.thumbnail,
      videoUrl: Chunk872532.voiceFilters.assetUrl,
      badgeText: Chunk388032.intl.string(Chunk388032.t.EYxi0t)
    }, I = {
      name: "permadecos",
      title: Chunk388032.intl.string(Chunk388032.t["57ngoq"]),
      description: Chunk388032.intl.string(Chunk388032.t.piFFjY),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      previewImage: Chunk872532.permadecos.thumbnail,
      onClick: exports,
      videoUrl: Chunk872532.permadecos.assetUrl
    }, T = {
      name: "serverProfiles",
      title: Chunk388032.intl.string(Chunk388032.t.I9TYMj),
      description: Chunk388032.intl.string(Chunk388032.t.HMSHeH),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      onClick: exports,
      previewImage: Chunk872532.serverProfiles.thumbnail,
      videoUrl: Chunk872532.serverProfiles.assetUrl
    }, S = {
      name: "referralProgram",
      title: Chunk388032.intl.string(Chunk388032.t.tPY4o6),
      description: Chunk388032.intl.format(Chunk388032.t.jRPQUF, {
        learnMoreLink: Chunk880511
      }),
      previewImage: Chunk872532.referralProgram.thumbnail,
      videoUrl: Chunk872532.referralProgram.assetUrl
    }, A = {
      name: "customThemes",
      title: Chunk388032.intl.string(Chunk684555.default.XokIHB),
      description: Chunk388032.intl.string(Chunk684555.default["7esQMD"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      previewImage: Chunk872532.customThemes.thumbnail,
      onClick: () => {
        (0, Chunk550385.XO)(Chunk550385.wh.CUSTOM_THEME)
      },
      videoUrl: Chunk872532.customThemes.assetUrl
    }, C = {
      name: "showYourStyle",
      title: Chunk388032.intl.string(Chunk388032.t.Ij3Zmp),
      description: Chunk388032.intl.string(Chunk388032.t.UsOUxc),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      previewImage: Chunk872532.showYourStyle.thumbnail,
      onClick: exports,
      videoUrl: Chunk872532.showYourStyle.assetUrl
    }, N = {
      name: "yourSpace",
      title: Chunk388032.intl.string(Chunk388032.t.Wme3nZ),
      description: Chunk388032.intl.string(Chunk388032.t["/aAIqa"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      previewImage: Chunk872532.yourSpace.thumbnail,
      onClick: require,
      videoUrl: Chunk872532.yourSpace.assetUrl
    }, R = {
      name: "emojis",
      title: Chunk388032.intl.string(Chunk388032.t.zY5PPT),
      description: Chunk388032.intl.string(Chunk388032.t.R5Xag4),
      previewImage: Chunk872532.emojis.thumbnail,
      videoUrl: Chunk872532.emojis.assetUrl
    };
    return {
      whatsNewBoxes: Chunk612253 ? [
        [Chunk147146],
        [Chunk91830, Chunk32357]
      ] : Chunk985443 ? [
        [Chunk742694],
        [Chunk406459, Chunk32357]
      ] : [
        [Chunk406459],
        [Chunk91830, Chunk32357]
      ],
      bestOfBoxes: [
        [Chunk801794],
        [Chunk739790],
        [Chunk779235, {
          name: "noLimits",
          title: Chunk388032.intl.string(Chunk388032.t["6b3ydH"]),
          description: Chunk388032.intl.string(Chunk388032.t["Y+IJys"]),
          previewImage: Chunk872532.noLimits.thumbnail,
          videoUrl: Chunk872532.noLimits.assetUrl
        }]
      ]
    }
  }