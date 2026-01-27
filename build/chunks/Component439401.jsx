/** Chunk was on web.js **/
/** chunk id: 439401, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk497685 = require("./497685.js"),
  Chunk996566 = require("./996566.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk623665 = require("./623665.js");
let h = Chunk64700.memo(function(e) {
  let {
    width: t,
    height: n,
    src: a,
    gifSrc: h,
    url: m,
    format: g,
    className: E
  } = e, [y, b] = i.useState(false), O = (0, u.km)((0, c.xo)(m)), v = O ? p.intl.string(p.t["5/NS74"]) : p.intl.string(p.t.nIH0v8), A = O ? l.Gg5 : l.yA2;
  i.useEffect(() => {
    if (!y) return;
    let e = setTimeout(() => {
      b(false)
    }, 500);
    return () => clearTimeout(e)
  }, [y]);
  let I = e => {
    e.preventDefault(), e.stopPropagation(), b(true), O ? (0, c.Tr)(m) : ((0, c.wg)({
      url: m,
      src: a,
      gifSrc: h,
      width: t,
      height: n,
      format: g
    }), d._.dispatch(f.jej.FAVORITE_GIF))
  };
  return (0, r.jsx)(s.m, {
    text: v,
    children: (0, r.jsx)(l.sqX, {
      "aria-label": v,
      className: o()(E, _.jj, {
        [_.wH]: O,
        [_.TV]: y
      }),
      onMouseDown: e => e.preventDefault(),
      onClick: I,
      onDoubleClick: e => e.preventDefault(),
      children: (0, r.jsx)(A, {
        color: "currentColor",
        className: _.Kk,
        size: "custom",
        width: 20,
        height: 20
      })
    })
  })
})