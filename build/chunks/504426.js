/** Chunk was on 91584 **/
/** chunk id: 504426, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk179361 = require("./179361.js"),
  Chunk76466 = require("./76466.js"),
  Chunk988231 = require("./988231.js"),
  Chunk470427 = require("./470427.js"),
  Chunk928460 = require("./928460.js"),
  Chunk80556 = require("./80556.js"),
  Chunk656367 = require("./656367.js"),
  Chunk740336 = require("./740336.js"),
  Chunk65183 = require("./65183.js"),
  Chunk817690 = require("./817690.js"),
  h = Chunk65183.List,
  d = Chunk65183.Record,
  g = Chunk65183.Repeat;
module.exports = function(t) {
  function e() {
    return t.apply(this, arguments) || this
  }
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  var r = e.prototype;
  return r.getEntityMap = function() {
    return u
  }, r.getBlockMap = function() {
    return this.get("blockMap")
  }, r.getSelectionBefore = function() {
    return this.get("selectionBefore")
  }, r.getSelectionAfter = function() {
    return this.get("selectionAfter")
  }, r.getBlockForKey = function(t) {
    return this.getBlockMap().get(t)
  }, r.getKeyBefore = function(t) {
    return this.getBlockMap().reverse().keySeq().skipUntil(function(e) {
      return e === t
    }).skip(1).first()
  }, r.getKeyAfter = function(t) {
    return this.getBlockMap().keySeq().skipUntil(function(e) {
      return e === t
    }).skip(1).first()
  }, r.getBlockAfter = function(t) {
    return this.getBlockMap().skipUntil(function(e, r) {
      return r === t
    }).skip(1).first()
  }, r.getBlockBefore = function(t) {
    return this.getBlockMap().reverse().skipUntil(function(e, r) {
      return r === t
    }).skip(1).first()
  }, r.getBlocksAsArray = function() {
    return this.getBlockMap().toArray()
  }, r.getFirstBlock = function() {
    return this.getBlockMap().first()
  }, r.getLastBlock = function() {
    return this.getBlockMap().last()
  }, r.getPlainText = function(t) {
    return this.getBlockMap().map(function(t) {
      return t ? t.getText() : ""
    }).join(t || "\n")
  }, r.getLastCreatedEntityKey = function() {
    return u.__getLastCreatedEntityKey()
  }, r.hasText = function() {
    var t = this.getBlockMap();
    return t.size > 1 || escape(t.first().getText()).replace(/%u200B/g, "").length > 0
  }, r.createEntity = function(t, e, r) {
    return u.__create(t, e, r), this
  }, r.mergeEntityData = function(t, e) {
    return u.__mergeData(t, e), this
  }, r.replaceEntityData = function(t, e) {
    return u.__replaceData(t, e), this
  }, r.addEntity = function(t) {
    return u.__add(t), this
  }, r.getEntity = function(t) {
    return u.__get(t)
  }, e.createFromBlockArray = function(t, r) {
    var i = Array.isArray(t) ? t : t.contentBlocks,
      o = n.createFromArray(i),
      a = o.isEmpty() ? new s : s.createEmpty(o.first().getKey());
    return new e({
      blockMap: o,
      entityMap: r || u,
      selectionBefore: a,
      selectionAfter: a
    })
  }, e.createFromText = function(t) {
    var r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : /\r\n?|\n/g,
      n = t.split(r).map(function(t) {
        return t = p(t), new(l("draft_tree_data_support") ? a : o)({
          key: c(),
          text: t,
          type: "unstyled",
          characterList: h(g(i.EMPTY, t.length))
        })
      });
    return e.createFromBlockArray(n)
  }, e
}(d({
  entityMap: null,
  blockMap: null,
  selectionBefore: null,
  selectionAfter: null
}))