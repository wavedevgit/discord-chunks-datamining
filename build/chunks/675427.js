/** Chunk was on web.js **/
/** chunk id: 675427, original params: e (module,exports,re quire) **/
"use strict";

function t(e) {
  return function() {
    return e
  }
}
var n = function() {};
n.thatReturns = t, n.thatReturnsFalse = t(false), n.thatReturnsTrue = t(true), n.thatReturnsNull = t(null), n.thatReturnsThis = function() {
  return this
}, n.thatReturnsArgument = function(e) {
  return e
}, module.exports = n