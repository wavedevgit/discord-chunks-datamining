/** Chunk was on web.js **/
/** chunk id: 572995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P6: () => Q,
  ZP: () => $,
  y$: () => X
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
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk353149 = require("./353149.js"),
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
  Chunk383057 = require("./383057.js"),
  Chunk370026 = require("./370026.js"),
  Chunk120368 = require("./120368.js"),
  Chunk378325 = require("./378325.js"),
  Chunk962526 = require("./962526.js");

function z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      z(e, t, n[t])
    })
  }
  return e
}
var Q = function(e) {
    return e.CONTAINED = "contained", e.OVERLAY = "overlay", e
  }({}),
  X = function(e) {
    return e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large", e
  }({});
let J = e => ({
    premiumGroup: {
      thumbnail: S,
      assetUrl: S
    },
    serverProfiles: {
      thumbnail: I,
      assetUrl: e ? W.ZP : K.ZP
    },
    customThemes: {
      thumbnail: H.Z,
      assetUrl: e ? V.Z : Y.Z
    },
    displayNameStyles: {
      thumbnail: C.Z,
      assetUrl: e ? T.Z : A.Z
    },
    referralProgram: {
      thumbnail: j.Z,
      assetUrl: e ? L.Z : M.Z
    },
    showYourStyle: {
      thumbnail: U.Z,
      assetUrl: e ? k.Z : G.Z
    },
    yourSpace: {
      thumbnail: F.Z,
      assetUrl: e ? Z.Z : B.Z
    },
    emojis: {
      thumbnail: P.Z,
      assetUrl: e ? N.Z : w.Z
    },
    noLimits: {
      thumbnail: D.Z,
      assetUrl: e ? R.Z : x.Z
    }
  }),
  $ = () => {
    let e, {
        analyticsLocations: t
      } = (0, s.ZP)(o.Z.PREMIUM_MARKETING_BENTO_BOX),
      S = (0, u.Z)({
        scrollPosition: E.Y_.TRY_IT_OUT,
        analyticsLocations: t
      }),
      I = (0, h.QL)(),
      T = (0, i.useCallback)(() => {
        (0, f.openUserSettings)(d.n.PROFILE_PANEL, {
          section: g.oAB.PROFILE_CUSTOMIZATION,
          analyticsLocations: t
        }, () => (0, c.I)({
          analyticsLocations: t
        }))
      }, [t]),
      C = () => {
        {
          let {
            openUserSettings: e
          } = n(518596);
          e(d.n.APPEARANCE_PANEL, {
            section: g.oAB.APPEARANCE,
            analyticsLocations: t
          })
        }
      },
      A = (0, p.rO)(),
      N = _.Z.getArticleURL(g.BhN.REFERRAL_PROGRAM),
      P = J(A),
      w = {
        name: "serverProfiles",
        title: y.intl.string(y.t.I9TYMg),
        description: y.intl.string(y.t.HMSHeH),
        descriptionCta: y.intl.string(y.t.jVcuVY),
        onClick: S,
        previewImage: P.serverProfiles.thumbnail,
        videoUrl: P.serverProfiles.assetUrl
      },
      R = {
        name: "referralProgram",
        title: y.intl.string(y.t.tPY4o9),
        description: y.intl.format(y.t.jRPQUH, {
          learnMoreLink: N
        }),
        previewImage: P.referralProgram.thumbnail,
        videoUrl: P.referralProgram.assetUrl
      },
      D = {
        name: "customThemes",
        title: y.intl.string(O.default.XokIHM),
        description: y.intl.string(O.default["7esQMC"]),
        descriptionCta: y.intl.string(y.t.jVcuVY),
        previewImage: P.customThemes.thumbnail,
        onClick: () => {
          (0, l.XO)(l.wh.CUSTOM_THEME)
        },
        videoUrl: P.customThemes.assetUrl
      },
      x = {
        name: "displayNameStyles",
        title: y.intl.string(v.default.ABtBDQ),
        description: y.intl.string(v.default.MFNXZh),
        descriptionCta: y.intl.string(y.t.jVcuVY),
        previewImage: P.displayNameStyles.thumbnail,
        onClick: T,
        badgeText: y.intl.string(y.t.y2b7CA).toLocaleUpperCase(),
        videoUrl: P.displayNameStyles.assetUrl
      },
      L = {
        name: "premiumGroup",
        title: y.intl.formatToPlainString(b.default.VFEDDB, {
          premiumGroupProductName: (0, m.sO)()
        }),
        description: y.intl.formatToPlainString(b.default.WudmR3, {
          totalSeats: m.Q5,
          premiumGroupProductName: (0, m.sO)()
        }),
        descriptionCta: y.intl.string(y.t.hvVgAZ),
        previewImage: P.premiumGroup.thumbnail,
        videoUrl: P.premiumGroup.assetUrl,
        onClick: () => {
          (0, a.openModalLazy)(async () => {
            let {
              default: e
            } = await n.e("33638").then(n.bind(n, 837244));
            return t => (0, r.jsx)(e, q({}, t))
          })
        },
        badgeText: y.intl.string(y.t.oW0eUd).toLocaleUpperCase(),
        badgeVariant: "expressive"
      },
      j = {
        name: "showYourStyle",
        title: y.intl.string(y.t.Ij3Zmv),
        description: y.intl.string(y.t.UsOUxY),
        descriptionCta: y.intl.string(y.t.jVcuVY),
        previewImage: P.showYourStyle.thumbnail,
        onClick: S,
        videoUrl: P.showYourStyle.assetUrl
      },
      M = {
        name: "yourSpace",
        title: y.intl.string(y.t.Wme3nX),
        description: y.intl.string(y.t["/aAIqV"]),
        descriptionCta: y.intl.string(y.t.jVcuVY),
        previewImage: P.yourSpace.thumbnail,
        onClick: C,
        videoUrl: P.yourSpace.assetUrl
      },
      k = {
        name: "emojis",
        title: y.intl.string(y.t.zY5PPb),
        description: y.intl.string(y.t.R5Xag2),
        previewImage: P.emojis.thumbnail,
        videoUrl: P.emojis.assetUrl
      },
      U = [
        [j],
        [M],
        [k, {
          name: "noLimits",
          title: y.intl.string(y.t["6b3ydG"]),
          description: y.intl.string(y.t["Y+IJyg"]),
          previewImage: P.noLimits.thumbnail,
          videoUrl: P.noLimits.assetUrl
        }]
      ];
    return {
      whatsNewBoxes: e = I ? [
        [L],
        [w, R]
      ] : [
        [x],
        [D, R]
      ],
      bestOfBoxes: U
    }
  }