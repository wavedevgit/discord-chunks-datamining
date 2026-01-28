/** Chunk was on web.js **/
/** chunk id: 184264, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk942381 = require("./942381.js"),
  Chunk311907 = require("./311907.js"),
  Chunk3203 = require("./3203.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk151271 = require("./151271.js"),
  Chunk617617 = require("./617617.js"),
  Chunk234320 = require("./234320.jsx"),
  Chunk545428 = require("./545428.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk698279 = require("./698279.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk111314 = require("./111314.js");

function y(e, t) {
  let {
    disabled: n,
    type: a,
    channel: y
  } = e, [b, O] = i.useState(false), v = (0, l.bG)([f.A], () => {
    var e, t;
    return b && Object.values(null != (e = null == (t = f.A.frecencyWithoutFetchingLatest.favoriteGifs) ? true : t.gifs) ? e : {}).length <= 2
  }), [A, I, S, T] = (0, d.RQ)(e => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], s.x), C = i.useRef(0), N = i.useCallback(() => {
    O(true), clearTimeout(C.current), C.current = setTimeout(() => {
      O(false), C.current = 0
    }, 2e3)
  }, []);
  (0, p.Vo)({
    event: h.jej.FAVORITE_GIF,
    handler: N
  });
  let w = i.useCallback(() => {
      (0, d.r$)(m.kx.GIF, a, y.id)
    }, [a, y.id]),
    {
      Component: R,
      events: P,
      play: D
    } = (0, c.V)();
  if (n) return null;
  let L = A === m.kx.GIF && I === a && T === y.id;
  return (0, r.jsx)(u.m, {
    text: g.intl.string(v ? g.t.mE2e8A : g.t.nffuyb),
    shouldShow: v,
    forceOpen: v,
    children: (0, r.jsx)("div", {
      ref: t,
      className: o()(m.VQ, E.UD),
      children: (0, r.jsx)(_.A, {
        className: E.x6,
        onMouseEnter: P.onMouseEnter,
        onMouseLeave: P.onMouseLeave,
        onClick: () => {
          w(), D()
        },
        isActive: L,
        pulse: b,
        "aria-label": g.intl.string(g.t.PtVpk2),
        "aria-expanded": L,
        "aria-haspopup": "dialog",
        "aria-controls": S,
        children: (0, r.jsx)(R, {
          size: "refresh_sm",
          color: "currentColor"
        })
      })
    })
  })
}
let b = Chunk64700.memo(Chunk64700.forwardRef(y))