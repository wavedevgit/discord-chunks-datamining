/** Chunk was on 46875 **/
/** chunk id: 530134, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk942381 = require("./942381.js"),
  Chunk375499 = require("./375499.jsx"),
  Chunk151271 = require("./151271.js"),
  Chunk698279 = require("./698279.js"),
  Chunk111314 = require("./111314.js");
let m = Chunk64700.memo(Chunk64700.forwardRef(function(e, t) {
  let {
    disabled: n,
    type: a,
    className: m,
    onClick: h,
    channel: f
  } = e, [g, x, b] = (0, o.RQ)(e => [e.activeView, e.activeViewType, e.activeChannelId], s.x), p = r.useCallback(() => {
    (0, o.ed)(a, f.id), null == h || h()
  }, [a, h, f.id]);
  return n ? null : (0, l.jsx)("div", {
    className: i()(d.VQ, u.UD),
    ref: t,
    children: (0, l.jsx)(c.A, {
      className: i()(u.Z8, m),
      onClick: p,
      active: (g === d.kx.GIF || g === d.kx.EMOJI || g === d.kx.STICKER) && x === a && b === f.id,
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