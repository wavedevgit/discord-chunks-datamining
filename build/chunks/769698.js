/** Chunk was on web.js **/
/** chunk id: 769698, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var Chunk126182 = require("./126182.js"),
  Chunk50153 = require("./50153.js"),
  Chunk117242 = require("./117242.js"),
  Chunk309987 = require("./309987.js"),
  Chunk364918 = require("./364918.js"),
  Chunk365702 = require("./365702.js"),
  Chunk703579 = require("./703579.js"),
  Chunk40375 = require("./40375.js"),
  Chunk65183 = require("./65183.js"),
  Chunk799995 = require("./799995.js"),
  _ = Chunk65183.List,
  m = Chunk65183.Record,
  h = Chunk65183.Repeat;
module.exports = function(e) {
  function t() {
    return e.apply(this, arguments) || this
  }
  r(t, e);
  var n = t.prototype;
  return n.getEntityMap = function() {
    return l
  }, n.getBlockMap = function() {
    return this.get("blockMap")
  }, n.getSelectionBefore = function() {
    return this.get("selectionBefore")
  }, n.getSelectionAfter = function() {
    return this.get("selectionAfter")
  }, n.getBlockForKey = function(e) {
    return this.getBlockMap().get(e)
  }, n.getKeyBefore = function(e) {
    return this.getBlockMap().reverse().keySeq().skipUntil(function(t) {
      return t === e
    }).skip(1).first()
  }, n.getKeyAfter = function(e) {
    return this.getBlockMap().keySeq().skipUntil(function(t) {
      return t === e
    }).skip(1).first()
  }, n.getBlockAfter = function(e) {
    return this.getBlockMap().skipUntil(function(t, n) {
      return n === e
    }).skip(1).first()
  }, n.getBlockBefore = function(e) {
    return this.getBlockMap().reverse().skipUntil(function(t, n) {
      return n === e
    }).skip(1).first()
  }, n.getBlocksAsArray = function() {
    return this.getBlockMap().toArray()
  }, n.getFirstBlock = function() {
    return this.getBlockMap().first()
  }, n.getLastBlock = function() {
    return this.getBlockMap().last()
  }, n.getPlainText = function(e) {
    return this.getBlockMap().map(function(e) {
      return e ? e.getText() : ""
    }).join(e || "\n")
  }, n.getLastCreatedEntityKey = function() {
    return l.__getLastCreatedEntityKey()
  }, n.hasText = function() {
    var e = this.getBlockMap();
    return e.size > 1 || escape(e.first().getText()).replace(/%u200B/g, "").length > 0
  }, n.createEntity = function(e, t, n) {
    return l.__create(e, t, n), this
  }, n.mergeEntityData = function(e, t) {
    return l.__mergeData(e, t), this
  }, n.replaceEntityData = function(e, t) {
    return l.__replaceData(e, t), this
  }, n.addEntity = function(e) {
    return l.__add(e), this
  }, n.getEntity = function(e) {
    return l.__get(e)
  }, t.createFromBlockArray = function(e, n) {
    var r = Array.isArray(e) ? e : e.contentBlocks,
      o = i.createFromArray(r),
      a = o.isEmpty() ? new c : c.createEmpty(o.first().getKey());
    return new t({
      blockMap: o,
      entityMap: n || l,
      selectionBefore: a,
      selectionAfter: a
    })
  }, t.createFromText = function(e) {
    var n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : /\r\n?|\n/g,
      r = e.split(n).map(function(e) {
        return e = p(e), new(d("draft_tree_data_support") ? s : a)({
          key: u(),
          text: e,
          type: "unstyled",
          characterList: _(h(o.EMPTY, e.length))
        })
      });
    return t.createFromBlockArray(r)
  }, t
}(m({
  entityMap: null,
  blockMap: null,
  selectionBefore: null,
  selectionAfter: null
}))