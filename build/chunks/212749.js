/** Chunk was on web.js **/
/** chunk id: 212749, original params: e,t,n (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.isWEBM = exports.isSWF = exports.isOGG = exports.isMP4 = exports.isMOV = exports.isMKV = exports.isM4V = exports.isFLV = exports.isAVI = true;
let Chunk835986 = require("./835986.js"),
  Chunk817762 = require("./817762.js");

function a(e) {
  let t = (0, i.getFileChunk)(e);
  return !!r.FileTypes.checkByFileType(t, "m4v") && (0, i.isftypStringIncluded)(t)
}
exports.isAVI = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "avi")
}, exports.isFLV = function(e) {
  let t = (0, i.getFileChunk)(e);
  return !!r.FileTypes.checkByFileType(t, "flv") && (0, i.isFlvStringIncluded)(t)
}, exports.isM4V = a, exports.isMKV = function(e) {
  let t = (0, i.getFileChunk)(e, 64);
  return !!r.FileTypes.checkByFileType(t, "mkv") && "mkv" === (0, i.findMatroskaDocTypeElements)(t)
}, exports.isMOV = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "mov")
}, exports.isMP4 = function(e, t) {
  let n = (0, i.getFileChunk)(e);
  return !!r.FileTypes.checkByFileType(n, "mp4") || (null == t || !t.excludeSimilarTypes) && a(n)
}, exports.isOGG = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "ogg")
}, exports.isSWF = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "swf")
}, exports.isWEBM = function(e) {
  let t = (0, i.getFileChunk)(e, 64);
  return !!r.FileTypes.checkByFileType(t, "webm") && "webm" === (0, i.findMatroskaDocTypeElements)(t)
}