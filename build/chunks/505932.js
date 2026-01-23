/** Chunk was on web.js **/
/** chunk id: 505932, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk414501 = require("./414501.js"),
  Chunk617179 = require("./617179.js"),
  Chunk116740 = require("./116740.js"),
  Chunk885578 = require("./885578.js"),
  Chunk797686 = require("./797686.js"),
  Chunk541635 = require("./541635.js"),
  c = Chunk116740.List,
  u = function(e, t, n, r, i, a) {
    var o = arguments.length > 6 && true !== arguments[6] ? arguments[6] : "REPLACE_WITH_NEW_DATA",
      l = n.get(i),
      c = l.getText(),
      u = l.getCharacterList(),
      d = i,
      f = a + r.getText().length,
      p = null;
    switch (o) {
      case "MERGE_OLD_DATA_TO_NEW_DATA":
        p = r.getData().merge(l.getData());
        break;
      case "REPLACE_WITH_NEW_DATA":
        p = r.getData()
    }
    var _ = l.merge({
      text: c.slice(0, a) + r.getText() + c.slice(a),
      characterList: s(u, r.getCharacterList(), a),
      data: p
    });
    return e.merge({
      blockMap: n.set(i, _),
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
      a = r.slice(0, t),
      s = i.slice(0, t),
      o = n.first();
    return e.merge({
      text: a + o.getText(),
      characterList: s.concat(o.getCharacterList()),
      type: a ? e.getType() : o.getType(),
      data: o.getData()
    })
  },
  f = function(e, t, n) {
    var r = e.getText(),
      i = e.getCharacterList(),
      a = r.length,
      s = r.slice(t, a),
      o = i.slice(t, a),
      l = n.last();
    return l.merge({
      text: l.getText() + s,
      characterList: l.getCharacterList().concat(o),
      data: l.getData()
    })
  },
  p = function(e, t) {
    var n = e.getKey(),
      r = e,
      i = [];
    for (t.get(n) && i.push(n); r && r.getNextSiblingKey();) {
      var a = r.getNextSiblingKey();
      if (!a) break;
      i.push(a), r = t.get(a)
    }
    return i
  },
  _ = function(e, t, n, r) {
    return e.withMutations(function(t) {
      var i = n.getKey(),
        a = r.getKey(),
        s = n.getNextSiblingKey(),
        o = n.getParentKey(),
        l = p(r, e),
        u = l[l.length - 1];
      if (t.get(a) ? (t.setIn([i, "nextSibling"], a), t.setIn([a, "prevSibling"], i)) : (t.setIn([i, "nextSibling"], r.getNextSiblingKey()), t.setIn([r.getNextSiblingKey(), "prevSibling"], i)), t.setIn([u, "nextSibling"], s), s && t.setIn([s, "prevSibling"], u), l.forEach(function(e) {
          return t.setIn([e, "parent"], o)
        }), o) {
        var d = e.get(o).getChildKeys(),
          f = d.indexOf(i) + 1,
          _ = d.toArray();
        _.splice.apply(_, [f, 0].concat(l)), t.setIn([o, "children"], c(_))
      }
    })
  },
  h = function(e, t, n, a, s, o) {
    var l = n.first() instanceof i,
      c = [],
      u = a.size,
      p = n.get(s),
      h = a.first(),
      m = a.last(),
      g = m.getLength(),
      E = m.getKey(),
      y = l && (!p.getChildKeys().isEmpty() || !h.getChildKeys().isEmpty());
    n.forEach(function(e, t) {
      t !== s ? c.push(e) : (y ? c.push(e) : c.push(d(e, o, a)), a.slice(+!y, u - 1).forEach(function(e) {
        return c.push(e)
      }), c.push(f(e, o, a)))
    });
    var b = r.createFromArray(c);
    return l && (b = _(b, n, p, h)), e.merge({
      blockMap: b,
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
  t.isCollapsed() || o(false);
  var a = e.getBlockMap(),
    s = l(n),
    c = t.getStartKey(),
    d = t.getStartOffset(),
    f = a.get(c);
  return (f instanceof i && (f.getChildKeys().isEmpty() || o(false)), 1 === s.size) ? u(e, t, a, s.first(), c, d, r) : h(e, t, a, s, c, d)
}