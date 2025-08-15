/** Chunk was on 30202 **/
/** chunk id: 844932, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk821849 = require("./821849.js"),
  Chunk45474 = require("./45474.js"),
  Chunk146528 = require("./146528.js"),
  Chunk450272 = require("./450272.jsx"),
  Chunk962915 = require("./962915.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk362786 = require("./362786.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js");

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = () => {
    let [e, t] = Chunk647438.useState(Chunk474936.p9.TIER_0), [n, b] = Chunk647438.useState(Chunk45474.R.WHAT_YOU_LOSE), [_, j] = Chunk647438.useState(null), [E, C] = Chunk647438.useState(Chunk474936.Xh.PREMIUM_MONTH_TIER_0), [O, v] = Chunk647438.useState([]), [S, T] = Chunk647438.useState(() => {
      let e = new Date;
      return module.setMonth(module.getMonth() + 1), module
    }), [N, I] = Chunk647438.useState(null), [y, A] = Chunk647438.useState(false), [P, R] = Chunk647438.useState(false), [D, Z] = Chunk647438.useState(false);
    (0, Chunk647438.useEffect)(() => {
      (0, Chunk821849.Y2)()
    }, []), (0, Chunk647438.useEffect)(() => {
      let e = new Date;
      switch (E) {
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
      T(module)
    }, [E]), (0, Chunk647438.useEffect)(() => {
      switch (module) {
        case Chunk474936.p9.TIER_0:
          v([{
            label: "Nitro Basic Monthly",
            value: Chunk474936.Xh.PREMIUM_MONTH_TIER_0
          }, {
            label: "Nitro Basic Yearly",
            value: Chunk474936.Xh.PREMIUM_YEAR_TIER_0
          }]), C(Chunk474936.Xh.PREMIUM_MONTH_TIER_0);
          break;
        case Chunk474936.p9.TIER_1:
          v([{
            label: "Nitro Classic Monthly",
            value: Chunk474936.Xh.PREMIUM_MONTH_TIER_1
          }, {
            label: "Nitro Classic Yearly",
            value: Chunk474936.Xh.PREMIUM_YEAR_TIER_1
          }]), C(Chunk474936.Xh.PREMIUM_MONTH_TIER_1);
          break;
        case Chunk474936.p9.TIER_2:
          v([{
            label: "Nitro Monthly",
            value: Chunk474936.Xh.PREMIUM_MONTH_TIER_2
          }, {
            label: "Nitro Yearly",
            value: Chunk474936.Xh.PREMIUM_YEAR_TIER_2
          }]), C(Chunk474936.Xh.PREMIUM_MONTH_TIER_2)
      }
    }, [module]), (0, Chunk647438.useEffect)(() => {
      [Chunk45474.R.CONFIRM_DISCOUNT, Chunk45474.R.DISCOUNT_APPLIED].includes(require) && null === _ && j(x()), require === Chunk45474.R.PREVIEW && null === N && I(new Chunk146528.Z({
        id: "",
        invoiceItems: [{
          id: "",
          subscriptionPlanId: E,
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
        subscriptionPeriodEnd: S,
        status: Chunk981631.hUK.PAID
      })), require !== Chunk45474.R.PREVIEW && null !== N && I(null)
    }, [require, _, S, E, N]);
    let w = Chunk647438.useCallback(async () => {
      Z(true), await (0, Chunk481060.ZDy)(async () => t => (0, i.jsx)(d.x, f(h({}, t), {
        onClose: () => {
          t.onClose(), Z(false)
        },
        premiumType: e,
        churnDiscount: _,
        planId: E,
        renewalInvoice: N,
        renewalInvoiceDetails: {
          intervalType: p.rV.MONTH,
          intervalCount: 1
        },
        errorOnCancel: y,
        errorOnRedeem: P,
        setActiveStep: e => {
          b(e), t.onClose()
        },
        activeStep: n,
        premiumSubscription: {
          id: "",
          planId: E,
          type: g.NY.PREMIUM,
          items: [],
          createdAt: new Date,
          canceledAt: null,
          currentPeriodStart: new Date,
          currentPeriodEnd: S,
          status: u.O0b.ACTIVE,
          paymentSourceId: null,
          paymentGateway: null,
          paymentGatewayPlanId: null,
          paymentGatewaySubscriptionId: null,
          trialId: null,
          trialEndsAt: null,
          renewalMutations: null,
          streakStartedAt: null,
          currency: g.pK.USD,
          pauseEndsAt: null,
          pauseReason: m.Id.UNKNOWN
        }
      })))
    }, [module, _, E, N, y, P, require, S]);
    return (0, Chunk647438.useEffect)(() => {
      D && w()
    }, [require, D, w]), (0, Chunk951288.jsxs)(Chunk450272.$0, {
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-xl/semibold",
        children: "Cancellation Flow"
      }), (0, Chunk951288.jsxs)(Chunk450272.pg, {
        children: [(0, Chunk951288.jsxs)(Chunk450272.BZ, {
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
              value: Chunk474936.p9.TIER_0
            }, {
              label: "Nitro Classic",
              value: Chunk474936.p9.TIER_1
            }, {
              label: "Nitro",
              value: Chunk474936.p9.TIER_2
            }]
          })]
        }), O.length > 0 && (0, Chunk951288.jsxs)(Chunk450272.BZ, {
          children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/semibold",
            children: "Subscription Interval"
          }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
            placeholder: "Premium Type",
            select: e => {
              C(e)
            },
            isSelected: e => E === e,
            serialize: e => e,
            options: O
          })]
        }), (0, Chunk951288.jsxs)(Chunk450272.BZ, {
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
            }]
          })]
        }), (0, Chunk951288.jsx)(Chunk450272.BZ, {
          children: (0, Chunk951288.jsx)(Chunk481060.XZJ, {
            value: null !== _,
            onChange: () => {
              if (null === _) return void j(x());
              j(null)
            },
            children: (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-md/semibold",
              children: "Churn Discount"
            })
          })
        }), (0, Chunk951288.jsx)(Chunk450272.BZ, {
          children: (0, Chunk951288.jsx)(Chunk481060.XZJ, {
            value: P,
            onChange: () => {
              R(!P)
            },
            children: (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-md/semibold",
              children: "Error on Redeem Offer"
            })
          })
        }), (0, Chunk951288.jsx)(Chunk450272.BZ, {
          children: (0, Chunk951288.jsx)(Chunk481060.XZJ, {
            value: y,
            onChange: () => {
              A(!y)
            },
            children: (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-md/semibold",
              children: "Error on Cancel"
            })
          })
        })]
      }), (0, Chunk951288.jsx)(Chunk450272.E_, {
        label: "Cancellation Modal",
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          onClick: () => {
            Z(true)
          },
          variant: "primary",
          size: "sm",
          text: "Open Modal"
        })
      })]
    })
  },
  x = function() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
      {
        discount: t = {}
      } = module;
    return f(h({
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