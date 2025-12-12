/** Chunk was on web.js **/
/** chunk id: 40785, original params: e,t,n (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.FileTypes = exports.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = true;
let Chunk148468 = require("./148468.js"),
  Chunk988310 = require("./988310.js"),
  Chunk487571 = require("./487571.js"),
  Chunk153582 = require("./153582.js"),
  Chunk711720 = require("./711720.js"),
  Chunk115868 = require("./115868.js"),
  Chunk688077 = require("./688077.js");
exports.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = ["m4v", "flv", "mp4", "mkv", "webm", "avif", "heic"];
class u {
  static getInfoByName(e) {
    return (0, r.fetchFromObject)(u, e.toUpperCase())
  }
  static getSignaturesByName(e) {
    let {
      signatures: t
    } = (0, r.fetchFromObject)(u, e.toUpperCase());
    return t
  }
  static detectSignature(e, t) {
    for (let n of t) {
      let t = true,
        r = n.offset || 0,
        i = 0;
      for (let a = 0; a < n.sequence.length; a++) {
        if (n.skippedBytes && n.skippedBytes.includes(a)) {
          i++;
          continue
        }
        if (e[r + a] !== n.sequence[a - i]) {
          t = false;
          break
        }
      }
      if (t) return n
    }
  }
  static detectTypeByAdditionalCheck(e, t) {
    let n = t.map(e => e.extension);
    if (n.some(e => ["m4v", "flv", "mp4", "heic"].includes(e))) return n.includes("heic") && (0, c.isHEIC)(e) ? "heic" : (0, c.isFLV)(e) ? "flv" : (0, c.isM4V)(e) && !(0, c.isHEIC)(e) ? "m4v" : "mp4";
    if (n.some(e => ["mkv", "webm"].includes(e))) {
      let t = (0, r.findMatroskaDocTypeElements)(e);
      if ("mkv" === t && (0, c.isMKV)(e)) return "mkv";
      if ("webm" === t && (0, c.isWEBM)(e)) return "webm"
    } else if (n.some(e => ["avif"].includes(e)) && (0, r.isAvifStringIncluded)(e)) return "avif"
  }
  static detectbBySignatures(e, t) {
    for (let n of t) {
      let t = 0,
        r = true,
        i = n.offset || 0,
        a = (null == n ? true : n.skippedBytes) ? n.sequence.length + n.skippedBytes.length : n.sequence.length;
      for (let o = 0; o < a; o++) {
        if (n.skippedBytes && n.skippedBytes.includes(o)) {
          t++;
          continue
        }
        if (e[i + o] !== n.sequence[o - t]) {
          r = false;
          break
        }
      }
      if (r) return n
    }
  }
  static checkByFileType(e, t) {
    if (Object.prototype.hasOwnProperty.call(u, t.toUpperCase())) {
      let n = u.getSignaturesByName(t.toUpperCase());
      if (u.detectSignature(e, n)) returntrue
    }
    returnfalse
  }
}
exports.FileTypes = u, u.AAC = Chunk988310.AudioTypes.AAC, u.AMR = Chunk988310.AudioTypes.AMR, u.FLAC = Chunk988310.AudioTypes.FLAC, u.M4A = Chunk988310.AudioTypes.M4A, u.MP3 = Chunk988310.AudioTypes.MP3, u.WAV = Chunk988310.AudioTypes.WAV, u.AVIF = Chunk711720.ImageTypes.AVIF, u.BMP = Chunk711720.ImageTypes.BMP, u.BPG = Chunk711720.ImageTypes.BPG, u.CR2 = Chunk711720.ImageTypes.CR2, u.EXR = Chunk711720.ImageTypes.EXR, u.GIF = Chunk711720.ImageTypes.GIF, u.ICO = Chunk711720.ImageTypes.ICO, u.JPEG = Chunk711720.ImageTypes.JPEG, u.PBM = Chunk711720.ImageTypes.PBM, u.PGM = Chunk711720.ImageTypes.PGM, u.PNG = Chunk711720.ImageTypes.PNG, u.PPM = Chunk711720.ImageTypes.PPM, u.PSD = Chunk711720.ImageTypes.PSD, u.WEBP = Chunk711720.ImageTypes.WEBP, u.HEIC = Chunk711720.ImageTypes.HEIC, u.AVI = Chunk115868.VideoTypes.AVI, u.FLV = Chunk115868.VideoTypes.FLV, u.M4V = Chunk115868.VideoTypes.M4V, u.MKV = Chunk115868.VideoTypes.MKV, u.MOV = Chunk115868.VideoTypes.MOV, u.MP4 = Chunk115868.VideoTypes.MP4, u.OGG = Chunk115868.VideoTypes.OGG, u.SWF = Chunk115868.VideoTypes.SWF, u.WEBM = Chunk115868.VideoTypes.WEBM, u._7Z = Chunk487571.CompressedTypes._7Z, u.LZH = Chunk487571.CompressedTypes.LZH, u.RAR = Chunk487571.CompressedTypes.RAR, u.ZIP = Chunk487571.CompressedTypes.ZIP, u.BLEND = Chunk153582.OtherTypes.BLEND, u.DOC = Chunk153582.OtherTypes.DOC, u.ELF = Chunk153582.OtherTypes.ELF, u.EXE = Chunk153582.OtherTypes.EXE, u.INDD = Chunk153582.OtherTypes.INDD, u.MACHO = Chunk153582.OtherTypes.MACHO, u.ORC = Chunk153582.OtherTypes.ORC, u.PARQUET = Chunk153582.OtherTypes.PARQUET, u.PCAP = Chunk153582.OtherTypes.PCAP, u.PDF = Chunk153582.OtherTypes.PDF, u.PS = Chunk153582.OtherTypes.PS, u.RTF = Chunk153582.OtherTypes.RTF, u.SQLITE = Chunk153582.OtherTypes.SQLITE, u.STL = Chunk153582.OtherTypes.STL, u.TTF = Chunk153582.OtherTypes.TTF