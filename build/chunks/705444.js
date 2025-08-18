/** Chunk was on 1272 **/
/** chunk id: 705444, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk243814 = require("./243814.js"),
  Chunk570140 = require("./570140.js"),
  Chunk569984 = require("./569984.js"),
  Chunk996106 = require("./996106.js"),
  Chunk914946 = require("./914946.js"),
  Chunk981631 = require("./981631.js");
let c = {
  [Chunk981631.Etm.GET_QUEST_ENROLLMENT_STATUS]: {
    scope: Chunk243814.x.IDENTIFY,
    handler(e) {
      var t, n, r;
      let {
        socket: i,
        args: {
          quest_id: c
        }
      } = e;
      (0, o.bu)(i.transport);
      let u = (0, o._f)(i.application),
        d = l.Z.getQuest(c);
      if (null == d || d.config.application.id !== u) throw new a.Z({
        errorCode: s.lTL.INVALID_COMMAND
      }, "Quest not found: ".concat(c));
      return {
        quest_id: c,
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
      (0, o.bu)(n.transport);
      let c = (0, o._f)(n.application),
        u = l.Z.getQuest(r);
      if (null == u || u.config.application.id !== c) throw new a.Z({
        errorCode: s.lTL.INVALID_COMMAND
      }, "Quest not found: ".concat(r));
      if ((null == (t = u.userStatus) ? true : t.enrolledAt) == null) throw new a.Z({
        errorCode: s.lTL.INVALID_COMMAND
      }, "User is not enrolled in quest");
      return i.Z.dispatch({
        type: "QUEST_APPLICATION_START_TIMER",
        questId: r,
        applicationId: c
      }), {
        success: true
      }
    }
  }
}