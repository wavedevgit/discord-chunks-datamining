/** Chunk was on web.js **/
/** chunk id: 672971, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk850840 = require("./850840.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk209857 = require("./209857.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}
class y extends Chunk647438.Component {
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
      checkboxClassname: f,
      checkboxLabelClassname: E,
      finePrint: y,
      showPricingLink: O,
      showWithdrawalWaiver: v,
      isTrial: I,
      inReverseTrial: S,
      isDiscount: T,
      subscriptionPlan: A,
      finePrintClassname: C
    } = this.props, {
      hasAcceptedEULA: N,
      hasAcceptedWithdrawalWaiver: R
    } = this.state;
    return (l()(!I || null != A, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), Chunk120356 || null != module && !Chunk647438 || v) ? (0, Chunk951288.jsxs)("div", {
      className: Chunk442837,
      children: [v && (0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-md/semibold",
        className: Chunk209857.formTitle,
        children: Chunk388032.intl.string(Chunk388032.t.Ogvn5o)
      }), null != module && (Chunk120356 || !Chunk647438) ? (0, Chunk951288.jsx)(Chunk755721.$q, {
        type: Chunk755721.M0.INVERTED,
        value: N,
        onChange: this.handleToggleEULAAcceptance,
        disabled: Chunk512722,
        className: Chunk209857.checkbox,
        children: (0, Chunk951288.jsx)("div", {
          className: Chunk209857.checkboxLabel,
          children: Chunk388032.intl.format(Chunk388032.t.IodJKT, {
            applicationName: exports,
            onClick: t => {
              (0, d.ZDy)(async () => {
                let {
                  default: t
                } = await n.e("78662").then(n.bind(n, 949391));
                return n => (0, r.jsx)(t, b({
                  eulaId: e
                }, n))
              }), t.preventDefault()
            }
          })
        })
      }) : null, null == y ? null : (0, Chunk951288.jsx)("div", {
        className: o()(Chunk209857.finePrint, C),
        children: y
      }), v ? (0, Chunk951288.jsxs)("div", {
        className: Chunk442837,
        children: [(0, Chunk951288.jsx)(Chunk755721.$q, {
          type: Chunk755721.M0.INVERTED,
          value: R,
          onChange: this.handleToggleEUWithdralWaiverAcceptance,
          disabled: Chunk512722,
          className: o()(Chunk209857.checkbox, Chunk850840),
          children: (0, Chunk951288.jsx)("div", {
            className: o()(Chunk209857.checkboxLabel, E),
            children: Chunk388032.intl.string(Chunk388032.t["DFCVN+"])
          })
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk209857.finePrint,
          children: Chunk388032.intl.string(Chunk388032.t.jhu6zm)
        })]
      }) : null, O && (0, Chunk951288.jsxs)("div", {
        className: Chunk209857.finePrint,
        children: ["*", Chunk388032.intl.format(Chunk388032.t["5zmY3F"], {
          documentationLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.LOCALIZED_PRICING)
        })]
      }), I && null != A && (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        color: "interactive-normal",
        children: Chunk388032.intl.format(Chunk388032.t["Hvo/Z5"], {
          buttonText: (0, Chunk74538.W_)(null, A),
          interval: Chunk74538.ZP.formatInterval(null == A ? true : A.interval),
          cancelSubscriptionArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        })
      }), S && null != A && (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        color: "interactive-normal",
        children: Chunk388032.intl.format(Chunk388032.t.Oo2FeS, {
          buttonText: (0, Chunk74538.W_)(null, A),
          interval: Chunk74538.ZP.formatInterval(null == A ? true : A.interval),
          cancelSubscriptionArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        })
      }), T && null != A && (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/medium",
        color: "interactive-normal",
        children: Chunk388032.intl.format(Chunk388032.t["Z2c+aV"], {
          buttonText: (0, Chunk74538.W_)(null, A),
          interval: Chunk74538.ZP.formatInterval(null == A ? true : A.interval),
          cancelSubscriptionArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        })
      })]
    }) : null
  }
  constructor(...e) {
    super(...e), E(this, "state", {
      hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
      hasAcceptedWithdrawalWaiver: false
    }), E(this, "handleToggleEUWithdralWaiverAcceptance", (e, t) => {
      this.setState({
        hasAcceptedWithdrawalWaiver: t
      })
    }), E(this, "handleToggleEULAAcceptance", (e, t) => {
      this.setState({
        hasAcceptedEULA: t
      })
    })
  }
}
let O = Chunk442837.ZP.connectStores([Chunk850840.Z], e => {
  let {
    eulaId: t
  } = e;
  return {
    hasPreviouslyAcceptedEULA: null != t && f.Z.hasAcceptedEULA(t)
  }
})(y)