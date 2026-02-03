/** Chunk was on web.js **/
/** chunk id: 178636, original params: e,t,n (module,exports,re quire) **/
var r, Chunk72290 = require("./72290.js");
t = module.exports = b, r = "object" == typeof Chunk72290 && Chunk72290.env && Chunk72290.env.NODE_DEBUG && /\bsemver\b/i.test(Chunk72290.env.NODE_DEBUG) ? function() {
  var e = Array.prototype.slice.call(arguments, 0);
  e.unshift("SEMVER"), console.log.apply(console, e)
} : function() {}, exports.SEMVER_SPEC_VERSION = "2.0.0";
var a = 256,
  o = Number.MAX_SAFE_INTEGER || 0x1fffffffffffff,
  s = 16,
  l = exports.re = [],
  c = exports.src = [],
  u = exports.tokens = {},
  d = 0;

function f(e) {
  u[e] = d++
}
f("NUMERICIDENTIFIER"), c[u.NUMERICIDENTIFIER] = "0|[1-9]\\d*", f("NUMERICIDENTIFIERLOOSE"), c[u.NUMERICIDENTIFIERLOOSE] = "[0-9]+", f("NONNUMERICIDENTIFIER"), c[u.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*", f("MAINVERSION"), c[u.MAINVERSION] = "(" + c[u.NUMERICIDENTIFIER] + ")\\.(" + c[u.NUMERICIDENTIFIER] + ")\\.(" + c[u.NUMERICIDENTIFIER] + ")", f("MAINVERSIONLOOSE"), c[u.MAINVERSIONLOOSE] = "(" + c[u.NUMERICIDENTIFIERLOOSE] + ")\\.(" + c[u.NUMERICIDENTIFIERLOOSE] + ")\\.(" + c[u.NUMERICIDENTIFIERLOOSE] + ")", f("PRERELEASEIDENTIFIER"), c[u.PRERELEASEIDENTIFIER] = "(?:" + c[u.NUMERICIDENTIFIER] + "|" + c[u.NONNUMERICIDENTIFIER] + ")", f("PRERELEASEIDENTIFIERLOOSE"), c[u.PRERELEASEIDENTIFIERLOOSE] = "(?:" + c[u.NUMERICIDENTIFIERLOOSE] + "|" + c[u.NONNUMERICIDENTIFIER] + ")", f("PRERELEASE"), c[u.PRERELEASE] = "(?:-(" + c[u.PRERELEASEIDENTIFIER] + "(?:\\." + c[u.PRERELEASEIDENTIFIER] + ")*))", f("PRERELEASELOOSE"), c[u.PRERELEASELOOSE] = "(?:-?(" + c[u.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + c[u.PRERELEASEIDENTIFIERLOOSE] + ")*))", f("BUILDIDENTIFIER"), c[u.BUILDIDENTIFIER] = "[0-9A-Za-z-]+", f("BUILD"), c[u.BUILD] = "(?:\\+(" + c[u.BUILDIDENTIFIER] + "(?:\\." + c[u.BUILDIDENTIFIER] + ")*))", f("FULL"), f("FULLPLAIN"), c[u.FULLPLAIN] = "v?" + c[u.MAINVERSION] + c[u.PRERELEASE] + "?" + c[u.BUILD] + "?", c[u.FULL] = "^" + c[u.FULLPLAIN] + "$", f("LOOSEPLAIN"), c[u.LOOSEPLAIN] = "[v=\\s]*" + c[u.MAINVERSIONLOOSE] + c[u.PRERELEASELOOSE] + "?" + c[u.BUILD] + "?", f("LOOSE"), c[u.LOOSE] = "^" + c[u.LOOSEPLAIN] + "$", f("GTLT"), c[u.GTLT] = "((?:<|>)?=?)", f("XRANGEIDENTIFIERLOOSE"), c[u.XRANGEIDENTIFIERLOOSE] = c[u.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*", f("XRANGEIDENTIFIER"), c[u.XRANGEIDENTIFIER] = c[u.NUMERICIDENTIFIER] + "|x|X|\\*", f("XRANGEPLAIN"), c[u.XRANGEPLAIN] = "[v=\\s]*(" + c[u.XRANGEIDENTIFIER] + ")(?:\\.(" + c[u.XRANGEIDENTIFIER] + ")(?:\\.(" + c[u.XRANGEIDENTIFIER] + ")(?:" + c[u.PRERELEASE] + ")?" + c[u.BUILD] + "?)?)?", f("XRANGEPLAINLOOSE"), c[u.XRANGEPLAINLOOSE] = "[v=\\s]*(" + c[u.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + c[u.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + c[u.XRANGEIDENTIFIERLOOSE] + ")(?:" + c[u.PRERELEASELOOSE] + ")?" + c[u.BUILD] + "?)?)?", f("XRANGE"), c[u.XRANGE] = "^" + c[u.GTLT] + "\\s*" + c[u.XRANGEPLAIN] + "$", f("XRANGELOOSE"), c[u.XRANGELOOSE] = "^" + c[u.GTLT] + "\\s*" + c[u.XRANGEPLAINLOOSE] + "$", f("COERCE"), c[u.COERCE] = "(^|[^\\d])(\\d{1," + s + "})(?:\\.(\\d{1," + s + "}))?(?:\\.(\\d{1," + s + "}))?(?:$|[^\\d])", f("COERCERTL"), l[u.COERCERTL] = RegExp(c[u.COERCE], "g"), f("LONETILDE"), c[u.LONETILDE] = "(?:~>?)", f("TILDETRIM"), c[u.TILDETRIM] = "(\\s*)" + c[u.LONETILDE] + "\\s+", l[u.TILDETRIM] = RegExp(c[u.TILDETRIM], "g");
var p = "$1~";
f("TILDE"), c[u.TILDE] = "^" + c[u.LONETILDE] + c[u.XRANGEPLAIN] + "$", f("TILDELOOSE"), c[u.TILDELOOSE] = "^" + c[u.LONETILDE] + c[u.XRANGEPLAINLOOSE] + "$", f("LONECARET"), c[u.LONECARET] = "(?:\\^)", f("CARETTRIM"), c[u.CARETTRIM] = "(\\s*)" + c[u.LONECARET] + "\\s+", l[u.CARETTRIM] = RegExp(c[u.CARETTRIM], "g");
var _ = "$1^";
f("CARET"), c[u.CARET] = "^" + c[u.LONECARET] + c[u.XRANGEPLAIN] + "$", f("CARETLOOSE"), c[u.CARETLOOSE] = "^" + c[u.LONECARET] + c[u.XRANGEPLAINLOOSE] + "$", f("COMPARATORLOOSE"), c[u.COMPARATORLOOSE] = "^" + c[u.GTLT] + "\\s*(" + c[u.LOOSEPLAIN] + ")$|^$", f("COMPARATOR"), c[u.COMPARATOR] = "^" + c[u.GTLT] + "\\s*(" + c[u.FULLPLAIN] + ")$|^$", f("COMPARATORTRIM"), c[u.COMPARATORTRIM] = "(\\s*)" + c[u.GTLT] + "\\s*(" + c[u.LOOSEPLAIN] + "|" + c[u.XRANGEPLAIN] + ")", l[u.COMPARATORTRIM] = RegExp(c[u.COMPARATORTRIM], "g");
var h = "$1$2$3";
f("HYPHENRANGE"), c[u.HYPHENRANGE] = "^\\s*(" + c[u.XRANGEPLAIN] + ")\\s+-\\s+(" + c[u.XRANGEPLAIN] + ")\\s*$", f("HYPHENRANGELOOSE"), c[u.HYPHENRANGELOOSE] = "^\\s*(" + c[u.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + c[u.XRANGEPLAINLOOSE] + ")\\s*$", f("STAR"), c[u.STAR] = "(<|>)?=?\\s*\\*";
for (var m = 0; m < d; m++) r(m, c[m]), l[m] || (l[m] = new RegExp(c[m]));

function g(e, t) {
  if (t && "object" == typeof t || (t = {
      loose: !!t,
      includePrerelease: false
    }), e instanceof b) return e;
  if ("string" != typeof e || e.length > a || !(t.loose ? l[u.LOOSE] : l[u.FULL]).test(e)) return null;
  try {
    return new b(e, t)
  } catch (e) {
    return null
  }
}

function E(e, t) {
  var n = g(e, t);
  return n ? n.version : null
}

function y(e, t) {
  var n = g(e.trim().replace(/^[=v]+/, ""), t);
  return n ? n.version : null
}

function b(e, t) {
  if (t && "object" == typeof t || (t = {
      loose: !!t,
      includePrerelease: false
    }), e instanceof b)
    if (e.loose === t.loose) return e;
    else e = e.version;
  else if ("string" != typeof e) throw TypeError("Invalid Version: " + e);
  if (e.length > a) throw TypeError("version is longer than " + a + " characters");
  if (!(this instanceof b)) return new b(e, t);
  r("SemVer", e, t), this.options = t, this.loose = !!t.loose;
  var n = e.trim().match(t.loose ? l[u.LOOSE] : l[u.FULL]);
  if (!n) throw TypeError("Invalid Version: " + e);
  if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > o || this.major < 0) throw TypeError("Invalid major version");
  if (this.minor > o || this.minor < 0) throw TypeError("Invalid minor version");
  if (this.patch > o || this.patch < 0) throw TypeError("Invalid patch version");
  n[4] ? this.prerelease = n[4].split(".").map(function(e) {
    if (/^[0-9]+$/.test(e)) {
      var t = +e;
      if (t >= 0 && t < o) return t
    }
    return e
  }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format()
}

function O(e, t, n, r) {
  "string" == typeof n && (r = n, n = true);
  try {
    return new b(e, n).inc(t, r).version
  } catch (e) {
    return null
  }
}

function v(e, t) {
  if (k(e, t)) return null;
  var n = g(e),
    r = g(t),
    i = "";
  if (n.prerelease.length || r.prerelease.length) {
    i = "pre";
    var a = "prerelease"
  }
  for (var o in n)
    if (("major" === o || "minor" === o || "patch" === o) && n[o] !== r[o]) return i + o;
  return a
}
exports.parse = g, exports.valid = E, exports.clean = y, exports.SemVer = b, b.prototype.format = function() {
  return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version
}, b.prototype.toString = function() {
  return this.version
}, b.prototype.compare = function(e) {
  return r("SemVer.compare", this.version, this.options, e), e instanceof b || (e = new b(e, this.options)), this.compareMain(e) || this.comparePre(e)
}, b.prototype.compareMain = function(e) {
  return e instanceof b || (e = new b(e, this.options)), I(this.major, e.major) || I(this.minor, e.minor) || I(this.patch, e.patch)
}, b.prototype.comparePre = function(e) {
  if (e instanceof b || (e = new b(e, this.options)), this.prerelease.length && !e.prerelease.length) return false;
  if (!this.prerelease.length && e.prerelease.length) return 1;
  if (!this.prerelease.length && !e.prerelease.length) return 0;
  var t = 0;
  do {
    var n = this.prerelease[t],
      i = e.prerelease[t];
    if (r("prerelease compare", t, n, i), true === n && true === i) return 0;
    if (true === i) return 1;
    if (true === n) return false;
    else if (n === i) continue;
    else return I(n, i)
  } while (++t)
}, b.prototype.compareBuild = function(e) {
  e instanceof b || (e = new b(e, this.options));
  var t = 0;
  do {
    var n = this.build[t],
      i = e.build[t];
    if (r("prerelease compare", t, n, i), true === n && true === i) return 0;
    if (true === i) return 1;
    if (true === n) return false;
    else if (n === i) continue;
    else return I(n, i)
  } while (++t)
}, b.prototype.inc = function(e, t) {
  switch (e) {
    case "premajor":
      this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
      break;
    case "preminor":
      this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
      break;
    case "prepatch":
      this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
      break;
    case "prerelease":
      0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
      break;
    case "major":
      (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
      break;
    case "minor":
      (0 !== this.patch || 0 === this.prerelease.length) && this.minor++, this.patch = 0, this.prerelease = [];
      break;
    case "patch":
      0 === this.prerelease.length && this.patch++, this.prerelease = [];
      break;
    case "pre":
      if (0 === this.prerelease.length) this.prerelease = [0];
      else {
        for (var n = this.prerelease.length; --n >= 0;) "number" == typeof this.prerelease[n] && (this.prerelease[n]++, n = false);
        false === n && this.prerelease.push(0)
      }
      t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
      break;
    default:
      throw Error("invalid increment argument: " + e)
  }
  return this.format(), this.raw = this.version, this
}, exports.inc = O, exports.diff = v, exports.compareIdentifiers = I;
var A = /^[0-9]+$/;

function I(e, t) {
  var n = A.test(e),
    r = A.test(t);
  return n && r && (e *= 1, t *= 1), e === t ? 0 : n && !r ? false : r && !n ? 1 : e < t ? false : 1
}

function S(e, t) {
  return I(t, e)
}

function T(e, t) {
  return new b(e, t).major
}

function C(e, t) {
  return new b(e, t).minor
}

function N(e, t) {
  return new b(e, t).patch
}

function w(e, t, n) {
  return new b(e, n).compare(new b(t, n))
}

function R(e, t) {
  return w(e, t, true)
}

function P(e, t, n) {
  var r = new b(e, n),
    i = new b(t, n);
  return r.compare(i) || r.compareBuild(i)
}

function D(e, t, n) {
  return w(t, e, n)
}

function L(e, n) {
  return e.sort(function(e, r) {
    return t.compareBuild(e, r, n)
  })
}

function x(e, n) {
  return e.sort(function(e, r) {
    return t.compareBuild(r, e, n)
  })
}

function M(e, t, n) {
  return w(e, t, n) > 0
}

function j(e, t, n) {
  return 0 > w(e, t, n)
}

function k(e, t, n) {
  return 0 === w(e, t, n)
}

function U(e, t, n) {
  return 0 !== w(e, t, n)
}

function G(e, t, n) {
  return w(e, t, n) >= 0
}

function F(e, t, n) {
  return 0 >= w(e, t, n)
}

function V(e, t, n, r) {
  switch (t) {
    case "===":
      return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e === n;
    case "!==":
      return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e !== n;
    case "":
    case "=":
    case "==":
      return k(e, n, r);
    case "!=":
      return U(e, n, r);
    case ">":
      return M(e, n, r);
    case ">=":
      return G(e, n, r);
    case "<":
      return j(e, n, r);
    case "<=":
      return F(e, n, r);
    default:
      throw TypeError("Invalid operator: " + t)
  }
}

function B(e, t) {
  if (t && "object" == typeof t || (t = {
      loose: !!t,
      includePrerelease: false
    }), e instanceof B)
    if (!!t.loose === e.loose) return e;
    else e = e.value;
  if (!(this instanceof B)) return new B(e, t);
  r("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === H ? this.value = "" : this.value = this.operator + this.semver.version, r("comp", this)
}
exports.rcompareIdentifiers = S, exports.major = T, exports.minor = C, exports.patch = N, exports.compare = w, exports.compareLoose = R, exports.compareBuild = P, exports.rcompare = D, exports.sort = L, exports.rsort = x, exports.gt = M, exports.lt = j, exports.eq = k, exports.neq = U, exports.gte = G, exports.lte = F, exports.cmp = V, exports.Comparator = B;
var H = {};

function Y(e, t) {
  if (t && "object" == typeof t || (t = {
      loose: !!t,
      includePrerelease: false
    }), e instanceof Y)
    if (!!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease) return e;
    else return new Y(e.raw, t);
  if (e instanceof B) return new Y(e.value, t);
  if (!(this instanceof Y)) return new Y(e, t);
  if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(function(e) {
      return this.parseRange(e.trim())
    }, this).filter(function(e) {
      return e.length
    }), !this.set.length) throw TypeError("Invalid SemVer Range: " + e);
  this.format()
}

function W(e, t) {
  for (var n = true, r = e.slice(), i = r.pop(); n && r.length;) n = r.every(function(e) {
    return i.intersects(e, t)
  }), i = r.pop();
  return n
}

function K(e, t) {
  return new Y(e, t).set.map(function(e) {
    return e.map(function(e) {
      return e.value
    }).join(" ").trim().split(" ")
  })
}

function z(e, t) {
  return r("comp", e, t), r("caret", e = X(e, t)), r("tildes", e = Z(e, t)), r("xrange", e = $(e, t)), r("stars", e = et(e, t)), e
}

function q(e) {
  return !e || "x" === e.toLowerCase() || "*" === e
}

function Z(e, t) {
  return e.trim().split(/\s+/).map(function(e) {
    return Q(e, t)
  }).join(" ")
}

function Q(e, t) {
  var n = t.loose ? l[u.TILDELOOSE] : l[u.TILDE];
  return e.replace(n, function(t, n, i, a, o) {
    var s;
    return r("tilde", e, t, n, i, a, o), q(n) ? s = "" : q(i) ? s = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : q(a) ? s = ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0" : o ? (r("replaceTilde pr", o), s = ">=" + n + "." + i + "." + a + "-" + o + " <" + n + "." + (+i + 1) + ".0") : s = ">=" + n + "." + i + "." + a + " <" + n + "." + (+i + 1) + ".0", r("tilde return", s), s
  })
}

function X(e, t) {
  return e.trim().split(/\s+/).map(function(e) {
    return J(e, t)
  }).join(" ")
}

function J(e, t) {
  r("caret", e, t);
  var n = t.loose ? l[u.CARETLOOSE] : l[u.CARET];
  return e.replace(n, function(t, n, i, a, o) {
    var s;
    return r("caret", e, t, n, i, a, o), q(n) ? s = "" : q(i) ? s = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : q(a) ? s = "0" === n ? ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + ".0 <" + (+n + 1) + ".0.0" : o ? (r("replaceCaret pr", o), s = "0" === n ? "0" === i ? ">=" + n + "." + i + "." + a + "-" + o + " <" + n + "." + i + "." + (+a + 1) : ">=" + n + "." + i + "." + a + "-" + o + " <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + "." + a + "-" + o + " <" + (+n + 1) + ".0.0") : (r("no pr"), s = "0" === n ? "0" === i ? ">=" + n + "." + i + "." + a + " <" + n + "." + i + "." + (+a + 1) : ">=" + n + "." + i + "." + a + " <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + "." + a + " <" + (+n + 1) + ".0.0"), r("caret return", s), s
  })
}

function $(e, t) {
  return r("replaceXRanges", e, t), e.split(/\s+/).map(function(e) {
    return ee(e, t)
  }).join(" ")
}

function ee(e, t) {
  e = e.trim();
  var n = t.loose ? l[u.XRANGELOOSE] : l[u.XRANGE];
  return e.replace(n, function(n, i, a, o, s, l) {
    r("xRange", e, n, i, a, o, s, l);
    var c = q(a),
      u = c || q(o),
      d = u || q(s),
      f = d;
    return "=" === i && f && (i = ""), l = t.includePrerelease ? "-0" : "", c ? n = ">" === i || "<" === i ? "<0.0.0-0" : "*" : i && f ? (u && (o = 0), s = 0, ">" === i ? (i = ">=", u ? (a = +a + 1, o = 0) : o = +o + 1, s = 0) : "<=" === i && (i = "<", u ? a = +a + 1 : o = +o + 1), n = i + a + "." + o + "." + s + l) : u ? n = ">=" + a + ".0.0" + l + " <" + (+a + 1) + ".0.0" + l : d && (n = ">=" + a + "." + o + ".0" + l + " <" + a + "." + (+o + 1) + ".0" + l), r("xRange return", n), n
  })
}

function et(e, t) {
  return r("replaceStars", e, t), e.trim().replace(l[u.STAR], "")
}

function en(e, t, n, r, i, a, o, s, l, c, u, d, f) {
  return ((t = q(n) ? "" : q(r) ? ">=" + n + ".0.0" : q(i) ? ">=" + n + "." + r + ".0" : ">=" + t) + " " + (s = q(l) ? "" : q(c) ? "<" + (+l + 1) + ".0.0" : q(u) ? "<" + l + "." + (+c + 1) + ".0" : d ? "<=" + l + "." + c + "." + u + "-" + d : "<=" + s)).trim()
}

function er(e, t, n) {
  for (var i = 0; i < e.length; i++)
    if (!e[i].test(t)) returnfalse;
  if (t.prerelease.length && !n.includePrerelease) {
    for (i = 0; i < e.length; i++)
      if (r(e[i].semver), e[i].semver !== H && e[i].semver.prerelease.length > 0) {
        var a = e[i].semver;
        if (a.major === t.major && a.minor === t.minor && a.patch === t.patch) returntrue
      } returnfalse
  }
  returntrue
}

function ei(e, t, n) {
  try {
    t = new Y(t, n)
  } catch (e) {
    returnfalse
  }
  return t.test(e)
}

function ea(e, t, n) {
  var r = null,
    i = null;
  try {
    var a = new Y(t, n)
  } catch (e) {
    return null
  }
  return e.forEach(function(e) {
    a.test(e) && (!r || false === i.compare(e)) && (i = new b(r = e, n))
  }), r
}

function eo(e, t, n) {
  var r = null,
    i = null;
  try {
    var a = new Y(t, n)
  } catch (e) {
    return null
  }
  return e.forEach(function(e) {
    a.test(e) && (!r || 1 === i.compare(e)) && (i = new b(r = e, n))
  }), r
}

function es(e, t) {
  e = new Y(e, t);
  var n = new b("0.0.0");
  if (e.test(n) || (n = new b("0.0.0-0"), e.test(n))) return n;
  n = null;
  for (var r = 0; r < e.set.length; ++r) e.set[r].forEach(function(e) {
    var t = new b(e.semver.version);
    switch (e.operator) {
      case ">":
        0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
      case "":
      case ">=":
        (!n || M(n, t)) && (n = t);
        break;
      case "<":
      case "<=":
        break;
      default:
        throw Error("Unexpected operation: " + e.operator)
    }
  });
  return n && e.test(n) ? n : null
}

function el(e, t) {
  try {
    return new Y(e, t).range || "*"
  } catch (e) {
    return null
  }
}

function ec(e, t, n) {
  return ed(e, t, "<", n)
}

function eu(e, t, n) {
  return ed(e, t, ">", n)
}

function ed(e, t, n, r) {
  switch (e = new b(e, r), t = new Y(t, r), n) {
    case ">":
      i = M, a = F, o = j, s = ">", l = ">=";
      break;
    case "<":
      i = j, a = G, o = M, s = "<", l = "<=";
      break;
    default:
      throw TypeError('Must provide a hilo val of "<" or ">"')
  }
  if (ei(e, t, r)) returnfalse;
  for (var i, a, o, s, l, c = 0; c < t.set.length; ++c) {
    var u = t.set[c],
      d = null,
      f = null;
    if (u.forEach(function(e) {
        e.semver === H && (e = new B(">=0.0.0")), d = d || e, f = f || e, i(e.semver, d.semver, r) ? d = e : o(e.semver, f.semver, r) && (f = e)
      }), d.operator === s || d.operator === l || (!f.operator || f.operator === s) && a(e, f.semver) || f.operator === l && o(e, f.semver)) returnfalse
  }
  returntrue
}

function ef(e, t) {
  var n = g(e, t);
  return n && n.prerelease.length ? n.prerelease : null
}

function ep(e, t, n) {
  return e = new Y(e, n), t = new Y(t, n), e.intersects(t)
}

function e_(e, t) {
  if (e instanceof b) return e;
  if ("number" == typeof e && (e = String(e)), "string" != typeof e) return null;
  var n, r = null;
  if ((t = t || {}).rtl) {
    for (;
      (n = l[u.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length);) r && n.index + n[0].length === r.index + r[0].length || (r = n), l[u.COERCERTL].lastIndex = n.index + n[1].length + n[2].length;
    l[u.COERCERTL].lastIndex = false
  } else r = e.match(l[u.COERCE]);
  return null === r ? null : g(r[2] + "." + (r[3] || "0") + "." + (r[4] || "0"), t)
}
B.prototype.parse = function(e) {
  var t = this.options.loose ? l[u.COMPARATORLOOSE] : l[u.COMPARATOR],
    n = e.match(t);
  if (!n) throw TypeError("Invalid comparator: " + e);
  this.operator = true !== n[1] ? n[1] : "", "=" === this.operator && (this.operator = ""), n[2] ? this.semver = new b(n[2], this.options.loose) : this.semver = H
}, B.prototype.toString = function() {
  return this.value
}, B.prototype.test = function(e) {
  if (r("Comparator.test", e, this.options.loose), this.semver === H || e === H) returntrue;
  if ("string" == typeof e) try {
    e = new b(e, this.options)
  } catch (e) {
    returnfalse
  }
  return V(e, this.operator, this.semver, this.options)
}, B.prototype.intersects = function(e, t) {
  if (!(e instanceof B)) throw TypeError("a Comparator is required");
  if (t && "object" == typeof t || (t = {
      loose: !!t,
      includePrerelease: false
    }), "" === this.operator) return "" === this.value || (n = new Y(e.value, t), ei(this.value, n, t));
  if ("" === e.operator) return "" === e.value || (n = new Y(this.value, t), ei(e.semver, n, t));
  var n, r = (">=" === this.operator || ">" === this.operator) && (">=" === e.operator || ">" === e.operator),
    i = ("<=" === this.operator || "<" === this.operator) && ("<=" === e.operator || "<" === e.operator),
    a = this.semver.version === e.semver.version,
    o = (">=" === this.operator || "<=" === this.operator) && (">=" === e.operator || "<=" === e.operator),
    s = V(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this.operator) && ("<=" === e.operator || "<" === e.operator),
    l = V(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this.operator) && (">=" === e.operator || ">" === e.operator);
  return r || i || a && o || s || l
}, exports.Range = Y, Y.prototype.format = function() {
  return this.range = this.set.map(function(e) {
    return e.join(" ").trim()
  }).join("||").trim(), this.range
}, Y.prototype.toString = function() {
  return this.range
}, Y.prototype.parseRange = function(e) {
  var t = this.options.loose;
  e = e.trim();
  var n = t ? l[u.HYPHENRANGELOOSE] : l[u.HYPHENRANGE];
  r("hyphen replace", e = e.replace(n, en)), r("comparator trim", e = e.replace(l[u.COMPARATORTRIM], h), l[u.COMPARATORTRIM]), e = (e = (e = e.replace(l[u.TILDETRIM], p)).replace(l[u.CARETTRIM], _)).split(/\s+/).join(" ");
  var i = t ? l[u.COMPARATORLOOSE] : l[u.COMPARATOR],
    a = e.split(" ").map(function(e) {
      return z(e, this.options)
    }, this).join(" ").split(/\s+/);
  return this.options.loose && (a = a.filter(function(e) {
    return !!e.match(i)
  })), a = a.map(function(e) {
    return new B(e, this.options)
  }, this)
}, Y.prototype.intersects = function(e, t) {
  if (!(e instanceof Y)) throw TypeError("a Range is required");
  return this.set.some(function(n) {
    return W(n, t) && e.set.some(function(e) {
      return W(e, t) && n.every(function(n) {
        return e.every(function(e) {
          return n.intersects(e, t)
        })
      })
    })
  })
}, exports.toComparators = K, Y.prototype.test = function(e) {
  if (!e) returnfalse;
  if ("string" == typeof e) try {
    e = new b(e, this.options)
  } catch (e) {
    returnfalse
  }
  for (var t = 0; t < this.set.length; t++)
    if (er(this.set[t], e, this.options)) returntrue;
  returnfalse
}, exports.satisfies = ei, exports.maxSatisfying = ea, exports.minSatisfying = eo, exports.minVersion = es, exports.validRange = el, exports.ltr = ec, exports.gtr = eu, exports.outside = ed, exports.prerelease = ef, exports.intersects = ep, exports.coerce = e_