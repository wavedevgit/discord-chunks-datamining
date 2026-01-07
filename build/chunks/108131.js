/** Chunk was on web.js **/
/** chunk id: 108131, original params: e,t,n (module,exports,re quire) **/
e = require.nmd(module),
  function() {
    let t = this,
      n = e => new TextEncoder().encode(e);

    function r(e, t) {
      let r, i, a, o, s, l, c, u;
      for ("string" == typeof e && (e = n(e)), r = 3 & e.length, i = e.length - r, a = t, s = 0xcc9e2d51, l = 0x1b873593, u = 0; u < i;) c = 255 & e[u] | (255 & e[++u]) << 8 | (255 & e[++u]) << 16 | (255 & e[++u]) << 24, ++u, a ^= c = (65535 & (c = (c = (65535 & c) * s + (((c >>> 16) * s & 65535) << 16) | 0) << 15 | c >>> 17)) * l + (((c >>> 16) * l & 65535) << 16) | 0, a = (65535 & (o = (65535 & (a = a << 13 | a >>> 19)) * 5 + (((a >>> 16) * 5 & 65535) << 16) | 0)) + 27492 + (((o >>> 16) + 58964 & 65535) << 16);
      switch (c = 0, r) {
        case 3:
          c ^= (255 & e[u + 2]) << 16;
        case 2:
          c ^= (255 & e[u + 1]) << 8;
        case 1:
          c ^= 255 & e[u], a ^= c = (65535 & (c = (c = (65535 & c) * s + (((c >>> 16) * s & 65535) << 16) | 0) << 15 | c >>> 17)) * l + (((c >>> 16) * l & 65535) << 16) | 0
      }
      return a ^= e.length, a ^= a >>> 16, a = (65535 & a) * 0x85ebca6b + (((a >>> 16) * 0x85ebca6b & 65535) << 16) | 0, a ^= a >>> 13, a = (65535 & a) * 0xc2b2ae35 + (((a >>> 16) * 0xc2b2ae35 & 65535) << 16) | 0, (a ^= a >>> 16) >>> 0
    }
    let i = r;
    if (i.v2 = function(e, t) {
        "string" == typeof e && (e = n(e));
        let r = e.length,
          i = t ^ r,
          a = 0,
          o;
        for (; r >= 4;) o = (65535 & (o = 255 & e[a] | (255 & e[++a]) << 8 | (255 & e[++a]) << 16 | (255 & e[++a]) << 24)) * 0x5bd1e995 + (((o >>> 16) * 0x5bd1e995 & 65535) << 16), o ^= o >>> 24, i = (65535 & i) * 0x5bd1e995 + (((i >>> 16) * 0x5bd1e995 & 65535) << 16) ^ (o = (65535 & o) * 0x5bd1e995 + (((o >>> 16) * 0x5bd1e995 & 65535) << 16)), r -= 4, ++a;
        switch (r) {
          case 3:
            i ^= (255 & e[a + 2]) << 16;
          case 2:
            i ^= (255 & e[a + 1]) << 8;
          case 1:
            i ^= 255 & e[a], i = (65535 & i) * 0x5bd1e995 + (((i >>> 16) * 0x5bd1e995 & 65535) << 16)
        }
        return i ^= i >>> 13, i = (65535 & i) * 0x5bd1e995 + (((i >>> 16) * 0x5bd1e995 & 65535) << 16), (i ^= i >>> 15) >>> 0
      }, i.v3 = r, true !== e) e.exports = i;
    else {
      let e = t.murmur;
      i.noConflict = function() {
        return t.murmur = e, i
      }, t.murmur = i
    }
  }()