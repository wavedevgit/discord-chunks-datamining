/** Chunk was on web.js **/
/** chunk id: 938796, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk860511 = require("./860511.js"),
  Chunk257943 = require("./257943.js"),
  Chunk485155 = require("./485155.js"),
  Chunk693510 = require("./693510.js"),
  Chunk503628 = require("./503628.js"),
  l = Chunk860511.RegExp,
  c = l.prototype;
Chunk257943 && Chunk503628(function() {
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
  for (var s in e && (a.hasIndices = "d"), a) i(s, a[s]);
  return Object.getOwnPropertyDescriptor(c, "flags").get.call(t) !== r || n !== r
}) && Chunk485155(c, "flags", {
  configurable: true,
  get: Chunk693510
})