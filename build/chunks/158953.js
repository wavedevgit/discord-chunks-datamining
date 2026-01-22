/** Chunk was on 35511 **/
/** chunk id: 158953, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk834647 = require("./834647.js"),
  Chunk664886 = require("./664886.js"),
  Chunk407057 = require("./407057.js"),
  Chunk155084 = require("./155084.js"),
  Chunk830150 = require("./830150.js"),
  Chunk965746 = require("./965746.js"),
  Chunk517480 = require("./517480.js");
Chunk834647({
  target: "Reflect",
  stat: true
}, {
  get: function e(t, n) {
    var r, u, d = arguments.length < 3 ? t : arguments[2];
    return i(t) === d ? t[n] : (r = l.f(t, n)) ? s(r) ? r.value : true === r.get ? true : a(r.get, d) : o(u = c(t)) ? e(u, n, d) : true
  }
})