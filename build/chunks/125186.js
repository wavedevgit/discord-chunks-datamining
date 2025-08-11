/** Chunk was on web.js **/
/** chunk id: 125186, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LF: () => p,
  ub: () => h
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./415506.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk108131 = require("./108131.js"),
  i = require.n(Chunk108131);
let o = new(require("./710845.js")).Z("WebP"),
  a = 102400,
  s = .1,
  l = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);

function c(e) {
  if (4 !== e.length) returnfalse;
  for (let t = 0; t < 4; t++) {
    let n = e.charCodeAt(t);
    if (!(n >= 65 && n <= 90 || n >= 97 && n <= 122)) returnfalse
  }
  returntrue
}
async function u(e) {
  let t = 0,
    n = async (t, n) => {
      let r = e.slice(t, t + n);
      return new Uint8Array(await new Promise((e, t) => {
        let n = new FileReader;
        n.onload = () => e(n.result), n.onerror = () => t(Error("Failed to read file")), n.readAsArrayBuffer(r)
      }))
    };
  if (!(await n(0, 8)).every((e, t) => e === l[t])) returnfalse;
  for (t = 8; t < e.size && !(t + 8 > e.size);) {
    let r = await n(t, 8),
      i = new DataView(r.buffer).getUint32(0),
      a = String.fromCharCode(r[4], r[5], r[6], r[7]);
    if (!c(a)) throw Error("Corrupted PNG: invalid chunk type detected");
    if ("acTL" === a) return o.verbose("[webp] found acTL chunk - png is animated"), true;
    if ("IDAT" === a) break;
    if (i > e.size || (t += 8 + i + 4) > e.size) throw Error("Corrupted PNG: invalid chunk length detected")
  }
  returnfalse
}
async function d(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
    r = null != (t = n.minFileSizeBytes) ? t : a;
  if (e.size < r) return o.verbose("[WebP] File too small: ".concat(e.size, " < ").concat(r)), {
    should: false,
    reason: "file_too_small"
  };
  if ("image/webp" === e.type) return o.verbose("[WebP] File already WebP format"), {
    should: false,
    reason: "already_webp"
  };
  if (!["image/png"].includes(e.type)) return o.verbose("[WebP] Unsupported format: ".concat(e.type)), {
    should: false,
    reason: "unsupported_format"
  };
  try {
    if (await u(e)) return o.verbose("[webp] png is animated (apng) - skipping conversion"), {
      should: false,
      reason: "animated_image"
    }
  } catch (e) {
    if (e instanceof Error && e.message.includes("Corrupted PNG")) return o.warn("[WebP] PNG corruption detected: ".concat(e.message)), {
      should: false,
      reason: "corrupted_file"
    };
    return o.warn("[WebP] Unexpected error during PNG analysis:", e), {
      should: false,
      reason: "conversion_failed"
    }
  }
  return {
    should: true
  }
}

function f(e) {
  let t = new Uint8Array(e.data.buffer);
  return i()(t).toString(16)
}
async function _(e) {
  let t, n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  if (null == e) throw Error("file is null or undefined");
  o.verbose("[WebP] Starting conversion for: ".concat(e.name));
  let r = performance.now(),
    i = function(t) {
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
    var a;
    let l = await d(e, n);
    if (!l.should) return o.verbose("[WebP] Conversion rejected: ".concat(l.reason)), i(l.reason);
    let c = document.createElement("canvas"),
      u = c.getContext("2d");
    if (null == u) throw Error("could not get canvas context");
    let _ = new Image,
      p = URL.createObjectURL(e);
    try {
      await new Promise((e, t) => {
        _.onload = () => e(), _.onerror = () => t(Error("failed to load image")), _.src = p
      }), c.width = _.width, c.height = _.height, u.drawImage(_, 0, 0)
    } finally {
      URL.revokeObjectURL(p)
    }
    let h = await new Promise(e => {
      c.toBlob(e, "image/webp", 1)
    });
    if (null == h) throw Error("failed to convert to webp");
    {
      let n = performance.now(),
        r = await u.getImageData(0, 0, c.width, c.height);
      u.clearRect(0, 0, c.width, c.height);
      let a = new Image,
        s = URL.createObjectURL(h);
      try {
        await new Promise((e, t) => {
          a.onload = () => e(), a.onerror = () => t(Error("failed to load image")), a.src = s
        }), u.drawImage(a, 0, 0)
      } finally {
        URL.revokeObjectURL(s)
      }
      let l = await u.getImageData(0, 0, c.width, c.height),
        d = f(r),
        _ = f(l),
        p = d === _;
      if (t = performance.now() - n, o.verbose("[WebP] Pixel hash results: " + "fileName=".concat(e.name, " ") + "fileLength={".concat(e.size, "} ") + "width=".concat(a.width, " ") + "height=".concat(a.height, " ") + "pixelHash=".concat(d, " ") + "mezzanineFileLength={".concat(h.size, "} ") + "mezzaninePixelHash=".concat(_, " ") + "match=".concat(p, " ") + "elapsed_ms=".concat(Math.round(t))), !p) return i("pixel_hash_mismatch")
    }
    let m = e.size > 0 ? h.size / e.size : 1,
      g = 1 - m,
      E = null != (a = n.minSizeReductionPercent) ? a : s;
    if (g < E) return o.verbose("[WebP] Insufficient savings: ".concat(Math.round(100 * g), "% < ").concat(100 * E, "%")), i("insufficient_savings", h.size);
    let b = e.name.lastIndexOf("."),
      y = false === b ? e.name : e.name.substring(0, b),
      O = new File([h], "".concat(y, ".webp"), {
        type: "image/webp",
        lastModified: e.lastModified
      }),
      v = performance.now() - r;
    return o.verbose("[WebP] Conversion successful: ".concat(O.name, " in ").concat(Math.round(v), "ms")), {
      success: true,
      originalFile: e,
      convertedFile: O,
      sizeBefore: e.size,
      sizeAfter: h.size,
      compressionRatio: m,
      hashTimeMs: t
    }
  } catch (t) {
    return o.error("[WebP] Conversion failed for ".concat(e.name, ":"), t), i("conversion_failed")
  }
}
async function p(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  o.verbose("[WebP] Converting ".concat(e.length, " files to WebP..."));
  let n = await Promise.all(e.map(e => _(e, t))),
    r = n.filter(e => e.success).length;
  return o.verbose("[WebP] Batch conversion complete: ".concat(r, "/").concat(e.length, " successful")), n
}

function h(e) {
  return e.success && null != e.convertedFile ? e.convertedFile : e.originalFile
}