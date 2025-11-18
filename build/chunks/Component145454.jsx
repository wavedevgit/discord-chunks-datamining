/** Chunk was on web.js **/
/** chunk id: 145454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk7557 = require("./7557.jsx"),
  Chunk200357 = require("./200357.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk331899 = require("./331899.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class _ extends Chunk473749.PureComponent {
  render() {
    let e, t, n, i, {
        error: f,
        working: _,
        transitionState: p,
        validPhone: h,
        layerContext: m
      } = this.props,
      {
        phone: g
      } = this.state,
      E = [];
    return h ? e = Chunk388032.intl.string(Chunk388032.t["4qMI6A"]) : (e = Chunk388032.intl.string(Chunk388032.t.Vp9je2), t = (0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      children: Chunk388032.intl.format(Chunk388032.t["3BTmqX"], {})
    })), h ? (n = (0, Chunk54381.jsx)(Chunk481060.gNt, {
      label: Chunk388032.intl.string(Chunk388032.t.Xclkxp),
      hideLabel: true,
      errorMessage: null != f ? f : true,
      children: (0, Chunk54381.jsx)(Chunk7557.Z, {
        onSubmit: this.handleVerifyPhone
      })
    }), E = [{
      variant: "secondary",
      text: Chunk388032.intl.string(Chunk388032.t["5b60gi"]),
      onClick: this.handleResendCode,
      loading: _
    }]) : (n = (0, Chunk54381.jsx)(Chunk200357.Z, {
      label: Chunk388032.intl.string(Chunk388032.t["64bX0M"]),
      errorMessage: null != f ? f : true,
      className: Chunk331899.field,
      onChange: this.handlePhoneChange,
      submitting: _,
      layerContext: m
    }), E = [{
      text: Chunk388032.intl.string(Chunk388032.t.TXNS7S),
      disabled: "" === g,
      loading: _,
      onClick: this.handleAddPhone
    }]), i = h ? Chunk388032.intl.string(Chunk388032.t.Xclkxp) : Chunk388032.intl.string(Chunk388032.t.uR76s6), (0, Chunk54381.jsx)(Chunk793030.Modal, {
      size: h ? "sm" : "md",
      title: Chunk473749,
      subtitle: module,
      actions: E,
      onClose: this.props.onClose,
      trackingProps: {
        impression: {
          impressionName: Chunk990547.ImpressionNames.USER_VERIFY_PHONE
        }
      },
      transitionState: p,
      children: (0, Chunk54381.jsxs)(Chunk481060.Kqy, {
        gap: 8,
        children: [require, exports]
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
let p = _