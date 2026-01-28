/** Chunk was on 60449 **/
/** chunk id: 682829, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => q
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
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

function J() {
  return (0, i.jsx)(o.ZpM, {
    className: K.wb,
    type: o.ZpM.Types.CUSTOM,
    children: (0, i.jsxs)(O.A, {
      align: O.A.Align.CENTER,
      children: [(0, i.jsx)(E.A, {
        game: null,
        size: E.M.SMALL,
        className: K.pV
      }), (0, i.jsx)("span", {
        className: K.O,
        children: W.intl.string(W.t["jy/hyj"])
      })]
    })
  })
}

function Q() {
  let e = (0, a.bG)([P.A], () => P.A.getForApplication(B.tv));
  return s.useEffect(() => {
    (0, g.LM)(B.tv)
  }, []), (0, i.jsx)(o.nVY, {
    label: W.intl.string(W.t["2GKrvn"]),
    description: W.intl.string(W.t.kNEjGm),
    children: null != e && L.Ay.hasAccountCredit(e) ? (0, i.jsx)(w.A, {
      className: K.fX,
      entitlements: e
    }) : (0, i.jsx)(J, {})
  })
}

function X() {
  return (0, i.jsx)("hr", {
    className: K.hr
  })
}
let q = function() {
  let e = (0, a.bG)([G.A], () => G.A.getPremiumTypeSubscription()),
    t = (0, m.A)({
      subscriptionFilter: e => H.Hy.has(e.status)
    }),
    n = t.length > 1,
    l = (0, a.bG)([D.A], () => null != e && null != e.paymentSourceId ? D.A.getPaymentSource(e.paymentSourceId) : null, [e]),
    g = (0, a.bG)([G.A], () => G.A.hasFetchedSubscriptions()),
    O = (0, a.bG)([y.A], () => y.A.isBusy),
    E = (0, j.Y)(),
    P = (0, a.bG)([I.A], () => I.A.getSubsection()),
    L = (0, a.bG)([G.A], () => {
      var e, t;
      return null != (e = null == (t = G.A.getActiveApplicationSubscriptions()) ? true : t.length) ? e : 0
    }),
    w = (0, a.bG)([G.A], () => {
      var e;
      return Object.values(null != (e = G.A.getSubscriptions()) ? e : {}).filter(e => e.type === Y.rzx.GUILD).filter(e => e.status !== Y.Dmq.ENDED).length
    }),
    J = (0, p.A)({
      forceFetch: true
    }),
    q = (0, k.d)(),
    Z = null !== e ? e.currentPeriodEnd : true,
    $ = !(q && !(J.unactivatedUnits.length > 0)) && (J.fractionalState !== B.xc.NONE || J.unactivatedUnits.length > 0);
  return (s.useEffect(() => (c.h.wait(() => {
    (0, h.zS)(), d.hP(), (0, u.CD)(), d.$o()
  }), function() {
    x.A.clearSubsection()
  }), []), _.A.enabled) ? (0, i.jsx)(A.A, {}) : g && E ? P === F.nR ? (0, i.jsx)(S.A, {
    onGoBack: () => x.A.clearSubsection()
  }) : P === F.PZ ? (0, i.jsx)(C.A, {
    onGoBack: () => x.A.clearSubsection()
  }) : (0, i.jsx)("div", {
    className: K.kL,
    children: (0, i.jsxs)("div", {
      className: K.Qs,
      children: [n ? (0, i.jsx)(H.Sb, {}) : null, null != e ? (0, i.jsx)(H.Ay, {
        subscription: e,
        paymentSource: l,
        busy: O,
        subscriptions: t
      }) : (0, i.jsx)(H.TC, {}), $ && (0, i.jsxs)("section", {
        children: [(0, i.jsx)(o.Heading, {
          variant: "heading-md/bold",
          className: K.HL,
          children: W.intl.string(W.t.Obre8v)
        }), (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          className: K.JU,
          children: W.intl.format(W.t["7Zi06b"], {
            helpCenterLink: V.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT)
          })
        }), (0, i.jsx)(M.A, {
          className: K.fX,
          fractionalPremiumInfo: J,
          activationDate: Z
        })]
      }), (0, i.jsx)(f.x, {
        setting: z.H.SUBSCRIPTIONS_CREDITS,
        children: (0, i.jsx)(Q, {})
      }), w > 0 && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(X, {}), (0, i.jsx)(b.A, {
          count: w,
          onClickManageSubscription: () => (0, N.openUserSettings)(T.X.SUBSCRIPTIONS_PANEL, {
            section: Y.nc_.SUBSCRIPTIONS,
            subsection: F.nR
          })
        })]
      }), L > 0 && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(X, {}), (0, i.jsx)(v.A, {
          count: L,
          onClickManageSubscription: () => {
            (0, N.openUserSettings)(T.X.SUBSCRIPTIONS_PANEL, {
              section: Y.nc_.SUBSCRIPTIONS,
              subsection: F.PZ
            }), R.default.track(Y.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
          }
        })]
      }), (0, i.jsx)(X, {}), null != e ? (0, i.jsx)(U.A, {
        subscription: e,
        withOverheadSeparator: false
      }) : null]
    })
  }) : (0, i.jsx)("div", {
    className: r()(K.kL, K.Lq),
    children: (0, i.jsx)(o.y$y, {})
  })
}