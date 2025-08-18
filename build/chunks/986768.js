/** Chunk was on 1272 **/
/** chunk id: 986768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => c
});
var Chunk317381 = require("./317381.js"),
  Chunk107105 = require("./107105.js"),
  Chunk569984 = require("./569984.js");
require("./817938.js");
var Chunk238679 = require("./238679.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js");

function c(e, t, n) {
  var c, u, d, p, f, h;
  switch (t) {
    case o.zMe.ACTIVITY_PIP_MODE_UPDATE: {
      let t = null == (c = e.application) ? true : c.id,
        n = null != t ? r.ZP.getLayoutModeForApp(t) : null;
      return null != n ? {
        is_pip_mode: n !== s.cE.FOCUSED
      } : null
    }
    case o.zMe.ACTIVITY_LAYOUT_MODE_UPDATE: {
      let t = null == (u = e.application) ? true : u.id,
        n = null != t ? r.ZP.getLayoutModeForApp(t) : null;
      return null != n ? {
        layout_mode: n
      } : null
    }
    case o.zMe.THERMAL_STATE_UPDATE: {
      let e = (0, i.bY)();
      if (e === i.bG.UNHANDLED) return null;
      return {
        thermal_state: e
      }
    }
    case o.zMe.ORIENTATION_UPDATE:
      return null;
    case o.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
      return (0, a.dO)();
    case o.zMe.QUEST_ENROLLMENT_STATUS_UPDATE: {
      let {
        quest_id: t
      } = n;
      if (!t) return null;
      let r = l.Z.getQuest(t);
      if (null == r || r.config.application.id !== (null == (d = e.application) ? true : d.id)) return null;
      return {
        quest_id: t,
        is_enrolled: (null == (p = r.userStatus) ? true : p.enrolledAt) != null,
        enrolled_at: null != (h = null == (f = r.userStatus) ? true : f.enrolledAt) ? h : null
      }
    }
    default:
      return null
  }
}