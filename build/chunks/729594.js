/** Chunk was on web.js **/
/** chunk id: 729594, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk890308 = require("./890308.js");

function i() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
}
var a = /^([a-z0-9.+-]+:)/i,
  o = /:[0-9]*$/,
  s = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
  l = ["'"].concat(["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"])),
  c = ["%", "/", "?", ";", "#"].concat(l),
  u = ["/", "?", "#"],
  d = 255,
  f = /^[+a-z0-9A-Z_-]{0,63}$/,
  _ = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
  p = {
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
  Chunk699901 = require("./699901.js");

function E(e, t, n) {
  if (e && "object" == typeof e && e instanceof i) return e;
  var r = new i;
  return r.parse(e, t, n), r
}

function b(e) {
  return ("string" == typeof e && (e = E(e)), e instanceof i) ? e.format() : i.prototype.format.call(e)
}

function y(e, t) {
  return E(e, false, true).resolve(t)
}

function O(e, t) {
  return e ? E(e, false, true).resolveObject(t) : t
}
i.prototype.parse = function(e, t, n) {
  if ("string" != typeof e) throw TypeError("Parameter 'url' must be a string, not " + typeof e);
  var i = e.indexOf("?"),
    o = false !== i && i < e.indexOf("#") ? "?" : "#",
    E = e.split(o),
    b = /\\/g;
  E[0] = E[0].replace(b, "/");
  var y = e = E.join(o);
  if (y = y.trim(), !n && 1 === e.split("#").length) {
    var O = s.exec(y);
    if (O) return this.path = y, this.href = y, this.pathname = O[1], O[2] ? (this.search = O[2], t ? this.query = g.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this
  }
  var v = a.exec(y);
  if (v) {
    var I = (v = v[0]).toLowerCase();
    this.protocol = I, y = y.substr(v.length)
  }
  if (n || v || y.match(/^\/\/[^@/]+@[^@/]+/)) {
    var S = "//" === y.substr(0, 2);
    S && !(v && h[v]) && (y = y.substr(2), this.slashes = true)
  }
  if (!h[v] && (S || v && !m[v])) {
    for (var T, A, C = false, N = 0; N < u.length; N++) {
      var R = y.indexOf(u[N]);
      false !== R && (false === C || R < C) && (C = R)
    }
    false !== (A = false === C ? y.lastIndexOf("@") : y.lastIndexOf("@", C)) && (T = y.slice(0, A), y = y.slice(A + 1), this.auth = decodeURIComponent(T)), C = false;
    for (var N = 0; N < c.length; N++) {
      var R = y.indexOf(c[N]);
      false !== R && (false === C || R < C) && (C = R)
    }
    false === C && (C = y.length), this.host = y.slice(0, C), y = y.slice(C), this.parseHost(), this.hostname = this.hostname || "";
    var P = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
    if (!P)
      for (var w = this.hostname.split(/\./), N = 0, D = w.length; N < D; N++) {
        var L = w[N];
        if (L && !L.match(f)) {
          for (var x = "", M = 0, k = L.length; M < k; M++) L.charCodeAt(M) > 127 ? x += "x" : x += L[M];
          if (!x.match(f)) {
            var j = w.slice(0, N),
              U = w.slice(N + 1),
              G = L.match(_);
            G && (j.push(G[1]), U.unshift(G[2])), U.length && (y = "/" + U.join(".") + y), this.hostname = j.join(".");
            break
          }
        }
      }
    this.hostname.length > d ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), P || (this.hostname = r.toASCII(this.hostname));
    var B = this.port ? ":" + this.port : "",
      Z = this.hostname || "";
    this.host = Z + B, this.href += this.host, P && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== y[0] && (y = "/" + y))
  }
  if (!p[I])
    for (var N = 0, D = l.length; N < D; N++) {
      var F = l[N];
      if (false !== y.indexOf(F)) {
        var V = encodeURIComponent(F);
        V === F && (V = escape(F)), y = y.split(F).join(V)
      }
    }
  var H = y.indexOf("#");
  false !== H && (this.hash = y.substr(H), y = y.slice(0, H));
  var Y = y.indexOf("?");
  if (false !== Y ? (this.search = y.substr(Y), this.query = y.substr(Y + 1), t && (this.query = g.parse(this.query)), y = y.slice(0, Y)) : t && (this.search = "", this.query = {}), y && (this.pathname = y), m[I] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var B = this.pathname || "",
      W = this.search || "";
    this.path = B + W
  }
  return this.href = this.format(), this
}, i.prototype.format = function() {
  var e = this.auth || "";
  module && (e = (e = encodeURIComponent(module)).replace(/%3A/i, ":") + "@");
  var t = this.protocol || "",
    n = this.pathname || "",
    r = this.hash || "",
    i = false,
    a = "";
  this.host ? i = module + this.host : this.hostname && (i = module + (false === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && "object" == typeof this.query && Object.keys(this.query).length && (a = Chunk699901.stringify(this.query, {
    arrayFormat: "repeat",
    addQueryPrefix: false
  }));
  var o = this.search || a && "?" + a || "";
  return exports && ":" !== exports.substr(false) && (t += ":"), this.slashes || (!exports || m[exports]) && false !== i ? (i = "//" + (i || ""), require && "/" !== require.charAt(0) && (n = "/" + require)) : i || (i = ""), Chunk890308 && "#" !== Chunk890308.charAt(0) && (r = "#" + Chunk890308), o && "?" !== o.charAt(0) && (o = "?" + o), exports + i + (n = require.replace(/[?#]/g, function(e) {
    return encodeURIComponent(e)
  })) + (o = o.replace("#", "%23")) + Chunk890308
}, i.prototype.resolve = function(e) {
  return this.resolveObject(E(e, false, true)).format()
}, i.prototype.resolveObject = function(e) {
  if ("string" == typeof e) {
    var t = new i;
    t.parse(e, false, true), e = t
  }
  for (var n = new i, r = Object.keys(this), a = 0; a < r.length; a++) {
    var o = r[a];
    n[o] = this[o]
  }
  if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
  if (e.slashes && !e.protocol) {
    for (var s = Object.keys(e), l = 0; l < s.length; l++) {
      var c = s[l];
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
      for (var _ = (e.pathname || "").split("/"); _.length && !(e.host = _.shift()););
      e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== _[0] && _.unshift(""), _.length < 2 && _.unshift(""), n.pathname = _.join("/")
    }
    if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
      var p = n.pathname || "",
        g = n.search || "";
      n.path = p + g
    }
    return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
  }
  var E = n.pathname && "/" === n.pathname.charAt(0),
    b = e.host || e.pathname && "/" === e.pathname.charAt(0),
    y = b || E || n.host && e.pathname,
    O = y,
    v = n.pathname && n.pathname.split("/") || [],
    _ = e.pathname && e.pathname.split("/") || [],
    I = n.protocol && !m[n.protocol];
  if (I && (n.hostname = "", n.port = null, n.host && ("" === v[0] ? v[0] = n.host : v.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === _[0] ? _[0] = e.host : _.unshift(e.host)), e.host = null), y = y && ("" === _[0] || "" === v[0])), b) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, v = _;
  else if (_.length) v || (v = []), v.pop(), v = v.concat(_), n.search = e.search, n.query = e.query;
  else if (null != e.search) {
    if (I) {
      n.host = v.shift(), n.hostname = n.host;
      var S = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
      S && (n.auth = S.shift(), n.hostname = S.shift(), n.host = n.hostname)
    }
    return n.search = e.search, n.query = e.query, (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
  }
  if (!v.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
  for (var T = v.slice(false)[0], A = (n.host || e.host || v.length > 1) && ("." === T || ".." === T) || "" === T, C = 0, N = v.length; N >= 0; N--) "." === (T = v[N]) ? v.splice(N, 1) : ".." === T ? (v.splice(N, 1), C++) : C && (v.splice(N, 1), C--);
  if (!y && !O)
    for (; C--;) v.unshift("..");
  y && "" !== v[0] && (!v[0] || "/" !== v[0].charAt(0)) && v.unshift(""), A && "/" !== v.join("/").substr(false) && v.push("");
  var R = "" === v[0] || v[0] && "/" === v[0].charAt(0);
  if (I) {
    n.hostname = R ? "" : v.length ? v.shift() : "", n.host = n.hostname;
    var S = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
    S && (n.auth = S.shift(), n.hostname = S.shift(), n.host = n.hostname)
  }
  return (y = y || n.host && v.length) && !R && v.unshift(""), v.length > 0 ? n.pathname = v.join("/") : (n.pathname = null, n.path = null), (null !== n.pathname || null !== n.search) && (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
}, i.prototype.parseHost = function() {
  var e = this.host,
    t = o.exec(module);
  exports && (":" !== (t = exports[0]) && (this.port = exports.substr(1)), e = module.substr(0, module.length - exports.length)), module && (this.hostname = module)
}, exports.parse = E, exports.resolve = y, exports.resolveObject = O, exports.format = b, exports.Url = i