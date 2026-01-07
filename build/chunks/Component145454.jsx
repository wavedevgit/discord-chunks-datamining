/** Chunk was on web.js **/
/** chunk id: 145454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk7557 = require("./7557.jsx"),
  Chunk200357 = require("./200357.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk109491 = require("./109491.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class p extends Chunk473749.PureComponent {
  render() {
    let e, t, n, i, {
        error: f,
        working: p,
        transitionState: _,
        validPhone: m,
        layerContext: h
      } = this.props,
      {
        phone: g
      } = this.state,
      E = [];
    return m ? e = u.intl.string(u.t["4qMI6A"]) : (e = u.intl.string(u.t.Vp9je2), t = (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      children: u.intl.format(u.t["3BTmqX"], {})
    })), m ? (n = (0, r.jsx)(s.gNt, {
      label: u.intl.string(u.t.Xclkxp),
      hideLabel: true,
      errorMessage: null != f ? f : true,
      children: (0, r.jsx)(l.Z, {
        onSubmit: this.handleVerifyPhone
      })
    }), E = [{
      variant: "secondary",
      text: u.intl.string(u.t["5b60gi"]),
      onClick: this.handleResendCode,
      loading: p
    }]) : (n = (0, r.jsx)(c.Z, {
      label: u.intl.string(u.t["64bX0M"]),
      errorMessage: null != f ? f : true,
      className: d.field,
      onChange: this.handlePhoneChange,
      submitting: p,
      layerContext: h
    }), E = [{
      text: u.intl.string(u.t.TXNS7S),
      disabled: "" === g,
      loading: p,
      onClick: this.handleAddPhone
    }]), i = m ? u.intl.string(u.t.Xclkxp) : u.intl.string(u.t.uR76s6), (0, r.jsx)(o.Modal, {
      size: m ? "sm" : "md",
      title: i,
      subtitle: e,
      actions: E,
      onClose: this.props.onClose,
      trackingProps: {
        impression: {
          impressionName: a.ImpressionNames.USER_VERIFY_PHONE
        }
      },
      transitionState: _,
      children: (0, r.jsxs)(s.Kqy, {
        gap: 8,
        children: [n, t]
      })
    })
  }
  constructor(e) {
    super(e), f(this, "handlePhoneChange", e => {
      this.setState({
        phone: e
      })
    }), f(this, "handleAddPhone", () => {
      let {
        phone: e
      } = this.state, {
        onAddPhone: t
      } = this.props;
      null == t || t(e)
    }), f(this, "handleVerifyPhone", e => {
      let {
        onVerifyPhone: t
      } = this.props;
      null == t || t(e)
    }), f(this, "handleResendCode", () => {
      let {
        onAddPhone: e
      } = this.props;
      null == e || e(this.state.phone)
    }), this.state = {
      phone: ""
    }
  }
}
let _ = p