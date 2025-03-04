/** Chunk was on web.js **/
"use strict";
n.r(t), n.d(t, {
  XXH64: () => h,
  hash: () => g
});
let r = 0x9e3779b185ebca87n,
  i = 0xc2b2ae3d27d4eb4fn,
  o = 0x165667b19e3779f9n,
  a = 0x85ebca77c2b2ae63n,
  s = 0x27d4eb2f165667c5n,
  l = 64n,
  c = 2n ** l - 1n,
  u = new TextEncoder;

function d(e, t, n, r) {
  return BigInt(e) | BigInt(t) << 16n | BigInt(n) << 32n | BigInt(r) << 48n
}

function f(e, t) {
  return BigInt(e[t]) | BigInt(e[t + 1]) << 8n | BigInt(e[t + 2]) << 16n | BigInt(e[t + 3]) << 24n | BigInt(e[t + 4]) << 32n | BigInt(e[t + 5]) << 40n | BigInt(e[t + 6]) << 48n | BigInt(e[t + 7]) << 56n
}

function _(e, t) {
  return e << t & c | e >> l - t
}

function p(e) {
  return BigInt.asUintN(64, e)
}
class h {
  #e;
  #t;
  #n;
  #r;
  #i;
  #o;
  #a;
  #s;
  constructor(e = 0) {
    this.reset(e)
  }
  reset(e = this.#e) {
    return this.#e = BigInt.asUintN(32, BigInt(e)), this.#t = p(this.#e + r + i), this.#n = p(this.#e + i), this.#r = this.#e, this.#i = p(this.#e - r), this.#o = null, this.#a = 0, this.#s = 0, this
  }
  update(e) {
    "string" == typeof e && (e = u.encode(e));
    let t = 0,
      n = e.length,
      o = t + n;
    if (0 === n) return this;
    if (this.#a += n, 0 === this.#s && (this.#o = new Uint8Array(32)), this.#s + n < 32) return this.#o.set(e.subarray(0, n), this.#s), this.#s += n, this;
    if (this.#s > 0) {
      let n;
      this.#o.set(e.subarray(0, 32 - this.#s), this.#s);
      let o = 0;
      n = f(this.#o, o), this.#t = p(_(p(this.#t + n * i), 31n) * r), o += 8, n = f(this.memory, o), this.#n = p(_(p(this.#n + n * i), 31n) * r), o += 8, n = f(this.memory, o), this.#r = p(_(p(this.#r + n * i), 31n) * r), o += 8, n = f(this.memory, o), this.#i = p(_(p(this.#i + n * i), 31n) * r), t += 32 - this.#s, this.#s = 0
    }
    if (t <= o - 32) {
      let n = o - 32;
      do {
        let n;
        n = f(e, t), this.#t = p(_(p(this.#t + n * i), 31n) * r), t += 8, n = f(e, t), this.#n = p(_(p(this.#n + n * i), 31n) * r), t += 8, n = f(e, t), this.#r = p(_(p(this.#r + n * i), 31n) * r), t += 8, n = f(e, t), this.#i = p(_(p(this.#i + n * i), 31n) * r), t += 8
      } while (t <= n)
    }
    return t < o && (this.#o.set(e.subarray(t, o), this.#s), this.#s = o - t), this
  }
  digest() {
    let e = this.#o,
      t = this.#s,
      n = 0,
      l = 0n,
      c = 0n,
      u = 0n;
    for (this.#a >= 32 ? (l = p((l = _(this.#t, 1n) + _(this.#n, 7n) + _(this.#r, 12n) + _(this.#i, 18n)) ^ _(p(this.#t * i), 31n) * r), l = p(l * r + a), l = p(l ^ _(p(this.#n * i), 31n) * r), l = p(l * r + a), l = p(l ^ _(p(this.#r * i), 31n) * r), l = p(l * r + a), l = p(l ^ _(p(this.#i * i), 31n) * r), l = p(l * r + a)) : l = p(this.#e + s), l += BigInt(this.#a); n <= t - 8;) u = p(_(p((u = f(e, n)) * i), 31n) * r), l = p(_(l ^ u, 27n) * r + a), n += 8;
    for (n + 4 <= t && (l = p(_(l ^ p((u = d(e[n + 1] << 8 | e[n], e[n + 3] << 8 | e[n + 2], 0, 0)) * r), 23n) * i + o), n += 4); n < t;) l = p(_(l ^ p((u = d(e[n++], 0, 0, 0)) * s), 11n) * r);
    return c = p(l >> 33n), l = p((l ^ c) * i), c = p(l >> 29n), l = p((l ^ c) * o), c = p(l >> 32n), l = p(l ^ c)
  }
}

function g(e, t = 0) {
  return new h(t).update(e).digest()
}