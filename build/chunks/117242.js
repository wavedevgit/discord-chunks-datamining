/** Chunk was on web.js **/
/** chunk id: 117242, original params: e,t,n (module,exports,re quire) **/
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
  p = u({
    key: "",
    type: "unstyled",
    text: "",
    characterList: s(),
    depth: 0,
    data: l()
  }),
  _ = function(e) {
    if (!e) return e;
    var t = e.characterList,
      n = e.text;
    return n && !t && (e.characterList = s(d(i.EMPTY, n.length))), e
  };

function m(e, t) {
  return e.getStyle() === t.getStyle()
}

function h(e, t) {
  return e.getEntity() === t.getEntity()
}
module.exports = function(e) {
  function t(t) {
    return e.call(this, _(t)) || this
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
  }, n.findStyleRanges = function(e, t) {
    o(this.getCharacterList(), m, e, t)
  }, n.findEntityRanges = function(e, t) {
    o(this.getCharacterList(), h, e, t)
  }, t
}(p)