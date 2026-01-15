/** Chunk was on web.js **/
/** chunk id: 541540, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk533307 = require("./533307.js"),
  Chunk930114 = require("./930114.jsx"),
  Chunk246946 = require("./246946.js"),
  Chunk626135 = require("./626135.js"),
  Chunk669079 = require("./669079.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let E = "WUMP-AAAAA-BBBBB-CCCCC";
class b extends Chunk473749.Component {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      }
    } = this.props;
    return g(h({}, e), {
      object: f.qAy.BUTTON_CTA
    })
  }
  render() {
    let {
      obscureInput: e
    } = this.props, {
      codeInput: t,
      submitting: n,
      hasError: i,
      isPromoCode: a
    } = this.state;
    return (0, r.jsx)(o.C3N, {
      label: p.intl.string(p.t["il+VCo"]),
      children: (0, r.jsx)("form", {
        onSubmit: this.handleSubmit,
        children: (0, r.jsxs)(o.NIo, {
          children: [(0, r.jsx)(o.oil, {
            label: p.intl.string(p.t.SeKIoS),
            type: e ? "password" : "text",
            value: t,
            onChange: this.handleChange,
            placeholder: E,
            error: !a && i ? p.intl.string(p.t.Y11a2u) : null,
            helperText: a ? p.intl.format(p.t.gPt3PE, {
              promoLink: () => {
                window.open("https://discord.com/billing/promotions/".concat(t))
              }
            }) : null,
            fullWidth: true
          }), (0, r.jsx)(o.Button, {
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
    super(...e), _(this, "state", {
      codeInput: "",
      submitting: false,
      hasError: false,
      isPromoCode: false
    }), _(this, "handleChange", e => {
      this.setState({
        codeInput: e,
        hasError: false
      })
    }), _(this, "handleSubmit", async e => {
      e.preventDefault();
      let {
        codeInput: t
      } = this.state;
      if ("" === t) return;
      let n = (0, d.JT)(t);
      if (null == n) return void this.setState({
        hasError: true
      });
      this.setState({
        submitting: true
      });
      try {
        let e = await s.Z.resolveGiftCode(n);
        if (null != e && null != e.giftCode.promotion) throw this.setState({
          isPromoCode: true
        }), Error("Cannnot redeem promotion code as gift");
        u.default.track(f.rMx.OPEN_MODAL, {
          type: "gift_accept",
          location: g(h({}, this.analyticsLocation), {
            object: f.qAy.BUTTON_CTA
          })
        }), (0, l.V)({
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

function y() {
  let e = i.useContext(u.AnalyticsContext),
    t = (0, a.e7)([c.Z], () => c.Z.enabled);
  return (0, r.jsx)(b, {
    analyticsContext: e,
    obscureInput: t
  })
}