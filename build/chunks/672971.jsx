/** Chunk was on web.js **/
/** chunk id: 672971, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk850840 = require("./850840.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk247382 = require("./247382.js");

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
class b extends Chunk73800.Component {
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
      forceShow: o,
      disabled: s,
      className: c,
      checkboxClassname: d,
      checkboxLabelClassname: g,
      finePrint: b,
      showPricingLink: y,
      showWithdrawalWaiver: O,
      isTrial: v,
      inReverseTrial: I,
      isDiscount: T,
      subscriptionPlan: S,
      finePrintClassname: A
    } = this.props, {
      hasAcceptedEULA: N,
      hasAcceptedWithdrawalWaiver: C
    } = this.state;
    return (l()(!v || null != S, "subscriptionPlan cannot be null if shouldShowUpdatedPaymentModal is true"), Chunk120356 || null != module && !Chunk73800 || O) ? <div className={Chunk442837}>{O && <Chunk481060.vwX className={Chunk247382.formTitle}>{Chunk388032.intl.string(Chunk388032.t.Ogvn5u)}</Chunk481060.vwX>}{null != module && (Chunk120356 || !Chunk73800) ? <Chunk481060.XZJ type={Chunk481060.XZJ.Types.INVERTED} value={N} onChange={this.handleToggleEULAAcceptance} disabled={Chunk512722} className={Chunk247382.checkbox}><div className={Chunk247382.checkboxLabel}>{Chunk388032.intl.format(Chunk388032.t.IodJKS, {
            applicationName: exports,
            onClick: t => {
              (0, u.ZDy)(async () => {
                let {
                  default: t
                } = await n.e("51868").then(n.bind(n, 796504));
                return n => (0, r.jsx)(t, E({
                  eulaId: e
                }, n))
              }), t.preventDefault()
            }
          })}</div></Chunk481060.XZJ> : null}{null == b ? null : <div className={a()(Chunk247382.finePrint, A)}>{b}</div>}{O ? <div className={Chunk442837}>{<Chunk481060.XZJ type={Chunk481060.XZJ.Types.INVERTED} value={C} onChange={this.handleToggleEUWithdralWaiverAcceptance} disabled={Chunk512722} className={a()(Chunk247382.checkbox, Chunk850840)}><div className={a()(Chunk247382.checkboxLabel, g)}>{Chunk388032.intl.string(Chunk388032.t.DFCVNz)}</div></Chunk481060.XZJ>}{<div className={Chunk247382.finePrint}>{Chunk388032.intl.string(Chunk388032.t.jhu6zs)}</div>}</div> : null}{y && <div className={Chunk247382.finePrint}>{"*"}{Chunk388032.intl.format(Chunk388032.t["5zmY3N"], {
          documentationLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.LOCALIZED_PRICING)
        })}</div>}{v && null != S && <Chunk481060.Text variant={"text-xs/medium"} color={"interactive-normal"}>{Chunk388032.intl.format(Chunk388032.t["Hvo/Z2"], {
          buttonText: (0, Chunk74538.W_)(null, S),
          interval: Chunk74538.ZP.formatInterval(null == S ? true : S.interval),
          cancelSubscriptionArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        })}</Chunk481060.Text>}{I && null != S && <Chunk481060.Text variant={"text-xs/medium"} color={"interactive-normal"}>{Chunk388032.intl.format(Chunk388032.t.Oo2FeX, {
          buttonText: (0, Chunk74538.W_)(null, S),
          interval: Chunk74538.ZP.formatInterval(null == S ? true : S.interval),
          cancelSubscriptionArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        })}</Chunk481060.Text>}{T && null != S && <Chunk481060.Text variant={"text-xs/medium"} color={"interactive-normal"}>{Chunk388032.intl.format(Chunk388032.t["Z2c+aW"], {
          buttonText: (0, Chunk74538.W_)(null, S),
          interval: Chunk74538.ZP.formatInterval(null == S ? true : S.interval),
          cancelSubscriptionArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PREMIUM_DETAILS_CANCEL_SUB),
          paidServiceTermsArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.PAID_TERMS)
        })}</Chunk481060.Text>}</div> : null
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      hasAcceptedEULA: !this.props.forceShow && this.props.hasPreviouslyAcceptedEULA,
      hasAcceptedWithdrawalWaiver: false
    }), g(this, "handleToggleEUWithdralWaiverAcceptance", (e, t) => {
      this.setState({
        hasAcceptedWithdrawalWaiver: t
      })
    }), g(this, "handleToggleEULAAcceptance", (e, t) => {
      this.setState({
        hasAcceptedEULA: t
      })
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