/** Chunk was on 6502 **/
/** chunk id: 979766, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk687709 = require("./687709.js"),
  Chunk492841 = require("./492841.js"),
  Chunk145530 = require("./145530.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e, t) {
  return e.state !== o.cmJ.SEND_FAILED && (0, r.A)(e, t) ? false === e.pinned ? (0, i.jsx)(l.Drp, {
    id: "pin",
    action: function(n) {
      n.shiftKey ? s.A.pinMessage(t, e.id) : a.A.confirmPin(t, e)
    },
    label: c.intl.string(c.t.CvQ18w),
    leadingAccessory: {
      type: "icon",
      icon: l.tsw
    },
    icon: l.tsw
  }) : (0, i.jsx)(l.Drp, {
    id: "unpin",
    action: function(n) {
      n.shiftKey ? s.A.unpinMessage(t, e.id) : a.A.confirmUnpin(t, e)
    },
    label: c.intl.string(c.t["Bse+F/"]),
    leadingAccessory: {
      type: "icon",
      icon: l.tsw
    },
    icon: l.tsw
  }) : null
}