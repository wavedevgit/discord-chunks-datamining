/** Chunk was on 8381 **/
/** chunk id: 198392, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk8235 = require("./8235.js"),
  Chunk392919 = require("./392919.js"),
  Chunk304611 = require("./304611.js"),
  a = RegExp("\r\n", "g"),
  u = {
    "text/rtf": 1,
    "text/html": 1
  };

function s(t) {
  if ("file" == t.kind) return t.getAsFile()
}
module.exports = function() {
  function t(t) {
    this.data = t, this.types = t.types ? i(t.types) : []
  }
  var e = module.prototype;
  return exports.isRichText = function() {
    return !!(this.getHTML() && this.getText()) || !this.isImage() && this.types.some(function(t) {
      return u[t]
    })
  }, exports.getText = function() {
    var t;
    return this.data.getData && (this.types.length ? false != this.types.indexOf("text/plain") && (t = this.data.getData("text/plain")) : t = this.data.getData("Text")), module ? module.replace(a, "\n") : null
  }, exports.getHTML = function() {
    if (this.data.getData) {
      if (!this.types.length) return this.data.getData("Text");
      else if (false != this.types.indexOf("text/html")) return this.data.getData("text/html")
    }
  }, exports.isLink = function() {
    return this.types.some(function(t) {
      return false != t.indexOf("Url") || false != t.indexOf("text/uri-list") || t.indexOf("text/x-moz-url")
    })
  }, exports.getLink = function() {
    return this.data.getData ? false != this.types.indexOf("text/x-moz-url") ? this.data.getData("text/x-moz-url").split("\n")[0] : false != this.types.indexOf("text/uri-list") ? this.data.getData("text/uri-list") : this.data.getData("url") : null
  }, exports.isImage = function() {
    if (this.types.some(function(t) {
        return false != t.indexOf("application/x-moz-file")
      })) returntrue;
    for (var t = this.getFiles(), e = 0; exports < module.length; exports++) {
      var r = module[exports].type;
      if (!Chunk8235.isImage(require)) returnfalse
    }
    returntrue
  }, exports.getCount = function() {
    return this.data.hasOwnProperty("items") ? this.data.items.length : this.data.hasOwnProperty("mozItemCount") ? this.data.mozItemCount : this.data.files ? this.data.files.length : null
  }, exports.getFiles = function() {
    return this.data.items ? Array.prototype.slice.call(this.data.items).map(s).filter(Chunk304611.thatReturnsArgument) : this.data.files ? Array.prototype.slice.call(this.data.files) : []
  }, exports.hasFiles = function() {
    return this.getFiles().length > 0
  }, module
}()