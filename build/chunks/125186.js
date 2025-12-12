/** Chunk was on web.js **/
/** chunk id: 125186, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S8: () => l,
  t3: () => p
}), require("./415506.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk108131 = require("./108131.js"),
  i = require.n(Chunk108131),
  Chunk710845 = require("./710845.js"),
  Chunk803675 = require("./803675.js");
let s = new Chunk710845.Z("WebP");
var l = function(e) {
  return e.ALREADY_WEBP = "already_webp", e.UNSUPPORTED_FORMAT = "unsupported_format", e.ANIMATED_IMAGE = "animated_image", e.HAS_TRANSPARENCY = "has_transparency", e.PNG8_FORMAT = "png8_format", e.INSUFFICIENT_SAVINGS = "insufficient_savings", e.CONVERSION_FAILED = "conversion_failed", e.CORRUPTED_FILE = "corrupted_file", e.PIXEL_HASH_MISMATCH = "pixel_hash_mismatch", e.ICC_NON_SRGB_PROFILE = "icc_non_srgb_profile", e.ICC_DETECTION_FAILED = "icc_detection_failed", e.UNKNOWN_ERROR = "unknown_error", e
}({});
let c = 0;
async function u(e) {
  let t, n;
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
    if (n = a.x.create(t), null == n) throw Error("DiscordImage.create returned null");
    if (n.hasTransparency()) return s.verbose("[webp] png uses actual transparency - skipping conversion"), "has_transparency";
    if (n.isAnimated()) return s.verbose("[webp] png is animated (apng) - skipping conversion"), "animated_image";
    if (n.isPng8()) return s.verbose("[webp] png is PNG8 format (indexed color) - skipping conversion"), "png8_format"
  } catch (e) {
    return s.warn("[WebP] PNG analysis failed:", e), "corrupted_file"
  }
  try {
    if (!await n.hasSrgbIccProfile()) return "icc_non_srgb_profile"
  } catch (e) {
    return s.warn("[WebP] ICC profile detection failed:", e), "icc_detection_failed"
  }
  return null
}

function d(e) {
  let t = new Uint8Array(e.data.buffer);
  return i()(t).toString(16)
}
async function f(e) {
  let t = document.createElement("canvas"),
    n = t.getContext("2d");
  if (null == n) throw Error("could not get canvas context");
  let r = new Image,
    i = URL.createObjectURL(e);
  try {
    await new Promise((e, t) => {
      r.onload = () => e(), r.onerror = () => t(Error("failed to load image")), r.src = i
    }), t.width = r.width, t.height = r.height, n.drawImage(r, 0, 0)
  } finally {
    URL.revokeObjectURL(i)
  }
  let o = await new Promise(e => {
    t.toBlob(e, "image/webp", 1)
  });
  if (null == o) throw Error("failed to convert to webp");
  let a = performance.now(),
    l = await n.getImageData(0, 0, t.width, t.height);
  n.clearRect(0, 0, t.width, t.height);
  let c = new Image,
    u = URL.createObjectURL(o);
  try {
    await new Promise((e, t) => {
      c.onload = () => e(), c.onerror = () => t(Error("failed to load image")), c.src = u
    }), n.drawImage(c, 0, 0)
  } finally {
    URL.revokeObjectURL(u)
  }
  let f = await n.getImageData(0, 0, t.width, t.height),
    p = d(l),
    _ = d(f),
    m = p === _,
    h = performance.now() - a;
  return (s.verbose("[WebP] Pixel hash results: " + "fileName=".concat(e.name, " ") + "fileLength={".concat(e.size, "} ") + "width=".concat(c.width, " ") + "height=".concat(c.height, " ") + "pixelHash=".concat(p, " ") + "mezzanineFileLength={".concat(o.size, "} ") + "mezzaninePixelHash=".concat(_, " ") + "match=".concat(m, " ") + "elapsed_ms=".concat(Math.round(h))), m) ? {
    success: true,
    webpBlob: o,
    pixelHashTimeMs: h
  } : {
    success: false,
    reason: "pixel_hash_mismatch",
    pixelHashTimeMs: h
  }
}
async function p(e) {
  let t;
  if (null == e) throw Error("file is null or undefined");
  s.verbose("[WebP] Starting conversion for: ".concat(e.name));
  let n = performance.now(),
    r = function(t) {
      let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : e.size;
      return {
        success: false,
        originalFile: e,
        sizeBefore: e.size,
        sizeAfter: r,
        compressionRatio: e.size > 0 ? r / e.size : 1,
        reason: t,
        compressTimeMs: Math.round(performance.now() - n)
      }
    };
  try {
    let o = await u(e);
    if (null != o) return s.verbose("[WebP] Conversion rejected: ".concat(o)), r(o);
    let a = await f(e);
    if (!a.success || null == a.webpBlob) {
      var i;
      return r(null != (i = a.reason) ? i : "unknown_error")
    }
    let l = a.webpBlob,
      d = e.size > 0 ? l.size / e.size : 1,
      p = 1 - d;
    if (p < c) return s.verbose("[WebP] Insufficient savings: ".concat(Math.round(100 * p), "% < ").concat(100 * c, "% (").concat(e.size, " -> ").concat(l.size, " bytes)")), r("insufficient_savings", l.size);
    return t = performance.now() - n, s.verbose("[WebP] Conversion successful: ".concat(e.name, " to WebP in ").concat(Math.round(t), "ms")), {
      success: true,
      originalFile: e,
      convertedBlob: l,
      sizeBefore: e.size,
      sizeAfter: l.size,
      compressionRatio: d,
      hashTimeMs: a.pixelHashTimeMs,
      compressTimeMs: Math.round(t)
    }
  } catch (t) {
    return s.error("[WebP] Conversion failed for ".concat(e.name, ":"), t), r("conversion_failed")
  }
}