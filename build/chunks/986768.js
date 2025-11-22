/** Chunk was on 1272 **/
/** chunk id: 986768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => u
});
var Chunk317381 = require("./317381.js"),
  Chunk107105 = require("./107105.js"),
  Chunk616022 = require("./616022.js"),
  Chunk509212 = require("./509212.js");
require("./817938.js");
var Chunk238679 = require("./238679.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js");

function u(e, t, n) {
  var u, d, p, f, h, g;
  switch (t) {
    case o.zMe.ACTIVITY_PIP_MODE_UPDATE: {
      let t = null == (u = e.application) ? true : u.id,
        n = null != t ? r.ZP.getLayoutModeForApp(t) : null;
      return null != n ? {
        is_pip_mode: n !== c.cE.FOCUSED
      } : null
    }
    case o.zMe.ACTIVITY_LAYOUT_MODE_UPDATE: {
      let t = null == (d = e.application) ? true : d.id,
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
      return (0, s.dO)();
    case o.zMe.QUEST_ENROLLMENT_STATUS_UPDATE: {
      let {
        quest_id: t
      } = n;
      if (!t) return null;
      let r = l.Z.getQuest(t),
        i = (0, a.nY)(r);
      if (null == r || null == i || i !== (null == (p = e.application) ? true : p.id)) return null;
      return {
        quest_id: t,
        is_enrolled: (null == (f = r.userStatus) ? true : f.enrolledAt) != null,
        enrolled_at: null != (g = null == (h = r.userStatus) ? true : h.enrolledAt) ? g : null
      }
    }
    default:
      return null
  }
}