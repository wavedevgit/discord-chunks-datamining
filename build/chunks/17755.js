/** Chunk was on web.js **/
/** chunk id: 17755, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk446474 = require("./446474.js"),
  Chunk101968 = require("./101968.js"),
  Chunk339626 = require("./339626.js"),
  Chunk647055 = require("./647055.js"),
  Chunk221748 = require("./221748.js"),
  l = TypeError;
module.exports = function(e, t) {
  var n = e.exec;
  if (a(n)) {
    var c = r(n, e, t);
    return null !== c && i(c), c
  }
  if ("RegExp" === o(e)) return r(s, e, t);
  throw new l("RegExp#exec called on incompatible receiver")
}