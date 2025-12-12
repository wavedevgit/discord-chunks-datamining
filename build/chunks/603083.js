/** Chunk was on web.js **/
/** chunk id: 603083, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk822632 = require("./822632.js"),
  Chunk633971 = require("./633971.js"),
  Chunk649793 = require("./649793.js"),
  Chunk150629 = require("./150629.js"),
  Chunk638900 = require("./638900.js"),
  Chunk791473 = require("./791473.js");
let c = {
    read: E
  },
  u = "STATE_KEYWORD",
  d = "STATE_COMPRESSION",
  f = "STATE_LANG",
  p = "STATE_TRANSLATED_KEYWORD",
  _ = "STATE_TEXT",
  m = 1,
  h = 1,
  g = 6;

function E(e, t, n, r) {
  let i = {},
    o = [];
  for (let c = 0; c < t.length; c++) {
    let {
      offset: u,
      length: d,
      type: f
    } = t[c], p = b(e, u, d, f, n);
    if (p instanceof Promise) o.push(p.then(({
      name: e,
      value: t,
      description: n
    }) => {
      try {
        if (l.Z.USE_EXIF && A(e, t)) return {
          __exif: a.Z.read(P(t), g, r).tags
        };
        if (l.Z.USE_IPTC && N(e, t)) return {
          __iptc: s.Z.read(P(t), 0, r)
        };
        if (e && !A(e, t) && !N(e, t)) return {
          [e]: {
            value: t,
            description: n
          }
        }
      } catch (e) {}
      return {}
    }));
    else {
      let {
        name: e,
        value: t,
        description: n
      } = p;
      e && (i[e] = {
        value: t,
        description: n
      })
    }
  }
  return {
    readTags: i,
    readTagsPromise: o.length > 0 ? Promise.all(o) : true
  }
}

function b(e, t, n, i, a) {
  let s, l = [],
    c = [],
    h = [],
    g = u,
    E = r.p4;
  for (let r = 0; r < n && t + r < e.byteLength; r++) {
    if (g === d) {
      E = y({
        type: i,
        dataView: e,
        offset: t + r
      }), i === o.Jn && (r += m), g = O(i, g);
      continue
    }
    if (g === _) {
      s = new DataView(e.buffer.slice(t + r, t + n));
      break
    }
    let a = e.getUint8(t + r);
    0 === a ? g = O(i, g) : g === u ? l.push(a) : g === f ? c.push(a) : g === p && h.push(a)
  }
  if (E !== r.p4 && !a) return {};
  let b = (0, r.Lj)(s, E, v(i));
  return b instanceof Promise ? b.then(e => S(e, i, c, l)).catch(() => S("<text using unknown compression>".split(""), i, c, l)) : S(b, i, c, l)
}

function y({
  type: e,
  dataView: t,
  offset: n
}) {
  if (e === o.Jn) {
    if (t.getUint8(n) === h) return t.getUint8(n + 1)
  } else if (e === o.z_) return t.getUint8(n);
  return r.p4
}

function O(e, t) {
  return t === u && [o.Jn, o.z_].includes(e) ? d : t === d ? e === o.Jn ? f : _ : t === f ? p : _
}

function v(e) {
  return e === o.a0 || e === o.z_ ? "latin1" : "utf-8"
}

function S(e, t, n, r) {
  let i = T(e);
  return {
    name: I(t, n, r),
    value: i,
    description: t === o.Jn ? C(e) : i
  }
}

function I(e, t, n) {
  let i = (0, r.nZ)(n);
  if (e === o.a0 || 0 === t.length) return i;
  let a = (0, r.nZ)(t);
  return `${i} (${a})`
}

function T(e) {
  return e instanceof DataView ? (0, r.oH)(e, 0, e.byteLength) : e
}

function C(e) {
  return i.Z.decode("UTF-8", e)
}

function A(e, t) {
  return "raw profile type exif" === e.toLowerCase() && "exif" === t.substring(1, 5)
}

function N(e, t) {
  return "raw profile type iptc" === e.toLowerCase() && "iptc" === t.substring(1, 5)
}

function P(e) {
  return R(e.match(/\n(exif|iptc)\n\s*\d+\n([\s\S]*)$/)[2].replace(/\n/g, ""))
}

function R(e) {
  let t = new DataView(new ArrayBuffer(e.length / 2));
  for (let n = 0; n < e.length; n += 2) t.setUint8(n / 2, parseInt(e.substring(n, n + 2), 16));
  return t
}