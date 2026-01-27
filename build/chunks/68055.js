/** Chunk was on 38939 **/
/** chunk id: 68055, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk387739 = require("./387739.js"),
  Chunk265930 = require("./265930.js"),
  Chunk116740 = require("./116740.js"),
  a = Chunk116740.List,
  s = Chunk116740.Map,
  u = Chunk116740.OrderedSet,
  c = Chunk116740.Record,
  l = Chunk116740.Repeat,
  f = u(),
  p = c({
    key: "",
    type: "unstyled",
    text: "",
    characterList: a(),
    depth: 0,
    data: s()
  }),
  h = function(t) {
    if (!t) return t;
    var e = t.characterList,
      r = t.text;
    return r && !e && (t.characterList = a(l(n.EMPTY, r.length))), t
  };

function d(t, e) {
  return t.getStyle() === e.getStyle()
}

function g(t, e) {
  return t.getEntity() === e.getEntity()
}
module.exports = function(t) {
  function e(e) {
    return t.call(this, h(e)) || this
  }
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  var r = e.prototype;
  return r.getKey = function() {
    return this.get("key")
  }, r.getType = function() {
    return this.get("type")
  }, r.getText = function() {
    return this.get("text")
  }, r.getCharacterList = function() {
    return this.get("characterList")
  }, r.getLength = function() {
    return this.getText().length
  }, r.getDepth = function() {
    return this.get("depth")
  }, r.getData = function() {
    return this.get("data")
  }, r.getInlineStyleAt = function(t) {
    var e = this.getCharacterList().get(t);
    return e ? e.getStyle() : f
  }, r.getEntityAt = function(t) {
    var e = this.getCharacterList().get(t);
    return e ? e.getEntity() : null
  }, r.findStyleRanges = function(t, e) {
    i(this.getCharacterList(), d, t, e)
  }, r.findEntityRanges = function(t, e) {
    i(this.getCharacterList(), g, t, e)
  }, e
}(p)