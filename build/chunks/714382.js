/** Chunk was on web.js **/
/** chunk id: 714382, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}
require.d(exports, {
  MT: () => l
}), require("./183759.js");
var i = function() {
    return "function" == typeof Symbol && Symbol.observable || "@@observable"
  }(),
  o = function() {
    return Math.random().toString(36).substring(7).split("").join(".")
  },
  a = {
    INIT: "@@redux/INIT" + o(),
    REPLACE: "@@redux/REPLACE" + o(),
    PROBE_UNKNOWN_ACTION: function() {
      return "@@redux/PROBE_UNKNOWN_ACTION" + o()
    }
  };

function s(e) {
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
  var o, c = e,
    u = t,
    d = [],
    f = d,
    p = false;

  function _() {
    f === d && (f = d.slice())
  }

  function m() {
    if (p) throw Error(r(3));
    return u
  }

  function h(e) {
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
    if (!s(e)) throw Error(r(7));
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
      type: a.REPLACE
    })
  }

  function b() {
    var e, t = h;
    return (e = {
      subscribe: function(e) {
        if ("object" != typeof e || null === e) throw Error(r(11));

        function n() {
          e.next && e.next(m())
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
    type: a.INIT
  }), (o = {
    dispatch: g,
    subscribe: h,
    getState: m,
    replaceReducer: E
  })[i] = b, o
}