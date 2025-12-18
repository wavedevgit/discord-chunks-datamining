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
  return (0, Chunk54381.jsx)(Chunk481060.Zbd, {
    className: Chunk25325.noItemsCard,
    type: Chunk481060.Zbd.Types.CUSTOM,
    children: (0, Chunk54381.jsxs)(Chunk600164.Z, {
      align: Chunk600164.Z.Align.CENTER,
      children: [(0, Chunk54381.jsx)(Chunk925329.Z, {
        game: null,
        size: Chunk925329.A.SMALL,
        className: Chunk25325.noItemsIcon
      }), (0, Chunk54381.jsx)("span", {
        className: Chunk25325.cardText,
        children: Chunk388032.intl.string(Chunk388032.t["jy/hyj"])
      })]
    })
  })
}

function q() {
  let e = (0, Chunk442837.e7)([Chunk580130.Z], () => Chunk580130.Z.getForApplication(Chunk474936.CL));
  return Chunk473749.useEffect(() => {
    (0, Chunk496929.yD)(Chunk474936.CL)
  }, []), (0, Chunk54381.jsx)(Chunk481060.C3N, {
    label: Chunk388032.intl.string(Chunk388032.t["2GKrvn"]),
    description: Chunk388032.intl.string(Chunk388032.t.kNEjGm),
    children: null != module && Chunk74538.ZP.hasAccountCredit(module) ? (0, Chunk54381.jsx)(Chunk639056.Z, {
      className: Chunk25325.accountCredit,
      entitlements: module
    }) : (0, Chunk54381.jsx)(z, {})
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
  return (0, Chunk54381.jsx)("hr", {
    className: Chunk25325.hr
  })
}
let J = function() {
  let e = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    t = (0, Chunk167354.Z)({
      subscriptionFilter: e => F.eS.has(e.status)
    }),
    n = exports.length > 1,
    a = (0, Chunk442837.e7)([Chunk853872.Z], () => null != module && null != module.paymentSourceId ? Chunk853872.Z.getPaymentSource(module.paymentSourceId) : null, [module]),
    f = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.hasFetchedSubscriptions()),
    b = (0, Chunk442837.e7)([Chunk351402.Z], () => Chunk351402.Z.isBusy),
    y = (0, Chunk15640.V)(),
    x = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSubsection()),
    j = (0, Chunk442837.e7)([Chunk78839.Z], () => {
      var e, t;
      return null != (t = null == (e = Chunk78839.Z.getActiveApplicationSubscriptions()) ? true : module.length) ? exports : 0
    }),
    M = (0, Chunk442837.e7)([Chunk78839.Z], () => {
      var e;
      return Object.values(null != (e = Chunk78839.Z.getSubscriptions()) ? module : {}).filter(e => e.type === V.NYc.GUILD).filter(e => e.status !== V.O0b.ENDED).length
    }),
    U = (0, Chunk975298.Z)({
      forceFetch: true
    }),
    G = (0, Chunk695349.W)(),
    W = null !== module ? module.currentPeriodEnd : true,
    z = !(Chunk639056 && !(Chunk391077.unactivatedUnits.length > 0)) && (Chunk391077.fractionalState !== Chunk474936.a$.NONE || Chunk391077.unactivatedUnits.length > 0);
  return (Chunk473749.useEffect(() => (Chunk570140.Z.wait(() => {
    (0, Chunk821849.Y2)(), Chunk355467.jg(), (0, Chunk179360.X8)(), Chunk355467.tZ()
  }), function() {
    Chunk230711.Z.clearSubsection()
  }), []), Chunk246946.Z.enabled) ? (0, Chunk54381.jsx)(Chunk497321.Z, {}) : Chunk496929 && Chunk925329 ? Chunk580130 === Chunk526761.cP ? (0, Chunk54381.jsx)(Chunk810762.Z, {
    onGoBack: () => Chunk230711.Z.clearSubsection()
  }) : Chunk580130 === Chunk526761.XZ ? (0, Chunk54381.jsx)(Chunk856888.Z, {
    onGoBack: () => Chunk230711.Z.clearSubsection()
  }) : (0, Chunk54381.jsx)("div", {
    className: Chunk25325.container,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk25325.content,
      children: [require ? (0, Chunk54381.jsx)(Chunk91430.Yn, {}) : null, null != module ? (0, Chunk54381.jsx)(Chunk91430.ZP, {
        subscription: module,
        paymentSource: Chunk120356,
        busy: Chunk600164,
        subscriptions: exports
      }) : (0, Chunk54381.jsx)(Chunk91430.MM, {}), z && Q(Chunk391077, Chunk388032), (0, Chunk54381.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.SUBSCRIPTIONS_CREDITS,
        children: (0, Chunk54381.jsx)(q, {})
      }), Chunk74538 > 0 && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(X, {}), (0, Chunk54381.jsx)(Chunk406174.Z, {
          count: Chunk74538,
          onClickManageSubscription: () => (0, Chunk518596.openUserSettings)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
            section: Chunk981631.oAB.SUBSCRIPTIONS,
            subsection: Chunk526761.cP
          })
        })]
      }), Chunk63063 > 0 && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(X, {}), (0, Chunk54381.jsx)(Chunk681833.Z, {
          count: Chunk63063,
          onClickManageSubscription: () => {
            (0, Chunk518596.openUserSettings)(Chunk313789.n.SUBSCRIPTIONS_PANEL, {
              section: Chunk981631.oAB.SUBSCRIPTIONS,
              subsection: Chunk526761.XZ
            }), Chunk626135.default.track(Chunk981631.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
          }
        })]
      }), (0, Chunk54381.jsx)(X, {}), null != module ? (0, Chunk54381.jsx)(Chunk52164.Z, {
        subscription: module,
        withOverheadSeparator: false
      }) : null]
    })
  }) : (0, Chunk54381.jsx)("div", {
    className: o()(Chunk25325.container, Chunk25325.loading),
    children: (0, Chunk54381.jsx)(Chunk481060.$jN, {})
  })
}