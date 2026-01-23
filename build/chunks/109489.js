/** Chunk was on web.js **/
/** chunk id: 109489, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}
require.d(exports, {
  y$: () => l
}), require("./58616.js");
var i = function() {
    return "function" == typeof Symbol && Symbol.observable || "@@observable"
  }(),
  a = function() {
    return Math.random().toString(36).substring(7).split("").join(".")
  },
  s = {
    INIT: "@@redux/INIT" + a(),
    REPLACE: "@@redux/REPLACE" + a(),
    PROBE_UNKNOWN_ACTION: function() {
      return "@@redux/PROBE_UNKNOWN_ACTION" + a()
    }
  };

function o(e) {
  if ("object" != typeof e || null === e) returnfalse;
  for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t
}

function l(e, t, n) {
  if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw Error(r(0));
  if ("function" == typeof t && true === n && (n = t, t = true), true !== n) {
    if ("function" != typeof n) throw Error(r(1));
    return n(l)(e, t)
  }
  if ("function" != typeof e) throw Error(r(2));
  var a, c = e,
    u = t,
    d = [],
    f = d,
    p = false;

  function _() {
    f === d && (f = d.slice())
  }

  function h() {
    if (p) throw Error(r(3));
    return u
  }

  function m(e) {
    if ("function" != typeof e) throw Error(r(4));
    if (p) throw Error(r(5));
    var t = true;
    return _(), f.push(e),
      function() {
        if (t) {
          if (p) throw Error(r(6));
          t = false, _();
          var n = f.indexOf(e);
          f.splice(n, 1), d = null
        }
      }
  }

  function g(e) {
    if (!o(e)) throw Error(r(7));
    if (true === e.type) throw Error(r(8));
    if (p) throw Error(r(9));
    try {
      p = true, u = c(u, e)
    } finally {
      p = false
    }
    for (var t = d = f, n = 0; n < t.length; n++)(0, t[n])();
    return e
  }

  function E(e) {
    if ("function" != typeof e) throw Error(r(10));
    c = e, g({
      type: s.REPLACE
    })
  }

  function y() {
    var e, t = m;
    return (e = {
      subscribe: function(e) {
        if ("object" != typeof e || null === e) throw Error(r(11));

        function n() {
          e.next && e.next(h())
        }
        return n(), {
          unsubscribe: t(n)
        }
      }
    })[i] = function() {
      return this
    }, e
  }
  return g({
    type: s.INIT
  }), (a = {
    dispatch: g,
    subscribe: m,
    getState: h,
    replaceReducer: E
  })[i] = y, a
}