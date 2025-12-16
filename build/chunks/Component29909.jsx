/** Chunk was on web.js **/
/** chunk id: 29909, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
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
  Chunk120031 = require("./120031.js");
let m = Chunk473749.memo(function(e) {
  let {
    width: t,
    height: n,
    src: a,
    gifSrc: m,
    url: h,
    format: g,
    className: E
  } = e, [b, y] = i.useState(false), O = (0, u.hb)((0, c.iy)(h)), v = O ? p.intl.string(p.t["5/NS74"]) : p.intl.string(p.t.nIH0v8), S = O ? l.r7p : l.vxU;
  i.useEffect(() => {
    if (!b) return;
    let e = setTimeout(() => {
      y(false)
    }, 500);
    return () => clearTimeout(e)
  }, [b]);
  let I = e => {
    e.preventDefault(), e.stopPropagation(), y(true), O ? (0, c.PF)(h) : ((0, c.uL)({
      url: h,
      src: a,
      gifSrc: m,
      width: t,
      height: n,
      format: g
    }), d.S.dispatch(f.CkL.FAVORITE_GIF))
  };
  return (0, r.jsx)(s.u, {
    text: v,
    children: (0, r.jsx)(l.kL8, {
      "aria-label": v,
      className: o()(E, _.gifFavoriteButton, {
        [_.selected]: O,
        [_.showPulse]: b
      }),
      onMouseDown: e => e.preventDefault(),
      onClick: I,
      onDoubleClick: e => e.preventDefault(),
      children: (0, r.jsx)(S, {
        color: "currentColor",
        className: _.icon,
        size: "custom",
        width: 20,
        height: 20
      })
    })
  })
})