/** Chunk was on 38939 **/
/** chunk id: 459674, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk954055 = require("./954055.js"),
  Chunk869639 = require("./869639.js"),
  Chunk448567 = require("./448567.js"),
  Chunk812415 = require("./812415.js"),
  Chunk423856 = require("./423856.js"),
  Chunk291691 = require("./291691.js");
module.exports = function(t, e) {
  var r, c = t._latestEditorState,
    l = c.getSelection(),
    f = e.target;
  if (l.isCollapsed()) return void e.preventDefault();
  u(f) && (r = s(o.getScrollParent(f)));
  var p = a(c);
  t.setClipboard(p), t.setMode("cut"), setTimeout(function() {
    var e, o;
    t.restoreEditorDOM(r), t.exitCurrentMode(), t.update((e = c, o = n.removeRange(e.getCurrentContent(), e.getSelection(), "forward"), i.push(e, o, "remove-range")))
  }, 0)
}