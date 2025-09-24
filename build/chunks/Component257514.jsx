/** Chunk was on 6284 **/
/** chunk id: 257514, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk213734 = require("./213734.jsx"),
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
  Chunk304495 = require("./304495.js");

function h(t) {
  let {
    transitionState: i,
    application: e,
    storeListing: h,
    subscription: p,
    guild: m,
    onClose: P
  } = t, g = (0, u.Dt)(), {
    analyticsLocations: j
  } = (0, _.ZP)(C.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL), {
    cancelSubscription: L,
    error: f,
    submitting: v
  } = (t => {
    let [i, e] = s.useState(false), [n, a] = s.useState(null);
    return {
      cancelSubscription: async i => {
        try {
          return e(true), await o.EO(i, t), true
        } catch (t) {
          a(t)
        } finally {
          e(false)
        }
      },
      error: n,
      submitting: i
    }
  })(j), [R, U] = s.useState(0), b = async () => {
    await L(p.id) && (N.ZP.disableApplicationSubscriptionCancellationSurvey ? P() : U(1))
  };
  s.useEffect(() => {
    I.default.track(A.rMx.CANCELLATION_FLOW_STARTED, {
      location_stack: j
    })
  }, [j]);
  let k = (0, S.KW)(h.skuFlags);
  return (0, n.jsx)(a.IX, {
    onClose: P,
    transitionState: i,
    "aria-labelledby": g,
    children: (0, n.jsxs)(d.MyZ, {
      activeSlide: R,
      width: 480,
      children: [(0, n.jsx)(d.Mi4, {
        id: 0,
        children: (0, n.jsxs)("div", {
          className: T.slideContainer,
          children: [null != f ? (0, n.jsx)(d.kzN, {
            children: f.message
          }) : null, (0, n.jsxs)(r.f, {
            children: [(0, n.jsx)(d.LZC, {
              size: 16
            }), (0, n.jsxs)(E.q$, {
              children: [(0, n.jsx)(E.CW, {
                application: e
              }), (0, n.jsx)(E.r0, {
                id: g,
                children: O.intl.format(O.t.irka9v, {
                  tier: h.summary
                })
              }), (0, n.jsx)(E.s$, {}), (0, n.jsx)(E.K9, {
                title: O.intl.string(O.t.LZunzc),
                description: k ? O.intl.formatToPlainString(O.t["+HdfBw"], {
                  timestamp: p.currentPeriodEnd.getTime()
                }) : O.intl.formatToPlainString(O.t.qxiBnZ, {
                  timestamp: p.currentPeriodEnd.getTime(),
                  guildName: null == m ? true : m.name
                })
              }), (0, n.jsx)(E.G9, {
                applicationId: h.applicationId,
                storeListingBenefits: h.benefits
              })]
            })]
          }), (0, n.jsx)(c.m, {
            children: (0, n.jsx)(l.G, {
              actions: [{
                loading: v,
                onClick: b,
                text: O.intl.string(O.t.KSqyfX),
                variant: "critical-primary"
              }, {
                onClick: P,
                text: O.intl.string(O.t["05jDxs"]),
                variant: "icon-only"
              }],
              actionsFullWidth: true
            })
          })]
        })
      }), (0, n.jsx)(d.Mi4, {
        id: 1,
        children: (0, n.jsx)("div", {
          className: T.slideContainer,
          children: (0, n.jsx)(x.Z, {
            application: e,
            subscriptionId: p.id,
            onClose: P
          })
        })
      })]
    })
  })
}