/** Chunk was on 21738 **/
/** chunk id: 105130, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => d
});
var Chunk933958 = require("./933958.js"),
  Chunk663278 = require("./663278.js"),
  Chunk91242 = require("./91242.js"),
  Chunk859703 = require("./859703.js"),
  Chunk792620 = require("./792620.js");
require("./590889.js");
var Chunk592653 = require("./592653.js"),
  Chunk652215 = require("./652215.js"),
  Chunk360469 = require("./360469.js");

function d(e, t, n) {
  var d, p, h, g, f, m, A, _;
  switch (t) {
    case c.ZE4.ACTIVITY_PIP_MODE_UPDATE: {
      let t = null == (d = e.application) ? true : d.id,
        n = null != t ? r.Ay.getLayoutModeForApp(t) : null;
      return null != n ? {
        is_pip_mode: n !== u.bN.FOCUSED
      } : null
    }
    case c.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE: {
      let t = null == (p = e.application) ? true : p.id,
        n = null != t ? r.Ay.getLayoutModeForApp(t) : null;
      return null != n ? {
        layout_mode: n
      } : null
    }
    case c.ZE4.FRAME_LAYOUT_MODE_UPDATE: {
      let t = null != (null == (h = e.application) ? true : h.id) ? null == (g = l.A.getConnectedFrame()) ? true : g.layoutMode : null;
      return null != t ? {
        layout_mode: t
      } : null
    }
    case c.ZE4.THERMAL_STATE_UPDATE: {
      let e = (0, i.zw)();
      if (e === i.MW.UNHANDLED) return null;
      return {
        thermal_state: e
      }
    }
    case c.ZE4.ORIENTATION_UPDATE:
      return null;
    case c.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
      return (0, o.Y$)();
    case c.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE: {
      let {
        quest_id: t
      } = n;
      if (!t) return null;
      let r = a.A.getQuest(t),
        i = (0, s.TP)(r);
      if (null == r || null == i || i !== (null == (m = e.application) ? true : m.id)) return null;
      return {
        quest_id: t,
        is_enrolled: (null == (A = r.userStatus) ? true : A.enrolledAt) != null,
        enrolled_at: null != (f = null == (_ = r.userStatus) ? true : _.enrolledAt) ? f : null
      }
    }
    default:
      return null
  }
}