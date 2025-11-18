/** Chunk was on web.js **/
/** chunk id: 229450, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk754981 = require("./754981.js"),
  Chunk720218 = require("./720218.js"),
  Chunk964930 = require("./964930.js"),
  Chunk384404 = require("./384404.js"),
  Chunk574369 = require("./574369.js"),
  Chunk266254 = require("./266254.js"),
  Chunk989317 = require("./989317.js"),
  Chunk708150 = require("./708150.js"),
  Chunk520480 = require("./520480.js"),
  Chunk467159 = require("./467159.js"),
  _ = 20,
  p = false,
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
    p = false, h = false, setTimeout(function() {
      p || E.resolveComposition(e)
    }, _)
  },
  onSelect: Chunk266254,
  onKeyDown: function(e, t) {
    if (!h) {
      E.resolveComposition(e), e._onKeyDown(t);
      return
    }(t.which === s.RIGHT || t.which === s.LEFT) && t.preventDefault()
  },
  onKeyPress: function(e, t) {
    t.which === s.RETURN && t.preventDefault()
  },
  resolveComposition: function(e) {
    if (!h) {
      var t = f(m).stopAndFlushMutations();
      m = null, p = true;
      var n = o.set(e._latestEditorState, {
        inCompositionMode: false
      });
      if (e.exitCurrentMode(), !t.size) return void e.update(n);
      var r = n.getCurrentContent();
      t.forEach(function(e, t) {
        var s = a.decode(t),
          l = s.blockKey,
          c = s.decoratorKey,
          u = s.leafKey,
          f = n.getBlockTree(l).getIn([c, "leaves", u]),
          _ = f.start,
          p = f.end,
          h = n.getSelection().merge({
            anchorKey: l,
            focusKey: l,
            anchorOffset: _,
            focusOffset: p,
            isBackward: false
          }),
          m = d(r, h),
          g = r.getBlockForKey(l).getInlineStyleAt(_);
        r = i.replaceText(r, h, e, g, m), n = o.set(n, {
          currentContent: r
        })
      });
      var s = u(n, c(e)),
        l = s.selectionState;
      e.restoreEditorDOM();
      var _ = o.acceptSelection(n, l);
      e.update(o.push(_, r, "insert-characters"))
    }
  }
};
module.exports = E