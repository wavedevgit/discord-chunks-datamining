/** Chunk was on 95661 **/
/** chunk id: 476098, original params: t,e,i (module,exports,require) **/
"use strict";
require.d(exports, {
  p: () => a
});
var Chunk573654 = require("./573654.js"),
  Chunk647438 = require("./647438.js");

function a(t) {
  var e = {};
  return Object.keys(t).forEach(function(i) {
    var a = t[i];
    if (i.endsWith("Ref")) e[i] = t[i];
    else {
      var o = function() {
        var t, e, i, o = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
          h = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
        if (!(0, r.isValidElement)(o)) return a(o, h), o;
        if ("string" != typeof o.type) {
          var l = o.type.displayName || o.type.name || "the component";
          throw Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(l, " into a <div>, or turn it into a ") + "drag source or a drop target itself.")
        }
        return t = o, e = h ? function(t) {
          return a(t, h)
        } : a, i = t.ref, ((0, n.k)("string" != typeof i, "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), i) ? (0, r.cloneElement)(t, {
          ref: function(t) {
            s(i, t), s(e, t)
          }
        }) : (0, r.cloneElement)(t, {
          ref: e
        })
      };
      e[i] = function() {
        return o
      }
    }
  }), e
}

function s(t, e) {
  "function" == typeof t ? t(e) : t.current = e
}