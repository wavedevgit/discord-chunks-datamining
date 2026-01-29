/** Chunk was on 2827 **/
/** chunk id: 362111, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk998678 = require("./998678.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk893659 = require("./893659.js");

function _(e) {
  let {
    transitionState: t,
    analyticsLocation: n,
    onClose: i,
    onAddPaymentSource: a,
    toastContent: _,
    initialStep: p = o.pn.PAYMENT_TYPE,
    overwriteSubscriptionPaymentSource: m = false
  } = e, g = (0, c.KP)(), A = (0, c.Y)({
    paymentModalArgs: g,
    initialStep: p,
    prependSteps: [],
    appendSteps: [],
    onReturn: () => {
      i()
    },
    onComplete: (e, t) => {
      l()(null != t, "paymentSource missing"), null == a || a(t), i()
    },
    onStepChange: () => {},
    header: (0, r.jsx)(s.rQ0, {
      title: d.intl.string(d.t.eQ2bLp)
    }),
    analyticsLocation: n,
    hideBreadcrumbs: true,
    toastContent: _,
    overwriteSubscriptionPaymentSource: m
  });
  return (0, r.jsx)(s.dWK, {
    transitionState: t,
    onClose: i,
    size: "sm",
    "aria-label": d.intl.string(d.t.eQ2bLp),
    children: (0, r.jsx)("form", {
      className: u.Zd,
      onSubmit: function(e) {
        e.preventDefault()
      },
      children: A
    })
  })
}

function p(e) {
  return (0, r.jsx)(a.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, r.jsx)(_, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, e))
  })
}