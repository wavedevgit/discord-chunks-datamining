/** Chunk was on web.js **/
/** chunk id: 719609, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  if (true === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function i(e, t) {
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
var Chunk64700 = require("./64700.js"),
  Chunk573750 = require("./573750.js"),
  Chunk797686 = require("./797686.js"),
  Chunk494277 = require("./494277.js"),
  u = Chunk573750.isBrowser("IE <= 11");

function d(e) {
  return u ? "\n" === e.textContent : "BR" === e.tagName
}
var f = function(e) {
    return u ? s.createElement("span", {
      key: "A",
      "data-text": "true",
      ref: e
    }, "\n") : s.createElement("br", {
      key: "A",
      "data-text": "true",
      ref: e
    })
  },
  p = function(e) {
    return u ? s.createElement("span", {
      key: "B",
      "data-text": "true",
      ref: e
    }, "\n") : s.createElement("br", {
      key: "B",
      "data-text": "true",
      ref: e
    })
  };
module.exports = function(e) {
  function t(t) {
    var n;
    return a(r(n = e.call(this, t) || this), "_forceFlag", true), a(r(n), "_node", true), n._forceFlag = false, n
  }
  i(t, e);
  var n = t.prototype;
  return n.shouldComponentUpdate = function(e) {
    var t = this._node,
      n = "" === e.children;
    c(t) || l(false);
    var r = t;
    return n ? !d(r) : r.textContent !== e.children
  }, n.componentDidMount = function() {
    this._forceFlag = !this._forceFlag
  }, n.componentDidUpdate = function() {
    this._forceFlag = !this._forceFlag
  }, n.render = function() {
    var e = this;
    return "" === this.props.children ? this._forceFlag ? f(function(t) {
      return e._node = t
    }) : p(function(t) {
      return e._node = t
    }) : s.createElement("span", {
      key: this._forceFlag ? "A" : "B",
      "data-text": "true",
      ref: function(t) {
        return e._node = t
      }
    }, this.props.children)
  }, t
}(Chunk64700.Component)