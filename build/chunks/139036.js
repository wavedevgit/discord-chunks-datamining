/** Chunk was on web.js **/
/** chunk id: 139036, original params: e,t,n (module,exports,re quire) **/
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
  E = Chunk740336("draft_tree_data_support"),
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
      key: n || p(),
      data: y(i),
      characterList: I(e, t)
    }
  },
  I = function(e, t) {
    var n = e.text,
      i = e.entityRanges,
      a = e.inlineStyleRanges,
      o = i || [];
    return d(_(n, a || []), f(n, o.filter(function(e) {
      return t.hasOwnProperty(e.key)
    }).map(function(e) {
      return r({}, e, {
        key: t[e.key]
      })
    })))
  },
  T = function(e) {
    return r({}, e, {
      key: e.key || p()
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
  A = function(e, t) {
    return e.map(T).reduce(function(n, i, a) {
      Array.isArray(i.children) || g(false);
      var s = i.children.map(T),
        l = new o(r({}, v(i, t), {
          prevSibling: 0 === a ? null : e[a - 1].key,
          nextSibling: a === e.length - 1 ? null : e[a + 1].key,
          children: b(s.map(function(e) {
            return e.key
          }))
        }));
      n = n.set(l.getKey(), l);
      for (var c = S([], s, l); c.length > 0;) {
        var u = c.pop(),
          d = u.parentRef,
          f = d.getChildKeys(),
          _ = f.indexOf(u.key),
          p = Array.isArray(u.children);
        if (!p) {
          p || g(false);
          break
        }
        var h = u.children.map(T),
          m = new o(r({}, v(u, t), {
            parent: d.getKey(),
            children: b(h.map(function(e) {
              return e.key
            })),
            prevSibling: 0 === _ ? null : f.get(_ - 1),
            nextSibling: _ === f.size - 1 ? null : f.get(_ + 1)
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
    return E ? A(r, t) : C(n ? c.fromRawTreeStateToRawState(e).blocks : r, t)
  },
  R = function(e) {
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
  var t = R(e),
    n = N(e, t),
    r = n.isEmpty() ? new u : u.createEmpty(n.first().getKey());
  return new s({
    blockMap: n,
    entityMap: t,
    selectionBefore: r,
    selectionAfter: r
  })
}