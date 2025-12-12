/** Chunk was on web.js **/
/** chunk id: 309987, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var Chunk50153 = require("./50153.js"),
  Chunk257469 = require("./257469.js"),
  Chunk65183 = require("./65183.js"),
  s = Chunk65183.List,
  l = Chunk65183.Map,
  c = Chunk65183.OrderedSet,
  u = Chunk65183.Record,
  d = Chunk65183.Repeat,
  f = c(),
  p = {
    parent: null,
    characterList: s(),
    data: l(),
    depth: 0,
    key: "",
    text: "",
    type: "unstyled",
    children: s(),
    prevSibling: null,
    nextSibling: null
  },
  _ = function(e, t) {
    return e.getStyle() === t.getStyle()
  },
  m = function(e, t) {
    return e.getEntity() === t.getEntity()
  },
  h = function(e) {
    if (!e) return e;
    var t = e.characterList,
      n = e.text;
    return n && !t && (e.characterList = s(d(i.EMPTY, n.length))), e
  };
module.exports = function(e) {
  function t() {
    var t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : p;
    return e.call(this, h(t)) || this
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
    o(this.getCharacterList(), _, e, t)
  }, n.findEntityRanges = function(e, t) {
    o(this.getCharacterList(), m, e, t)
  }, t
}(u(p))