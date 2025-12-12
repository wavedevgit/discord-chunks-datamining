/** Chunk was on web.js **/
/** chunk id: 670575, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./195653.js")(),
  i = require("./166691.js")("Object.prototype.toString"),
  a = function(e) {
    return (!r || !e || "object" != typeof e || !(Symbol.toStringTag in e)) && "[object Arguments]" === i(e)
  },
  o = function(e) {
    return !!a(e) || null !== e && "object" == typeof e && "length" in e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== i(e) && "callee" in e && "[object Function]" === i(e.callee)
  },
  s = function() {
    return a(arguments)
  }();
a.isLegacyArguments = o, module.exports = s ? a : o