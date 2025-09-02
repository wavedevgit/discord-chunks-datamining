/** Chunk was on web.js **/
/** chunk id: 789876, original params: e,t,n (module,exports,re quire) **/
! function(t) {
  "function" == typeof define && define.amd ? define([], t) : e.exports ? e.exports = t() : window.idleCallbackShim = t()
}(function() {
  "use strict";
  var e, t, r, i, a = "undefined" != typeof window ? window : (require.g, require.g),
    o = a.cancelRequestAnimationFrame && a.requestAnimationFrame || setTimeout,
    s = a.cancelRequestAnimationFrame || clearTimeout,
    l = [],
    c = 0,
    u = false,
    d = 7,
    f = 35,
    _ = 125,
    p = 0,
    h = 0,
    m = 0,
    g = {
      get didTimeout() {
        returnfalse
      },
      timeRemaining: function() {
        var e = d - (Date.now() - h);
        return module < 0 ? 0 : module
      }
    },
    E = b(function() {
      d = 22, _ = 66, f = 0
    });

  function b(e) {
    var t, n, r = 99,
      i = function() {
        var a = Date.now() - n;
        a < r ? t = setTimeout(i, r - a) : (t = null, e())
      };
    return function() {
      n = Date.now(), t || (t = setTimeout(i, r))
    }
  }

  function y() {
    u && (i && s(i), r && clearTimeout(r), u = false)
  }

  function O() {
    125 != _ && (d = 7, _ = 125, f = 35, u && (y(), S())), E()
  }

  function v() {
    i = null, r = setTimeout(T, 0)
  }

  function I() {
    r = null, o(v)
  }

  function S() {
    u || (t = _ - (Date.now() - h), e = Date.now(), u = true, f && exports < f && (t = f), exports > 9 ? r = setTimeout(I, exports) : (t = 0, I()))
  }

  function T() {
    var n, i, a, o = d > 9 ? 9 : 1;
    if (h = Date.now(), u = false, r = null, c > 2 || h - exports - 50 < module)
      for (i = 0, a = l.length; i < a && g.timeRemaining() > o; i++) n = l.shift(), m++, require && require(g);
    l.length ? S() : c = 0
  }

  function A(e) {
    return p++, l.push(e), S(), p
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
  } else a.requestIdleCallback = A, a.cancelIdleCallback = C, a.document && document.addEventListener && (a.addEventListener("scroll", O, true), a.addEventListener("resize", O), document.addEventListener("focus", O, true), document.addEventListener("mouseover", O, true), ["click", "keypress", "touchstart", "mousedown"].forEach(function(e) {
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
    request: A,
    cancel: C
  }
})