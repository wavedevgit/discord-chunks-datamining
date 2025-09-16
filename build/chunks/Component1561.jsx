/** Chunk was on web.js **/
/** chunk id: 1561, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => p
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
class p extends(r = Chunk647438.Component) {
  renderNonInteractive() {
    let e = this.props,
      {
        tag: t,
        focusProps: n,
        innerRef: r,
        onClick: i,
        role: o,
        tabIndex: s,
        ignoreKeyPress: l
      } = module,
      u = f(module, ["tag", "focusProps", "innerRef", "onClick", "role", "tabIndex", "ignoreKeyPress"]);
    return Chunk647438.createElement(exports, c({
      ref: this.setRef
    }, u))
  }
  renderInner() {
    let e = this.props,
      {
        tag: t,
        onClick: n,
        className: r,
        children: i,
        focusProps: o,
        innerRef: s,
        ignoreKeyPress: l
      } = module,
      u = f(module, ["tag", "onClick", "className", "children", "focusProps", "innerRef", "ignoreKeyPress"]);
    return null == require ? Chunk647438.createElement(exports, c({
      ref: this.setRef,
      className: r
    }, u), Chunk951288) : Chunk647438.createElement(exports, c({
      onClick: require,
      ref: this.setRef,
      onKeyPress: this.handleKeyPress,
      className: r
    }, u), Chunk951288)
  }
  render() {
    return this.context ? this.renderNonInteractive() : (0, Chunk951288.jsx)(Chunk793030.tEY, d(c({}, this.props.focusProps), {
      children: this.renderInner()
    }))
  }
  constructor(...e) {
    super(...e), l(this, "ref", true), l(this, "handleKeyPress", e => {
      let {
        onClick: t,
        href: n,
        onKeyPress: r,
        ignoreKeyPress: i
      } = this.props;
      e.repeat || (i || null == t || null == this.ref || e.charCode !== s.yXg.SPACE && e.charCode !== s.yXg.ENTER || (null == n && e.preventDefault(), null == this.ref.click ? t(e) : this.ref.click()), null != r && r(e))
    }), l(this, "setRef", e => {
      this.ref = e;
      let {
        innerRef: t
      } = this.props;
      null != t && ("function" == typeof t ? t(e) : t.hasOwnProperty("current") && (t.current = e))
    })
  }
}
l(p, "contextType", Chunk793030.g$b), l(p, "defaultProps", {
  tag: "div",
  role: "button",
  tabIndex: 0
})