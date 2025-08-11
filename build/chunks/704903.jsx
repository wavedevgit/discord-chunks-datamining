/** Chunk was on 35401 **/
/** chunk id: 704903, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var n, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk846519 = require("./846519.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk944084 = require("./944084.js"),
  Chunk893354 = require("./893354.js"),
  Chunk20493 = require("./20493.js");

function C(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = i, e
}
class v extends(n = Chunk73800.PureComponent) {
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
    return <div className={Chunk944084.container}>{<Chunk481060.xJW title={Chunk388032.intl.string(Chunk388032.t.dI4d4e)} className={Chunk20493.marginBottom20}><Chunk481060.oil value={n} error={module} onChange={this.handleEmailChange} onKeyPress={this.handleKeyPress} autoFocus={true} /></Chunk481060.xJW>}{<Chunk481060.xJW title={Chunk388032.intl.string(Chunk388032.t["CIGa+/"])} className={Chunk20493.marginBottom40}><Chunk481060.oil type={"password"} value={Chunk73800} error={exports} onChange={this.handlePasswordChange} onKeyPress={this.handleKeyPress} /></Chunk481060.xJW>}{<Chunk755721.zx fullWidth={true} size={Chunk755721.zx.Sizes.LARGE} onClick={this.handleVerify} submitting={require} disabled={0 === n.length || 0 === Chunk73800.length}>{Chunk388032.intl.string(Chunk388032.t.v740sr)}</Chunk755721.zx>}</div>
  }
  renderActions() {
    let {
      canChange: e
    } = this.props;
    return <div className={Chunk944084.container}>{<Chunk755721.zx className={Chunk20493.marginTop20} fullWidth={true} size={Chunk755721.zx.Sizes.LARGE} color={Chunk755721.Tt.PRIMARY} onClick={this.handleResendEmail}>{Chunk388032.intl.string(Chunk388032.t.LdUkOz)}</Chunk755721.zx>}{module && <Chunk755721.zx className={Chunk20493.marginTop20} fullWidth={true} size={Chunk755721.zx.Sizes.MEDIUM} look={Chunk755721.iL.LINK} color={Chunk755721.Tt.LINK} onClick={this.handleChangeEmailClick}>{Chunk388032.intl.string(Chunk388032.t.oP5zGB)}</Chunk755721.zx>}</div>
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
    }) : n ? Chunk388032.intl.string(Chunk388032.t.tSXg8P) : Chunk388032.intl.string(Chunk388032.t.KW5DEh), <Chunk481060.Y0X transitionState={Chunk73800} aria-labelledby={this._headerId} className={o()(Chunk944084.emailVerificationModal, Chunk893354.vertical, Chunk893354.alignCenter, Chunk893354.justifyCenter, Chunk20493.marginTop60)} parentComponent={"EmailVerificationModal"}>{<div className={Chunk944084.animationContainer} ref={this.setLottieRef} />}{<div id={this._headerId} className={o()(Chunk944084.title, Chunk20493.marginBottom8)}>{Chunk388032.intl.string(Chunk388032.t["1MPz29"])}</div>}{<div className={o()(Chunk944084.body, Chunk20493.marginBottom20)}>{module}</div>}{n ? this.renderActions() : this.renderInputs()}</Chunk481060.Y0X>
  }
  constructor(...e) {
    super(...e), C(this, "_lottieRef", true), C(this, "_animItem", null), C(this, "_timeout", new h.V7), C(this, "_headerId", (0, r.Z)()), C(this, "state", {
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
let x = v