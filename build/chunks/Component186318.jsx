/** Chunk was on web.js **/
/** chunk id: 186318, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk821849 = require("./821849.js"),
  Chunk45474 = require("./45474.js"),
  Chunk261538 = require("./261538.jsx"),
  Chunk146528 = require("./146528.js"),
  Chunk729154 = require("./729154.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk362786 = require("./362786.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = () => {
    let [e, t] = Chunk473749.useState(Chunk474936.PremiumTypes.TIER_0), [n, h] = Chunk473749.useState(Chunk45474.R.WHAT_YOU_LOSE), [E, y] = Chunk473749.useState(null), [v, S] = Chunk473749.useState(Chunk474936.Xh.PREMIUM_MONTH_TIER_0), [I, T] = Chunk473749.useState([]), [A, C] = Chunk473749.useState(() => {
      let e = new Date;
      return module.setMonth(module.getMonth() + 1), module
    }), [N, P] = Chunk473749.useState(null), [R, w] = Chunk473749.useState(false), [D, x] = Chunk473749.useState(false), [L, j] = Chunk473749.useState(false);
    (0, Chunk473749.useEffect)(() => {
      (0, Chunk821849.Y2)()
    }, []), (0, Chunk473749.useEffect)(() => {
      let e = new Date;
      switch (v) {
        case Chunk474936.Xh.PREMIUM_MONTH_TIER_0:
        case Chunk474936.Xh.PREMIUM_MONTH_TIER_1:
        case Chunk474936.Xh.PREMIUM_MONTH_TIER_2:
          module.setMonth(module.getMonth() + 1);
          break;
        case Chunk474936.Xh.PREMIUM_YEAR_TIER_0:
        case Chunk474936.Xh.PREMIUM_YEAR_TIER_1:
        case Chunk474936.Xh.PREMIUM_YEAR_TIER_2:
          module.setFullYear(module.getFullYear() + 1)
      }
      C(module)
    }, [v]), (0, Chunk473749.useEffect)(() => {
      switch (module) {
        case Chunk474936.PremiumTypes.TIER_0:
          T([{
            label: "Nitro Basic Monthly",
            value: Chunk474936.Xh.PREMIUM_MONTH_TIER_0
          }, {
            label: "Nitro Basic Yearly",
            value: Chunk474936.Xh.PREMIUM_YEAR_TIER_0
          }]), S(Chunk474936.Xh.PREMIUM_MONTH_TIER_0);
          break;
        case Chunk474936.PremiumTypes.TIER_1:
          T([{
            label: "Nitro Classic Monthly",
            value: Chunk474936.Xh.PREMIUM_MONTH_TIER_1
          }, {
            label: "Nitro Classic Yearly",
            value: Chunk474936.Xh.PREMIUM_YEAR_TIER_1
          }]), S(Chunk474936.Xh.PREMIUM_MONTH_TIER_1);
          break;
        case Chunk474936.PremiumTypes.TIER_2:
          T([{
            label: "Nitro Monthly",
            value: Chunk474936.Xh.PREMIUM_MONTH_TIER_2
          }, {
            label: "Nitro Yearly",
            value: Chunk474936.Xh.PREMIUM_YEAR_TIER_2
          }]), S(Chunk474936.Xh.PREMIUM_MONTH_TIER_2)
      }
    }, [module]), (0, Chunk473749.useEffect)(() => {
      [Chunk45474.R.CONFIRM_DISCOUNT, Chunk45474.R.DISCOUNT_APPLIED].includes(require) && null === E && y(O()), require === Chunk45474.R.PREVIEW && null === N && P(new Chunk146528.Z({
        id: "",
        invoiceItems: [{
          id: "",
          subscriptionPlanId: v,
          subscriptionPlanPrice: 200,
          amount: 400,
          quantity: 1,
          discounts: []
        }, {
          id: "",
          subscriptionPlanId: Chunk474936.Xh.PREMIUM_MONTH_GUILD,
          subscriptionPlanPrice: 400,
          amount: 100,
          quantity: 1,
          discounts: []
        }],
        total: 200,
        currency: Chunk231338.pK.USD,
        tax: 0,
        taxInclusive: true,
        subscriptionPeriodStart: new Date,
        subscriptionPeriodEnd: A,
        status: Chunk981631.hUK.PAID
      })), require !== Chunk45474.R.PREVIEW && null !== N && P(null)
    }, [require, E, A, v, N]);
    let M = Chunk473749.useCallback(async () => {
      j(true), await (0, Chunk481060.ZDy)(async () => t => (0, r.jsx)(d.x, b(g({}, t), {
        onClose: () => {
          t.onClose(), j(false)
        },
        premiumType: e,
        churnDiscount: E,
        planId: v,
        renewalInvoice: N,
        renewalInvoiceDetails: {
          intervalType: _.rV.MONTH,
          intervalCount: 1
        },
        errorOnCancel: R,
        errorOnRedeem: D,
        setActiveStep: e => {
          h(e), t.onClose()
        },
        activeStep: n,
        premiumSubscription: {
          id: "",
          planId: v,
          type: m.NY.PREMIUM,
          items: [],
          createdAt: new Date,
          canceledAt: null,
          currentPeriodStart: new Date,
          currentPeriodEnd: A,
          status: f.O0b.ACTIVE,
          paymentSourceId: null,
          paymentGateway: null,
          paymentGatewayPlanId: null,
          paymentGatewaySubscriptionId: null,
          trialId: null,
          trialEndsAt: null,
          renewalMutations: null,
          streakStartedAt: null,
          currency: m.pK.USD,
          pauseEndsAt: null,
          pauseReason: p.Id.UNKNOWN
        }
      })))
    }, [module, E, v, N, R, D, require, A]);
    return (0, Chunk473749.useEffect)(() => {
      L && M()
    }, [require, L, M]), (0, Chunk54381.jsxs)(Chunk261538.pg, {
      children: [(0, Chunk54381.jsxs)(Chunk261538.BZ, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          children: "Premium Subscription"
        }), (0, Chunk54381.jsx)(Chunk199849.B6, {
          placeholder: "Premium Type",
          select: e => t(e),
          isSelected: t => e === t,
          serialize: e => "".concat(e),
          options: [{
            label: "Nitro Basic",
            value: Chunk474936.PremiumTypes.TIER_0
          }, {
            label: "Nitro Classic",
            value: Chunk474936.PremiumTypes.TIER_1
          }, {
            label: "Nitro",
            value: Chunk474936.PremiumTypes.TIER_2
          }]
        })]
      }), I.length > 0 && (0, Chunk54381.jsxs)(Chunk261538.BZ, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          children: "Subscription Interval"
        }), (0, Chunk54381.jsx)(Chunk199849.B6, {
          placeholder: "Premium Type",
          select: e => {
            S(e)
          },
          isSelected: e => v === e,
          serialize: e => e,
          options: I
        })]
      }), (0, Chunk54381.jsxs)(Chunk261538.BZ, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          children: "Modal Step"
        }), (0, Chunk54381.jsx)(Chunk199849.B6, {
          placeholder: "Premium Type",
          select: e => {
            h(e)
          },
          isSelected: e => n === e,
          serialize: e => "".concat(e),
          options: [{
            label: "What You Lose",
            value: Chunk45474.R.WHAT_YOU_LOSE
          }, {
            label: "Confirm Discount",
            value: Chunk45474.R.CONFIRM_DISCOUNT
          }, {
            label: "Discount Applied",
            value: Chunk45474.R.DISCOUNT_APPLIED
          }, {
            label: "Confirm Cancel",
            value: Chunk45474.R.CONFIRM
          }, {
            label: "Preview Invoice",
            value: Chunk45474.R.PREVIEW
          }]
        })]
      }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
        children: (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
          checked: null !== E,
          onChange: () => {
            if (null === E) return void y(O());
            y(null)
          },
          label: "Churn Discount"
        })
      }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
        children: (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
          checked: D,
          onChange: () => {
            x(!D)
          },
          label: "Error on Redeem Offer"
        })
      }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
        children: (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
          checked: R,
          onChange: () => {
            w(!R)
          },
          label: "Error on Cancel"
        })
      }), (0, Chunk54381.jsx)(Chunk261538.dv, {}), (0, Chunk54381.jsx)(Chunk481060.Button, {
        onClick: () => {
          j(true)
        },
        variant: "primary",
        size: "md",
        text: "Open Cancellation Modal"
      })]
    })
  },
  O = function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
      {
        discount: t = {}
      } = module;
    return b(g({
      id: "",
      discount_id: "",
      user_id: ""
    }, module), {
      discount: g({
        id: "",
        plan_ids: [],
        user_usage_limit: 3,
        user_usage_limit_interval: Chunk474936.EA.MONTH,
        user_usage_limit_interval_count: 3,
        amount: "40"
      }, exports)
    })
  }