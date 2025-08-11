/** Chunk was on 23357 **/
/** chunk id: 639129, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk764908 = require("./764908.js"),
  a = Date,
  i = Chunk764908(a.prototype.getTime);
Chunk220159({
  target: "Date",
  stat: true
}, {
  now: function() {
    return i(new a)
  }
})