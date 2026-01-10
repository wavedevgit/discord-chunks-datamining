/** Chunk was on 76676 **/
/** chunk id: 536639, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk332148 = require("./332148.js"),
  Chunk151007 = require("./151007.js"),
  Chunk819514 = require("./819514.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t) {
  return e.state !== o.yb.SEND_FAILED && (0, r.Z)(e, t) ? false === e.pinned ? (0, i.jsx)(l.sNh, {
    id: "pin",
    action: function(n) {
      n.shiftKey ? s.Z.pinMessage(t, e.id) : a.Z.confirmPin(t, e)
    },
    label: u.intl.string(u.t.CvQ18w),
    icon: l.qQX
  }) : (0, i.jsx)(l.sNh, {
    id: "unpin",
    action: function(n) {
      n.shiftKey ? s.Z.unpinMessage(t, e.id) : a.Z.confirmUnpin(t, e)
    },
    label: u.intl.string(u.t["Bse+F/"]),
    icon: l.qQX
  }) : null
}