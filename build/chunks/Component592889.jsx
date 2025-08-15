/** Chunk was on 30202 **/
/** chunk id: 592889, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk301766 = require("./301766.js"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk159240 = require("./159240.js");

function T(e) {
  let {
    subscription: t,
    renewalMutations: n,
    transitionState: r,
    onClose: s,
    analyticsLocation: a
  } = e, l = (0, c.e7)([x.Z], () => x.Z.theme), {
    analyticsLocations: f
  } = (0, h.ZP)(g.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL), O = j.Z.get(t.planId);
  o()(null != O, "Missing subscriptionPlan");
  let T = (0, E.aS)(t.planId, false, false, {
      paymentSourceId: t.paymentSourceId,
      currency: t.currency
    }),
    N = (0, C.og)((0, C.T4)(T.amount, T.currency), O.interval, O.intervalCount);
  async function I() {
    await (0, p.dP)(t, t.planId, {
      amount: 0,
      currency: T.currency
    }, (0, E.UX)(t.items, T.currency, t.paymentSourceId), f, a), s()
  }
  return (0, i.jsxs)(m.Y0X, {
    transitionState: r,
    "aria-label": v.intl.string(v.t["E9kB4+"]),
    parentComponent: "SubscriptionRenewalMutationNotice",
    children: [(0, i.jsxs)(m.xBx, {
      justify: b.Z.Justify.BETWEEN,
      separator: false,
      children: [(0, i.jsx)(m.vwX, {
        tag: m.RB0.H4,
        children: v.intl.string(v.t["E9kB4+"])
      }), (0, i.jsx)(m.olH, {
        onClick: s
      })]
    }), (0, i.jsx)(m.hzk, {
      className: S.modalBody,
      children: (0, _.Q0)(t.planId) ? v.intl.format(v.t.GMp54O, {
        downgradedPlan: E.ZP.getDisplayName(n.planId),
        existingRate: N
      }) : v.intl.format(v.t["vx/NZ2"], {
        existingPlan: E.ZP.getDisplayName(t.planId),
        downgradedPlan: E.ZP.getDisplayName(n.planId),
        existingRate: N
      })
    }), (0, i.jsxs)(m.mzw, {
      children: [(0, i.jsx)(m.zxk, {
        variant: "primary",
        text: v.intl.string(v.t.frE8KC),
        onClick: I
      }), (0, i.jsx)(u.zx, {
        look: u.zx.Looks.LINK,
        color: (0, d.ap)(l) ? u.zx.Colors.PRIMARY : u.zx.Colors.WHITE,
        onClick: s,
        children: v.intl.string(v.t.oEAioK)
      })]
    })]
  })
}

function N(e) {
  let {
    subscription: t,
    renewalMutations: n,
    className: s,
    analyticsLocation: l
  } = e, [o, c] = r.useState(false), d = (0, f.Z)(), u = t.currentPeriodEnd;
  return d.fractionalState === O.a$.FP_SUB_PAUSED && (u = d.endsAt.toDate()), (0, i.jsxs)("div", {
    className: a()(S.root, s),
    children: [(0, i.jsx)(m.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: S.infoIcon
    }), (0, i.jsx)("div", {
      className: S.text,
      children: v.intl.format(v.t.ar1cPj, {
        planName: t.hasExternalPlanChange ? (0, E.zL)(n) : E.ZP.getDisplayName(n.planId),
        date: u
      })
    }), t.isPurchasedExternally ? null : (0, i.jsx)(m.eee, {
      onClick: e => {
        c(true), e.preventDefault()
      },
      className: S.cancelLink,
      children: v.intl.string(v.t["ETE/oK"])
    }), o ? (0, i.jsx)(m.u_l, {
      renderModal: e => {
        let {
          transitionState: r
        } = e;
        return (0, i.jsx)(T, {
          subscription: t,
          renewalMutations: n,
          transitionState: r,
          onClose: () => c(false),
          analyticsLocation: l
        })
      },
      onCloseRequest: () => c(false)
    }) : null]
  })
}