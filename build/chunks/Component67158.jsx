/** Chunk was on 193 **/
/** chunk id: 67158, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk55160 = require("./55160.js"),
  Chunk318766 = require("./318766.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk957825 = require("./957825.js"),
  Chunk72775 = require("./72775.js");
let m = Chunk473749.memo(Chunk473749.forwardRef(function(e, t) {
  let {
    disabled: n,
    type: i,
    className: m,
    onClick: f,
    channel: h
  } = e, [g, x, b] = (0, c.Iu)(e => [e.activeView, e.activeViewType, e.activeChannelId], s.X), p = r.useCallback(() => {
    (0, c.j9)(i, h.id), null == f || f()
  }, [i, f, h.id]);
  return n ? null : (0, a.jsx)("div", {
    className: l()(d.CT, u.buttonContainer),
    ref: t,
    children: (0, a.jsx)(o.Z, {
      className: l()(u.emojiButton, m),
      onClick: p,
      active: (g === d.X1.GIF || g === d.X1.EMOJI || g === d.X1.STICKER) && x === i && b === h.id,
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