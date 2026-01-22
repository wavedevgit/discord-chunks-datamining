/** Chunk was on web.js **/
/** chunk id: 549195, original params: e,t,n (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.isWEBP = exports.isPSD = exports.isPPM = exports.isPNG = exports.isPGM = exports.isPBM = exports.isJPEG = exports.isICO = exports.isHEIC = exports.isGIF = exports.isEXR = exports.isCR2 = exports.isBPG = exports.isBMP = exports.isAVIF = true;
let Chunk835986 = require("./835986.js"),
  Chunk817762 = require("./817762.js");
exports.isAVIF = function(e) {
  let t = (0, i.getFileChunk)(e);
  return !!r.FileTypes.checkByFileType(t, "avif") && (0, i.isAvifStringIncluded)(t)
}, exports.isBMP = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "bmp")
}, exports.isBPG = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "bpg")
}, exports.isCR2 = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "cr2")
}, exports.isEXR = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "exr")
}, exports.isGIF = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "gif")
}, exports.isHEIC = function(e) {
  let t = (0, i.getFileChunk)(e);
  return !!r.FileTypes.checkByFileType(t, "avif") && (0, i.isHeicSignatureIncluded)(t)
}, exports.isICO = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "ico")
}, exports.isJPEG = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "jpeg")
}, exports.isPBM = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "pbm")
}, exports.isPGM = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "pgm")
}, exports.isPNG = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "png")
}, exports.isPPM = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "ppm")
}, exports.isPSD = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "psd")
}, exports.isWEBP = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "webp")
}