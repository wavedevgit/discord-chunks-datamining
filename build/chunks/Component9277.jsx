/** Chunk was on web.js **/
/** chunk id: 9277, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk574583 = require("./574583.js"),
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
  } = e, [v, I] = i.useState(false), T = (0, l.e7)([_.Z], () => {
    var e, t;
    return v && Object.values(null != (t = null == (e = _.Z.frecencyWithoutFetchingLatest.favoriteGifs) ? true : e.gifs) ? t : {}).length <= 2
  }), [S, A, C] = (0, f.Iu)(e => [e.activeView, e.activeViewType, e.pickerId], s.X), N = i.useRef(0), R = i.useCallback(() => {
    I(true), clearTimeout(N.current), N.current = setTimeout(() => {
      I(false), N.current = 0
    }, 2e3)
  }, []);
  (0, p.yp)({
    event: E.CkL.FAVORITE_GIF,
    handler: R
  });
  let P = i.useCallback(() => {
      (0, f.RO)(b.X1.GIF, a)
    }, [a]),
    {
      Component: D,
      events: w,
      play: x
    } = (0, c.V)(),
    L = (0, h.v)(d.O),
    M = a === m.Ie.NORMAL ? L : true;
  if (n) return null;
  let j = S === b.X1.GIF && A === a;
  return (0, r.jsx)(u.u, {
    keyboardShortcut: T ? true : M,
    text: y.intl.string(T ? y.t.mE2e8A : y.t.nffuyb),
    shouldShow: T || null != M,
    forceOpen: T,
    children: (0, r.jsx)("div", {
      ref: t,
      className: o()(b.CT, O.buttonContainer),
      children: (0, r.jsx)(g.Z, {
        className: O.button,
        onMouseEnter: w.onMouseEnter,
        onMouseLeave: w.onMouseLeave,
        onClick: () => {
          P(), x()
        },
        isActive: j,
        pulse: v,
        "aria-label": y.intl.string(y.t.PtVpk2),
        "aria-expanded": j,
        "aria-haspopup": "dialog",
        "aria-controls": C,
        children: (0, r.jsx)(D, {
          size: "refresh_sm",
          color: "currentColor"
        })
      })
    })
  })
}
let I = Chunk647438.memo(Chunk647438.forwardRef(v))