/** Chunk was on web.js **/
/** chunk id: 838324, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk942381 = require("./942381.js"),
  Chunk375499 = require("./375499.jsx"),
  Chunk151271 = require("./151271.js"),
  Chunk355622 = require("./355622.js"),
  Chunk698279 = require("./698279.js"),
  Chunk111314 = require("./111314.js");

function p(e, t) {
  let {
    disabled: n,
    type: a,
    channelId: p
  } = e, [_, h, m, g] = (0, c.RQ)(e => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], s.x), E = a === u.oU.NORMAL, y = i.useCallback(() => {
    (0, c.r$)(d.kx.EMOJI, a, p)
  }, [a, p]);
  return n ? null : (0, r.jsx)("div", {
    className: o()(d.VQ, f.UD),
    ref: t,
    children: (0, r.jsx)(l.A, {
      className: f.Z8,
      onClick: y,
      active: _ === d.kx.EMOJI && h === a && g === p,
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
      canShowNUXPremiumTooltip: E
    })
  })
}
let _ = Chunk64700.memo(Chunk64700.forwardRef(p))