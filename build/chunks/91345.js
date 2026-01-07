/** Chunk was on 23357 **/
/** chunk id: 91345, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk779688 = require("./779688.js"),
  Chunk394370 = require("./394370.js"),
  Chunk181794 = require("./181794.js"),
  Chunk253462 = require("./253462.js"),
  s = Chunk394370("iterator");
module.exports = !Chunk779688(function() {
  var e = new URL("b?a=1&b=2&c=3", "https://a"),
    t = e.searchParams,
    n = new URLSearchParams("a=1&a=2&b=3"),
    r = "";
  return e.pathname = "c%20d", t.forEach(function(e, n) {
    t.delete("b"), r += n + e
  }), n.delete("a", 2), n.delete("b", true), i && (!e.toJSON || !n.has("a", 1) || n.has("a", 2) || !n.has("a", true) || n.has("b")) || !t.size && (i || !a) || !t.sort || "https://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[s] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://тест").host || "#%D0%B1" !== new URL("https://a#б").hash || "a1c3" !== r || "x" !== new URL("https://x", true).host
})