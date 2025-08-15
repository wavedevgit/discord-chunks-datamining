/** Chunk was on web.js **/
/** chunk id: 94161, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk94171 = require("./94171.js"),
  Chunk318766 = require("./318766.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk957825 = require("./957825.js"),
  Chunk564355 = require("./564355.js");

function f(e, t) {
  let {
    disabled: n,
    type: a
  } = e, [f, _, p] = (0, c.Iu)(e => [e.activeView, e.activeViewType, e.pickerId], s.X), h = i.useCallback(() => {
    (0, c.RO)(u.X1.EMOJI, a)
  }, [a]);
  return n ? null : (0, r.jsx)("div", {
    className: o()(u.CT, d.buttonContainer),
    ref: t,
    children: (0, r.jsx)(l.Z, {
      className: d.emojiButton,
      onClick: h,
      active: f === u.X1.EMOJI && _ === a,
      "aria-controls": p,
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
}
let _ = Chunk73800.memo(Chunk73800.forwardRef(f))