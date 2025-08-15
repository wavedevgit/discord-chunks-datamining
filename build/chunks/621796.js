/** Chunk was on 8381 **/
/** chunk id: 621796, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk359282 = require("./359282.js"),
  Chunk716818 = require("./716818.js"),
  Chunk836392 = require("./836392.js"),
  Chunk108267 = require("./108267.js"),
  Chunk148727 = require("./148727.js"),
  Chunk65183 = require("./65183.js"),
  Chunk650132 = require("./650132.js"),
  Chunk661785 = require("./661785.js"),
  Chunk581079 = require("./581079.js"),
  Chunk170261 = require("./170261.js"),
  Chunk999296 = require("./999296.js"),
  Chunk191395 = require("./191395.js"),
  Chunk653216 = require("./653216.js"),
  y = Chunk65183.OrderedSet,
  v = {
    replaceText: function(t, e, r, i, o) {
      var a = d(h(t, e), e),
        u = n.create({
          style: i || y(),
          entity: o || null
        });
      return l(a, a.getSelectionAfter(), r, u)
    },
    insertText: function(t, e, r, n, i) {
      return e.isCollapsed() || f(false), v.replaceText(t, e, r, n, i)
    },
    moveText: function(t, e, r) {
      var n = u(t, e),
        i = v.removeRange(t, e, "backward");
      return v.replaceWithFragment(i, r, n)
    },
    replaceWithFragment: function(t, e, r) {
      var n = arguments.length > 3 && true !== arguments[3] ? arguments[3] : "REPLACE_WITH_NEW_DATA",
        i = d(h(t, e), e);
      return c(i, i.getSelectionAfter(), r, n)
    },
    removeRange: function(t, e, r) {
      e.getIsBackward() && (e = e.merge({
        anchorKey: e.getFocusKey(),
        anchorOffset: e.getFocusOffset(),
        focusKey: e.getAnchorKey(),
        focusOffset: e.getAnchorOffset(),
        isBackward: false
      })), n = e.getAnchorKey(), i = e.getFocusKey(), o = t.getBlockForKey(n);
      var n, i, o, u = t.getBlockForKey(i),
        s = e.getStartOffset(),
        c = e.getEndOffset(),
        l = o.getEntityAt(s),
        f = u.getEntityAt(c - 1);
      if (n === i && l && l === f) {
        var p = a(t.getEntityMap(), o, u, e, r);
        return d(t, p)
      }
      return d(h(t, e), e)
    },
    splitBlock: function(t, e) {
      var r = d(h(t, e), e);
      return g(r, r.getSelectionAfter())
    },
    applyInlineStyle: function(t, e, r) {
      return i.add(t, e, r)
    },
    removeInlineStyle: function(t, e, r) {
      return i.remove(t, e, r)
    },
    setBlockType: function(t, e, r) {
      return p(t, e, function(t) {
        return t.merge({
          type: r,
          depth: 0
        })
      })
    },
    setBlockData: function(t, e, r) {
      return p(t, e, function(t) {
        return t.merge({
          data: r
        })
      })
    },
    mergeBlockData: function(t, e, r) {
      return p(t, e, function(t) {
        return t.merge({
          data: t.getData().merge(r)
        })
      })
    },
    applyEntity: function(t, e, r) {
      return o(h(t, e), e, r)
    }
  };
module.exports = v