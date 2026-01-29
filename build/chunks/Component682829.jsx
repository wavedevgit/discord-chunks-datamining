/** Chunk was on 32502 **/
/** chunk id: 682829, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => X
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
    className: W.wb,
    type: o.ZpM.Types.CUSTOM,
    children: (0, i.jsxs)(j.A, {
      align: j.A.Align.CENTER,
      children: [(0, i.jsx)(O.A, {
        game: null,
        size: O.M.SMALL,
        className: W.pV
      }), (0, i.jsx)("span", {
        className: W.O,
        children: K.intl.string(K.t["jy/hyj"])
      })]
    })
  })
}

function Q() {
  let e = (0, a.bG)([L.A], () => L.A.getForApplication(B.tv));
  return l.useEffect(() => {
    (0, h.LM)(B.tv)
  }, []), (0, i.jsx)(o.nVY, {
    label: K.intl.string(K.t["2GKrvn"]),
    description: K.intl.string(K.t.kNEjGm),
    children: null != e && k.Ay.hasAccountCredit(e) ? (0, i.jsx)(M.A, {
      className: W.fX,
      entitlements: e
    }) : (0, i.jsx)(J, {})
  })
}

function Z() {
  return (0, i.jsx)("hr", {
    className: W.hr
  })
}
let X = function() {
  let e = (0, a.bG)([R.A], () => R.A.getPremiumTypeSubscription()),
    t = (0, A.A)({
      subscriptionFilter: e => H.Hy.has(e.status)
    }),
    n = t.length > 1,
    s = (0, a.bG)([P.A], () => null != e && null != e.paymentSourceId ? P.A.getPaymentSource(e.paymentSourceId) : null, [e]),
    h = (0, a.bG)([R.A], () => R.A.hasFetchedSubscriptions()),
    j = (0, a.bG)([I.A], () => I.A.isBusy),
    O = (0, b.Y)(),
    L = (0, a.bG)([N.A], () => N.A.getSubsection()),
    k = (0, a.bG)([R.A], () => {
      var e, t;
      return null != (e = null == (t = R.A.getActiveApplicationSubscriptions()) ? true : t.length) ? e : 0
    }),
    M = (0, a.bG)([R.A], () => {
      var e;
      return Object.values(null != (e = R.A.getSubscriptions()) ? e : {}).filter(e => e.type === Y.rzx.GUILD).filter(e => e.status !== Y.Dmq.ENDED).length
    }),
    J = (0, m.A)({
      forceFetch: true
    }),
    X = (0, w.d)(),
    q = null !== e ? e.currentPeriodEnd : true,
    $ = !(X && !(J.unactivatedUnits.length > 0)) && (J.fractionalState !== B.xc.NONE || J.unactivatedUnits.length > 0);
  return (l.useEffect(() => (c.h.wait(() => {
    (0, g.zS)(), d.hP(), (0, u.CD)(), d.$o()
  }), function() {
    x.A.clearSubsection()
  }), []), _.A.enabled) ? (0, i.jsx)(p.A, {}) : h && O ? L === F.nR ? (0, i.jsx)(S.A, {
    onGoBack: () => x.A.clearSubsection()
  }) : L === F.PZ ? (0, i.jsx)(C.A, {
    onGoBack: () => x.A.clearSubsection()
  }) : (0, i.jsx)("div", {
    className: W.kL,
    children: (0, i.jsxs)("div", {
      className: W.Qs,
      children: [n ? (0, i.jsx)(H.Sb, {}) : null, null != e ? (0, i.jsx)(H.Ay, {
        subscription: e,
        paymentSource: s,
        busy: j,
        subscriptions: t
      }) : (0, i.jsx)(H.TC, {}), $ && (0, i.jsxs)("section", {
        children: [(0, i.jsx)(o.Heading, {
          variant: "heading-md/bold",
          className: W.HL,
          children: K.intl.string(K.t.Obre8v)
        }), (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          className: W.JU,
          children: K.intl.format(K.t["7Zi06b"], {
            helpCenterLink: D.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT)
          })
        }), (0, i.jsx)(V.A, {
          className: W.fX,
          fractionalPremiumInfo: J,
          activationDate: q
        })]
      }), (0, i.jsx)(v.x, {
        setting: z.H.SUBSCRIPTIONS_CREDITS,
        children: (0, i.jsx)(Q, {})
      }), M > 0 && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(Z, {}), (0, i.jsx)(E.A, {
          count: M,
          onClickManageSubscription: () => (0, T.openUserSettings)(y.X.SUBSCRIPTIONS_PANEL, {
            section: Y.nc_.SUBSCRIPTIONS,
            subsection: F.nR
          })
        })]
      }), k > 0 && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(Z, {}), (0, i.jsx)(f.A, {
          count: k,
          onClickManageSubscription: () => {
            (0, T.openUserSettings)(y.X.SUBSCRIPTIONS_PANEL, {
              section: Y.nc_.SUBSCRIPTIONS,
              subsection: F.PZ
            }), G.default.track(Y.HAw.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
          }
        })]
      }), (0, i.jsx)(Z, {}), null != e ? (0, i.jsx)(U.A, {
        subscription: e,
        withOverheadSeparator: false
      }) : null]
    })
  }) : (0, i.jsx)("div", {
    className: r()(W.kL, W.Lq),
    children: (0, i.jsx)(o.y$y, {})
  })
}