/** Chunk was on web.js **/
"use strict";
var r, i, o, a = n(936940),
  s = n(354848),
  l = n(622281),
  c = n(803938),
  u = n(144748),
  d = n(859209),
  f = n(641236),
  _ = n(992051),
  p = f("iterator"),
  h = !1;
[].keys && ("next" in (o = [].keys()) ? (i = u(u(o))) !== Object.prototype && (r = i) : h = !0), !l(r) || a(function() {
  var e = {};
  return r[p].call(e) !== e
}) ? r = {} : _ && (r = c(r)), s(r[p]) || d(r, p, function() {
  return this
}), e.exports = {
  IteratorPrototype: r,
  BUGGY_SAFARI_ITERATORS: h
}