/** Chunk was on web.js **/
/** chunk id: 2831, original params: e,t,n (module,exports,re quire) **/
var Chunk444675 = require("./444675.js");
! function(e, t) {
  "use strict";
  if (!e.setImmediate) {
    var n, i = 1,
      o = {},
      a = false,
      s = e.document,
      l = Object.getPrototypeOf && Object.getPrototypeOf(e);
    l = l && l.setTimeout ? l : e, "[object process]" === ({}).toString.call(e.process) ? p() : _() ? m() : e.MessageChannel ? h() : s && "onreadystatechange" in s.createElement("script") ? g() : E(), l.setImmediate = c, l.clearImmediate = u
  }

  function c(e) {
    "function" != typeof e && (e = Function("" + e));
    for (var t = Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
    var a = {
      callback: e,
      args: t
    };
    return o[i] = a, n(i), i++
  }

  function u(e) {
    delete o[e]
  }

  function d(e) {
    var n = e.callback,
      r = e.args;
    switch (r.length) {
      case 0:
        n();
        break;
      case 1:
        n(r[0]);
        break;
      case 2:
        n(r[0], r[1]);
        break;
      case 3:
        n(r[0], r[1], r[2]);
        break;
      default:
        n.apply(t, r)
    }
  }

  function f(e) {
    if (a) setTimeout(f, 0, e);
    else {
      var t = o[e];
      if (t) {
        a = true;
        try {
          d(t)
        } finally {
          u(e), a = false
        }
      }
    }
  }

  function p() {
    n = function(e) {
      r.nextTick(function() {
        f(e)
      })
    }
  }

  function _() {
    if (e.postMessage && !e.importScripts) {
      var t = true,
        n = e.onmessage;
      return e.onmessage = function() {
        t = false
      }, e.postMessage("", "*"), e.onmessage = n, t
    }
  }

  function m() {
    var t = "setImmediate$" + Math.random() + "$",
      r = function(n) {
        n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && f(+n.data.slice(t.length))
      };
    e.addEventListener ? e.addEventListener("message", r, false) : e.attachEvent("onmessage", r), n = function(n) {
      e.postMessage(t + n, "*")
    }
  }

  function h() {
    var e = new MessageChannel;
    e.port1.onmessage = function(e) {
      f(e.data)
    }, n = function(t) {
      e.port2.postMessage(t)
    }
  }

  function g() {
    var e = s.documentElement;
    n = function(t) {
      var n = s.createElement("script");
      n.onreadystatechange = function() {
        f(t), n.onreadystatechange = null, e.removeChild(n), n = null
      }, e.appendChild(n)
    }
  }

  function E() {
    n = function(e) {
      setTimeout(f, 0, e)
    }
  }
}("undefined" == typeof self ? true === require.g ? this : require.g : self)