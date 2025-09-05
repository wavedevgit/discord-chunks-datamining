/** Chunk was on web.js **/
/** chunk id: 200357, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk217986 = require("./217986.js"),
  Chunk755721 = require("./755721.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk259580 = require("./259580.jsx"),
  Chunk317175 = require("./317175.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk577216 = require("./577216.js"),
  Chunk285236 = require("./285236.js"),
  Chunk10198 = require("./10198.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class g extends Chunk647438.PureComponent {
  render() {
    let {
      countryCode: e,
      phone: t,
      open: n
    } = this.state, {
      className: i,
      submitting: a
    } = this.props, [, s] = module.split("+");
    return (0, Chunk951288.jsxs)(Chunk600164.Z, {
      className: o()(Chunk577216.phoneField, Chunk285236.elevationLow, Chunk647438),
      align: Chunk600164.Z.Align.CENTER,
      grow: 0,
      children: [(0, Chunk951288.jsxs)(Chunk755721.zx, {
        size: Chunk755721.Ph.SMALL,
        className: Chunk577216.countryButton,
        color: Chunk755721.Tt.PRIMARY,
        innerClassName: Chunk577216.countryButtonInner,
        onClick: this.handleTogglePopout,
        children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
          className: o()(Chunk577216.countryCodeContainer, Chunk10198.marginReset),
          justify: Chunk600164.Z.Justify.CENTER,
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk577216.plusSign,
            children: "+"
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk577216.countryCode,
            children: Chunk217986
          })]
        }), (0, Chunk951288.jsx)(Chunk259580.Z, {
          expanded: require,
          width: 16,
          height: 16
        })]
      }), (0, Chunk951288.jsx)("input", {
        "aria-label": Chunk388032.intl.string(Chunk388032.t["64bX0N"]),
        className: Chunk577216.inputField,
        value: exports,
        onChange: this.handleChange,
        onKeyPress: this.handleKeyPress,
        autoFocus: true
      }), (0, Chunk951288.jsx)(Chunk755721.zx, {
        className: Chunk577216.sendButton,
        size: Chunk755721.Ph.SMALL,
        submitting: Chunk120356,
        onClick: this.handleSubmit,
        children: Chunk388032.intl.string(Chunk388032.t.TXNS7e)
      }), require ? (0, Chunk951288.jsx)(Chunk317175.Z, {
        onClick: this.handleClick
      }) : null]
    })
  }
  closePopout() {
    this.state.open && this.setState({
      open: false
    })
  }
  constructor(e) {
    super(e), m(this, "handleChange", e => {
      this.closePopout(), this.setState({
        phone: e.currentTarget.value
      })
    }), m(this, "handleKeyPress", e => {
      this.closePopout(), 13 === e.which && (e.preventDefault(), this.handleSubmit())
    }), m(this, "handleSubmit", () => {
      let {
        onSubmit: e,
        submitting: t
      } = this.props, {
        countryCode: n,
        phone: r
      } = this.state;
      t || null == e || e("".concat(n).concat(r))
    }), m(this, "handleTogglePopout", () => {
      this.setState({
        open: !this.state.open
      })
    }), m(this, "handleClick", e => {
      let [t, n] = e.code.split(" ");
      this.setState({
        open: false,
        countryCode: t,
        phone: null != n ? n : ""
      })
    });
    let [t, n] = s.Z.find(e => "United States" === e.name).phoneCountryCode.split(" ");
    this.state = {
      countryCode: t,
      phone: null != n ? n : "",
      open: false
    }
  }
}
let E = g