/** Chunk was on web.js **/
/** chunk id: 164369, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk991656 = require("./991656.js"),
  Chunk70597 = require("./70597.js"),
  Chunk991998 = require("./991998.js"),
  Chunk896662 = require("./896662.js"),
  Chunk573347 = require("./573347.js"),
  Chunk536403 = require("./536403.js"),
  Chunk188650 = require("./188650.js"),
  Chunk291750 = require("./291750.js"),
  Chunk528734 = require("./528734.js"),
  Chunk951516 = require("./951516.js");

function p(e) {
  (0, f.Z)(1, arguments);
  var t = (0, d.default)(e.start),
    n = (0, d.default)(e.end);
  if (isNaN(t.getTime())) throw RangeError("Start Date is invalid");
  if (isNaN(n.getTime())) throw RangeError("End Date is invalid");
  var p = {};
  p.years = Math.abs((0, u.Z)(n, t));
  var _ = (0, r.Z)(n, t),
    m = (0, i.Z)(t, {
      years: _ * p.years
    });
  p.months = Math.abs((0, l.Z)(n, m));
  var h = (0, i.Z)(m, {
    months: _ * p.months
  });
  p.days = Math.abs((0, o.Z)(n, h));
  var g = (0, i.Z)(h, {
    days: _ * p.days
  });
  p.hours = Math.abs((0, a.Z)(n, g));
  var E = (0, i.Z)(g, {
    hours: _ * p.hours
  });
  p.minutes = Math.abs((0, s.Z)(n, E));
  var b = (0, i.Z)(E, {
    minutes: _ * p.minutes
  });
  return p.seconds = Math.abs((0, c.Z)(n, b)), p
}