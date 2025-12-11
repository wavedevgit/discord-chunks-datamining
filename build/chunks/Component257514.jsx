/** Chunk was on 6284 **/
/** chunk id: 257514, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk740492 = require("./740492.js"),
  Chunk626135 = require("./626135.js"),
  Chunk171246 = require("./171246.js"),
  Chunk225715 = require("./225715.jsx"),
  Chunk553334 = require("./553334.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk492925 = require("./492925.js");

function A(t) {
  let {
    transitionState: e,
    application: n,
    storeListing: A,
    subscription: E,
    guild: S,
    onClose: f
  } = t, {
    analyticsLocations: P
  } = (0, o.ZP)(c.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL), {
    cancelSubscription: T,
    error: g,
    submitting: m
  } = (t => {
    let [e, n] = i.useState(false), [a, l] = i.useState(null);
    return {
      cancelSubscription: async e => {
        try {
          return n(true), await s.EO(e, t), true
        } catch (t) {
          l(t)
        } finally {
          n(false)
        }
      },
      error: a,
      submitting: e
    }
  })(P), b = async () => {
    await T(E.id) && (u.ZP.disableApplicationSubscriptionCancellationSurvey ? f() : (0, r.ZDy)(async () => (await f(), t => (0, a.jsx)(p.Z, function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), a.forEach(function(e) {
          var a;
          a = n[e], e in t ? Object.defineProperty(t, e, {
            value: a,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = a
        })
      }
      return t
    }({
      application: n,
      subscriptionId: E.id
    }, t)))))
  };
  i.useEffect(() => {
    C.default.track(I.rMx.CANCELLATION_FLOW_STARTED, {
      location_stack: P
    })
  }, [P]);
  let L = (0, d.KW)(A.skuFlags);
  return (0, a.jsx)(l.ExpressiveModal, {
    actions: [{
      loading: m,
      onClick: b,
      text: N.intl.string(N.t.KSqyfW),
      variant: "critical-primary"
    }],
    graphic: {
      type: "dynamic",
      component: r.P3w.APPLICATION_IMAGE_HEADER,
      aspectRatio: "16/9",
      props: {
        application: n,
        className: O.largeAppIcon
      }
    },
    title: N.intl.string(N.t.CeCHk1),
    subtitle: L ? N.intl.format(N.t.fZP9QD, {
      applicationName: n.name,
      timestamp: E.currentPeriodEnd.getTime()
    }) : N.intl.format(N.t["3LeWBF"], {
      guild: null == S ? true : S.name,
      applicationName: n.name,
      timestamp: E.currentPeriodEnd.getTime()
    }),
    transitionState: e,
    onClose: f,
    children: (0, a.jsxs)("div", {
      className: O.cancelModalBody,
      children: [null != g ? (0, a.jsx)(l.M14, {
        type: "critical",
        children: g.message
      }) : null, (0, a.jsx)(_.G9, {
        applicationId: n.id,
        storeListingBenefits: A.benefits,
        className: O.benefitsContainer
      })]
    })
  })
}