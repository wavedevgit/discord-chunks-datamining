/** Chunk was on 21738 **/
/** chunk id: 103949, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk179771 = require("./179771.js"),
  Chunk73153 = require("./73153.js"),
  Chunk859703 = require("./859703.js"),
  Chunk792620 = require("./792620.js"),
  Chunk954571 = require("./954571.js"),
  Chunk636401 = require("./636401.js"),
  Chunk90924 = require("./90924.js"),
  Chunk652215 = require("./652215.js");
let d = {
  [Chunk652215.e$_.GET_QUEST_ENROLLMENT_STATUS]: {
    scope: Chunk179771.F.IDENTIFY,
    handler(e) {
      var t, n, r;
      let {
        socket: i,
        args: {
          quest_id: s
        }
      } = e;
      (0, c.lG)(i.transport);
      let d = (0, c.D2)(i.application),
        p = l.A.getQuest(s),
        h = (0, a.TP)(p);
      if (null == p || null == h || h !== d) throw new o.A({
        errorCode: u.Lw6.INVALID_COMMAND
      }, "Quest not found: ".concat(s));
      return {
        quest_id: s,
        is_enrolled: (null == (n = p.userStatus) ? true : n.enrolledAt) != null,
        enrolled_at: null != (t = null == (r = p.userStatus) ? true : r.enrolledAt) ? t : null
      }
    }
  },
  [Chunk652215.e$_.QUEST_START_TIMER]: {
    scope: Chunk179771.F.IDENTIFY,
    handler(e) {
      var t;
      let {
        socket: n,
        args: {
          quest_id: r
        }
      } = e;
      (0, c.lG)(n.transport);
      let d = (0, c.D2)(n.application),
        p = l.A.getQuest(r),
        h = (0, a.vS)(p);
      if (null == p || null == h || h !== d) throw new o.A({
        errorCode: u.Lw6.INVALID_COMMAND
      }, "Quest not found: ".concat(r));
      if ((null == (t = p.userStatus) ? true : t.enrolledAt) == null) throw new o.A({
        errorCode: u.Lw6.INVALID_COMMAND
      }, "User is not enrolled in quest");
      return s.default.track(u.HAw.RPC_QUEST_START_TIMER_CALLED, {
        application_id: d,
        quest_id: r
      }), i.h.dispatch({
        type: "QUEST_APPLICATION_START_TIMER",
        questId: r,
        applicationId: d
      }), {
        success: true
      }
    }
  }
}