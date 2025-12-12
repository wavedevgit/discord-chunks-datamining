/** Chunk was on web.js **/
/** chunk id: 175469, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk381538 = require("./381538.js");

function i(e) {
  if (true === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function o(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var Chunk656968 = require("./656968.js"),
  Chunk473749 = require("./473749.js"),
  Chunk581079 = require("./581079.js"),
  Chunk139500 = require("./139500.js"),
  d = require("./751827.js").setDraftEditorSelection;
module.exports = function(e) {
  function t() {
    for (var t, n = arguments.length, r = Array(n), o = 0; o < n; o++) r[o] = arguments[o];
    return a(i(t = e.call.apply(e, [this].concat(r)) || this), "leaf", true), t
  }
  o(t, e);
  var n = t.prototype;
  return n._setSelection = function() {
    var e, t = this.props.selection;
    if (null != t && t.getHasFocus()) {
      var n = this.props,
        r = n.block,
        i = n.start,
        o = n.text,
        a = r.getKey(),
        s = i + o.length;
      if (t.hasEdgeWithin(a, i, s)) {
        var l = this.leaf;
        l || c(false);
        var f = l.firstChild;
        f || c(false), f.nodeType === Node.TEXT_NODE ? e = f : u(f) ? e = l : (e = f.firstChild) || c(false), d(t, e, a, i, s)
      }
    }
  }, n.shouldComponentUpdate = function(e) {
    var t = this.leaf;
    return t || c(false), t.textContent !== e.text || e.styleSet !== this.props.styleSet || e.forceSelection
  }, n.componentDidUpdate = function() {
    this._setSelection()
  }, n.componentDidMount = function() {
    this._setSelection()
  }, n.render = function() {
    var e = this,
      t = this.props.block,
      n = this.props.text;
    n.endsWith("\n") && this.props.isLast && (n += "\n");
    var i = this.props,
      o = i.customStyleMap,
      a = i.customStyleFn,
      c = i.offsetKey,
      u = i.styleSet,
      d = u.reduce(function(e, t) {
        var n = {},
          i = o[t];
        return true !== i && e.textDecoration !== i.textDecoration && (n.textDecoration = [e.textDecoration, i.textDecoration].join(" ").trim()), r(e, i, n)
      }, {});
    return a && (d = r(d, a(u, t))), l.createElement("span", {
      "data-offset-key": c,
      ref: function(t) {
        return e.leaf = t
      },
      style: d
    }, l.createElement(s, null, n))
  }, t
}(Chunk473749.Component)