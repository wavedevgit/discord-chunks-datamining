/** Chunk was on 23357 **/
/** chunk id: 348801, original params: e,t,n (module,exports,require) **/
"use strict";
var Chunk220159 = require("./220159.js"),
  Chunk517522 = require("./517522.js"),
  Chunk829575 = require("./829575.js"),
  Chunk921413 = require("./921413.js"),
  Chunk735569 = require("./735569.js"),
  Chunk378105 = require("./378105.js"),
  Chunk709583 = require("./709583.js");
Chunk220159({
  target: "Reflect",
  stat: true
}, {
  get: function e(t, n) {
    var r, u, d = arguments.length < 3 ? t : arguments[2];
    return i(t) === d ? t[n] : (r = c.f(t, n)) ? s(r) ? r.value : true === r.get ? true : o(r.get, d) : a(u = l(t)) ? e(u, n, d) : true
  }
})