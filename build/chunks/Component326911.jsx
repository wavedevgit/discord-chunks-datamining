/** Chunk was on 2827 **/
/** chunk id: 326911, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk869038 = require("./869038.js"),
  Chunk499454 = require("./499454.jsx"),
  Chunk351906 = require("./351906.js"),
  Chunk954571 = require("./954571.js"),
  Chunk45938 = require("./45938.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class f extends Chunk64700.Component {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      }
    } = this.props;
    return A(g({}, e), {
      object: _.ZSU.BUTTON_CTA
    })
  }
  render() {
    let {
      obscureInput: e
    } = this.props, {
      codeInput: t,
      submitting: n,
      hasError: i,
      isPromoCode: l
    } = this.state;
    return (0, r.jsx)(s.nVY, {
      label: p.intl.string(p.t["il+VCo"]),
      children: (0, r.jsx)("form", {
        onSubmit: this.handleSubmit,
        children: (0, r.jsxs)(s.M_l, {
          children: [(0, r.jsx)(s.ksK, {
            label: p.intl.string(p.t.SeKIoS),
            type: e ? "password" : "text",
            value: t,
            onChange: this.handleChange,
            placeholder: "WUMP-AAAAA-BBBBB-CCCCC",
            error: !l && i ? p.intl.string(p.t.Y11a2u) : null,
            helperText: l ? p.intl.format(p.t.gPt3PE, {
              promoLink: () => {
                window.open("https://discord.com/billing/promotions/".concat(t))
              }
            }) : null,
            fullWidth: true
          }), (0, r.jsx)(s.Button, {
            variant: "primary",
            text: p.intl.string(p.t.KIpp7M),
            type: "submit",
            loading: n
          })]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), m(this, "state", {
      codeInput: "",
      submitting: false,
      hasError: false,
      isPromoCode: false
    }), m(this, "handleChange", e => {
      this.setState({
        codeInput: e,
        hasError: false
      })
    }), m(this, "handleSubmit", async e => {
      e.preventDefault();
      let {
        codeInput: t
      } = this.state;
      if ("" === t) return;
      let n = (0, u.Vd)(t);
      if (null == n) return void this.setState({
        hasError: true
      });
      this.setState({
        submitting: true
      });
      try {
        let e = await a.A.resolveGiftCode(n);
        if (null != e && null != e.giftCode.promotion) throw this.setState({
          isPromoCode: true
        }), Error("Cannnot redeem promotion code as gift");
        d.default.track(_.HAw.OPEN_MODAL, {
          type: "gift_accept",
          location: A(g({}, this.analyticsLocation), {
            object: _.ZSU.BUTTON_CTA
          })
        }), (0, o.h)({
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

function b() {
  let e = i.useContext(d.AnalyticsContext),
    t = (0, l.bG)([c.A], () => c.A.enabled);
  return (0, r.jsx)(f, {
    analyticsContext: e,
    obscureInput: t
  })
}