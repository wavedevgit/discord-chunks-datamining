/** Chunk was on web.js **/
/** chunk id: 29909, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk68405 = require("./68405.js"),
  Chunk985375 = require("./985375.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk401944 = require("./401944.js");
let h = Chunk473749.memo(function(e) {
  let {
    width: t,
    height: n,
    src: a,
    url: h,
    format: m,
    className: g
  } = e, [E, b] = i.useState(false), y = (0, u.hb)((0, c.iy)(h)), O = y ? _.intl.string(_.t["5/NS74"]) : _.intl.string(_.t.nIH0v8), v = y ? l.r7p : l.vxU;
  i.useEffect(() => {
    if (!E) return;
    let e = setTimeout(() => {
      b(false)
    }, 500);
    return () => clearTimeout(e)
  }, [E]);
  let I = e => {
    e.preventDefault(), e.stopPropagation(), b(true), y ? (0, c.PF)(h) : ((0, c.uL)({
      url: h,
      src: a,
      width: t,
      height: n,
      format: m
    }), d.S.dispatch(f.CkL.FAVORITE_GIF))
  };
  return (0, r.jsx)(s.u, {
    text: O,
    children: (0, r.jsx)(l.kL8, {
      "aria-label": O,
      className: o()(g, p.gifFavoriteButton, {
        [p.selected]: y,
        [p.showPulse]: E
      }),
      onMouseDown: e => e.preventDefault(),
      onClick: I,
      onDoubleClick: e => e.preventDefault(),
      children: (0, r.jsx)(v, {
        color: "currentColor",
        className: p.icon,
        size: "custom",
        width: 20,
        height: 20
      })
    })
  })
})