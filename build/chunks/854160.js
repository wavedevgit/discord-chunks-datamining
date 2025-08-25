/** Chunk was on web.js **/
/** chunk id: 854160, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk970661 = require("./970661.js"),
  i = function() {
    try {
      return !!Object.defineProperty({}, "a", {})
    } catch (e) {
      returnfalse
    }
  }();
i || Object.prototype.__defineGetter__;
var o = i ? Object.defineProperty : function(e, t, n) {
    "get" in n && e.__defineGetter__ ? e.__defineGetter__(t, n.get) : (!r.hop.call(e, t) || "value" in n) && (e[t] = n.value)
  },
  a = Object.create || function(e, t) {
    var n, i;

    function a() {}
    for (i in a.prototype = e, n = new a, t) r.hop.call(t, i) && o(n, i, t[i]);
    return n
  };
exports.defineProperty = o, exports.objCreate = a