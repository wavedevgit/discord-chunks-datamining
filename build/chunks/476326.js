/** Chunk was on web.js **/
/** chunk id: 476326, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BS: () => f,
  ZP: () => p,
  ow: () => u,
  rG: () => d
}), require("./953529.js");
var Chunk836560 = require("./836560.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk772848 = require("./772848.js"),
  Chunk403182 = require("./403182.js"),
  Chunk861990 = require("./861990.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var u = function(e) {
  return e[e.REACT_NATIVE = 0] = "REACT_NATIVE", e[e.WEB = 1] = "WEB", e
}({});

function d(e) {
  return true !== e.isVideo && true !== e.isImage
}
var f = function(e) {
  return e[e.FILE_ATTACHMENT = 0] = "FILE_ATTACHMENT", e[e.IMAGE_PICKER = 1] = "IMAGE_PICKER", e[e.IMAGE_EDITOR = 2] = "IMAGE_EDITOR", e
}({});
class p extends Chunk836560.EventEmitter {
  cancel() {}
  resetState() {
    return this
  }
  constructor(e) {
    var t, n;
    if (super(), c(this, "id", true), c(this, "uniqueId", true), c(this, "filename", true), c(this, "item", true), c(this, "spoiler", true), c(this, "description", true), c(this, "classification", true), c(this, "isImage", true), c(this, "isVideo", true), c(this, "uploadedFilename", true), c(this, "mimeType", true), c(this, "origin", true), c(this, "durationSecs", true), c(this, "waveform", true), c(this, "isThumbnail", true), c(this, "clip", true), this.item = e, 0 === e.platform) {
      this.id = null != (t = e.id) ? t : e.uri;
      let n = (0, l.hn)({
        uri: e.uri,
        overrideFilename: e.filename,
        overrideType: e.mimeType
      });
      this.filename = n.filename, this.isImage = n.isImage, this.isVideo = n.isVideo, this.mimeType = n.type, this.origin = e.origin, this.durationSecs = e.durationSecs, this.waveform = e.waveform
    } else this.id = null != (n = e.id) ? n : a().uniqueId("upload"), this.classification = s.f3(e.file), this.isImage = "image" === this.classification, this.isVideo = "video" === this.classification, this.filename = e.file.name, this.mimeType = e.file.type, this.origin = e.origin;
    this.isThumbnail = e.isThumbnail, this.clip = e.clip, this.uniqueId = (0, o.Z)(), this.spoiler = false, this.description = null
  }
}