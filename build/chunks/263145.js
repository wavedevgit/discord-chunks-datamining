/** Chunk was on 59256 **/
n.d(t, {
  Z: () => p
});
var r = n(255367),
  o = n(73800),
  l = n(120356),
  s = n.n(l),
  a = n(600164),
  i = n(930223),
  c = n(20493);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class u extends o.PureComponent {
  render() {
    let {
      focused: e
    } = this.state, {
      value: t,
      placeholder: n,
      error: o,
      className: l,
      maxLength: d,
      autoFocus: u,
      prefix: p,
      disabled: m
    } = this.props;
    return (0, r.jsxs)(a.Z, {
      align: a.Z.Align.CENTER,
      justify: a.Z.Justify.START,
      className: s()(i.prefixInput, l, {
        [i.focused]: e,
        [i.error]: o
      }),
      onClick: this.handleFocusInput,
      children: [(0, r.jsx)(a.Z.Child, {
        grow: 0,
        className: i.prefixInputPrefix,
        children: (0, r.jsx)("span", {
          children: p
        })
      }), (0, r.jsx)(a.Z.Child, {
        className: c.marginReset,
        children: (0, r.jsx)("input", {
          ref: this.setInputRef,
          className: i.prefixInputInput,
          value: t,
          placeholder: n,
          maxLength: d,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          autoFocus: u,
          disabled: m
        })
      })]
    })
  }
  constructor(e) {
    super(e), d(this, "_inputRef", void 0), d(this, "setInputRef", e => {
      this._inputRef = e
    }), d(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      t(e.currentTarget.value)
    }), d(this, "handleFocus", () => {
      this.setState({
        focused: !0
      })
    }), d(this, "handleBlur", () => {
      this.setState({
        focused: !1
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
let p = u