/** Chunk was on 47841 **/
/** chunk id: 971251, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk652215 = require("./652215.js"),
  Chunk992415 = require("./992415.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk64700.Component {
  componentDidUpdate(e, t) {
    if (t.focused !== this.state.focused && this.state.focused) {
      var n;
      null == (n = this.inputRef.current) || n.focus()
    }
    null !== this.props.value && this.props.value !== e.value && this.props.value !== this.state.value && u(this.props.value, this.props, this.state) && this.setState({
      value: this.props.value
    })
  }
  render() {
    let e, {
        className: t,
        name: n,
        autoComplete: i,
        maxLen: l,
        disabled: a
      } = this.props,
      c = {
        position: "absolute",
        left: 0,
        width: "100%",
        opacity: 1
      };
    return this.state.focused ? e = {
      visibility: "hidden",
      pointerEvents: "none"
    } : c.opacity = 0, (0, r.jsx)("div", {
      className: s()(o.A7, t),
      children: (0, r.jsxs)("div", {
        className: o.kL,
        children: [(0, r.jsx)("input", {
          type: "text",
          className: o.hF,
          ref: this.inputRef,
          style: c,
          value: this.state.value,
          name: n,
          maxLength: l,
          autoComplete: i,
          onKeyPress: this.handleKeyPress,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onMouseEnter: this.handleMouseEnter,
          disabled: a
        }), (0, r.jsx)("div", {
          className: o.hF,
          style: e,
          children: this.state.value
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), c(this, "inputRef", i.createRef()), c(this, "state", {
      focused: false,
      lastGoodValue: this.props.value,
      value: this.props.value
    }), c(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      this.setState({
        value: e.currentTarget.value
      }), null == t || t(e)
    }), c(this, "handleFocus", e => {
      let {
        onFocus: t
      } = this.props;
      this.setState({
        focused: true,
        lastGoodValue: e.currentTarget.value
      }), null == t || t(e)
    }), c(this, "handleBlur", e => {
      if (u("", this.props, this.state)) {
        this.setState({
          focused: false
        });
        let {
          onBlur: t
        } = this.props;
        null == t || t(e)
      } else this.setState({
        focused: false,
        value: this.state.lastGoodValue
      })
    }), c(this, "handleMouseEnter", e => {
      let {
        onMouseEnter: t
      } = this.props;
      null == t || t(e)
    }), c(this, "handleKeyPress", e => {
      if (e.which === a.Ks6.ENTER) {
        var t;
        null == (t = this.inputRef.current) || t.blur()
      }
    })
  }
}

function u() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "",
    t = arguments.length > 1 ? arguments[1] : true,
    n = arguments.length > 2 ? arguments[2] : true,
    r = "" !== e ? e : null != n.value && "" !== n.value ? n.value : "";
  return (null == t.minLen || !(r.length < t.minLen)) && (null == t.maxLen || !(r.length > t.maxLen))
}