/** Chunk was on web.js **/
/** chunk id: 39911, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk503628 = require("./503628.js"),
  Chunk380744 = require("./380744.js"),
  Chunk257943 = require("./257943.js"),
  Chunk105712 = require("./105712.js"),
  o = Chunk380744("iterator");
module.exports = !Chunk503628(function() {
  var e = new URL("b?a=1&b=2&c=3", "https://a"),
    t = e.searchParams,
    n = new URLSearchParams("a=1&a=2&b=3"),
    r = "";
  return e.pathname = "c%20d", t.forEach(function(e, n) {
    t.delete("b"), r += n + e
  }), n.delete("a", 2), n.delete("b", true), s && (!e.toJSON || !n.has("a", 1) || n.has("a", 2) || !n.has("a", true) || n.has("b")) || !t.size && (s || !a) || !t.sort || "https://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[o] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://тест").host || "#%D0%B1" !== new URL("https://a#б").hash || "a1c3" !== r || "x" !== new URL("https://x", true).host
})