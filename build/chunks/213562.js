/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
var n = r(166763),
  i = r(133092),
  o = r(292489),
  a = r(782034),
  u = r(685536),
  s = r(726803);
t.exports = function(t, e) {
  var r, c = t._latestEditorState,
    l = c.getSelection(),
    f = e.target;
  if (l.isCollapsed()) {
    e.preventDefault();
    return
  }
  s(f) && (r = u(o.getScrollParent(f)));
  var p = a(c);
  t.setClipboard(p), t.setMode("cut"), setTimeout(function() {
    var e, o;
    t.restoreEditorDOM(r), t.exitCurrentMode(), t.update((e = c, o = n.removeRange(e.getCurrentContent(), e.getSelection(), "forward"), i.push(e, o, "remove-range")))
  }, 0)
}