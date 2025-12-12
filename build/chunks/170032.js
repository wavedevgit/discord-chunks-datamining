/** Chunk was on web.js **/
/** chunk id: 170032, original params: e,t,n (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.isWAV = exports.isMP3 = exports.isM4A = exports.isFLAC = exports.isAMR = exports.isAAC = true;
let Chunk718939 = require("./718939.js"),
  Chunk148468 = require("./148468.js");

function o(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "m4a")
}
exports.isAAC = function(e, t) {
  let n = (0, i.getFileChunk)(e);
  return !!r.FileTypes.checkByFileType(n, "aac") || (null == t || !t.excludeSimilarTypes) && o(n)
}, exports.isAMR = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "amr")
}, exports.isFLAC = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "flac")
}, exports.isM4A = o, exports.isMP3 = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "mp3")
}, exports.isWAV = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "wav")
}