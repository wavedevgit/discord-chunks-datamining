/** Chunk was on 60677 **/
/** chunk id: 434500, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk872810 = require("./872810.js"),
  Chunk788983 = require("./788983.js"),
  Chunk629049 = require("./629049.js"),
  Chunk358221 = require("./358221.js"),
  Chunk354459 = require("./354459.js"),
  Chunk388032 = require("./388032.jsx");

function Z(e, t) {
  let {
    enabled: n
  } = c.Z.useConfig({
    location: "useCallTilePopoutItem"
  }), Z = (0, l.e7)([u.Z], () => u.Z.getParticipant(e, t)), m = (0, l.e7)([u.Z], () => u.Z.isParticipantPoppedOut(e, t)), p = r.useCallback(() => {
    null != Z && ((0, g._5)(Z) && (0, a.rn)(Z.stream, {
      forceMultiple: true
    }), s.Z.popoutParticipant(e, Z.id), d.openCallTilePopout(e, Z.id))
  }, [Z, e]);
  return m || null == Z || !n || Z.type === g.fO.ACTIVITY ? null : (0, i.jsx)(o.sNh, {
    id: "call-tile-popout",
    label: (0, g._5)(Z) ? f.intl.string(f.t.Cm4aDQ) : null != Z.streamId ? f.intl.string(f.t["8Xyas9"]) : f.intl.string(f.t.ifpl2s),
    action: p,
    icon: o.rgF
  })
}