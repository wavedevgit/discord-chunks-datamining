/** Chunk was on web.js **/
/** chunk id: 94161, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk55160 = require("./55160.js"),
  Chunk679080 = require("./679080.js"),
  Chunk318766 = require("./318766.jsx"),
  Chunk28546 = require("./28546.js"),
  Chunk713913 = require("./713913.js"),
  Chunk541716 = require("./541716.js"),
  Chunk957825 = require("./957825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk564355 = require("./564355.js");

function m(e, t) {
  let {
    disabled: n,
    type: a,
    pickerView: m = _.X1.EMOJI
  } = e, [g, E, b] = (0, u.Iu)(e => [e.activeView, e.activeViewType, e.pickerId], s.X), y = (0, d.v)(l.S), O = a === f.Ie.NORMAL, {
    tooltipsWithKeybinds: v,
    expressionsCombinedIntoEmojiButton: I
  } = d.n.useConfig({
    location: "EmojiButton"
  }), T = I ? true : O ? y : true, S = v && I && O ? p.intl.string(p.t.DSBQ6F) : true, A = i.useCallback(() => {
    (0, u.RO)(m, a)
  }, [a, m]);
  return n ? null : (0, r.jsx)("div", {
    className: o()(_.CT, h.buttonContainer),
    ref: t,
    children: (0, r.jsx)(c.Z, {
      "aria-label": S,
      tooltipText: S,
      className: h.emojiButton,
      onClick: A,
      active: g === m && E === a,
      "aria-controls": b,
      tabIndex: 0,
      focusProps: {
        offset: {
          top: 4,
          bottom: 4,
          left: false,
          right: false
        }
      },
      keyboardShortcut: T,
      canShowNUXPremiumTooltip: O
    })
  })
}
let g = Chunk473749.memo(Chunk473749.forwardRef(m))