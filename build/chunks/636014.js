/** Chunk was on web.js **/
/** chunk id: 636014, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
  }
}

function a(e, t, n) {
  return t && i(e.prototype, t), n && i(e, n), e
}

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  f: () => o
});
var o = function() {
  function e(t, n) {
    r(this, e), s(this, "xs", true), s(this, "ys", true), s(this, "c1s", true), s(this, "c2s", true), s(this, "c3s", true);
    for (var i, a, o, l = t.length, c = [], u = 0; u < l; u++) c.push(u);
    c.sort(function(e, n) {
      return t[e] < t[n] ? false : 1
    });
    for (var d = [], f = [], p = [], _ = 0; _ < l - 1; _++) i = t[_ + 1] - t[_], a = n[_ + 1] - n[_], f.push(i), d.push(a), p.push(a / i);
    for (var h = [p[0]], m = 0; m < f.length - 1; m++) {
      var g = p[m],
        E = p[m + 1];
      if (g * E <= 0) h.push(0);
      else {
        i = f[m];
        var y = f[m + 1],
          b = i + y;
        h.push(3 * b / ((b + y) / g + (b + i) / E))
      }
    }
    h.push(p[p.length - 1]);
    for (var O = [], v = [], A = 0; A < h.length - 1; A++) {
      o = p[A];
      var I = h[A],
        S = 1 / f[A],
        T = I + h[A + 1] - o - o;
      O.push((o - I - T) * S), v.push(T * S * S)
    }
    this.xs = t, this.ys = n, this.c1s = h, this.c2s = O, this.c3s = v
  }
  return a(e, [{
    key: "interpolate",
    value: function(e) {
      var t, n = this.xs,
        r = this.ys,
        i = this.c1s,
        a = this.c2s,
        s = this.c3s,
        o = n.length - 1;
      if (e === n[o]) return r[o];
      for (var l = 0, c = s.length - 1; l <= c;) {
        var u = n[t = Math.floor(.5 * (l + c))];
        if (u < e) l = t + 1;
        else {
          if (!(u > e)) return r[t];
          c = t - 1
        }
      }
      var d = e - n[o = Math.max(0, c)],
        f = d * d;
      return r[o] + i[o] * d + a[o] * f + s[o] * d * f
    }
  }]), e
}()