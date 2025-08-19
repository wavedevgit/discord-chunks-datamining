/** Chunk was on 66181 **/
/** chunk id: 813732, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => q
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk921801 = require("./921801.js"),
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
  Chunk49122 = require("./49122.js");

function W() {
  return (0, Chunk951288.jsx)(Chunk481060.Zbd, {
    className: Chunk49122.noItemsCard,
    type: Chunk481060.Zbd.Types.CUSTOM,
    children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
      align: Chunk600164.Z.Align.CENTER,
      children: [(0, Chunk951288.jsx)(Chunk925329.Z, {
        game: null,
        size: Chunk925329.Z.Sizes.SMALL,
        className: Chunk49122.noItemsIcon
      }), (0, Chunk951288.jsx)("span", {
        className: Chunk49122.cardText,
        children: Chunk388032.intl.string(Chunk388032.t["jy/hys"])
      })]
    })
  })
}

function Y() {
  let e = (0, Chunk442837.e7)([Chunk580130.Z], () => Chunk580130.Z.getForApplication(Chunk474936.CL));
  return Chunk647438.useEffect(() => {
    (0, Chunk496929.yD)(Chunk474936.CL)
  }, []), (0, Chunk951288.jsxs)("section", {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      variant: "heading-md/bold",
      className: Chunk49122.accountCreditTitle,
      children: Chunk388032.intl.string(Chunk388032.t["2GKrvr"])
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-md/normal",
      className: Chunk49122.accountCreditDescription,
      children: Chunk388032.intl.string(Chunk388032.t.kNEjGh)
    }), null != module && Chunk74538.ZP.hasAccountCredit(module) ? (0, Chunk951288.jsx)(Chunk639056.Z, {
      className: Chunk49122.accountCredit,
      entitlements: module
    }) : (0, Chunk951288.jsx)(W, {})]
  })
}

function K() {
  return (0, Chunk951288.jsx)("hr", {
    className: Chunk49122.hr
  })
}
let q = function() {
  let e = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    t = (0, Chunk167354.Z)({
      subscriptionFilter: e => M.eS.has(e.status)
    }),
    n = exports.length > 1,
    s = (0, Chunk442837.e7)([Chunk853872.Z], () => null != module && null != module.paymentSourceId ? Chunk853872.Z.getPaymentSource(module.paymentSourceId) : null, [module]),
    m = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.hasFetchedSubscriptions()),
    _ = (0, Chunk442837.e7)([Chunk351402.Z], () => Chunk351402.Z.isBusy),
    j = (0, Chunk15640.V)(),
    P = (0, Chunk442837.e7)([Chunk663389.Z], () => Chunk663389.Z.getSubsection()),
    Z = (0, Chunk442837.e7)([Chunk78839.Z], () => {
      var e, t;
      return null != (t = null == (e = Chunk78839.Z.getActiveApplicationSubscriptions()) ? true : module.length) ? exports : 0
    }),
    L = (0, Chunk442837.e7)([Chunk78839.Z], () => {
      var e;
      return Object.values(null != (e = Chunk78839.Z.getSubscriptions()) ? module : {}).filter(e => e.type === V.NYc.GUILD).filter(e => e.status !== V.O0b.ENDED).length
    }),
    W = (0, Chunk975298.Z)({
      forceFetch: true
    }),
    q = (0, Chunk695349.W)(),
    X = null !== module ? module.currentPeriodEnd : true,
    J = !(q && !(W.unactivatedUnits.length > 0)) && (W.fractionalState !== Chunk474936.a$.NONE || W.unactivatedUnits.length > 0);
  return (Chunk647438.useEffect(() => (Chunk570140.Z.wait(() => {
    (0, Chunk821849.Y2)(), Chunk355467.jg(), (0, Chunk179360.X8)(), Chunk355467.tZ()
  }), function() {
    Chunk230711.Z.clearSubsection()
  }), []), Chunk246946.Z.enabled) ? (0, Chunk951288.jsx)(Chunk497321.Z, {}) : Chunk496929 && Chunk925329 ? Chunk580130 === Chunk526761.cP ? (0, Chunk951288.jsx)(Chunk810762.Z, {
    onGoBack: () => Chunk230711.Z.clearSubsection()
  }) : Chunk580130 === Chunk526761.XZ ? (0, Chunk951288.jsx)(Chunk856888.Z, {
    onGoBack: () => Chunk230711.Z.clearSubsection()
  }) : (0, Chunk951288.jsx)("div", {
    className: Chunk49122.container,
    children: (0, Chunk951288.jsxs)("div", {
      className: Chunk49122.content,
      children: [require ? (0, Chunk951288.jsx)(Chunk91430.Yn, {}) : null, null != module ? (0, Chunk951288.jsx)(Chunk91430.ZP, {
        subscription: module,
        paymentSource: Chunk120356,
        busy: Chunk600164,
        subscriptions: exports
      }) : (0, Chunk951288.jsx)(Chunk91430.MM, {}), J && (0, Chunk951288.jsxs)("section", {
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          variant: "heading-md/bold",
          className: Chunk49122.accountCreditTitle,
          children: Chunk388032.intl.string(Chunk388032.t.Obre8v)
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          className: Chunk49122.accountCreditDescription,
          children: Chunk388032.intl.format(Chunk388032.t["7Zi06e"], {
            helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.FRACTIONAL_PREMIUM_ABOUT)
          })
        }), (0, Chunk951288.jsx)(Chunk391077.Z, {
          className: Chunk49122.accountCredit,
          fractionalPremiumInfo: W,
          activationDate: X
        })]
      }), (0, Chunk951288.jsx)(Chunk921801.F, {
        setting: Chunk726985.s6.SUBSCRIPTIONS_CREDITS,
        children: (0, Chunk951288.jsx)(Y, {})
      }), Chunk639056 > 0 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(K, {}), (0, Chunk951288.jsx)(Chunk406174.Z, {
          count: Chunk639056,
          onClickManageSubscription: () => Chunk230711.Z.setSection(Chunk981631.oAB.SUBSCRIPTIONS, Chunk526761.cP)
        })]
      }), Chunk74538 > 0 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(K, {}), (0, Chunk951288.jsx)(Chunk681833.Z, {
          count: Chunk74538,
          onClickManageSubscription: () => {
            Chunk230711.Z.setSection(Chunk981631.oAB.SUBSCRIPTIONS, Chunk526761.XZ), Chunk626135.default.track(Chunk981631.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
          }
        })]
      }), (0, Chunk951288.jsx)(K, {}), null != module ? (0, Chunk951288.jsx)(Chunk52164.Z, {
        subscription: module,
        withOverheadSeparator: false
      }) : null]
    })
  }) : (0, Chunk951288.jsx)("div", {
    className: a()(Chunk49122.container, Chunk49122.loading),
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  })
}