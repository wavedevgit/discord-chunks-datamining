/** Chunk was on web.js **/
/** chunk id: 534217, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => w
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk326084 = require("./326084.js"),
  Chunk851746 = require("./851746.js"),
  Chunk664654 = require("./664654.js"),
  Chunk303682 = require("./303682.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk146449 = require("./146449.js"),
  Chunk544879 = require("./544879.js");

function b(e, t, n) {
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
      b(e, t, n[t])
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

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = e => {
    let {
      startingScreen: t,
      analyticsLocations: i
    } = e;
    c.default.track(m.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
      location_stack: i
    }), (0, o.mMO)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 303682));
      return n => (0, r.jsx)(e, A(O({}, n), {
        startingScreen: t
      }))
    })
  },
  S = e => {
    let {
      user: t
    } = e, {
      avatarSrc: n,
      eventHandlers: i
    } = (0, l.A)({
      userId: t.id,
      size: o._3J.SIZE_24
    });
    return (0, r.jsx)(o.euF, O({
      className: E.bj,
      src: n,
      "aria-label": (0, d.mG)(t),
      size: o._3J.SIZE_24
    }, i), t.id)
  },
  T = e => {
    let {
      slotIndex: t
    } = e;
    return (0, r.jsx)("div", {
      className: E.p,
      children: t
    })
  },
  C = e => {
    let {
      referralSentUsers: t
    } = e, n = () => {
      let e = [];
      for (let n = 0; n < _.Z; n++)
        if ((null == t ? true : t[n]) !== true) {
          let i = (0, r.jsx)(S, {
            user: t[n]
          }, t[n].id);
          e.push(i)
        } else {
          let t = (0, r.jsx)(T, {
            slotIndex: n + 1
          }, n);
          e.push(t)
        } return e
    };
    return (0, r.jsx)("div", {
      className: E.L$,
      children: n()
    })
  },
  N = e => {
    let {
      nReferralsSent: t
    } = e, n = 33.3 * t;
    return (0, r.jsx)(o.a3E, {
      percent: n,
      colorOverride: "#53ac66",
      background: E.cq,
      strokeSize: .8,
      ringColorOverrideClassName: E.e0,
      overlayClassName: t === _.Z ? E.ys : true,
      children: (0, r.jsx)(o._V3, {
        src: y.A,
        height: 93,
        width: 93,
        zoomable: false
      })
    })
  },
  w = e => {
    let {
      className: t
    } = e, {
      referralSentUsers: n
    } = (0, _.J)(), i = (0, s.bG)([p.A], () => p.A.getRecipientStatus()), l = (0, s.bG)([p.A], () => p.A.getHasEligibleFriends()), c = i.size === _.Z && [...i.values()].every(e => e === f.aK.REDEEMED), d = i.size === _.Z, y = () => false === l ? g.intl.format(g.t["zWhX/Q"], {
      helpdeskArticle: u.A.getArticleURL(m.MVz.REFERRAL_PROGRAM)
    }) : n.length === _.Z ? true === c ? g.intl.format(g.t["1aEjsH"], {
      helpdeskArticle: u.A.getArticleURL(m.MVz.REFERRAL_PROGRAM)
    }) : g.intl.format(g.t["+u3AOO"], {
      helpdeskArticle: u.A.getArticleURL(m.MVz.REFERRAL_PROGRAM)
    }) : g.intl.format(g.t["omMr+V"], {
      helpdeskArticle: u.A.getArticleURL(m.MVz.REFERRAL_PROGRAM)
    });
    return (0, r.jsxs)("div", {
      className: a()(E.kL, t),
      children: [(0, r.jsx)("div", {
        className: E.G3,
        children: (0, r.jsx)(N, {
          nReferralsSent: i.size
        })
      }), (0, r.jsxs)("div", {
        className: E.IH,
        children: [(0, r.jsx)(C, {
          referralSentUsers: n
        }), (0, r.jsxs)("div", {
          className: E.n4,
          children: [(0, r.jsx)(o.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: g.intl.string(g.t.USo4s7)
          }), (0, r.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: y()
          })]
        }), (0, r.jsx)(o.Button, {
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