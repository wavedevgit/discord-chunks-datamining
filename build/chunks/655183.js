/** Chunk was on 91584 **/
/** chunk id: 655183, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk4145 = require("./4145.js"),
  Chunk309943 = require("./309943.js"),
  Chunk654530 = require("./654530.js"),
  Chunk102736 = require("./102736.js"),
  Chunk574369 = require("./574369.js"),
  Chunk66386 = require("./66386.js"),
  Chunk933585 = require("./933585.js"),
  Chunk665635 = require("./665635.js"),
  Chunk878694 = require("./878694.js"),
  Chunk467159 = require("./467159.js"),
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
    onSelect: Chunk66386,
    onKeyDown: function(t, e) {
      if (!d) {
        y.resolveComposition(t), t._onKeyDown(e);
        return
      }(e.which === u.RIGHT || e.which === u.LEFT) && e.preventDefault()
    },
    onKeyPress: function(t, e) {
      e.which === u.RETURN && e.preventDefault()
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
          var u = o.decode(e),
            s = u.blockKey,
            c = u.decoratorKey,
            l = u.leafKey,
            p = r.getBlockTree(s).getIn([c, "leaves", l]),
            h = p.start,
            d = p.end,
            g = r.getSelection().merge({
              anchorKey: s,
              focusKey: s,
              anchorOffset: h,
              focusOffset: d,
              isBackward: false
            }),
            y = f(n, g),
            v = n.getBlockForKey(s).getInlineStyleAt(h);
          n = i.replaceText(n, g, t, v, y), r = a.set(r, {
            currentContent: n
          })
        });
        var u = l(r, c(t)).selectionState;
        t.restoreEditorDOM();
        var s = a.acceptSelection(r, u);
        t.update(a.push(s, n, "insert-characters"))
      }
    }
  };
module.exports = y