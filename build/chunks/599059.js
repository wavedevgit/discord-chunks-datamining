/** Chunk was on 97574 **/
r.d(t, {
  Z: () => c
}), r(47120);
var n = r(200651),
  l = r(192379),
  i = r(120356),
  a = r.n(i),
  o = r(981631),
  s = r(649755);

function h(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}
class c extends l.Component {
  componentDidUpdate(e, t) {
    if (t.focused !== this.state.focused && this.state.focused) {
      var r;
      null === (r = this.inputRef.current) || void 0 === r || r.focus()
    }
    null !== this.props.value && this.props.value !== e.value && this.props.value !== this.state.value && v(this.props.value, this.props, this.state) && this.setState({
      value: this.props.value
    })
  }
  render() {
    let e;
    let {
      className: t,
      name: r,
      autoComplete: l,
      maxLen: i,
      disabled: o
    } = this.props, h = {
      position: "absolute",
      left: 0,
      width: "100%",
      opacity: 1
    };
    return this.state.focused ? e = {
      visibility: "hidden",
      pointerEvents: "none"
    } : h.opacity = 0, (0, n.jsx)("div", {
      className: a()(s.outer, t),
      children: (0, n.jsxs)("div", {
        className: s.container,
        children: [(0, n.jsx)("input", {
          type: "text",
          className: s.input,
          ref: this.inputRef,
          style: h,
          value: this.state.value,
          name: r,
          maxLength: i,
          autoComplete: l,
          onKeyPress: this.handleKeyPress,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          disabled: o
        }), (0, n.jsx)("div", {
          className: s.input,
          style: e,
          children: this.state.value
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), h(this, "inputRef", l.createRef()), h(this, "state", {
      focused: !1,
      lastGoodValue: this.props.value,
      value: this.props.value
    }), h(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      this.setState({
        value: e.currentTarget.value
      }), null == t || t(e)
    }), h(this, "handleFocus", e => {
      let {
        onFocus: t
      } = this.props;
      this.setState({
        focused: !0,
        lastGoodValue: e.currentTarget.value
      }), null == t || t(e)
    }), h(this, "handleBlur", e => {
      if (v("", this.props, this.state)) {
        this.setState({
          focused: !1
        });
        let {
          onBlur: t
        } = this.props;
        null == t || t(e)
      } else this.setState({
        focused: !1,
        value: this.state.lastGoodValue
      })
    }), h(this, "handleKeyPress", e => {
      if (e.which === o.yXg.ENTER) {
        var t;
        null === (t = this.inputRef.current) || void 0 === t || t.blur()
      }
    })
  }
}

function v() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    t = arguments.length > 1 ? arguments[1] : void 0,
    r = arguments.length > 2 ? arguments[2] : void 0,
    n = "" !== e ? e : null != r.value && "" !== r.value ? r.value : "";
  return (null == t.minLen || !(n.length < t.minLen)) && (null == t.maxLen || !(n.length > t.maxLen))
}