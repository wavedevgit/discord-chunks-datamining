/** Chunk was on 76540 **/
/** chunk id: 145454, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk990547 = require("./990547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk7557 = require("./7557.jsx"),
  Chunk200357 = require("./200357.js"),
  Chunk388032 = require("./388032.js"),
  Chunk282287 = require("./282287.js"),
  Chunk893354 = require("./893354.js"),
  Chunk20493 = require("./20493.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class C extends Chunk73800.PureComponent {
  async componentDidMount() {
    let [e, {
      default: t
    }] = await Promise.all([require.e("93198").then(require.t.bind(require, 140523, 19)), Promise.resolve().then(require.t.bind(require, 500923, 23))]);
    null != this._lottieRef && (this._animItem = exports.loadAnimation({
      container: this._lottieRef,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: module
    }))
  }
  componentWillUnmount() {
    null != this._animItem && (this._animItem.destroy(), this._animItem = true)
  }
  render() {
    let e, t, n, {
      error: i,
      working: r,
      transitionState: o,
      validPhone: f
    } = this.props;
    return e = null != Chunk73800 && "" !== Chunk73800 ? <div className={l()(Chunk282287.description, Chunk282287.error, Chunk20493.marginBottom20)}>{Chunk73800}</div> : f ? <div className={l()(Chunk282287.description, Chunk20493.marginBottom20)}>{Chunk388032.intl.string(Chunk388032.t["4qMI6O"])}</div> : <Chunk255367.Fragment>{<div className={l()(Chunk282287.description, Chunk20493.marginBottom20)}>{Chunk388032.intl.string(Chunk388032.t.Vp9je3)}</div>}{<div className={l()(Chunk282287.description, Chunk20493.marginBottom20)}>{Chunk388032.intl.format(Chunk388032.t["3BTmqa"], {})}</div>}</Chunk255367.Fragment>, t = f ? <Chunk600164.Z className={Chunk282287.field} direction={Chunk600164.Z.Direction.VERTICAL} align={Chunk600164.Z.Align.CENTER}>{<Chunk7557.Z onSubmit={this.handleVerifyPhone} />}{<Chunk755721.zx className={Chunk20493.marginTop8} size={Chunk755721.Ph.SMALL} look={Chunk755721.iL.LINK} color={Chunk755721.Tt.PRIMARY} onClick={this.handleResendCode}>{Chunk388032.intl.string(Chunk388032.t["5b60go"])}</Chunk755721.zx>}</Chunk600164.Z> : <Chunk200357.Z className={Chunk282287.field} onSubmit={this.handleAddPhone} submitting={Chunk120356} />, n = f ? Chunk388032.intl.string(Chunk388032.t.Xclkxs) : Chunk388032.intl.string(Chunk388032.t.uR76s7), <Chunk481060.Y0X impression={{
        impressionName: Chunk990547.ImpressionNames.USER_VERIFY_PHONE
      }} transitionState={Chunk772848} className={l()(Chunk282287.phoneVerificationModal, Chunk893354.vertical, Chunk893354.alignCenter, Chunk893354.justifyCenter, Chunk20493.marginTop60)} aria-labelledby={this.headerId} parentComponent={"PhoneVerificationModal"}>{<div className={Chunk282287.animationContainer} ref={this.setLottieRef} />}{<div className={l()(Chunk282287.title, Chunk20493.marginBottom8)} id={this.headerId}>{require}</div>}{module}{exports}</Chunk481060.Y0X>
  }
  constructor(e) {
    super(e), f(this, "_animItem", null), f(this, "_lottieRef", true), f(this, "headerId", (0, o.Z)()), f(this, "setLottieRef", e => {
      this._lottieRef = e
    }), f(this, "handleAddPhone", e => {
      this.state.animated || null == this._animItem ? this.setState({
        phone: e
      }) : (this._animItem.play(), this.setState({
        animated: true,
        phone: e
      }));
      let {
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
      animated: false,
      phone: ""
    }
  }
}
let g = C