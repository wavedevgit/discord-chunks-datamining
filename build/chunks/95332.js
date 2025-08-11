/** Chunk was on 23357 **/
/** chunk id: 95332, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk602168 = require("./602168.js");
Chunk220159({
  target: "Promise",
  stat: true
}, {
  withResolvers: function() {
    var e = Chunk602168.f(this);
    return {
      promise: module.promise,
      resolve: module.resolve,
      reject: module.reject
    }
  }
})