/** Chunk was on web.js **/
/** chunk id: 596034, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I0: () => y,
  _P: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk403362 = require("./403362.js"),
  Chunk975571 = require("./975571.js"),
  Chunk580630 = require("./580630.js"),
  Chunk652215 = require("./652215.js"),
  Chunk756366 = require("./756366.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk235376 = require("./235376.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let {
    immediateDelivery: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: d.k,
    children: [null != t && (0, r.jsx)(g, p({}, t)), (0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: n
    })]
  })
}

function g(e) {
  let {
    value: t,
    onChange: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: u.intl.string(c.default["5dmUS+"])
    }), (0, r.jsx)(i.Checkbox, {
      label: u.intl.string(c.default.XBtSMa),
      checked: t,
      onChange: n
    })]
  })
}

function E(e) {
  let {
    purchaseButtonText: t,
    totalDue: n,
    renewalPrice: r,
    currency: i,
    period: a,
    startDate: c
  } = e, u = (0, s.$g)(n, i), d = (0, s.$g)(r, i), f = l.qF7.PAID_SERVICES_TERMS;
  return {
    purchaseButtonText: t,
    totalDue: u,
    renewalPrice: d,
    period: a,
    startDate: c,
    paidServicesTermsUrl: f,
    contactUsUrl: l.qF7.CONTACT_US,
    subscriptionsFaqUrl: o.A.getArticleURL(0x53d2ba0c4c)
  }
}
var y = function(e) {
  return e[e.Subscription = 0] = "Subscription", e[e.SubscriptionTrial = 1] = "SubscriptionTrial", e[e.OrbsRedemption = 2] = "OrbsRedemption", e[e.OTP = 3] = "OTP", e
}({});

function b(e) {
  let {
    type: t,
    props: n
  } = e, r = l.qF7.PAID_SERVICES_TERMS, i = l.qF7.VIRTUAL_GOODS_TERMS;
  switch (t) {
    case 0:
      return u.intl.format(c.default.OH1Evm, E(n));
    case 1:
      return u.intl.format(c.default["2pNIbI"], E(n));
    case 2:
      return u.intl.format(c.default.IP93kX, h(p({}, n), {
        paidServicesTermsUrl: r,
        virtualGoodsTermsUrl: i
      }));
    case 3:
      return u.intl.format(c.default.X0zwiC, h(p({}, n), {
        paidServicesTermsUrl: r,
        virtualGoodsTermsUrl: i
      }));
    default:
      (0, a.xb)(t)
  }
}

function O(e) {
  return (0, r.jsx)(m, {
    immediateDelivery: e.immediateDelivery,
    children: b(e)
  })
}