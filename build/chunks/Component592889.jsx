/** Chunk was on web.js **/
/** chunk id: 592889, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
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
  Chunk640671 = require("./640671.js");

function S(e) {
  let {
    subscription: t,
    renewalMutations: n,
    transitionState: i,
    onClose: a,
    analyticsLocation: o
  } = e, s = (0, c.e7)([g.Z], () => g.Z.theme), {
    analyticsLocations: h
  } = (0, p.ZP)(_.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL), v = b.Z.get(t.planId);
  l()(null != v, "Missing subscriptionPlan");
  let S = (0, y.aS)(t.planId, false, false, {
      paymentSourceId: t.paymentSourceId,
      currency: t.currency
    }),
    A = (0, O.og)((0, O.T4)(S.amount, S.currency), v.interval, v.intervalCount);
  async function C() {
    await (0, f.dP)(t, t.planId, {
      amount: 0,
      currency: S.currency
    }, (0, y.UX)(t.items, S.currency, t.paymentSourceId), h, o), a()
  }
  return (0, r.jsxs)(d.Y0X, {
    transitionState: i,
    "aria-label": I.intl.string(I.t["E9kB4+"]),
    parentComponent: "SubscriptionRenewalMutationNotice",
    children: [(0, r.jsxs)(d.xBx, {
      justify: m.Z.Justify.BETWEEN,
      separator: false,
      children: [(0, r.jsx)(d.vwX, {
        tag: d.RB0.H4,
        children: I.intl.string(I.t["E9kB4+"])
      }), (0, r.jsx)(d.olH, {
        onClick: a
      })]
    }), (0, r.jsx)(d.hzk, {
      className: T.modalBody,
      children: (0, E.Q0)(t.planId) ? I.intl.format(I.t.GMp54O, {
        downgradedPlan: y.ZP.getDisplayName(n.planId),
        existingRate: A
      }) : I.intl.format(I.t["vx/NZ2"], {
        existingPlan: y.ZP.getDisplayName(t.planId),
        downgradedPlan: y.ZP.getDisplayName(n.planId),
        existingRate: A
      })
    }), (0, r.jsx)(d.mzw, {
      children: (0, r.jsxs)(d.hE2, {
        direction: "horizontal-reverse",
        align: "center",
        children: [(0, r.jsx)(d.zxk, {
          variant: "primary",
          text: I.intl.string(I.t.frE8KC),
          onClick: C
        }), (0, r.jsx)(d.Avr, {
          onClick: a,
          variant: (0, u.ap)(s) ? "primary" : "always-white",
          text: I.intl.string(I.t.oEAioK)
        })]
      })
    })]
  })
}

function A(e) {
  let {
    subscription: t,
    renewalMutations: n,
    className: a,
    analyticsLocation: s
  } = e, [l, c] = i.useState(false), u = (0, h.Z)(), f = t.currentPeriodEnd;
  return u.fractionalState === v.a$.FP_SUB_PAUSED && (f = u.endsAt.toDate()), (0, r.jsxs)("div", {
    className: o()(T.root, a),
    children: [(0, r.jsx)(d.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: T.infoIcon
    }), (0, r.jsx)("div", {
      className: T.text,
      children: I.intl.format(I.t.ar1cPj, {
        planName: t.hasExternalPlanChange ? (0, y.zL)(n) : y.ZP.getDisplayName(n.planId),
        date: f
      })
    }), t.isPurchasedExternally ? null : (0, r.jsx)(d.eee, {
      onClick: e => {
        c(true), e.preventDefault()
      },
      className: T.cancelLink,
      children: I.intl.string(I.t["ETE/oK"])
    }), l ? (0, r.jsx)(d.u_l, {
      renderModal: e => {
        let {
          transitionState: i
        } = e;
        return (0, r.jsx)(S, {
          subscription: t,
          renewalMutations: n,
          transitionState: i,
          onClose: () => c(false),
          analyticsLocation: s
        })
      },
      onCloseRequest: () => c(false)
    }) : null]
  })
}