/** Chunk was on 1272 **/
/** chunk id: 943687, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => c
}), require("./388685.js");
var Chunk243814 = require("./243814.js"),
  Chunk616022 = require("./616022.js"),
  Chunk509212 = require("./509212.js"),
  Chunk996106 = require("./996106.js"),
  Chunk452426 = require("./452426.js"),
  Chunk981631 = require("./981631.js");
let c = {
  [Chunk981631.zMe.QUEST_ENROLLMENT_STATUS_UPDATE]: {
    scope: Chunk243814.x.IDENTIFY,
    validation: e => (0, s.Z)(e).required().keys({
      quest_id: e.string().required()
    }),
    handler: function(e) {
      let {
        args: {
          quest_id: t
        },
        socket: n
      } = e, r = i.Z.getQuest(t), s = (0, l.nY)(r);
      if (null == r || null == s || s !== n.application.id) throw new a.Z({
        errorCode: o.lTL.INVALID_COMMAND
      }, "Quest not found: ".concat(t))
    }
  }
}