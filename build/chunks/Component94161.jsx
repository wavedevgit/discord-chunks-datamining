/** Chunk was on web.js **/
/** chunk id: 94161, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk55160 = require("./55160.js"),
  Chunk318766 = require("./318766.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk541716 = require("./541716.js"),
  Chunk957825 = require("./957825.js"),
  Chunk744114 = require("./744114.js");

function _(e, t) {
  let {
    disabled: n,
    type: a,
    pickerView: _ = d.X1.EMOJI
  } = e, [p, h, m] = (0, c.Iu)(e => [e.activeView, e.activeViewType, e.pickerId], s.X), g = i.useCallback(() => {
    (0, c.RO)(_, a)
  }, [a, _]);
  return n ? null : (0, r.jsx)("div", {
    className: o()(d.CT, f.buttonContainer),
    ref: t,
    children: (0, r.jsx)(l.Z, {
      className: f.emojiButton,
      onClick: g,
      active: p === _ && h === a,
      "aria-controls": m,
      tabIndex: 0,
      focusProps: {
        offset: {
          top: 4,
          bottom: 4,
          left: false,
          right: false
        }
      },
      allowKeybindHint: a === u.Ie.NORMAL
    })
  })
}
let p = Chunk473749.memo(Chunk473749.forwardRef(_))