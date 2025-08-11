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
    t = module.searchParams,
    n = new URLSearchParams("a=1&a=2&b=3"),
    r = "";
  return module.pathname = "c%20d", exports.forEach(function(e, n) {
    t.delete("b"), r += n + e
  }), require.delete("a", 2), require.delete("b", true), Chunk253462 && (!module.toJSON || !require.has("a", 1) || require.has("a", 2) || !require.has("a", true) || require.has("b")) || !exports.size && (Chunk253462 || !Chunk181794) || !exports.sort || "https://a/c%20d?a=1&c=3" !== module.href || "3" !== exports.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !exports[s] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://тест").host || "#%D0%B1" !== new URL("https://a#б").hash || "a1c3" !== Chunk779688 || "x" !== new URL("https://x", true).host
})