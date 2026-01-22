/** Chunk was on 35511 **/
/** chunk id: 256742, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk675879 = require("./675879.js"),
  o = Date,
  i = Chunk675879(o.prototype.getTime);
Chunk834647({
  target: "Date",
  stat: true
}, {
  now: function() {
    return i(new o)
  }
})