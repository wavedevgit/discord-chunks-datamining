/** Chunk was on web.js **/
/** chunk id: 485078, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var i = require("./65183.js").List,
  o = ".";

function a(e, t, n) {
  for (var r = t; r < n; r++)
    if (null != e[r]) returnfalse;
  returntrue
}

function s(e, t, n, r) {
  for (var i = t; i < n; i++) e[i] = r
}
module.exports = function() {
  function e(e) {
    r(this, "_decorators", true), this._decorators = e.slice()
  }
  var t = module.prototype;
  return exports.getDecorations = function(e, t) {
    var n = Array(e.getText().length).fill(null);
    return this._decorators.forEach(function(r, i) {
      var l = 0;
      (0, r.strategy)(e, function(e, t) {
        a(n, e, t) && (s(n, e, t, i + o + l), l++)
      }, t)
    }), i(n)
  }, exports.getComponentForKey = function(e) {
    var t = parseInt(e.split(o)[0], 10);
    return this._decorators[t].component
  }, exports.getPropsForKey = function(e) {
    var t = parseInt(e.split(o)[0], 10);
    return this._decorators[t].props
  }, module
}()