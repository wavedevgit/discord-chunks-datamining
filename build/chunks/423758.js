/** Chunk was on 38939 **/
/** chunk id: 423758, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk724039 = require("./724039.js"),
  Chunk719609 = require("./719609.js"),
  Chunk64700 = require("./64700.js"),
  Chunk797686 = require("./797686.js"),
  Chunk882586 = require("./882586.js"),
  u = require("./439145.js").setDraftEditorSelection;
module.exports = function(t) {
  function e() {
    for (var e, r, n, i, o = arguments.length, a = Array(o), s = 0; s < o; s++) a[s] = arguments[s];
    return r = function(t) {
      if (true === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(e = t.call.apply(t, [this].concat(a)) || this), i = true, (n = "leaf") in r ? Object.defineProperty(r, n, {
      value: i,
      enumerable: true,
      configurable: true,
      writable: true
    }) : r[n] = i, e
  }
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  var r = e.prototype;
  return r._setSelection = function() {
    var t, e = this.props.selection;
    if (null != e && e.getHasFocus()) {
      var r = this.props,
        n = r.block,
        i = r.start,
        o = r.text,
        c = n.getKey(),
        l = i + o.length;
      if (e.hasEdgeWithin(c, i, l)) {
        var f = this.leaf;
        f || a(false);
        var p = f.firstChild;
        p || a(false), p.nodeType === Node.TEXT_NODE ? t = p : s(p) ? t = f : (t = p.firstChild) || a(false), u(e, t, c, i, l)
      }
    }
  }, r.shouldComponentUpdate = function(t) {
    var e = this.leaf;
    return e || a(false), e.textContent !== t.text || t.styleSet !== this.props.styleSet || t.forceSelection
  }, r.componentDidUpdate = function() {
    this._setSelection()
  }, r.componentDidMount = function() {
    this._setSelection()
  }, r.render = function() {
    var t = this,
      e = this.props.block,
      r = this.props.text;
    r.endsWith("\n") && this.props.isLast && (r += "\n");
    var a = this.props,
      s = a.customStyleMap,
      u = a.customStyleFn,
      c = a.offsetKey,
      l = a.styleSet,
      f = l.reduce(function(t, e) {
        var r = {},
          i = s[e];
        return true !== i && t.textDecoration !== i.textDecoration && (r.textDecoration = [t.textDecoration, i.textDecoration].join(" ").trim()), n(t, i, r)
      }, {});
    return u && (f = n(f, u(l, e))), o.createElement("span", {
      "data-offset-key": c,
      ref: function(e) {
        return t.leaf = e
      },
      style: f
    }, o.createElement(i, null, r))
  }, e
}(Chunk64700.Component)