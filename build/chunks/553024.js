/** Chunk was on 52194 **/
/** chunk id: 553024, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  p: () => o
});
var Chunk573654 = require("./573654.js"),
  Chunk473749 = require("./473749.js");

function o(e) {
  var n = {};
  return Object.keys(e).forEach(function(t) {
    var o = e[t];
    if (t.endsWith("Ref")) n[t] = e[t];
    else {
      var c = function() {
        var e, n, t, c = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
          l = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
        if (!(0, i.isValidElement)(c)) return o(c, l), c;
        if ("string" != typeof c.type) {
          var s = c.type.displayName || c.type.name || "the component";
          throw Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(s, " into a <div>, or turn it into a ") + "drag source or a drop target itself.")
        }
        return e = c, n = l ? function(e) {
          return o(e, l)
        } : o, t = e.ref, ((0, r.k)("string" != typeof t, "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), t) ? (0, i.cloneElement)(e, {
          ref: function(e) {
            a(t, e), a(n, e)
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

function a(e, n) {
  "function" == typeof e ? e(n) : e.current = n
}