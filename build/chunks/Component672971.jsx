/** Chunk was on web.js **/
/** chunk id: 672971, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk850840 = require("./850840.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk549612 = require("./549612.js");

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
class b extends Chunk473749.Component {
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
      disabled: s,
      className: c,
      finePrint: d,
      showPricingLink: g,
      showWithdrawalWaiver: b,
      isTrial: y,
      inReverseTrial: O,
      isDiscount: v,
      subscriptionPlan: S,
      finePrintClassname: I
    } = this.props, {
      hasAcceptedEULA: T,
      hasAcceptedWithdrawalWaiver: C
    } = this.state;
    return (l()(!y || null != S, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), a || null != e && !i || b) ? (0, r.jsxs)("div", {
      className: c,
      children: [b && (0, r.jsx)(u.Heading, {
        variant: "heading-md/semibold",
        className: h.formTitle,
        children: m.intl.string(m.t.Ogvn5o)
      }), null != e && (a || !i) ? (0, r.jsx)(u.Checkbox, {
        checked: T,
        onChange: e => this.setState({
          hasAcceptedEULA: e
        }),
        disabled: s,
        label: m.intl.format(m.t.IodJKT, {
          applicationName: t,
          onClick: t => {
            (0, u.ZDy)(async () => {
              let {
                default: t
              } = await n.e("78662").then(n.bind(n, 949391));
              return n => (0, r.jsx)(t, E({
                eulaId: e
              }, n))
            }), t.preventDefault()
          }
        })
      }) : null, null == d ? null : (0, r.jsx)("div", {
        className: o()(h.finePrint, I),
        children: d
      }), b ? (0, r.jsxs)("div", {
        className: c,
        children: [(0, r.jsx)(u.Checkbox, {
          checked: C,
          onChange: e => this.setState({
            hasAcceptedWithdrawalWaiver: e
          }),
          disabled: s,
          label: m.intl.string(m.t["DFCVN+"])
        }), (0, r.jsx)("div", {
          className: h.finePrint,
          children: m.intl.string(m.t.jhu6zm)
        })]
      }) : null, g && (0, r.jsxs)("div", {
        className: h.finePrint,
        children: ["*", m.intl.format(m.t["5zmY3F"], {
          documentationLink: f.Z.getArticleURL(_.BhN.LOCALIZED_PRICING)
        })]
      }), y && null != S && (0, r.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "interactive-text-default",
        children: m.intl.format(m.t["Hvo/Z5"], {
          buttonText: (0, p.W_)(null, S),
          interval: p.ZP.formatInterval(null == S ? true : S.interval),
          cancelSubscriptionArticle: f.Z.getArticleURL(_.BhN.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: f.Z.getArticleURL(_.BhN.PAID_TERMS)
        })
      }), O && null != S && (0, r.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "interactive-text-default",
        children: m.intl.format(m.t.Oo2FeS, {
          buttonText: (0, p.W_)(null, S),
          interval: p.ZP.formatInterval(null == S ? true : S.interval),
          cancelSubscriptionArticle: f.Z.getArticleURL(_.BhN.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: f.Z.getArticleURL(_.BhN.PAID_TERMS)
        })
      }), v && null != S && (0, r.jsx)(u.Text, {
        variant: "text-xs/medium",
        color: "interactive-text-default",
        children: m.intl.format(m.t["Z2c+aV"], {
          buttonText: (0, p.W_)(null, S),
          interval: p.ZP.formatInterval(null == S ? true : S.interval),
          cancelSubscriptionArticle: f.Z.getArticleURL(_.BhN.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: f.Z.getArticleURL(_.BhN.PAID_TERMS)
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
let y = Chunk442837.ZP.connectStores([Chunk850840.Z], e => {
  let {
    eulaId: t
  } = e;
  return {
    hasPreviouslyAcceptedEULA: null != t && d.Z.hasAcceptedEULA(t)
  }
})(b)