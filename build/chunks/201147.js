/** Chunk was on web.js **/
/** chunk id: 201147, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk643479 = require("./643479.js"),
  Chunk177487 = require("./177487.js"),
  Chunk234291 = require("./234291.js"),
  Chunk664741 = require("./664741.js"),
  Chunk525012 = require("./525012.js"),
  Chunk761799 = require("./761799.js");
let c = {
    read: E
  },
  u = "STATE_KEYWORD",
  d = "STATE_COMPRESSION",
  f = "STATE_LANG",
  p = "STATE_TRANSLATED_KEYWORD",
  _ = "STATE_TEXT",
  h = 1,
  m = 1,
  g = 6;

function E(e, t, n, r) {
  let i = {},
    a = [];
  for (let c = 0; c < t.length; c++) {
    let {
      offset: u,
      length: d,
      type: f
    } = t[c], p = y(e, u, d, f, n);
    if (p instanceof Promise) a.push(p.then(({
      name: e,
      value: t,
      description: n
    }) => {
      try {
        if (l.A.USE_EXIF && C(e, t)) return {
          __exif: s.A.read(R(t), g, r).tags
        };
        if (l.A.USE_IPTC && N(e, t)) return {
          __iptc: o.A.read(R(t), 0, r)
        };
        if (e && !C(e, t) && !N(e, t)) return {
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
    readTagsPromise: a.length > 0 ? Promise.all(a) : true
  }
}

function y(e, t, n, i, s) {
  let o, l = [],
    c = [],
    m = [],
    g = u,
    E = r.Gl;
  for (let r = 0; r < n && t + r < e.byteLength; r++) {
    if (g === d) {
      E = b({
        type: i,
        dataView: e,
        offset: t + r
      }), i === a.Xo && (r += h), g = O(i, g);
      continue
    }
    if (g === _) {
      o = new DataView(e.buffer.slice(t + r, t + n));
      break
    }
    let s = e.getUint8(t + r);
    0 === s ? g = O(i, g) : g === u ? l.push(s) : g === f ? c.push(s) : g === p && m.push(s)
  }
  if (E !== r.Gl && !s) return {};
  let y = (0, r.mF)(o, E, v(i));
  return y instanceof Promise ? y.then(e => A(e, i, c, l)).catch(() => A("<text using unknown compression>".split(""), i, c, l)) : A(y, i, c, l)
}

function b({
  type: e,
  dataView: t,
  offset: n
}) {
  if (e === a.Xo) {
    if (t.getUint8(n) === m) return t.getUint8(n + 1)
  } else if (e === a.aA) return t.getUint8(n);
  return r.Gl
}

function O(e, t) {
  return t === u && [a.Xo, a.aA].includes(e) ? d : t === d ? e === a.Xo ? f : _ : t === f ? p : _
}

function v(e) {
  return e === a.HL || e === a.aA ? "latin1" : "utf-8"
}

function A(e, t, n, r) {
  let i = S(e);
  return {
    name: I(t, n, r),
    value: i,
    description: t === a.Xo ? T(e) : i
  }
}

function I(e, t, n) {
  let i = (0, r.YF)(n);
  if (e === a.HL || 0 === t.length) return i;
  let s = (0, r.YF)(t);
  return `${i} (${s})`
}

function S(e) {
  return e instanceof DataView ? (0, r.hT)(e, 0, e.byteLength) : e
}

function T(e) {
  return i.A.decode("UTF-8", e)
}

function C(e, t) {
  return "raw profile type exif" === e.toLowerCase() && "exif" === t.substring(1, 5)
}

function N(e, t) {
  return "raw profile type iptc" === e.toLowerCase() && "iptc" === t.substring(1, 5)
}

function R(e) {
  return w(e.match(/\n(exif|iptc)\n\s*\d+\n([\s\S]*)$/)[2].replace(/\n/g, ""))
}

function w(e) {
  let t = new DataView(new ArrayBuffer(e.length / 2));
  for (let n = 0; n < e.length; n += 2) t.setUint8(n / 2, parseInt(e.substring(n, n + 2), 16));
  return t
}