/** Chunk was on web.js **/
"use strict";
n.r(t), n.d(t, {
  XXH64: () => h,
  hash: () => m
});
let r = 0x9e3779b185ebca87n,
  i = 0xc2b2ae3d27d4eb4fn,
  a = 0x165667b19e3779f9n,
  o = 0x85ebca77c2b2ae63n,
  s = 0x27d4eb2f165667c5n,
  l = 64n,
  c = 2n ** l - 1n,
  u = new TextEncoder;

function d(e, t, n, r) {
  return BigInt(e) | BigInt(t) << 16n | BigInt(n) << 32n | BigInt(r) << 48n
}

function _(e, t) {
  return BigInt(e[t]) | BigInt(e[t + 1]) << 8n | BigInt(e[t + 2]) << 16n | BigInt(e[t + 3]) << 24n | BigInt(e[t + 4]) << 32n | BigInt(e[t + 5]) << 40n | BigInt(e[t + 6]) << 48n | BigInt(e[t + 7]) << 56n
}

function f(e, t) {
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
  #a;
  #o;
  #s;
  constructor(e = 0) {
    this.reset(e)
  }
  reset(e = this.#e) {
    return this.#e = BigInt.asUintN(32, BigInt(e)), this.#t = p(this.#e + r + i), this.#n = p(this.#e + i), this.#r = this.#e, this.#i = p(this.#e - r), this.#a = null, this.#o = 0, this.#s = 0, this
  }
  update(e) {
    "string" == typeof e && (e = u.encode(e));
    let t = 0,
      n = e.length,
      a = t + n;
    if (0 === n) return this;
    if (this.#o += n, 0 === this.#s && (this.#a = new Uint8Array(32)), this.#s + n < 32) return this.#a.set(e.subarray(0, n), this.#s), this.#s += n, this;
    if (this.#s > 0) {
      let n;
      this.#a.set(e.subarray(0, 32 - this.#s), this.#s);
      let a = 0;
      n = _(this.#a, a), this.#t = p(f(p(this.#t + n * i), 31n) * r), a += 8, n = _(this.memory, a), this.#n = p(f(p(this.#n + n * i), 31n) * r), a += 8, n = _(this.memory, a), this.#r = p(f(p(this.#r + n * i), 31n) * r), a += 8, n = _(this.memory, a), this.#i = p(f(p(this.#i + n * i), 31n) * r), t += 32 - this.#s, this.#s = 0
    }
    if (t <= a - 32) {
      let n = a - 32;
      do {
        let n;
        n = _(e, t), this.#t = p(f(p(this.#t + n * i), 31n) * r), t += 8, n = _(e, t), this.#n = p(f(p(this.#n + n * i), 31n) * r), t += 8, n = _(e, t), this.#r = p(f(p(this.#r + n * i), 31n) * r), t += 8, n = _(e, t), this.#i = p(f(p(this.#i + n * i), 31n) * r), t += 8
      } while (t <= n)
    }
    return t < a && (this.#a.set(e.subarray(t, a), this.#s), this.#s = a - t), this
  }
  digest() {
    let e = this.#a,
      t = this.#s,
      n = 0,
      l = 0n,
      c = 0n,
      u = 0n;
    for (this.#o >= 32 ? (l = p((l = f(this.#t, 1n) + f(this.#n, 7n) + f(this.#r, 12n) + f(this.#i, 18n)) ^ f(p(this.#t * i), 31n) * r), l = p(l * r + o), l = p(l ^ f(p(this.#n * i), 31n) * r), l = p(l * r + o), l = p(l ^ f(p(this.#r * i), 31n) * r), l = p(l * r + o), l = p(l ^ f(p(this.#i * i), 31n) * r), l = p(l * r + o)) : l = p(this.#e + s), l += BigInt(this.#o); n <= t - 8;) u = p(f(p((u = _(e, n)) * i), 31n) * r), l = p(f(l ^ u, 27n) * r + o), n += 8;
    for (n + 4 <= t && (l = p(f(l ^ p((u = d(e[n + 1] << 8 | e[n], e[n + 3] << 8 | e[n + 2], 0, 0)) * r), 23n) * i + a), n += 4); n < t;) l = p(f(l ^ p((u = d(e[n++], 0, 0, 0)) * s), 11n) * r);
    return c = p(l >> 33n), l = p((l ^ c) * i), c = p(l >> 29n), l = p((l ^ c) * a), c = p(l >> 32n), l = p(l ^ c)
  }
}

function m(e, t = 0) {
  return new h(t).update(e).digest()
}