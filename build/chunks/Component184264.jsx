/** Chunk was on web.js **/
/** chunk id: 184264, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk942381 = require("./942381.js"),
  Chunk311907 = require("./311907.js"),
  Chunk3203 = require("./3203.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk332779 = require("./332779.js"),
  Chunk151271 = require("./151271.js"),
  Chunk617617 = require("./617617.js"),
  Chunk234320 = require("./234320.jsx"),
  Chunk184761 = require("./184761.js"),
  Chunk355622 = require("./355622.js"),
  Chunk545428 = require("./545428.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk698279 = require("./698279.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk111314 = require("./111314.js");

function A(e, t) {
  let {
    disabled: n,
    type: a,
    channel: A
  } = e, [v, S] = i.useState(false), I = (0, l.bG)([p.A], () => {
    var e, t;
    return v && Object.values(null != (e = null == (t = p.A.frecencyWithoutFetchingLatest.favoriteGifs) ? true : t.gifs) ? e : {}).length <= 2
  }), [T, C, N, R] = (0, f.RQ)(e => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], o.x), w = i.useRef(0), P = i.useCallback(() => {
    S(true), clearTimeout(w.current), w.current = setTimeout(() => {
      S(false), w.current = 0
    }, 2e3)
  }, []);
  (0, _.Vo)({
    event: E.jej.FAVORITE_GIF,
    handler: P
  });
  let D = i.useCallback(() => {
      (0, f.r$)(b.kx.GIF, a, A.id)
    }, [a, A.id]),
    {
      Component: x,
      events: L,
      play: j
    } = (0, c.V)(),
    M = (0, h.p)(d.T),
    k = a === m.oU.NORMAL ? M : true;
  if (n) return null;
  let U = T === b.kx.GIF && C === a && R === A.id;
  return (0, r.jsx)(u.m, {
    keyboardShortcut: I ? true : k,
    text: y.intl.string(I ? y.t.mE2e8A : y.t.nffuyb),
    shouldShow: I || null != k,
    forceOpen: I,
    children: (0, r.jsx)("div", {
      ref: t,
      className: s()(b.VQ, O.UD),
      children: (0, r.jsx)(g.A, {
        className: O.x6,
        onMouseEnter: L.onMouseEnter,
        onMouseLeave: L.onMouseLeave,
        onClick: () => {
          D(), j()
        },
        isActive: U,
        pulse: v,
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
let v = Chunk64700.memo(Chunk64700.forwardRef(A))