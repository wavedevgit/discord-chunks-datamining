/** Chunk was on web.js **/
/** chunk id: 444058, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk683706 = require("./683706.js"),
  Chunk225153 = require("./225153.js"),
  Chunk194537 = require("./194537.js"),
  Chunk308185 = require("./308185.js"),
  Chunk119219 = require("./119219.js"),
  Chunk174997 = require("./174997.js"),
  Chunk115907 = require("./115907.js"),
  Chunk512884 = require("./512884.js"),
  Chunk29583 = require("./29583.js"),
  Chunk618027 = require("./618027.js");

function p(e) {
  (0, f.A)(1, arguments);
  var t = (0, d.default)(e.start),
    n = (0, d.default)(e.end);
  if (isNaN(t.getTime())) throw RangeError("Start Date is invalid");
  if (isNaN(n.getTime())) throw RangeError("End Date is invalid");
  var p = {};
  p.years = Math.abs((0, u.A)(n, t));
  var _ = (0, r.A)(n, t),
    h = (0, i.A)(t, {
      years: _ * p.years
    });
  p.months = Math.abs((0, l.A)(n, h));
  var m = (0, i.A)(h, {
    months: _ * p.months
  });
  p.days = Math.abs((0, a.A)(n, m));
  var g = (0, i.A)(m, {
    days: _ * p.days
  });
  p.hours = Math.abs((0, o.A)(n, g));
  var E = (0, i.A)(g, {
    hours: _ * p.hours
  });
  p.minutes = Math.abs((0, s.A)(n, E));
  var y = (0, i.A)(E, {
    minutes: _ * p.minutes
  });
  return p.seconds = Math.abs((0, c.A)(n, y)), p
}