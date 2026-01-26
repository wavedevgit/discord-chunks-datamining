/** Chunk was on 84841 **/
/** chunk id: 810845, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e, t) {
  let {
    enabled: l
  } = s.A.useConfig({
    location: "useCallTilePopoutItem"
  }), p = (0, r.bG)([u.A], () => u.A.getParticipant(e, t)), b = (0, r.bG)([u.A], () => u.A.isParticipantPoppedOut(e, t)), f = i.useCallback(() => {
    null != p && ((0, A.Ay)(p) && (0, c.A9)(p.stream, {
      forceMultiple: true
    }), a.A.popoutParticipant(e, p.id), d.openCallTilePopout(e, p.id))
  }, [p, e]);
  return b || null == p || !l || p.type === A.lp.ACTIVITY ? null : (0, n.jsx)(o.Drp, {
    id: "call-tile-popout",
    label: (0, A.Ay)(p) ? g.intl.string(g.t.Cm4aDQ) : null != p.streamId ? g.intl.string(g.t["8Xyas9"]) : g.intl.string(g.t.ifpl2s),
    action: f,
    icon: o.tfB,
    leadingAccessory: {
      type: "icon",
      icon: o.tfB
    }
  })
}