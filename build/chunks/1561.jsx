/** Chunk was on web.js **/
/** chunk id: 1561, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => h
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk532712 = require("./532712.js"),
  Chunk84735 = require("./84735.js"),
  Chunk981631 = require("./981631.js");

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

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
class h extends(r = Chunk73800.Component) {
  renderNonInteractive() {
    let e = this.props,
      {
        tag: t,
        focusProps: n,
        innerRef: r,
        onClick: i,
        role: a,
        tabIndex: s,
        ignoreKeyPress: l
      } = module,
      c = _(module, ["tag", "focusProps", "innerRef", "onClick", "role", "tabIndex", "ignoreKeyPress"]);
    return Chunk73800.createElement(exports, u({
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
        focusProps: a,
        innerRef: s,
        ignoreKeyPress: l
      } = module,
      c = _(module, ["tag", "onClick", "className", "children", "focusProps", "innerRef", "ignoreKeyPress"]);
    return null == require ? Chunk73800.createElement(exports, u({
      ref: this.setRef,
      className: r
    }, c), Chunk255367) : Chunk73800.createElement(exports, u({
      onClick: require,
      ref: this.setRef,
      onKeyPress: this.handleKeyPress,
      className: r
    }, c), Chunk255367)
  }
  render() {
    return this.context ? this.renderNonInteractive() : <Chunk84735.t{...f(u({}, this.props.focusProps), {
      children: this.renderInner()
    })} />
  }
  constructor(...e) {
    super(...e), c(this, "ref", true), c(this, "handleKeyPress", e => {
      let {
        onClick: t,
        href: n,
        onKeyPress: r,
        ignoreKeyPress: i
      } = this.props;
      e.repeat || (i || null == t || null == this.ref || e.charCode !== l.yXg.SPACE && e.charCode !== l.yXg.ENTER || (null == n && e.preventDefault(), null == this.ref.click ? t(e) : this.ref.click()), null != r && r(e))
    }), c(this, "setRef", e => {
      this.ref = e;
      let {
        innerRef: t
      } = this.props;
      null != t && ("function" == typeof t ? t(e) : t.hasOwnProperty("current") && (t.current = e))
    })
  }
}
c(h, "contextType", Chunk532712.g), c(h, "defaultProps", {
  tag: "div",
  role: "button",
  tabIndex: 0
})