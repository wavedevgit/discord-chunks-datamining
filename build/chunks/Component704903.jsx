/** Chunk was on 35401 **/
/** chunk id: 704903, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./539854.js"), require("./388685.js");
var s, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk846519 = require("./846519.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk213376 = require("./213376.js");

function p(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = n, t
}
class g extends(s = Chunk473749.PureComponent) {
  componentWillUnmount() {
    this._timeout.stop()
  }
  getActions() {
    let {
      canResend: t,
      canChange: e,
      submitting: n
    } = this.props, {
      email: s,
      password: i
    } = this.state;
    if (!t) return [{
      text: d.intl.string(d.t.v740sh),
      variant: "primary",
      onClick: this.handleVerify,
      loading: n,
      disabled: 0 === s.length || 0 === i.length
    }];
    let l = [{
      variant: "secondary",
      text: d.intl.string(d.t.WnX4J2),
      onClick: this.handleResendEmail
    }];
    return e && l.push({
      text: d.intl.string(d.t.Vm8akB),
      variant: "primary",
      onClick: this.handleChangeEmailClick
    }), l
  }
  renderInputs() {
    let {
      emailError: t,
      passwordError: e
    } = this.props, {
      email: n,
      password: s
    } = this.state;
    return (0, i.jsx)(o.Kqy, {
      gap: 40,
      padding: {
        bottom: 8
      },
      children: (0, i.jsxs)(o.Kqy, {
        gap: 20,
        children: [(0, i.jsx)(o.oil, {
          label: d.intl.string(d.t.dI4d4S),
          value: n,
          error: t,
          onChange: this.handleEmailChange,
          onKeyPress: this.handleKeyPress,
          autoFocus: true
        }), (0, i.jsx)(o.oil, {
          label: d.intl.string(d.t["CIGa+7"]),
          type: "password",
          value: s,
          error: e,
          onChange: this.handlePasswordChange,
          onKeyPress: this.handleKeyPress
        })]
      })
    })
  }
  render() {
    let t, {
        resent: e
      } = this.state,
      {
        email: n,
        canResend: s,
        transitionState: l
      } = this.props;
    return t = e && null != n ? d.intl.format(d.t.JqLgQL, {
      email: n
    }) : s ? d.intl.string(d.t.tSXg8O) : d.intl.string(d.t.KW5DEh), (0, i.jsx)(r.Ioy, {
      transitionState: l,
      title: d.intl.string(d.t["1MPz27"]),
      subtitle: t,
      graphic: {
        type: "image",
        src: u.Z
      },
      onClose: this.props.onClose,
      actions: this.getActions(),
      children: !s && this.renderInputs()
    })
  }
  constructor(...t) {
    super(...t), p(this, "_timeout", new a.V7), p(this, "state", {
      resent: false,
      shouldClose: false,
      email: "",
      password: ""
    }), p(this, "handleVerify", () => {
      let {
        onVerify: t
      } = this.props;
      t(this.state.email, this.state.password)
    }), p(this, "handleResendEmail", () => {
      let {
        onResend: t,
        onClose: e
      } = this.props;
      t(), this.state.resent || (this.setState({
        resent: true,
        shouldClose: true
      }), this._timeout.start(3e3, () => {
        this.state.shouldClose && e()
      }))
    }), p(this, "handleChangeEmailClick", () => {
      let {
        onChangeEmailClick: t
      } = this.props;
      this.setState({
        resent: false,
        shouldClose: false
      }), t()
    }), p(this, "handleEmailChange", t => {
      this.setState({
        email: t
      })
    }), p(this, "handlePasswordChange", t => {
      this.setState({
        password: t
      })
    }), p(this, "handleKeyPress", t => {
      let {
        email: e,
        password: n
      } = this.state;
      13 === t.which && e.length > 0 && n.length > 0 && (t.preventDefault(), this.handleVerify())
    })
  }
}
p(g, "defaultProps", {
  canResend: false,
  canChange: true,
  onChangeEmailClick: Chunk981631.dG4,
  onVerify: (t, e) => {},
  onResend: Chunk981631.dG4,
  onClose: Chunk981631.dG4
});
let c = g