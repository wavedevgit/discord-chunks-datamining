/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => u
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(600164),
  o = n(334442),
  c = n(802138);

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class d extends i.PureComponent {
  render() {
    let {
      focused: e
    } = this.state, {
      value: t,
      placeholder: n,
      error: i,
      className: s,
      maxLength: A,
      autoFocus: d,
      prefix: u,
      disabled: g
    } = this.props;
    return (0, r.jsxs)(l.Z, {
      align: l.Z.Align.CENTER,
      justify: l.Z.Justify.START,
      className: a()(o.prefixInput, s, {
        [o.focused]: e,
        [o.error]: i
      }),
      onClick: this.handleFocusInput,
      children: [(0, r.jsx)(l.Z.Child, {
        grow: 0,
        className: o.prefixInputPrefix,
        children: u
      }), (0, r.jsx)(l.Z.Child, {
        className: c.marginReset,
        children: (0, r.jsx)("input", {
          ref: this.setInputRef,
          className: o.prefixInputInput,
          value: t,
          placeholder: n,
          maxLength: A,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          autoFocus: d,
          disabled: g
        })
      })]
    })
  }
  constructor(e) {
    super(e), A(this, "_inputRef", void 0), A(this, "setInputRef", e => {
      this._inputRef = e
    }), A(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      t(e.currentTarget.value)
    }), A(this, "handleFocus", () => {
      this.setState({
        focused: !0
      })
    }), A(this, "handleBlur", () => {
      this.setState({
        focused: !1
      })
    }), A(this, "handleFocusInput", () => {
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
let u = d