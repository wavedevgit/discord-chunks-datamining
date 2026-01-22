/** Chunk was on web.js **/
/** chunk id: 212453, original params: e,t,n (module,exports,re quire) **/
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
  p = 20,
  _ = false,
  h = false,
  m = null;

function g(e) {
  m || (m = new r(c(e))).start()
}
var E = {
  onCompositionStart: function(e) {
    h = true, g(e)
  },
  onCompositionEnd: function(e) {
    _ = false, h = false, setTimeout(function() {
      _ || E.resolveComposition(e)
    }, p)
  },
  onSelect: Chunk750240,
  onKeyDown: function(e, t) {
    if (!h) {
      E.resolveComposition(e), e._onKeyDown(t);
      return
    }(t.which === o.RIGHT || t.which === o.LEFT) && t.preventDefault()
  },
  onKeyPress: function(e, t) {
    t.which === o.RETURN && t.preventDefault()
  },
  resolveComposition: function(e) {
    if (!h) {
      var t = f(m).stopAndFlushMutations();
      m = null, _ = true;
      var n = s.set(e._latestEditorState, {
        inCompositionMode: false
      });
      if (e.exitCurrentMode(), !t.size) return void e.update(n);
      var r = n.getCurrentContent();
      t.forEach(function(e, t) {
        var o = a.decode(t),
          l = o.blockKey,
          c = o.decoratorKey,
          u = o.leafKey,
          f = n.getBlockTree(l).getIn([c, "leaves", u]),
          p = f.start,
          _ = f.end,
          h = n.getSelection().merge({
            anchorKey: l,
            focusKey: l,
            anchorOffset: p,
            focusOffset: _,
            isBackward: false
          }),
          m = d(r, h),
          g = r.getBlockForKey(l).getInlineStyleAt(p);
        r = i.replaceText(r, h, e, g, m), n = s.set(n, {
          currentContent: r
        })
      });
      var o = u(n, c(e)),
        l = o.selectionState;
      e.restoreEditorDOM();
      var p = s.acceptSelection(n, l);
      e.update(s.push(p, r, "insert-characters"))
    }
  }
};
module.exports = E