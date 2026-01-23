/** Chunk was on web.js **/
/** chunk id: 659533, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => L
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk854627 = require("./854627.js"),
  Chunk427157 = require("./427157.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk326084 = require("./326084.js"),
  Chunk851746 = require("./851746.js"),
  Chunk664654 = require("./664654.js"),
  Chunk344904 = require("./344904.jsx"),
  Chunk221688 = require("./221688.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk509117 = require("./509117.js"),
  Chunk6336 = require("./6336.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = e => {
    let {
      userRecord: t,
      placement: n
    } = e, {
      avatarSrc: i,
      eventHandlers: a
    } = (0, p.A)({
      userId: null == t ? true : t.id,
      size: u._3J.SIZE_32,
      animateOnHover: true
    }), s = null != t, o = s ? (0, r.jsx)(u.euF, C({
      src: i,
      "aria-label": t.username,
      size: u._3J.SIZE_32
    }, a)) : (0, r.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: I.n5,
      children: n
    });
    return (0, r.jsx)(l.m_, {
      text: A.intl.string(A.t.UnKHdo),
      shouldShow: !s,
      children: (0, r.jsx)("div", {
        className: I.Lg,
        children: o
      })
    })
  },
  P = e => {
    let {
      numSentReferrals: t,
      placement: n
    } = e;
    return (0, r.jsxs)("div", {
      className: I.Ip,
      children: [(0, r.jsx)("div", {
        className: I.Ej
      }), (0, r.jsx)("div", {
        className: s()({
          [I.ch]: t > n,
          [I.q_]: t === n
        })
      })]
    })
  },
  D = e => {
    let {
      userRecords: t
    } = e, n = t.length, i = n < 1 ? null : t[0], a = n < 2 ? null : t[1], s = n < 3 ? null : t[2];
    return (0, r.jsxs)("div", {
      className: I.ZM,
      children: [(0, r.jsx)(w, {
        userRecord: i,
        placement: 1
      }), (0, r.jsx)(P, {
        numSentReferrals: n,
        placement: 1
      }), (0, r.jsx)(w, {
        userRecord: a,
        placement: 2
      }), (0, r.jsx)(P, {
        numSentReferrals: n,
        placement: 2
      }), (0, r.jsx)(w, {
        userRecord: s,
        placement: 3
      })]
    })
  },
  x = e => {
    let {
      analyticsLocations: t
    } = e;
    h.default.track(v.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
      location_stack: t
    }), (0, u.mMO)(async () => {
      let {
        default: e
      } = await n.e("26489").then(n.bind(n, 477088));
      return n => (0, r.jsx)(e, R(C({}, n), {
        sourceAnalyticsLocations: t
      }))
    })
  },
  L = e => {
    let {
      isInSettings: t = false
    } = e, n = (0, o.bG)([E.A], () => E.A.getRecipientStatus()), {
      referralSentUsers: a
    } = (0, y.J)(), l = i.useMemo(() => a.map(e => new _.A(e)), [a]), p = {
      redeemed: 0,
      converted: 0,
      sent: n.size
    };
    n.forEach(e => {
      e === g.aK.REDEEMED && p.redeemed++, e === g.aK.CONVERTED && (p.redeemed++, p.converted++)
    });
    let h = p.sent === y.Z,
      T = m.A.getArticleURL(v.MVz.REFERRAL_PROGRAM),
      {
        analyticsLocations: C
      } = (0, f.Ay)(d.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
      N = i.useRef(null),
      R = p.sent / y.Z * 100,
      w = (0, r.jsxs)("div", {
        className: I.hE,
        children: [(0, r.jsx)(b.Ay, {
          percentage: R,
          progressCircleVariation: b.BN.NITRO_LOGO,
          iconClassName: s()({
            [I.VC]: !t,
            [I.ER]: t
          })
        }), (0, r.jsxs)("div", {
          className: I.Ns,
          children: [(0, r.jsx)(u.Heading, {
            variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
            className: I.R0,
            children: (0, O.X8)({
              hasSentAll: h
            })
          }), (0, r.jsx)(D, {
            userRecords: l
          }), (0, r.jsx)(u.Text, {
            variant: t ? "text-sm/normal" : "text-lg/medium",
            children: (0, O.dB)({
              helpdeskArticle: T,
              referralsStatuses: p
            })
          }), (0, r.jsx)("div", {
            className: s()(I.Fb, {
              [I.jv]: !t
            }),
            children: (0, r.jsx)(u.wLn, {
              "data-migration-pending": true,
              className: I.r$,
              color: c.XD.CUSTOM,
              onClick: () => x({
                analyticsLocations: C
              }),
              onlyShineOnHover: true,
              children: (0, r.jsxs)("div", {
                className: I.Zn,
                children: [(0, r.jsx)("img", {
                  src: S,
                  alt: "",
                  className: I.QH
                }), h ? A.intl.string(A.t.SY9tyI) : A.intl.string(A.t.Lm2nFc)]
              })
            })
          })]
        })]
      }),
      P = p.redeemed === y.Z;
    return (0, r.jsx)(f.f5, {
      value: C,
      children: (0, r.jsx)("div", {
        className: s()({
          [I.f5]: P,
          [I.JY]: !P,
          [I.VX]: !t,
          [I.m$]: P && t
        }),
        children: (0, r.jsx)("div", {
          ref: N,
          className: s()({
            [I.dn]: !t,
            [I.d_]: t,
            [I.kS]: P
          }),
          children: w
        })
      })
    })
  }