/** Chunk was on web.js **/
"use strict";
var r = n(299623),
  i = n(345374),
  o = n(874652),
  a = n(644659),
  s = n(97131).f,
  l = n(828114),
  c = n(535586),
  u = n(992051),
  d = n(325008),
  f = "Array Iterator",
  p = a.set,
  _ = a.getterFor(f);
e.exports = l(Array, "Array", function(e, t) {
  p(this, {
    type: f,
    target: r(e),
    index: 0,
    kind: t
  })
}, function() {
  var e = _(this),
    t = e.target,
    n = e.kind,
    r = e.index++;
  if (!t || r >= t.length) return e.target = void 0, c(void 0, !0);
  switch (n) {
    case "keys":
      return c(r, !1);
    case "values":
      return c(t[r], !1)
  }
  return c([r, t[r]], !1)
}, "values");
var h = o.Arguments = o.Array;
if (i("keys"), i("values"), i("entries"), !u && d && "values" !== h.name) try {
  s(h, "name", {
    value: "values"
  })
} catch (e) {}