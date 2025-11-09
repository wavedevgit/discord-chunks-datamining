/** Chunk was on 76892 **/
/** chunk id: 67158, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk574583 = require("./574583.js"),
  Chunk318766 = require("./318766.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk957825 = require("./957825.js"),
  Chunk744114 = require("./744114.js");
let m = Chunk647438.memo(Chunk647438.forwardRef(function(e, t) {
  let {
    disabled: n,
    type: a,
    className: m,
    onClick: h
  } = e, [g, f] = (0, c.Iu)(e => [e.activeView, e.activeViewType], s.X), x = i.useCallback(() => {
    (0, c.j9)(a), null == h || h()
  }, [a, h]);
  return n ? null : (0, r.jsx)("div", {
    className: l()(d.CT, u.buttonContainer),
    ref: t,
    children: (0, r.jsx)(o.Z, {
      className: l()(u.emojiButton, m),
      onClick: x,
      active: (g === d.X1.GIF || g === d.X1.EMOJI || g === d.X1.STICKER) && f === a,
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