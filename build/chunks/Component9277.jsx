/** Chunk was on web.js **/
/** chunk id: 9277, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk574583 = require("./574583.js"),
  Chunk442837 = require("./442837.js"),
  Chunk114101 = require("./114101.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk581883 = require("./581883.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk443603 = require("./443603.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk957825 = require("./957825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk564355 = require("./564355.js");

function b(e, t) {
  let {
    disabled: n,
    type: a
  } = e, [b, y] = i.useState(false), O = (0, l.e7)([f.Z], () => {
    var e, t;
    return b && Object.values(null != (t = null == (e = f.Z.frecencyWithoutFetchingLatest.favoriteGifs) ? true : e.gifs) ? t : {}).length <= 2
  }), [v, I, S] = (0, d.Iu)(e => [e.activeView, e.activeViewType, e.pickerId], s.X), T = i.useRef(0), A = i.useCallback(() => {
    y(true), clearTimeout(T.current), T.current = setTimeout(() => {
      y(false), T.current = 0
    }, 2e3)
  }, []);
  (0, _.yp)({
    event: h.CkL.FAVORITE_GIF,
    handler: A
  });
  let C = i.useCallback(() => {
      (0, d.RO)(m.X1.GIF, a)
    }, [a]),
    {
      Component: N,
      events: R,
      play: P
    } = (0, c.V)();
  if (n) return null;
  let w = v === m.X1.GIF && I === a;
  return (0, r.jsx)(u.u, {
    text: O ? g.intl.string(g.t.mE2e8A) : null,
    forceOpen: true,
    children: (0, r.jsx)("div", {
      ref: t,
      className: o()(m.CT, E.buttonContainer),
      children: (0, r.jsx)(p.Z, {
        className: E.button,
        onMouseEnter: R.onMouseEnter,
        onMouseLeave: R.onMouseLeave,
        onClick: () => {
          C(), P()
        },
        isActive: w,
        pulse: b,
        "aria-label": g.intl.string(g.t.PtVpk2),
        "aria-expanded": w,
        "aria-haspopup": "dialog",
        "aria-controls": S,
        children: (0, r.jsx)(N, {
          size: "refresh_sm",
          color: "currentColor"
        })
      })
    })
  })
}
let y = Chunk647438.memo(Chunk647438.forwardRef(b))