/** Chunk was on web.js **/
/** chunk id: 536639, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk332148 = require("./332148.js"),
  Chunk257559 = require("./257559.jsx"),
  Chunk151007 = require("./151007.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t) {
  function n(n) {
    n.shiftKey ? o.Z.pinMessage(t, e.id) : a.Z.confirmPin(t, e)
  }

  function u(n) {
    n.shiftKey ? o.Z.unpinMessage(t, e.id) : a.Z.confirmUnpin(t, e)
  }
  return e.state !== l.yb.SEND_FAILED && (0, s.Z)(e, t) ? false === e.pinned ? <i.sNh id={"pin"} action={n} label={c.intl.string(c.t["CvQ18/"])} icon={i.qQX} /> : <i.sNh id={"unpin"} action={u} label={c.intl.string(c.t["Bse+Fx"])} icon={i.qQX} /> : null
}