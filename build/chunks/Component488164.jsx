/** Chunk was on web.js **/
/** chunk id: 488164, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => _
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  a = require.n(Chunk658722),
  Chunk481060 = require("./481060.js"),
  Chunk683976 = require("./683976.jsx");

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
class _ extends Chunk647438.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      popoutProps: n,
      renderValue: i,
      className: o
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk481060.yRy, f(u({
      targetElementRef: this.ref
    }, require), {
      renderPopout: this.renderPopout,
      children: n => (0, r.jsx)(s.P3F, f(u({
        innerRef: this.ref
      }, n), {
        className: o,
        children: (0, r.jsx)(l.F, {
          label: e,
          value: t,
          renderValue: i
        })
      }))
    }))
  }
  constructor(...e) {
    super(...e), c(this, "ref", i.createRef()), c(this, "renderItems", e => {
      let {
        items: t,
        renderItem: n
      } = this.props;
      return t.reduce((t, r, i) => (a()(e.toLowerCase(), r.label.toLowerCase()) && t.push(n(r, i)), t), [])
    }), c(this, "renderPopout", e => {
      let {
        closePopout: t
      } = e, {
        placeholder: n,
        popoutClassName: i,
        onChange: o,
        value: a
      } = this.props;
      return (0, r.jsx)(s.DBG, {
        className: i,
        placeholder: n,
        value: new Set([a.value]),
        onChange: o,
        onClose: t,
        showScrollbar: true,
        children: e => this.renderItems(e)
      })
    })
  }
}