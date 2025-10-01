/** Chunk was on 6284 **/
/** chunk id: 257514, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk740492 = require("./740492.js"),
  Chunk626135 = require("./626135.js"),
  Chunk171246 = require("./171246.js"),
  Chunk225715 = require("./225715.jsx"),
  Chunk635840 = require("./635840.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk290362 = require("./290362.js");

function A(t) {
  let {
    transitionState: i,
    application: e,
    storeListing: A,
    subscription: O,
    guild: T,
    onClose: p
  } = t, h = (0, o.Dt)(), {
    analyticsLocations: m
  } = (0, d.ZP)(c.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL), {
    cancelSubscription: P,
    error: g,
    submitting: j
  } = (t => {
    let [i, e] = a.useState(false), [n, s] = a.useState(null);
    return {
      cancelSubscription: async i => {
        try {
          return e(true), await r.EO(i, t), true
        } catch (t) {
          s(t)
        } finally {
          e(false)
        }
      },
      error: n,
      submitting: i
    }
  })(m), [L, f] = a.useState(0), v = async () => {
    await P(O.id) && (C.ZP.disableApplicationSubscriptionCancellationSurvey ? p() : f(1))
  };
  a.useEffect(() => {
    _.default.track(S.rMx.CANCELLATION_FLOW_STARTED, {
      location_stack: m
    })
  }, [m]);
  let R = (0, u.KW)(A.skuFlags);
  return (0, n.jsx)(s.IX, {
    onClose: p,
    transitionState: i,
    "aria-labelledby": h,
    children: (0, n.jsxs)(l.MyZ, {
      activeSlide: L,
      width: 480,
      children: [(0, n.jsx)(l.Mi4, {
        id: 0,
        children: (0, n.jsxs)("div", {
          className: E.slideContainer,
          children: [null != g ? (0, n.jsx)(l.kzN, {
            children: g.message
          }) : null, (0, n.jsxs)(s.fef, {
            children: [(0, n.jsx)(l.LZC, {
              size: 16
            }), (0, n.jsxs)(N.q$, {
              children: [(0, n.jsx)(N.CW, {
                application: e
              }), (0, n.jsx)(N.r0, {
                id: h,
                children: x.intl.format(x.t.irka9v, {
                  tier: A.summary
                })
              }), (0, n.jsx)(N.s$, {}), (0, n.jsx)(N.K9, {
                title: x.intl.string(x.t.LZunzc),
                description: R ? x.intl.formatToPlainString(x.t["+HdfBw"], {
                  timestamp: O.currentPeriodEnd.getTime()
                }) : x.intl.formatToPlainString(x.t.qxiBnZ, {
                  timestamp: O.currentPeriodEnd.getTime(),
                  guildName: null == T ? true : T.name
                })
              }), (0, n.jsx)(N.G9, {
                applicationId: A.applicationId,
                storeListingBenefits: A.benefits
              })]
            })]
          }), (0, n.jsx)(s.mzw, {
            children: (0, n.jsx)(s.Go$, {
              actions: [{
                loading: j,
                onClick: v,
                text: x.intl.string(x.t.KSqyfX),
                variant: "critical-primary"
              }, {
                onClick: p,
                text: x.intl.string(x.t["05jDxs"]),
                variant: "icon-only"
              }],
              actionsFullWidth: true
            })
          })]
        })
      }), (0, n.jsx)(l.Mi4, {
        id: 1,
        children: (0, n.jsx)("div", {
          className: E.slideContainer,
          children: (0, n.jsx)(I.Z, {
            application: e,
            subscriptionId: O.id,
            onClose: p
          })
        })
      })]
    })
  })
}