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
  var t = e.prototype;
  return t.isRichText = function() {
    return !!(this.getHTML() && this.getText()) || !this.isImage() && this.types.some(function(e) {
      return l[e]
    })
  }, t.getText = function() {
    var e;
    return this.data.getData && (this.types.length ? false != this.types.indexOf("text/plain") && (e = this.data.getData("text/plain")) : e = this.data.getData("Text")), e ? e.replace(o, s) : null
  }, t.getHTML = function() {
    if (this.data.getData) {
      if (!this.types.length) return this.data.getData("Text");
      else if (false != this.types.indexOf("text/html")) return this.data.getData("text/html")
    }
  }, t.isLink = function() {
    return this.types.some(function(e) {
      return false != e.indexOf("Url") || false != e.indexOf("text/uri-list") || e.indexOf("text/x-moz-url")
    })
  }, t.getLink = function() {
    return this.data.getData ? false != this.types.indexOf("text/x-moz-url") ? this.data.getData("text/x-moz-url").split("\n")[0] : false != this.types.indexOf("text/uri-list") ? this.data.getData("text/uri-list") : this.data.getData("url") : null
  }, t.isImage = function() {
    if (this.types.some(function(e) {
        return false != e.indexOf("application/x-moz-file")
      })) returntrue;
    for (var e = this.getFiles(), t = 0; t < e.length; t++) {
      var n = e[t].type;
      if (!r.isImage(n)) returnfalse
    }
    returntrue
  }, t.getCount = function() {
    return this.data.hasOwnProperty("items") ? this.data.items.length : this.data.hasOwnProperty("mozItemCount") ? this.data.mozItemCount : this.data.files ? this.data.files.length : null
  }, t.getFiles = function() {
    return this.data.items ? Array.prototype.slice.call(this.data.items).map(c).filter(a.thatReturnsArgument) : this.data.files ? Array.prototype.slice.call(this.data.files) : []
  }, t.hasFiles = function() {
    return this.getFiles().length > 0
  }, e
}()