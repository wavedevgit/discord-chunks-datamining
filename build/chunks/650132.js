/** Chunk was on web.js **/
/** chunk id: 650132, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk512972 = require("./512972.js"),
  Chunk214788 = require("./214788.js"),
  Chunk65183 = require("./65183.js"),
  Chunk475854 = require("./475854.js"),
  Chunk581079 = require("./581079.js"),
  Chunk250010 = require("./250010.js"),
  c = Chunk65183.List,
  u = function(e, t, n, r, i, o) {
    var s = arguments.length > 6 && true !== arguments[6] ? arguments[6] : "REPLACE_WITH_NEW_DATA",
      l = n.get(i),
      c = l.getText(),
      u = l.getCharacterList(),
      d = i,
      f = o + r.getText().length,
      _ = null;
    switch (s) {
      case "MERGE_OLD_DATA_TO_NEW_DATA":
        _ = r.getData().merge(l.getData());
        break;
      case "REPLACE_WITH_NEW_DATA":
        _ = r.getData()
    }
    var p = l.merge({
      text: c.slice(0, o) + r.getText() + c.slice(o),
      characterList: a(u, r.getCharacterList(), o),
      data: _
    });
    return e.merge({
      blockMap: n.set(i, p),
      selectionBefore: t,
      selectionAfter: t.merge({
        anchorKey: d,
        anchorOffset: f,
        focusKey: d,
        focusOffset: f,
        isBackward: false
      })
    })
  },
  d = function(e, t, n) {
    var r = e.getText(),
      i = e.getCharacterList(),
      o = r.slice(0, t),
      a = i.slice(0, t),
      s = n.first();
    return e.merge({
      text: o + s.getText(),
      characterList: a.concat(s.getCharacterList()),
      type: o ? e.getType() : s.getType(),
      data: s.getData()
    })
  },
  f = function(e, t, n) {
    var r = e.getText(),
      i = e.getCharacterList(),
      o = r.length,
      a = r.slice(t, o),
      s = i.slice(t, o),
      l = n.last();
    return l.merge({
      text: l.getText() + a,
      characterList: l.getCharacterList().concat(s),
      data: l.getData()
    })
  },
  _ = function(e, t) {
    var n = e.getKey(),
      r = e,
      i = [];
    for (t.get(n) && i.push(n); r && r.getNextSiblingKey();) {
      var o = r.getNextSiblingKey();
      if (!o) break;
      i.push(o), r = t.get(o)
    }
    return i
  },
  p = function(e, t, n, r) {
    return e.withMutations(function(t) {
      var i = n.getKey(),
        o = r.getKey(),
        a = n.getNextSiblingKey(),
        s = n.getParentKey(),
        l = _(r, e),
        u = l[l.length - 1];
      if (t.get(o) ? (t.setIn([i, "nextSibling"], o), t.setIn([o, "prevSibling"], i)) : (t.setIn([i, "nextSibling"], r.getNextSiblingKey()), t.setIn([r.getNextSiblingKey(), "prevSibling"], i)), t.setIn([u, "nextSibling"], a), a && t.setIn([a, "prevSibling"], u), l.forEach(function(e) {
          return t.setIn([e, "parent"], s)
        }), s) {
        var d = e.get(s).getChildKeys(),
          f = d.indexOf(i) + 1,
          p = d.toArray();
        p.splice.apply(p, [f, 0].concat(l)), t.setIn([s, "children"], c(p))
      }
    })
  },
  h = function(e, t, n, o, a, s) {
    var l = n.first() instanceof i,
      c = [],
      u = o.size,
      _ = n.get(a),
      h = o.first(),
      m = o.last(),
      g = m.getLength(),
      E = m.getKey(),
      b = l && (!_.getChildKeys().isEmpty() || !h.getChildKeys().isEmpty());
    n.forEach(function(e, t) {
      if (t !== a) return void c.push(e);
      b ? c.push(e) : c.push(d(e, s, o)), o.slice(+!b, u - 1).forEach(function(e) {
        return c.push(e)
      }), c.push(f(e, s, o))
    });
    var y = r.createFromArray(c);
    return l && (y = p(y, n, _, h)), e.merge({
      blockMap: y,
      selectionBefore: t,
      selectionAfter: t.merge({
        anchorKey: E,
        anchorOffset: g,
        focusKey: E,
        focusOffset: g,
        isBackward: false
      })
    })
  };
module.exports = function(e, t, n) {
  var r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : "REPLACE_WITH_NEW_DATA";
  t.isCollapsed() || s(false);
  var o = e.getBlockMap(),
    a = l(n),
    c = t.getStartKey(),
    d = t.getStartOffset(),
    f = o.get(c);
  return (f instanceof i && (f.getChildKeys().isEmpty() || s(false)), 1 === a.size) ? u(e, t, o, a.first(), c, d, r) : h(e, t, o, a, c, d)
}