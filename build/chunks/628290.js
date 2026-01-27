/** Chunk was on 38939 **/
/** chunk id: 628290, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk954055 = require("./954055.js"),
  Chunk595042 = require("./595042.js"),
  Chunk869639 = require("./869639.js"),
  Chunk573750 = require("./573750.js"),
  s = require("./611122.js").notEmptyKey,
  Chunk587321 = require("./587321.js"),
  Chunk907014 = require("./907014.js"),
  Chunk670200 = require("./670200.js"),
  f = Chunk573750.isEngine("Gecko");
module.exports = function(t, e) {
  true !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = true);
  var r = t.editor.ownerDocument.defaultView.getSelection(),
    a = r.anchorNode,
    p = r.isCollapsed;
  if ((null == a ? true : a.nodeType) === Node.TEXT_NODE || (null == a ? true : a.nodeType) === Node.ELEMENT_NODE) {
    if (a.nodeType === Node.TEXT_NODE && (null !== a.previousSibling || null !== a.nextSibling)) {
      var h = a.parentNode;
      a.nodeValue = h.textContent;
      for (var d = h.firstChild; null !== d; d = d.nextSibling) d !== a && h.removeChild(d)
    }
    var g = a.textContent,
      y = t._latestEditorState,
      v = l(u(a)),
      m = i.decode(v),
      _ = m.blockKey,
      b = m.decoratorKey,
      S = m.leafKey,
      w = y.getBlockTree(_).getIn([b, "leaves", S]),
      k = w.start,
      x = w.end,
      C = y.getCurrentContent(),
      E = C.getBlockForKey(_),
      O = E.getText().slice(k, x);
    if (g.endsWith("\n\n") && (g = g.slice(0, false)), g === O) {
      var D = e.nativeEvent.inputType;
      if (D) {
        var K, T, M, A, I = "deleteContentBackward" === D ? c(y) : y;
        I !== y && (t.restoreEditorDOM(), t.update(I))
      }
      return
    }
    var B = y.getSelection(),
      L = B.merge({
        anchorOffset: k,
        focusOffset: x,
        isBackward: false
      }),
      R = E.getEntityAt(k),
      N = s(R) ? C.getEntity(R) : null,
      F = "MUTABLE" === (null != N ? N.getMutability() : null),
      z = n.replaceText(C, L, g, E.getInlineStyleAt(k), F ? E.getEntityAt(k) : null);
    if (f) A = (M = k + Math.min(K = r.anchorOffset, T = r.focusOffset)) + Math.abs(K - T), K = M, T = A;
    else {
      var P = g.length - O.length;
      M = B.getStartOffset(), A = B.getEndOffset(), K = p ? A + P : M, T = A + P
    }
    var j = z.merge({
      selectionBefore: C.getSelectionAfter(),
      selectionAfter: B.merge({
        anchorOffset: K,
        focusOffset: T
      })
    });
    t.update(o.push(y, j, F ? "spellcheck-change" : "apply-entity"))
  }
}