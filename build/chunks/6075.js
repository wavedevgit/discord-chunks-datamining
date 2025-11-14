/** Chunk was on web.js **/
/** chunk id: 6075, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => C,
  errors: () => N,
  load: () => R,
  loadView: () => V
});
var Chunk822632 = require("./822632.js"),
  Chunk475516 = require("./475516.js"),
  Chunk791473 = require("./791473.js"),
  Chunk321294 = require("./321294.js"),
  Chunk488066 = require("./488066.js"),
  Chunk150629 = require("./150629.js"),
  Chunk446351 = require("./446351.js"),
  Chunk258823 = require("./258823.js"),
  Chunk552865 = require("./552865.js"),
  Chunk638900 = require("./638900.js"),
  Chunk460166 = require("./460166.js"),
  Chunk74501 = require("./74501.js"),
  Chunk580829 = require("./580829.js"),
  Chunk193633 = require("./193633.js"),
  Chunk686728 = require("./686728.js"),
  Chunk957047 = require("./957047.js"),
  Chunk603083 = require("./603083.js"),
  Chunk263007 = require("./263007.js"),
  Chunk110552 = require("./110552.js"),
  Chunk256184 = require("./256184.js"),
  Chunk410747 = require("./410747.js"),
  Chunk714912 = require("./714912.js"),
  Chunk890742 = require("./890742.js"),
  A = require("./413135.js").Buffer;
let C = {
    load: R,
    loadView: V,
    errors: Chunk890742.Z
  },
  N = Chunk890742.Z;

function R(e, t = {}) {
  return P(e) ? (t.async = true, D(e, t).then(e => B(e, t))) : U(e) ? (t.async = true, G(e).then(e => B(e, t))) : B(e, t)
}

function P(e) {
  return "string" == typeof e
}

function D(e, t) {
  return /^\w+:\/\//.test(e) ? "undefined" != typeof fetch ? w(e, t) : x(e, t) : M(e) ? Promise.resolve((0, r.u0)(e)) : k(e, t)
}

function w(e, {
  length: t
} = {}) {
  let n = {
    method: "GET"
  };
  return Number.isInteger(t) && t >= 0 && (n.headers = {
    range: `bytes=0-${t-1}`
  }), fetch(e, n).then(e => e.arrayBuffer())
}

function x(e, {
  length: t
} = {}) {
  return new Promise((n, r) => {
    let i = {};
    Number.isInteger(t) && t >= 0 && (i.headers = {
      range: `bytes=0-${t-1}`
    }), L(e)(e, i, e => {
      if (e.statusCode >= 200 && e.statusCode <= 299) {
        let t = [];
        e.on("data", e => t.push(A.from(e))), e.on("error", e => r(e)), e.on("end", () => n(A.concat(t)))
      } else r(`Could not fetch file: ${e.statusCode} ${e.statusMessage}`), e.resume()
    }).on("error", e => r(e))
  })
}

function L(e) {
  return /^https:\/\//.test(e) ? require("https").get : require("http").get
}

function M(e) {
  return /^data:[^;,]*(;base64)?,/.test(e)
}

function k(e, {
  length: t
} = {}) {
  return new Promise((n, r) => {
    let i = j();
    i.open(e, (a, o) => {
      a ? r(a) : i.stat(e, (a, s) => {
        if (a) r(a);
        else {
          let a = Math.min(s.size, true !== t ? t : s.size),
            l = A.alloc(a),
            c = {
              buffer: l,
              length: a
            };
          i.read(o, c, t => {
            t ? r(t) : i.close(o, t => {
              t && console.warn(`Could not close file ${e}:`, t), n(l)
            })
          })
        }
      })
    })
  })
}

function j() {
  try {
    return require("fs")
  } catch (e) {
    return
  }
}

function U(e) {
  return "undefined" != typeof File && e instanceof File
}

function G(e) {
  return new Promise((t, n) => {
    let r = new FileReader;
    r.onload = e => t(e.target.result), r.onerror = () => n(r.error), r.readAsArrayBuffer(e)
  })
}

function B(e, t) {
  return Z(e) && (e = new Uint8Array(e).buffer), V(F(e), t)
}

function Z(e) {
  try {
    return A.isBuffer(e)
  } catch (e) {
    returnfalse
  }
}

function F(e) {
  try {
    return new DataView(e)
  } catch (t) {
    return new i.Z(e)
  }
}

function V(e, {
  expanded: t = false,
  async: n = false,
  includeUnknown: i = false,
  domParser: o
} = {
  expanded: false,
  async: false,
  includeUnknown: false,
  domParser: true
}) {
  let A = false,
    C = {},
    N = [],
    {
      fileType: R,
      fileDataOffset: P,
      jfifDataOffset: D,
      tiffHeaderOffset: w,
      iptcDataOffset: x,
      xmpChunks: L,
      iccChunks: M,
      mpfDataOffset: k,
      pngHeaderOffset: j,
      pngTextChunks: U,
      pngChunkOffsets: G,
      vp8xChunkOffset: B,
      gifHeaderOffset: Z
    } = s.Z.parseAppMarkers(e, n);
  if (a.Z.USE_JPEG && a.Z.USE_FILE && H(P)) {
    A = true;
    let n = u.Z.read(e, P);
    t ? C.file = n : C = (0, r.wB)({}, C, n)
  }
  if (a.Z.USE_JPEG && a.Z.USE_JFIF && Y(D)) {
    A = true;
    let n = d.Z.read(e, D);
    t ? C.jfif = n : C = (0, r.wB)({}, C, n)
  }
  if (a.Z.USE_EXIF && W(w)) {
    A = true;
    let {
      tags: n,
      byteOrder: s
    } = l.Z.read(e, w, i);
    if (n.Thumbnail && (C.Thumbnail = n.Thumbnail, delete n.Thumbnail), t ? (C.exif = n, K(C)) : C = (0, r.wB)({}, C, n), a.Z.USE_TIFF && a.Z.USE_IPTC && n["IPTC-NAA"] && !z(x)) {
      let e = f.Z.read(n["IPTC-NAA"].value, 0, i);
      t ? C.iptc = e : C = (0, r.wB)({}, C, e)
    }
    if (a.Z.USE_TIFF && a.Z.USE_XMP && n.ApplicationNotes && !q(L)) {
      let e = _.Z.read((0, r.nZ)(n.ApplicationNotes.value), true, o);
      t ? C.xmp = e : (delete e._raw, C = (0, r.wB)({}, C, e))
    }
    if (a.Z.USE_PHOTOSHOP && n.ImageSourceData && n.PhotoshopSettings) {
      let e = p.Z.read(n.PhotoshopSettings.value, i);
      t ? C.photoshop = e : C = (0, r.wB)({}, C, e)
    }
    if (a.Z.USE_TIFF && a.Z.USE_ICC && n.ICC_Profile && !X(M)) {
      let e = h.Z.read(n.ICC_Profile.value, [{
        offset: 0,
        length: n.ICC_Profile.value.length,
        chunkNumber: 1,
        chunksTotal: 1
      }]);
      t ? C.icc = e : C = (0, r.wB)({}, C, e)
    }
    if (a.Z.USE_MAKER_NOTES && n.MakerNote) {
      if (Q(n)) {
        let a = m.Z.read(e, w, n.MakerNote.__offset, s, i);
        t ? C.makerNotes = a : C = (0, r.wB)({}, C, a)
      } else if (J(n)) {
        let a = g.Z.read(e, w, n.MakerNote.__offset, i);
        t ? C.makerNotes = a : C = (0, r.wB)({}, C, a)
      }
    }
    n.MakerNote && delete n.MakerNote.__offset
  }
  if (a.Z.USE_JPEG && a.Z.USE_IPTC && z(x)) {
    A = true;
    let n = f.Z.read(e, x, i);
    t ? C.iptc = n : C = (0, r.wB)({}, C, n)
  }
  if (a.Z.USE_XMP && q(L)) {
    A = true;
    let n = _.Z.read(e, L, o);
    t ? C.xmp = n : (delete n._raw, C = (0, r.wB)({}, C, n))
  }
  if ((a.Z.USE_JPEG || a.Z.USE_WEBP) && a.Z.USE_ICC && X(M)) {
    A = true;
    let t = h.Z.read(e, M, n);
    t instanceof Promise ? N.push(t.then(eo)) : eo(t)
  }
  if (a.Z.USE_MPF && $(k)) {
    A = true;
    let n = c.Z.read(e, k, i);
    t ? C.mpf = n : C = (0, r.wB)({}, C, n)
  }
  if (a.Z.USE_PNG && a.Z.USE_PNG_FILE && ee(j)) {
    A = true;
    let n = E.Z.read(e, j);
    t ? (C.png = C.png ? (0, r.wB)({}, C.png, n) : n, C.pngFile = n) : C = (0, r.wB)({}, C, n)
  }
  if (a.Z.USE_PNG && et(U)) {
    A = true;
    let {
      readTags: t,
      readTagsPromise: r
    } = b.Z.read(e, U, n, i);
    es(t), r && N.push(r.then(e => e.forEach(es)))
  }
  if (a.Z.USE_PNG && en(G)) {
    A = true;
    let n = y.Z.read(e, G);
    t ? C.png = C.png ? (0, r.wB)({}, C.png, n) : n : C = (0, r.wB)({}, C, n)
  }
  if (a.Z.USE_WEBP && er(B)) {
    A = true;
    let n = O.Z.read(e, B);
    t ? C.riff = C.riff ? (0, r.wB)({}, C.riff, n) : n : C = (0, r.wB)({}, C, n)
  }
  if (a.Z.USE_GIF && ei(Z)) {
    A = true;
    let n = v.Z.read(e, Z);
    t ? C.gif = C.gif ? (0, r.wB)({}, C.gif, n) : n : C = (0, r.wB)({}, C, n)
  }
  let F = T.Z.get(C, t);
  F && (t ? C.composite = F : C = (0, r.wB)({}, C, F));
  let ea = (a.Z.USE_JPEG || a.Z.USE_WEBP) && a.Z.USE_EXIF && a.Z.USE_THUMBNAIL && I.Z.get(e, C.Thumbnail, w);
  if (ea ? (A = true, C.Thumbnail = ea) : delete C.Thumbnail, R && (t ? (C.file || (C.file = {}), C.file.FileType = R) : C.FileType = R, A = true), !A) throw new S.Z.MetadataMissingError;
  if (n) return Promise.all(N).then(() => C);
  return C;

  function eo(e) {
    t ? C.icc = e : C = (0, r.wB)({}, C, e)
  }

  function es(e) {
    if (t) {
      for (let t of ["exif", "iptc"]) {
        let n = `__${t}`;
        e[n] && (C[t] = C[t] ? (0, r.wB)({}, C.exif, e[n]) : e[n], delete e[n])
      }
      C.png = C.png ? (0, r.wB)({}, C.png, e) : e, C.pngText = C.pngText ? (0, r.wB)({}, C.png, e) : e
    } else C = (0, r.wB)({}, C, e.__exif ? e.__exif : {}, e.__iptc ? e.__iptc : {}, e), delete C.__exif, delete C.__iptc
  }
}

function H(e) {
  return true !== e
}

function Y(e) {
  return true !== e
}

function W(e) {
  return true !== e
}

function K(e) {
  if (e.exif) {
    if (e.exif.GPSLatitude && e.exif.GPSLatitudeRef) try {
      e.gps = e.gps || {}, e.gps.Latitude = (0, o.gg)(e.exif.GPSLatitude.value), "S" === e.exif.GPSLatitudeRef.value.join("") && (e.gps.Latitude = -e.gps.Latitude)
    } catch (e) {}
    if (e.exif.GPSLongitude && e.exif.GPSLongitudeRef) try {
      e.gps = e.gps || {}, e.gps.Longitude = (0, o.gg)(e.exif.GPSLongitude.value), "W" === e.exif.GPSLongitudeRef.value.join("") && (e.gps.Longitude = -e.gps.Longitude)
    } catch (e) {}
    if (e.exif.GPSAltitude && e.exif.GPSAltitudeRef) try {
      e.gps = e.gps || {}, e.gps.Altitude = e.exif.GPSAltitude.value[0] / e.exif.GPSAltitude.value[1], 1 === e.exif.GPSAltitudeRef.value && (e.gps.Altitude = -e.gps.Altitude)
    } catch (e) {}
  }
}

function z(e) {
  return true !== e
}

function q(e) {
  return Array.isArray(e) && e.length > 0
}

function X(e) {
  return Array.isArray(e) && e.length > 0
}

function Q(e) {
  return e.Make && e.Make.value && Array.isArray(e.Make.value) && "Canon" === e.Make.value[0] && e.MakerNote && e.MakerNote.__offset
}

function J(e) {
  let t = "PENTAX ";
  return e.MakerNote.value.length > t.length && (0, r.nZ)(e.MakerNote.value.slice(0, t.length)) === t && e.MakerNote.__offset
}

function $(e) {
  return true !== e
}

function ee(e) {
  return true !== e
}

function et(e) {
  return true !== e
}

function en(e) {
  return true !== e
}

function er(e) {
  return true !== e
}

function ei(e) {
  return true !== e
}