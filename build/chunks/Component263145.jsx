/** Chunk was on 59256 **/
/** chunk id: 263145, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk600164 = require("./600164.jsx"),
  Chunk200245 = require("./200245.js"),
  Chunk881488 = require("./881488.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk73800.PureComponent {
  render() {
    let {
      focused: e
    } = this.state, {
      value: t,
      placeholder: n,
      error: o,
      className: l,
      maxLength: u,
      autoFocus: d,
      prefix: p,
      disabled: f
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk600164.Z, {
      align: Chunk600164.Z.Align.CENTER,
      justify: Chunk600164.Z.Justify.START,
      className: a()(Chunk200245.prefixInput, Chunk120356, {
        [Chunk200245.focused]: module,
        [Chunk200245.error]: Chunk73800
      }),
      onClick: this.handleFocusInput,
      children: [(0, Chunk255367.jsx)(Chunk600164.Z.Child, {
        grow: 0,
        className: Chunk200245.prefixInputPrefix,
        children: (0, Chunk255367.jsx)("span", {
          children: p
        })
      }), (0, Chunk255367.jsx)(Chunk600164.Z.Child, {
        className: Chunk881488.marginReset,
        children: (0, Chunk255367.jsx)("input", {
          ref: this.setInputRef,
          className: Chunk200245.prefixInputInput,
          value: exports,
          placeholder: require,
          maxLength: u,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          autoFocus: d,
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
let p = d