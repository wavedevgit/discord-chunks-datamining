/** Chunk was on 37220 **/
/** chunk id: 986240, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function p(e, t) {
  let n = (0, d.Z)(t),
    p = e.hasPotions(),
    y = (0, u.Nt)(),
    O = i.useCallback(n => {
      try {
        (0, a.qc)(t.id, e.id, n)
      } catch (e) {
        (0, l.showToast)((0, l.createToast)(b.intl.string(b.t.xsfC2S), l.ToastType.FAILURE))
      }
    }, [t.id, e.id]),
    h = i.useCallback(() => {
      f.default.track(g.rMx.CONFETTI_POTION_ENTRYPOINT_CLICKED, {
        location: s.MG.MessageContextMenu
      }), (0, c.s)({
        channelId: t.id,
        message: e,
        onRedeem: O,
        onClose: o.Qy,
        source: s.YD.MessageContextMenu
      })
    }, [t.id, e, O]);
  return n && !p && y ? (0, r.jsx)(l.sNh, {
    id: "add-confetti-potion",
    label: b.intl.string(b.t.icaJW5),
    icon: l.l22,
    action: h
  }) : null
}