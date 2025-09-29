/** Chunk was on web.js **/
/** chunk id: 145454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk886025 = require("./886025.jsx"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk7557 = require("./7557.jsx"),
  Chunk200357 = require("./200357.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk331899 = require("./331899.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class p extends Chunk647438.PureComponent {
  render() {
    let e, t, n, i, {
        error: _,
        working: p,
        transitionState: h,
        validPhone: m,
        layerContext: g
      } = this.props,
      {
        phone: E
      } = this.state,
      b = [];
    return m ? e = Chunk388032.intl.string(Chunk388032.t["4qMI6O"]) : (e = Chunk388032.intl.string(Chunk388032.t.Vp9je3), t = (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/normal",
      children: Chunk388032.intl.format(Chunk388032.t["3BTmqa"], {})
    })), m ? (n = (0, Chunk951288.jsx)(Chunk886025.N, {
      label: Chunk388032.intl.string(Chunk388032.t.Xclkxs),
      hideLabel: true,
      errorMessage: null != _ ? _ : true,
      children: (0, Chunk951288.jsx)(Chunk7557.Z, {
        onSubmit: this.handleVerifyPhone
      })
    }), b = [{
      variant: "secondary",
      text: Chunk388032.intl.string(Chunk388032.t["5b60go"]),
      onClick: this.handleResendCode,
      loading: p
    }]) : (n = (0, Chunk951288.jsx)(Chunk200357.Z, {
      label: Chunk388032.intl.string(Chunk388032.t["64bX0N"]),
      errorMessage: null != _ ? _ : true,
      className: Chunk331899.field,
      onChange: this.handlePhoneChange,
      submitting: p,
      layerContext: g
    }), b = [{
      text: Chunk388032.intl.string(Chunk388032.t.TXNS7e),
      disabled: "" === E,
      loading: p,
      onClick: this.handleAddPhone
    }]), i = m ? Chunk388032.intl.string(Chunk388032.t.Xclkxs) : Chunk388032.intl.string(Chunk388032.t.uR76s7), (0, Chunk951288.jsx)(Chunk82659.Modal, {
      size: m ? "sm" : "md",
      title: Chunk647438,
      subtitle: module,
      actions: b,
      onClose: this.props.onClose,
      trackingProps: {
        impression: {
          impressionName: Chunk990547.ImpressionNames.USER_VERIFY_PHONE
        }
      },
      transitionState: h,
      children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 8,
        children: [require, exports]
      })
    })
  }
  constructor(e) {
    super(e), _(this, "handlePhoneChange", e => {
      this.setState({
        phone: e
      })
    }), _(this, "handleAddPhone", () => {
      let {
        phone: e
      } = this.state, {
        onAddPhone: t
      } = this.props;
      null == t || t(e)
    }), _(this, "handleVerifyPhone", e => {
      let {
        onVerifyPhone: t
      } = this.props;
      null == t || t(e)
    }), _(this, "handleResendCode", () => {
      let {
        onAddPhone: e
      } = this.props;
      null == e || e(this.state.phone)
    }), this.state = {
      phone: ""
    }
  }
}
let h = p