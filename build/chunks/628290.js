/** Chunk was on web.js **/
/** chunk id: 628290, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk954055 = require("./954055.js"),
  Chunk595042 = require("./595042.js"),
  Chunk869639 = require("./869639.js"),
  Chunk573750 = require("./573750.js"),
  o = require("./611122.js").notEmptyKey,
  Chunk587321 = require("./587321.js"),
  Chunk907014 = require("./907014.js"),
  Chunk670200 = require("./670200.js"),
  d = Chunk573750.isEngine("Gecko"),
  f = "\n\n";

function p(e, t) {
  return "deleteContentBackward" === e ? c(t) : t
}
module.exports = function(e, t) {
  true !== e._pendingStateFromBeforeInput && (e.update(e._pendingStateFromBeforeInput), e._pendingStateFromBeforeInput = true);
  var n, s, c, _, h = e.editor.ownerDocument.defaultView.getSelection(),
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
      A = u(l(m)),
      v = i.decode(A),
      S = v.blockKey,
      I = v.decoratorKey,
      T = v.leafKey,
      C = O.getBlockTree(S).getIn([I, "leaves", T]),
      N = C.start,
      R = C.end,
      w = O.getCurrentContent(),
      P = w.getBlockForKey(S),
      D = P.getText().slice(N, R);
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
        focusOffset: R,
        isBackward: false
      }),
      k = P.getEntityAt(N),
      U = o(k) ? w.getEntity(k) : null,
      G = null != U ? U.getMutability() : null,
      V = "MUTABLE" === G,
      F = V ? "spellcheck-change" : "apply-entity",
      B = r.replaceText(w, M, y, P.getInlineStyleAt(N), V ? P.getEntityAt(N) : null);
    if (d) n = h.anchorOffset, _ = (c = N + Math.min(n, s = h.focusOffset)) + Math.abs(n - s), n = c, s = _;
    else {
      var H = y.length - D.length;
      c = j.getStartOffset(), _ = j.getEndOffset(), n = g ? _ + H : c, s = _ + H
    }
    var Y = B.merge({
      selectionBefore: w.getSelectionAfter(),
      selectionAfter: j.merge({
        anchorOffset: n,
        focusOffset: s
      })
    });
    e.update(a.push(O, Y, F))
  }
}