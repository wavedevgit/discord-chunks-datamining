/** Chunk was on web.js **/
/** chunk id: 66115, original params: e,t,n (module,exports,re quire) **/
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
  onSelect: Chunk536574,
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
      var n = a.set(e._latestEditorState, {
        inCompositionMode: false
      });
      if (e.exitCurrentMode(), !t.size) return void e.update(n);
      var r = n.getCurrentContent();
      t.forEach(function(e, t) {
        var s = o.decode(t),
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
        r = i.replaceText(r, h, e, g, m), n = a.set(n, {
          currentContent: r
        })
      });
      var s = u(n, c(e)),
        l = s.selectionState;
      e.restoreEditorDOM();
      var _ = a.acceptSelection(n, l);
      e.update(a.push(_, r, "insert-characters"))
    }
  }
};
module.exports = E