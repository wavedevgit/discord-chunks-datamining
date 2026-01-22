/** Chunk was on 35511 **/
/** chunk id: 782859, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk794938 = require("./794938.js");
Chunk834647({
  target: "Promise",
  stat: true
}, {
  withResolvers: function() {
    var e = a.f(this);
    return {
      promise: e.promise,
      resolve: e.resolve,
      reject: e.reject
    }
  }
})