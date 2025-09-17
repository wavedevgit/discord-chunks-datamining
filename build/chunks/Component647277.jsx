/** Chunk was on web.js **/
/** chunk id: 647277, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => w
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk51144 = require("./51144.js"),
  Chunk281494 = require("./281494.js"),
  Chunk276444 = require("./276444.js"),
  Chunk503249 = require("./503249.js"),
  Chunk239547 = require("./239547.jsx"),
  Chunk796634 = require("./796634.js"),
  Chunk656139 = require("./656139.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk756555 = require("./756555.js"),
  Chunk456254 = require("./456254.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = e => {
    let {
      startingScreen: t,
      analyticsLocations: i
    } = e;
    c.default.track(E.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
      location_stack: i
    }), (0, s.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 656139));
      return n => (0, r.jsx)(e, S(I({}, n), {
        startingScreen: t
      }))
    })
  },
  C = e => {
    let {
      user: t
    } = e, {
      avatarSrc: n,
      eventHandlers: i
    } = (0, l.Z)({
      userId: t.id,
      size: s.EFr.SIZE_24
    });
    return (0, r.jsx)(s.qEK, I({
      className: y.referredFriendAvatar,
      src: n,
      "aria-label": (0, d.oY)(t),
      size: s.EFr.SIZE_24
    }, i), t.id)
  },
  N = e => {
    let {
      slotIndex: t
    } = e;
    return (0, r.jsx)("div", {
      className: y.availableReferralSlot,
      children: t
    })
  },
  R = e => {
    let {
      referralSentUsers: t
    } = e, n = () => {
      let e = [];
      for (let n = 0; n < m.Q; n++)
        if ((null == t ? true : t[n]) !== true) {
          let i = (0, r.jsx)(C, {
            user: t[n]
          }, t[n].id);
          e.push(i)
        } else {
          let t = (0, r.jsx)(N, {
            slotIndex: n + 1
          }, n);
          e.push(t)
        } return e
    };
    return (0, r.jsx)("div", {
      className: y.progressContainer,
      children: n()
    })
  },
  P = e => {
    let {
      nReferralsSent: t
    } = e, n = 33.3 * t, i = p.ZP.useExperiment({
      location: "ProgressWheel"
    }).cohort === p.$P.NitroLogo ? (0, r.jsx)(h.I, {}) : (0, r.jsx)(s.Eep, {
      src: O.Z,
      height: 104,
      width: 104
    });
    return (0, r.jsx)(s._3P, {
      percent: n,
      colorOverride: "#53ac66",
      background: y.progressCircleBackground,
      strokeSize: .8,
      ringColorOverrideClassName: y.progressCircleRing,
      overlayClassName: t === m.Q ? y.glow : true,
      children: i
    })
  },
  w = e => {
    let {
      className: t
    } = e, {
      referralSentUsers: n
    } = (0, m.G)(), i = (0, o.e7)([_.Z], () => _.Z.getRecipientStatus()), l = (0, o.e7)([_.Z], () => _.Z.getHasEligibleFriends()), c = i.size === m.Q && i.values().every(e => e === f.Fe.REDEEMED), d = i.size === m.Q, p = () => false === l ? b.intl.format(b.t["zWhX/f"], {
      helpdeskArticle: u.Z.getArticleURL(E.BhN.REFERRAL_PROGRAM)
    }) : n.length === m.Q ? true === c ? b.intl.format(b.t["1aEjsL"], {
      helpdeskArticle: u.Z.getArticleURL(E.BhN.REFERRAL_PROGRAM)
    }) : b.intl.format(b.t["+u3AOD"], {
      helpdeskArticle: u.Z.getArticleURL(E.BhN.REFERRAL_PROGRAM)
    }) : b.intl.format(b.t["omMr+f"], {
      helpdeskArticle: u.Z.getArticleURL(E.BhN.REFERRAL_PROGRAM)
    });
    return (0, r.jsxs)("div", {
      className: a()(y.container, t),
      children: [(0, r.jsx)("div", {
        className: y.progressCircle,
        children: (0, r.jsx)(P, {
          nReferralsSent: i.size
        })
      }), (0, r.jsxs)("div", {
        className: y.bannerContent,
        children: [(0, r.jsx)(R, {
          referralSentUsers: n
        }), (0, r.jsxs)("div", {
          className: y.bannerContentText,
          children: [(0, r.jsx)(s.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: b.intl.string(b.t.USo4s7)
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-secondary",
            children: p()
          })]
        }), (0, r.jsx)(s.zxk, {
          variant: "primary",
          disabled: false === l || true === d,
          text: b.intl.string(b.t.Lm2nFR),
          onClick: () => A({
            startingScreen: g.K.SELECT_FRIENDS,
            analyticsLocations: []
          })
        })]
      })]
    })
  }