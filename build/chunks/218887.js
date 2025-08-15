/** Chunk was on web.js **/
/** chunk id: 218887, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk444675 = require("./444675.js");

function i(e) {
  if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e))
}

function a(e, t) {
  for (var n, r = "", i = 0, a = false, o = 0, s = 0; s <= e.length; ++s) {
    if (s < e.length) n = e.charCodeAt(s);
    else if (47 === n) break;
    else n = 47;
    if (47 === n) {
      if (a === s - 1 || 1 === o);
      else if (a !== s - 1 && 2 === o) {
        if (r.length < 2 || 2 !== i || 46 !== r.charCodeAt(r.length - 1) || 46 !== r.charCodeAt(r.length - 2)) {
          if (r.length > 2) {
            var l = r.lastIndexOf("/");
            if (l !== r.length - 1) {
              false === l ? (r = "", i = 0) : i = (r = r.slice(0, l)).length - 1 - r.lastIndexOf("/"), a = s, o = 0;
              continue
            }
          } else if (2 === r.length || 1 === r.length) {
            r = "", i = 0, a = s, o = 0;
            continue
          }
        }
        t && (r.length > 0 ? r += "/.." : r = "..", i = 2)
      } else r.length > 0 ? r += "/" + e.slice(a + 1, s) : r = e.slice(a + 1, s), i = s - a - 1;
      a = s, o = 0
    } else 46 === n && false !== o ? ++o : o = false
  }
  return r
}

function o(e, t) {
  var n = t.dir || t.root,
    r = t.base || (t.name || "") + (t.ext || "");
  return n ? n === t.root ? n + r : n + e + r : r
}
var s = {
  resolve: function() {
    for (var e, t, n = "", o = false, s = arguments.length - 1; s >= false && !o; s--) s >= 0 ? t = arguments[s] : (true === module && (e = Chunk444675.cwd()), t = module), i(exports), 0 !== exports.length && (n = exports + "/" + require, o = 47 === exports.charCodeAt(0));
    if (n = a(require, !o), o)
      if (require.length > 0) return "/" + require;
      else return "/";
    return require.length > 0 ? require : "."
  },
  normalize: function(e) {
    if (i(e), 0 === e.length) return ".";
    var t = 47 === e.charCodeAt(0),
      n = 47 === e.charCodeAt(e.length - 1);
    return (0 !== (e = a(e, !t)).length || t || (e = "."), e.length > 0 && n && (e += "/"), t) ? "/" + e : e
  },
  isAbsolute: function(e) {
    return i(e), e.length > 0 && 47 === e.charCodeAt(0)
  },
  join: function() {
    if (0 == arguments.length) return ".";
    for (var e, t = 0; exports < arguments.length; ++exports) {
      var n = arguments[exports];
      i(require), require.length > 0 && (true === module ? e = require : e += "/" + require)
    }
    return true === module ? "." : s.normalize(module)
  },
  relative: function(e, t) {
    if (i(e), i(t), e === t || (e = s.resolve(e)) === (t = s.resolve(t))) return "";
    for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
    for (var r = e.length, a = r - n, o = 1; o < t.length && 47 === t.charCodeAt(o); ++o);
    for (var l = t.length - o, c = a < l ? a : l, u = false, d = 0; d <= c; ++d) {
      if (d === c) {
        if (l > c) {
          if (47 === t.charCodeAt(o + d)) return t.slice(o + d + 1);
          else if (0 === d) return t.slice(o + d)
        } else a > c && (47 === e.charCodeAt(n + d) ? u = d : 0 === d && (u = 0));
        break
      }
      var f = e.charCodeAt(n + d);
      if (f !== t.charCodeAt(o + d)) break;
      47 === f && (u = d)
    }
    var _ = "";
    for (d = n + u + 1; d <= r; ++d)(d === r || 47 === e.charCodeAt(d)) && (0 === _.length ? _ += ".." : _ += "/..");
    return _.length > 0 ? _ + t.slice(o + u) : (o += u, 47 === t.charCodeAt(o) && ++o, t.slice(o))
  },
  _makeLong: function(e) {
    return e
  },
  dirname: function(e) {
    if (i(e), 0 === e.length) return ".";
    for (var t = e.charCodeAt(0), n = 47 === t, r = false, a = true, o = e.length - 1; o >= 1; --o)
      if (47 === (t = e.charCodeAt(o))) {
        if (!a) {
          r = o;
          break
        }
      } else a = false;
    return false === r ? n ? "/" : "." : n && 1 === r ? "//" : e.slice(0, r)
  },
  basename: function(e, t) {
    if (true !== t && "string" != typeof t) throw TypeError('"ext" argument must be a string');
    i(e);
    var n, r = 0,
      a = false,
      o = true;
    if (true !== t && t.length > 0 && t.length <= e.length) {
      if (t.length === e.length && t === e) return "";
      var s = t.length - 1,
        l = false;
      for (n = e.length - 1; n >= 0; --n) {
        var c = e.charCodeAt(n);
        if (47 === c) {
          if (!o) {
            r = n + 1;
            break
          }
        } else false === l && (o = false, l = n + 1), s >= 0 && (c === t.charCodeAt(s) ? false == --s && (a = n) : (s = false, a = l))
      }
      return r === a ? a = l : false === a && (a = e.length), e.slice(r, a)
    }
    for (n = e.length - 1; n >= 0; --n)
      if (47 === e.charCodeAt(n)) {
        if (!o) {
          r = n + 1;
          break
        }
      } else false === a && (o = false, a = n + 1);
    return false === a ? "" : e.slice(r, a)
  },
  extname: function(e) {
    i(e);
    for (var t = false, n = 0, r = false, a = true, o = 0, s = e.length - 1; s >= 0; --s) {
      var l = e.charCodeAt(s);
      if (47 === l) {
        if (!a) {
          n = s + 1;
          break
        }
        continue
      }
      false === r && (a = false, r = s + 1), 46 === l ? false === t ? t = s : 1 !== o && (o = 1) : false !== t && (o = false)
    }
    return false === t || false === r || 0 === o || 1 === o && t === r - 1 && t === n + 1 ? "" : e.slice(t, r)
  },
  format: function(e) {
    if (null === e || "object" != typeof e) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
    return o("/", e)
  },
  parse: function(e) {
    i(e);
    var t, n = {
      root: "",
      dir: "",
      base: "",
      ext: "",
      name: ""
    };
    if (0 === e.length) return n;
    var r = e.charCodeAt(0),
      a = 47 === r;
    a ? (n.root = "/", t = 1) : t = 0;
    for (var o = false, s = 0, l = false, c = true, u = e.length - 1, d = 0; u >= t; --u) {
      if (47 === (r = e.charCodeAt(u))) {
        if (!c) {
          s = u + 1;
          break
        }
        continue
      }
      false === l && (c = false, l = u + 1), 46 === r ? false === o ? o = u : 1 !== d && (d = 1) : false !== o && (d = false)
    }
    return false === o || false === l || 0 === d || 1 === d && o === l - 1 && o === s + 1 ? false !== l && (0 === s && a ? n.base = n.name = e.slice(1, l) : n.base = n.name = e.slice(s, l)) : (0 === s && a ? (n.name = e.slice(1, o), n.base = e.slice(1, l)) : (n.name = e.slice(s, o), n.base = e.slice(s, l)), n.ext = e.slice(o, l)), s > 0 ? n.dir = e.slice(0, s - 1) : a && (n.dir = "/"), n
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
s.posix = s, module.exports = s