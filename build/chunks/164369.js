/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(991656),
  i = n(70597),
  o = n(991998),
  a = n(896662),
  s = n(573347),
  l = n(536403),
  c = n(188650),
  u = n(291750),
  d = n(528734),
  f = n(951516);

function p(e) {
  (0, f.Z)(1, arguments);
  var t = (0, d.default)(e.start),
    n = (0, d.default)(e.end);
  if (isNaN(t.getTime())) throw RangeError("Start Date is invalid");
  if (isNaN(n.getTime())) throw RangeError("End Date is invalid");
  var p = {};
  p.years = Math.abs((0, u.Z)(n, t));
  var _ = (0, r.Z)(n, t),
    h = (0, i.Z)(t, {
      years: _ * p.years
    });
  p.months = Math.abs((0, l.Z)(n, h));
  var m = (0, i.Z)(h, {
    months: _ * p.months
  });
  p.days = Math.abs((0, o.Z)(n, m));
  var g = (0, i.Z)(m, {
    days: _ * p.days
  });
  p.hours = Math.abs((0, a.Z)(n, g));
  var E = (0, i.Z)(g, {
    hours: _ * p.hours
  });
  p.minutes = Math.abs((0, s.Z)(n, E));
  var v = (0, i.Z)(E, {
    minutes: _ * p.minutes
  });
  return p.seconds = Math.abs((0, c.Z)(n, v)), p
}