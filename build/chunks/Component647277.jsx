/** Chunk was on web.js **/
/** chunk id: 647277, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => P
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk796634 = require("./796634.js"),
  Chunk656139 = require("./656139.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk641952 = require("./641952.js"),
  Chunk456254 = require("./456254.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = e => {
    let {
      startingScreen: t,
      analyticsLocations: i
    } = e;
    c.default.track(m.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
      location_stack: i
    }), (0, s.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 656139));
      return n => (0, r.jsx)(e, S(O({}, n), {
        startingScreen: t
      }))
    })
  },
  T = e => {
    let {
      user: t
    } = e, {
      avatarSrc: n,
      eventHandlers: i
    } = (0, l.Z)({
      userId: t.id,
      size: s.EFr.SIZE_24
    });
    return (0, r.jsx)(s.qEK, O({
      className: E.referredFriendAvatar,
      src: n,
      "aria-label": (0, d.oY)(t),
      size: s.EFr.SIZE_24
    }, i), t.id)
  },
  C = e => {
    let {
      slotIndex: t
    } = e;
    return (0, r.jsx)("div", {
      className: E.availableReferralSlot,
      children: t
    })
  },
  A = e => {
    let {
      referralSentUsers: t
    } = e, n = () => {
      let e = [];
      for (let n = 0; n < _.Q; n++)
        if ((null == t ? true : t[n]) !== true) {
          let i = (0, r.jsx)(T, {
            user: t[n]
          }, t[n].id);
          e.push(i)
        } else {
          let t = (0, r.jsx)(C, {
            slotIndex: n + 1
          }, n);
          e.push(t)
        } return e
    };
    return (0, r.jsx)("div", {
      className: E.progressContainer,
      children: n()
    })
  },
  N = e => {
    let {
      nReferralsSent: t
    } = e, n = 33.3 * t;
    return (0, r.jsx)(s._3P, {
      percent: n,
      colorOverride: "#53ac66",
      background: E.progressCircleBackground,
      strokeSize: .8,
      ringColorOverrideClassName: E.progressCircleRing,
      overlayClassName: t === _.Q ? E.glow : true,
      children: (0, r.jsx)(s.Eep, {
        src: b.Z,
        height: 93,
        width: 93,
        zoomable: false
      })
    })
  },
  P = e => {
    let {
      className: t
    } = e, {
      referralSentUsers: n
    } = (0, _.G)(), i = (0, o.e7)([p.Z], () => p.Z.getRecipientStatus()), l = (0, o.e7)([p.Z], () => p.Z.getHasEligibleFriends()), c = i.size === _.Q && [...i.values()].every(e => e === f.Fe.REDEEMED), d = i.size === _.Q, b = () => false === l ? g.intl.format(g.t["zWhX/Q"], {
      helpdeskArticle: u.Z.getArticleURL(m.BhN.REFERRAL_PROGRAM)
    }) : n.length === _.Q ? true === c ? g.intl.format(g.t["1aEjsH"], {
      helpdeskArticle: u.Z.getArticleURL(m.BhN.REFERRAL_PROGRAM)
    }) : g.intl.format(g.t["+u3AOO"], {
      helpdeskArticle: u.Z.getArticleURL(m.BhN.REFERRAL_PROGRAM)
    }) : g.intl.format(g.t["omMr+V"], {
      helpdeskArticle: u.Z.getArticleURL(m.BhN.REFERRAL_PROGRAM)
    });
    return (0, r.jsxs)("div", {
      className: a()(E.container, t),
      children: [(0, r.jsx)("div", {
        className: E.progressCircle,
        children: (0, r.jsx)(N, {
          nReferralsSent: i.size
        })
      }), (0, r.jsxs)("div", {
        className: E.bannerContent,
        children: [(0, r.jsx)(A, {
          referralSentUsers: n
        }), (0, r.jsxs)("div", {
          className: E.bannerContentText,
          children: [(0, r.jsx)(s.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: g.intl.string(g.t.USo4s7)
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: b()
          })]
        }), (0, r.jsx)(s.Button, {
          variant: "primary",
          disabled: false === l || true === d,
          text: g.intl.string(g.t.Lm2nFc),
          onClick: () => I({
            startingScreen: h.SelectFriendsModalScreens.SELECT_FRIENDS,
            analyticsLocations: []
          })
        })]
      })]
    })
  }