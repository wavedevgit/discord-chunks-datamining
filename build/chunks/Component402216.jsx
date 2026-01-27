/** Chunk was on web.js **/
/** chunk id: 402216, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => _,
  ed: () => d,
  gv: () => u,
  u1: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk188618 = require("./188618.js"),
  u = function(e) {
    return e.RED = "RED", e.GRAY = "GRAY", e
  }({});
let d = {
    LARGE: Chunk188618.Kp,
    SMALL: Chunk188618.qx
  },
  f = {
    [Chunk397927.EGs.ROUND]: Chunk188618.qG,
    [Chunk397927.EGs.ROUND_LEFT]: Chunk188618.HZ,
    [Chunk397927.EGs.ROUND_RIGHT]: Chunk188618.q5,
    [Chunk397927.EGs.SQUARE]: ""
  };

function p(e) {
  let {
    className: t,
    style: n,
    shape: i = s.EGs.ROUND,
    look: u = "RED",
    size: p = d.LARGE
  } = e;
  return "RED" === u ? (0, r.jsx)(s.LpS, {
    text: l.intl.string(l.t.dI3q4h),
    className: a()(t, c.VD, p),
    color: o.A.unsafe_rawColors.RED_400.css,
    shape: f[i],
    style: n
  }) : (0, r.jsx)(s.LpS, {
    text: l.intl.string(l.t.dI3q4h),
    className: a()(t, c.VD, p, c.Oh),
    disableColor: true,
    shape: f[i],
    style: n
  })
}
p.Looks = u, p.Sizes = d;
let _ = p