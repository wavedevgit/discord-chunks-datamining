/** Chunk was on web.js **/
/** chunk id: 845156, original params: e,t,n (module,exports,re quire) **/
var Chunk710158 = require("./710158.js");

function i() {
  var t, n, o = "function" == typeof Symbol ? Symbol : {},
    a = o.iterator || "@@iterator",
    s = o.toStringTag || "@@toStringTag";

  function l(e, i, o, a) {
    var s = Object.create((i && i.prototype instanceof u ? i : u).prototype);
    return r(s, "_invoke", function(e, r, i) {
      var o, a, s, l = 0,
        u = i || [],
        d = false,
        f = {
          p: 0,
          n: 0,
          v: t,
          a: p,
          f: p.bind(t, 4),
          d: function(e, n) {
            return o = e, a = 0, s = t, f.n = n, c
          }
        };

      function p(e, r) {
        for (a = e, s = r, n = 0; !d && l && !i && n < u.length; n++) {
          var i, o = u[n],
            p = f.p,
            _ = o[2];
          e > 3 ? (i = _ === r) && (s = o[(a = o[4]) ? 5 : (a = 3, 3)], o[4] = o[5] = t) : o[0] <= p && ((i = e < 2 && p < o[1]) ? (a = 0, f.v = r, f.n = o[1]) : p < _ && (i = e < 3 || o[0] > r || r > _) && (o[4] = e, o[5] = r, f.n = _, a = 0))
        }
        if (i || e > 1) return c;
        throw d = true, r
      }
      return function(i, u, _) {
        if (l > 1) throw TypeError("Generator is already running");
        for (d && 1 === u && p(u, _), a = u, s = _;
          (n = a < 2 ? t : s) || !d;) {
          o || (a ? a < 3 ? (a > 1 && (f.n = false), p(a, s)) : f.n = s : f.v = s);
          try {
            if (l = 2, o) {
              if (a || (i = "next"), n = o[i]) {
                if (!(n = n.call(o, s))) throw TypeError("iterator result is not an object");
                if (!n.done) return n;
                s = n.value, a < 2 && (a = 0)
              } else 1 === a && (n = o.return) && n.call(o), a < 2 && (s = TypeError("The iterator does not provide a '" + i + "' method"), a = 1);
              o = t
            } else if ((n = (d = f.n < 0) ? s : e.call(r, f)) !== c) break
          } catch (e) {
            o = t, a = 1, s = e
          } finally {
            l = 1
          }
        }
        return {
          value: n,
          done: d
        }
      }
    }(e, o, a), true), s
  }
  var c = {};

  function u() {}

  function d() {}

  function f() {}
  n = Object.getPrototypeOf;
  var p = f.prototype = u.prototype = Object.create([][a] ? require(require([][a]())) : (Chunk710158(n = {}, a, function() {
    return this
  }), require));

  function _(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, r(e, s, "GeneratorFunction")), e.prototype = Object.create(p), e
  }
  return d.prototype = f, Chunk710158(p, "constructor", f), Chunk710158(f, "constructor", d), d.displayName = "GeneratorFunction", Chunk710158(f, s, "GeneratorFunction"), Chunk710158(p), Chunk710158(p, s, "Generator"), Chunk710158(p, a, function() {
    return this
  }), Chunk710158(p, "toString", function() {
    return "[object Generator]"
  }), (module.exports = i = function() {
    return {
      w: l,
      m: _
    }
  }, module.exports.__esModule = true, module.exports.default = module.exports)()
}
module.exports = i, module.exports.__esModule = true, module.exports.default = module.exports