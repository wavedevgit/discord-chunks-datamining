/** Chunk was on 23357 **/
/** chunk id: 605552, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk602168 = require("./602168.js");
Chunk220159({
  target: "Promise",
  stat: true,
  forced: require("./296004.js").CONSTRUCTOR
}, {
  reject: function(e) {
    var t = o.f(this);
    return (0, t.reject)(e), t.promise
  }
})