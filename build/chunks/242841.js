/** Chunk was on web.js **/
/** chunk id: 242841, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./249759.js")();
var Chunk120858 = require("./120858.js"),
  Chunk325473 = require("./325473.js"),
  Chunk136411 = require("./136411.js"),
  Chunk225314 = require("./225314.js"),
  Chunk439619 = require("./439619.js"),
  Chunk142896 = require("./142896.js"),
  c = Chunk142896(Chunk439619("%Promise.all%")),
  u = Chunk142896(Chunk439619("%Promise.reject%"));
module.exports = function(e) {
  var t = this;
  if ("Object" !== i(t)) throw TypeError("`this` value must be an object");
  return c(t, o(a(e), function(e) {
    var n = function(e) {
        return {
          status: "fulfilled",
          value: e
        }
      },
      i = function(e) {
        return {
          status: "rejected",
          reason: e
        }
      },
      a = r(t, e);
    try {
      return a.then(n, i)
    } catch (e) {
      return u(t, e)
    }
  }))
}