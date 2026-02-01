/** Chunk was on 93169 **/
/** chunk id: 810845, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk401843 = require("./401843.js"),
  Chunk574172 = require("./574172.js"),
  Chunk911900 = require("./911900.js"),
  Chunk313961 = require("./313961.js"),
  Chunk806931 = require("./806931.js"),
  Chunk985018 = require("./985018.jsx");

function g(e, t) {
  let {
    enabled: n
  } = u.A.useConfig({
    location: "useCallTilePopoutItem"
  }), g = (0, l.bG)([c.A], () => c.A.getParticipant(e, t)), b = (0, l.bG)([c.A], () => c.A.isParticipantPoppedOut(e, t)), p = r.useCallback(() => {
    null != g && ((0, A.Ay)(g) && (0, o.A9)(g.stream, {
      forceMultiple: true
    }), s.A.popoutParticipant(e, g.id), d.openCallTilePopout(e, g.id))
  }, [g, e]);
  return b || null == g || !n || g.type === A.lp.ACTIVITY ? null : (0, i.jsx)(a.Drp, {
    id: "call-tile-popout",
    label: (0, A.Ay)(g) ? f.intl.string(f.t.Cm4aDQ) : null != g.streamId ? f.intl.string(f.t["8Xyas9"]) : f.intl.string(f.t.ifpl2s),
    action: p,
    icon: a.tfB,
    leadingAccessory: {
      type: "icon",
      icon: a.tfB
    }
  })
}