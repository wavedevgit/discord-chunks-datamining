/** Chunk was on web.js **/
/** chunk id: 184264, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
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

function v(e, t) {
  let {
    disabled: n,
    type: a,
    channel: v
  } = e, [A, I] = i.useState(false), S = (0, l.bG)([p.A], () => {
    var e, t;
    return A && Object.values(null != (e = null == (t = p.A.frecencyWithoutFetchingLatest.favoriteGifs) ? true : t.gifs) ? e : {}).length <= 2
  }), [T, C, N, w] = (0, f.RQ)(e => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], o.x), R = i.useRef(0), P = i.useCallback(() => {
    I(true), clearTimeout(R.current), R.current = setTimeout(() => {
      I(false), R.current = 0
    }, 2e3)
  }, []);
  (0, _.Vo)({
    event: E.jej.FAVORITE_GIF,
    handler: P
  });
  let D = i.useCallback(() => {
      (0, f.r$)(y.kx.GIF, a, v.id)
    }, [a, v.id]),
    {
      Component: x,
      events: L,
      play: j
    } = (0, c.V)(),
    M = (0, h.p)(d.T),
    k = a === m.oU.NORMAL ? M : true;
  if (n) return null;
  let U = T === y.kx.GIF && C === a && w === v.id;
  return (0, r.jsx)(u.m, {
    keyboardShortcut: S ? true : k,
    text: b.intl.string(S ? b.t.mE2e8A : b.t.nffuyb),
    shouldShow: S || null != k,
    forceOpen: S,
    children: (0, r.jsx)("div", {
      ref: t,
      className: s()(y.VQ, O.UD),
      children: (0, r.jsx)(g.A, {
        className: O.x6,
        onMouseEnter: L.onMouseEnter,
        onMouseLeave: L.onMouseLeave,
        onClick: () => {
          D(), j()
        },
        isActive: U,
        pulse: A,
        "aria-label": b.intl.string(b.t.PtVpk2),
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
let A = Chunk64700.memo(Chunk64700.forwardRef(v))