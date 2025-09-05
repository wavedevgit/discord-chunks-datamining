/** Chunk was on web.js **/
/** chunk id: 592889, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
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

function A(e) {
  let {
    subscription: t,
    renewalMutations: n,
    transitionState: i,
    onClose: a,
    analyticsLocation: o
  } = e, s = (0, c.e7)([E.Z], () => E.Z.theme), {
    analyticsLocations: m
  } = (0, h.ZP)(p.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL), I = y.Z.get(t.planId);
  l()(null != I, "Missing subscriptionPlan");
  let A = (0, O.aS)(t.planId, false, false, {
      paymentSourceId: t.paymentSourceId,
      currency: t.currency
    }),
    C = (0, v.og)((0, v.T4)(A.amount, A.currency), I.interval, I.intervalCount);
  async function N() {
    await (0, _.dP)(t, t.planId, {
      amount: 0,
      currency: A.currency
    }, (0, O.UX)(t.items, A.currency, t.paymentSourceId), m, o), a()
  }
  return (0, r.jsxs)(f.Y0X, {
    transitionState: i,
    "aria-label": T.intl.string(T.t["E9kB4+"]),
    parentComponent: "SubscriptionRenewalMutationNotice",
    children: [(0, r.jsxs)(f.xBx, {
      justify: g.Z.Justify.BETWEEN,
      separator: false,
      children: [(0, r.jsx)(f.vwX, {
        tag: f.RB0.H4,
        children: T.intl.string(T.t["E9kB4+"])
      }), (0, r.jsx)(f.olH, {
        onClick: a
      })]
    }), (0, r.jsx)(f.hzk, {
      className: S.modalBody,
      children: (0, b.Q0)(t.planId) ? T.intl.format(T.t.GMp54O, {
        downgradedPlan: O.ZP.getDisplayName(n.planId),
        existingRate: C
      }) : T.intl.format(T.t["vx/NZ2"], {
        existingPlan: O.ZP.getDisplayName(t.planId),
        downgradedPlan: O.ZP.getDisplayName(n.planId),
        existingRate: C
      })
    }), (0, r.jsxs)(f.mzw, {
      children: [(0, r.jsx)(f.zxk, {
        variant: "primary",
        text: T.intl.string(T.t.frE8KC),
        onClick: N
      }), (0, r.jsx)(d.zx, {
        look: d.zx.Looks.LINK,
        color: (0, u.ap)(s) ? d.zx.Colors.PRIMARY : d.zx.Colors.WHITE,
        onClick: a,
        children: T.intl.string(T.t.oEAioK)
      })]
    })]
  })
}

function C(e) {
  let {
    subscription: t,
    renewalMutations: n,
    className: a,
    analyticsLocation: s
  } = e, [l, c] = i.useState(false), u = (0, m.Z)(), d = t.currentPeriodEnd;
  return u.fractionalState === I.a$.FP_SUB_PAUSED && (d = u.endsAt.toDate()), (0, r.jsxs)("div", {
    className: o()(S.root, a),
    children: [(0, r.jsx)(f.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: S.infoIcon
    }), (0, r.jsx)("div", {
      className: S.text,
      children: T.intl.format(T.t.ar1cPj, {
        planName: t.hasExternalPlanChange ? (0, O.zL)(n) : O.ZP.getDisplayName(n.planId),
        date: d
      })
    }), t.isPurchasedExternally ? null : (0, r.jsx)(f.eee, {
      onClick: e => {
        c(true), e.preventDefault()
      },
      className: S.cancelLink,
      children: T.intl.string(T.t["ETE/oK"])
    }), l ? (0, r.jsx)(f.u_l, {
      renderModal: e => {
        let {
          transitionState: i
        } = e;
        return (0, r.jsx)(A, {
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