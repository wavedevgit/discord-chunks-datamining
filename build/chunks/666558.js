/** Chunk was on 91584 **/
/** chunk id: 666558, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk309943 = require("./309943.js"),
  Chunk102736 = require("./102736.js"),
  Chunk292489 = require("./292489.js"),
  Chunk401647 = require("./401647.js"),
  Chunk685536 = require("./685536.js"),
  Chunk790771 = require("./790771.js");
module.exports = function(t, e) {
  var r, c = t._latestEditorState,
    l = c.getSelection(),
    f = e.target;
  if (l.isCollapsed()) return void e.preventDefault();
  s(f) && (r = u(o.getScrollParent(f)));
  var p = a(c);
  t.setClipboard(p), t.setMode("cut"), setTimeout(function() {
    var e, o;
    t.restoreEditorDOM(r), t.exitCurrentMode(), t.update((e = c, o = n.removeRange(e.getCurrentContent(), e.getSelection(), "forward"), i.push(e, o, "remove-range")))
  }, 0)
}