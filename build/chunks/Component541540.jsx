/** Chunk was on 30202 **/
/** chunk id: 541540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk533307 = require("./533307.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk930114 = require("./930114.jsx"),
  Chunk246946 = require("./246946.js"),
  Chunk626135 = require("./626135.js"),
  Chunk669079 = require("./669079.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk954655 = require("./954655.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
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
class j extends Chunk73800.Component {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      }
    } = this.props;
    return _(x({}, module), {
      object: Chunk981631.qAy.BUTTON_CTA
    })
  }
  render() {
    let {
      obscureInput: e
    } = this.props, {
      codeInput: t,
      submitting: n,
      hasError: r,
      isPromoCode: s
    } = this.state;
    return (0, Chunk255367.jsxs)(Chunk481060.hjN, {
      tag: Chunk481060.RB0.H1,
      title: Chunk388032.intl.string(Chunk388032.t["il+VCg"]),
      children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
        children: Chunk388032.intl.string(Chunk388032.t.SeKIoa)
      }), (0, Chunk255367.jsx)("form", {
        onSubmit: this.handleSubmit,
        children: (0, Chunk255367.jsxs)(Chunk600164.Z, {
          children: [(0, Chunk255367.jsx)(Chunk755721.Is, {
            type: module ? "password" : "text",
            value: exports,
            onChange: this.handleChange,
            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
            error: !Chunk442837 && Chunk73800 ? Chunk388032.intl.string(Chunk388032.t.Y11a2t) : null,
            className: Chunk954655.codeRedemptionInput
          }), (0, Chunk255367.jsx)(Chunk481060.zxk, {
            variant: "primary",
            text: Chunk388032.intl.string(Chunk388032.t.KIpp7O),
            type: "submit",
            loading: require
          })]
        })
      }), Chunk442837 ? (0, Chunk255367.jsx)(Chunk481060.Text, {
        className: Chunk954655.errorMessage,
        variant: "text-sm/normal",
        children: Chunk388032.intl.format(Chunk388032.t.gPt3PD, {
          promoLink: () => {
            window.open("https://discord.com/billing/promotions/".concat(exports))
          }
        })
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), b(this, "state", {
      codeInput: "",
      submitting: false,
      hasError: false,
      isPromoCode: false
    }), b(this, "handleChange", e => {
      this.setState({
        codeInput: e,
        hasError: false
      })
    }), b(this, "handleSubmit", async e => {
      e.preventDefault();
      let {
        codeInput: t
      } = this.state;
      if ("" === t) return;
      let n = (0, p.JT)(t);
      if (null == n) return void this.setState({
        hasError: true
      });
      this.setState({
        submitting: true
      });
      try {
        let e = await o.Z.resolveGiftCode(n);
        if (null != e && null != e.giftCode.promotion) throw this.setState({
          isPromoCode: true
        }), Error("Cannnot redeem promotion code as gift");
        m.default.track(g.rMx.OPEN_MODAL, {
          type: "gift_accept",
          location: _(x({}, this.analyticsLocation), {
            object: g.qAy.BUTTON_CTA
          })
        }), (0, d.V)({
          processedCode: n
        }), this.setState({
          codeInput: ""
        })
      } catch (e) {
        this.setState({
          hasError: true
        })
      } finally {
        this.setState({
          submitting: false
        })
      }
    })
  }
}

function E() {
  let e = Chunk73800.useContext(Chunk626135.AnalyticsContext),
    t = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.enabled);
  return (0, Chunk255367.jsx)(j, {
    analyticsContext: module,
    obscureInput: exports
  })
}