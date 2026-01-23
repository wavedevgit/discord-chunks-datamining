/** Chunk was on web.js **/
/** chunk id: 618714, original params: e,t,n (module,exports,re quire) **/
! function(t) {
  "function" == typeof define && define.amd ? define([], t) : e.exports ? e.exports = t() : window.idleCallbackShim = t()
}(function() {
  "use strict";
  var e, t, r, i, a = "u" > typeof window ? window : (n.g, n.g),
    s = a.cancelRequestAnimationFrame && a.requestAnimationFrame || setTimeout,
    o = a.cancelRequestAnimationFrame || clearTimeout,
    l = [],
    c = 0,
    u = false,
    d = 7,
    f = 35,
    p = 125,
    _ = 0,
    h = 0,
    m = 0,
    g = {
      get didTimeout() {
        returnfalse
      },
      timeRemaining: function() {
        var e = d - (Date.now() - h);
        return e < 0 ? 0 : e
      }
    },
    E = y(function() {
      d = 22, p = 66, f = 0
    });

  function y(e) {
    var t, n, r = 99,
      i = function() {
        var a = Date.now() - n;
        a < r ? t = setTimeout(i, r - a) : (t = null, e())
      };
    return function() {
      n = Date.now(), t || (t = setTimeout(i, r))
    }
  }

  function b() {
    u && (i && o(i), r && clearTimeout(r), u = false)
  }

  function O() {
    125 != p && (d = 7, p = 125, f = 35, u && (b(), I())), E()
  }

  function v() {
    i = null, r = setTimeout(S, 0)
  }

  function A() {
    r = null, s(v)
  }

  function I() {
    u || (t = p - (Date.now() - h), e = Date.now(), u = true, f && t < f && (t = f), t > 9 ? r = setTimeout(A, t) : (t = 0, A()))
  }

  function S() {
    var n, i, a, s = d > 9 ? 9 : 1;
    if (h = Date.now(), u = false, r = null, c > 2 || h - t - 50 < e)
      for (i = 0, a = l.length; i < a && g.timeRemaining() > s; i++) n = l.shift(), m++, n && n(g);
    l.length ? I() : c = 0
  }

  function T(e) {
    return _++, l.push(e), I(), _
  }

  function C(e) {
    var t = e - 1 - m;
    l[t] && (l[t] = null)
  }
  if (a.requestIdleCallback && a.cancelIdleCallback) try {
    a.requestIdleCallback(function() {}, {
      timeout: 0
    })
  } catch (e) {
    ! function(e) {
      var t, n;
      if (a.requestIdleCallback = function(t, n) {
          return n && "number" == typeof n.timeout ? e(t, n.timeout) : e(t)
        }, a.IdleCallbackDeadline && (t = IdleCallbackDeadline.prototype)) {
        if (!(n = Object.getOwnPropertyDescriptor(t, "timeRemaining")) || !n.configurable || !n.get) return;
        Object.defineProperty(t, "timeRemaining", {
          value: function() {
            return n.get.call(this)
          },
          enumerable: true,
          configurable: true
        })
      }
    }(a.requestIdleCallback)
  } else a.requestIdleCallback = T, a.cancelIdleCallback = C, a.document && document.addEventListener && (a.addEventListener("scroll", O, true), a.addEventListener("resize", O), document.addEventListener("focus", O, true), document.addEventListener("mouseover", O, true), ["click", "keypress", "touchstart", "mousedown"].forEach(function(e) {
    document.addEventListener(e, O, {
      capture: true,
      passive: true
    })
  }), a.MutationObserver && new MutationObserver(O).observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true
  }));
  return {
    request: T,
    cancel: C
  }
})