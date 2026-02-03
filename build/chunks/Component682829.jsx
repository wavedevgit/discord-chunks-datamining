/** Chunk was on 44669 **/
/** chunk id: 682829, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => Q
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk384904 = require("./384904.js"),
  Chunk923408 = require("./923408.js"),
  Chunk339048 = require("./339048.js"),
  Chunk73825 = require("./73825.js"),
  Chunk252452 = require("./252452.js"),
  Chunk974544 = require("./974544.jsx"),
  Chunk531260 = require("./531260.js"),
  Chunk262077 = require("./262077.js"),
  Chunk160946 = require("./160946.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk769015 = require("./769015.jsx"),
  Chunk723588 = require("./723588.jsx"),
  Chunk608699 = require("./608699.jsx"),
  Chunk714308 = require("./714308.jsx"),
  Chunk478407 = require("./478407.jsx"),
  Chunk195043 = require("./195043.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk351906 = require("./351906.js"),
  Chunk628965 = require("./628965.js"),
  Chunk615405 = require("./615405.js"),
  Chunk295405 = require("./295405.js"),
  Chunk166403 = require("./166403.js"),
  Chunk469778 = require("./469778.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk637073 = require("./637073.js"),
  Chunk887997 = require("./887997.jsx"),
  Chunk177653 = require("./177653.jsx"),
  Chunk159906 = require("./159906.jsx"),
  Chunk758400 = require("./758400.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk355097 = require("./355097.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk547605 = require("./547605.js");

function X() {
  return (0, r.jsx)(o.ZpM, {
    className: z.wb,
    type: o.ZpM.Types.CUSTOM,
    children: (0, r.jsxs)(y.A, {
      align: y.A.Align.CENTER,
      children: [(0, r.jsx)(O.A, {
        game: null,
        size: O.M.SMALL,
        className: z.pV
      }), (0, r.jsx)("span", {
        className: z.O,
        children: W.intl.string(W.t["jy/hyj"])
      })]
    })
  })
}

function q() {
  let e = (0, a.bG)([R.A], () => R.A.getForApplication(H.tv));
  return l.useEffect(() => {
    (0, p.LM)(H.tv)
  }, []), (0, r.jsx)(o.nVY, {
    label: W.intl.string(W.t["2GKrvn"]),
    description: W.intl.string(W.t.kNEjGm),
    children: null != e && M.Ay.hasAccountCredit(e) ? (0, r.jsx)(U.A, {
      className: z.fX,
      entitlements: e
    }) : (0, r.jsx)(X, {})
  })
}

function J() {
  return (0, r.jsx)("hr", {
    className: z.hr
  })
}
let Q = function() {
  let e = (0, a.bG)([w.A], () => w.A.getPremiumTypeSubscription()),
    t = (0, b.A)({
      subscriptionFilter: e => B.Hy.has(e.status)
    }),
    n = t.length > 1,
    i = (0, a.bG)([P.A], () => null != e && null != e.paymentSourceId ? P.A.getPaymentSource(e.paymentSourceId) : null, [e]),
    p = (0, a.bG)([w.A], () => w.A.hasFetchedSubscriptions()),
    y = (0, a.bG)([T.A], () => T.A.isBusy),
    O = (0, A.Y)(),
    R = (0, a.bG)([N.A], () => N.A.getSubsection()),
    M = (0, a.bG)([w.A], () => {
      var e, t;
      return null != (e = null == (t = w.A.getActiveApplicationSubscriptions()) ? true : t.length) ? e : 0
    }),
    U = (0, a.bG)([w.A], () => {
      var e;
      return Object.values(null != (e = w.A.getSubscriptions()) ? e : {}).filter(e => e.type === F.rzx.GUILD).filter(e => e.status !== F.Dmq.ENDED).length
    }),
    X = (0, m.A)({
      forceFetch: true
    }),
    Q = (0, G.d)(),
    Z = null !== e ? e.currentPeriodEnd : true,
    $ = !(Q && !(X.unactivatedUnits.length > 0)) && (X.fractionalState !== H.xc.NONE || X.unactivatedUnits.length > 0);
  return (l.useEffect(() => (c.h.wait(() => {
    (0, h.zS)(), u.hP(), (0, d.CD)(), u.$o()
  }), function() {
    g.A.clearSubsection()
  }), []), I.A.enabled) ? (0, r.jsx)(f.A, {}) : p && O ? R === Y.nR ? (0, r.jsx)(x.A, {
    onGoBack: () => g.A.clearSubsection()
  }) : R === Y.PZ ? (0, r.jsx)(v.A, {
    onGoBack: () => g.A.clearSubsection()
  }) : (0, r.jsx)("div", {
    className: z.kL,
    children: (0, r.jsxs)("div", {
      className: z.Qs,
      children: [n ? (0, r.jsx)(B.Sb, {}) : null, null != e ? (0, r.jsx)(B.Ay, {
        subscription: e,
        paymentSource: i,
        busy: y,
        subscriptions: t
      }) : (0, r.jsx)(B.TC, {}), $ && (0, r.jsxs)("section", {
        children: [(0, r.jsx)(o.Heading, {
          variant: "heading-md/bold",
          className: z.HL,
          children: W.intl.string(W.t.Obre8v)
        }), (0, r.jsx)(o.Text, {
          variant: "text-md/normal",
          className: z.JU,
          children: W.intl.format(W.t["7Zi06b"], {
            helpCenterLink: L.A.getArticleURL(F.MVz.FRACTIONAL_PREMIUM_ABOUT)
          })
        }), (0, r.jsx)(k.A, {
          className: z.fX,
          fractionalPremiumInfo: X,
          activationDate: Z
        })]
      }), (0, r.jsx)(E.x, {
        setting: K.H.SUBSCRIPTIONS_CREDITS,
        children: (0, r.jsx)(q, {})
      }), U > 0 && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(J, {}), (0, r.jsx)(j.A, {
          count: U,
          onClickManageSubscription: () => (0, S.openUserSettings)(C.X.SUBSCRIPTIONS_PANEL, {
            section: F.nc_.SUBSCRIPTIONS,
            subsection: Y.nR
          })
        })]
      }), M > 0 && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(J, {}), (0, r.jsx)(_.A, {
          count: M,
          onClickManageSubscription: () => {
            (0, S.openUserSettings)(C.X.SUBSCRIPTIONS_PANEL, {
              section: F.nc_.SUBSCRIPTIONS,
              subsection: Y.PZ
            }), D.default.track(F.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
          }
        })]
      }), (0, r.jsx)(J, {}), null != e ? (0, r.jsx)(V.A, {
        subscription: e,
        withOverheadSeparator: false
      }) : null]
    })
  }) : (0, r.jsx)("div", {
    className: s()(z.kL, z.Lq),
    children: (0, r.jsx)(o.y$y, {})
  })
}