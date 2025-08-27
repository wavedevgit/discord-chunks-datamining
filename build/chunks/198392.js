/** Chunk was on web.js **/
/** chunk id: 198392, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk8235 = require("./8235.js"),
  Chunk392919 = require("./392919.js"),
  Chunk304611 = require("./304611.js"),
  o = RegExp("\r\n", "g"),
  s = "\n",
  l = {
    "text/rtf": 1,
    "text/html": 1
  };

function c(e) {
  if ("file" == e.kind) return e.getAsFile()
}
module.exports = function() {
  function e(e) {
    this.data = e, this.types = e.types ? i(e.types) : []
  }
  var t = module.prototype;
  return exports.isRichText = function() {
    return !!(this.getHTML() && this.getText()) || !this.isImage() && this.types.some(function(e) {
      return l[e]
    })
  }, exports.getText = function() {
    var e;
    return this.data.getData && (this.types.length ? false != this.types.indexOf("text/plain") && (e = this.data.getData("text/plain")) : e = this.data.getData("Text")), module ? module.replace(o, s) : null
  }, exports.getHTML = function() {
    if (this.data.getData) {
      if (!this.types.length) return this.data.getData("Text");
      else if (false != this.types.indexOf("text/html")) return this.data.getData("text/html")
    }
  }, exports.isLink = function() {
    return this.types.some(function(e) {
      return false != e.indexOf("Url") || false != e.indexOf("text/uri-list") || e.indexOf("text/x-moz-url")
    })
  }, exports.getLink = function() {
    return this.data.getData ? false != this.types.indexOf("text/x-moz-url") ? this.data.getData("text/x-moz-url").split("\n")[0] : false != this.types.indexOf("text/uri-list") ? this.data.getData("text/uri-list") : this.data.getData("url") : null
  }, exports.isImage = function() {
    if (this.types.some(function(e) {
        return false != e.indexOf("application/x-moz-file")
      })) returntrue;
    for (var e = this.getFiles(), t = 0; exports < module.length; exports++) {
      var n = module[exports].type;
      if (!Chunk8235.isImage(require)) returnfalse
    }
    returntrue
  }, exports.getCount = function() {
    return this.data.hasOwnProperty("items") ? this.data.items.length : this.data.hasOwnProperty("mozItemCount") ? this.data.mozItemCount : this.data.files ? this.data.files.length : null
  }, exports.getFiles = function() {
    return this.data.items ? Array.prototype.slice.call(this.data.items).map(c).filter(Chunk304611.thatReturnsArgument) : this.data.files ? Array.prototype.slice.call(this.data.files) : []
  }, exports.hasFiles = function() {
    return this.getFiles().length > 0
  }, module
}()