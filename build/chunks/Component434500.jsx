/** Chunk was on 66165 **/
/** chunk id: 434500, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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

function b(e, t) {
  let {
    enabled: n
  } = d.Z.useConfig({
    location: "useCallTilePopoutItem"
  }), b = (0, r.e7)([c.Z], () => c.Z.getParticipant(e, t)), Z = (0, r.e7)([c.Z], () => c.Z.isParticipantPoppedOut(e, t)), p = i.useCallback(() => {
    null != b && ((0, g._5)(b) && (0, s.rn)(b.stream, {
      forceMultiple: true
    }), o.Z.popoutParticipant(e, b.id), u.openCallTilePopout(e, b.id))
  }, [b, e]);
  return Z || null == b || !n || b.type === g.fO.ACTIVITY ? null : (0, l.jsx)(a.sNh, {
    id: "call-tile-popout",
    label: (0, g._5)(b) ? f.intl.string(f.t.Cm4aDQ) : null != b.streamId ? f.intl.string(f.t["8Xyas9"]) : f.intl.string(f.t.ifpl2s),
    action: p,
    icon: a.rgF
  })
}