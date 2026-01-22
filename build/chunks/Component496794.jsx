/** Chunk was on web.js **/
/** chunk id: 496794, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk34006 = require("./34006.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = /[^0-9]/g;
class f extends Chunk64700.PureComponent {
  componentDidUpdate(e) {
    let t = this._inputRef;
    e.value !== this.props.value && null != t && t.setSelectionRange(this.selectionStart, this.selectionStart)
  }
  render() {
    return (0, r.jsx)(a.ksK, u(l({}, this.props), {
      inputMode: "numeric",
      onChange: this.handleChange,
      inputRef: this.setRef
    }))
  }
  constructor(...e) {
    super(...e), o(this, "_inputRef", true), o(this, "selectionStart", 0), o(this, "setRef", e => {
      let {
        inputRef: t
      } = this.props;
      this._inputRef = e, null != t && t(e)
    }), o(this, "handleChange", (e, t) => {
      let {
        value: n,
        onChange: r
      } = this.props, i = this._inputRef;
      if (e === n || null == i || null == n) return;
      let a = (0, s.N)(e),
        o = i.selectionStart;
      a === n && a.length <= 3 && n.includes("/") && !e.includes("/") ? a = a.replace(d, "") : a === n && e.includes("/") && !n.includes("/") && (a += "/"), a.length > e.length && (o += a.length - e.length), this.selectionStart = o, null != r && r(a, t)
    })
  }
}
let p = f