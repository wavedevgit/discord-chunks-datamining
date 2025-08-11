/** Chunk was on web.js **/
/** chunk id: 621796, original params: e,t,n (module,exports,re quire) **/
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
  m = Chunk65183.OrderedSet,
  g = {
    replaceText: function(e, t, n, i, o) {
      var a = p(_(e, t), t),
        s = r.create({
          style: i || m(),
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
        i = p(_(e, t), t);
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
        return p(e, f)
      }
      return p(_(e, t), t)
    },
    splitBlock: function(e, t) {
      var n = p(_(e, t), t);
      return h(n, n.getSelectionAfter())
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
      return o(_(e, t), t, n)
    }
  };
module.exports = g