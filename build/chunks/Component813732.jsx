/** Chunk was on web.js **/
/** chunk id: 813732, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => J
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk179360 = require("./179360.js"),
  Chunk496929 = require("./496929.js"),
  Chunk821849 = require("./821849.js"),
  Chunk230711 = require("./230711.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk167354 = require("./167354.js"),
  Chunk15640 = require("./15640.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk406174 = require("./406174.jsx"),
  Chunk810762 = require("./810762.jsx"),
  Chunk681833 = require("./681833.jsx"),
  Chunk856888 = require("./856888.jsx"),
  Chunk921801 = require("./921801.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk246946 = require("./246946.js"),
  Chunk663389 = require("./663389.js"),
  Chunk351402 = require("./351402.js"),
  Chunk853872 = require("./853872.js"),
  Chunk78839 = require("./78839.js"),
  Chunk580130 = require("./580130.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk695349 = require("./695349.js"),
  Chunk391077 = require("./391077.jsx"),
  Chunk639056 = require("./639056.jsx"),
  Chunk52164 = require("./52164.jsx"),
  Chunk91430 = require("./91430.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk25325 = require("./25325.js");

function z() {
  return (0, r.jsx)(l.Zbd, {
    className: K.noItemsCard,
    type: l.Zbd.Types.CUSTOM,
    children: (0, r.jsxs)(b.Z, {
      align: b.Z.Align.CENTER,
      children: [(0, r.jsx)(y.Z, {
        game: null,
        size: y.A.SMALL,
        className: K.noItemsIcon
      }), (0, r.jsx)("span", {
        className: K.cardText,
        children: W.intl.string(W.t["jy/hyj"])
      })]
    })
  })
}

function q() {
  let e = (0, s.e7)([x.Z], () => x.Z.getForApplication(B.CL));
  return i.useEffect(() => {
    (0, f.yD)(B.CL)
  }, []), (0, r.jsx)(l.C3N, {
    label: W.intl.string(W.t["2GKrvn"]),
    description: W.intl.string(W.t.kNEjGm),
    children: null != e && M.ZP.hasAccountCredit(e) ? (0, r.jsx)(G.Z, {
      className: K.accountCredit,
      entitlements: e
    }) : (0, r.jsx)(z, {})
  })
}

function Q(e, t) {
  return (0, r.jsxs)("section", {
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-md/bold",
      className: K.accountCreditTitle,
      children: W.intl.string(W.t.Obre8v)
    }), (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      className: K.accountCreditDescription,
      children: W.intl.format(W.t["7Zi06b"], {
        helpCenterLink: j.Z.getArticleURL(V.BhN.FRACTIONAL_PREMIUM_ABOUT)
      })
    }), (0, r.jsx)(U.Z, {
      className: K.accountCredit,
      fractionalPremiumInfo: e,
      activationDate: t
    })]
  })
}

function X() {
  return (0, r.jsx)("hr", {
    className: K.hr
  })
}
let J = function() {
  let e = (0, s.e7)([D.Z], () => D.Z.getPremiumTypeSubscription()),
    t = (0, g.Z)({
      subscriptionFilter: e => F.eS.has(e.status)
    }),
    n = t.length > 1,
    a = (0, s.e7)([R.Z], () => null != e && null != e.paymentSourceId ? R.Z.getPaymentSource(e.paymentSourceId) : null, [e]),
    f = (0, s.e7)([D.Z], () => D.Z.hasFetchedSubscriptions()),
    b = (0, s.e7)([w.Z], () => w.Z.isBusy),
    y = (0, E.V)(),
    x = (0, s.e7)([P.Z], () => P.Z.getSubsection()),
    j = (0, s.e7)([D.Z], () => {
      var e, t;
      return null != (t = null == (e = D.Z.getActiveApplicationSubscriptions()) ? true : e.length) ? t : 0
    }),
    M = (0, s.e7)([D.Z], () => {
      var e;
      return Object.values(null != (e = D.Z.getSubscriptions()) ? e : {}).filter(e => e.type === V.NYc.GUILD).filter(e => e.status !== V.O0b.ENDED).length
    }),
    U = (0, m.Z)({
      forceFetch: true
    }),
    G = (0, k.W)(),
    W = null !== e ? e.currentPeriodEnd : true,
    z = !(G && !(U.unactivatedUnits.length > 0)) && (U.fractionalState !== B.a$.NONE || U.unactivatedUnits.length > 0);
  return (i.useEffect(() => (c.Z.wait(() => {
    (0, p.Y2)(), u.jg(), (0, d.X8)(), u.tZ()
  }), function() {
    _.Z.clearSubsection()
  }), []), N.Z.enabled) ? (0, r.jsx)(h.Z, {}) : f && y ? x === H.cP ? (0, r.jsx)(v.Z, {
    onGoBack: () => _.Z.clearSubsection()
  }) : x === H.XZ ? (0, r.jsx)(I.Z, {
    onGoBack: () => _.Z.clearSubsection()
  }) : (0, r.jsx)("div", {
    className: K.container,
    children: (0, r.jsxs)("div", {
      className: K.content,
      children: [n ? (0, r.jsx)(F.Yn, {}) : null, null != e ? (0, r.jsx)(F.ZP, {
        subscription: e,
        paymentSource: a,
        busy: b,
        subscriptions: t
      }) : (0, r.jsx)(F.MM, {}), z && Q(U, W), (0, r.jsx)(T.F, {
        setting: Y.s6.SUBSCRIPTIONS_CREDITS,
        children: (0, r.jsx)(q, {})
      }), M > 0 && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(X, {}), (0, r.jsx)(O.Z, {
          count: M,
          onClickManageSubscription: () => (0, A.openUserSettings)(C.n.SUBSCRIPTIONS_PANEL, {
            section: V.oAB.SUBSCRIPTIONS,
            subsection: H.cP
          })
        })]
      }), j > 0 && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(X, {}), (0, r.jsx)(S.Z, {
          count: j,
          onClickManageSubscription: () => {
            (0, A.openUserSettings)(C.n.SUBSCRIPTIONS_PANEL, {
              section: V.oAB.SUBSCRIPTIONS,
              subsection: H.XZ
            }), L.default.track(V.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
          }
        })]
      }), (0, r.jsx)(X, {}), null != e ? (0, r.jsx)(Z.Z, {
        subscription: e,
        withOverheadSeparator: false
      }) : null]
    })
  }) : (0, r.jsx)("div", {
    className: o()(K.container, K.loading),
    children: (0, r.jsx)(l.$jN, {})
  })
}