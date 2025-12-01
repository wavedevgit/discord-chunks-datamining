/** Chunk was on web.js **/
/** chunk id: 9277, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk55160 = require("./55160.js"),
  Chunk442837 = require("./442837.js"),
  Chunk114101 = require("./114101.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk777019 = require("./777019.js"),
  Chunk28546 = require("./28546.js"),
  Chunk581883 = require("./581883.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk713913 = require("./713913.js"),
  Chunk541716 = require("./541716.js"),
  Chunk443603 = require("./443603.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk957825 = require("./957825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk564355 = require("./564355.js");

function v(e, t) {
  let {
    disabled: n,
    type: a
  } = e, [v, S] = i.useState(false), I = (0, l.e7)([p.Z], () => {
    var e, t;
    return v && Object.values(null != (t = null == (e = p.Z.frecencyWithoutFetchingLatest.favoriteGifs) ? true : e.gifs) ? t : {}).length <= 2
  }), [T, A, C] = (0, f.Iu)(e => [e.activeView, e.activeViewType, e.pickerId], s.X), N = i.useRef(0), P = i.useCallback(() => {
    S(true), clearTimeout(N.current), N.current = setTimeout(() => {
      S(false), N.current = 0
    }, 2e3)
  }, []);
  (0, _.yp)({
    event: E.CkL.FAVORITE_GIF,
    handler: P
  });
  let R = i.useCallback(() => {
      (0, f.RO)(b.X1.GIF, a)
    }, [a]),
    {
      Component: w,
      events: D,
      play: x
    } = (0, c.V)(),
    L = (0, m.v)(d.O),
    j = a === h.Ie.NORMAL ? L : true;
  if (n) return null;
  let M = T === b.X1.GIF && A === a;
  return (0, r.jsx)(u.u, {
    keyboardShortcut: I ? true : j,
    text: y.intl.string(I ? y.t.mE2e8A : y.t.nffuyb),
    shouldShow: I || null != j,
    forceOpen: I,
    children: (0, r.jsx)("div", {
      ref: t,
      className: o()(b.CT, O.buttonContainer),
      children: (0, r.jsx)(g.Z, {
        className: O.button,
        onMouseEnter: D.onMouseEnter,
        onMouseLeave: D.onMouseLeave,
        onClick: () => {
          R(), x()
        },
        isActive: M,
        pulse: v,
        "aria-label": y.intl.string(y.t.PtVpk2),
        "aria-expanded": M,
        "aria-haspopup": "dialog",
        "aria-controls": C,
        children: (0, r.jsx)(w, {
          size: "refresh_sm",
          color: "currentColor"
        })
      })
    })
  })
}
let S = Chunk473749.memo(Chunk473749.forwardRef(v))