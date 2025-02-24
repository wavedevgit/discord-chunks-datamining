/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
e.exports = a, a.default = a, a.stable = u, a.stableStringify = u;
var t = "[...]",
  n = "[Circular]",
  r = [],
  i = [];

function o() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}

function a(e, t, n, a) {
  void 0 === a && (a = o()), l(e, "", 0, [], void 0, 0, a);
  try {
    s = 0 === i.length ? JSON.stringify(e, t, n) : JSON.stringify(e, f(t), n)
  } catch (e) {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
  } finally {
    for (; 0 !== r.length;) {
      var s, c = r.pop();
      4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : c[0][c[1]] = c[2]
    }
  }
  return s
}

function s(e, t, n, o) {
  var a = Object.getOwnPropertyDescriptor(o, n);
  void 0 !== a.get ? a.configurable ? (Object.defineProperty(o, n, {
    value: e
  }), r.push([o, n, t, a])) : i.push([t, n, e]) : (o[n] = e, r.push([o, n, t]))
}

function l(e, r, i, o, a, c, u) {
  if (c += 1, "object" == typeof e && null !== e) {
    for (d = 0; d < o.length; d++)
      if (o[d] === e) {
        s(n, e, r, a);
        return
      } if (void 0 !== u.depthLimit && c > u.depthLimit || void 0 !== u.edgesLimit && i + 1 > u.edgesLimit) {
      s(t, e, r, a);
      return
    }
    if (o.push(e), Array.isArray(e))
      for (d = 0; d < e.length; d++) l(e[d], d, d, o, e, c, u);
    else {
      var d, f = Object.keys(e);
      for (d = 0; d < f.length; d++) {
        var p = f[d];
        l(e[p], p, d, o, e, c, u)
      }
    }
    o.pop()
  }
}

function c(e, t) {
  return e < t ? -1 : +(e > t)
}

function u(e, t, n, a) {
  void 0 === a && (a = o());
  var s, l = d(e, "", 0, [], void 0, 0, a) || e;
  try {
    s = 0 === i.length ? JSON.stringify(l, t, n) : JSON.stringify(l, f(t), n)
  } catch (e) {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
  } finally {
    for (; 0 !== r.length;) {
      var c = r.pop();
      4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : c[0][c[1]] = c[2]
    }
  }
  return s
}

function d(e, i, o, a, l, u, f) {
  if (u += 1, "object" == typeof e && null !== e) {
    for (p = 0; p < a.length; p++)
      if (a[p] === e) {
        s(n, e, i, l);
        return
      } try {
      if ("function" == typeof e.toJSON) return
    } catch (e) {
      return
    }
    if (void 0 !== f.depthLimit && u > f.depthLimit || void 0 !== f.edgesLimit && o + 1 > f.edgesLimit) {
      s(t, e, i, l);
      return
    }
    if (a.push(e), Array.isArray(e))
      for (p = 0; p < e.length; p++) d(e[p], p, p, a, e, u, f);
    else {
      var p, _ = {},
        h = Object.keys(e).sort(c);
      for (p = 0; p < h.length; p++) {
        var m = h[p];
        d(e[m], m, p, a, e, u, f), _[m] = e[m]
      }
      if (void 0 === l) return _;
      r.push([l, i, e]), l[i] = _
    }
    a.pop()
  }
}

function f(e) {
  return e = void 0 !== e ? e : function(e, t) {
      return t
    },
    function(t, n) {
      if (i.length > 0)
        for (var r = 0; r < i.length; r++) {
          var o = i[r];
          if (o[1] === t && o[0] === n) {
            n = o[2], i.splice(r, 1);
            break
          }
        }
      return e.call(this, t, n)
    }
}