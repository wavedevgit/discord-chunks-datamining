/** Chunk was on web.js **/
/** chunk id: 939249, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => h
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk531142 = require("./531142.jsx"),
  Chunk426333 = require("./426333.js"),
  Chunk650583 = require("./650583.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = _(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
class h extends(r = Chunk64700.Component) {
  renderNonInteractive() {
    let e = this.props,
      {
        tag: t,
        focusProps: n,
        innerRef: r,
        onClick: i,
        role: s,
        tabIndex: o,
        ignoreKeyPress: l
      } = e,
      c = p(e, ["tag", "focusProps", "innerRef", "onClick", "role", "tabIndex", "ignoreKeyPress"]);
    return a.createElement(t, u({
      ref: this.setRef
    }, c))
  }
  renderInner() {
    let e = this.props,
      {
        tag: t,
        onClick: n,
        className: r,
        children: i,
        focusProps: s,
        innerRef: o,
        ignoreKeyPress: l
      } = e,
      c = p(e, ["tag", "onClick", "className", "children", "focusProps", "innerRef", "ignoreKeyPress"]);
    return null == n ? a.createElement(t, u({
      ref: this.setRef,
      className: r
    }, c), i) : a.createElement(t, u({
      onClick: n,
      ref: this.setRef,
      onKeyPress: this.handleKeyPress,
      className: r
    }, c), i)
  }
  render() {
    return this.context ? this.renderNonInteractive() : (0, i.jsx)(o.vN, f(u({}, this.props.focusProps), {
      children: this.renderInner()
    }))
  }
  constructor(...e) {
    super(...e), c(this, "ref", true), c(this, "handleKeyPress", e => {
      let {
        onClick: t,
        href: n,
        onKeyPress: r,
        ignoreKeyPress: i
      } = this.props;
      e.repeat || (i || null == t || null == this.ref || e.key !== l.dh.SPACE && e.key !== l.dh.ENTER || (null == n && e.preventDefault(), null == this.ref.click ? t(e) : this.ref.click()), null != r && r(e))
    }), c(this, "setRef", e => {
      this.ref = e;
      let {
        innerRef: t
      } = this.props;
      null != t && ("function" == typeof t ? t(e) : t.hasOwnProperty("current") && (t.current = e))
    })
  }
}
c(h, "contextType", Chunk531142.g), c(h, "defaultProps", {
  tag: "div",
  role: "button",
  tabIndex: 0
})