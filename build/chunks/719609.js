/** Chunk was on 38939 **/
/** chunk id: 719609, original params: t,e,r (module,exports,require) **/
"use strict";

function n(t) {
  if (true === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t
}

function i(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = r, t
}
var Chunk64700 = require("./64700.js"),
  Chunk573750 = require("./573750.js"),
  Chunk797686 = require("./797686.js"),
  Chunk494277 = require("./494277.js"),
  c = Chunk573750.isBrowser("IE <= 11");
module.exports = function(t) {
  function e(e) {
    var r;
    return i(n(r = t.call(this, e) || this), "_forceFlag", true), i(n(r), "_node", true), r._forceFlag = false, r
  }
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  var r = e.prototype;
  return r.shouldComponentUpdate = function(t) {
    var e = this._node,
      r = "" === t.children;
    return (u(e) || s(false), r) ? c ? "\n" !== e.textContent : "BR" !== e.tagName : e.textContent !== t.children
  }, r.componentDidMount = function() {
    this._forceFlag = !this._forceFlag
  }, r.componentDidUpdate = function() {
    this._forceFlag = !this._forceFlag
  }, r.render = function() {
    var t, e, r = this;
    return "" === this.props.children ? this._forceFlag ? (t = function(t) {
      return r._node = t
    }, c ? o.createElement("span", {
      key: "A",
      "data-text": "true",
      ref: t
    }, "\n") : o.createElement("br", {
      key: "A",
      "data-text": "true",
      ref: t
    })) : (e = function(t) {
      return r._node = t
    }, c ? o.createElement("span", {
      key: "B",
      "data-text": "true",
      ref: e
    }, "\n") : o.createElement("br", {
      key: "B",
      "data-text": "true",
      ref: e
    })) : o.createElement("span", {
      key: this._forceFlag ? "A" : "B",
      "data-text": "true",
      ref: function(t) {
        return r._node = t
      }
    }, this.props.children)
  }, e
}(Chunk64700.Component)