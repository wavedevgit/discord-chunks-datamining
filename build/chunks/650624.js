/** Chunk was on web.js **/
/** chunk id: 650624, original params: e,t,n (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.isPCAP = exports.isDOC = exports.isTTF = exports.isSTL = exports.isSQLITE = exports.isRTF = exports.isPS = exports.isPDF = exports.isPARQUET = exports.isORC = exports.isINDD = exports.isMACHO = exports.isEXE = exports.isELF = exports.isBLEND = true;
let Chunk835986 = require("./835986.js"),
  Chunk817762 = require("./817762.js");
exports.isBLEND = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "blend")
}, exports.isELF = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "elf")
}, exports.isEXE = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "exe")
}, exports.isMACHO = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "macho")
}, exports.isINDD = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "indd")
}, exports.isORC = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "orc")
}, exports.isPARQUET = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "parquet")
}, exports.isPDF = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "pdf")
}, exports.isPS = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "ps")
}, exports.isRTF = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "rtf")
}, exports.isSQLITE = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "sqlite")
}, exports.isSTL = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "stl")
}, exports.isTTF = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "ttf")
}, exports.isDOC = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "doc")
}, exports.isPCAP = function(e) {
  let t = (0, i.getFileChunk)(e);
  return r.FileTypes.checkByFileType(t, "pcap")
}