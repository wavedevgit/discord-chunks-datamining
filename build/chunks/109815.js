/** Chunk was on 1272 **/
/** chunk id: 109815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => d,
  Z: () => p
});
var Chunk570140 = require("./570140.js"),
  Chunk447543 = require("./447543.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk998502 = require("./998502.js"),
  Chunk996106 = require("./996106.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js");
async function d(e, t) {
  let {
    invite: n
  } = await i.ZP.resolveInvite(e, t);
  if (null == n) throw new o.Z({
    errorCode: u.lTL.INVALID_INVITE
  }, "Invalid invite id: ".concat(e));
  return a.default.isAuthenticated() ? r.Z.dispatch({
    type: "INVITE_MODAL_OPEN",
    invite: n,
    code: e,
    context: u.IlC.APP
  }) : (0, l.dL)(u.Z5c.INVITE(e)), s.ZP.focus(), {
    invite: n,
    code: e
  }
}
let p = {
  [Chunk981631.Etm.OPEN_INVITE]: {
    scope: Chunk186901.lH,
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