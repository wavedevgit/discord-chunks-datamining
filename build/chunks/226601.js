/** Chunk was on web.js **/
/** chunk id: 226601, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk890167 = require("./890167.js"),
  Chunk668459 = require("./668459.js"),
  Chunk105423 = require("./105423.js"),
  Chunk643479 = require("./643479.js"),
  Chunk801765 = require("./801765.js");
let l = {
    read: u
  },
  c = 16;

function u(e, t, n) {
  let i = r.A.getByteOrder(e, t),
    o = (0, s.y)(e, a.dA, t, (0, s.x)(e, t, i), i, n);
  return d(e, t, o, i)
}

function d(e, t, n, r) {
  if (!n.MPEntry) return n;
  let a = [];
  for (let s = 0; s < Math.ceil(n.MPEntry.value.length / c); s++) {
    a[s] = {};
    let l = f(n.MPEntry.value, s * c, i.A.getTypeSize("LONG"), r);
    a[s].ImageFlags = p(l), a[s].ImageFormat = _(l), a[s].ImageType = h(l);
    let u = f(n.MPEntry.value, s * c + 4, i.A.getTypeSize("LONG"), r);
    a[s].ImageSize = {
      value: u,
      description: "" + u
    };
    let d = m(s, n.MPEntry, r, t);
    a[s].ImageOffset = {
      value: d,
      description: "" + d
    };
    let g = f(n.MPEntry.value, s * c + 12, i.A.getTypeSize("SHORT"), r);
    a[s].DependentImage1EntryNumber = {
      value: g,
      description: "" + g
    };
    let E = f(n.MPEntry.value, s * c + 14, i.A.getTypeSize("SHORT"), r);
    a[s].DependentImage2EntryNumber = {
      value: E,
      description: "" + E
    }, a[s].image = e.buffer.slice(d, d + u), (0, o.L$)(a[s], "base64", function() {
      return (0, o.Zo)(this.image)
    })
  }
  return n.Images = a, n
}

function f(e, t, n, i) {
  if (i === r.A.LITTLE_ENDIAN) {
    let r = 0;
    for (let i = 0; i < n; i++) r += e[t + i] << 8 * i;
    return r
  }
  let a = 0;
  for (let r = 0; r < n; r++) a += e[t + r] << 8 * (n - 1 - r);
  return a
}

function p(e) {
  let t = [e >> 31 & 1, e >> 30 & 1, e >> 29 & 1],
    n = [];
  return t[0] && n.push("Dependent Parent Image"), t[1] && n.push("Dependent Child Image"), t[2] && n.push("Representative Image"), {
    value: t,
    description: n.join(", ") || "None"
  }
}

function _(e) {
  let t = e >> 24 & 7;
  return {
    value: t,
    description: 0 === t ? "JPEG" : "Unknown"
  }
}

function h(e) {
  let t = 0xffffff & e;
  return {
    value: t,
    description: ({
      196608: "Baseline MP Primary Image",
      65537: "Large Thumbnail (VGA equivalent)",
      65538: "Large Thumbnail (Full HD equivalent)",
      131073: "Multi-Frame Image (Panorama)",
      131074: "Multi-Frame Image (Disparity)",
      131075: "Multi-Frame Image (Multi-Angle)",
      0: "Undefined"
    })[t] || "Unknown"
  }
}

function m(e, t, n, r) {
  return g(e) ? 0 : f(t.value, e * c + 8, i.A.getTypeSize("LONG"), n) + r
}

function g(e) {
  return 0 === e
}