/** Chunk was on 75708 **/
/** chunk id: 572995, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  NA: () => ee,
  ZP: () => en,
  y$: () => $
});
var i, r, Chunk230711 = require("./230711.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk300284 = require("./300284.js"),
  Chunk526167 = require("./526167.js"),
  Chunk63063 = require("./63063.js"),
  Chunk220654 = require("./220654.js"),
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
  Chunk825087 = require("./825087.js"),
  $ = ((i = {}).SMALL = "small", i.MEDIUM = "medium", i.LARGE = "large", i),
  ee = ((r = {}).REFERRAL_PROGRAM = "referralProgram", r.SERVER_PROFILES = "serverProfiles", r.SHOW_YOUR_STYLE = "showYourStyle", r.YOUR_SPACE = "yourSpace", r.EMOJIS = "emojis", r.NO_LIMITS = "noLimits", r.PERMADECOS = "permadecos", r.VOICE_FILTERS = "voiceFilters", r);
let et = (e, t) => (function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  })({
    voiceFilters: {
      thumbnail: q.Z,
      assetUrl: e ? K.Z : X.Z
    },
    permadecos: {
      thumbnail: U.Z,
      assetUrl: U.Z
    },
    serverProfiles: {
      thumbnail: j,
      assetUrl: e ? H.ZP : z.ZP
    }
  }, t ? {
    referralProgram: {
      thumbnail: N.Z,
      assetUrl: e ? I.Z : y.Z
    },
    showYourStyle: {
      thumbnail: P.Z,
      assetUrl: e ? A.Z : R.Z
    },
    yourSpace: {
      thumbnail: Z.Z,
      assetUrl: e ? D.Z : w.Z
    },
    emojis: {
      thumbnail: C.Z,
      assetUrl: e ? E.Z : O.Z
    },
    noLimits: {
      thumbnail: S.Z,
      assetUrl: e ? v.Z : T.Z
    }
  } : {
    referralProgram: {
      thumbnail: G.Z,
      assetUrl: e ? V.ZP : F.ZP
    },
    showYourStyle: {
      thumbnail: _,
      assetUrl: e ? W.Z : Y.Z
    },
    yourSpace: {
      thumbnail: x,
      assetUrl: e ? J.Z : Q.Z
    },
    emojis: {
      thumbnail: f,
      assetUrl: e ? k.ZP : L.ZP
    },
    noLimits: {
      thumbnail: b,
      assetUrl: e ? M.ZP : B.ZP
    }
  }),
  en = () => {
    let {
      analyticsLocations: e
    } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_MARKETING_BENTO_BOX), t = (0, Chunk300284.Z)({
      scrollPosition: Chunk526761.Y_.TRY_IT_OUT,
      analyticsLocations: module
    }), n = (0, Chunk526167.rO)(), i = Chunk63063.Z.getArticleURL(Chunk981631.BhN.REFERRAL_PROGRAM), r = (0, Chunk963590.Z)({
      location: "WhatsNewSection"
    }), f = et(require, (0, Chunk220654.Z)({
      location: "useBentoBoxes"
    })), b = {
      name: "voiceFilters",
      title: Chunk388032.intl.format(Chunk388032.t.iAzLOj, {}),
      description: Chunk388032.intl.format(Chunk388032.t["NT0/pa"], {
        learnMoreLink: Chunk981631.EYA.VOICE_FILTERS_BLOG
      }),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      previewImage: Chunk509614.voiceFilters.thumbnail,
      videoUrl: Chunk509614.voiceFilters.assetUrl,
      badgeText: Chunk388032.intl.string(Chunk388032.t.EYxi0t)
    }, x = {
      name: "permadecos",
      title: Chunk388032.intl.string(Chunk388032.t["57ngoq"]),
      description: Chunk388032.intl.string(Chunk388032.t.piFFjY),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      previewImage: Chunk509614.permadecos.thumbnail,
      onClick: exports,
      videoUrl: Chunk509614.permadecos.assetUrl
    }, _ = {
      name: "serverProfiles",
      title: Chunk388032.intl.string(Chunk388032.t.I9TYMj),
      description: Chunk388032.intl.string(Chunk388032.t.HMSHeH),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      onClick: exports,
      previewImage: Chunk509614.serverProfiles.thumbnail,
      videoUrl: Chunk509614.serverProfiles.assetUrl
    }, j = {
      name: "referralProgram",
      title: Chunk388032.intl.string(Chunk388032.t.tPY4o6),
      description: Chunk388032.intl.format(Chunk388032.t.jRPQUF, {
        learnMoreLink: i
      }),
      previewImage: Chunk509614.referralProgram.thumbnail,
      videoUrl: Chunk509614.referralProgram.assetUrl
    }, E = {
      name: "showYourStyle",
      title: Chunk388032.intl.string(Chunk388032.t.Ij3Zmp),
      description: Chunk388032.intl.string(Chunk388032.t.UsOUxc),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      previewImage: Chunk509614.showYourStyle.thumbnail,
      onClick: exports,
      videoUrl: Chunk509614.showYourStyle.assetUrl
    }, C = {
      name: "yourSpace",
      title: Chunk388032.intl.string(Chunk388032.t.Wme3nZ),
      description: Chunk388032.intl.string(Chunk388032.t["/aAIqa"]),
      descriptionCta: Chunk388032.intl.string(Chunk388032.t.jVcuVV),
      previewImage: Chunk509614.yourSpace.thumbnail,
      onClick: () => {
        Chunk230711.Z.open(Chunk981631.oAB.APPEARANCE, null, {
          openWithoutBackstack: true,
          analyticsLocations: module
        })
      },
      videoUrl: Chunk509614.yourSpace.assetUrl
    }, O = {
      name: "emojis",
      title: Chunk388032.intl.string(Chunk388032.t.zY5PPT),
      description: Chunk388032.intl.string(Chunk388032.t.R5Xag4),
      previewImage: Chunk509614.emojis.thumbnail,
      videoUrl: Chunk509614.emojis.assetUrl
    };
    return {
      whatsNewBoxes: r ? [
        [Chunk880511],
        [Chunk985443, Chunk872532]
      ] : [
        [Chunk985443],
        [Chunk612253, Chunk872532]
      ],
      bestOfBoxes: [
        [Chunk404583],
        [Chunk295349],
        [Chunk631572, {
          name: "noLimits",
          title: Chunk388032.intl.string(Chunk388032.t["6b3ydH"]),
          description: Chunk388032.intl.string(Chunk388032.t["Y+IJys"]),
          previewImage: Chunk509614.noLimits.thumbnail,
          videoUrl: Chunk509614.noLimits.assetUrl
        }]
      ]
    }
  }