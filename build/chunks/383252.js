/** Chunk was on web.js **/
/** chunk id: 383252, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./535213.js")();
var Chunk208653 = require("./208653.js"),
  Chunk149195 = require("./149195.js"),
  Chunk247498 = require("./247498.js"),
  Chunk105532 = require("./105532.js"),
  Chunk745872 = require("./745872.js"),
  Chunk638934 = require("./638934.js"),
  c = Chunk638934(Chunk745872("%Promise.all%")),
  u = Chunk638934(Chunk745872("%Promise.reject%"));
module.exports = function(e) {
  var t = this;
  if ("Object" !== i(t)) throw TypeError("`this` value must be an object");
  return c(t, a(o(e), function(e) {
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
      o = r(t, e);
    try {
      return o.then(n, i)
    } catch (e) {
      return u(t, e)
    }
  }))
}