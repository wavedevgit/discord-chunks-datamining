/** Chunk was on 75708 **/
/** chunk id: 623573, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk257465 = require("./257465.jsx"),
  Chunk37148 = require("./37148.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk3409 = require("./3409.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk281817 = require("./281817.js"),
  Chunk893354 = require("./893354.js");

function b(e) {
  let {
    transitionState: t,
    analyticsLocation: n,
    onClose: r,
    onAddPaymentSource: a,
    toastContent: u,
    initialStep: b = m.h8.PAYMENT_TYPE,
    overwriteSubscriptionPaymentSource: x = false
  } = e, _ = (0, p.fL)(), j = (0, p.vP)({
    paymentModalArgs: _,
    initialStep: b,
    prependSteps: [],
    appendSteps: [],
    onReturn: () => {
      r()
    },
    onComplete: (e, t) => {
      l()(null != t, "paymentSource missing"), null == a || a(t), r()
    },
    onStepChange: () => {},
    header: (0, i.jsxs)("div", {
      className: s()(h.modalTitle, f.flex, f.justifyBetween, f.alignCenter),
      children: [(0, i.jsx)(d.vwX, {
        tag: d.RB0.H4,
        children: g.intl.string(g.t.eQ2bLi)
      }), (0, i.jsx)(c.o, {})]
    }),
    analyticsLocation: n,
    hideBreadcrumbs: true,
    toastContent: u,
    overwriteSubscriptionPaymentSource: x
  });
  return (0, i.jsx)(o.I, {
    transitionState: t,
    onClose: r,
    size: "sm",
    "aria-label": g.intl.string(g.t.eQ2bLi),
    children: (0, i.jsx)("form", {
      className: h.form,
      onSubmit: function(e) {
        e.preventDefault()
      },
      children: j
    })
  })
}

function x(e) {
  return (0, i.jsx)(u.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, i.jsx)(b, function(e) {
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
    }({}, e))
  })
}