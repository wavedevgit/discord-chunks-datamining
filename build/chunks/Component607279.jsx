/** Chunk was on web.js **/
/** chunk id: 607279, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk449101 = require("./449101.js");

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
class m extends(r = Chunk73800.Component) {
  render() {
    let {
      autoFocus: e,
      label: t,
      placeholder: n,
      searchTerm: r,
      inputClassName: o,
      className: a,
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
    return (0, Chunk255367.jsx)(Chunk481060.tEY, {
      focusTarget: T,
      ringTarget: this._containerRef,
      children: (0, Chunk255367.jsxs)("div", {
        className: s()(Chunk449101.searchBox, Chunk120356),
        ref: this._containerRef,
        children: [(0, Chunk255367.jsx)(Chunk755721.Is, {
          inputRef: T,
          focusProps: {
            enabled: false
          },
          name: h,
          maxLength: p,
          className: Chunk449101.searchBoxInputWrapper,
          inputClassName: s()(Chunk449101.searchBoxInput, Chunk73800),
          onChange: f,
          onFocus: _,
          onBlur: m,
          onKeyPress: g,
          value: I ? r : "",
          placeholder: require,
          autoFocus: module,
          "aria-label": exports,
          autoComplete: E ? "on" : "off"
        }), null != v ? (0, Chunk255367.jsx)(Chunk481060.Text, {
          color: "text-muted",
          variant: "text-xs/normal",
          className: Chunk449101.cta,
          children: v
        }) : null, I ? (0, Chunk255367.jsx)(Chunk481060.P3F, {
          onClick: this.handleClear,
          className: Chunk449101.clear,
          "aria-label": Chunk388032.intl.string(Chunk388032.t["78fJND"]),
          children: (0, Chunk255367.jsx)(Chunk481060.k$p, {
            size: "md",
            color: "currentColor",
            className: s()(Chunk449101.clearIcon, y)
          })
        }) : (0, Chunk255367.jsx)(Chunk481060._Ve, {
          size: "md",
          color: "currentColor",
          className: s()(Chunk449101.searchIcon, O),
          "aria-label": Chunk388032.intl.string(Chunk388032.t["5h0QOD"])
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), f(this, "_textInputRef", o.createRef()), f(this, "_containerRef", o.createRef()), f(this, "handleClear", () => {
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
let g = Chunk73800.forwardRef((e, t) => (0, i.jsx)(m, _({
  forwardedRef: t
}, e)))