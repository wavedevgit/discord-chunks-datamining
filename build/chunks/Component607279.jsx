/** Chunk was on web.js **/
/** chunk id: 607279, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk319719 = require("./319719.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}
let p = 100,
  h = "search";
class m extends(r = Chunk647438.Component) {
  render() {
    let {
      autoFocus: e,
      label: t,
      placeholder: n,
      searchTerm: r,
      inputClassName: a,
      className: o,
      onChange: f,
      onFocus: _,
      onBlur: m,
      onKeyPress: g,
      autoComplete: E,
      forwardedRef: b,
      closeIconClassName: y,
      searchIconClassName: O,
      cta: v
    } = this.props, I = null != r && r.length > 0, T = null != b ? b : this._textInputRef;
    return (0, Chunk951288.jsx)(Chunk481060.tEY, {
      focusTarget: T,
      ringTarget: this._containerRef,
      children: (0, Chunk951288.jsxs)("div", {
        className: s()(Chunk319719.searchBox, Chunk120356),
        ref: this._containerRef,
        children: [(0, Chunk951288.jsx)(Chunk755721.Is, {
          inputRef: T,
          focusProps: {
            enabled: false
          },
          name: h,
          maxLength: p,
          className: Chunk319719.searchBoxInputWrapper,
          inputClassName: s()(Chunk319719.searchBoxInput, Chunk647438),
          onChange: f,
          onFocus: _,
          onBlur: m,
          onKeyPress: g,
          value: I ? r : "",
          placeholder: require,
          autoFocus: module,
          "aria-label": exports,
          autoComplete: E ? "on" : "off"
        }), null != v ? (0, Chunk951288.jsx)(Chunk481060.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: Chunk319719.cta,
          children: v
        }) : null, I ? (0, Chunk951288.jsx)(Chunk481060.P3F, {
          onClick: this.handleClear,
          className: Chunk319719.clear,
          "aria-label": Chunk388032.intl.string(Chunk388032.t["78fJND"]),
          children: (0, Chunk951288.jsx)(Chunk481060.k$p, {
            size: "md",
            color: "currentColor",
            className: s()(Chunk319719.clearIcon, y)
          })
        }) : (0, Chunk951288.jsx)(Chunk481060._Ve, {
          size: "md",
          color: "currentColor",
          className: s()(Chunk319719.searchIcon, O),
          "aria-label": Chunk388032.intl.string(Chunk388032.t["5h0QOD"])
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), f(this, "_textInputRef", a.createRef()), f(this, "_containerRef", a.createRef()), f(this, "handleClear", () => {
      let {
        onClear: e,
        forwardedRef: t
      } = this.props, {
        current: n
      } = null != t ? t : this._textInputRef;
      null != n && n.focus(), null != e && e()
    })
  }
}
f(m, "defaultProps", {
  autoComplete: false
});
let g = Chunk647438.forwardRef((e, t) => (0, i.jsx)(m, _({
  forwardedRef: t
}, e)))