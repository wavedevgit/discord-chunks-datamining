/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => f
});
var r = n(175922),
  i = n(759202),
  o = n(316138),
  a = n(882159),
  s = n(977489),
  l = n(285363),
  c = n(538018),
  u = n(894417);

function d(e) {
  var t = e.getBoundingClientRect(),
    n = (0, u.NM)(t.width) / e.offsetWidth || 1,
    r = (0, u.NM)(t.height) / e.offsetHeight || 1;
  return 1 !== n || 1 !== r
}

function f(e, t, n) {
  void 0 === n && (n = !1);
  var u = (0, a.Re)(t),
    f = (0, a.Re)(t) && d(t),
    p = (0, l.Z)(t),
    _ = (0, r.Z)(e, f, n),
    h = {
      scrollLeft: 0,
      scrollTop: 0
    },
    m = {
      x: 0,
      y: 0
    };
  return (u || !u && !n) && (("body" !== (0, o.Z)(t) || (0, c.Z)(p)) && (h = (0, i.Z)(t)), (0, a.Re)(t) ? (m = (0, r.Z)(t, !0), m.x += t.clientLeft, m.y += t.clientTop) : p && (m.x = (0, s.Z)(p))), {
    x: _.left + h.scrollLeft - m.x,
    y: _.top + h.scrollTop - m.y,
    width: _.width,
    height: _.height
  }
}