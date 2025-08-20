/** Chunk was on web.js **/
/** chunk id: 145454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk990547 = require("./990547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk7557 = require("./7557.jsx"),
  Chunk200357 = require("./200357.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk520668 = require("./520668.js"),
  Chunk149715 = require("./149715.js"),
  Chunk197571 = require("./197571.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class b extends Chunk647438.PureComponent {
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
      working: a,
      transitionState: s,
      validPhone: E
    } = this.props;
    return e = null != Chunk647438 && "" !== Chunk647438 ? (0, Chunk951288.jsx)("div", {
      className: o()(Chunk520668.description, Chunk520668.error, Chunk197571.marginBottom20),
      children: Chunk647438
    }) : E ? (0, Chunk951288.jsx)("div", {
      className: o()(Chunk520668.description, Chunk197571.marginBottom20),
      children: Chunk388032.intl.string(Chunk388032.t["4qMI6O"])
    }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)("div", {
        className: o()(Chunk520668.description, Chunk197571.marginBottom20),
        children: Chunk388032.intl.string(Chunk388032.t.Vp9je3)
      }), (0, Chunk951288.jsx)("div", {
        className: o()(Chunk520668.description, Chunk197571.marginBottom20),
        children: Chunk388032.intl.format(Chunk388032.t["3BTmqa"], {})
      })]
    }), t = E ? (0, Chunk951288.jsxs)(Chunk600164.Z, {
      className: Chunk520668.field,
      direction: Chunk600164.Z.Direction.VERTICAL,
      align: Chunk600164.Z.Align.CENTER,
      children: [(0, Chunk951288.jsx)(Chunk7557.Z, {
        onSubmit: this.handleVerifyPhone
      }), (0, Chunk951288.jsx)(Chunk755721.zx, {
        className: Chunk197571.marginTop8,
        size: Chunk755721.Ph.SMALL,
        look: Chunk755721.iL.LINK,
        color: Chunk755721.Tt.PRIMARY,
        onClick: this.handleResendCode,
        children: Chunk388032.intl.string(Chunk388032.t["5b60go"])
      })]
    }) : (0, Chunk951288.jsx)(Chunk200357.Z, {
      className: Chunk520668.field,
      onSubmit: this.handleAddPhone,
      submitting: Chunk120356
    }), n = E ? Chunk388032.intl.string(Chunk388032.t.Xclkxs) : Chunk388032.intl.string(Chunk388032.t.uR76s7), (0, Chunk951288.jsxs)(Chunk481060.Y0X, {
      impression: {
        impressionName: Chunk990547.ImpressionNames.USER_VERIFY_PHONE
      },
      transitionState: Chunk772848,
      className: o()(Chunk520668.phoneVerificationModal, Chunk149715.vertical, Chunk149715.alignCenter, Chunk149715.justifyCenter, Chunk197571.marginTop60),
      "aria-labelledby": this.headerId,
      parentComponent: "PhoneVerificationModal",
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk520668.animationContainer,
        ref: this.setLottieRef
      }), (0, Chunk951288.jsx)("div", {
        className: o()(Chunk520668.title, Chunk197571.marginBottom8),
        id: this.headerId,
        children: require
      }), module, exports]
    })
  }
  constructor(e) {
    super(e), E(this, "_animItem", null), E(this, "_lottieRef", true), E(this, "headerId", (0, s.Z)()), E(this, "setLottieRef", e => {
      this._lottieRef = e
    }), E(this, "handleAddPhone", e => {
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
    }), E(this, "handleVerifyPhone", e => {
      let {
        onVerifyPhone: t
      } = this.props;
      null == t || t(e)
    }), E(this, "handleResendCode", () => {
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
let y = b