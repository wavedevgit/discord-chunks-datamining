/** Chunk was on 91584 **/
/** chunk id: 139036, original params: t,e,r (module,exports,require) **/
"use strict";

function n(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable
    }))), n.forEach(function(e) {
      var n, i, o;
      n = t, i = e, o = r[e], i in n ? Object.defineProperty(n, i, {
        value: o,
        enumerable: true,
        configurable: true,
        writable: true
      }) : n[i] = o
    })
  }
  return t
}
var Chunk988231 = require("./988231.js"),
  Chunk470427 = require("./470427.js"),
  Chunk504426 = require("./504426.js"),
  Chunk928460 = require("./928460.js"),
  Chunk879654 = require("./879654.js");
require("./602915.js");
var Chunk80556 = require("./80556.js"),
  Chunk285670 = require("./285670.js"),
  Chunk96010 = require("./96010.js"),
  Chunk344196 = require("./344196.js"),
  Chunk656367 = require("./656367.js"),
  Chunk740336 = require("./740336.js"),
  Chunk65183 = require("./65183.js"),
  Chunk581079 = require("./581079.js"),
  v = Chunk740336("draft_tree_data_support"),
  m = Chunk65183.List,
  _ = Chunk65183.Map,
  b = Chunk65183.OrderedMap,
  S = function(t, e) {
    var r = t.key,
      n = t.type,
      i = t.data;
    return {
      text: t.text,
      depth: t.depth || 0,
      type: n || "unstyled",
      key: r || h(),
      data: _(i),
      characterList: w(t, e)
    }
  },
  w = function(t, e) {
    var r = t.text,
      i = t.entityRanges;
    return l(p(r, t.inlineStyleRanges || []), f(r, (i || []).filter(function(t) {
      return e.hasOwnProperty(t.key)
    }).map(function(t) {
      return n({}, t, {
        key: e[t.key]
      })
    })))
  },
  x = function(t) {
    return n({}, t, {
      key: t.key || h()
    })
  },
  k = function(t, e, r) {
    var i = e.map(function(t) {
      return n({}, t, {
        parentRef: r
      })
    });
    return t.concat(i.reverse())
  },
  C = function(t, e) {
    var r, a = t.blocks.find(function(t) {
        return Array.isArray(t.children) && t.children.length > 0
      }),
      u = v && !a ? s.fromRawStateToRawTreeState(t).blocks : t.blocks;
    return v ? u.map(x).reduce(function(t, r, i) {
      Array.isArray(r.children) || y(false);
      var a = r.children.map(x),
        s = new o(n({}, S(r, e), {
          prevSibling: 0 === i ? null : u[i - 1].key,
          nextSibling: i === u.length - 1 ? null : u[i + 1].key,
          children: m(a.map(function(t) {
            return t.key
          }))
        }));
      t = t.set(s.getKey(), s);
      for (var c = k([], a, s); c.length > 0;) {
        var l = c.pop(),
          f = l.parentRef,
          p = f.getChildKeys(),
          h = p.indexOf(l.key),
          d = Array.isArray(l.children);
        if (!d) {
          d || y(false);
          break
        }
        var g = l.children.map(x),
          v = new o(n({}, S(l, e), {
            parent: f.getKey(),
            children: m(g.map(function(t) {
              return t.key
            })),
            prevSibling: 0 === h ? null : p.get(h - 1),
            nextSibling: h === p.size - 1 ? null : p.get(h + 1)
          }));
        t = t.set(v.getKey(), v), c = k(c, g, v)
      }
      return t
    }, b()) : (r = a ? s.fromRawTreeStateToRawState(t).blocks : u, b(r.map(function(t) {
      var r = new i(S(t, e));
      return [r.getKey(), r]
    })))
  },
  E = function(t) {
    var e = t.entityMap,
      r = {};
    return Object.keys(e).forEach(function(t) {
      var n = e[t],
        i = n.type,
        o = n.mutability,
        a = n.data;
      r[t] = u.__create(i, o, a || {})
    }), r
  };
module.exports = function(t) {
  Array.isArray(t.blocks) || y(false);
  var e = E(t),
    r = C(t, e),
    n = r.isEmpty() ? new c : c.createEmpty(r.first().getKey());
  return new a({
    blockMap: r,
    entityMap: e,
    selectionBefore: n,
    selectionAfter: n
  })
}