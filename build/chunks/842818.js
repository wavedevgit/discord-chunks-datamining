/** Chunk was on 8381 **/
/** chunk id: 842818, original params: t,e,r (module,exports,require) **/
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
var Chunk879154 = require("./879154.js"),
  Chunk214788 = require("./214788.js"),
  Chunk449168 = require("./449168.js"),
  Chunk493428 = require("./493428.js"),
  Chunk402350 = require("./402350.js");
require("./61175.js");
var Chunk116514 = require("./116514.js"),
  Chunk5626 = require("./5626.js"),
  Chunk124132 = require("./124132.js"),
  Chunk205681 = require("./205681.js"),
  Chunk551558 = require("./551558.js"),
  Chunk223138 = require("./223138.js"),
  Chunk65183 = require("./65183.js"),
  Chunk581079 = require("./581079.js"),
  v = Chunk223138("draft_tree_data_support"),
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