/** Chunk was on 35401 **/
/** chunk id: 704903, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk613881 = require("./613881.js"),
  Chunk465106 = require("./465106.js"),
  Chunk10198 = require("./10198.js");

function f(t, e, i) {
  return e in t ? Object.defineProperty(t, e, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = i, t
}
class C extends(n = Chunk647438.PureComponent) {
  async componentDidMount() {
    let [t, {
      default: e
    }] = await Promise.all([require.e("27526").then(require.t.bind(require, 555589, 19)), Promise.resolve().then(require.t.bind(require, 500923, 23))]);
    null != this._lottieRef && (this._animItem = exports.loadAnimation({
      container: this._lottieRef,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: module
    }))
  }
  componentWillUnmount() {
    this._timeout.stop(), null != this._animItem && (this._animItem.destroy(), this._animItem = true)
  }
  renderInputs() {
    let {
      emailError: t,
      passwordError: e,
      submitting: i
    } = this.props, {
      email: n,
      password: a
    } = this.state;
    return (0, Chunk951288.jsx)("div", {
      className: Chunk613881.container,
      children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 40,
        children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 20,
          children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
            label: Chunk388032.intl.string(Chunk388032.t.dI4d4S),
            value: n,
            error: module,
            onChange: this.handleEmailChange,
            onKeyPress: this.handleKeyPress,
            autoFocus: true
          }), (0, Chunk951288.jsx)(Chunk481060.oil, {
            label: Chunk388032.intl.string(Chunk388032.t["CIGa+7"]),
            type: "password",
            value: Chunk647438,
            error: exports,
            onChange: this.handlePasswordChange,
            onKeyPress: this.handleKeyPress
          })]
        }), (0, Chunk951288.jsx)(Chunk481060.Button, {
          text: Chunk388032.intl.string(Chunk388032.t.v740sh),
          variant: "primary",
          fullWidth: true,
          onClick: this.handleVerify,
          loading: require,
          disabled: 0 === n.length || 0 === Chunk647438.length
        })]
      })
    })
  }
  renderActions() {
    let {
      canChange: t
    } = this.props;
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk613881.container,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk10198.marginTop20,
        children: (0, Chunk951288.jsx)(Chunk481060.Button, {
          text: Chunk388032.intl.string(Chunk388032.t.LdUkO6),
          variant: "secondary",
          fullWidth: true,
          onClick: this.handleResendEmail
        })
      }), module && (0, Chunk951288.jsx)("div", {
        className: Chunk10198.marginTop20,
        children: (0, Chunk951288.jsx)(Chunk481060.Button, {
          text: Chunk388032.intl.string(Chunk388032.t.oP5zGA),
          variant: "primary",
          fullWidth: true,
          onClick: this.handleChangeEmailClick
        })
      })]
    })
  }
  render() {
    let t, {
        resent: e
      } = this.state,
      {
        email: i,
        canResend: n,
        transitionState: a
      } = this.props;
    return t = exports && null != require ? Chunk388032.intl.format(Chunk388032.t.JqLgQL, {
      email: require
    }) : n ? Chunk388032.intl.string(Chunk388032.t.tSXg8O) : Chunk388032.intl.string(Chunk388032.t.KW5DEh), (0, Chunk951288.jsxs)(Chunk481060.Y0X, {
      transitionState: Chunk647438,
      "aria-labelledby": this._headerId,
      className: r()(Chunk613881.emailVerificationModal, Chunk465106.vertical, Chunk465106.alignCenter, Chunk465106.justifyCenter, Chunk10198.marginTop60),
      parentComponent: "EmailVerificationModal",
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk613881.animationContainer,
        ref: this.setLottieRef
      }), (0, Chunk951288.jsx)("div", {
        id: this._headerId,
        className: r()(Chunk613881.title, Chunk10198.marginBottom8),
        children: Chunk388032.intl.string(Chunk388032.t["1MPz27"])
      }), (0, Chunk951288.jsx)("div", {
        className: r()(Chunk613881.body, Chunk10198.marginBottom20),
        children: module
      }), n ? this.renderActions() : this.renderInputs()]
    })
  }
  constructor(...t) {
    super(...t), f(this, "_lottieRef", true), f(this, "_animItem", null), f(this, "_timeout", new h.V7), f(this, "_headerId", (0, o.Z)()), f(this, "state", {
      resent: false,
      shouldClose: false,
      email: "",
      password: ""
    }), f(this, "setLottieRef", t => {
      this._lottieRef = t
    }), f(this, "handleVerify", () => {
      let {
        onVerify: t
      } = this.props;
      t(this.state.email, this.state.password)
    }), f(this, "handleResendEmail", () => {
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
    }), f(this, "handleChangeEmailClick", () => {
      let {
        onChangeEmailClick: t
      } = this.props;
      this.setState({
        resent: false,
        shouldClose: false
      }), t()
    }), f(this, "handleEmailChange", t => {
      this.setState({
        email: t
      })
    }), f(this, "handlePasswordChange", t => {
      this.setState({
        password: t
      })
    }), f(this, "handleKeyPress", t => {
      let {
        email: e,
        password: i
      } = this.state;
      13 === t.which && e.length > 0 && i.length > 0 && (t.preventDefault(), this.handleVerify())
    })
  }
}
f(C, "defaultProps", {
  canResend: false,
  canChange: true,
  onChangeEmailClick: Chunk981631.dG4,
  onVerify: (t, e) => {},
  onResend: Chunk981631.dG4,
  onClose: Chunk981631.dG4
});
let v = C