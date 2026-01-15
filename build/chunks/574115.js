/** Chunk was on web.js **/
/** chunk id: 574115, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk720218 = require("./720218.js"),
  Chunk964930 = require("./964930.js"),
  Chunk384404 = require("./384404.js"),
  Chunk169774 = require("./169774.js"),
  s = require("./754823.js").notEmptyKey,
  Chunk466312 = require("./466312.js"),
  Chunk257834 = require("./257834.js"),
  Chunk467159 = require("./467159.js"),
  d = Chunk169774.isEngine("Gecko"),
  f = "\n\n";

function p(e, t) {
  return "deleteContentBackward" === e ? c(t) : t
}
module.exports = function(e, t) {
  true !== e._pendingStateFromBeforeInput && (e.update(e._pendingStateFromBeforeInput), e._pendingStateFromBeforeInput = true);
  var n, o, c, _, h = e.editor.ownerDocument.defaultView.getSelection(),
    m = h.anchorNode,
    g = h.isCollapsed;
  if ((null == m ? true : m.nodeType) === Node.TEXT_NODE || (null == m ? true : m.nodeType) === Node.ELEMENT_NODE) {
    if (m.nodeType === Node.TEXT_NODE && (null !== m.previousSibling || null !== m.nextSibling)) {
      var E = m.parentNode;
      m.nodeValue = E.textContent;
      for (var b = E.firstChild; null !== b; b = b.nextSibling) b !== m && E.removeChild(b)
    }
    var y = m.textContent,
      O = e._latestEditorState,
      v = u(l(m)),
      S = i.decode(v),
      I = S.blockKey,
      T = S.decoratorKey,
      C = S.leafKey,
      A = O.getBlockTree(I).getIn([T, "leaves", C]),
      N = A.start,
      P = A.end,
      w = O.getCurrentContent(),
      R = w.getBlockForKey(I),
      D = R.getText().slice(N, P);
    if (y.endsWith(f) && (y = y.slice(0, false)), y === D) {
      var x = t.nativeEvent.inputType;
      if (x) {
        var L = p(x, O);
        L !== O && (e.restoreEditorDOM(), e.update(L))
      }
      return
    }
    var j = O.getSelection(),
      M = j.merge({
        anchorOffset: N,
        focusOffset: P,
        isBackward: false
      }),
      k = R.getEntityAt(N),
      U = s(k) ? w.getEntity(k) : null,
      G = null != U ? U.getMutability() : null,
      Z = "MUTABLE" === G,
      F = Z ? "spellcheck-change" : "apply-entity",
      B = r.replaceText(w, M, y, R.getInlineStyleAt(N), Z ? R.getEntityAt(N) : null);
    if (d) n = h.anchorOffset, _ = (c = N + Math.min(n, o = h.focusOffset)) + Math.abs(n - o), n = c, o = _;
    else {
      var V = y.length - D.length;
      c = j.getStartOffset(), _ = j.getEndOffset(), n = g ? _ + V : c, o = _ + V
    }
    var H = B.merge({
      selectionBefore: w.getSelectionAfter(),
      selectionAfter: j.merge({
        anchorOffset: n,
        focusOffset: o
      })
    });
    e.update(a.push(O, H, F))
  }
}