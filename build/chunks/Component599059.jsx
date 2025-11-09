/** Chunk was on 29679 **/
/** chunk id: 599059, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk981631 = require("./981631.js"),
  Chunk215764 = require("./215764.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class d extends Chunk647438.Component {
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
        disabled: s
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
    } : c.opacity = 0, (0, Chunk951288.jsx)("div", {
      className: a()(Chunk215764.outer, exports),
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk215764.container,
        children: [(0, Chunk951288.jsx)("input", {
          type: "text",
          className: Chunk215764.input,
          ref: this.inputRef,
          style: c,
          value: this.state.value,
          name: require,
          maxLength: Chunk120356,
          autoComplete: Chunk647438,
          onKeyPress: this.handleKeyPress,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onMouseEnter: this.handleMouseEnter,
          disabled: Chunk981631
        }), (0, Chunk951288.jsx)("div", {
          className: Chunk215764.input,
          style: module,
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
      if (e.which === s.yXg.ENTER) {
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
    r = "" !== module ? module : null != require.value && "" !== require.value ? require.value : "";
  return (null == exports.minLen || !(Chunk951288.length < exports.minLen)) && (null == exports.maxLen || !(Chunk951288.length > exports.maxLen))
}