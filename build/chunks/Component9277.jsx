/** Chunk was on web.js **/
/** chunk id: 9277, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
    type: o,
    channel: v
  } = e, [S, I] = i.useState(false), T = (0, l.e7)([p.Z], () => {
    var e, t;
    return S && Object.values(null != (t = null == (e = p.Z.frecencyWithoutFetchingLatest.favoriteGifs) ? true : e.gifs) ? t : {}).length <= 2
  }), [C, A, N, P] = (0, f.Iu)(e => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], s.X), R = i.useRef(0), w = i.useCallback(() => {
    I(true), clearTimeout(R.current), R.current = setTimeout(() => {
      I(false), R.current = 0
    }, 2e3)
  }, []);
  (0, _.yp)({
    event: E.CkL.FAVORITE_GIF,
    handler: w
  });
  let D = i.useCallback(() => {
      (0, f.RO)(b.X1.GIF, o, v.id)
    }, [o, v.id]),
    {
      Component: x,
      events: L,
      play: j
    } = (0, c.V)(),
    M = (0, m.v)(d.O),
    k = o === h.Ie.NORMAL ? M : true;
  if (n) return null;
  let U = C === b.X1.GIF && A === o && P === v.id;
  return (0, r.jsx)(u.u, {
    keyboardShortcut: T ? true : k,
    text: y.intl.string(T ? y.t.mE2e8A : y.t.nffuyb),
    shouldShow: T || null != k,
    forceOpen: T,
    children: (0, r.jsx)("div", {
      ref: t,
      className: a()(b.CT, O.buttonContainer),
      children: (0, r.jsx)(g.Z, {
        className: O.button,
        onMouseEnter: L.onMouseEnter,
        onMouseLeave: L.onMouseLeave,
        onClick: () => {
          D(), j()
        },
        isActive: U,
        pulse: S,
        "aria-label": y.intl.string(y.t.PtVpk2),
        "aria-expanded": U,
        "aria-haspopup": "dialog",
        "aria-controls": N,
        children: (0, r.jsx)(x, {
          size: "refresh_sm",
          color: "currentColor"
        })
      })
    })
  })
}
let S = Chunk473749.memo(Chunk473749.forwardRef(v))