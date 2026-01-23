/** Chunk was on web.js **/
/** chunk id: 567243, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk89738 = require("./89738.js");

function i() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
}
var a = /^([a-z0-9.+-]+:)/i,
  s = /:[0-9]*$/,
  o = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
  l = ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"])),
  c = ["%", "/", "?", ";", "#"].concat(l),
  u = ["/", "?", "#"],
  d = 255,
  f = /^[+a-z0-9A-Z_-]{0,63}$/,
  p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
  _ = {
    javascript: true,
    "javascript:": true
  },
  h = {
    javascript: true,
    "javascript:": true
  },
  m = {
    http: true,
    https: true,
    ftp: true,
    gopher: true,
    file: true,
    "http:": true,
    "https:": true,
    "ftp:": true,
    "gopher:": true,
    "file:": true
  },
  Chunk591560 = require("./591560.js");

function E(e, t, n) {
  if (e && "object" == typeof e && e instanceof i) return e;
  var r = new i;
  return r.parse(e, t, n), r
}

function y(e) {
  return ("string" == typeof e && (e = E(e)), e instanceof i) ? e.format() : i.prototype.format.call(e)
}

function b(e, t) {
  return E(e, false, true).resolve(t)
}

function O(e, t) {
  return e ? E(e, false, true).resolveObject(t) : t
}
i.prototype.parse = function(e, t, n) {
  if ("string" != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
  var i = e.indexOf("?"),
    s = false !== i && i < e.indexOf("#") ? "?" : "#",
    E = e.split(s),
    y = /\\/g;
  E[0] = E[0].replace(y, "/");
  var b = e = E.join(s);
  if (b = b.trim(), !n && 1 === e.split("#").length) {
    var O = o.exec(b);
    if (O) return this.path = b, this.href = b, this.pathname = O[1], O[2] ? (this.search = O[2], t ? this.query = g.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this
  }
  var v = a.exec(b);
  if (v) {
    var A = (v = v[0]).toLowerCase();
    this.protocol = A, b = b.substr(v.length)
  }
  if (n || v || b.match(/^\/\/[^@/]+@[^@/]+/)) {
    var I = "//" === b.substr(0, 2);
    I && !(v && h[v]) && (b = b.substr(2), this.slashes = true)
  }
  if (!h[v] && (I || v && !m[v])) {
    for (var S, T, C = false, N = 0; N < u.length; N++) {
      var R = b.indexOf(u[N]);
      false !== R && (false === C || R < C) && (C = R)
    }
    false !== (T = false === C ? b.lastIndexOf("@") : b.lastIndexOf("@", C)) && (S = b.slice(0, T), b = b.slice(T + 1), this.auth = decodeURIComponent(S)), C = false;
    for (var N = 0; N < c.length; N++) {
      var R = b.indexOf(c[N]);
      false !== R && (false === C || R < C) && (C = R)
    }
    false === C && (C = b.length), this.host = b.slice(0, C), b = b.slice(C), this.parseHost(), this.hostname = this.hostname || "";
    var w = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
    if (!w)
      for (var P = this.hostname.split(/\./), N = 0, D = P.length; N < D; N++) {
        var x = P[N];
        if (x && !x.match(f)) {
          for (var L = "", j = 0, M = x.length; j < M; j++) x.charCodeAt(j) > 127 ? L += "x" : L += x[j];
          if (!L.match(f)) {
            var k = P.slice(0, N),
              U = P.slice(N + 1),
              G = x.match(p);
            G && (k.push(G[1]), U.unshift(G[2])), U.length && (b = "/" + U.join(".") + b), this.hostname = k.join(".");
            break
          }
        }
      }
    this.hostname.length > d ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), w || (this.hostname = r.toASCII(this.hostname));
    var V = this.port ? ":" + this.port : "",
      F = this.hostname || "";
    this.host = F + V, this.href += this.host, w && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== b[0] && (b = "/" + b))
  }
  if (!_[A])
    for (var N = 0, D = l.length; N < D; N++) {
      var B = l[N];
      if (false !== b.indexOf(B)) {
        var H = encodeURIComponent(B);
        H === B && (H = escape(B)), b = b.split(B).join(H)
      }
    }
  var Y = b.indexOf("#");
  false !== Y && (this.hash = b.substr(Y), b = b.slice(0, Y));
  var W = b.indexOf("?");
  if (false !== W ? (this.search = b.substr(W), this.query = b.substr(W + 1), t && (this.query = g.parse(this.query)), b = b.slice(0, W)) : t && (this.search = "", this.query = {}), b && (this.pathname = b), m[A] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var V = this.pathname || "",
      K = this.search || "";
    this.path = V + K
  }
  return this.href = this.format(), this
}, i.prototype.format = function() {
  var e = this.auth || "";
  e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":") + "@");
  var t = this.protocol || "",
    n = this.pathname || "",
    r = this.hash || "",
    i = false,
    a = "";
  this.host ? i = e + this.host : this.hostname && (i = e + (false === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && "object" == typeof this.query && Object.keys(this.query).length && (a = g.stringify(this.query, {
    arrayFormat: "repeat",
    addQueryPrefix: false
  }));
  var s = this.search || a && "?" + a || "";
  return t && ":" !== t.substr(false) && (t += ":"), this.slashes || (!t || m[t]) && false !== i ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), s && "?" !== s.charAt(0) && (s = "?" + s), t + i + (n = n.replace(/[?#]/g, function(e) {
    return encodeURIComponent(e)
  })) + (s = s.replace("#", "%23")) + r
}, i.prototype.resolve = function(e) {
  return this.resolveObject(E(e, false, true)).format()
}, i.prototype.resolveObject = function(e) {
  if ("string" == typeof e) {
    var t = new i;
    t.parse(e, false, true), e = t
  }
  for (var n = new i, r = Object.keys(this), a = 0; a < r.length; a++) {
    var s = r[a];
    n[s] = this[s]
  }
  if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
  if (e.slashes && !e.protocol) {
    for (var o = Object.keys(e), l = 0; l < o.length; l++) {
      var c = o[l];
      "protocol" !== c && (n[c] = e[c])
    }
    return m[n.protocol] && n.hostname && !n.pathname && (n.pathname = "/", n.path = n.pathname), n.href = n.format(), n
  }
  if (e.protocol && e.protocol !== n.protocol) {
    if (!m[e.protocol]) {
      for (var u = Object.keys(e), d = 0; d < u.length; d++) {
        var f = u[d];
        n[f] = e[f]
      }
      return n.href = n.format(), n
    }
    if (n.protocol = e.protocol, e.host || h[e.protocol]) n.pathname = e.pathname;
    else {
      for (var p = (e.pathname || "").split("/"); p.length && !(e.host = p.shift()););
      e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), n.pathname = p.join("/")
    }
    if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
      var _ = n.pathname || "",
        g = n.search || "";
      n.path = _ + g
    }
    return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
  }
  var E = n.pathname && "/" === n.pathname.charAt(0),
    y = e.host || e.pathname && "/" === e.pathname.charAt(0),
    b = y || E || n.host && e.pathname,
    O = b,
    v = n.pathname && n.pathname.split("/") || [],
    p = e.pathname && e.pathname.split("/") || [],
    A = n.protocol && !m[n.protocol];
  if (A && (n.hostname = "", n.port = null, n.host && ("" === v[0] ? v[0] = n.host : v.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === p[0] ? p[0] = e.host : p.unshift(e.host)), e.host = null), b = b && ("" === p[0] || "" === v[0])), y) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, v = p;
  else if (p.length) v || (v = []), v.pop(), v = v.concat(p), n.search = e.search, n.query = e.query;
  else if (null != e.search) {
    if (A) {
      n.host = v.shift(), n.hostname = n.host;
      var I = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
      I && (n.auth = I.shift(), n.hostname = I.shift(), n.host = n.hostname)
    }
    return n.search = e.search, n.query = e.query, (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
  }
  if (!v.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
  for (var S = v.slice(false)[0], T = (n.host || e.host || v.length > 1) && ("." === S || ".." === S) || "" === S, C = 0, N = v.length; N >= 0; N--) "." === (S = v[N]) ? v.splice(N, 1) : ".." === S ? (v.splice(N, 1), C++) : C && (v.splice(N, 1), C--);
  if (!b && !O)
    for (; C--;) v.unshift("..");
  b && "" !== v[0] && (!v[0] || "/" !== v[0].charAt(0)) && v.unshift(""), T && "/" !== v.join("/").substr(false) && v.push("");
  var R = "" === v[0] || v[0] && "/" === v[0].charAt(0);
  if (A) {
    n.hostname = R ? "" : v.length ? v.shift() : "", n.host = n.hostname;
    var I = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
    I && (n.auth = I.shift(), n.hostname = I.shift(), n.host = n.hostname)
  }
  return (b = b || n.host && v.length) && !R && v.unshift(""), v.length > 0 ? n.pathname = v.join("/") : (n.pathname = null, n.path = null), (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
}, i.prototype.parseHost = function() {
  var e = this.host,
    t = s.exec(e);
  t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
}, exports.parse = E, exports.resolve = b, exports.resolveObject = O, exports.format = y, exports.Url = i