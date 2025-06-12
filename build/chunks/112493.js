/** Chunk was on web.js **/
"use strict";
var r, i, a, o = n(621523),
  s = n(880181),
  l = n(434431),
  c = n(713411),
  u = n(961050),
  d = n(556585),
  _ = n(751736),
  f = n(511696),
  p = _("iterator"),
  h = !1;
[].keys && ("next" in (a = [].keys()) ? (i = u(u(a))) !== Object.prototype && (r = i) : h = !0), !l(r) || o(function() {
  var e = {};
  return r[p].call(e) !== e
}) ? r = {} : f && (r = c(r)), s(r[p]) || d(r, p, function() {
  return this
}), e.exports = {
  IteratorPrototype: r,
  BUGGY_SAFARI_ITERATORS: h
}