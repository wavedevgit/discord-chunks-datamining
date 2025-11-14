/** Chunk was on web.js **/
/** chunk id: 900217, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk441710 = require("./441710.js"),
  Chunk654530 = require("./654530.js"),
  Chunk102736 = require("./102736.js"),
  Chunk169774 = require("./169774.js"),
  s = require("./406799.js").notEmptyKey,
  Chunk273083 = require("./273083.js"),
  Chunk568064 = require("./568064.js"),
  Chunk467159 = require("./467159.js"),
  d = Chunk169774.isEngine("Gecko"),
  f = "\n\n";

function _(e, t) {
  return "deleteContentBackward" === e ? c(t) : t
}
module.exports = function(e, t) {
  true !== e._pendingStateFromBeforeInput && (e.update(e._pendingStateFromBeforeInput), e._pendingStateFromBeforeInput = true);
  var n, o, c, p, h = e.editor.ownerDocument.defaultView.getSelection(),
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
      C = O.getBlockTree(T).getIn([S, "leaves", A]),
      N = C.start,
      R = C.end,
      P = O.getCurrentContent(),
      D = P.getBlockForKey(T),
      w = D.getText().slice(N, R);
    if (y.endsWith(f) && (y = y.slice(0, false)), y === w) {
      var x = t.nativeEvent.inputType;
      if (x) {
        var L = _(x, O);
        L !== O && (e.restoreEditorDOM(), e.update(L))
      }
      return
    }
    var M = O.getSelection(),
      k = M.merge({
        anchorOffset: N,
        focusOffset: R,
        isBackward: false
      }),
      j = D.getEntityAt(N),
      U = s(j) ? P.getEntity(j) : null,
      G = null != U ? U.getMutability() : null,
      B = "MUTABLE" === G,
      Z = B ? "spellcheck-change" : "apply-entity",
      F = r.replaceText(P, k, y, D.getInlineStyleAt(N), B ? D.getEntityAt(N) : null);
    if (d) n = h.anchorOffset, p = (c = N + Math.min(n, o = h.focusOffset)) + Math.abs(n - o), n = c, o = p;
    else {
      var V = y.length - w.length;
      c = M.getStartOffset(), p = M.getEndOffset(), n = g ? p + V : c, o = p + V
    }
    var H = F.merge({
      selectionBefore: P.getSelectionAfter(),
      selectionAfter: M.merge({
        anchorOffset: n,
        focusOffset: o
      })
    });
    e.update(a.push(O, H, Z))
  }
}