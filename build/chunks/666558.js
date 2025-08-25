/** Chunk was on web.js **/
/** chunk id: 666558, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk309943 = require("./309943.js"),
  Chunk102736 = require("./102736.js"),
  Chunk292489 = require("./292489.js"),
  Chunk401647 = require("./401647.js"),
  Chunk685536 = require("./685536.js"),
  Chunk790771 = require("./790771.js");

function c(e) {
  var t = r.removeRange(e.getCurrentContent(), e.getSelection(), "forward");
  return i.push(e, t, "remove-range")
}
module.exports = function(e, t) {
  var n, r = e._latestEditorState,
    i = r.getSelection(),
    u = t.target;
  if (i.isCollapsed()) return void t.preventDefault();
  if (l(u)) {
    var d = u;
    n = s(o.getScrollParent(d))
  }
  var f = a(r);
  e.setClipboard(f), e.setMode("cut"), setTimeout(function() {
    e.restoreEditorDOM(n), e.exitCurrentMode(), e.update(c(r))
  }, 0)
}