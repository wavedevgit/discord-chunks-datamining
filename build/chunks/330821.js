/** Chunk was on web.js **/
/** chunk id: 330821, original params: e,t,n (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.isZIP = exports.isRAR = exports.isLZH = exports.is7Z = true;
let Chunk835986 = require("./835986.js"),
  Chunk817762 = require("./817762.js");
exports.is7Z = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "_7z")
}, exports.isLZH = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "lzh")
}, exports.isRAR = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "rar")
}, exports.isZIP = function(e, t) {
  let n = (0, i.getFileChunk)(e, (null == t ? true : t.chunkSize) || 64);
  return r.FileTypes.checkByFileType(n, "zip")
}