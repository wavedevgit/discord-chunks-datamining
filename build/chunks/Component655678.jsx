/** Chunk was on web.js **/
/** chunk id: 655678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk328908 = require("./328908.js"),
  Chunk992970 = require("./992970.js"),
  Chunk443603 = require("./443603.jsx"),
  Chunk957825 = require("./957825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk72775 = require("./72775.js");

function _(e, t) {
  let {
    disabled: n,
    channel: a
  } = e, _ = (0, l.LN)(a.id), m = i.useCallback(() => {
    (0, l.Rg)(a.id, c.MG.MessageComposerButtons)
  }, [a.id]);
  return n ? null : (0, r.jsx)("div", {
    className: o()(d.CT, p.buttonContainer),
    ref: t,
    children: (0, r.jsx)(u.Z, {
      className: o()(p.button, p.messageConfettiButton),
      childClassName: o()(p.messageConfettiIcon, {
        [p.active]: _
      }),
      onClick: m,
      isActive: _,
      "aria-label": f.intl.string(f.t.yvN8bE),
      "aria-haspopup": "false",
      children: (0, r.jsx)(s.l22, {
        size: "refresh_sm",
        color: "currentColor"
      })
    })
  })
}
let m = Chunk473749.memo(Chunk473749.forwardRef(_))