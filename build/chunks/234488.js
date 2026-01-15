/** Chunk was on web.js **/
/** chunk id: 234488, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk46015 = require("./46015.js"),
  Chunk621523 = require("./621523.js"),
  Chunk880181 = require("./880181.js"),
  Chunk214027 = require("./214027.js"),
  Chunk154028 = require("./154028.js"),
  Chunk845691 = require("./845691.js"),
  c = function() {},
  u = Chunk154028("Reflect", "construct"),
  d = /^\s*(?:class|function)\b/,
  f = Chunk46015(d.exec),
  p = !d.test(c),
  _ = function(e) {
    if (!a(e)) returnfalse;
    try {
      return u(c, [], e), true
    } catch (e) {
      returnfalse
    }
  },
  h = function(e) {
    if (!a(e)) returnfalse;
    switch (o(e)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        returnfalse
    }
    try {
      return p || !!f(d, l(e))
    } catch (e) {
      returntrue
    }
  };
h.sham = true, module.exports = !u || Chunk621523(function() {
  var e;
  return _(_.call) || !_(Object) || !_(function() {
    e = true
  }) || e
}) ? h : _