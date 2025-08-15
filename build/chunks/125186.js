/** Chunk was on web.js **/
/** chunk id: 125186, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LF: () => _,
  ub: () => p
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./415506.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk108131 = require("./108131.js"),
  i = require.n(Chunk108131);
let a = new(require("./710845.js")).Z("WebP"),
  o = 0,
  s = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);

function l(e) {
  if (4 !== e.length) returnfalse;
  for (let t = 0; t < 4; t++) {
    let n = e.charCodeAt(t);
    if (!(n >= 65 && n <= 90 || n >= 97 && n <= 122)) returnfalse
  }
  returntrue
}
async function c(e) {
  let t = 0,
    n = async (t, n) => {
      let r = e.slice(t, t + n);
      return new Uint8Array(await new Promise((e, t) => {
        let n = new FileReader;
        n.onload = () => e(n.result), n.onerror = () => t(Error("Failed to read file")), n.readAsArrayBuffer(r)
      }))
    };
  if (!(await n(0, 8)).every((e, t) => e === s[t])) returnfalse;
  for (t = 8; t < e.size && !(t + 8 > e.size);) {
    let r = await n(t, 8),
      i = new DataView(r.buffer).getUint32(0),
      o = String.fromCharCode(r[4], r[5], r[6], r[7]);
    if (!l(o)) throw Error("Corrupted PNG: invalid chunk type detected");
    if ("acTL" === o) return a.verbose("[webp] found acTL chunk - png is animated"), true;
    if ("IDAT" === o) break;
    if (i > e.size || (t += 8 + i + 4) > e.size) throw Error("Corrupted PNG: invalid chunk length detected")
  }
  returnfalse
}
async function u(e) {
  if ("image/webp" === e.type) return a.verbose("[WebP] File already WebP format"), {
    should: false,
    reason: "already_webp"
  };
  if (!["image/png"].includes(e.type)) return a.verbose("[WebP] Unsupported format: ".concat(e.type)), {
    should: false,
    reason: "unsupported_format"
  };
  try {
    if (await c(e)) return a.verbose("[webp] png is animated (apng) - skipping conversion"), {
      should: false,
      reason: "animated_image"
    }
  } catch (e) {
    if (e instanceof Error && e.message.includes("Corrupted PNG")) return a.warn("[WebP] PNG corruption detected: ".concat(e.message)), {
      should: false,
      reason: "corrupted_file"
    };
    return a.warn("[WebP] Unexpected error during PNG analysis:", e), {
      should: false,
      reason: "conversion_failed"
    }
  }
  return {
    should: true
  }
}

function d(e) {
  let t = new Uint8Array(e.data.buffer);
  return i()(t).toString(16)
}
async function f(e) {
  let t;
  if (null == e) throw Error("file is null or undefined");
  a.verbose("[WebP] Starting conversion for: ".concat(e.name));
  let n = performance.now(),
    r = function(t) {
      let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : e.size;
      return {
        success: false,
        originalFile: e,
        sizeBefore: e.size,
        sizeAfter: n,
        compressionRatio: e.size > 0 ? n / e.size : 1,
        reason: t
      }
    };
  try {
    let i = await u(e);
    if (!i.should) return a.verbose("[WebP] Conversion rejected: ".concat(i.reason)), r(i.reason);
    let s = document.createElement("canvas"),
      l = s.getContext("2d");
    if (null == l) throw Error("could not get canvas context");
    let c = new Image,
      f = URL.createObjectURL(e);
    try {
      await new Promise((e, t) => {
        c.onload = () => e(), c.onerror = () => t(Error("failed to load image")), c.src = f
      }), s.width = c.width, s.height = c.height, l.drawImage(c, 0, 0)
    } finally {
      URL.revokeObjectURL(f)
    }
    let _ = await new Promise(e => {
      s.toBlob(e, "image/webp", 1)
    });
    if (null == _) throw Error("failed to convert to webp");
    {
      let n = performance.now(),
        i = await l.getImageData(0, 0, s.width, s.height);
      l.clearRect(0, 0, s.width, s.height);
      let o = new Image,
        c = URL.createObjectURL(_);
      try {
        await new Promise((e, t) => {
          o.onload = () => e(), o.onerror = () => t(Error("failed to load image")), o.src = c
        }), l.drawImage(o, 0, 0)
      } finally {
        URL.revokeObjectURL(c)
      }
      let u = await l.getImageData(0, 0, s.width, s.height),
        f = d(i),
        p = d(u),
        h = f === p;
      if (t = performance.now() - n, a.verbose("[WebP] Pixel hash results: " + "fileName=".concat(e.name, " ") + "fileLength={".concat(e.size, "} ") + "width=".concat(o.width, " ") + "height=".concat(o.height, " ") + "pixelHash=".concat(f, " ") + "mezzanineFileLength={".concat(_.size, "} ") + "mezzaninePixelHash=".concat(p, " ") + "match=".concat(h, " ") + "elapsed_ms=".concat(Math.round(t))), !h) return r("pixel_hash_mismatch")
    }
    let p = e.size > 0 ? _.size / e.size : 1,
      h = 1 - p;
    if (h < o) return a.verbose("[WebP] Insufficient savings: ".concat(Math.round(100 * h), "% < ").concat(100 * o, "%")), r("insufficient_savings", _.size);
    let m = e.name.lastIndexOf("."),
      g = false === m ? e.name : e.name.substring(0, m),
      E = new File([_], "".concat(g, ".webp"), {
        type: "image/webp",
        lastModified: e.lastModified
      }),
      b = performance.now() - n;
    return a.verbose("[WebP] Conversion successful: ".concat(E.name, " in ").concat(Math.round(b), "ms")), {
      success: true,
      originalFile: e,
      convertedFile: E,
      sizeBefore: e.size,
      sizeAfter: _.size,
      compressionRatio: p,
      hashTimeMs: t
    }
  } catch (t) {
    return a.error("[WebP] Conversion failed for ".concat(e.name, ":"), t), r("conversion_failed")
  }
}
async function _(e) {
  a.verbose("[WebP] Converting ".concat(e.length, " files to WebP..."));
  let t = await Promise.all(e.map(e => f(e))),
    n = t.filter(e => e.success).length;
  return a.verbose("[WebP] Batch conversion complete: ".concat(n, "/").concat(e.length, " successful")), t
}

function p(e) {
  return e.success && null != e.convertedFile ? e.convertedFile : e.originalFile
}