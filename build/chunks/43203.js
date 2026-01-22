/** Chunk was on 21738 **/
/** chunk id: 43203, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => d,
  A: () => p
});
var Chunk73153 = require("./73153.js"),
  Chunk846293 = require("./846293.js"),
  Chunk976860 = require("./976860.js"),
  Chunk961350 = require("./961350.js"),
  Chunk837921 = require("./837921.js"),
  Chunk636401 = require("./636401.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js");
async function d(e, t) {
  let {
    invite: n
  } = await i.Ay.resolveInvite(e, t);
  if (null == n) throw new o.A({
    errorCode: u.Lw6.INVALID_INVITE
  }, "Invalid invite id: ".concat(e));
  return a.default.isAuthenticated() ? r.h.dispatch({
    type: "INVITE_MODAL_OPEN",
    invite: n,
    code: e,
    context: u.BRT.APP
  }) : (0, l.bG)(u.BVt.INVITE(e)), s.Ay.focus(), {
    invite: n,
    code: e
  }
}
let p = {
  [Chunk652215.e$_.OPEN_INVITE]: {
    scope: Chunk613057.hj,
    async handler(e) {
      let {
        args: {
          code: t
        }
      } = e;
      await d(t, "RPC OPEN_INVITE Handler")
    }
  }
}