/** Chunk was on web.js **/
/** chunk id: 953689, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk293066 = require("./293066.js"),
  Chunk975571 = require("./975571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk252101 = require("./252101.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}
class b extends Chunk64700.Component {
  componentDidMount() {
    this.props.onChange(this.hasAcceptedNeccessaryTerms(this.props, this.state))
  }
  componentDidUpdate(e, t) {
    let n = this.hasAcceptedNeccessaryTerms(e, t),
      r = this.hasAcceptedNeccessaryTerms(this.props, this.state);
    r !== n && this.props.onChange(r)
  }
  hasAcceptedNeccessaryTerms(e, t) {
    return (null == e.eulaId || t.hasAcceptedEULA) && (!e.showWithdrawalWaiver || t.hasAcceptedWithdrawalWaiver)
  }
  render() {
    let {
      eulaId: e,
      applicationName: t,
      hasPreviouslyAcceptedEULA: i,
      forceShow: a,
      disabled: o,
      className: c,
      finePrint: d,
      showPricingLink: g,
      showWithdrawalWaiver: b,
      isTrial: y,
      inReverseTrial: O,
      isDiscount: A,
      subscriptionPlan: v,
      finePrintClassname: S
    } = this.props, {
      hasAcceptedEULA: I,
      hasAcceptedWithdrawalWaiver: T
    } = this.state;
    return (l()(!y || null != v, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), a || null != e && !i || b) ? (0, r.jsxs)("div", {
      className: c,
      children: [b && (0, r.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        className: m.Hc,
        children: h.intl.string(h.t.Ogvn5o)
      }), null != e && (a || !i) ? (0, r.jsx)(u.Checkbox, {
        checked: I,
        onChange: e => this.setState({
          hasAcceptedEULA: e
        }),
        disabled: o,
        label: h.intl.format(h.t.IodJKT, {
          applicationName: t,
          onClick: t => {
            (0, u.mMO)(async () => {
              let {
                default: t
              } = await n.e("35641").then(n.bind(n, 698336));
              return n => (0, r.jsx)(t, E({
                eulaId: e
              }, n))
            }), t.preventDefault()
          }
        })
      }) : null, null == d ? null : (0, r.jsx)("div", {
        className: s()(m.aO, S),
        children: d
      }), b ? (0, r.jsxs)("div", {
        className: c,
        children: [(0, r.jsx)(u.Checkbox, {
          checked: T,
          onChange: e => this.setState({
            hasAcceptedWithdrawalWaiver: e
          }),
          disabled: o,
          label: h.intl.string(h.t["DFCVN+"])
        }), (0, r.jsx)("div", {
          className: m.aO,
          children: h.intl.string(h.t.jhu6zm)
        })]
      }) : null, g && (0, r.jsxs)("div", {
        className: m.aO,
        children: ["*", h.intl.format(h.t["5zmY3F"], {
          documentationLink: f.A.getArticleURL(_.MVz.LOCALIZED_PRICING)
        })]
      }), y && null != v && (0, r.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "interactive-text-default",
        children: h.intl.format(h.t["Hvo/Z5"], {
          buttonText: (0, p.ff)(null, v),
          interval: p.Ay.formatInterval(null == v ? true : v.interval),
          cancelSubscriptionArticle: f.A.getArticleURL(_.MVz.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: f.A.getArticleURL(_.MVz.PAID_TERMS)
        })
      }), O && null != v && (0, r.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "interactive-text-default",
        children: h.intl.format(h.t.Oo2FeS, {
          buttonText: (0, p.ff)(null, v),
          interval: p.Ay.formatInterval(null == v ? true : v.interval),
          cancelSubscriptionArticle: f.A.getArticleURL(_.MVz.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: f.A.getArticleURL(_.MVz.PAID_TERMS)
        })
      }), A && null != v && (0, r.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "interactive-text-default",
        children: h.intl.format(h.t["Z2c+aV"], {
          buttonText: (0, p.ff)(null, v),
          interval: p.Ay.formatInterval(null == v ? true : v.interval),
          cancelSubscriptionArticle: f.A.getArticleURL(_.MVz.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: f.A.getArticleURL(_.MVz.PAID_TERMS)
        })
      })]
    }) : null
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
      hasAcceptedWithdrawalWaiver: false
    })
  }
}
let y = Chunk311907.Ay.connectStores([Chunk293066.A], e => {
  let {
    eulaId: t
  } = e;
  return {
    hasPreviouslyAcceptedEULA: null != t && d.A.hasAcceptedEULA(t)
  }
})(b)