/** Chunk was on 74477 **/
/** chunk id: 476098, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  p: () => l
});
var Chunk573654 = require("./573654.js"),
  Chunk647438 = require("./647438.js");

function l(e) {
  var t = {};
  return Object.keys(e).forEach(function(r) {
    var l = e[r];
    if (r.endsWith("Ref")) t[r] = e[r];
    else {
      var s = function() {
        var e, t, r, s = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
          o = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
        if (!(0, i.isValidElement)(s)) return l(s, o), s;
        if ("string" != typeof s.type) {
          var c = s.type.displayName || s.type.name || "the component";
          throw Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(c, " into a <div>, or turn it into a ") + "drag source or a drop target itself.")
        }
        return e = s, t = o ? function(e) {
          return l(e, o)
        } : l, r = e.ref, ((0, n.k)("string" != typeof r, "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), r) ? (0, i.cloneElement)(e, {
          ref: function(e) {
            a(r, e), a(t, e)
          }
        }) : (0, i.cloneElement)(e, {
          ref: t
        })
      };
      t[r] = function() {
        return s
      }
    }
  }), t
}

function a(e, t) {
  "function" == typeof e ? e(t) : e.current = t
}