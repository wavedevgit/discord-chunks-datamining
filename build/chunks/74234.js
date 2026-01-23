/** Chunk was on web.js **/
/** chunk id: 74234, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => d
});
var Chunk294946 = require("./294946.js"),
  Chunk58862 = require("./58862.js"),
  Chunk274004 = require("./274004.js"),
  Chunk15020 = require("./15020.js");

function o(e, t, n, r, i, a) {
  let o = e[t++] ^ n[r++],
    l = e[t++] ^ n[r++],
    c = e[t++] ^ n[r++],
    u = e[t++] ^ n[r++],
    d = e[t++] ^ n[r++],
    f = e[t++] ^ n[r++],
    p = e[t++] ^ n[r++],
    _ = e[t++] ^ n[r++],
    h = e[t++] ^ n[r++],
    m = e[t++] ^ n[r++],
    g = e[t++] ^ n[r++],
    E = e[t++] ^ n[r++],
    y = e[t++] ^ n[r++],
    b = e[t++] ^ n[r++],
    O = e[t++] ^ n[r++],
    v = e[t++] ^ n[r++],
    A = o,
    I = l,
    S = c,
    T = u,
    C = d,
    N = f,
    R = p,
    w = _,
    P = h,
    D = m,
    x = g,
    L = E,
    j = y,
    M = b,
    k = O,
    U = v;
  for (let e = 0; e < 8; e += 2) C ^= (0, s.aZ)(A + j | 0, 7), P ^= (0, s.aZ)(C + A | 0, 9), j ^= (0, s.aZ)(P + C | 0, 13), A ^= (0, s.aZ)(j + P | 0, 18), D ^= (0, s.aZ)(N + I | 0, 7), M ^= (0, s.aZ)(D + N | 0, 9), I ^= (0, s.aZ)(M + D | 0, 13), N ^= (0, s.aZ)(I + M | 0, 18), k ^= (0, s.aZ)(x + R | 0, 7), S ^= (0, s.aZ)(k + x | 0, 9), R ^= (0, s.aZ)(S + k | 0, 13), x ^= (0, s.aZ)(R + S | 0, 18), T ^= (0, s.aZ)(U + L | 0, 7), w ^= (0, s.aZ)(T + U | 0, 9), L ^= (0, s.aZ)(w + T | 0, 13), U ^= (0, s.aZ)(L + w | 0, 18), I ^= (0, s.aZ)(A + T | 0, 7), S ^= (0, s.aZ)(I + A | 0, 9), T ^= (0, s.aZ)(S + I | 0, 13), A ^= (0, s.aZ)(T + S | 0, 18), R ^= (0, s.aZ)(N + C | 0, 7), w ^= (0, s.aZ)(R + N | 0, 9), C ^= (0, s.aZ)(w + R | 0, 13), N ^= (0, s.aZ)(C + w | 0, 18), L ^= (0, s.aZ)(x + D | 0, 7), P ^= (0, s.aZ)(L + x | 0, 9), D ^= (0, s.aZ)(P + L | 0, 13), x ^= (0, s.aZ)(D + P | 0, 18), j ^= (0, s.aZ)(U + k | 0, 7), M ^= (0, s.aZ)(j + U | 0, 9), k ^= (0, s.aZ)(M + j | 0, 13), U ^= (0, s.aZ)(k + M | 0, 18);
  i[a++] = o + A | 0, i[a++] = l + I | 0, i[a++] = c + S | 0, i[a++] = u + T | 0, i[a++] = d + C | 0, i[a++] = f + N | 0, i[a++] = p + R | 0, i[a++] = _ + w | 0, i[a++] = h + P | 0, i[a++] = m + D | 0, i[a++] = g + x | 0, i[a++] = E + L | 0, i[a++] = y + j | 0, i[a++] = b + M | 0, i[a++] = O + k | 0, i[a++] = v + U | 0
}

function l(e, t, n, r, i) {
  let a = r + 0,
    s = r + 16 * i;
  for (let r = 0; r < 16; r++) n[s + r] = e[t + (2 * i - 1) * 16 + r];
  for (let r = 0; r < i; r++, a += 16, t += 16) o(n, s, e, t, n, a), r > 0 && (s += 16), o(n, a, e, t += 16, n, s)
}

function c(e, t, n) {
  let {
    N: o,
    r: l,
    p: c,
    dkLen: u,
    asyncTick: d,
    maxmem: f,
    onProgress: p
  } = (0, s.tY)({
    dkLen: 32,
    asyncTick: 10,
    maxmem: 0x40000400
  }, n);
  if ((0, r.ai)(o), (0, r.ai)(l), (0, r.ai)(c), (0, r.ai)(u), (0, r.ai)(d), (0, r.ai)(f), true !== p && "function" != typeof p) throw Error("progressCb should be function");
  let _ = 128 * l,
    h = _ / 4;
  if (o <= 1 || (o & o - 1) != 0 || o > 0x100000000) throw Error("Scrypt: N must be larger than 1, a power of 2, and less than 2^32");
  if (c < 0 || c > (0x100000000 - 1) * 32 / _) throw Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
  if (u < 0 || u > (0x100000000 - 1) * 32) throw Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
  let m = _ * (o + c);
  if (m > f) throw Error(`Scrypt: parameters too large, ${m} (128 * r * (N + p)) > ${f} (maxmem)`);
  let g = (0, a.A)(i.sc, e, t, {
      c: 1,
      dkLen: _ * c
    }),
    E = (0, s.DH)(g),
    y = (0, s.DH)(new Uint8Array(_ * o)),
    b = (0, s.DH)(new Uint8Array(_)),
    O = () => {};
  if (p) {
    let e = 2 * o * c,
      t = Math.max(Math.floor(e / 1e4), 1),
      n = 0;
    O = () => {
      n++, p && (!(n % t) || n === e) && p(n / e)
    }
  }
  return {
    N: o,
    r: l,
    p: c,
    dkLen: u,
    blockSize32: h,
    V: y,
    B32: E,
    B: g,
    tmp: b,
    blockMixCb: O,
    asyncTick: d
  }
}

function u(e, t, n, r, s) {
  let o = (0, a.A)(i.sc, e, n, {
    c: 1,
    dkLen: t
  });
  return n.fill(0), r.fill(0), s.fill(0), o
}
async function d(e, t, n) {
  let {
    N: r,
    r: i,
    p: a,
    dkLen: o,
    blockSize32: d,
    V: f,
    B32: p,
    B: _,
    tmp: h,
    blockMixCb: m,
    asyncTick: g
  } = c(e, t, n);
  s.qv || (0, s.Fc)(p);
  for (let e = 0; e < a; e++) {
    let t = d * e;
    for (let e = 0; e < d; e++) f[e] = p[t + e];
    let n = 0;
    await (0, s.$h)(r - 1, g, () => {
      l(f, n, f, n += d, i), m()
    }), l(f, (r - 1) * d, p, t, i), m(), await (0, s.$h)(r, g, () => {
      let e = p[t + d - 16] % r;
      for (let n = 0; n < d; n++) h[n] = p[t + n] ^ f[e * d + n];
      l(h, 0, p, t, i), m()
    })
  }
  return s.qv || (0, s.Fc)(p), u(e, o, _, f, h)
}