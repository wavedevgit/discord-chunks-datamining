/** Chunk was on web.js **/
/** chunk id: 931280, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk621796 = require("./621796.js"),
  Chunk172367 = require("./172367.js"),
  Chunk292489 = require("./292489.js"),
  Chunk458545 = require("./458545.js"),
  Chunk685536 = require("./685536.js"),
  Chunk302354 = require("./302354.js");

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