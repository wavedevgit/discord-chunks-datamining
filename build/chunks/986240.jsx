/** Chunk was on web.js **/
/** chunk id: 986240, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk980463 = require("./980463.js"),
  Chunk328908 = require("./328908.js"),
  Chunk992970 = require("./992970.js"),
  Chunk135793 = require("./135793.jsx"),
  Chunk576645 = require("./576645.js"),
  Chunk84040 = require("./84040.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e, t) {
  let n = (0, d.Z)(t),
    h = e.hasPotions(),
    m = (0, u.Nt)(),
    g = i.useCallback(n => {
      try {
        (0, a.qc)(t.id, e.id, n)
      } catch (e) {
        (0, o.showToast)((0, o.createToast)(p.intl.string(p.t.xsfC2d), o.ToastType.FAILURE))
      }
    }, [t.id, e.id]),
    E = i.useCallback(() => {
      f.default.track(_.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, {
        location: l.MG.MessageContextMenu
      }), (0, c.s)({
        channelId: t.id,
        message: e,
        onRedeem: g,
        onClose: s.Qy,
        source: l.YD.MessageContextMenu
      })
    }, [t.id, e, g]);
  return n && !h && m ? <o.sNh id={"add-confetti-potion"} label={p.intl.string(p.t.icaJW1)} icon={o.l22} action={E} /> : null
}