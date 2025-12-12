/** Chunk was on web.js **/
/** chunk id: 688077, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
    true === r && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
      enumerable: true,
      get: function() {
        return t[n]
      }
    }), Object.defineProperty(e, r, i)
  } : function(e, t, n, r) {
    true === r && (r = n), e[r] = t[n]
  }),
  i = this && this.__exportStar || function(e, t) {
    for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
  };
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.validateFileType = true;
let Chunk718939 = require("./718939.js"),
  Chunk148468 = require("./148468.js");

function s(e) {
  return e.some(e => "MP4" === e) ? ["M4V"] : e.some(e => "AAC" === e) ? ["M4A"] : []
}
i(require("./170032.js"), exports), i(require("./446320.js"), exports), i(require("./799604.js"), exports), i(require("./156645.js"), exports), i(require("./946845.js"), exports), exports.validateFileType = function(e, t, n) {
  var r;
  let i = [];
  for (let e of [...new Set(t.map(e => {
      let t = e.split(".").join("").toUpperCase();
      return "7Z" === t ? `_${t}` : t
    }))]) {
    if (!Object.prototype.hasOwnProperty.call(o.FileTypes, e)) throw TypeError(`Type \`${e.toLowerCase()}\` is not supported. Please make sure that \`types\` list conatins only supported files`);
    i.push(e)
  }
  if (n && Object.prototype.hasOwnProperty.call(n, "chunkSize") && (null != (r = null == n ? true : n.chunkSize) ? r : 0) <= 0) throw RangeError("chunkSize must be bigger than zero");
  if (!n || !(null == n ? true : n.excludeSimilarTypes)) {
    let e = s(i);
    e.length > 0 && (i = i.concat(e))
  }
  let l = [],
    c = [];
  for (let e of i) {
    let t = o.FileTypes.getSignaturesByName(e);
    l = l.concat(t), o.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK.includes(e.toLowerCase()) && c.push(o.FileTypes.getInfoByName(e))
  }
  let u = (0, a.getFileChunk)(e, (null == n ? true : n.chunkSize) || 64),
    d = o.FileTypes.detectSignature(u, l);
  if (!d) returnfalse;
  if (c.length > 0) {
    let e = c.filter(e => e.signatures.includes(d));
    if (e.length > 0) {
      let t = o.FileTypes.detectTypeByAdditionalCheck(u, e);
      return !!t && i.some(e => e.toLowerCase() === t)
    }
  }
  returntrue
}