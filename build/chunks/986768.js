/** Chunk was on 1272 **/
/** chunk id: 986768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => s
});
var Chunk317381 = require("./317381.js"),
  Chunk107105 = require("./107105.js");
require("./817938.js");
var Chunk238679 = require("./238679.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js");

function s(e, t, n) {
  var s, c;
  switch (t) {
    case a.zMe.ACTIVITY_PIP_MODE_UPDATE: {
      let t = null == (s = e.application) ? true : s.id,
        n = null != t ? r.ZP.getLayoutModeForApp(t) : null;
      return null != n ? {
        is_pip_mode: n !== o.cE.FOCUSED
      } : null
    }
    case a.zMe.ACTIVITY_LAYOUT_MODE_UPDATE: {
      let t = null == (c = e.application) ? true : c.id,
        n = null != t ? r.ZP.getLayoutModeForApp(t) : null;
      return null != n ? {
        layout_mode: n
      } : null
    }
    case a.zMe.THERMAL_STATE_UPDATE: {
      let e = (0, i.bY)();
      if (e === i.bG.UNHANDLED) return null;
      return {
        thermal_state: e
      }
    }
    case a.zMe.ORIENTATION_UPDATE:
      return null;
    case a.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
      return (0, l.dO)();
    default:
      return null
  }
}