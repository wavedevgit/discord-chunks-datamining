/** Chunk was on 38939 **/
/** chunk id: 630678, original params: t,e,r (module,exports,require) **/
"use strict";
module.exports = function(t) {
  function e() {
    return t.apply(this, arguments) || this
  }
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  var r = e.prototype;
  return r.getType = function() {
    return this.get("type")
  }, r.getMutability = function() {
    return this.get("mutability")
  }, r.getData = function() {
    return this.get("data")
  }, e
}((0, require("./116740.js").Record)({
  type: "TOKEN",
  mutability: "IMMUTABLE",
  data: Object
}))