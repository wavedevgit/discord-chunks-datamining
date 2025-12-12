/** Chunk was on web.js **/
/** chunk id: 834427, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => c
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = "file-input",
  l = e => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: e ? "not-allowed" : "pointer",
    fontSize: 0
  });
class c extends(r = Chunk473749.Component) {
  render() {
    let {
      disabled: e,
      tabIndex: t,
      className: n,
      name: r,
      "aria-label": a,
      "aria-hidden": o,
      id: c
    } = this.props, u = "";
    return this.props.filters && (u = this.props.filters.map(e => e.extensions.map(e => ".".concat(e)).join(",")).join(",")), (0, Chunk54381.jsx)("input", {
      id: c,
      style: l(module),
      className: require || s,
      disabled: module,
      type: "file",
      tabIndex: exports,
      onMouseDown: this.handleBrowserInputMouseDown,
      onChange: this.props.onChange,
      onClick: this.props.onClick,
      multiple: this.props.multiple,
      accept: u,
      name: r,
      "aria-label": Chunk473749,
      "aria-hidden": o || true,
      ref: e => {
        this._input = e
      },
      title: this.props.title
    })
  }
  constructor(...e) {
    super(...e), o(this, "_input", null), o(this, "activateUploadDialogue", () => {
      this._input && this._input.click()
    }), o(this, "handleNativeClick", () => {
      this.props.handleNativeClick && this.props.handleNativeClick(this.props)
    }), o(this, "handleNativeKeyDown", e => {
      (" " === e.key || "Enter" === e.key) && this.handleNativeClick()
    }), o(this, "handleBrowserInputMouseDown", e => {
      e.currentTarget.value = null
    })
  }
}
o(c, "defaultProps", {
  multiple: false,
  disabled: false,
  tabIndex: 0
})