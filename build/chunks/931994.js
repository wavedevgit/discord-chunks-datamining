/** Chunk was on 35511 **/
/** chunk id: 931994, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk794938 = require("./794938.js");
Chunk834647({
  target: "Promise",
  stat: true,
  forced: require("./976467.js").CONSTRUCTOR
}, {
  reject: function(e) {
    var t = a.f(this);
    return (0, t.reject)(e), t.promise
  }
})