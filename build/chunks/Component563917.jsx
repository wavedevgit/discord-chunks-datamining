/** Chunk was on 66866 **/
/** chunk id: 563917, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk447543 = require("./447543.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk792766 = require("./792766.jsx"),
  Chunk955415 = require("./955415.jsx");
let u = e => {
  let {
    invite: t,
    stageInstance: n,
    guild: u,
    message: d,
    isMember: p,
    onTransitionToInviteChannel: m,
    onAcceptInstantInvite: f
  } = e, {
    analyticsLocations: _
  } = (0, o.ZP)(a.Z.INVITE_EMBED), g = i.useCallback(() => {
    let e = "noop";
    p ? (m(), e = "transition") : (f(), e = "accept"), (0, l.r$)({
      invite: t,
      action: e,
      inviter_id: d.author.id,
      invite_message_id: d.id
    }, _)
  }, [t, d, _, p, m, f]);
  return (0, r.jsx)(c.Z, {
    children: (0, r.jsx)(s.Z, {
      isEmbed: true,
      stageInstance: n,
      guild: u,
      onClick: g
    })
  })
}