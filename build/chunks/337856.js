/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
var r = n(926515),
  i = n(354848),
  o = n(622281),
  a = TypeError;
e.exports = function(e, t) {
  var n, s;
  if ("string" === t && i(n = e.toString) && !o(s = r(n, e)) || i(n = e.valueOf) && !o(s = r(n, e)) || "string" !== t && i(n = e.toString) && !o(s = r(n, e))) return s;
  throw a("Can't convert object to primitive value")
}