/** Chunk was on 1272 **/
/** chunk id: 705444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk243814 = require("./243814.js"),
  Chunk570140 = require("./570140.js"),
  Chunk569984 = require("./569984.js"),
  Chunk626135 = require("./626135.js"),
  Chunk996106 = require("./996106.js"),
  Chunk914946 = require("./914946.js"),
  Chunk981631 = require("./981631.js");
let u = {
  [Chunk981631.Etm.GET_QUEST_ENROLLMENT_STATUS]: {
    scope: Chunk243814.x.IDENTIFY,
    handler(e) {
      var t, n, r;
      let {
        socket: i,
        args: {
          quest_id: a
        }
      } = e;
      (0, s.bu)(i.transport);
      let u = (0, s._f)(i.application),
        d = l.Z.getQuest(a);
      if (null == d || d.config.application.id !== u) throw new o.Z({
        errorCode: c.lTL.INVALID_COMMAND
      }, "Quest not found: ".concat(a));
      return {
        quest_id: a,
        is_enrolled: (null == (t = d.userStatus) ? true : t.enrolledAt) != null,
        enrolled_at: null != (r = null == (n = d.userStatus) ? true : n.enrolledAt) ? r : null
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
      (0, s.bu)(n.transport);
      let u = (0, s._f)(n.application),
        d = l.Z.getQuest(r);
      if (null == d || d.config.application.id !== u) throw new o.Z({
        errorCode: c.lTL.INVALID_COMMAND
      }, "Quest not found: ".concat(r));
      if ((null == (t = d.userStatus) ? true : t.enrolledAt) == null) throw new o.Z({
        errorCode: c.lTL.INVALID_COMMAND
      }, "User is not enrolled in quest");
      return a.default.track(c.rMx.RPC_QUEST_START_TIMER_CALLED, {
        application_id: u,
        quest_id: r
      }), i.Z.dispatch({
        type: "QUEST_APPLICATION_START_TIMER",
        questId: r,
        applicationId: u
      }), {
        success: true
      }
    }
  }
}