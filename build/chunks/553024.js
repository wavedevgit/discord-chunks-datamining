/** Chunk was on 59231 **/
/** chunk id: 553024, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  p: () => a
});
var Chunk573654 = require("./573654.js"),
  Chunk473749 = require("./473749.js");

function a(e) {
  var n = {};
  return Object.keys(e).forEach(function(t) {
    var a = e[t];
    if (t.endsWith("Ref")) n[t] = e[t];
    else {
      var c = function() {
        var e, n, t, c = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
          s = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
        if (!(0, i.isValidElement)(c)) return a(c, s), c;
        if ("string" != typeof c.type) {
          var l = c.type.displayName || c.type.name || "the component";
          throw Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(l, " into a <div>, or turn it into a ") + "drag source or a drop target itself.")
        }
        return e = c, n = s ? function(e) {
          return a(e, s)
        } : a, t = e.ref, ((0, r.k)("string" != typeof t, "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), t) ? (0, i.cloneElement)(e, {
          ref: function(e) {
            o(t, e), o(n, e)
          }
        }) : (0, i.cloneElement)(e, {
          ref: n
        })
      };
      n[t] = function() {
        return c
      }
    }
  }), n
}

function o(e, n) {
  "function" == typeof e ? e(n) : e.current = n
}