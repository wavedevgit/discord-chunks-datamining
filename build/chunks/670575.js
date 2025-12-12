/** Chunk was on web.js **/
/** chunk id: 670575, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./195653.js")(),
  i = require("./166691.js")("Object.prototype.toString"),
  o = function(e) {
    return (!r || !e || "object" != typeof e || !(Symbol.toStringTag in e)) && "[object Arguments]" === i(e)
  },
  a = function(e) {
    return !!o(e) || null !== e && "object" == typeof e && "length" in e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== i(e) && "callee" in e && "[object Function]" === i(e.callee)
  },
  s = function() {
    return o(arguments)
  }();
o.isLegacyArguments = a, module.exports = s ? o : a