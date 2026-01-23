/** Chunk was on web.js **/
/** chunk id: 195554, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, i, Chunk549412 = require("./549412.js"),
  Chunk22700 = require("./22700.js"),
  Chunk96726 = require("./96726.js"),
  Chunk311564 = require("./311564.js"),
  Chunk552229 = require("./552229.js"),
  u = 0,
  d = 1,
  f = 2,
  p = 4,
  _ = 5,
  h = 6,
  m = 0,
  g = 1,
  E = 2,
  y = false,
  b = false,
  O = false,
  v = false,
  A = 8,
  I = 1,
  S = 2,
  T = 3,
  C = 4,
  N = 5,
  w = 6,
  R = 7,
  P = 8,
  D = 9,
  x = 10,
  L = 11,
  j = 12,
  M = 13,
  k = 14,
  U = 15,
  G = 16,
  V = 17,
  F = 18,
  B = 19,
  H = 20,
  Y = 21,
  W = 22,
  K = 23,
  z = 24,
  q = 25,
  Z = 26,
  X = 27,
  Q = 28,
  J = 29,
  $ = 30,
  ee = 31,
  et = 852,
  en = 592,
  er = 15;

function ei(e) {
  return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
}

function ea() {
  this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new a.Buf16(320), this.work = new a.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
}

function es(e) {
  var t;
  return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = I, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new a.Buf32(et), t.distcode = t.distdyn = new a.Buf32(en), t.sane = 1, t.back = false, m) : y
}

function eo(e) {
  var t;
  return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, es(e)) : y
}

function el(e, t) {
  var n, r;
  return e && e.state ? (r = e.state, t < 0 ? (n = 0, t = -t) : (n = (t >> 4) + 1, t < 48 && (t &= 15)), t && (t < 8 || t > 15)) ? y : (null !== r.window && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, eo(e)) : y
}

function ec(e, t) {
  var n, r;
  return e ? (e.state = r = new ea, r.window = null, (n = el(e, t)) !== m && (e.state = null), n) : y
}

function eu(e) {
  return ec(e, er)
}
var ed = true;

function ef(e) {
  if (ed) {
    var t;
    for (r = new a.Buf32(512), i = new a.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
    for (; t < 256;) e.lens[t++] = 9;
    for (; t < 280;) e.lens[t++] = 7;
    for (; t < 288;) e.lens[t++] = 8;
    for (c(d, e.lens, 0, 288, r, 0, e.work, {
        bits: 9
      }), t = 0; t < 32;) e.lens[t++] = 5;
    c(f, e.lens, 0, 32, i, 0, e.work, {
      bits: 5
    }), ed = false
  }
  e.lencode = r, e.lenbits = 9, e.distcode = i, e.distbits = 5
}

function ep(e, t, n, r) {
  var i, s = e.state;
  return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new a.Buf8(s.wsize)), r >= s.wsize ? (a.arraySet(s.window, t, n - s.wsize, s.wsize, 0), s.wnext = 0, s.whave = s.wsize) : ((i = s.wsize - s.wnext) > r && (i = r), a.arraySet(s.window, t, n - r, i, s.wnext), (r -= i) ? (a.arraySet(s.window, t, n - r, r, 0), s.wnext = r, s.whave = s.wsize) : (s.wnext += i, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += i))), 0
}

function e_(e, t) {
  var n, r, i, et, en, er, ea, es, eo, el, ec, eu, ed, e_, eh, em, eg, eE, ey, eb, eO, ev, eA, eI, eS = 0,
    eT = new a.Buf8(4),
    eC = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return y;
  (n = e.state).mode === j && (n.mode = M), en = e.next_out, i = e.output, ea = e.avail_out, et = e.next_in, r = e.input, er = e.avail_in, es = n.hold, eo = n.bits, el = er, ec = ea, ev = m;
  i: for (;;) switch (n.mode) {
    case I:
      if (0 === n.wrap) {
        n.mode = M;
        break
      }
      for (; eo < 16;) {
        if (0 === er) break i;
        er--, es += r[et++] << eo, eo += 8
      }
      if (2 & n.wrap && 35615 === es) {
        n.check = 0, eT[0] = 255 & es, eT[1] = es >>> 8 & 255, n.check = o(n.check, eT, 2, 0), es = 0, eo = 0, n.mode = S;
        break
      }
      if (n.flags = 0, n.head && (n.head.done = false), !(1 & n.wrap) || (((255 & es) << 8) + (es >> 8)) % 31) {
        e.msg = "incorrect header check", n.mode = $;
        break
      }
      if ((15 & es) !== A) {
        e.msg = "unknown compression method", n.mode = $;
        break
      }
      if (es >>>= 4, eo -= 4, eO = (15 & es) + 8, 0 === n.wbits) n.wbits = eO;
      else if (eO > n.wbits) {
        e.msg = "invalid window size", n.mode = $;
        break
      }
      n.dmax = 1 << eO, e.adler = n.check = 1, n.mode = 512 & es ? x : j, es = 0, eo = 0;
      break;
    case S:
      for (; eo < 16;) {
        if (0 === er) break i;
        er--, es += r[et++] << eo, eo += 8
      }
      if (n.flags = es, (255 & n.flags) !== A) {
        e.msg = "unknown compression method", n.mode = $;
        break
      }
      if (57344 & n.flags) {
        e.msg = "unknown header flags set", n.mode = $;
        break
      }
      n.head && (n.head.text = es >> 8 & 1), 512 & n.flags && (eT[0] = 255 & es, eT[1] = es >>> 8 & 255, n.check = o(n.check, eT, 2, 0)), es = 0, eo = 0, n.mode = T;
    case T:
      for (; eo < 32;) {
        if (0 === er) break i;
        er--, es += r[et++] << eo, eo += 8
      }
      n.head && (n.head.time = es), 512 & n.flags && (eT[0] = 255 & es, eT[1] = es >>> 8 & 255, eT[2] = es >>> 16 & 255, eT[3] = es >>> 24 & 255, n.check = o(n.check, eT, 4, 0)), es = 0, eo = 0, n.mode = C;
    case C:
      for (; eo < 16;) {
        if (0 === er) break i;
        er--, es += r[et++] << eo, eo += 8
      }
      n.head && (n.head.xflags = 255 & es, n.head.os = es >> 8), 512 & n.flags && (eT[0] = 255 & es, eT[1] = es >>> 8 & 255, n.check = o(n.check, eT, 2, 0)), es = 0, eo = 0, n.mode = N;
    case N:
      if (1024 & n.flags) {
        for (; eo < 16;) {
          if (0 === er) break i;
          er--, es += r[et++] << eo, eo += 8
        }
        n.length = es, n.head && (n.head.extra_len = es), 512 & n.flags && (eT[0] = 255 & es, eT[1] = es >>> 8 & 255, n.check = o(n.check, eT, 2, 0)), es = 0, eo = 0
      } else n.head && (n.head.extra = null);
      n.mode = w;
    case w:
      if (1024 & n.flags && ((eu = n.length) > er && (eu = er), eu && (n.head && (eO = n.head.extra_len - n.length, n.head.extra || (n.head.extra = Array(n.head.extra_len)), a.arraySet(n.head.extra, r, et, eu, eO)), 512 & n.flags && (n.check = o(n.check, r, eu, et)), er -= eu, et += eu, n.length -= eu), n.length)) break i;
      n.length = 0, n.mode = R;
    case R:
      if (2048 & n.flags) {
        if (0 === er) break i;
        eu = 0;
        do eO = r[et + eu++], n.head && eO && n.length < 65536 && (n.head.name += String.fromCharCode(eO)); while (eO && eu < er);
        if (512 & n.flags && (n.check = o(n.check, r, eu, et)), er -= eu, et += eu, eO) break i
      } else n.head && (n.head.name = null);
      n.length = 0, n.mode = P;
    case P:
      if (4096 & n.flags) {
        if (0 === er) break i;
        eu = 0;
        do eO = r[et + eu++], n.head && eO && n.length < 65536 && (n.head.comment += String.fromCharCode(eO)); while (eO && eu < er);
        if (512 & n.flags && (n.check = o(n.check, r, eu, et)), er -= eu, et += eu, eO) break i
      } else n.head && (n.head.comment = null);
      n.mode = D;
    case D:
      if (512 & n.flags) {
        for (; eo < 16;) {
          if (0 === er) break i;
          er--, es += r[et++] << eo, eo += 8
        }
        if (es !== (65535 & n.check)) {
          e.msg = "header crc mismatch", n.mode = $;
          break
        }
        es = 0, eo = 0
      }
      n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = true), e.adler = n.check = 0, n.mode = j;
      break;
    case x:
      for (; eo < 32;) {
        if (0 === er) break i;
        er--, es += r[et++] << eo, eo += 8
      }
      e.adler = n.check = ei(es), es = 0, eo = 0, n.mode = L;
    case L:
      if (0 === n.havedict) return e.next_out = en, e.avail_out = ea, e.next_in = et, e.avail_in = er, n.hold = es, n.bits = eo, E;
      e.adler = n.check = 1, n.mode = j;
    case j:
      if (t === _ || t === h) break i;
    case M:
      if (n.last) {
        es >>>= 7 & eo, eo -= 7 & eo, n.mode = X;
        break
      }
      for (; eo < 3;) {
        if (0 === er) break i;
        er--, es += r[et++] << eo, eo += 8
      }
      switch (n.last = 1 & es, eo -= 1, 3 & (es >>>= 1)) {
        case 0:
          n.mode = k;
          break;
        case 1:
          if (ef(n), n.mode = H, t === h) {
            es >>>= 2, eo -= 2;
            break i
          }
          break;
        case 2:
          n.mode = V;
          break;
        case 3:
          e.msg = "invalid block type", n.mode = $
      }
      es >>>= 2, eo -= 2;
      break;
    case k:
      for (es >>>= 7 & eo, eo -= 7 & eo; eo < 32;) {
        if (0 === er) break i;
        er--, es += r[et++] << eo, eo += 8
      }
      if ((65535 & es) != (es >>> 16 ^ 65535)) {
        e.msg = "invalid stored block lengths", n.mode = $;
        break
      }
      if (n.length = 65535 & es, es = 0, eo = 0, n.mode = U, t === h) break i;
    case U:
      n.mode = G;
    case G:
      if (eu = n.length) {
        if (eu > er && (eu = er), eu > ea && (eu = ea), 0 === eu) break i;
        a.arraySet(i, r, et, eu, en), er -= eu, et += eu, ea -= eu, en += eu, n.length -= eu;
        break
      }
      n.mode = j;
      break;
    case V:
      for (; eo < 14;) {
        if (0 === er) break i;
        er--, es += r[et++] << eo, eo += 8
      }
      if (n.nlen = (31 & es) + 257, eo -= 5, n.ndist = (31 & (es >>>= 5)) + 1, eo -= 5, n.ncode = (15 & (es >>>= 5)) + 4, es >>>= 4, eo -= 4, n.nlen > 286 || n.ndist > 30) {
        e.msg = "too many length or distance symbols", n.mode = $;
        break
      }
      n.have = 0, n.mode = F;
    case F:
      for (; n.have < n.ncode;) {
        for (; eo < 3;) {
          if (0 === er) break i;
          er--, es += r[et++] << eo, eo += 8
        }
        n.lens[eC[n.have++]] = 7 & es, es >>>= 3, eo -= 3
      }
      for (; n.have < 19;) n.lens[eC[n.have++]] = 0;
      if (n.lencode = n.lendyn, n.lenbits = 7, eA = {
          bits: n.lenbits
        }, ev = c(u, n.lens, 0, 19, n.lencode, 0, n.work, eA), n.lenbits = eA.bits, ev) {
        e.msg = "invalid code lengths set", n.mode = $;
        break
      }
      n.have = 0, n.mode = B;
    case B:
      for (; n.have < n.nlen + n.ndist;) {
        for (; eh = (eS = n.lencode[es & (1 << n.lenbits) - 1]) >>> 24, em = eS >>> 16 & 255, eg = 65535 & eS, !(eh <= eo);) {
          if (0 === er) break i;
          er--, es += r[et++] << eo, eo += 8
        }
        if (eg < 16) es >>>= eh, eo -= eh, n.lens[n.have++] = eg;
        else {
          if (16 === eg) {
            for (eI = eh + 2; eo < eI;) {
              if (0 === er) break i;
              er--, es += r[et++] << eo, eo += 8
            }
            if (es >>>= eh, eo -= eh, 0 === n.have) {
              e.msg = "invalid bit length repeat", n.mode = $;
              break
            }
            eO = n.lens[n.have - 1], eu = 3 + (3 & es), es >>>= 2, eo -= 2
          } else if (17 === eg) {
            for (eI = eh + 3; eo < eI;) {
              if (0 === er) break i;
              er--, es += r[et++] << eo, eo += 8
            }
            es >>>= eh, eo -= eh, eO = 0, eu = 3 + (7 & es), es >>>= 3, eo -= 3
          } else {
            for (eI = eh + 7; eo < eI;) {
              if (0 === er) break i;
              er--, es += r[et++] << eo, eo += 8
            }
            es >>>= eh, eo -= eh, eO = 0, eu = 11 + (127 & es), es >>>= 7, eo -= 7
          }
          if (n.have + eu > n.nlen + n.ndist) {
            e.msg = "invalid bit length repeat", n.mode = $;
            break
          }
          for (; eu--;) n.lens[n.have++] = eO
        }
      }
      if (n.mode === $) break;
      if (0 === n.lens[256]) {
        e.msg = "invalid code -- missing end-of-block", n.mode = $;
        break
      }
      if (n.lenbits = 9, eA = {
          bits: n.lenbits
        }, ev = c(d, n.lens, 0, n.nlen, n.lencode, 0, n.work, eA), n.lenbits = eA.bits, ev) {
        e.msg = "invalid literal/lengths set", n.mode = $;
        break
      }
      if (n.distbits = 6, n.distcode = n.distdyn, eA = {
          bits: n.distbits
        }, ev = c(f, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, eA), n.distbits = eA.bits, ev) {
        e.msg = "invalid distances set", n.mode = $;
        break
      }
      if (n.mode = H, t === h) break i;
    case H:
      n.mode = Y;
    case Y:
      if (er >= 6 && ea >= 258) {
        e.next_out = en, e.avail_out = ea, e.next_in = et, e.avail_in = er, n.hold = es, n.bits = eo, l(e, ec), en = e.next_out, i = e.output, ea = e.avail_out, et = e.next_in, r = e.input, er = e.avail_in, es = n.hold, eo = n.bits, n.mode === j && (n.back = false);
        break
      }
      for (n.back = 0; eh = (eS = n.lencode[es & (1 << n.lenbits) - 1]) >>> 24, em = eS >>> 16 & 255, eg = 65535 & eS, !(eh <= eo);) {
        if (0 === er) break i;
        er--, es += r[et++] << eo, eo += 8
      }
      if (em && (240 & em) == 0) {
        for (eE = eh, ey = em, eb = eg; eh = (eS = n.lencode[eb + ((es & (1 << eE + ey) - 1) >> eE)]) >>> 24, em = eS >>> 16 & 255, eg = 65535 & eS, !(eE + eh <= eo);) {
          if (0 === er) break i;
          er--, es += r[et++] << eo, eo += 8
        }
        es >>>= eE, eo -= eE, n.back += eE
      }
      if (es >>>= eh, eo -= eh, n.back += eh, n.length = eg, 0 === em) {
        n.mode = Z;
        break
      }
      if (32 & em) {
        n.back = false, n.mode = j;
        break
      }
      if (64 & em) {
        e.msg = "invalid literal/length code", n.mode = $;
        break
      }
      n.extra = 15 & em, n.mode = W;
    case W:
      if (n.extra) {
        for (eI = n.extra; eo < eI;) {
          if (0 === er) break i;
          er--, es += r[et++] << eo, eo += 8
        }
        n.length += es & (1 << n.extra) - 1, es >>>= n.extra, eo -= n.extra, n.back += n.extra
      }
      n.was = n.length, n.mode = K;
    case K:
      for (; eh = (eS = n.distcode[es & (1 << n.distbits) - 1]) >>> 24, em = eS >>> 16 & 255, eg = 65535 & eS, !(eh <= eo);) {
        if (0 === er) break i;
        er--, es += r[et++] << eo, eo += 8
      }
      if ((240 & em) == 0) {
        for (eE = eh, ey = em, eb = eg; eh = (eS = n.distcode[eb + ((es & (1 << eE + ey) - 1) >> eE)]) >>> 24, em = eS >>> 16 & 255, eg = 65535 & eS, !(eE + eh <= eo);) {
          if (0 === er) break i;
          er--, es += r[et++] << eo, eo += 8
        }
        es >>>= eE, eo -= eE, n.back += eE
      }
      if (es >>>= eh, eo -= eh, n.back += eh, 64 & em) {
        e.msg = "invalid distance code", n.mode = $;
        break
      }
      n.offset = eg, n.extra = 15 & em, n.mode = z;
    case z:
      if (n.extra) {
        for (eI = n.extra; eo < eI;) {
          if (0 === er) break i;
          er--, es += r[et++] << eo, eo += 8
        }
        n.offset += es & (1 << n.extra) - 1, es >>>= n.extra, eo -= n.extra, n.back += n.extra
      }
      if (n.offset > n.dmax) {
        e.msg = "invalid distance too far back", n.mode = $;
        break
      }
      n.mode = q;
    case q:
      if (0 === ea) break i;
      if (eu = ec - ea, n.offset > eu) {
        if ((eu = n.offset - eu) > n.whave && n.sane) {
          e.msg = "invalid distance too far back", n.mode = $;
          break
        }
        eu > n.wnext ? (eu -= n.wnext, ed = n.wsize - eu) : ed = n.wnext - eu, eu > n.length && (eu = n.length), e_ = n.window
      } else e_ = i, ed = en - n.offset, eu = n.length;
      eu > ea && (eu = ea), ea -= eu, n.length -= eu;
      do i[en++] = e_[ed++]; while (--eu);
      0 === n.length && (n.mode = Y);
      break;
    case Z:
      if (0 === ea) break i;
      i[en++] = n.length, ea--, n.mode = Y;
      break;
    case X:
      if (n.wrap) {
        for (; eo < 32;) {
          if (0 === er) break i;
          er--, es |= r[et++] << eo, eo += 8
        }
        if (ec -= ea, e.total_out += ec, n.total += ec, ec && (e.adler = n.check = n.flags ? o(n.check, i, ec, en - ec) : s(n.check, i, ec, en - ec)), ec = ea, (n.flags ? es : ei(es)) !== n.check) {
          e.msg = "incorrect data check", n.mode = $;
          break
        }
        es = 0, eo = 0
      }
      n.mode = Q;
    case Q:
      if (n.wrap && n.flags) {
        for (; eo < 32;) {
          if (0 === er) break i;
          er--, es += r[et++] << eo, eo += 8
        }
        if (es !== (0 | n.total)) {
          e.msg = "incorrect length check", n.mode = $;
          break
        }
        es = 0, eo = 0
      }
      n.mode = J;
    case J:
      ev = g;
      break i;
    case $:
      ev = b;
      break i;
    case ee:
      return O;
    default:
      return y
  }
  return (e.next_out = en, e.avail_out = ea, e.next_in = et, e.avail_in = er, n.hold = es, n.bits = eo, (n.wsize || ec !== e.avail_out && n.mode < $ && (n.mode < X || t !== p)) && ep(e, e.output, e.next_out, ec - e.avail_out)) ? (n.mode = ee, O) : (el -= e.avail_in, ec -= e.avail_out, e.total_in += el, e.total_out += ec, n.total += ec, n.wrap && ec && (e.adler = n.check = n.flags ? o(n.check, i, ec, e.next_out - ec) : s(n.check, i, ec, e.next_out - ec)), e.data_type = n.bits + 64 * !!n.last + 128 * (n.mode === j) + 256 * (n.mode === H || n.mode === U), (0 === el && 0 === ec || t === p) && ev === m && (ev = v), ev)
}

function eh(e) {
  if (!e || !e.state) return y;
  var t = e.state;
  return t.window && (t.window = null), e.state = null, m
}

function em(e, t) {
  var n;
  return e && e.state && (2 & (n = e.state).wrap) != 0 ? (n.head = t, t.done = false, m) : y
}

function eg(e, t) {
  var n, r, i = t.length;
  return e && e.state && (0 === (n = e.state).wrap || n.mode === L) ? n.mode === L && (r = s(r = 1, t, i, 0)) !== n.check ? b : ep(e, t, i, i) ? (n.mode = ee, O) : (n.havedict = 1, m) : y
}
exports.inflateReset = eo, exports.inflateReset2 = el, exports.inflateResetKeep = es, exports.inflateInit = eu, exports.inflateInit2 = ec, exports.inflate = e_, exports.inflateEnd = eh, exports.inflateGetHeader = em, exports.inflateSetDictionary = eg, exports.inflateInfo = "pako inflate (from Nodeca project)"