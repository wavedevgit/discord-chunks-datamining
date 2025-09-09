/** Chunk was on 35401 **/
/** chunk id: 704903, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk846519 = require("./846519.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk831319 = require("./831319.js"),
  Chunk149715 = require("./149715.js"),
  Chunk197571 = require("./197571.js");

function C(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}
class v extends(n = Chunk647438.PureComponent) {
  async componentDidMount() {
    let [e, {
      default: t
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
      emailError: e,
      passwordError: t,
      submitting: i
    } = this.props, {
      email: n,
      password: a
    } = this.state;
    return (0, Chunk951288.jsx)("div", {
      className: Chunk831319.container,
      children: (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 40,
        children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
          gap: 20,
          children: [(0, Chunk951288.jsx)(Chunk481060.oil, {
            label: Chunk388032.intl.string(Chunk388032.t.dI4d4e),
            value: n,
            error: module,
            onChange: this.handleEmailChange,
            onKeyPress: this.handleKeyPress,
            autoFocus: true
          }), (0, Chunk951288.jsx)(Chunk481060.oil, {
            label: Chunk388032.intl.string(Chunk388032.t["CIGa+/"]),
            type: "password",
            value: Chunk647438,
            error: exports,
            onChange: this.handlePasswordChange,
            onKeyPress: this.handleKeyPress
          })]
        }), (0, Chunk951288.jsx)(Chunk755721.zx, {
          fullWidth: true,
          size: Chunk755721.zx.Sizes.LARGE,
          onClick: this.handleVerify,
          submitting: require,
          disabled: 0 === n.length || 0 === Chunk647438.length,
          children: Chunk388032.intl.string(Chunk388032.t.v740sr)
        })]
      })
    })
  }
  renderActions() {
    let {
      canChange: e
    } = this.props;
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk831319.container,
      children: [(0, Chunk951288.jsx)(Chunk755721.zx, {
        className: Chunk197571.marginTop20,
        fullWidth: true,
        size: Chunk755721.zx.Sizes.LARGE,
        color: Chunk755721.Tt.PRIMARY,
        onClick: this.handleResendEmail,
        children: Chunk388032.intl.string(Chunk388032.t.LdUkOz)
      }), module && (0, Chunk951288.jsx)(Chunk755721.zx, {
        className: Chunk197571.marginTop20,
        fullWidth: true,
        size: Chunk755721.zx.Sizes.MEDIUM,
        look: Chunk755721.iL.LINK,
        color: Chunk755721.Tt.LINK,
        onClick: this.handleChangeEmailClick,
        children: Chunk388032.intl.string(Chunk388032.t.oP5zGB)
      })]
    })
  }
  render() {
    let e, {
        resent: t
      } = this.state,
      {
        email: i,
        canResend: n,
        transitionState: a
      } = this.props;
    return e = exports && null != require ? Chunk388032.intl.format(Chunk388032.t.JqLgQE, {
      email: require
    }) : n ? Chunk388032.intl.string(Chunk388032.t.tSXg8P) : Chunk388032.intl.string(Chunk388032.t.KW5DEh), (0, Chunk951288.jsxs)(Chunk481060.Y0X, {
      transitionState: Chunk647438,
      "aria-labelledby": this._headerId,
      className: r()(Chunk831319.emailVerificationModal, Chunk149715.vertical, Chunk149715.alignCenter, Chunk149715.justifyCenter, Chunk197571.marginTop60),
      parentComponent: "EmailVerificationModal",
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk831319.animationContainer,
        ref: this.setLottieRef
      }), (0, Chunk951288.jsx)("div", {
        id: this._headerId,
        className: r()(Chunk831319.title, Chunk197571.marginBottom8),
        children: Chunk388032.intl.string(Chunk388032.t["1MPz29"])
      }), (0, Chunk951288.jsx)("div", {
        className: r()(Chunk831319.body, Chunk197571.marginBottom20),
        children: module
      }), n ? this.renderActions() : this.renderInputs()]
    })
  }
  constructor(...e) {
    super(...e), C(this, "_lottieRef", true), C(this, "_animItem", null), C(this, "_timeout", new h.V7), C(this, "_headerId", (0, o.Z)()), C(this, "state", {
      resent: false,
      shouldClose: false,
      email: "",
      password: ""
    }), C(this, "setLottieRef", e => {
      this._lottieRef = e
    }), C(this, "handleVerify", () => {
      let {
        onVerify: e
      } = this.props;
      e(this.state.email, this.state.password)
    }), C(this, "handleResendEmail", () => {
      let {
        onResend: e,
        onClose: t
      } = this.props;
      e(), this.state.resent || (this.setState({
        resent: true,
        shouldClose: true
      }), this._timeout.start(3e3, () => {
        this.state.shouldClose && t()
      }))
    }), C(this, "handleChangeEmailClick", () => {
      let {
        onChangeEmailClick: e
      } = this.props;
      this.setState({
        resent: false,
        shouldClose: false
      }), e()
    }), C(this, "handleEmailChange", e => {
      this.setState({
        email: e
      })
    }), C(this, "handlePasswordChange", e => {
      this.setState({
        password: e
      })
    }), C(this, "handleKeyPress", e => {
      let {
        email: t,
        password: i
      } = this.state;
      13 === e.which && t.length > 0 && i.length > 0 && (e.preventDefault(), this.handleVerify())
    })
  }
}
C(v, "defaultProps", {
  canResend: false,
  canChange: true,
  onChangeEmailClick: Chunk981631.dG4,
  onVerify: (e, t) => {},
  onResend: Chunk981631.dG4,
  onClose: Chunk981631.dG4
});
let y = v