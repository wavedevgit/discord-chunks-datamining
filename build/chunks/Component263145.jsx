/** Chunk was on 42926 **/
/** chunk id: 263145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk600164 = require("./600164.jsx"),
  Chunk433028 = require("./433028.js"),
  Chunk197571 = require("./197571.js");

function d(e, t, n) {
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
      error: s,
      className: i,
      maxLength: d,
      autoFocus: o,
      prefix: g,
      disabled: h
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk600164.Z, {
      align: Chunk600164.Z.Align.CENTER,
      justify: Chunk600164.Z.Justify.START,
      className: l()(Chunk433028.prefixInput, Chunk120356, {
        [Chunk433028.focused]: module,
        [Chunk433028.error]: Chunk647438
      }),
      onClick: this.handleFocusInput,
      children: [(0, Chunk951288.jsx)(Chunk600164.Z.Child, {
        grow: 0,
        className: Chunk433028.prefixInputPrefix,
        children: (0, Chunk951288.jsx)("span", {
          children: g
        })
      }), (0, Chunk951288.jsx)(Chunk600164.Z.Child, {
        className: Chunk197571.marginReset,
        children: (0, Chunk951288.jsx)("input", {
          ref: this.setInputRef,
          className: Chunk433028.prefixInputInput,
          value: exports,
          placeholder: require,
          maxLength: d,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          autoFocus: o,
          disabled: h
        })
      })]
    })
  }
  constructor(e) {
    super(e), d(this, "_inputRef", true), d(this, "setInputRef", e => {
      this._inputRef = e
    }), d(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      t(e.currentTarget.value)
    }), d(this, "handleFocus", () => {
      this.setState({
        focused: true
      })
    }), d(this, "handleBlur", () => {
      this.setState({
        focused: false
      })
    }), d(this, "handleFocusInput", () => {
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
let g = o