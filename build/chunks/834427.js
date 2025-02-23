/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  S: () => c
}), n(47120);
var r, i = n(200651),
  o = n(192379);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
class c extends(r = o.Component) {
  render() {
    let {
      disabled: e,
      tabIndex: t,
      className: n,
      name: r,
      "aria-label": o,
      "aria-hidden": a,
      id: c
    } = this.props;
    if (this.props.embedded) return (0, i.jsx)("div", {
      role: "button",
      style: l(e),
      className: n || s,
      tabIndex: t,
      onKeyDown: e ? void 0 : this.handleNativeKeyDown,
      onClick: e ? void 0 : this.handleNativeClick,
      "aria-disabled": e,
      "aria-label": o,
      "aria-hidden": a || void 0
    });
    {
      let u = "";
      return this.props.filters && (u = this.props.filters.map(e => e.extensions.map(e => ".".concat(e)).join(",")).join(",")), (0, i.jsx)("input", {
        id: c,
        style: l(e),
        className: n || s,
        disabled: e,
        type: "file",
        tabIndex: t,
        onMouseDown: this.handleBrowserInputMouseDown,
        onChange: this.props.onChange,
        multiple: this.props.multiple,
        accept: u,
        name: r,
        "aria-label": o,
        "aria-hidden": a || void 0,
        ref: e => this._input = e
      })
    }
  }
  constructor(...e) {
    super(...e), a(this, "_input", null), a(this, "activateUploadDialogue", () => {
      this.props.embedded ? this.handleNativeClick() : this._input && this._input.click()
    }), a(this, "handleNativeClick", () => {
      this.props.handleNativeClick && this.props.handleNativeClick(this.props)
    }), a(this, "handleNativeKeyDown", e => {
      (" " === e.key || "Enter" === e.key) && this.handleNativeClick()
    }), a(this, "handleBrowserInputMouseDown", e => {
      e.currentTarget.value = null
    })
  }
}
a(c, "defaultProps", {
  multiple: !1,
  disabled: !1,
  tabIndex: 0
})