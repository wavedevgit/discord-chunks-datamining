/** Chunk was on web.js **/
/** chunk id: 165387, original params: e,t,n (module,exports,re quire) **/
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
var Chunk117242 = require("./117242.js"),
  Chunk309987 = require("./309987.js"),
  Chunk769698 = require("./769698.js"),
  Chunk364918 = require("./364918.js"),
  Chunk798485 = require("./798485.js");
require("./72322.js");
var Chunk365702 = require("./365702.js"),
  Chunk281509 = require("./281509.js"),
  Chunk62105 = require("./62105.js"),
  Chunk504117 = require("./504117.js"),
  Chunk703579 = require("./703579.js"),
  Chunk40375 = require("./40375.js"),
  Chunk65183 = require("./65183.js"),
  Chunk581079 = require("./581079.js"),
  E = Chunk40375("draft_tree_data_support"),
  b = Chunk65183.List,
  y = Chunk65183.Map,
  O = Chunk65183.OrderedMap,
  v = function(e, t) {
    var n = e.key,
      r = e.type,
      i = e.data;
    return {
      text: e.text,
      depth: e.depth || 0,
      type: r || "unstyled",
      key: n || _(),
      data: y(i),
      characterList: S(e, t)
    }
  },
  S = function(e, t) {
    var n = e.text,
      i = e.entityRanges,
      a = e.inlineStyleRanges,
      o = i || [];
    return d(p(n, a || []), f(n, o.filter(function(e) {
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
  T = function(e, t, n) {
    var i = t.map(function(e) {
      return r({}, e, {
        parentRef: n
      })
    });
    return e.concat(i.reverse())
  },
  C = function(e, t) {
    return e.map(I).reduce(function(n, i, a) {
      Array.isArray(i.children) || g(false);
      var s = i.children.map(I),
        l = new o(r({}, v(i, t), {
          prevSibling: 0 === a ? null : e[a - 1].key,
          nextSibling: a === e.length - 1 ? null : e[a + 1].key,
          children: b(s.map(function(e) {
            return e.key
          }))
        }));
      n = n.set(l.getKey(), l);
      for (var c = T([], s, l); c.length > 0;) {
        var u = c.pop(),
          d = u.parentRef,
          f = d.getChildKeys(),
          p = f.indexOf(u.key),
          _ = Array.isArray(u.children);
        if (!_) {
          _ || g(false);
          break
        }
        var m = u.children.map(I),
          h = new o(r({}, v(u, t), {
            parent: d.getKey(),
            children: b(m.map(function(e) {
              return e.key
            })),
            prevSibling: 0 === p ? null : f.get(p - 1),
            nextSibling: p === f.size - 1 ? null : f.get(p + 1)
          }));
        n = n.set(h.getKey(), h), c = T(c, m, h)
      }
      return n
    }, O())
  },
  A = function(e, t) {
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
    return E ? C(r, t) : A(n ? c.fromRawTreeStateToRawState(e).blocks : r, t)
  },
  P = function(e) {
    var t = e.entityMap,
      n = {};
    return Object.keys(t).forEach(function(e) {
      var r = t[e],
        i = r.type,
        a = r.mutability,
        o = r.data;
      n[e] = l.__create(i, a, o || {})
    }), n
  };
module.exports = function(e) {
  Array.isArray(e.blocks) || g(false);
  var t = P(e),
    n = N(e, t),
    r = n.isEmpty() ? new u : u.createEmpty(n.first().getKey());
  return new s({
    blockMap: n,
    entityMap: t,
    selectionBefore: r,
    selectionAfter: r
  })
}