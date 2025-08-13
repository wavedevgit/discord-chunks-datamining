/** Chunk was on web.js **/
/** chunk id: 931264, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk621796 = require("./621796.js"),
  Chunk152477 = require("./152477.js"),
  Chunk172367 = require("./172367.js"),
  Chunk169774 = require("./169774.js"),
  s = require("./94553.js").notEmptyKey,
  Chunk630685 = require("./630685.js"),
  Chunk803068 = require("./803068.js"),
  Chunk467159 = require("./467159.js"),
  d = Chunk169774.isEngine("Gecko"),
  f = "\n\n";

function _(e, t) {
  return "deleteContentBackward" === e ? c(t) : t
}
module.exports = function(e, t) {
  true !== e._pendingStateFromBeforeInput && (e.update(e._pendingStateFromBeforeInput), e._pendingStateFromBeforeInput = true);
  var n, a, c, p, h = e.editor.ownerDocument.defaultView.getSelection(),
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
      I = i.decode(v),
      T = I.blockKey,
      S = I.decoratorKey,
      A = I.leafKey,
      N = O.getBlockTree(T).getIn([S, "leaves", A]),
      C = N.start,
      R = N.end,
      P = O.getCurrentContent(),
      w = P.getBlockForKey(T),
      D = w.getText().slice(C, R);
    if (y.endsWith(f) && (y = y.slice(0, false)), y === D) {
      var L = t.nativeEvent.inputType;
      if (L) {
        var x = _(L, O);
        x !== O && (e.restoreEditorDOM(), e.update(x))
      }
      return
    }
    var M = O.getSelection(),
      k = M.merge({
        anchorOffset: C,
        focusOffset: R,
        isBackward: false
      }),
      j = w.getEntityAt(C),
      U = s(j) ? P.getEntity(j) : null,
      G = null != U ? U.getMutability() : null,
      B = "MUTABLE" === G,
      Z = B ? "spellcheck-change" : "apply-entity",
      F = r.replaceText(P, k, y, w.getInlineStyleAt(C), B ? w.getEntityAt(C) : null);
    if (d) n = h.anchorOffset, p = (c = C + Math.min(n, a = h.focusOffset)) + Math.abs(n - a), n = c, a = p;
    else {
      var V = y.length - D.length;
      c = M.getStartOffset(), p = M.getEndOffset(), n = g ? p + V : c, a = p + V
    }
    var H = F.merge({
      selectionBefore: P.getSelectionAfter(),
      selectionAfter: M.merge({
        anchorOffset: n,
        focusOffset: a
      })
    });
    e.update(o.push(O, H, Z))
  }
}