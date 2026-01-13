/** Chunk was on 1272 **/
/** chunk id: 986768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => d
});
var Chunk317381 = require("./317381.js"),
  Chunk107105 = require("./107105.js"),
  Chunk591472 = require("./591472.js"),
  Chunk616022 = require("./616022.js"),
  Chunk254579 = require("./254579.js");
require("./817938.js");
var Chunk238679 = require("./238679.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js");

function d(e, t, n) {
  var d, p, f, g, h, m, b, _;
  switch (t) {
    case c.zMe.ACTIVITY_PIP_MODE_UPDATE: {
      let t = null == (d = e.application) ? true : d.id,
        n = null != t ? r.ZP.getLayoutModeForApp(t) : null;
      return null != n ? {
        is_pip_mode: n !== u.cE.FOCUSED
      } : null
    }
    case c.zMe.ACTIVITY_LAYOUT_MODE_UPDATE: {
      let t = null == (p = e.application) ? true : p.id,
        n = null != t ? r.ZP.getLayoutModeForApp(t) : null;
      return null != n ? {
        layout_mode: n
      } : null
    }
    case c.zMe.FRAME_LAYOUT_MODE_UPDATE: {
      let t = null != (null == (f = e.application) ? true : f.id) ? null == (g = l.Z.getConnectedFrame()) ? true : g.layoutMode : null;
      return null != t ? {
        layout_mode: t
      } : null
    }
    case c.zMe.THERMAL_STATE_UPDATE: {
      let e = (0, i.bY)();
      if (e === i.bG.UNHANDLED) return null;
      return {
        thermal_state: e
      }
    }
    case c.zMe.ORIENTATION_UPDATE:
      return null;
    case c.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
      return (0, s.dO)();
    case c.zMe.QUEST_ENROLLMENT_STATUS_UPDATE: {
      let {
        quest_id: t
      } = n;
      if (!t) return null;
      let r = a.Z.getQuest(t),
        i = (0, o.nY)(r);
      if (null == r || null == i || i !== (null == (h = e.application) ? true : h.id)) return null;
      return {
        quest_id: t,
        is_enrolled: (null == (m = r.userStatus) ? true : m.enrolledAt) != null,
        enrolled_at: null != (_ = null == (b = r.userStatus) ? true : b.enrolledAt) ? _ : null
      }
    }
    default:
      return null
  }
}