/** Chunk was on web.js **/
/** chunk id: 638704, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk559751 = require("./559751.js"),
  Chunk499702 = require("./499702.js"),
  Chunk264816 = require("./264816.js"),
  Chunk140851 = require("./140851.js");

function s(e) {
  var t, n = e.reference,
    s = e.element,
    l = e.placement,
    c = l ? (0, r.A)(l) : null,
    u = l ? (0, i.A)(l) : null,
    d = n.x + n.width / 2 - s.width / 2,
    f = n.y + n.height / 2 - s.height / 2;
  switch (c) {
    case o.Mn:
      t = {
        x: d,
        y: n.y - s.height
      };
      break;
    case o.sQ:
      t = {
        x: d,
        y: n.y + n.height
      };
      break;
    case o.pG:
      t = {
        x: n.x + n.width,
        y: f
      };
      break;
    case o.kb:
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
  var p = c ? (0, a.A)(c) : null;
  if (null != p) {
    var _ = "y" === p ? "height" : "width";
    switch (u) {
      case o.ni:
        t[p] = t[p] - (n[_] / 2 - s[_] / 2);
        break;
      case o._N:
        t[p] = t[p] + (n[_] / 2 - s[_] / 2)
    }
  }
  return t
}