/** Chunk was on 39297 **/
/** chunk id: 282003, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk821849 = require("./821849.js"),
  Chunk45474 = require("./45474.js"),
  Chunk146528 = require("./146528.js"),
  Chunk246992 = require("./246992.js"),
  Chunk237012 = require("./237012.jsx"),
  Chunk729154 = require("./729154.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk362786 = require("./362786.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js");

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = () => {
    let [e, t] = Chunk647438.useState(Chunk474936.PremiumTypes.TIER_0), [n, b] = Chunk647438.useState(Chunk45474.R.WHAT_YOU_LOSE), [j, _] = Chunk647438.useState(null), [y, C] = Chunk647438.useState(Chunk474936.Xh.PREMIUM_MONTH_TIER_0), [S, E] = Chunk647438.useState([]), [T, O] = Chunk647438.useState(() => {
      let e = new Date;
      return module.setMonth(module.getMonth() + 1), module
    }), [N, P] = Chunk647438.useState(null), [I, w] = Chunk647438.useState(false), [k, R] = Chunk647438.useState(false), [A, D] = Chunk647438.useState(false);
    (0, Chunk647438.useEffect)(() => {
      (0, Chunk821849.Y2)()
    }, []), (0, Chunk647438.useEffect)(() => {
      let e = new Date;
      switch (y) {
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
      O(module)
    }, [y]), (0, Chunk647438.useEffect)(() => {
      switch (module) {
        case Chunk474936.PremiumTypes.TIER_0:
          E([{
            label: "Nitro Basic Monthly",
            value: Chunk474936.Xh.PREMIUM_MONTH_TIER_0
          }, {
            label: "Nitro Basic Yearly",
            value: Chunk474936.Xh.PREMIUM_YEAR_TIER_0
          }]), C(Chunk474936.Xh.PREMIUM_MONTH_TIER_0);
          break;
        case Chunk474936.PremiumTypes.TIER_1:
          E([{
            label: "Nitro Classic Monthly",
            value: Chunk474936.Xh.PREMIUM_MONTH_TIER_1
          }, {
            label: "Nitro Classic Yearly",
            value: Chunk474936.Xh.PREMIUM_YEAR_TIER_1
          }]), C(Chunk474936.Xh.PREMIUM_MONTH_TIER_1);
          break;
        case Chunk474936.PremiumTypes.TIER_2:
          E([{
            label: "Nitro Monthly",
            value: Chunk474936.Xh.PREMIUM_MONTH_TIER_2
          }, {
            label: "Nitro Yearly",
            value: Chunk474936.Xh.PREMIUM_YEAR_TIER_2
          }]), C(Chunk474936.Xh.PREMIUM_MONTH_TIER_2)
      }
    }, [module]), (0, Chunk647438.useEffect)(() => {
      [Chunk45474.R.CONFIRM_DISCOUNT, Chunk45474.R.DISCOUNT_APPLIED].includes(require) && null === j && _(v()), require === Chunk45474.R.PREVIEW && null === N && P(new Chunk146528.Z({
        id: "",
        invoiceItems: [{
          id: "",
          subscriptionPlanId: y,
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
      })), require !== Chunk45474.R.PREVIEW && null !== N && P(null)
    }, [require, j, T, y, N]);
    let Z = Chunk647438.useCallback(async () => {
      D(true), await (0, Chunk481060.ZDy)(async () => t => (0, a.jsx)(u.x, f(g({}, t), {
        onClose: () => {
          t.onClose(), D(false)
        },
        premiumType: e,
        churnDiscount: j,
        planId: y,
        renewalInvoice: N,
        renewalInvoiceDetails: {
          intervalType: h.rV.MONTH,
          intervalCount: 1
        },
        errorOnCancel: I,
        errorOnRedeem: k,
        setActiveStep: e => {
          b(e), t.onClose()
        },
        activeStep: n,
        premiumSubscription: {
          id: "",
          planId: y,
          type: x.NY.PREMIUM,
          items: [],
          createdAt: new Date,
          canceledAt: null,
          currentPeriodStart: new Date,
          currentPeriodEnd: T,
          status: m.O0b.ACTIVE,
          paymentSourceId: null,
          paymentGateway: null,
          paymentGatewayPlanId: null,
          paymentGatewaySubscriptionId: null,
          trialId: null,
          trialEndsAt: null,
          renewalMutations: null,
          streakStartedAt: null,
          currency: x.pK.USD,
          pauseEndsAt: null,
          pauseReason: p.Id.UNKNOWN
        }
      })))
    }, [module, j, y, N, I, k, require, T]);
    return (0, Chunk647438.useEffect)(() => {
      A && Z()
    }, [require, A, Z]), (0, Chunk951288.jsxs)(Chunk237012.$0, {
      children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-xl/semibold",
        children: "Cancellation Flow"
      }), (0, Chunk951288.jsxs)(Chunk237012.pg, {
        children: [(0, Chunk951288.jsxs)(Chunk237012.BZ, {
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/semibold",
            children: "Premium Subscription"
          }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
            placeholder: "Premium Type",
            select: e => {
              t(e)
            },
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
            }],
            popoutLayerContext: Chunk246992.O$
          })]
        }), S.length > 0 && (0, Chunk951288.jsxs)(Chunk237012.BZ, {
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/semibold",
            children: "Subscription Interval"
          }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
            placeholder: "Premium Type",
            select: e => {
              C(e)
            },
            isSelected: e => y === e,
            serialize: e => e,
            options: S,
            popoutLayerContext: Chunk246992.O$
          })]
        }), (0, Chunk951288.jsxs)(Chunk237012.BZ, {
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/semibold",
            children: "Modal Step"
          }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
            placeholder: "Premium Type",
            select: e => {
              b(e)
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
            }],
            popoutLayerContext: Chunk246992.O$
          })]
        }), (0, Chunk951288.jsx)(Chunk237012.BZ, {
          children: (0, Chunk951288.jsx)(Chunk481060.Checkbox, {
            checked: null !== j,
            onChange: () => {
              if (null === j) return void _(v());
              _(null)
            },
            label: "Churn Discount"
          })
        }), (0, Chunk951288.jsx)(Chunk237012.BZ, {
          children: (0, Chunk951288.jsx)(Chunk481060.Checkbox, {
            checked: k,
            onChange: () => {
              R(!k)
            },
            label: "Error on Redeem Offer"
          })
        }), (0, Chunk951288.jsx)(Chunk237012.BZ, {
          children: (0, Chunk951288.jsx)(Chunk481060.Checkbox, {
            checked: I,
            onChange: () => {
              w(!I)
            },
            label: "Error on Cancel"
          })
        })]
      }), (0, Chunk951288.jsx)(Chunk237012.E_, {
        label: "Cancellation Modal",
        children: (0, Chunk951288.jsx)(Chunk481060.Button, {
          onClick: () => {
            D(true)
          },
          variant: "primary",
          size: "sm",
          text: "Open Modal"
        })
      })]
    })
  },
  v = function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
      {
        discount: t = {}
      } = module;
    return f(g({
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