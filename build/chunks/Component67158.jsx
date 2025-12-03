/** Chunk was on 9456 **/
/** chunk id: 67158, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk55160 = require("./55160.js"),
  Chunk318766 = require("./318766.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk957825 = require("./957825.js"),
  Chunk564355 = require("./564355.js");
let m = Chunk473749.memo(Chunk473749.forwardRef(function(e, t) {
  let {
    disabled: n,
    type: l,
    className: m,
    onClick: h,
    channel: g
  } = e, [f, x, p] = (0, c.Iu)(e => [e.activeView, e.activeViewType, e.activeChannelId], s.X), b = i.useCallback(() => {
    (0, c.j9)(l, g.id), null == h || h()
  }, [l, h, g.id]);
  return n ? null : (0, r.jsx)("div", {
    className: a()(d.CT, u.buttonContainer),
    ref: t,
    children: (0, r.jsx)(o.Z, {
      className: a()(u.emojiButton, m),
      onClick: b,
      active: (f === d.X1.GIF || f === d.X1.EMOJI || f === d.X1.STICKER) && x === l && p === g.id,
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