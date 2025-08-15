/** Chunk was on 8381 **/
/** chunk id: 66115, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk497727 = require("./497727.js"),
  Chunk621796 = require("./621796.js"),
  Chunk152477 = require("./152477.js"),
  Chunk172367 = require("./172367.js"),
  Chunk574369 = require("./574369.js"),
  Chunk536574 = require("./536574.js"),
  Chunk15543 = require("./15543.js"),
  Chunk683289 = require("./683289.js"),
  Chunk596464 = require("./596464.js"),
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
    onSelect: Chunk536574,
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