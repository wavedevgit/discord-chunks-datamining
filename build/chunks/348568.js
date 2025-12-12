/** Chunk was on web.js **/
/** chunk id: 348568, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk309987 = require("./309987.js"),
  Chunk44135 = require("./44135.js"),
  Chunk65183 = require("./65183.js");
Chunk65183.List;
var a = Chunk65183.Map,
  s = function(e, t, n) {
    if (e) {
      var r = t.get(e);
      r && t.set(e, n(r))
    }
  },
  l = function(e, t) {
    var n = [];
    if (!e) return n;
    for (var r = t.get(e); r && r.getParentKey();) {
      var i = r.getParentKey();
      i && n.push(i), r = i ? t.get(i) : null
    }
    return n
  },
  c = function(e, t) {
    var n = [];
    if (!e) return n;
    for (var r = i(e, t); r && t.get(r);) {
      var o = t.get(r);
      n.push(r), r = o.getParentKey() ? i(o, t) : null
    }
    return n
  },
  u = function(e, t, n) {
    if (!e) return null;
    for (var r = n.get(e.getKey()).getNextSiblingKey(); r && !t.get(r);) r = n.get(r).getNextSiblingKey() || null;
    return r
  },
  d = function(e, t, n) {
    if (!e) return null;
    for (var r = n.get(e.getKey()).getPrevSiblingKey(); r && !t.get(r);) r = n.get(r).getPrevSiblingKey() || null;
    return r
  },
  f = function(e, t, n, r) {
    return e.withMutations(function(i) {
      if (s(t.getKey(), i, function(e) {
          return e.merge({
            nextSibling: u(e, i, r),
            prevSibling: d(e, i, r)
          })
        }), s(n.getKey(), i, function(e) {
          return e.merge({
            nextSibling: u(e, i, r),
            prevSibling: d(e, i, r)
          })
        }), l(t.getKey(), r).forEach(function(e) {
          return s(e, i, function(e) {
            return e.merge({
              children: e.getChildKeys().filter(function(e) {
                return i.get(e)
              }),
              nextSibling: u(e, i, r),
              prevSibling: d(e, i, r)
            })
          })
        }), s(t.getNextSiblingKey(), i, function(e) {
          return e.merge({
            prevSibling: t.getPrevSiblingKey()
          })
        }), s(t.getPrevSiblingKey(), i, function(e) {
          return e.merge({
            nextSibling: u(e, i, r)
          })
        }), s(n.getNextSiblingKey(), i, function(e) {
          return e.merge({
            prevSibling: d(e, i, r)
          })
        }), s(n.getPrevSiblingKey(), i, function(e) {
          return e.merge({
            nextSibling: n.getNextSiblingKey()
          })
        }), l(n.getKey(), r).forEach(function(e) {
          s(e, i, function(e) {
            return e.merge({
              children: e.getChildKeys().filter(function(e) {
                return i.get(e)
              }),
              nextSibling: u(e, i, r),
              prevSibling: d(e, i, r)
            })
          })
        }), c(n, r).forEach(function(e) {
          return s(e, i, function(e) {
            return e.merge({
              nextSibling: u(e, i, r),
              prevSibling: d(e, i, r)
            })
          })
        }), null == e.get(t.getKey()) && null != e.get(n.getKey()) && n.getParentKey() === t.getKey() && null == n.getPrevSiblingKey()) {
        var o = t.getPrevSiblingKey();
        s(n.getKey(), i, function(e) {
          return e.merge({
            prevSibling: o
          })
        }), s(o, i, function(e) {
          return e.merge({
            nextSibling: n.getKey()
          })
        });
        var a = o ? e.get(o) : null,
          f = a ? a.getParentKey() : null;
        if (t.getChildKeys().forEach(function(e) {
            s(e, i, function(e) {
              return e.merge({
                parent: f
              })
            })
          }), null != f) {
          var p = e.get(f);
          s(f, i, function(e) {
            return e.merge({
              children: p.getChildKeys().concat(t.getChildKeys())
            })
          })
        }
        s(t.getChildKeys().find(function(t) {
          return null === e.get(t).getNextSiblingKey()
        }), i, function(e) {
          return e.merge({
            nextSibling: t.getNextSiblingKey()
          })
        })
      }
    })
  },
  p = function(e, t, n) {
    if (0 === t)
      for (; t < n;) e = e.shift(), t++;
    else if (n === e.count())
      for (; n > t;) e = e.pop(), n--;
    else {
      var r = e.slice(0, t),
        i = e.slice(n);
      e = r.concat(i).toList()
    }
    return e
  };
module.exports = function(e, t) {
  if (t.isCollapsed()) return e;
  var n, o = e.getBlockMap(),
    s = t.getStartKey(),
    c = t.getStartOffset(),
    u = t.getEndKey(),
    d = t.getEndOffset(),
    _ = o.get(s),
    m = o.get(u),
    h = _ instanceof r,
    g = [];
  if (h) {
    var E = m.getChildKeys(),
      b = l(u, o);
    m.getNextSiblingKey() && (g = g.concat(b)), E.isEmpty() || (g = g.concat(b.concat([u]))), g = g.concat(l(i(m, o), o))
  }
  n = _ === m ? p(_.getCharacterList(), c, d) : _.getCharacterList().slice(0, c).concat(m.getCharacterList().slice(d));
  var y = _.merge({
      text: _.getText().slice(0, c) + m.getText().slice(d),
      characterList: n
    }),
    O = h && 0 === c && 0 === d && m.getParentKey() === s && null == m.getPrevSiblingKey() ? a([
      [s, null]
    ]) : o.toSeq().skipUntil(function(e, t) {
      return t === s
    }).takeUntil(function(e, t) {
      return t === u
    }).filter(function(e, t) {
      return false === g.indexOf(t)
    }).concat(a([
      [u, null]
    ])).map(function(e, t) {
      return t === s ? y : null
    }),
    v = o.merge(O).filter(function(e) {
      return !!e
    });
  return h && _ !== m && (v = f(v, _, m, o)), e.merge({
    blockMap: v,
    selectionBefore: t,
    selectionAfter: t.merge({
      anchorKey: s,
      anchorOffset: c,
      focusKey: s,
      focusOffset: c,
      isBackward: false
    })
  })
}