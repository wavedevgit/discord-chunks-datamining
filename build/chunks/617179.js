/** Chunk was on web.js **/
/** chunk id: 617179, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var Chunk387739 = require("./387739.js"),
  Chunk265930 = require("./265930.js"),
  Chunk116740 = require("./116740.js"),
  o = Chunk116740.List,
  l = Chunk116740.Map,
  c = Chunk116740.OrderedSet,
  u = Chunk116740.Record,
  d = Chunk116740.Repeat,
  f = c(),
  p = {
    parent: null,
    characterList: o(),
    data: l(),
    depth: 0,
    key: "",
    text: "",
    type: "unstyled",
    children: o(),
    prevSibling: null,
    nextSibling: null
  },
  _ = function(e, t) {
    return e.getStyle() === t.getStyle()
  },
  h = function(e, t) {
    return e.getEntity() === t.getEntity()
  },
  m = function(e) {
    if (!e) return e;
    var t = e.characterList,
      n = e.text;
    return n && !t && (e.characterList = o(d(i.EMPTY, n.length))), e
  };
module.exports = function(e) {
  function t() {
    var t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : p;
    return e.call(this, m(t)) || this
  }
  r(t, e);
  var n = t.prototype;
  return n.getKey = function() {
    return this.get("key")
  }, n.getType = function() {
    return this.get("type")
  }, n.getText = function() {
    return this.get("text")
  }, n.getCharacterList = function() {
    return this.get("characterList")
  }, n.getLength = function() {
    return this.getText().length
  }, n.getDepth = function() {
    return this.get("depth")
  }, n.getData = function() {
    return this.get("data")
  }, n.getInlineStyleAt = function(e) {
    var t = this.getCharacterList().get(e);
    return t ? t.getStyle() : f
  }, n.getEntityAt = function(e) {
    var t = this.getCharacterList().get(e);
    return t ? t.getEntity() : null
  }, n.getChildKeys = function() {
    return this.get("children")
  }, n.getParentKey = function() {
    return this.get("parent")
  }, n.getPrevSiblingKey = function() {
    return this.get("prevSibling")
  }, n.getNextSiblingKey = function() {
    return this.get("nextSibling")
  }, n.findStyleRanges = function(e, t) {
    a(this.getCharacterList(), _, e, t)
  }, n.findEntityRanges = function(e, t) {
    a(this.getCharacterList(), h, e, t)
  }, t
}(u(p))