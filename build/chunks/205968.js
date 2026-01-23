/** Chunk was on web.js **/
/** chunk id: 205968, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
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
  E = Chunk661551("draft_tree_data_support"),
  y = Chunk116740.List,
  b = Chunk116740.Map,
  O = Chunk116740.OrderedMap,
  v = function(e, t) {
    var n = e.key,
      r = e.type,
      i = e.data;
    return {
      text: e.text,
      depth: e.depth || 0,
      type: r || "unstyled",
      key: n || _(),
      data: b(i),
      characterList: A(e, t)
    }
  },
  A = function(e, t) {
    var n = e.text,
      i = e.entityRanges,
      a = e.inlineStyleRanges,
      s = i || [];
    return d(p(n, a || []), f(n, s.filter(function(e) {
      return t.hasOwnProperty(e.key)
    }).map(function(e) {
      return r({}, e, {
        key: t[e.key]
      })
    })))
  },
  I = function(e) {
    return r({}, e, {
      key: e.key || _()
    })
  },
  S = function(e, t, n) {
    var i = t.map(function(e) {
      return r({}, e, {
        parentRef: n
      })
    });
    return e.concat(i.reverse())
  },
  T = function(e, t) {
    return e.map(I).reduce(function(n, i, a) {
      Array.isArray(i.children) || g(false);
      var o = i.children.map(I),
        l = new s(r({}, v(i, t), {
          prevSibling: 0 === a ? null : e[a - 1].key,
          nextSibling: a === e.length - 1 ? null : e[a + 1].key,
          children: y(o.map(function(e) {
            return e.key
          }))
        }));
      n = n.set(l.getKey(), l);
      for (var c = S([], o, l); c.length > 0;) {
        var u = c.pop(),
          d = u.parentRef,
          f = d.getChildKeys(),
          p = f.indexOf(u.key),
          _ = Array.isArray(u.children);
        if (!_) {
          _ || g(false);
          break
        }
        var h = u.children.map(I),
          m = new s(r({}, v(u, t), {
            parent: d.getKey(),
            children: y(h.map(function(e) {
              return e.key
            })),
            prevSibling: 0 === p ? null : f.get(p - 1),
            nextSibling: p === f.size - 1 ? null : f.get(p + 1)
          }));
        n = n.set(m.getKey(), m), c = S(c, h, m)
      }
      return n
    }, O())
  },
  C = function(e, t) {
    return O(e.map(function(e) {
      var n = new a(v(e, t));
      return [n.getKey(), n]
    }))
  },
  N = function(e, t) {
    var n = e.blocks.find(function(e) {
        return Array.isArray(e.children) && e.children.length > 0
      }),
      r = E && !n ? c.fromRawStateToRawTreeState(e).blocks : e.blocks;
    return E ? T(r, t) : C(n ? c.fromRawTreeStateToRawState(e).blocks : r, t)
  },
  R = function(e) {
    var t = e.entityMap,
      n = {};
    return Object.keys(t).forEach(function(e) {
      var r = t[e],
        i = r.type,
        a = r.mutability,
        s = r.data;
      n[e] = l.__create(i, a, s || {})
    }), n
  };
module.exports = function(e) {
  Array.isArray(e.blocks) || g(false);
  var t = R(e),
    n = N(e, t),
    r = n.isEmpty() ? new u : u.createEmpty(n.first().getKey());
  return new o({
    blockMap: n,
    entityMap: t,
    selectionBefore: r,
    selectionAfter: r
  })
}