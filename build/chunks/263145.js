/** Chunk was on 59256 **/
n.d(t, {
  Z: () => p
});
var r = n(255367),
  o = n(73800),
  l = n(120356),
  a = n.n(l),
  s = n(600164),
  i = n(930223),
  c = n(20493);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class d extends o.PureComponent {
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
    return (0, r.jsxs)(s.Z, {
      align: s.Z.Align.CENTER,
      justify: s.Z.Justify.START,
      className: a()(i.prefixInput, l, {
        [i.focused]: e,
        [i.error]: o
      }),
      onClick: this.handleFocusInput,
      children: [(0, r.jsx)(s.Z.Child, {
        grow: 0,
        className: i.prefixInputPrefix,
        children: (0, r.jsx)("span", {
          children: p
        })
      }), (0, r.jsx)(s.Z.Child, {
        className: c.marginReset,
        children: (0, r.jsx)("input", {
          ref: this.setInputRef,
          className: i.prefixInputInput,
          value: t,
          placeholder: n,
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
    super(e), u(this, "_inputRef", void 0), u(this, "setInputRef", e => {
      this._inputRef = e
    }), u(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      t(e.currentTarget.value)
    }), u(this, "handleFocus", () => {
      this.setState({
        focused: !0
      })
    }), u(this, "handleBlur", () => {
      this.setState({
        focused: !1
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