/** Chunk was on web.js **/
/** chunk id: 482138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./435622.js");
var r, Chunk98405 = require("./98405.js"),
  Chunk507604 = require("./507604.js"),
  Chunk394227 = require("./394227.js"),
  Chunk127849 = require("./127849.js"),
  Chunk48657 = require("./48657.js"),
  Chunk46015 = require("./46015.js"),
  Chunk556585 = require("./556585.js"),
  Chunk573078 = require("./573078.js"),
  Chunk170322 = require("./170322.js"),
  Chunk77025 = require("./77025.js"),
  Chunk445667 = require("./445667.js"),
  Chunk865494 = require("./865494.js"),
  Chunk992174 = require("./992174.js"),
  g = require("./471540.js").codeAt,
  Chunk560406 = require("./560406.js"),
  Chunk382698 = require("./382698.js"),
  Chunk25124 = require("./25124.js"),
  Chunk338045 = require("./338045.js"),
  Chunk294684 = require("./294684.js"),
  Chunk199838 = require("./199838.js"),
  I = Chunk199838.set,
  T = Chunk199838.getterFor("URL"),
  C = Chunk294684.URLSearchParams,
  A = Chunk294684.getState,
  N = Chunk127849.URL,
  P = Chunk127849.TypeError,
  R = Chunk127849.parseInt,
  w = Math.floor,
  D = Math.pow,
  x = Chunk46015("".charAt),
  L = Chunk46015(/./.exec),
  j = Chunk46015([].join),
  M = Chunk46015(1..toString),
  k = Chunk46015([].pop),
  U = Chunk46015([].push),
  G = Chunk46015("".replace),
  Z = Chunk46015([].shift),
  F = Chunk46015("".split),
  B = Chunk46015("".slice),
  V = Chunk46015("".toLowerCase),
  H = Chunk46015([].unshift),
  Y = "Invalid authority",
  W = "Invalid scheme",
  K = "Invalid host",
  z = "Invalid port",
  q = /[a-z]/i,
  Q = /[\d+-.a-z]/i,
  X = /\d/,
  J = /^0x/i,
  $ = /^[0-7]+$/,
  ee = /^\d+$/,
  et = /^[\da-f]+$/i,
  en = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
  er = /[\0\t\n\r #/:<>?@[\\\]^|]/,
  ei = /^[\u0000-\u0020]+/,
  ea = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
  eo = /[\t\n\r]/g,
  es = function(e) {
    var t, n, r, i, a, o, s, l = F(e, ".");
    if (l.length && "" === l[l.length - 1] && l.length--, (t = l.length) > 4) return e;
    for (r = 0, n = []; r < t; r++) {
      if ("" === (i = l[r])) return e;
      if (a = 10, i.length > 1 && "0" === x(i, 0) && (a = L(J, i) ? 16 : 8, i = B(i, 8 === a ? 1 : 2)), "" === i) o = 0;
      else {
        if (!L(10 === a ? ee : 8 === a ? $ : et, i)) return e;
        o = R(i, a)
      }
      U(n, o)
    }
    for (r = 0; r < t; r++)
      if (o = n[r], r === t - 1) {
        if (o >= D(256, 5 - t)) return null
      } else if (o > 255) return null;
    for (r = 0, s = k(n); r < n.length; r++) s += n[r] * D(256, 3 - r);
    return s
  },
  el = function(e) {
    var t, n, r, i, a, o, s, l = [0, 0, 0, 0, 0, 0, 0, 0],
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
          if (!L(X, f())) return;
          for (; L(X, f());) {
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
      for (o = c - u, c = 7; 0 !== c && o > 0;) s = l[c], l[c--] = l[u + o - 1], l[u + --o] = s;
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
      for (n = 0, t = []; n < 4; n++) H(t, e % 256), e = w(e / 256);
      return j(t, ".")
    }
    if ("object" == typeof e) {
      for (n = 0, t = "", r = ec(e); n < 8; n++)(!i || 0 !== e[n]) && (i && (i = false), r === n ? (t += n ? ":" : "::", i = true) : (t += M(e[n], 16), n < 7 && (t += ":")));
      return "[" + t + "]"
    }
    return e
  },
  ed = {},
  ef = Chunk445667({}, ed, {
    " ": 1,
    '"': 1,
    "<": 1,
    ">": 1,
    "`": 1
  }),
  ep = Chunk445667({}, ef, {
    "#": 1,
    "?": 1,
    "{": 1,
    "}": 1
  }),
  e_ = Chunk445667({}, ep, {
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
  em = function(e, t) {
    var n = g(e, 0);
    return n > 32 && n < 127 && !p(t, e) ? e : encodeURIComponent(e)
  },
  eh = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  },
  eg = function(e, t) {
    var n;
    return 2 === e.length && L(q, x(e, 0)) && (":" === (n = x(e, 1)) || !t && "|" === n)
  },
  eE = function(e) {
    var t;
    return e.length > 1 && eg(B(e, 0, 2)) && (2 === e.length || "/" === (t = x(e, 2)) || "\\" === t || "?" === t || "#" === t)
  },
  eb = function(e) {
    return "." === e || "%2e" === V(e)
  },
  ey = function(e) {
    return ".." === (e = V(e)) || "%2e." === e || ".%2e" === e || "%2e%2e" === e
  },
  eO = {},
  ev = {},
  eS = {},
  eI = {},
  eT = {},
  eC = {},
  eA = {},
  eN = {},
  eP = {},
  eR = {},
  ew = {},
  eD = {},
  ex = {},
  eL = {},
  ej = {},
  eM = {},
  ek = {},
  eU = {},
  eG = {},
  eZ = {},
  eF = {},
  eB = function(e, t, n) {
    var r, i, a, o = b(e);
    if (t) {
      if (i = this.parse(o)) throw new P(i);
      this.searchParams = null
    } else {
      if (true !== n && (r = new eB(n, true)), i = this.parse(o, null, r)) throw new P(i);
      (a = A(new C)).bindURL(this), this.searchParams = a
    }
  };
eB.prototype = {
  type: "URL",
  parse: function(e, t, n) {
    var i, a, o, s, l = this,
      c = t || eO,
      u = 0,
      d = "",
      f = false,
      _ = false,
      g = false;
    for (e = b(e), t || (l.scheme = "", l.username = "", l.password = "", l.host = null, l.port = null, l.path = [], l.query = null, l.fragment = null, l.cannotBeABaseURL = false, e = G(e, ei, ""), e = G(e, ea, "$1")), i = m(e = G(e, eo, "")); u <= i.length;) {
      switch (a = i[u], c) {
        case eO:
          if (a && L(q, a)) d += V(a), c = ev;
          else {
            if (t) return W;
            c = eS;
            continue
          }
          break;
        case ev:
          if (a && (L(Q, a) || "+" === a || "-" === a || "." === a)) d += V(a);
          else if (":" === a) {
            if (t && (l.isSpecial() !== p(eh, d) || "file" === d && (l.includesCredentials() || null !== l.port) || "file" === l.scheme && !l.host)) return;
            if (l.scheme = d, t) {
              l.isSpecial() && eh[l.scheme] === l.port && (l.port = null);
              return
            }
            d = "", "file" === l.scheme ? c = eL : l.isSpecial() && n && n.scheme === l.scheme ? c = eI : l.isSpecial() ? c = eN : "/" === i[u + 1] ? (c = eT, u++) : (l.cannotBeABaseURL = true, U(l.path, ""), c = eG)
          } else {
            if (t) return W;
            d = "", c = eS, u = 0;
            continue
          }
          break;
        case eS:
          if (!n || n.cannotBeABaseURL && "#" !== a) return W;
          if (n.cannotBeABaseURL && "#" === a) {
            l.scheme = n.scheme, l.path = h(n.path), l.query = n.query, l.fragment = "", l.cannotBeABaseURL = true, c = eF;
            break
          }
          c = "file" === n.scheme ? eL : eC;
          continue;
        case eI:
          if ("/" === a && "/" === i[u + 1]) c = eP, u++;
          else {
            c = eC;
            continue
          }
          break;
        case eT:
          if ("/" === a) {
            c = eR;
            break
          }
          c = eU;
          continue;
        case eC:
          if (l.scheme = n.scheme, a === r) l.username = n.username, l.password = n.password, l.host = n.host, l.port = n.port, l.path = h(n.path), l.query = n.query;
          else if ("/" === a || "\\" === a && l.isSpecial()) c = eA;
          else if ("?" === a) l.username = n.username, l.password = n.password, l.host = n.host, l.port = n.port, l.path = h(n.path), l.query = "", c = eZ;
          else if ("#" === a) l.username = n.username, l.password = n.password, l.host = n.host, l.port = n.port, l.path = h(n.path), l.query = n.query, l.fragment = "", c = eF;
          else {
            l.username = n.username, l.password = n.password, l.host = n.host, l.port = n.port, l.path = h(n.path), l.path.length--, c = eU;
            continue
          }
          break;
        case eA:
          if (l.isSpecial() && ("/" === a || "\\" === a)) c = eP;
          else if ("/" === a) c = eR;
          else {
            l.username = n.username, l.password = n.password, l.host = n.host, l.port = n.port, c = eU;
            continue
          }
          break;
        case eN:
          if (c = eP, "/" !== a || "/" !== x(d, u + 1)) continue;
          u++;
          break;
        case eP:
          if ("/" !== a && "\\" !== a) {
            c = eR;
            continue
          }
          break;
        case eR:
          if ("@" === a) {
            f && (d = "%40" + d), f = true, o = m(d);
            for (var E = 0; E < o.length; E++) {
              var y = o[E];
              if (":" === y && !g) {
                g = true;
                continue
              }
              var O = em(y, e_);
              g ? l.password += O : l.username += O
            }
            d = ""
          } else if (a === r || "/" === a || "?" === a || "#" === a || "\\" === a && l.isSpecial()) {
            if (f && "" === d) return Y;
            u -= m(d).length + 1, d = "", c = ew
          } else d += a;
          break;
        case ew:
        case eD:
          if (t && "file" === l.scheme) {
            c = eM;
            continue
          }
          if (":" !== a || _)
            if (a === r || "/" === a || "?" === a || "#" === a || "\\" === a && l.isSpecial()) {
              if (l.isSpecial() && "" === d) return K;
              if (t && "" === d && (l.includesCredentials() || null !== l.port)) return;
              if (s = l.parseHost(d)) return s;
              if (d = "", c = ek, t) return;
              continue
            } else "[" === a ? _ = true : "]" === a && (_ = false), d += a;
          else {
            if ("" === d) return K;
            if (s = l.parseHost(d)) return s;
            if (d = "", c = ex, t === eD) return
          }
          break;
        case ex:
          if (L(X, a)) d += a;
          else {
            if (!(a === r || "/" === a || "?" === a || "#" === a || "\\" === a && l.isSpecial()) && !t) return z;
            if ("" !== d) {
              var v = R(d, 10);
              if (v > 65535) return z;
              l.port = l.isSpecial() && v === eh[l.scheme] ? null : v, d = ""
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
              l.host = n.host, l.path = h(n.path), l.query = n.query;
              break;
            case "?":
              l.host = n.host, l.path = h(n.path), l.query = "", c = eZ;
              break;
            case "#":
              l.host = n.host, l.path = h(n.path), l.query = n.query, l.fragment = "", c = eF;
              break;
            default:
              eE(j(h(i, u), "")) || (l.host = n.host, l.path = h(n.path), l.shortenPath()), c = eU;
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
          n && "file" === n.scheme && !eE(j(h(i, u), "")) && (eg(n.path[0], true) ? U(l.path, n.path[0]) : l.host = n.host), c = eU;
          continue;
        case eM:
          if (a === r || "/" === a || "\\" === a || "?" === a || "#" === a) {
            if (!t && eg(d)) c = eU;
            else if ("" === d) {
              if (l.host = "", t) return;
              c = ek
            } else {
              if (s = l.parseHost(d)) return s;
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
          else l.query = "", c = eZ;
          break;
        case eU:
          if (a === r || "/" === a || "\\" === a && l.isSpecial() || !t && ("?" === a || "#" === a)) {
            if (ey(d) ? (l.shortenPath(), "/" === a || "\\" === a && l.isSpecial() || U(l.path, "")) : eb(d) ? "/" === a || "\\" === a && l.isSpecial() || U(l.path, "") : ("file" === l.scheme && !l.path.length && eg(d) && (l.host && (l.host = ""), d = x(d, 0) + ":"), U(l.path, d)), d = "", "file" === l.scheme && (a === r || "?" === a || "#" === a))
              for (; l.path.length > 1 && "" === l.path[0];) Z(l.path);
            "?" === a ? (l.query = "", c = eZ) : "#" === a && (l.fragment = "", c = eF)
          } else d += em(a, ep);
          break;
        case eG:
          "?" === a ? (l.query = "", c = eZ) : "#" === a ? (l.fragment = "", c = eF) : a !== r && (l.path[0] += em(a, ed));
          break;
        case eZ:
          t || "#" !== a ? a !== r && ("'" === a && l.isSpecial() ? l.query += "%27" : "#" === a ? l.query += "%23" : l.query += em(a, ed)) : (l.fragment = "", c = eF);
          break;
        case eF:
          a !== r && (l.fragment += em(a, ef))
      }
      u++
    }
  },
  parseHost: function(e) {
    var t, n, r;
    if ("[" === x(e, 0)) {
      if ("]" !== x(e, e.length - 1) || !(t = el(B(e, 1, false)))) return K;
      this.host = t
    } else if (this.isSpecial()) {
      if (L(en, e = E(e)) || null === (t = es(e))) return K;
      this.host = t
    } else {
      if (L(er, e)) return K;
      for (r = 0, t = "", n = m(e); r < n.length; r++) t += em(n[r], ed);
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
    return Chunk77025(eh, this.scheme)
  },
  shortenPath: function() {
    var e = this.path,
      t = module.length;
    exports && ("file" !== this.scheme || 1 !== exports || !eg(module[0], true)) && module.length--
  },
  serialize: function() {
    var e = this,
      t = module.scheme,
      n = module.username,
      r = module.password,
      i = module.host,
      a = module.port,
      o = module.path,
      s = module.query,
      l = module.fragment,
      c = exports + ":";
    return null !== Chunk98405 ? (c += "//", module.includesCredentials() && (c += require + (r ? ":" + r : "") + "@"), c += eu(Chunk98405), null !== Chunk507604 && (c += ":" + Chunk507604)) : "file" === exports && (c += "//"), c += module.cannotBeABaseURL ? Chunk394227[0] : Chunk394227.length ? "/" + j(Chunk394227, "/") : "", null !== Chunk127849 && (c += "?" + Chunk127849), null !== Chunk48657 && (c += "#" + Chunk48657), Chunk46015
  },
  setHref: function(e) {
    var t = this.parse(e);
    if (t) throw new P(t);
    this.searchParams.update()
  },
  getOrigin: function() {
    var e = this.scheme,
      t = this.port;
    if ("blob" === module) try {
      return new eV(module.path[0]).origin
    } catch (e) {
      return "null"
    }
    return "file" !== module && this.isSpecial() ? module + "://" + eu(this.host) + (null !== exports ? ":" + exports : "") : "null"
  },
  getProtocol: function() {
    return this.scheme + ":"
  },
  setProtocol: function(e) {
    this.parse(b(e) + ":", eO)
  },
  getUsername: function() {
    return this.username
  },
  setUsername: function(e) {
    var t = m(b(e));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.username = "";
      for (var n = 0; n < t.length; n++) this.username += em(t[n], e_)
    }
  },
  getPassword: function() {
    return this.password
  },
  setPassword: function(e) {
    var t = m(b(e));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.password = "";
      for (var n = 0; n < t.length; n++) this.password += em(t[n], e_)
    }
  },
  getHost: function() {
    var e = this.host,
      t = this.port;
    return null === module ? "" : null === exports ? eu(module) : eu(module) + ":" + exports
  },
  setHost: function(e) {
    this.cannotBeABaseURL || this.parse(e, ew)
  },
  getHostname: function() {
    var e = this.host;
    return null === module ? "" : eu(module)
  },
  setHostname: function(e) {
    this.cannotBeABaseURL || this.parse(e, eD)
  },
  getPort: function() {
    var e = this.port;
    return null === module ? "" : Chunk382698(module)
  },
  setPort: function(e) {
    this.cannotHaveUsernamePasswordPort() || ("" === (e = b(e)) ? this.port = null : this.parse(e, ex))
  },
  getPathname: function() {
    var e = this.path;
    return this.cannotBeABaseURL ? module[0] : module.length ? "/" + j(module, "/") : ""
  },
  setPathname: function(e) {
    this.cannotBeABaseURL || (this.path = [], this.parse(e, ek))
  },
  getSearch: function() {
    var e = this.query;
    return module ? "?" + module : ""
  },
  setSearch: function(e) {
    "" === (e = b(e)) ? this.query = null: ("?" === x(e, 0) && (e = B(e, 1)), this.query = "", this.parse(e, eZ)), this.searchParams.update()
  },
  getSearchParams: function() {
    return this.searchParams.facade
  },
  getHash: function() {
    var e = this.fragment;
    return module ? "#" + module : ""
  },
  setHash: function(e) {
    if ("" === (e = b(e))) {
      this.fragment = null;
      return
    }
    "#" === x(e, 0) && (e = B(e, 1)), this.fragment = "", this.parse(e, eF)
  },
  update: function() {
    this.query = this.searchParams.serialize() || null
  }
};
var eV = function(e) {
    var t = f(this, eH),
      n = O(arguments.length, 1) > 1 ? arguments[1] : true,
      r = I(t, new eB(e, false, n));
    a || (t.href = r.serialize(), t.origin = r.getOrigin(), t.protocol = r.getProtocol(), t.username = r.getUsername(), t.password = r.getPassword(), t.host = r.getHost(), t.hostname = r.getHostname(), t.port = r.getPort(), t.pathname = r.getPathname(), t.search = r.getSearch(), t.searchParams = r.getSearchParams(), t.hash = r.getHash())
  },
  eH = eV.prototype,
  eY = function(e, t) {
    return {
      get: function() {
        return T(this)[e]()
      },
      set: t && function(e) {
        return T(this)[t](e)
      },
      configurable: true,
      enumerable: true
    }
  };
if (Chunk507604 && (Chunk573078(eH, "href", eY("serialize", "setHref")), Chunk573078(eH, "origin", eY("getOrigin")), Chunk573078(eH, "protocol", eY("getProtocol", "setProtocol")), Chunk573078(eH, "username", eY("getUsername", "setUsername")), Chunk573078(eH, "password", eY("getPassword", "setPassword")), Chunk573078(eH, "host", eY("getHost", "setHost")), Chunk573078(eH, "hostname", eY("getHostname", "setHostname")), Chunk573078(eH, "port", eY("getPort", "setPort")), Chunk573078(eH, "pathname", eY("getPathname", "setPathname")), Chunk573078(eH, "search", eY("getSearch", "setSearch")), Chunk573078(eH, "searchParams", eY("getSearchParams")), Chunk573078(eH, "hash", eY("getHash", "setHash"))), Chunk556585(eH, "toJSON", function() {
    return T(this).serialize()
  }, {
    enumerable: true
  }), Chunk556585(eH, "toString", function() {
    return T(this).serialize()
  }, {
    enumerable: true
  }), N) {
  var eW = N.createObjectURL,
    eK = N.revokeObjectURL;
  eW && Chunk556585(eV, "createObjectURL", Chunk48657(eW, N)), eK && Chunk556585(eV, "revokeObjectURL", Chunk48657(eK, N))
}
Chunk25124(eV, "URL"), Chunk98405({
  global: true,
  constructor: true,
  forced: !Chunk394227,
  sham: !Chunk507604
}, {
  URL: eV
})