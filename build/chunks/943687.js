/** Chunk was on 1272 **/
/** chunk id: 943687, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => s
}), require("./388685.js");
var Chunk243814 = require("./243814.js"),
  Chunk569984 = require("./569984.js"),
  Chunk996106 = require("./996106.js"),
  Chunk452426 = require("./452426.js"),
  Chunk981631 = require("./981631.js");
let s = {
  [Chunk981631.zMe.QUEST_ENROLLMENT_STATUS_UPDATE]: {
    scope: Chunk243814.x.IDENTIFY,
    validation: e => (0, a.Z)(e).required().keys({
      quest_id: e.string().required()
    }),
    handler: function(e) {
      let {
        args: {
          quest_id: t
        },
        socket: n
      } = e, r = i.Z.getQuest(t);
      if (null == r || r.config.application.id !== n.application.id) throw new l.Z({
        errorCode: o.lTL.INVALID_COMMAND
      }, "Quest not found: ".concat(t))
    }
  }
}