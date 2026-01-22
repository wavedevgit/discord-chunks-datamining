/** Chunk was on web.js **/
/** chunk id: 177409, original params: e (module,exports,re quire) **/
"use strict";

function t(e) {
  return (e - 30) * 3.62 + 194
}

function n(e) {
  return (e - 8) * 3 + 25
}
module.exports = {
  fromOrigamiTensionAndFriction: function(e, r) {
    return {
      tension: t(e),
      friction: n(r)
    }
  },
  fromBouncinessAndSpeed: function(e, r) {
    function i(e, t, n) {
      return (e - t) / (n - t)
    }

    function a(e, t, n) {
      return t + e * (n - t)
    }

    function s(e, t, n) {
      return e * n + (1 - e) * t
    }

    function o(e, t, n) {
      return s(2 * e - e * e, t, n)
    }

    function l(e) {
      return 7e-4 * Math.pow(e, 3) - .031 * Math.pow(e, 2) + .64 * e + 1.28
    }

    function c(e) {
      return 44e-6 * Math.pow(e, 3) - .006 * Math.pow(e, 2) + .36 * e + 2
    }

    function u(e) {
      return 45e-8 * Math.pow(e, 3) - 332e-6 * Math.pow(e, 2) + .1078 * e + 5.84
    }

    function d(e) {
      return e <= 18 ? l(e) : e > 18 && e <= 44 ? c(e) : u(e)
    }
    var f = i(e / 1.7, 0, 20);
    f = a(f, 0, .8);
    var p = a(i(r / 1.7, 0, 20), .5, 200),
      _ = o(f, d(p), .01);
    return {
      tension: t(p),
      friction: n(_)
    }
  }
}