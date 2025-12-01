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
  var n, o, c, _, m = e.editor.ownerDocument.defaultView.getSelection(),
    h = m.anchorNode,
    g = m.isCollapsed;
  if ((null == h ? true : h.nodeType) === Node.TEXT_NODE || (null == h ? true : h.nodeType) === Node.ELEMENT_NODE) {
    if (h.nodeType === Node.TEXT_NODE && (null !== h.previousSibling || null !== h.nextSibling)) {
      var E = h.parentNode;
      h.nodeValue = E.textContent;
      for (var b = E.firstChild; null !== b; b = b.nextSibling) b !== h && E.removeChild(b)
    }
    var y = h.textContent,
      O = e._latestEditorState,
      v = u(l(h)),
      S = i.decode(v),
      I = S.blockKey,
      T = S.decoratorKey,
      A = S.leafKey,
      C = O.getBlockTree(I).getIn([T, "leaves", A]),
      N = C.start,
      P = C.end,
      R = O.getCurrentContent(),
      w = R.getBlockForKey(I),
      D = w.getText().slice(N, P);
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
      k = w.getEntityAt(N),
      U = s(k) ? R.getEntity(k) : null,
      G = null != U ? U.getMutability() : null,
      Z = "MUTABLE" === G,
      B = Z ? "spellcheck-change" : "apply-entity",
      F = r.replaceText(R, M, y, w.getInlineStyleAt(N), Z ? w.getEntityAt(N) : null);
    if (d) n = m.anchorOffset, _ = (c = N + Math.min(n, o = m.focusOffset)) + Math.abs(n - o), n = c, o = _;
    else {
      var V = y.length - D.length;
      c = j.getStartOffset(), _ = j.getEndOffset(), n = g ? _ + V : c, o = _ + V
    }
    var H = F.merge({
      selectionBefore: R.getSelectionAfter(),
      selectionAfter: j.merge({
        anchorOffset: n,
        focusOffset: o
      })
    });
    e.update(a.push(O, H, B))
  }
}