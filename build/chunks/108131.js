/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
e = n.nmd(e),
  function() {
    let t = this,
      n = e => new TextEncoder().encode(e);

    function r(e, t) {
      "string" == typeof e && (e = n(e));
      let r = e.length,
        i = t ^ r,
        o = 0,
        a;
      for (; r >= 4;) a = (65535 & (a = 255 & e[o] | (255 & e[++o]) << 8 | (255 & e[++o]) << 16 | (255 & e[++o]) << 24)) * 0x5bd1e995 + (((a >>> 16) * 0x5bd1e995 & 65535) << 16), a ^= a >>> 24, i = (65535 & i) * 0x5bd1e995 + (((i >>> 16) * 0x5bd1e995 & 65535) << 16) ^ (a = (65535 & a) * 0x5bd1e995 + (((a >>> 16) * 0x5bd1e995 & 65535) << 16)), r -= 4, ++o;
      switch (r) {
        case 3:
          i ^= (255 & e[o + 2]) << 16;
        case 2:
          i ^= (255 & e[o + 1]) << 8;
        case 1:
          i ^= 255 & e[o], i = (65535 & i) * 0x5bd1e995 + (((i >>> 16) * 0x5bd1e995 & 65535) << 16)
      }
      return i ^= i >>> 13, i = (65535 & i) * 0x5bd1e995 + (((i >>> 16) * 0x5bd1e995 & 65535) << 16), (i ^= i >>> 15) >>> 0
    }

    function i(e, t) {
      let r, i, o, a, s, l, c, u;
      for ("string" == typeof e && (e = n(e)), r = 3 & e.length, i = e.length - r, o = t, s = 0xcc9e2d51, l = 0x1b873593, u = 0; u < i;) c = 255 & e[u] | (255 & e[++u]) << 8 | (255 & e[++u]) << 16 | (255 & e[++u]) << 24, ++u, o ^= c = (65535 & (c = (c = (65535 & c) * s + (((c >>> 16) * s & 65535) << 16) & 0xffffffff) << 15 | c >>> 17)) * l + (((c >>> 16) * l & 65535) << 16) & 0xffffffff, o = (65535 & (a = (65535 & (o = o << 13 | o >>> 19)) * 5 + (((o >>> 16) * 5 & 65535) << 16) & 0xffffffff)) + 27492 + (((a >>> 16) + 58964 & 65535) << 16);
      switch (c = 0, r) {
        case 3:
          c ^= (255 & e[u + 2]) << 16;
        case 2:
          c ^= (255 & e[u + 1]) << 8;
        case 1:
          c ^= 255 & e[u], o ^= c = (65535 & (c = (c = (65535 & c) * s + (((c >>> 16) * s & 65535) << 16) & 0xffffffff) << 15 | c >>> 17)) * l + (((c >>> 16) * l & 65535) << 16) & 0xffffffff
      }
      return o ^= e.length, o ^= o >>> 16, o = (65535 & o) * 0x85ebca6b + (((o >>> 16) * 0x85ebca6b & 65535) << 16) & 0xffffffff, o ^= o >>> 13, o = (65535 & o) * 0xc2b2ae35 + (((o >>> 16) * 0xc2b2ae35 & 65535) << 16) & 0xffffffff, (o ^= o >>> 16) >>> 0
    }
    let o = i;
    if (o.v2 = r, o.v3 = i, void 0 !== e) e.exports = o;
    else {
      let e = t.murmur;
      o.noConflict = function() {
        return t.murmur = e, o
      }, t.murmur = o
    }
  }()