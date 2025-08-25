/** Chunk was on web.js **/
/** chunk id: 655678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk328908 = require("./328908.js"),
  Chunk992970 = require("./992970.js"),
  Chunk443603 = require("./443603.jsx"),
  Chunk957825 = require("./957825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk564355 = require("./564355.js");

function p(e, t) {
  let {
    disabled: n,
    channel: o
  } = e, p = (0, l.LN)(o.id), h = i.useCallback(() => {
    (0, l.Rg)(o.id, c.MG.MessageComposerButtons)
  }, [o.id]);
  return n ? null : (0, r.jsx)("div", {
    className: a()(d.CT, _.buttonContainer),
    ref: t,
    children: (0, r.jsx)(u.Z, {
      className: a()(_.button, _.messageConfettiButton),
      childClassName: a()(_.messageConfettiIcon, {
        [_.active]: p
      }),
      onClick: h,
      isActive: p,
      "aria-label": f.intl.string(f.t.yvN8bG),
      "aria-haspopup": "false",
      children: (0, r.jsx)(s.l22, {
        size: "refresh_sm",
        color: "currentColor"
      })
    })
  })
}
let h = Chunk647438.memo(Chunk647438.forwardRef(p))