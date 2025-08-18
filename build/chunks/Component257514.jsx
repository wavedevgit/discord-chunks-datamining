/** Chunk was on 6284 **/
/** chunk id: 257514, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
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

function I(e) {
  let {
    transitionState: t,
    application: i,
    storeListing: I,
    subscription: T,
    guild: A,
    onClose: E
  } = e, p = (0, c.Dt)(), {
    analyticsLocations: O
  } = (0, d.ZP)(o.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL), {
    cancelSubscription: j,
    error: g,
    submitting: P
  } = (e => {
    let [t, i] = a.useState(false), [n, s] = a.useState(null);
    return {
      cancelSubscription: async t => {
        try {
          return i(true), await r.EO(t, e), true
        } catch (e) {
          s(e)
        } finally {
          i(false)
        }
      },
      error: n,
      submitting: t
    }
  })(O), [L, f] = a.useState(0), R = async () => {
    await j(T.id) && (_.ZP.disableApplicationSubscriptionCancellationSurvey ? E() : f(1))
  };
  a.useEffect(() => {
    C.default.track(m.rMx.CANCELLATION_FLOW_STARTED, {
      location_stack: O
    })
  }, [O]);
  let v = (0, u.KW)(I.skuFlags);
  return (0, n.jsx)(l.Y0X, {
    transitionState: t,
    className: h.modal,
    "aria-labelledby": p,
    parentComponent: "CancelSubscriptionModal",
    children: (0, n.jsxs)(l.MyZ, {
      activeSlide: L,
      width: 440,
      children: [(0, n.jsx)(l.Mi4, {
        id: 0,
        children: (0, n.jsxs)("div", {
          className: h.slideContainer,
          children: [null != g ? (0, n.jsx)(l.kzN, {
            children: g.message
          }) : null, (0, n.jsxs)(l.hzk, {
            className: h.content,
            children: [(0, n.jsx)(l.LZC, {
              size: 16
            }), (0, n.jsxs)(N.q$, {
              children: [(0, n.jsx)(N.CW, {
                application: i
              }), (0, n.jsx)(N.r0, {
                id: p,
                children: S.intl.format(S.t.irka9v, {
                  tier: I.summary
                })
              }), (0, n.jsx)(N.s$, {}), (0, n.jsx)(N.K9, {
                title: S.intl.string(S.t.LZunzc),
                description: v ? S.intl.formatToPlainString(S.t["+HdfBw"], {
                  timestamp: T.currentPeriodEnd.getTime()
                }) : S.intl.formatToPlainString(S.t.qxiBnZ, {
                  timestamp: T.currentPeriodEnd.getTime(),
                  guildName: null == A ? true : A.name
                })
              }), (0, n.jsx)(N.G9, {
                applicationId: I.applicationId,
                storeListingBenefits: I.benefits
              })]
            })]
          }), (0, n.jsxs)(l.mzw, {
            className: h.footer,
            children: [(0, n.jsx)(l.zxk, {
              variant: "critical-primary",
              text: S.intl.string(S.t.KSqyfX),
              onClick: R,
              loading: P
            }), (0, n.jsx)(s.zx, {
              look: s.zx.Looks.LINK,
              color: s.zx.Colors.PRIMARY,
              className: h.goBackButton,
              onClick: E,
              children: S.intl.string(S.t["05jDxs"])
            })]
          })]
        })
      }), (0, n.jsx)(l.Mi4, {
        id: 1,
        children: (0, n.jsx)("div", {
          className: h.slideContainer,
          children: (0, n.jsx)(x.Z, {
            application: i,
            subscriptionId: T.id,
            onClose: E
          })
        })
      })]
    })
  })
}