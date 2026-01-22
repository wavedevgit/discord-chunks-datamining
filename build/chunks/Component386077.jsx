/** Chunk was on 33102 **/
/** chunk id: 386077, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk964404 = require("./964404.js"),
  Chunk954571 = require("./954571.js"),
  Chunk163437 = require("./163437.js"),
  Chunk910804 = require("./910804.jsx"),
  Chunk574475 = require("./574475.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk508025 = require("./508025.js");

function p(t) {
  let {
    transitionState: e,
    application: n,
    storeListing: p,
    subscription: S,
    guild: E,
    onClose: b
  } = t, {
    analyticsLocations: T
  } = (0, o.Ay)(c.A.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL), {
    cancelSubscription: P,
    error: m,
    submitting: f
  } = (t => {
    let [e, n] = a.useState(false), [i, l] = a.useState(null);
    return {
      cancelSubscription: async e => {
        try {
          return n(true), await r.M2(e, t), true
        } catch (t) {
          l(t)
        } finally {
          n(false)
        }
      },
      error: i,
      submitting: e
    }
  })(T), g = async () => {
    await P(S.id) && (u.Ay.disableApplicationSubscriptionCancellationSurvey ? b() : (0, s.mMO)(async () => (await b(), t => (0, i.jsx)(d.A, function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), i.forEach(function(e) {
          var i;
          i = n[e], e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = i
        })
      }
      return t
    }({
      application: n,
      subscriptionId: S.id
    }, t)))))
  };
  a.useEffect(() => {
    _.default.track(N.HAw.CANCELLATION_FLOW_STARTED, {
      location_stack: T
    })
  }, [T]);
  let L = (0, C.bg)(p.skuFlags);
  return (0, i.jsx)(l.ExpressiveModal, {
    actions: [{
      loading: f,
      onClick: g,
      text: O.intl.string(O.t.KSqyfW),
      variant: "critical-primary"
    }],
    graphic: {
      type: "dynamic",
      component: s.Z86.APPLICATION_IMAGE_HEADER,
      aspectRatio: "16/9",
      props: {
        application: n,
        className: I.Sb
      }
    },
    title: O.intl.string(O.t.CeCHk1),
    subtitle: L ? O.intl.format(O.t.fZP9QD, {
      applicationName: n.name,
      timestamp: S.currentPeriodEnd.getTime()
    }) : O.intl.format(O.t["3LeWBF"], {
      guild: null == E ? true : E.name,
      applicationName: n.name,
      timestamp: S.currentPeriodEnd.getTime()
    }),
    transitionState: e,
    onClose: b,
    children: (0, i.jsxs)("div", {
      className: I.oV,
      children: [null != m ? (0, i.jsx)(l.wx6, {
        type: "critical",
        children: m.message
      }) : null, (0, i.jsx)(A.iH, {
        applicationId: n.id,
        storeListingBenefits: p.benefits,
        className: I.iq
      })]
    })
  })
}