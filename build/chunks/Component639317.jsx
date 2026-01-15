/** Chunk was on web.js **/
/** chunk id: 639317, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  g: () => y
});
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk58654 = require("./58654.js"),
  Chunk793030 = require("./793030.js"),
  Chunk164701 = require("./164701.js");

function f(e, t, n) {
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
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let E = "\n  visibility:hidden;\n  overflow:hidden;\n  position:absolute;\n  z-index:-1000;\n  top:0;\n  right:0;\n",
  b = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-transform", "width", "padding-left", "padding-right", "border-width", "box-sizing"];
class y extends(i = Chunk473749.PureComponent) {
  componentDidMount() {
    var e, t;
    null == (e = (t = this.props).onResize) || e.call(t, true), Promise.resolve().then(() => this.calculateSize())
  }
  componentDidUpdate(e, t) {
    if (this.state.height !== t.height) {
      let {
        onResize: e
      } = this.props;
      null == e || e(this.state.height)
    }
    e.value !== this.props.value && Promise.resolve().then(() => this.calculateSize())
  }
  calculateSize() {
    var e;
    let t = this._textArea;
    if (null == t) return;
    let {
      fontWidthEstimate: n,
      rows: i
    } = this.props, a = null != (e = this.props.value) ? e : t.value;
    if (null != n && false === a.indexOf("\n") && a.length * n < .8 * t.offsetWidth) return void this.setState({
      height: true
    });
    null == r && null != document.body && (r = document.createElement("textarea"), document.body.appendChild(r));
    let {
      paddingSize: o,
      borderSize: s,
      boxSizing: l,
      sizingStyle: c
    } = this.calculateNodeStyling(t);
    r.setAttribute("style", c + ";" + E), r.value = a, null != i ? r.setAttribute("rows", "".concat(i)) : r.removeAttribute("rows");
    let u = r.scrollHeight;
    "border-box" === l ? u += s : "content-box" === l && (u -= o), this.setState({
      height: u
    })
  }
  calculateNodeStyling(e) {
    let t = window.getComputedStyle(e),
      n = (0, c.L)(t.getPropertyValue("box-sizing"), t.getPropertyValue("-moz-box-sizing"), t.getPropertyValue("-webkit-box-sizing")),
      r = parseFloat(t.getPropertyValue("padding-bottom")) + parseFloat(t.getPropertyValue("padding-top")),
      i = parseFloat(t.getPropertyValue("border-bottom-width")) + parseFloat(t.getPropertyValue("border-top-width"));
    return {
      sizingStyle: b.map(e => "".concat(e, ":").concat(t.getPropertyValue(e))).join(";"),
      paddingSize: r,
      borderSize: i,
      boxSizing: n
    }
  }
  clear() {
    null != this._textArea && (this._textArea.value = ""), this.calculateSize()
  }
  blur() {
    let {
      _textArea: e
    } = this;
    null != e && e.blur()
  }
  focus() {
    let {
      _textArea: e
    } = this;
    null != e && e.focus()
  }
  setSelection(e, t) {
    null != this._textArea && (this._textArea.selectionStart = e, this._textArea.selectionEnd = t)
  }
  get selectionStart() {
    var e, t;
    return null != (t = null == (e = this._textArea) ? true : e.selectionStart) ? t : 0
  }
  get selectionEnd() {
    var e, t;
    return null != (t = null == (e = this._textArea) ? true : e.selectionEnd) ? t : 0
  }
  get value() {
    var e, t;
    return null != (t = null == (e = this._textArea) ? true : e.value) ? t : ""
  }
  render() {
    let e = this.props,
      {
        style: t,
        className: n,
        onResize: r
      } = e,
      i = m(e, ["style", "className", "onResize"]);
    delete i.fontWidthEstimate;
    let o = p({}, this.state, t);
    return (0, a.jsx)(u.tEY, {
      children: (0, a.jsx)("textarea", h(p({}, i), {
        className: l()(n, d.scrollbarGhostHairline),
        ref: this.handleSetRef,
        style: o,
        onChange: this.handleChange
      }))
    })
  }
  constructor(e) {
    super(e), f(this, "_textArea", true), f(this, "handleSetRef", e => {
      this._textArea = e
    }), f(this, "handleChange", e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e), this.calculateSize()
    }), this.state = {
      height: true
    }
  }
}
f(y, "defaultProps", {
  autoFocus: false,
  disabled: false,
  autoCorrect: "off"
})