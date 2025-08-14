/** Chunk was on 6284 **/
/** chunk id: 257514, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function h(e) {
  let {
    transitionState: t,
    application: i,
    storeListing: h,
    subscription: T,
    guild: A,
    onClose: E
  } = e, p = (0, c.Dt)(), {
    analyticsLocations: O
  } = (0, d.ZP)(o.Z.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL), {
    cancelSubscription: g,
    error: j,
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
    await g(T.id) && (_.ZP.disableApplicationSubscriptionCancellationSurvey ? E() : f(1))
  };
  a.useEffect(() => {
    C.default.track(x.rMx.CANCELLATION_FLOW_STARTED, {
      location_stack: O
    })
  }, [O]);
  let b = (0, u.KW)(h.skuFlags);
  return (0, n.jsx)(l.Y0X, {
    transitionState: t,
    className: S.modal,
    "aria-labelledby": p,
    parentComponent: "CancelSubscriptionModal",
    children: (0, n.jsxs)(l.MyZ, {
      activeSlide: L,
      width: 440,
      children: [(0, n.jsx)(l.Mi4, {
        id: 0,
        children: (0, n.jsxs)("div", {
          className: S.slideContainer,
          children: [null != j ? (0, n.jsx)(l.kzN, {
            children: j.message
          }) : null, (0, n.jsxs)(l.hzk, {
            className: S.content,
            children: [(0, n.jsx)(l.LZC, {
              size: 16
            }), (0, n.jsxs)(N.q$, {
              children: [(0, n.jsx)(N.CW, {
                application: i
              }), (0, n.jsx)(N.r0, {
                id: p,
                children: I.intl.format(I.t.irka9v, {
                  tier: h.summary
                })
              }), (0, n.jsx)(N.s$, {}), (0, n.jsx)(N.K9, {
                title: I.intl.string(I.t.LZunzc),
                description: b ? I.intl.formatToPlainString(I.t["+HdfBw"], {
                  timestamp: T.currentPeriodEnd.getTime()
                }) : I.intl.formatToPlainString(I.t.qxiBnZ, {
                  timestamp: T.currentPeriodEnd.getTime(),
                  guildName: null == A ? true : A.name
                })
              }), (0, n.jsx)(N.G9, {
                applicationId: h.applicationId,
                storeListingBenefits: h.benefits
              })]
            })]
          }), (0, n.jsxs)(l.mzw, {
            className: S.footer,
            children: [(0, n.jsx)(l.zxk, {
              variant: "critical-primary",
              text: I.intl.string(I.t.KSqyfX),
              onClick: R,
              loading: P
            }), (0, n.jsx)(s.zx, {
              look: s.zx.Looks.LINK,
              color: s.zx.Colors.PRIMARY,
              className: S.goBackButton,
              onClick: E,
              children: I.intl.string(I.t["05jDxs"])
            })]
          })]
        })
      }), (0, n.jsx)(l.Mi4, {
        id: 1,
        children: (0, n.jsx)("div", {
          className: S.slideContainer,
          children: (0, n.jsx)(m.Z, {
            application: i,
            subscriptionId: T.id,
            onClose: E
          })
        })
      })]
    })
  })
}