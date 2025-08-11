/** Chunk was on 50448 **/
/** chunk id: 170266, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk425184 = require("./425184.js"),
  Chunk459341 = require("./459341.js"),
  Chunk513270 = require("./513270.js"),
  Chunk324474 = require("./324474.js"),
  Chunk588383 = require("./588383.js"),
  Chunk372978 = require("./372978.js"),
  Chunk795462 = require("./795462.js"),
  Chunk689591 = require("./689591.js"),
  Chunk787899 = require("./787899.js"),
  Chunk999405 = require("./999405.js"),
  Chunk181794 = require("./181794.js"),
  y = require("./54978.js").fastKey,
  Chunk89416 = require("./89416.js"),
  x = Chunk89416.set,
  d = Chunk89416.getterFor;
module.exports = {
  getConstructor: function(t, r, n, a) {
    var p = t(function(t, o) {
        s(t, l), x(t, {
          type: r,
          index: e(null),
          first: null,
          last: null,
          size: 0
        }), v || (t.size = 0), c(o) || f(o, t[a], {
          that: t,
          AS_ENTRIES: n
        })
      }),
      l = p.prototype,
      h = d(r),
      g = function(t, r, n) {
        var e, o, i = h(t),
          u = b(t, r);
        return u ? u.value = n : (i.last = u = {
          index: o = y(r, true),
          key: r,
          value: n,
          previous: e = i.last,
          next: null,
          removed: false
        }, i.first || (i.first = u), e && (e.next = u), v ? i.size++ : t.size++, "F" !== o && (i.index[o] = u)), t
      },
      b = function(t, r) {
        var n, e = h(t),
          o = y(r);
        if ("F" !== o) return e.index[o];
        for (n = e.first; n; n = n.next)
          if (n.key === r) return n
      };
    return i(l, {
      clear: function() {
        for (var t = h(this), r = t.first; r;) r.removed = true, r.previous && (r.previous = r.previous.next = null), r = r.next;
        t.first = t.last = null, t.index = e(null), v ? t.size = 0 : this.size = 0
      },
      delete: function(t) {
        var r = h(this),
          n = b(this, t);
        if (n) {
          var e = n.next,
            o = n.previous;
          delete r.index[n.index], n.removed = true, o && (o.next = e), e && (e.previous = o), r.first === n && (r.first = e), r.last === n && (r.last = o), v ? r.size-- : this.size--
        }
        return !!n
      },
      forEach: function(t) {
        for (var r, n = h(this), e = u(t, arguments.length > 1 ? arguments[1] : true); r = r ? r.next : n.first;)
          for (e(r.value, r.key, this); r && r.removed;) r = r.previous
      },
      has: function(t) {
        return !!b(this, t)
      }
    }), i(l, n ? {
      get: function(t) {
        var r = b(this, t);
        return r && r.value
      },
      set: function(t, r) {
        return g(this, 0 === t ? 0 : t, r)
      }
    } : {
      add: function(t) {
        return g(this, t = 0 === t ? 0 : t, t)
      }
    }), v && o(l, "size", {
      configurable: true,
      get: function() {
        return h(this).size
      }
    }), p
  },
  setStrong: function(t, r, n) {
    var e = r + " Iterator",
      o = d(r),
      i = d(e);
    a(t, r, function(t, r) {
      x(this, {
        type: e,
        target: t,
        state: o(t),
        kind: r,
        last: null
      })
    }, function() {
      for (var t = i(this), r = t.kind, n = t.last; n && n.removed;) n = n.previous;
      return t.target && (t.last = n = n ? n.next : t.state.first) ? "keys" === r ? p(n.key, false) : "values" === r ? p(n.value, false) : p([n.key, n.value], false) : (t.target = null, p(true, true))
    }, n ? "entries" : "values", !n, true), l(r)
  }
}