/** Chunk was on 1272 **/
/** chunk id: 705444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk243814 = require("./243814.js"),
  Chunk570140 = require("./570140.js"),
  Chunk616022 = require("./616022.js"),
  Chunk254579 = require("./254579.js"),
  Chunk626135 = require("./626135.js"),
  Chunk996106 = require("./996106.js"),
  Chunk914946 = require("./914946.js"),
  Chunk981631 = require("./981631.js");
let d = {
  [Chunk981631.Etm.GET_QUEST_ENROLLMENT_STATUS]: {
    scope: Chunk243814.x.IDENTIFY,
    handler(e) {
      var t, n, r;
      let {
        socket: i,
        args: {
          quest_id: s
        }
      } = e;
      (0, c.bu)(i.transport);
      let d = (0, c._f)(i.application),
        p = l.Z.getQuest(s),
        f = (0, a.nY)(p);
      if (null == p || null == f || f !== d) throw new o.Z({
        errorCode: u.lTL.INVALID_COMMAND
      }, "Quest not found: ".concat(s));
      return {
        quest_id: s,
        is_enrolled: (null == (t = p.userStatus) ? true : t.enrolledAt) != null,
        enrolled_at: null != (r = null == (n = p.userStatus) ? true : n.enrolledAt) ? r : null
      }
    }
  },
  [Chunk981631.Etm.QUEST_START_TIMER]: {
    scope: Chunk243814.x.IDENTIFY,
    handler(e) {
      var t;
      let {
        socket: n,
        args: {
          quest_id: r
        }
      } = e;
      (0, c.bu)(n.transport);
      let d = (0, c._f)(n.application),
        p = l.Z.getQuest(r),
        f = (0, a.Mo)(p);
      if (null == p || null == f || f !== d) throw new o.Z({
        errorCode: u.lTL.INVALID_COMMAND
      }, "Quest not found: ".concat(r));
      if ((null == (t = p.userStatus) ? true : t.enrolledAt) == null) throw new o.Z({
        errorCode: u.lTL.INVALID_COMMAND
      }, "User is not enrolled in quest");
      return s.default.track(u.rMx.RPC_QUEST_START_TIMER_CALLED, {
        application_id: d,
        quest_id: r
      }), i.Z.dispatch({
        type: "QUEST_APPLICATION_START_TIMER",
        questId: r,
        applicationId: d
      }), {
        success: true
      }
    }
  }
}