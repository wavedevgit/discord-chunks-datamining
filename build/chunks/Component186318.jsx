/** Chunk was on web.js **/
/** chunk id: 186318, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = () => {
    let [e, t] = Chunk473749.useState(Chunk474936.PremiumTypes.TIER_0), [n, m] = Chunk473749.useState(Chunk45474.R.WHAT_YOU_LOSE), [g, b] = Chunk473749.useState(null), [O, v] = Chunk473749.useState(Chunk474936.Xh.PREMIUM_MONTH_TIER_0), [S, I] = Chunk473749.useState([]), [T, A] = Chunk473749.useState(() => {
      let e = new Date;
      return module.setMonth(module.getMonth() + 1), module
    }), [C, N] = Chunk473749.useState(null), [P, R] = Chunk473749.useState(false), [w, D] = Chunk473749.useState(false), [x, L] = Chunk473749.useState(false);
    (0, Chunk473749.useEffect)(() => {
      (0, Chunk821849.Y2)()
    }, []), (0, Chunk473749.useEffect)(() => {
      let e = new Date;
      switch (O) {
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
      A(module)
    }, [O]), (0, Chunk473749.useEffect)(() => {
      switch (module) {
        case Chunk474936.PremiumTypes.TIER_0:
          I([{
            label: "Nitro Basic Monthly",
            value: Chunk474936.Xh.PREMIUM_MONTH_TIER_0
          }, {
            label: "Nitro Basic Yearly",
            value: Chunk474936.Xh.PREMIUM_YEAR_TIER_0
          }]), v(Chunk474936.Xh.PREMIUM_MONTH_TIER_0);
          break;
        case Chunk474936.PremiumTypes.TIER_1:
          I([{
            label: "Nitro Classic Monthly",
            value: Chunk474936.Xh.PREMIUM_MONTH_TIER_1
          }, {
            label: "Nitro Classic Yearly",
            value: Chunk474936.Xh.PREMIUM_YEAR_TIER_1
          }]), v(Chunk474936.Xh.PREMIUM_MONTH_TIER_1);
          break;
        case Chunk474936.PremiumTypes.TIER_2:
          I([{
            label: "Nitro Monthly",
            value: Chunk474936.Xh.PREMIUM_MONTH_TIER_2
          }, {
            label: "Nitro Yearly",
            value: Chunk474936.Xh.PREMIUM_YEAR_TIER_2
          }]), v(Chunk474936.Xh.PREMIUM_MONTH_TIER_2)
      }
    }, [module]), (0, Chunk473749.useEffect)(() => {
      [Chunk45474.R.CONFIRM_DISCOUNT, Chunk45474.R.DISCOUNT_APPLIED].includes(require) && null === g && b(y()), require === Chunk45474.R.PREVIEW && null === C && N(new Chunk146528.Z({
        id: "",
        invoiceItems: [{
          id: "",
          subscriptionPlanId: O,
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
        subscriptionPeriodEnd: T,
        status: Chunk981631.hUK.PAID
      })), require !== Chunk45474.R.PREVIEW && null !== C && N(null)
    }, [require, g, T, O, C]);
    let j = Chunk473749.useCallback(async () => {
      L(true), await (0, Chunk481060.ZDy)(async () => t => (0, r.jsx)(u.x, E(h({}, t), {
        onClose: () => {
          t.onClose(), L(false)
        },
        premiumType: e,
        churnDiscount: g,
        planId: O,
        renewalInvoice: C,
        renewalInvoiceDetails: {
          intervalType: p.rV.MONTH,
          intervalCount: 1
        },
        errorOnCancel: P,
        errorOnRedeem: w,
        setActiveStep: e => {
          m(e), t.onClose()
        },
        activeStep: n,
        premiumSubscription: {
          id: "",
          planId: O,
          type: _.NY.PREMIUM,
          items: [],
          createdAt: new Date,
          canceledAt: null,
          currentPeriodStart: new Date,
          currentPeriodEnd: T,
          status: d.O0b.ACTIVE,
          paymentSourceId: null,
          paymentGateway: null,
          paymentGatewayPlanId: null,
          paymentGatewaySubscriptionId: null,
          trialId: null,
          trialEndsAt: null,
          renewalMutations: null,
          streakStartedAt: null,
          currency: _.pK.USD,
          pauseEndsAt: null,
          pauseReason: f.Id.UNKNOWN
        }
      })))
    }, [module, g, O, C, P, w, require, T]);
    return (0, Chunk473749.useEffect)(() => {
      x && j()
    }, [require, x, j]), (0, Chunk54381.jsxs)(Chunk261538.pg, {
      children: [(0, Chunk54381.jsxs)(Chunk261538.BZ, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          children: "Premium Subscription"
        }), (0, Chunk54381.jsx)(Chunk481060.PhF, {
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
      }), S.length > 0 && (0, Chunk54381.jsxs)(Chunk261538.BZ, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          children: "Subscription Interval"
        }), (0, Chunk54381.jsx)(Chunk481060.PhF, {
          placeholder: "Premium Type",
          select: e => {
            v(e)
          },
          isSelected: e => O === e,
          serialize: e => e,
          options: S
        })]
      }), (0, Chunk54381.jsxs)(Chunk261538.BZ, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          children: "Modal Step"
        }), (0, Chunk54381.jsx)(Chunk481060.PhF, {
          placeholder: "Premium Type",
          select: e => {
            m(e)
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
          checked: null !== g,
          onChange: () => {
            if (null === g) return void b(y());
            b(null)
          },
          label: "Churn Discount"
        })
      }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
        children: (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
          checked: w,
          onChange: () => {
            D(!w)
          },
          label: "Error on Redeem Offer"
        })
      }), (0, Chunk54381.jsx)(Chunk261538.BZ, {
        children: (0, Chunk54381.jsx)(Chunk481060.Checkbox, {
          checked: P,
          onChange: () => {
            R(!P)
          },
          label: "Error on Cancel"
        })
      }), (0, Chunk54381.jsx)(Chunk261538.dv, {}), (0, Chunk54381.jsx)(Chunk481060.Button, {
        onClick: () => {
          L(true)
        },
        variant: "primary",
        size: "md",
        text: "Open Cancellation Modal"
      })]
    })
  },
  y = function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
      {
        discount: t = {}
      } = module;
    return E(h({
      id: "",
      discount_id: "",
      user_id: ""
    }, module), {
      discount: h({
        id: "",
        plan_ids: [],
        user_usage_limit: 3,
        user_usage_limit_interval: Chunk474936.EA.MONTH,
        user_usage_limit_interval_count: 3,
        amount: "40"
      }, exports)
    })
  }