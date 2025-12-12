/** Chunk was on web.js **/
/** chunk id: 720218, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk50153 = require("./50153.js"),
  Chunk468577 = require("./468577.js"),
  Chunk235296 = require("./235296.js"),
  Chunk904254 = require("./904254.js"),
  Chunk511076 = require("./511076.js"),
  Chunk65183 = require("./65183.js"),
  Chunk884848 = require("./884848.js"),
  Chunk985407 = require("./985407.js"),
  Chunk581079 = require("./581079.js"),
  Chunk470780 = require("./470780.js"),
  Chunk652092 = require("./652092.js"),
  Chunk348568 = require("./348568.js"),
  Chunk20271 = require("./20271.js"),
  h = Chunk65183.OrderedSet,
  g = {
    replaceText: function(e, t, n, i, o) {
      var a = _(p(e, t), t),
        s = r.create({
          style: i || h(),
          entity: o || null
        });
      return u(a, a.getSelectionAfter(), n, s)
    },
    insertText: function(e, t, n, r, i) {
      return t.isCollapsed() || d(false), g.replaceText(e, t, n, r, i)
    },
    moveText: function(e, t, n) {
      var r = s(e, t),
        i = g.removeRange(e, t, "backward");
      return g.replaceWithFragment(i, n, r)
    },
    replaceWithFragment: function(e, t, n) {
      var r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : "REPLACE_WITH_NEW_DATA",
        i = _(p(e, t), t);
      return c(i, i.getSelectionAfter(), n, r)
    },
    removeRange: function(e, t, n) {
      t.getIsBackward() && (t = t.merge({
        anchorKey: t.getFocusKey(),
        anchorOffset: t.getFocusOffset(),
        focusKey: t.getAnchorKey(),
        focusOffset: t.getAnchorOffset(),
        isBackward: false
      })), r = t.getAnchorKey(), i = t.getFocusKey(), o = e.getBlockForKey(r);
      var r, i, o, s = e.getBlockForKey(i),
        l = t.getStartOffset(),
        c = t.getEndOffset(),
        u = o.getEntityAt(l),
        d = s.getEntityAt(c - 1);
      if (r === i && u && u === d) {
        var f = a(e.getEntityMap(), o, s, t, n);
        return _(e, f)
      }
      return _(p(e, t), t)
    },
    splitBlock: function(e, t) {
      var n = _(p(e, t), t);
      return m(n, n.getSelectionAfter())
    },
    applyInlineStyle: function(e, t, n) {
      return i.add(e, t, n)
    },
    removeInlineStyle: function(e, t, n) {
      return i.remove(e, t, n)
    },
    setBlockType: function(e, t, n) {
      return f(e, t, function(e) {
        return e.merge({
          type: n,
          depth: 0
        })
      })
    },
    setBlockData: function(e, t, n) {
      return f(e, t, function(e) {
        return e.merge({
          data: n
        })
      })
    },
    mergeBlockData: function(e, t, n) {
      return f(e, t, function(e) {
        return e.merge({
          data: e.getData().merge(n)
        })
      })
    },
    applyEntity: function(e, t, n) {
      return o(p(e, t), t, n)
    }
  };
module.exports = g