/** Chunk was on web.js **/
/** chunk id: 459674, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk954055 = require("./954055.js"),
  Chunk869639 = require("./869639.js"),
  Chunk448567 = require("./448567.js"),
  Chunk812415 = require("./812415.js"),
  Chunk423856 = require("./423856.js"),
  Chunk291691 = require("./291691.js");

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
    n = o(a.getScrollParent(d))
  }
  var f = s(r);
  e.setClipboard(f), e.setMode("cut"), setTimeout(function() {
    e.restoreEditorDOM(n), e.exitCurrentMode(), e.update(c(r))
  }, 0)
}