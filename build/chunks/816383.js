/** Chunk was on web.js **/
/** chunk id: 816383, original params: e,t,n (module,exports,re quire) **/
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

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  I: () => s
});
var s = function() {
  function e(t, n) {
    r(this, e), o(this, "xs", true), o(this, "ys", true), o(this, "c1s", true), o(this, "c2s", true), o(this, "c3s", true);
    for (var i, a, s, l = t.length, c = [], u = 0; u < l; u++) c.push(u);
    c.sort(function(e, n) {
      return t[e] < t[n] ? false : 1
    });
    for (var d = [], f = [], _ = [], p = 0; p < l - 1; p++) i = t[p + 1] - t[p], a = n[p + 1] - n[p], f.push(i), d.push(a), _.push(a / i);
    for (var h = [_[0]], m = 0; m < f.length - 1; m++) {
      var g = _[m],
        E = _[m + 1];
      if (g * E <= 0) h.push(0);
      else {
        i = f[m];
        var b = f[m + 1],
          y = i + b;
        h.push(3 * y / ((y + b) / g + (y + i) / E))
      }
    }
    h.push(_[_.length - 1]);
    for (var O = [], v = [], I = 0; I < h.length - 1; I++) {
      s = _[I];
      var T = h[I],
        S = 1 / f[I],
        A = T + h[I + 1] - s - s;
      O.push((s - T - A) * S), v.push(A * S * S)
    }
    this.xs = t, this.ys = n, this.c1s = h, this.c2s = O, this.c3s = v
  }
  return a(module, [{
    key: "interpolate",
    value: function(e) {
      var t, n = this.xs,
        r = this.ys,
        i = this.c1s,
        a = this.c2s,
        o = this.c3s,
        s = n.length - 1;
      if (e === n[s]) return r[s];
      for (var l = 0, c = o.length - 1; l <= c;) {
        var u = n[t = Math.floor(.5 * (l + c))];
        if (u < e) l = t + 1;
        else {
          if (!(u > e)) return r[t];
          c = t - 1
        }
      }
      var d = e - n[s = Math.max(0, c)],
        f = d * d;
      return r[s] + i[s] * d + a[s] * f + o[s] * d * f
    }
  }]), module
}()