/** Chunk was on 38939 **/
/** chunk id: 617179, original params: t,e,r (module,exports,require) **/
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
  p = {
    parent: null,
    characterList: a(),
    data: s(),
    depth: 0,
    key: "",
    text: "",
    type: "unstyled",
    children: a(),
    prevSibling: null,
    nextSibling: null
  },
  h = function(t, e) {
    return t.getStyle() === e.getStyle()
  },
  d = function(t, e) {
    return t.getEntity() === e.getEntity()
  },
  g = function(t) {
    if (!t) return t;
    var e = t.characterList,
      r = t.text;
    return r && !e && (t.characterList = a(l(n.EMPTY, r.length))), t
  };
module.exports = function(t) {
  function e() {
    var e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : p;
    return t.call(this, g(e)) || this
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
  }, r.getChildKeys = function() {
    return this.get("children")
  }, r.getParentKey = function() {
    return this.get("parent")
  }, r.getPrevSiblingKey = function() {
    return this.get("prevSibling")
  }, r.getNextSiblingKey = function() {
    return this.get("nextSibling")
  }, r.findStyleRanges = function(t, e) {
    i(this.getCharacterList(), h, t, e)
  }, r.findEntityRanges = function(t, e) {
    i(this.getCharacterList(), d, t, e)
  }, e
}(c(p))