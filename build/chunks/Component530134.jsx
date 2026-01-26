/** Chunk was on 46875 **/
/** chunk id: 530134, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk942381 = require("./942381.js"),
  Chunk375499 = require("./375499.jsx"),
  Chunk151271 = require("./151271.js"),
  Chunk698279 = require("./698279.js"),
  Chunk111314 = require("./111314.js");
let m = Chunk64700.memo(Chunk64700.forwardRef(function(e, t) {
  let {
    disabled: n,
    type: i,
    className: m,
    onClick: h,
    channel: g
  } = e, [f, x, p] = (0, c.RQ)(e => [e.activeView, e.activeViewType, e.activeChannelId], s.x), b = l.useCallback(() => {
    (0, c.ed)(i, g.id), null == h || h()
  }, [i, h, g.id]);
  return n ? null : (0, r.jsx)("div", {
    className: a()(d.VQ, u.UD),
    ref: t,
    children: (0, r.jsx)(o.A, {
      className: a()(u.Z8, m),
      onClick: b,
      active: (f === d.kx.GIF || f === d.kx.EMOJI || f === d.kx.STICKER) && x === i && p === g.id,
      tabIndex: 0,
      focusProps: {
        offset: {
          top: 4,
          bottom: 4,
          left: false,
          right: false
        }
      }
    })
  })
}))