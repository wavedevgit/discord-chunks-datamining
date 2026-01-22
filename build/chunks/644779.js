/** Chunk was on 21738 **/
/** chunk id: 644779, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk636401 = require("./636401.js"),
  Chunk629471 = require("./629471.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
let o = {
  [Chunk652215.e$_.SET_CONFIG]: {
    scope: Chunk613057.VH,
    validation: e => (0, l.A)(e).required().keys({
      use_interactive_pip: e.boolean()
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          use_interactive_pip: n
        }
      } = e;
      if (t.transport !== a.z4.POST_MESSAGE) throw new i.A({
        errorCode: s.Lw6.INVALID_COMMAND
      }, 'command not available from "'.concat(t.transport, " transport"));
      if (null == t.application.id) throw new i.A({
        errorCode: s.Lw6.INVALID_COMMAND
      }, "invalid application");
      return r.h.dispatch({
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