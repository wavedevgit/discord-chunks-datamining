/** Chunk was on 1272 **/
/** chunk id: 934993, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk996106 = require("./996106.js"),
  Chunk452426 = require("./452426.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
let o = {
  [Chunk981631.Etm.SET_CONFIG]: {
    scope: Chunk186901.wE,
    validation: e => (0, l.Z)(e).required().keys({
      use_interactive_pip: e.boolean()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          use_interactive_pip: n
        }
      } = e;
      if (t.transport !== a.He.POST_MESSAGE) throw new i.Z({
        errorCode: s.lTL.INVALID_COMMAND
      }, 'command not available from "'.concat(t.transport, " transport"));
      if (null == t.application.id) throw new i.Z({
        errorCode: s.lTL.INVALID_COMMAND
      }, "invalid application");
      return r.Z.dispatch({
        type: "EMBEDDED_ACTIVITY_SET_CONFIG",
        applicationId: t.application.id,
        config: {
          useInteractivePIP: n
        }
      }), Promise.resolve({
        use_interactive_pip: n
      })
    }
  }
}