/** Chunk was on web.js **/
/** chunk id: 883740, original params: e,t,n (module,exports,re quire) **/
var r = {
  "./spritesheet-emoji-32.png": "164197",
  "./spritesheet-emoji-40.png": "787658",
  "./spritesheet-emoji-48.png": "860002"
};

function i(e) {
  return n(a(e))
}

function a(e) {
  if (!n.o(r, e)) {
    var t = Error("Cannot find module '" + e + "'");
    throw t.code = "MODULE_NOT_FOUND", t
  }
  return r[e]
}
i.keys = function() {
  return Object.keys(r)
}, i.resolve = a, module.exports = i, i.id = 883740