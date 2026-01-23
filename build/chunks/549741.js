/** Chunk was on web.js **/
/** chunk id: 549741, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./861169.js");
var r, Chunk557939 = require("./557939.js"),
  Chunk257943 = require("./257943.js"),
  Chunk39911 = require("./39911.js"),
  Chunk860511 = require("./860511.js"),
  Chunk221015 = require("./221015.js"),
  Chunk410323 = require("./410323.js"),
  Chunk693655 = require("./693655.js"),
  Chunk485155 = require("./485155.js"),
  Chunk61132 = require("./61132.js"),
  Chunk210140 = require("./210140.js"),
  Chunk783842 = require("./783842.js"),
  Chunk500829 = require("./500829.js"),
  Chunk192819 = require("./192819.js"),
  g = require("./992366.js").codeAt,
  Chunk766260 = require("./766260.js"),
  Chunk304880 = require("./304880.js"),
  Chunk174168 = require("./174168.js"),
  Chunk627 = require("./627.js"),
  Chunk985729 = require("./985729.js"),
  Chunk883972 = require("./883972.js"),
  I = Chunk883972.set,
  S = Chunk883972.getterFor("URL"),
  T = Chunk985729.URLSearchParams,
  C = Chunk985729.getState,
  N = Chunk860511.URL,
  w = Chunk860511.TypeError,
  R = Chunk860511.parseInt,
  P = Math.floor,
  D = Math.pow,
  x = Chunk410323("".charAt),
  L = Chunk410323(/./.exec),
  j = Chunk410323([].join),
  M = Chunk410323(1..toString),
  k = Chunk410323([].pop),
  U = Chunk410323([].push),
  G = Chunk410323("".replace),
  V = Chunk410323([].shift),
  F = Chunk410323("".split),
  B = Chunk410323("".slice),
  H = Chunk410323("".toLowerCase),
  Y = Chunk410323([].unshift),
  W = "Invalid authority",
  K = "Invalid scheme",
  z = "Invalid host",
  q = "Invalid port",
  Z = /[a-z]/i,
  X = /[\d+-.a-z]/i,
  Q = /\d/,
  J = /^0x/i,
  $ = /^[0-7]+$/,
  ee = /^\d+$/,
  et = /^[\da-f]+$/i,
  en = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
  er = /[\0\t\n\r #/:<>?@[\\\]^|]/,
  ei = /^[\u0000-\u0020]+/,
  ea = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
  es = /[\t\n\r]/g,
  eo = function(e) {
    var t, n, r, i, a, s, o, l = F(e, ".");
    if (l.length && "" === l[l.length - 1] && l.length--, (t = l.length) > 4) return e;
    for (r = 0, n = []; r < t; r++) {
      if ("" === (i = l[r])) return e;
      if (a = 10, i.length > 1 && "0" === x(i, 0) && (a = L(J, i) ? 16 : 8, i = B(i, 8 === a ? 1 : 2)), "" === i) s = 0;
      else {
        if (!L(10 === a ? ee : 8 === a ? $ : et, i)) return e;
        s = R(i, a)
      }
      U(n, s)
    }
    for (r = 0; r < t; r++)
      if (s = n[r], r === t - 1) {
        if (s >= D(256, 5 - t)) return null
      } else if (s > 255) return null;
    for (r = 0, o = k(n); r < n.length; r++) o += n[r] * D(256, 3 - r);
    return o
  },
  el = function(e) {
    var t, n, r, i, a, s, o, l = [0, 0, 0, 0, 0, 0, 0, 0],
      c = 0,
      u = null,
      d = 0,
      f = function() {
        return x(e, d)
      };
    if (":" === f()) {
      if (":" !== x(e, 1)) return;
      d += 2, u = ++c
    }
    for (; f();) {
      if (8 === c) return;
      if (":" === f()) {
        if (null !== u) return;
        d++, u = ++c;
        continue
      }
      for (t = n = 0; n < 4 && L(et, f());) t = 16 * t + R(f(), 16), d++, n++;
      if ("." === f()) {
        if (0 === n || (d -= n, c > 6)) return;
        for (r = 0; f();) {
          if (i = null, r > 0)
            if ("." !== f() || !(r < 4)) return;
            else d++;
          if (!L(Q, f())) return;
          for (; L(Q, f());) {
            if (a = R(f(), 10), null === i) i = a;
            else {
              if (0 === i) return;
              i = 10 * i + a
            }
            if (i > 255) return;
            d++
          }
          l[c] = 256 * l[c] + i, (2 == ++r || 4 === r) && c++
        }
        if (4 !== r) return;
        break
      }
      if (":" === f()) {
        if (d++, !f()) return
      } else if (f()) return;
      l[c++] = t
    }
    if (null !== u)
      for (s = c - u, c = 7; 0 !== c && s > 0;) o = l[c], l[c--] = l[u + s - 1], l[u + --s] = o;
    else if (8 !== c) return;
    return l
  },
  ec = function(e) {
    for (var t = null, n = 1, r = null, i = 0, a = 0; a < 8; a++) 0 !== e[a] ? (i > n && (t = r, n = i), r = null, i = 0) : (null === r && (r = a), ++i);
    return i > n ? r : t
  },
  eu = function(e) {
    var t, n, r, i;
    if ("number" == typeof e) {
      for (n = 0, t = []; n < 4; n++) Y(t, e % 256), e = P(e / 256);
      return j(t, ".")
    }
    if ("object" == typeof e) {
      for (n = 0, t = "", r = ec(e); n < 8; n++)(!i || 0 !== e[n]) && (i && (i = false), r === n ? (t += n ? ":" : "::", i = true) : (t += M(e[n], 16), n < 7 && (t += ":")));
      return "[" + t + "]"
    }
    return e
  },
  ed = {},
  ef = Chunk783842({}, ed, {
    " ": 1,
    '"': 1,
    "<": 1,
    ">": 1,
    "`": 1
  }),
  ep = Chunk783842({}, ef, {
    "#": 1,
    "?": 1,
    "{": 1,
    "}": 1
  }),
  e_ = Chunk783842({}, ep, {
    "/": 1,
    ":": 1,
    ";": 1,
    "=": 1,
    "@": 1,
    "[": 1,
    "\\": 1,
    "]": 1,
    "^": 1,
    "|": 1
  }),
  eh = function(e, t) {
    var n = g(e, 0);
    return n > 32 && n < 127 && !p(t, e) ? e : encodeURIComponent(e)
  },
  em = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  },
  eg = function(e, t) {
    var n;
    return 2 === e.length && L(Z, x(e, 0)) && (":" === (n = x(e, 1)) || !t && "|" === n)
  },
  eE = function(e) {
    var t;
    return e.length > 1 && eg(B(e, 0, 2)) && (2 === e.length || "/" === (t = x(e, 2)) || "\\" === t || "?" === t || "#" === t)
  },
  ey = function(e) {
    return "." === e || "%2e" === H(e)
  },
  eb = function(e) {
    return ".." === (e = H(e)) || "%2e." === e || ".%2e" === e || "%2e%2e" === e
  },
  eO = {},
  ev = {},
  eA = {},
  eI = {},
  eS = {},
  eT = {},
  eC = {},
  eN = {},
  ew = {},
  eR = {},
  eP = {},
  eD = {},
  ex = {},
  eL = {},
  ej = {},
  eM = {},
  ek = {},
  eU = {},
  eG = {},
  eV = {},
  eF = {},
  eB = function(e, t, n) {
    var r, i, a, s = y(e);
    if (t) {
      if (i = this.parse(s)) throw new w(i);
      this.searchParams = null
    } else {
      if (true !== n && (r = new eB(n, true)), i = this.parse(s, null, r)) throw new w(i);
      (a = C(new T)).bindURL(this), this.searchParams = a
    }
  };
eB.prototype = {
  type: "URL",
  parse: function(e, t, n) {
    var i, a, s, o, l = this,
      c = t || eO,
      u = 0,
      d = "",
      f = false,
      _ = false,
      g = false;
    for (e = y(e), t || (l.scheme = "", l.username = "", l.password = "", l.host = null, l.port = null, l.path = [], l.query = null, l.fragment = null, l.cannotBeABaseURL = false, e = G(e, ei, ""), e = G(e, ea, "$1")), i = h(e = G(e, es, "")); u <= i.length;) {
      switch (a = i[u], c) {
        case eO:
          if (a && L(Z, a)) d += H(a), c = ev;
          else {
            if (t) return K;
            c = eA;
            continue
          }
          break;
        case ev:
          if (a && (L(X, a) || "+" === a || "-" === a || "." === a)) d += H(a);
          else if (":" === a) {
            if (t && (l.isSpecial() !== p(em, d) || "file" === d && (l.includesCredentials() || null !== l.port) || "file" === l.scheme && !l.host)) return;
            if (l.scheme = d, t) {
              l.isSpecial() && em[l.scheme] === l.port && (l.port = null);
              return
            }
            d = "", "file" === l.scheme ? c = eL : l.isSpecial() && n && n.scheme === l.scheme ? c = eI : l.isSpecial() ? c = eN : "/" === i[u + 1] ? (c = eS, u++) : (l.cannotBeABaseURL = true, U(l.path, ""), c = eG)
          } else {
            if (t) return K;
            d = "", c = eA, u = 0;
            continue
          }
          break;
        case eA:
          if (!n || n.cannotBeABaseURL && "#" !== a) return K;
          if (n.cannotBeABaseURL && "#" === a) {
            l.scheme = n.scheme, l.path = m(n.path), l.query = n.query, l.fragment = "", l.cannotBeABaseURL = true, c = eF;
            break
          }
          c = "file" === n.scheme ? eL : eT;
          continue;
        case eI:
          if ("/" === a && "/" === i[u + 1]) c = ew, u++;
          else {
            c = eT;
            continue
          }
          break;
        case eS:
          if ("/" === a) {
            c = eR;
            break
          }
          c = eU;
          continue;
        case eT:
          if (l.scheme = n.scheme, a === r) l.username = n.username, l.password = n.password, l.host = n.host, l.port = n.port, l.path = m(n.path), l.query = n.query;
          else if ("/" === a || "\\" === a && l.isSpecial()) c = eC;
          else if ("?" === a) l.username = n.username, l.password = n.password, l.host = n.host, l.port = n.port, l.path = m(n.path), l.query = "", c = eV;
          else if ("#" === a) l.username = n.username, l.password = n.password, l.host = n.host, l.port = n.port, l.path = m(n.path), l.query = n.query, l.fragment = "", c = eF;
          else {
            l.username = n.username, l.password = n.password, l.host = n.host, l.port = n.port, l.path = m(n.path), l.path.length--, c = eU;
            continue
          }
          break;
        case eC:
          if (l.isSpecial() && ("/" === a || "\\" === a)) c = ew;
          else if ("/" === a) c = eR;
          else {
            l.username = n.username, l.password = n.password, l.host = n.host, l.port = n.port, c = eU;
            continue
          }
          break;
        case eN:
          if (c = ew, "/" !== a || "/" !== x(d, u + 1)) continue;
          u++;
          break;
        case ew:
          if ("/" !== a && "\\" !== a) {
            c = eR;
            continue
          }
          break;
        case eR:
          if ("@" === a) {
            f && (d = "%40" + d), f = true, s = h(d);
            for (var E = 0; E < s.length; E++) {
              var b = s[E];
              if (":" === b && !g) {
                g = true;
                continue
              }
              var O = eh(b, e_);
              g ? l.password += O : l.username += O
            }
            d = ""
          } else if (a === r || "/" === a || "?" === a || "#" === a || "\\" === a && l.isSpecial()) {
            if (f && "" === d) return W;
            u -= h(d).length + 1, d = "", c = eP
          } else d += a;
          break;
        case eP:
        case eD:
          if (t && "file" === l.scheme) {
            c = eM;
            continue
          }
          if (":" !== a || _)
            if (a === r || "/" === a || "?" === a || "#" === a || "\\" === a && l.isSpecial()) {
              if (l.isSpecial() && "" === d) return z;
              if (t && "" === d && (l.includesCredentials() || null !== l.port)) return;
              if (o = l.parseHost(d)) return o;
              if (d = "", c = ek, t) return;
              continue
            } else "[" === a ? _ = true : "]" === a && (_ = false), d += a;
          else {
            if ("" === d) return z;
            if (o = l.parseHost(d)) return o;
            if (d = "", c = ex, t === eD) return
          }
          break;
        case ex:
          if (L(Q, a)) d += a;
          else {
            if (!(a === r || "/" === a || "?" === a || "#" === a || "\\" === a && l.isSpecial()) && !t) return q;
            if ("" !== d) {
              var v = R(d, 10);
              if (v > 65535) return q;
              l.port = l.isSpecial() && v === em[l.scheme] ? null : v, d = ""
            }
            if (t) return;
            c = ek;
            continue
          }
          break;
        case eL:
          if (l.scheme = "file", "/" === a || "\\" === a) c = ej;
          else if (n && "file" === n.scheme) switch (a) {
            case r:
              l.host = n.host, l.path = m(n.path), l.query = n.query;
              break;
            case "?":
              l.host = n.host, l.path = m(n.path), l.query = "", c = eV;
              break;
            case "#":
              l.host = n.host, l.path = m(n.path), l.query = n.query, l.fragment = "", c = eF;
              break;
            default:
              eE(j(m(i, u), "")) || (l.host = n.host, l.path = m(n.path), l.shortenPath()), c = eU;
              continue
          } else {
            c = eU;
            continue
          }
          break;
        case ej:
          if ("/" === a || "\\" === a) {
            c = eM;
            break
          }
          n && "file" === n.scheme && !eE(j(m(i, u), "")) && (eg(n.path[0], true) ? U(l.path, n.path[0]) : l.host = n.host), c = eU;
          continue;
        case eM:
          if (a === r || "/" === a || "\\" === a || "?" === a || "#" === a) {
            if (!t && eg(d)) c = eU;
            else if ("" === d) {
              if (l.host = "", t) return;
              c = ek
            } else {
              if (o = l.parseHost(d)) return o;
              if ("localhost" === l.host && (l.host = ""), t) return;
              d = "", c = ek
            }
            continue
          }
          d += a;
          break;
        case ek:
          if (l.isSpecial()) {
            if (c = eU, "/" !== a && "\\" !== a) continue
          } else if (t || "?" !== a)
            if (t || "#" !== a) {
              if (a !== r && (c = eU, "/" !== a)) continue
            } else l.fragment = "", c = eF;
          else l.query = "", c = eV;
          break;
        case eU:
          if (a === r || "/" === a || "\\" === a && l.isSpecial() || !t && ("?" === a || "#" === a)) {
            if (eb(d) ? (l.shortenPath(), "/" === a || "\\" === a && l.isSpecial() || U(l.path, "")) : ey(d) ? "/" === a || "\\" === a && l.isSpecial() || U(l.path, "") : ("file" === l.scheme && !l.path.length && eg(d) && (l.host && (l.host = ""), d = x(d, 0) + ":"), U(l.path, d)), d = "", "file" === l.scheme && (a === r || "?" === a || "#" === a))
              for (; l.path.length > 1 && "" === l.path[0];) V(l.path);
            "?" === a ? (l.query = "", c = eV) : "#" === a && (l.fragment = "", c = eF)
          } else d += eh(a, ep);
          break;
        case eG:
          "?" === a ? (l.query = "", c = eV) : "#" === a ? (l.fragment = "", c = eF) : a !== r && (l.path[0] += eh(a, ed));
          break;
        case eV:
          t || "#" !== a ? a !== r && ("'" === a && l.isSpecial() ? l.query += "%27" : "#" === a ? l.query += "%23" : l.query += eh(a, ed)) : (l.fragment = "", c = eF);
          break;
        case eF:
          a !== r && (l.fragment += eh(a, ef))
      }
      u++
    }
  },
  parseHost: function(e) {
    var t, n, r;
    if ("[" === x(e, 0)) {
      if ("]" !== x(e, e.length - 1) || !(t = el(B(e, 1, false)))) return z;
      this.host = t
    } else if (this.isSpecial()) {
      if (L(en, e = E(e)) || null === (t = eo(e))) return z;
      this.host = t
    } else {
      if (L(er, e)) return z;
      for (r = 0, t = "", n = h(e); r < n.length; r++) t += eh(n[r], ed);
      this.host = t
    }
  },
  cannotHaveUsernamePasswordPort: function() {
    return !this.host || this.cannotBeABaseURL || "file" === this.scheme
  },
  includesCredentials: function() {
    return "" !== this.username || "" !== this.password
  },
  isSpecial: function() {
    return p(em, this.scheme)
  },
  shortenPath: function() {
    var e = this.path,
      t = e.length;
    t && ("file" !== this.scheme || 1 !== t || !eg(e[0], true)) && e.length--
  },
  serialize: function() {
    var e = this,
      t = e.scheme,
      n = e.username,
      r = e.password,
      i = e.host,
      a = e.port,
      s = e.path,
      o = e.query,
      l = e.fragment,
      c = t + ":";
    return null !== i ? (c += "//", e.includesCredentials() && (c += n + (r ? ":" + r : "") + "@"), c += eu(i), null !== a && (c += ":" + a)) : "file" === t && (c += "//"), c += e.cannotBeABaseURL ? s[0] : s.length ? "/" + j(s, "/") : "", null !== o && (c += "?" + o), null !== l && (c += "#" + l), c
  },
  setHref: function(e) {
    var t = this.parse(e);
    if (t) throw new w(t);
    this.searchParams.update()
  },
  getOrigin: function() {
    var e = this.scheme,
      t = this.port;
    if ("blob" === e) try {
      return new eH(e.path[0]).origin
    } catch (e) {
      return "null"
    }
    return "file" !== e && this.isSpecial() ? e + "://" + eu(this.host) + (null !== t ? ":" + t : "") : "null"
  },
  getProtocol: function() {
    return this.scheme + ":"
  },
  setProtocol: function(e) {
    this.parse(y(e) + ":", eO)
  },
  getUsername: function() {
    return this.username
  },
  setUsername: function(e) {
    var t = h(y(e));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.username = "";
      for (var n = 0; n < t.length; n++) this.username += eh(t[n], e_)
    }
  },
  getPassword: function() {
    return this.password
  },
  setPassword: function(e) {
    var t = h(y(e));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.password = "";
      for (var n = 0; n < t.length; n++) this.password += eh(t[n], e_)
    }
  },
  getHost: function() {
    var e = this.host,
      t = this.port;
    return null === e ? "" : null === t ? eu(e) : eu(e) + ":" + t
  },
  setHost: function(e) {
    this.cannotBeABaseURL || this.parse(e, eP)
  },
  getHostname: function() {
    var e = this.host;
    return null === e ? "" : eu(e)
  },
  setHostname: function(e) {
    this.cannotBeABaseURL || this.parse(e, eD)
  },
  getPort: function() {
    var e = this.port;
    return null === e ? "" : y(e)
  },
  setPort: function(e) {
    this.cannotHaveUsernamePasswordPort() || ("" === (e = y(e)) ? this.port = null : this.parse(e, ex))
  },
  getPathname: function() {
    var e = this.path;
    return this.cannotBeABaseURL ? e[0] : e.length ? "/" + j(e, "/") : ""
  },
  setPathname: function(e) {
    this.cannotBeABaseURL || (this.path = [], this.parse(e, ek))
  },
  getSearch: function() {
    var e = this.query;
    return e ? "?" + e : ""
  },
  setSearch: function(e) {
    "" === (e = y(e)) ? this.query = null: ("?" === x(e, 0) && (e = B(e, 1)), this.query = "", this.parse(e, eV)), this.searchParams.update()
  },
  getSearchParams: function() {
    return this.searchParams.facade
  },
  getHash: function() {
    var e = this.fragment;
    return e ? "#" + e : ""
  },
  setHash: function(e) {
    if ("" === (e = y(e))) {
      this.fragment = null;
      return
    }
    "#" === x(e, 0) && (e = B(e, 1)), this.fragment = "", this.parse(e, eF)
  },
  update: function() {
    this.query = this.searchParams.serialize() || null
  }
};
var eH = function(e) {
    var t = f(this, eY),
      n = O(arguments.length, 1) > 1 ? arguments[1] : true,
      r = I(t, new eB(e, false, n));
    a || (t.href = r.serialize(), t.origin = r.getOrigin(), t.protocol = r.getProtocol(), t.username = r.getUsername(), t.password = r.getPassword(), t.host = r.getHost(), t.hostname = r.getHostname(), t.port = r.getPort(), t.pathname = r.getPathname(), t.search = r.getSearch(), t.searchParams = r.getSearchParams(), t.hash = r.getHash())
  },
  eY = eH.prototype,
  eW = function(e, t) {
    return {
      get: function() {
        return S(this)[e]()
      },
      set: t && function(e) {
        return S(this)[t](e)
      },
      configurable: true,
      enumerable: true
    }
  };
if (Chunk257943 && (Chunk485155(eY, "href", eW("serialize", "setHref")), Chunk485155(eY, "origin", eW("getOrigin")), Chunk485155(eY, "protocol", eW("getProtocol", "setProtocol")), Chunk485155(eY, "username", eW("getUsername", "setUsername")), Chunk485155(eY, "password", eW("getPassword", "setPassword")), Chunk485155(eY, "host", eW("getHost", "setHost")), Chunk485155(eY, "hostname", eW("getHostname", "setHostname")), Chunk485155(eY, "port", eW("getPort", "setPort")), Chunk485155(eY, "pathname", eW("getPathname", "setPathname")), Chunk485155(eY, "search", eW("getSearch", "setSearch")), Chunk485155(eY, "searchParams", eW("getSearchParams")), Chunk485155(eY, "hash", eW("getHash", "setHash"))), Chunk693655(eY, "toJSON", function() {
    return S(this).serialize()
  }, {
    enumerable: true
  }), Chunk693655(eY, "toString", function() {
    return S(this).serialize()
  }, {
    enumerable: true
  }), N) {
  var eK = N.createObjectURL,
    ez = N.revokeObjectURL;
  eK && Chunk693655(eH, "createObjectURL", Chunk221015(eK, N)), ez && Chunk693655(eH, "revokeObjectURL", Chunk221015(ez, N))
}
Chunk174168(eH, "URL"), Chunk557939({
  global: true,
  constructor: true,
  forced: !Chunk39911,
  sham: !Chunk257943
}, {
  URL: eH
})