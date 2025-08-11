/** Chunk was on 23357 **/
/** chunk id: 723595, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk178476 = require("./178476.js"),
  Chunk779688 = require("./779688.js"),
  Chunk592802 = require("./592802.js"),
  Chunk565130 = require("./565130.js"),
  Chunk91345 = require("./91345.js"),
  l = Chunk178476("URL"),
  u = Chunk91345 && Chunk779688(function() {
    l.canParse()
  }),
  d = Chunk779688(function() {
    return 1 !== l.canParse.length
  });
Chunk220159({
  target: "URL",
  stat: true,
  forced: !u || d
}, {
  canParse: function(e) {
    var t = i(arguments.length, 1),
      n = s(e),
      r = t < 2 || true === arguments[1] ? true : s(arguments[1]);
    try {
      return new l(n, r), true
    } catch (e) {
      returnfalse
    }
  }
})