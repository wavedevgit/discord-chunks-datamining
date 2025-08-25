/** Chunk was on web.js **/
/** chunk id: 125186, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  lG: () => p,
  ub: () => h
}), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./415506.js"), require("./953529.js"), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk108131 = require("./108131.js"),
  i = require.n(Chunk108131);
let o = new(require("./710845.js")).Z("WebP"),
  Chunk4667 = require("./4667.js"),
  s = 0,
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
  let t = await a.load(e, {
    async: true,
    expanded: true,
    includeUnknown: true
  });
  if (null == t.icc) return o.verbose("[webp] no ICC profile detected - assuming sRGB"), true;
  let n = t.icc;
  for (let e of Object.keys(n)) {
    var r;
    if ("ICC Description" === e && (null == (r = n[e]) ? true : r.description) != null && "" !== n[e].description) {
      if (n[e].description.toLowerCase().includes("srgb")) return o.verbose("[webp] sRGB ICC profile description found: ".concat(n[e].description)), true;
      return o.verbose("[webp] non sRGB ICC profile description found: ".concat(n[e].description)), false
    }
  }
  return o.verbose("[webp] ICC profile detected but could not parse description - assuming non-sRGB"), false
}
async function f(e) {
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
  try {
    let t;
    if (t = "function" == typeof e.arrayBuffer ? await e.arrayBuffer() : await new Promise((t, n) => {
        let r = new FileReader;
        r.onload = () => t(r.result), r.onerror = () => n(Error("Failed to read file as ArrayBuffer")), r.readAsArrayBuffer(e)
      }), !await d(t)) return {
      should: false,
      reason: "icc_non_srgb_profile"
    }
  } catch (e) {
    return o.warn("[WebP] ICC profile detection failed:", e), {
      should: false,
      reason: "icc_detection_failed"
    }
  }
  return {
    should: true
  }
}

function _(e) {
  let t = new Uint8Array(e.data.buffer);
  return i()(t).toString(16)
}
async function p(e) {
  let t, n;
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
        reason: t,
        compressTimeMs: Math.round(performance.now() - r)
      }
    };
  try {
    let a = await f(e);
    if (!a.should) return o.verbose("[WebP] Conversion rejected: ".concat(a.reason)), i(a.reason);
    let l = document.createElement("canvas"),
      c = l.getContext("2d");
    if (null == c) throw Error("could not get canvas context");
    let u = new Image,
      d = URL.createObjectURL(e);
    try {
      await new Promise((e, t) => {
        u.onload = () => e(), u.onerror = () => t(Error("failed to load image")), u.src = d
      }), l.width = u.width, l.height = u.height, c.drawImage(u, 0, 0)
    } finally {
      URL.revokeObjectURL(d)
    }
    let p = await new Promise(e => {
      l.toBlob(e, "image/webp", 1)
    });
    if (null == p) throw Error("failed to convert to webp");
    {
      let n = performance.now(),
        r = await c.getImageData(0, 0, l.width, l.height);
      c.clearRect(0, 0, l.width, l.height);
      let a = new Image,
        s = URL.createObjectURL(p);
      try {
        await new Promise((e, t) => {
          a.onload = () => e(), a.onerror = () => t(Error("failed to load image")), a.src = s
        }), c.drawImage(a, 0, 0)
      } finally {
        URL.revokeObjectURL(s)
      }
      let u = await c.getImageData(0, 0, l.width, l.height),
        d = _(r),
        f = _(u),
        h = d === f;
      if (t = performance.now() - n, o.verbose("[WebP] Pixel hash results: " + "fileName=".concat(e.name, " ") + "fileLength={".concat(e.size, "} ") + "width=".concat(a.width, " ") + "height=".concat(a.height, " ") + "pixelHash=".concat(d, " ") + "mezzanineFileLength={".concat(p.size, "} ") + "mezzaninePixelHash=".concat(f, " ") + "match=".concat(h, " ") + "elapsed_ms=".concat(Math.round(t))), !h) return i("pixel_hash_mismatch")
    }
    let h = e.size > 0 ? p.size / e.size : 1,
      m = 1 - h;
    if (m < s) return o.verbose("[WebP] Insufficient savings: ".concat(Math.round(100 * m), "% < ").concat(100 * s, "%")), i("insufficient_savings", p.size);
    let g = e.name.lastIndexOf("."),
      E = false === g ? e.name : e.name.substring(0, g),
      b = new File([p], "".concat(E, ".webp"), {
        type: "image/webp",
        lastModified: e.lastModified
      });
    return n = performance.now() - r, o.verbose("[WebP] Conversion successful: ".concat(b.name, " in ").concat(Math.round(n), "ms")), {
      success: true,
      originalFile: e,
      convertedFile: b,
      sizeBefore: e.size,
      sizeAfter: p.size,
      compressionRatio: h,
      hashTimeMs: t,
      compressTimeMs: Math.round(n)
    }
  } catch (t) {
    return o.error("[WebP] Conversion failed for ".concat(e.name, ":"), t), i("conversion_failed")
  }
}

function h(e) {
  return e.success && null != e.convertedFile ? e.convertedFile : e.originalFile
}