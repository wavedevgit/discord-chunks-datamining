/** Chunk was on web.js **/
/** chunk id: 4667, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => C,
  errors: () => N,
  load: () => R,
  loadView: () => V
});
var Chunk463424 = require("./463424.js"),
  Chunk87706 = require("./87706.js"),
  Chunk441349 = require("./441349.js"),
  Chunk473108 = require("./473108.js"),
  Chunk532280 = require("./532280.js"),
  Chunk956484 = require("./956484.js"),
  Chunk816880 = require("./816880.js"),
  Chunk671536 = require("./671536.js"),
  Chunk137295 = require("./137295.js"),
  Chunk872724 = require("./872724.js"),
  Chunk755416 = require("./755416.js"),
  Chunk698057 = require("./698057.js"),
  Chunk623975 = require("./623975.js"),
  Chunk794341 = require("./794341.js"),
  Chunk561025 = require("./561025.js"),
  Chunk761682 = require("./761682.js"),
  Chunk63463 = require("./63463.js"),
  Chunk90253 = require("./90253.js"),
  Chunk162739 = require("./162739.js"),
  Chunk161425 = require("./161425.js"),
  Chunk554814 = require("./554814.js"),
  Chunk523544 = require("./523544.js"),
  Chunk715770 = require("./715770.js"),
  A = require("./413135.js").Buffer;
let C = {
    load: R,
    loadView: V,
    errors: Chunk715770.Z
  },
  N = Chunk715770.Z;

function R(e, t = {}) {
  return P(e) ? (t.async = true, w(e, t).then(e => B(e, t))) : U(e) ? (t.async = true, G(e).then(e => B(e, t))) : B(e, t)
}

function P(e) {
  return "string" == typeof e
}

function w(e, t) {
  return /^\w+:\/\//.test(e) ? "undefined" != typeof fetch ? D(e, t) : x(e, t) : j(e) ? Promise.resolve((0, r.u0)(e)) : M(e, t)
}

function D(e, {
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

function j(e) {
  return /^data:[^;,]*(;base64)?,/.test(e)
}

function M(e, {
  length: t
} = {}) {
  return new Promise((n, r) => {
    let i = k();
    i.open(e, (o, a) => {
      o ? r(o) : i.stat(e, (o, s) => {
        if (o) r(o);
        else {
          let o = Math.min(s.size, true !== t ? t : s.size),
            l = A.alloc(o),
            c = {
              buffer: l,
              length: o
            };
          i.read(a, c, t => {
            t ? r(t) : i.close(a, t => {
              t && console.warn(`Could not close file ${e}:`, t), n(l)
            })
          })
        }
      })
    })
  })
}

function k() {
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
  domParser: a
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
      jfifDataOffset: w,
      tiffHeaderOffset: D,
      iptcDataOffset: x,
      xmpChunks: L,
      iccChunks: j,
      mpfDataOffset: M,
      pngHeaderOffset: k,
      pngTextChunks: U,
      pngChunkOffsets: G,
      vp8xChunkOffset: B,
      gifHeaderOffset: Z
    } = s.Z.parseAppMarkers(e, n);
  if (o.Z.USE_JPEG && o.Z.USE_FILE && H(P)) {
    A = true;
    let n = u.Z.read(e, P);
    t ? C.file = n : C = (0, r.wB)({}, C, n)
  }
  if (o.Z.USE_JPEG && o.Z.USE_JFIF && Y(w)) {
    A = true;
    let n = d.Z.read(e, w);
    t ? C.jfif = n : C = (0, r.wB)({}, C, n)
  }
  if (o.Z.USE_EXIF && W(D)) {
    A = true;
    let {
      tags: n,
      byteOrder: s
    } = l.Z.read(e, D, i);
    if (n.Thumbnail && (C.Thumbnail = n.Thumbnail, delete n.Thumbnail), t ? (C.exif = n, K(C)) : C = (0, r.wB)({}, C, n), o.Z.USE_TIFF && o.Z.USE_IPTC && n["IPTC-NAA"] && !z(x)) {
      let e = f.Z.read(n["IPTC-NAA"].value, 0, i);
      t ? C.iptc = e : C = (0, r.wB)({}, C, e)
    }
    if (o.Z.USE_TIFF && o.Z.USE_XMP && n.ApplicationNotes && !q(L)) {
      let e = _.Z.read((0, r.nZ)(n.ApplicationNotes.value), true, a);
      t ? C.xmp = e : (delete e._raw, C = (0, r.wB)({}, C, e))
    }
    if (o.Z.USE_PHOTOSHOP && n.ImageSourceData && n.PhotoshopSettings) {
      let e = p.Z.read(n.PhotoshopSettings.value, i);
      t ? C.photoshop = e : C = (0, r.wB)({}, C, e)
    }
    if (o.Z.USE_TIFF && o.Z.USE_ICC && n.ICC_Profile && !X(j)) {
      let e = h.Z.read(n.ICC_Profile.value, [{
        offset: 0,
        length: n.ICC_Profile.value.length,
        chunkNumber: 1,
        chunksTotal: 1
      }]);
      t ? C.icc = e : C = (0, r.wB)({}, C, e)
    }
    if (o.Z.USE_MAKER_NOTES && n.MakerNote) {
      if (Q(n)) {
        let o = m.Z.read(e, D, n.MakerNote.__offset, s, i);
        t ? C.makerNotes = o : C = (0, r.wB)({}, C, o)
      } else if (J(n)) {
        let o = g.Z.read(e, D, n.MakerNote.__offset, i);
        t ? C.makerNotes = o : C = (0, r.wB)({}, C, o)
      }
    }
    n.MakerNote && delete n.MakerNote.__offset
  }
  if (o.Z.USE_JPEG && o.Z.USE_IPTC && z(x)) {
    A = true;
    let n = f.Z.read(e, x, i);
    t ? C.iptc = n : C = (0, r.wB)({}, C, n)
  }
  if (o.Z.USE_XMP && q(L)) {
    A = true;
    let n = _.Z.read(e, L, a);
    t ? C.xmp = n : (delete n._raw, C = (0, r.wB)({}, C, n))
  }
  if ((o.Z.USE_JPEG || o.Z.USE_WEBP) && o.Z.USE_ICC && X(j)) {
    A = true;
    let t = h.Z.read(e, j, n);
    t instanceof Promise ? N.push(t.then(ea)) : ea(t)
  }
  if (o.Z.USE_MPF && $(M)) {
    A = true;
    let n = c.Z.read(e, M, i);
    t ? C.mpf = n : C = (0, r.wB)({}, C, n)
  }
  if (o.Z.USE_PNG && o.Z.USE_PNG_FILE && ee(k)) {
    A = true;
    let n = E.Z.read(e, k);
    t ? (C.png = C.png ? (0, r.wB)({}, C.png, n) : n, C.pngFile = n) : C = (0, r.wB)({}, C, n)
  }
  if (o.Z.USE_PNG && et(U)) {
    A = true;
    let {
      readTags: t,
      readTagsPromise: r
    } = b.Z.read(e, U, n, i);
    es(t), r && N.push(r.then(e => e.forEach(es)))
  }
  if (o.Z.USE_PNG && en(G)) {
    A = true;
    let n = y.Z.read(e, G);
    t ? C.png = C.png ? (0, r.wB)({}, C.png, n) : n : C = (0, r.wB)({}, C, n)
  }
  if (o.Z.USE_WEBP && er(B)) {
    A = true;
    let n = O.Z.read(e, B);
    t ? C.riff = C.riff ? (0, r.wB)({}, C.riff, n) : n : C = (0, r.wB)({}, C, n)
  }
  if (o.Z.USE_GIF && ei(Z)) {
    A = true;
    let n = v.Z.read(e, Z);
    t ? C.gif = C.gif ? (0, r.wB)({}, C.gif, n) : n : C = (0, r.wB)({}, C, n)
  }
  let F = T.Z.get(C, t);
  F && (t ? C.composite = F : C = (0, r.wB)({}, C, F));
  let eo = (o.Z.USE_JPEG || o.Z.USE_WEBP) && o.Z.USE_EXIF && o.Z.USE_THUMBNAIL && I.Z.get(e, C.Thumbnail, D);
  if (eo ? (A = true, C.Thumbnail = eo) : delete C.Thumbnail, R && (t ? (C.file || (C.file = {}), C.file.FileType = R) : C.FileType = R, A = true), !A) throw new S.Z.MetadataMissingError;
  if (n) return Promise.all(N).then(() => C);
  return C;

  function ea(e) {
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
      e.gps = e.gps || {}, e.gps.Latitude = (0, a.gg)(e.exif.GPSLatitude.value), "S" === e.exif.GPSLatitudeRef.value.join("") && (e.gps.Latitude = -e.gps.Latitude)
    } catch (e) {}
    if (e.exif.GPSLongitude && e.exif.GPSLongitudeRef) try {
      e.gps = e.gps || {}, e.gps.Longitude = (0, a.gg)(e.exif.GPSLongitude.value), "W" === e.exif.GPSLongitudeRef.value.join("") && (e.gps.Longitude = -e.gps.Longitude)
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