/** Chunk was on web.js **/
/** chunk id: 838324, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk942381 = require("./942381.js"),
  Chunk877991 = require("./877991.js"),
  Chunk375499 = require("./375499.jsx"),
  Chunk151271 = require("./151271.js"),
  Chunk184761 = require("./184761.js"),
  Chunk355622 = require("./355622.js"),
  Chunk698279 = require("./698279.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk111314 = require("./111314.js");

function m(e, t) {
  let {
    disabled: n,
    type: a,
    channelId: m,
    pickerView: g = p.kx.EMOJI
  } = e, [E, b, y, O] = (0, u.RQ)(e => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], o.x), A = (0, d.p)(l.L), v = a === f.oU.NORMAL, {
    tooltipsWithKeybinds: S,
    expressionsCombinedIntoEmojiButton: I
  } = d.C.useConfig({
    location: "EmojiButton"
  }), T = I ? true : v ? A : true, C = S && I && v ? _.intl.string(_.t.DSBQ6F) : true, N = i.useCallback(() => {
    (0, u.r$)(g, a, m)
  }, [a, g, m]);
  return n ? null : (0, r.jsx)("div", {
    className: s()(p.VQ, h.UD),
    ref: t,
    children: (0, r.jsx)(c.A, {
      "aria-label": C,
      tooltipText: C,
      className: h.Z8,
      onClick: N,
      active: E === g && b === a && O === m,
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
      keyboardShortcut: T,
      canShowNUXPremiumTooltip: v
    })
  })
}
let g = Chunk64700.memo(Chunk64700.forwardRef(m))