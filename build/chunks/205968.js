/** Chunk was on 38939 **/
/** chunk id: 205968, original params: t,e,r (module,exports,require) **/
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
var Chunk68055 = require("./68055.js"),
  Chunk617179 = require("./617179.js"),
  Chunk244767 = require("./244767.js"),
  Chunk45069 = require("./45069.js"),
  Chunk144531 = require("./144531.js");
require("./9011.js");
var Chunk225758 = require("./225758.js"),
  Chunk190346 = require("./190346.js"),
  Chunk622114 = require("./622114.js"),
  Chunk185607 = require("./185607.js"),
  Chunk279998 = require("./279998.js"),
  Chunk661551 = require("./661551.js"),
  Chunk116740 = require("./116740.js"),
  Chunk797686 = require("./797686.js"),
  v = Chunk661551("draft_tree_data_support"),
  m = Chunk116740.List,
  _ = Chunk116740.Map,
  b = Chunk116740.OrderedMap,
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
  k = function(t) {
    return n({}, t, {
      key: t.key || h()
    })
  },
  x = function(t, e, r) {
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
      s = v && !a ? u.fromRawStateToRawTreeState(t).blocks : t.blocks;
    return v ? s.map(k).reduce(function(t, r, i) {
      Array.isArray(r.children) || y(false);
      var a = r.children.map(k),
        u = new o(n({}, S(r, e), {
          prevSibling: 0 === i ? null : s[i - 1].key,
          nextSibling: i === s.length - 1 ? null : s[i + 1].key,
          children: m(a.map(function(t) {
            return t.key
          }))
        }));
      t = t.set(u.getKey(), u);
      for (var c = x([], a, u); c.length > 0;) {
        var l = c.pop(),
          f = l.parentRef,
          p = f.getChildKeys(),
          h = p.indexOf(l.key),
          d = Array.isArray(l.children);
        if (!d) {
          d || y(false);
          break
        }
        var g = l.children.map(k),
          v = new o(n({}, S(l, e), {
            parent: f.getKey(),
            children: m(g.map(function(t) {
              return t.key
            })),
            prevSibling: 0 === h ? null : p.get(h - 1),
            nextSibling: h === p.size - 1 ? null : p.get(h + 1)
          }));
        t = t.set(v.getKey(), v), c = x(c, g, v)
      }
      return t
    }, b()) : (r = a ? u.fromRawTreeStateToRawState(t).blocks : s, b(r.map(function(t) {
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
      r[t] = s.__create(i, o, a || {})
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