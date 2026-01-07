/** Chunk was on web.js **/
/** chunk id: 997841, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk127849 = require("./127849.js"),
  Chunk507604 = require("./507604.js"),
  Chunk573078 = require("./573078.js"),
  Chunk503463 = require("./503463.js"),
  Chunk621523 = require("./621523.js"),
  l = Chunk127849.RegExp,
  c = l.prototype;
Chunk507604 && Chunk621523(function() {
  var e = true;
  try {
    l(".", "d")
  } catch (t) {
    e = false
  }
  var t = {},
    n = "",
    r = e ? "dgimsy" : "gimsy",
    i = function(e, r) {
      Object.defineProperty(t, e, {
        get: function() {
          return n += r, true
        }
      })
    },
    a = {
      dotAll: "s",
      global: "g",
      ignoreCase: "i",
      multiline: "m",
      sticky: "y"
    };
  for (var o in e && (a.hasIndices = "d"), a) i(o, a[o]);
  return Object.getOwnPropertyDescriptor(c, "flags").get.call(t) !== r || n !== r
}) && Chunk573078(c, "flags", {
  configurable: true,
  get: Chunk503463
})