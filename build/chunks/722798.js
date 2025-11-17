/** Chunk was on web.js **/
/** chunk id: 722798, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
module.exports = function(e) {
  function t() {
    return e.apply(this, arguments) || this
  }
  r(t, e);
  var n = t.prototype;
  return n.getType = function() {
    return this.get("type")
  }, n.getMutability = function() {
    return this.get("mutability")
  }, n.getData = function() {
    return this.get("data")
  }, t
}((0, require("./65183.js").Record)({
  type: "TOKEN",
  mutability: "IMMUTABLE",
  data: Object
}))