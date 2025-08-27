/** Chunk was on web.js **/
/** chunk id: 125186, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  lG: () => _,
  ub: () => p
}), require("./953529.js"), require("./388685.js"), require("./415506.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk108131 = require("./108131.js"),
  i = require.n(Chunk108131),
  Chunk605387 = require("./605387.js"),
  o = require.n(Chunk605387);
let s = new(require("./710845.js")).Z("WebP"),
  Chunk4667 = require("./4667.js"),
  c = 0;
async function u(e) {
  let t = await l.load(e, {
    async: true,
    expanded: true,
    includeUnknown: true
  });
  if (null == t.icc) return s.verbose("[webp] no ICC profile detected - assuming sRGB"), true;
  let n = t.icc;
  for (let e of Object.keys(n)) {
    var r;
    if ("ICC Description" === e && (null == (r = n[e]) ? true : r.description) != null && "" !== n[e].description) {
      if (n[e].description.toLowerCase().includes("srgb")) return s.verbose("[webp] sRGB ICC profile description found: ".concat(n[e].description)), true;
      return s.verbose("[webp] non sRGB ICC profile description found: ".concat(n[e].description)), false
    }
  }
  return s.verbose("[webp] ICC profile detected but could not parse description - assuming non-sRGB"), false
}
async function d(e) {
  let t;
  if ("image/webp" === e.type) return s.verbose("[WebP] File already WebP format"), "already_webp";
  if (!["image/png"].includes(e.type)) return s.verbose("[WebP] Unsupported format: ".concat(e.type)), "unsupported_format";
  try {
    t = "function" == typeof e.arrayBuffer ? await e.arrayBuffer() : await new Promise((t, n) => {
      let r = new FileReader;
      r.onload = () => t(r.result), r.onerror = () => n(Error("Failed to read file as ArrayBuffer")), r.readAsArrayBuffer(e)
    })
  } catch (e) {
    return s.warn("[WebP] Failed to read file data:", e), "conversion_failed"
  }
  try {
    let e = o().decode(t);
    if (4 === e.ctype || 6 === e.ctype) return s.verbose("[webp] png has transparency - skipping conversion"), "has_transparency";
    if (null != e.tabs.acTL) return s.verbose("[webp] png is animated (apng) - skipping conversion"), "animated_image"
  } catch (e) {
    return s.warn("[WebP] PNG analysis failed:", e), "corrupted_file"
  }
  try {
    if (!await u(t)) return "icc_non_srgb_profile"
  } catch (e) {
    return s.warn("[WebP] ICC profile detection failed:", e), "icc_detection_failed"
  }
  return null
}

function f(e) {
  let t = new Uint8Array(e.data.buffer);
  return i()(t).toString(16)
}
async function _(e) {
  let t, n;
  if (null == e) throw Error("file is null or undefined");
  s.verbose("[WebP] Starting conversion for: ".concat(e.name));
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
    let a = await d(e);
    if (null != a) return s.verbose("[WebP] Conversion rejected: ".concat(a)), i(a);
    let o = document.createElement("canvas"),
      l = o.getContext("2d");
    if (null == l) throw Error("could not get canvas context");
    let u = new Image,
      _ = URL.createObjectURL(e);
    try {
      await new Promise((e, t) => {
        u.onload = () => e(), u.onerror = () => t(Error("failed to load image")), u.src = _
      }), o.width = u.width, o.height = u.height, l.drawImage(u, 0, 0)
    } finally {
      URL.revokeObjectURL(_)
    }
    let p = await new Promise(e => {
      o.toBlob(e, "image/webp", 1)
    });
    if (null == p) throw Error("failed to convert to webp");
    {
      let n = performance.now(),
        r = await l.getImageData(0, 0, o.width, o.height);
      l.clearRect(0, 0, o.width, o.height);
      let a = new Image,
        c = URL.createObjectURL(p);
      try {
        await new Promise((e, t) => {
          a.onload = () => e(), a.onerror = () => t(Error("failed to load image")), a.src = c
        }), l.drawImage(a, 0, 0)
      } finally {
        URL.revokeObjectURL(c)
      }
      let u = await l.getImageData(0, 0, o.width, o.height),
        d = f(r),
        _ = f(u),
        h = d === _;
      if (t = performance.now() - n, s.verbose("[WebP] Pixel hash results: " + "fileName=".concat(e.name, " ") + "fileLength={".concat(e.size, "} ") + "width=".concat(a.width, " ") + "height=".concat(a.height, " ") + "pixelHash=".concat(d, " ") + "mezzanineFileLength={".concat(p.size, "} ") + "mezzaninePixelHash=".concat(_, " ") + "match=".concat(h, " ") + "elapsed_ms=".concat(Math.round(t))), !h) return i("pixel_hash_mismatch")
    }
    let h = e.size > 0 ? p.size / e.size : 1,
      m = 1 - h;
    if (m < c) return s.verbose("[WebP] Insufficient savings: ".concat(Math.round(100 * m), "% < ").concat(100 * c, "%")), i("insufficient_savings", p.size);
    let g = e.name.lastIndexOf("."),
      E = false === g ? e.name : e.name.substring(0, g),
      b = new File([p], "".concat(E, ".webp"), {
        type: "image/webp",
        lastModified: e.lastModified
      });
    return n = performance.now() - r, s.verbose("[WebP] Conversion successful: ".concat(b.name, " in ").concat(Math.round(n), "ms")), {
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
    return s.error("[WebP] Conversion failed for ".concat(e.name, ":"), t), i("conversion_failed")
  }
}

function p(e) {
  return e.success && null != e.convertedFile ? e.convertedFile : e.originalFile
}