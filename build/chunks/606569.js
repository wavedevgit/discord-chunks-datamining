/** Chunk was on web.js **/
/** chunk id: 606569, original params: e,t,n (module,exports,re quire) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.FileTypes = exports.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK = true;
let Chunk817762 = require("./817762.js"),
  Chunk639371 = require("./639371.js"),
  Chunk536168 = require("./536168.js"),
  Chunk868791 = require("./868791.js"),
  Chunk775356 = require("./775356.js"),
  Chunk501778 = require("./501778.js"),
  Chunk636102 = require("./636102.js");
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
      for (let s = 0; s < a; s++) {
        if (n.skippedBytes && n.skippedBytes.includes(s)) {
          t++;
          continue
        }
        if (e[i + s] !== n.sequence[s - t]) {
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
exports.FileTypes = u, u.AAC = Chunk639371.AudioTypes.AAC, u.AMR = Chunk639371.AudioTypes.AMR, u.FLAC = Chunk639371.AudioTypes.FLAC, u.M4A = Chunk639371.AudioTypes.M4A, u.MP3 = Chunk639371.AudioTypes.MP3, u.WAV = Chunk639371.AudioTypes.WAV, u.AVIF = Chunk775356.ImageTypes.AVIF, u.BMP = Chunk775356.ImageTypes.BMP, u.BPG = Chunk775356.ImageTypes.BPG, u.CR2 = Chunk775356.ImageTypes.CR2, u.EXR = Chunk775356.ImageTypes.EXR, u.GIF = Chunk775356.ImageTypes.GIF, u.ICO = Chunk775356.ImageTypes.ICO, u.JPEG = Chunk775356.ImageTypes.JPEG, u.PBM = Chunk775356.ImageTypes.PBM, u.PGM = Chunk775356.ImageTypes.PGM, u.PNG = Chunk775356.ImageTypes.PNG, u.PPM = Chunk775356.ImageTypes.PPM, u.PSD = Chunk775356.ImageTypes.PSD, u.WEBP = Chunk775356.ImageTypes.WEBP, u.HEIC = Chunk775356.ImageTypes.HEIC, u.AVI = Chunk501778.VideoTypes.AVI, u.FLV = Chunk501778.VideoTypes.FLV, u.M4V = Chunk501778.VideoTypes.M4V, u.MKV = Chunk501778.VideoTypes.MKV, u.MOV = Chunk501778.VideoTypes.MOV, u.MP4 = Chunk501778.VideoTypes.MP4, u.OGG = Chunk501778.VideoTypes.OGG, u.SWF = Chunk501778.VideoTypes.SWF, u.WEBM = Chunk501778.VideoTypes.WEBM, u._7Z = Chunk536168.CompressedTypes._7Z, u.LZH = Chunk536168.CompressedTypes.LZH, u.RAR = Chunk536168.CompressedTypes.RAR, u.ZIP = Chunk536168.CompressedTypes.ZIP, u.BLEND = Chunk868791.OtherTypes.BLEND, u.DOC = Chunk868791.OtherTypes.DOC, u.ELF = Chunk868791.OtherTypes.ELF, u.EXE = Chunk868791.OtherTypes.EXE, u.INDD = Chunk868791.OtherTypes.INDD, u.MACHO = Chunk868791.OtherTypes.MACHO, u.ORC = Chunk868791.OtherTypes.ORC, u.PARQUET = Chunk868791.OtherTypes.PARQUET, u.PCAP = Chunk868791.OtherTypes.PCAP, u.PDF = Chunk868791.OtherTypes.PDF, u.PS = Chunk868791.OtherTypes.PS, u.RTF = Chunk868791.OtherTypes.RTF, u.SQLITE = Chunk868791.OtherTypes.SQLITE, u.STL = Chunk868791.OtherTypes.STL, u.TTF = Chunk868791.OtherTypes.TTF