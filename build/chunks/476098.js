/** Chunk was on 49902 **/
/** chunk id: 476098, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => l
});
var Chunk573654 = require("./573654.js"),
  Chunk647438 = require("./647438.js");

function l(e) {
  var t = {};
  return Object.keys(e).forEach(function(n) {
    var l = e[n];
    if (n.endsWith("Ref")) t[n] = e[n];
    else {
      var o = function() {
        var e, t, n, o = arguments.length > 0 && true !== arguments[0] ? arguments[0] : null,
          s = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null;
        if (!(0, i.isValidElement)(o)) return l(o, s), o;
        if ("string" != typeof o.type) {
          var c = o.type.displayName || o.type.name || "the component";
          throw Error("Only native element nodes can now be passed to React DnD connectors." + "You can either wrap ".concat(c, " into a <div>, or turn it into a ") + "drag source or a drop target itself.")
        }
        return e = o, t = s ? function(e) {
          return l(e, s)
        } : l, n = e.ref, ((0, r.k)("string" != typeof n, "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n) ? (0, i.cloneElement)(e, {
          ref: function(e) {
            a(n, e), a(t, e)
          }
        }) : (0, i.cloneElement)(e, {
          ref: t
        })
      };
      t[n] = function() {
        return o
      }
    }
  }), t
}

function a(e, t) {
  "function" == typeof e ? e(t) : e.current = t
}