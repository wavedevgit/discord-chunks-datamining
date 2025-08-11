/** Chunk was on web.js **/
/** chunk id: 820616, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk580983 = require("./580983.js"),
  Chunk179122 = require("./179122.js"),
  Chunk880181 = require("./880181.js"),
  Chunk796138 = require("./796138.js"),
  Chunk16721 = require("./16721.js"),
  l = TypeError;
module.exports = function(e, t) {
  var n = e.exec;
  if (o(n)) {
    var c = r(n, e, t);
    return null !== c && i(c), c
  }
  if ("RegExp" === a(e)) return r(s, e, t);
  throw new l("RegExp#exec called on incompatible receiver")
}