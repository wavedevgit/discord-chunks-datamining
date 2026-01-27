/** Chunk was on 38939 **/
/** chunk id: 212453, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk378555 = require("./378555.js"),
  Chunk954055 = require("./954055.js"),
  Chunk595042 = require("./595042.js"),
  Chunk869639 = require("./869639.js"),
  Chunk63996 = require("./63996.js"),
  Chunk750240 = require("./750240.js"),
  Chunk575641 = require("./575641.js"),
  Chunk644485 = require("./644485.js"),
  Chunk197576 = require("./197576.js"),
  Chunk670200 = require("./670200.js"),
  h = false,
  d = false,
  g = null,
  y = {
    onCompositionStart: function(t) {
      d = true, g || (g = new n(c(t))).start()
    },
    onCompositionEnd: function(t) {
      h = false, d = false, setTimeout(function() {
        h || y.resolveComposition(t)
      }, 20)
    },
    onSelect: Chunk750240,
    onKeyDown: function(t, e) {
      if (!d) {
        y.resolveComposition(t), t._onKeyDown(e);
        return
      }(e.which === s.RIGHT || e.which === s.LEFT) && e.preventDefault()
    },
    onKeyPress: function(t, e) {
      e.which === s.RETURN && e.preventDefault()
    },
    resolveComposition: function(t) {
      if (!d) {
        var e = p(g).stopAndFlushMutations();
        g = null, h = true;
        var r = a.set(t._latestEditorState, {
          inCompositionMode: false
        });
        if (t.exitCurrentMode(), !e.size) return void t.update(r);
        var n = r.getCurrentContent();
        e.forEach(function(t, e) {
          var s = o.decode(e),
            u = s.blockKey,
            c = s.decoratorKey,
            l = s.leafKey,
            p = r.getBlockTree(u).getIn([c, "leaves", l]),
            h = p.start,
            d = p.end,
            g = r.getSelection().merge({
              anchorKey: u,
              focusKey: u,
              anchorOffset: h,
              focusOffset: d,
              isBackward: false
            }),
            y = f(n, g),
            v = n.getBlockForKey(u).getInlineStyleAt(h);
          n = i.replaceText(n, g, t, v, y), r = a.set(r, {
            currentContent: n
          })
        });
        var s = l(r, c(t)).selectionState;
        t.restoreEditorDOM();
        var u = a.acceptSelection(r, s);
        t.update(a.push(u, n, "insert-characters"))
      }
    }
  };
module.exports = y