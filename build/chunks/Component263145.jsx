/** Chunk was on 90746 **/
/** chunk id: 263145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk600164 = require("./600164.jsx"),
  Chunk158726 = require("./158726.js"),
  Chunk10198 = require("./10198.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o extends Chunk647438.PureComponent {
  render() {
    let {
      focused: e
    } = this.state, {
      value: t,
      placeholder: n,
      error: i,
      className: s,
      maxLength: u,
      autoFocus: o,
      prefix: h,
      disabled: f
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk600164.Z, {
      align: Chunk600164.Z.Align.CENTER,
      justify: Chunk600164.Z.Justify.START,
      className: l()(Chunk158726.prefixInput, Chunk120356, {
        [Chunk158726.focused]: module,
        [Chunk158726.error]: Chunk647438
      }),
      onClick: this.handleFocusInput,
      children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
        grow: 0,
        className: Chunk158726.prefixInputPrefix,
        children: (0, Chunk951288.jsx)("span", {
          children: h
        })
      }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
        className: Chunk10198.marginReset,
        children: (0, Chunk951288.jsx)("input", {
          ref: this.setInputRef,
          className: Chunk158726.prefixInputInput,
          value: exports,
          placeholder: require,
          maxLength: u,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          autoFocus: o,
          disabled: f
        })
      })]
    })
  }
  constructor(e) {
    super(e), u(this, "_inputRef", true), u(this, "setInputRef", e => {
      this._inputRef = e
    }), u(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      t(e.currentTarget.value)
    }), u(this, "handleFocus", () => {
      this.setState({
        focused: true
      })
    }), u(this, "handleBlur", () => {
      this.setState({
        focused: false
      })
    }), u(this, "handleFocusInput", () => {
      null != this._inputRef && this._inputRef.focus()
    });
    let {
      autoFocus: t
    } = this.props;
    this.state = {
      focused: null != t && t
    }
  }
}
let h = o