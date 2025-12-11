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
  Chunk72775 = require("./72775.js");

function h(e, t) {
  let {
    disabled: n,
    type: a,
    channelId: h,
    pickerView: g = p.X1.EMOJI
  } = e, [E, b, y, O] = (0, u.Iu)(e => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], s.X), v = (0, d.v)(l.S), S = a === f.Ie.NORMAL, {
    tooltipsWithKeybinds: I,
    expressionsCombinedIntoEmojiButton: T
  } = d.n.useConfig({
    location: "EmojiButton"
  }), C = T ? true : S ? v : true, A = I && T && S ? _.intl.string(_.t.DSBQ6F) : true, N = i.useCallback(() => {
    (0, u.RO)(g, a, h)
  }, [a, g, h]);
  return n ? null : (0, r.jsx)("div", {
    className: o()(p.CT, m.buttonContainer),
    ref: t,
    children: (0, r.jsx)(c.Z, {
      "aria-label": A,
      tooltipText: A,
      className: m.emojiButton,
      onClick: N,
      active: E === g && b === a && O === h,
      "aria-controls": y,
      tabIndex: 0,
      focusProps: {
        offset: {
          top: 4,
          bottom: 4,
          left: false,
          right: false
        }
      },
      keyboardShortcut: C,
      canShowNUXPremiumTooltip: S
    })
  })
}
let g = Chunk473749.memo(Chunk473749.forwardRef(h))