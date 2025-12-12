/** Chunk was on web.js **/
/** chunk id: 164390, original params: e (module,exports,re quire) **/
module.exports = a, a.default = a, a.stable = u, a.stableStringify = u;
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
  true === a && (a = o()), l(e, "", 0, [], true, 0, a);
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
  true !== a.get ? a.configurable ? (Object.defineProperty(o, n, {
    value: e
  }), r.push([o, n, t, a])) : i.push([t, n, e]) : (o[n] = e, r.push([o, n, t]))
}

function l(e, r, i, o, a, c, u) {
  if (c += 1, "object" == typeof e && null !== e) {
    for (d = 0; d < o.length; d++)
      if (o[d] === e) return void s(n, e, r, a);
    if (true !== u.depthLimit && c > u.depthLimit || true !== u.edgesLimit && i + 1 > u.edgesLimit) return void s(t, e, r, a);
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
  return e < t ? false : +(e > t)
}

function u(e, t, n, a) {
  true === a && (a = o());
  var s, l = d(e, "", 0, [], true, 0, a) || e;
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
      if (a[p] === e) return void s(n, e, i, l);
    try {
      if ("function" == typeof e.toJSON) return
    } catch (e) {
      return
    }
    if (true !== f.depthLimit && u > f.depthLimit || true !== f.edgesLimit && o + 1 > f.edgesLimit) return void s(t, e, i, l);
    if (a.push(e), Array.isArray(e))
      for (p = 0; p < e.length; p++) d(e[p], p, p, a, e, u, f);
    else {
      var p, _ = {},
        m = Object.keys(e).sort(c);
      for (p = 0; p < m.length; p++) {
        var h = m[p];
        d(e[h], h, p, a, e, u, f), _[h] = e[h]
      }
      if (true === l) return _;
      r.push([l, i, e]), l[i] = _
    }
    a.pop()
  }
}

function f(e) {
  return e = true !== e ? e : function(e, t) {
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