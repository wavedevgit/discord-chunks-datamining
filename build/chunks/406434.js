/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => s
});
var r = n(126387),
  i = n(632471),
  o = n(205208),
  a = n(740078);

function s(e) {
  var t, n = e.reference,
    s = e.element,
    l = e.placement,
    c = l ? (0, r.Z)(l) : null,
    u = l ? (0, i.Z)(l) : null,
    d = n.x + n.width / 2 - s.width / 2,
    f = n.y + n.height / 2 - s.height / 2;
  switch (c) {
    case a.we:
      t = {
        x: d,
        y: n.y - s.height
      };
      break;
    case a.I:
      t = {
        x: d,
        y: n.y + n.height
      };
      break;
    case a.F2:
      t = {
        x: n.x + n.width,
        y: f
      };
      break;
    case a.t$:
      t = {
        x: n.x - s.width,
        y: f
      };
      break;
    default:
      t = {
        x: n.x,
        y: n.y
      }
  }
  var p = c ? (0, o.Z)(c) : null;
  if (null != p) {
    var _ = "y" === p ? "height" : "width";
    switch (u) {
      case a.BL:
        t[p] = t[p] - (n[_] / 2 - s[_] / 2);
        break;
      case a.ut:
        t[p] = t[p] + (n[_] / 2 - s[_] / 2)
    }
  }
  return t
}