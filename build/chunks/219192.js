/** Chunk was on web.js **/
/** chunk id: 219192, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk720218 = require("./720218.js"),
  Chunk384404 = require("./384404.js"),
  Chunk292489 = require("./292489.js"),
  Chunk777110 = require("./777110.js"),
  Chunk685536 = require("./685536.js"),
  Chunk182073 = require("./182073.js");

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