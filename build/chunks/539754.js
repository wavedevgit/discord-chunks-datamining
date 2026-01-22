/** Chunk was on 21738 **/
/** chunk id: 539754, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => c
}), require("./896048.js");
var Chunk179771 = require("./179771.js"),
  Chunk859703 = require("./859703.js"),
  Chunk792620 = require("./792620.js"),
  Chunk636401 = require("./636401.js"),
  Chunk629471 = require("./629471.js"),
  Chunk652215 = require("./652215.js");
let c = {
  [Chunk652215.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE]: {
    scope: Chunk179771.F.IDENTIFY,
    validation: e => (0, s.A)(e).required().keys({
      quest_id: e.string().required()
    }),
    handler: function(e) {
      let {
        args: {
          quest_id: t
        },
        socket: n
      } = e, r = i.A.getQuest(t), s = (0, l.TP)(r);
      if (null == r || null == s || s !== n.application.id) throw new a.A({
        errorCode: o.Lw6.INVALID_COMMAND
      }, "Quest not found: ".concat(t))
    }
  }
}