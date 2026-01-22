/** Chunk was on web.js **/
/** chunk id: 626800, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./581070.js")(),
  i = require("./906046.js")("Object.prototype.toString"),
  a = function(e) {
    return (!r || !e || "object" != typeof e || !(Symbol.toStringTag in e)) && "[object Arguments]" === i(e)
  },
  s = function(e) {
    return !!a(e) || null !== e && "object" == typeof e && "length" in e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== i(e) && "callee" in e && "[object Function]" === i(e.callee)
  },
  o = function() {
    return a(arguments)
  }();
a.isLegacyArguments = s, module.exports = o ? a : s