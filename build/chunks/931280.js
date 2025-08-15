/** Chunk was on 8381 **/
/** chunk id: 931280, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk621796 = require("./621796.js"),
  Chunk172367 = require("./172367.js"),
  Chunk292489 = require("./292489.js"),
  Chunk458545 = require("./458545.js"),
  Chunk685536 = require("./685536.js"),
  Chunk302354 = require("./302354.js");
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