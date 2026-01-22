/** Chunk was on web.js **/
/** chunk id: 954055, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk387739 = require("./387739.js"),
  Chunk283369 = require("./283369.js"),
  Chunk728309 = require("./728309.js"),
  Chunk561627 = require("./561627.js"),
  Chunk410475 = require("./410475.js"),
  Chunk116740 = require("./116740.js"),
  Chunk505932 = require("./505932.js"),
  Chunk976427 = require("./976427.js"),
  Chunk797686 = require("./797686.js"),
  Chunk728601 = require("./728601.js"),
  Chunk59061 = require("./59061.js"),
  Chunk436346 = require("./436346.js"),
  Chunk451865 = require("./451865.js"),
  m = Chunk116740.OrderedSet,
  g = {
    replaceText: function(e, t, n, i, a) {
      var s = _(p(e, t), t),
        o = r.create({
          style: i || m(),
          entity: a || null
        });
      return u(s, s.getSelectionAfter(), n, o)
    },
    insertText: function(e, t, n, r, i) {
      return t.isCollapsed() || d(false), g.replaceText(e, t, n, r, i)
    },
    moveText: function(e, t, n) {
      var r = o(e, t),
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
      })), r = t.getAnchorKey(), i = t.getFocusKey(), a = e.getBlockForKey(r);
      var r, i, a, o = e.getBlockForKey(i),
        l = t.getStartOffset(),
        c = t.getEndOffset(),
        u = a.getEntityAt(l),
        d = o.getEntityAt(c - 1);
      if (r === i && u && u === d) {
        var f = s(e.getEntityMap(), a, o, t, n);
        return _(e, f)
      }
      return _(p(e, t), t)
    },
    splitBlock: function(e, t) {
      var n = _(p(e, t), t);
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
      return a(p(e, t), t, n)
    }
  };
module.exports = g