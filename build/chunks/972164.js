/** Chunk was on web.js **/
/** chunk id: 972164, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => d
});
var Chunk134994 = require("./134994.js"),
  Chunk832454 = require("./832454.js"),
  Chunk741605 = require("./741605.js"),
  Chunk492733 = require("./492733.js");

function s(e, t, n, r, i, o) {
  let s = e[t++] ^ n[r++],
    l = e[t++] ^ n[r++],
    c = e[t++] ^ n[r++],
    u = e[t++] ^ n[r++],
    d = e[t++] ^ n[r++],
    f = e[t++] ^ n[r++],
    p = e[t++] ^ n[r++],
    _ = e[t++] ^ n[r++],
    m = e[t++] ^ n[r++],
    h = e[t++] ^ n[r++],
    g = e[t++] ^ n[r++],
    E = e[t++] ^ n[r++],
    b = e[t++] ^ n[r++],
    y = e[t++] ^ n[r++],
    O = e[t++] ^ n[r++],
    v = e[t++] ^ n[r++],
    S = s,
    I = l,
    T = c,
    C = u,
    A = d,
    N = f,
    P = p,
    R = _,
    w = m,
    D = h,
    x = g,
    L = E,
    j = b,
    M = y,
    k = O,
    U = v;
  for (let e = 0; e < 8; e += 2) A ^= (0, a.XG)(S + j | 0, 7), w ^= (0, a.XG)(A + S | 0, 9), j ^= (0, a.XG)(w + A | 0, 13), S ^= (0, a.XG)(j + w | 0, 18), D ^= (0, a.XG)(N + I | 0, 7), M ^= (0, a.XG)(D + N | 0, 9), I ^= (0, a.XG)(M + D | 0, 13), N ^= (0, a.XG)(I + M | 0, 18), k ^= (0, a.XG)(x + P | 0, 7), T ^= (0, a.XG)(k + x | 0, 9), P ^= (0, a.XG)(T + k | 0, 13), x ^= (0, a.XG)(P + T | 0, 18), C ^= (0, a.XG)(U + L | 0, 7), R ^= (0, a.XG)(C + U | 0, 9), L ^= (0, a.XG)(R + C | 0, 13), U ^= (0, a.XG)(L + R | 0, 18), I ^= (0, a.XG)(S + C | 0, 7), T ^= (0, a.XG)(I + S | 0, 9), C ^= (0, a.XG)(T + I | 0, 13), S ^= (0, a.XG)(C + T | 0, 18), P ^= (0, a.XG)(N + A | 0, 7), R ^= (0, a.XG)(P + N | 0, 9), A ^= (0, a.XG)(R + P | 0, 13), N ^= (0, a.XG)(A + R | 0, 18), L ^= (0, a.XG)(x + D | 0, 7), w ^= (0, a.XG)(L + x | 0, 9), D ^= (0, a.XG)(w + L | 0, 13), x ^= (0, a.XG)(D + w | 0, 18), j ^= (0, a.XG)(U + k | 0, 7), M ^= (0, a.XG)(j + U | 0, 9), k ^= (0, a.XG)(M + j | 0, 13), U ^= (0, a.XG)(k + M | 0, 18);
  i[o++] = s + S | 0, i[o++] = l + I | 0, i[o++] = c + T | 0, i[o++] = u + C | 0, i[o++] = d + A | 0, i[o++] = f + N | 0, i[o++] = p + P | 0, i[o++] = _ + R | 0, i[o++] = m + w | 0, i[o++] = h + D | 0, i[o++] = g + x | 0, i[o++] = E + L | 0, i[o++] = b + j | 0, i[o++] = y + M | 0, i[o++] = O + k | 0, i[o++] = v + U | 0
}

function l(e, t, n, r, i) {
  let o = r + 0,
    a = r + 16 * i;
  for (let r = 0; r < 16; r++) n[a + r] = e[t + (2 * i - 1) * 16 + r];
  for (let r = 0; r < i; r++, o += 16, t += 16) s(n, a, e, t, n, o), r > 0 && (a += 16), s(n, o, e, t += 16, n, a)
}

function c(e, t, n) {
  let {
    N: s,
    r: l,
    p: c,
    dkLen: u,
    asyncTick: d,
    maxmem: f,
    onProgress: p
  } = (0, a.U5)({
    dkLen: 32,
    asyncTick: 10,
    maxmem: 0x40000400
  }, n);
  if ((0, r.Rx)(s), (0, r.Rx)(l), (0, r.Rx)(c), (0, r.Rx)(u), (0, r.Rx)(d), (0, r.Rx)(f), true !== p && "function" != typeof p) throw Error("progressCb should be function");
  let _ = 128 * l,
    m = _ / 4;
  if (s <= 1 || (s & s - 1) != 0 || s > 0x100000000) throw Error("Scrypt: N must be larger than 1, a power of 2, and less than 2^32");
  if (c < 0 || c > (0x100000000 - 1) * 32 / _) throw Error("Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)");
  if (u < 0 || u > (0x100000000 - 1) * 32) throw Error("Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32");
  let h = _ * (s + c);
  if (h > f) throw Error(`Scrypt: parameters too large, ${h} (128 * r * (N + p)) > ${f} (maxmem)`);
  let g = (0, o.n)(i.JQ, e, t, {
      c: 1,
      dkLen: _ * c
    }),
    E = (0, a.Jq)(g),
    b = (0, a.Jq)(new Uint8Array(_ * s)),
    y = (0, a.Jq)(new Uint8Array(_)),
    O = () => {};
  if (p) {
    let e = 2 * s * c,
      t = Math.max(Math.floor(e / 1e4), 1),
      n = 0;
    O = () => {
      n++, p && (!(n % t) || n === e) && p(n / e)
    }
  }
  return {
    N: s,
    r: l,
    p: c,
    dkLen: u,
    blockSize32: m,
    V: b,
    B32: E,
    B: g,
    tmp: y,
    blockMixCb: O,
    asyncTick: d
  }
}

function u(e, t, n, r, a) {
  let s = (0, o.n)(i.JQ, e, n, {
    c: 1,
    dkLen: t
  });
  return n.fill(0), r.fill(0), a.fill(0), s
}
async function d(e, t, n) {
  let {
    N: r,
    r: i,
    p: o,
    dkLen: s,
    blockSize32: d,
    V: f,
    B32: p,
    B: _,
    tmp: m,
    blockMixCb: h,
    asyncTick: g
  } = c(e, t, n);
  a.iA || (0, a.l1)(p);
  for (let e = 0; e < o; e++) {
    let t = d * e;
    for (let e = 0; e < d; e++) f[e] = p[t + e];
    let n = 0;
    await (0, a.oY)(r - 1, g, () => {
      l(f, n, f, n += d, i), h()
    }), l(f, (r - 1) * d, p, t, i), h(), await (0, a.oY)(r, g, () => {
      let e = p[t + d - 16] % r;
      for (let n = 0; n < d; n++) m[n] = p[t + n] ^ f[e * d + n];
      l(m, 0, p, t, i), h()
    })
  }
  return a.iA || (0, a.l1)(p), u(e, s, _, f, m)
}