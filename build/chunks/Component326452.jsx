/** Chunk was on web.js **/
/** chunk id: 326452, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => b
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk84735 = require("./84735.js"),
  Chunk481060 = require("./481060.js"),
  Chunk532425 = require("./532425.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk196909 = require("./196909.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
class b extends(r = Chunk647438.PureComponent) {
  focus() {
    let {
      current: e
    } = this.inputRef;
    null == module || module.focus()
  }
  blur() {
    let {
      current: e
    } = this.inputRef;
    null == module || module.blur()
  }
  render() {
    let e = this.props,
      {
        query: t,
        autoFocus: n,
        onClear: r,
        className: a,
        placeholder: o = Chunk388032.intl.string(Chunk388032.t["5h0QOD"]),
        onKeyDown: _,
        isLoading: h,
        size: E,
        disabled: b,
        onChange: y,
        onBlur: O,
        onFocus: v,
        autoComplete: I,
        inputProps: S,
        "aria-label": T = Chunk388032.intl.string(Chunk388032.t["5h0QOD"])
      } = module,
      A = g(module, ["query", "autoFocus", "onClear", "className", "placeholder", "onKeyDown", "isLoading", "size", "disabled", "onChange", "onBlur", "onFocus", "autoComplete", "inputProps", "aria-label"]),
      C = (0, Chunk951288.jsx)(Chunk532425.B, {
        size: E,
        hasContent: exports.length > 0,
        onClear: r,
        isLoading: h
      });
    return null == Chunk647438 ? (0, Chunk951288.jsx)(Chunk481060.oil, m(p({}, S), {
      onFocus: v,
      onBlur: O,
      value: exports,
      onChange: y,
      onKeyDown: _,
      placeholder: Chunk120356,
      disabled: b,
      autoFocus: require,
      autoComplete: I,
      "aria-label": T,
      inputRef: this.inputRef,
      leading: Chunk481060._Ve,
      clearable: null != r,
      size: E,
      fullWidth: true
    })) : (0, Chunk951288.jsx)(Chunk84735.t, {
      focusTarget: this.inputRef,
      ringTarget: this.containerRef,
      children: (0, Chunk951288.jsx)("div", m(p({
        className: s()(Chunk647438, Chunk196909.container, Chunk196909.wrapper, Chunk196909[E], {
          [Chunk196909.disabled]: b
        }),
        ref: this.containerRef
      }, A), {
        children: (0, Chunk951288.jsxs)("div", {
          className: Chunk196909.inner,
          children: [(0, Chunk951288.jsx)("input", m(p({}, S), {
            onFocus: v,
            onBlur: O,
            className: Chunk196909.input,
            value: exports,
            onChange: this.handleOnChange,
            onKeyDown: _,
            placeholder: Chunk120356,
            disabled: b,
            autoFocus: require,
            autoComplete: I,
            "aria-label": T,
            ref: this.inputRef
          })), C]
        })
      }))
    })
  }
  constructor(...e) {
    super(...e), _(this, "inputRef", a.createRef()), _(this, "containerRef", a.createRef()), _(this, "handleOnChange", e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e.currentTarget.value)
    })
  }
}
_(b, "defaultProps", {
  size: "md",
  isLoading: false,
  disabled: false
})