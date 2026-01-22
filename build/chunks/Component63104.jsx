/** Chunk was on web.js **/
/** chunk id: 63104, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk317097 = require("./317097.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk7250 = require("./7250.js"),
  Chunk986558 = require("./986558.js");
let p = Chunk827734.A.unsafe_rawColors.PRIMARY_300,
  _ = Chunk827734.A.unsafe_rawColors.WHITE,
  h = Chunk827734.A.unsafe_rawColors.PRIMARY_630;

function m(e) {
  let {
    color: t,
    size: n,
    forcedIconColor: i,
    className: l,
    iconClassName: m
  } = e, [g, E] = (0, o.yK)([u.A], () => [u.A.desaturateUserColors, u.A.saturation]), b = (0, c.rdh)(p).hex(), y = null != t ? t : b, O = (0, s.$k)((0, s.LX)(y), false, g ? E : null), A = (0, c.rdh)(_).hex(), v = (0, c.rdh)(h).hex(), S = null != i ? i : (0, d.j)({
    backgroundColor: y,
    colors: [A, v]
  }), I = n / 8;
  return (0, r.jsx)("div", {
    style: {
      background: O,
      width: n,
      height: n,
      borderRadius: n,
      lineHeight: "".concat(n, "px")
    },
    className: l,
    children: (0, r.jsx)(c.qYV, {
      size: "custom",
      color: S,
      className: a()(f.w, m),
      width: n - 2 * I,
      height: n - 2 * I,
      style: {
        margin: I
      }
    })
  })
}