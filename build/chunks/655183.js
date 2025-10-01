/** Chunk was on web.js **/
/** chunk id: 655183, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk4145 = require("./4145.js"),
  Chunk441710 = require("./441710.js"),
  Chunk654530 = require("./654530.js"),
  Chunk102736 = require("./102736.js"),
  Chunk574369 = require("./574369.js"),
  Chunk66386 = require("./66386.js"),
  Chunk933585 = require("./933585.js"),
  Chunk665635 = require("./665635.js"),
  Chunk878694 = require("./878694.js"),
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
  onSelect: Chunk66386,
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