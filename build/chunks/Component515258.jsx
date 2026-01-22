/** Chunk was on web.js **/
/** chunk id: 515258, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk13008 = require("./13008.jsx"),
  Chunk457570 = require("./457570.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk603344 = require("./603344.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class p extends Chunk64700.PureComponent {
  render() {
    let e, t, n, i, {
        error: f,
        working: p,
        transitionState: _,
        validPhone: h,
        layerContext: m
      } = this.props,
      {
        phone: g
      } = this.state,
      E = [];
    return h ? e = u.intl.string(u.t["4qMI6A"]) : (e = u.intl.string(u.t.Vp9je2), t = (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: u.intl.format(u.t["3BTmqX"], {})
    })), h ? (n = (0, r.jsx)(o.D0$, {
      label: u.intl.string(u.t.Xclkxp),
      hideLabel: true,
      errorMessage: null != f ? f : true,
      children: (0, r.jsx)(l.A, {
        onSubmit: this.handleVerifyPhone
      })
    }), E = [{
      variant: "secondary",
      text: u.intl.string(u.t["5b60gi"]),
      onClick: this.handleResendCode,
      loading: p
    }]) : (n = (0, r.jsx)(c.A, {
      label: u.intl.string(u.t["64bX0M"]),
      errorMessage: null != f ? f : true,
      className: d.ZZ,
      onChange: this.handlePhoneChange,
      submitting: p,
      layerContext: m
    }), E = [{
      text: u.intl.string(u.t.TXNS7S),
      disabled: "" === g,
      loading: p,
      onClick: this.handleAddPhone
    }]), i = h ? u.intl.string(u.t.Xclkxp) : u.intl.string(u.t.uR76s6), (0, r.jsx)(s.Modal, {
      size: h ? "sm" : "md",
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
      children: (0, r.jsxs)(o.BJc, {
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