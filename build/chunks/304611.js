/** Chunk was on 91584 **/
/** chunk id: 304611, original params: t (module,exports,require) **/
"use strict";

function e(t) {
  return function() {
    return t
  }
}
var r = function() {};
r.thatReturns = e, r.thatReturnsFalse = e(false), r.thatReturnsTrue = e(true), r.thatReturnsNull = e(null), r.thatReturnsThis = function() {
  return this
}, r.thatReturnsArgument = function(t) {
  return t
}, module.exports = r