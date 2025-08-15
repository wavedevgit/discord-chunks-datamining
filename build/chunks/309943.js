/** Chunk was on 91584 **/
/** chunk id: 309943, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk76466 = require("./76466.js"),
  Chunk641686 = require("./641686.js"),
  Chunk731861 = require("./731861.js"),
  Chunk351795 = require("./351795.js"),
  Chunk361788 = require("./361788.js"),
  Chunk65183 = require("./65183.js"),
  Chunk831206 = require("./831206.js"),
  Chunk638020 = require("./638020.js"),
  Chunk581079 = require("./581079.js"),
  Chunk140207 = require("./140207.js"),
  Chunk986464 = require("./986464.js"),
  Chunk838510 = require("./838510.js"),
  Chunk978113 = require("./978113.js"),
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