/** Chunk was on web.js **/
/** chunk id: 394227, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk621523 = require("./621523.js"),
  Chunk751736 = require("./751736.js"),
  Chunk507604 = require("./507604.js"),
  Chunk511696 = require("./511696.js"),
  s = Chunk751736("iterator");
module.exports = !Chunk621523(function() {
  var e = new URL("b?a=1&b=2&c=3", "https://a"),
    t = module.searchParams,
    n = new URLSearchParams("a=1&a=2&b=3"),
    r = "";
  return module.pathname = "c%20d", exports.forEach(function(e, n) {
    t.delete("b"), r += n + e
  }), require.delete("a", 2), require.delete("b", true), Chunk511696 && (!module.toJSON || !require.has("a", 1) || require.has("a", 2) || !require.has("a", true) || require.has("b")) || !exports.size && (Chunk511696 || !Chunk507604) || !exports.sort || "https://a/c%20d?a=1&c=3" !== module.href || "3" !== exports.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !exports[s] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://тест").host || "#%D0%B1" !== new URL("https://a#б").hash || "a1c3" !== Chunk621523 || "x" !== new URL("https://x", true).host
})