/** Chunk was on web.js **/
/** chunk id: 563917, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
    isMember: f,
    onTransitionToInviteChannel: _,
    onAcceptInstantInvite: p
  } = e, {
    analyticsLocations: h
  } = (0, s.ZP)(a.Z.INVITE_EMBED), m = i.useCallback(() => {
    let e = "noop";
    f ? (_(), e = "transition") : (p(), e = "accept"), (0, o.r$)({
      invite: t,
      action: e,
      inviter_id: d.author.id,
      invite_message_id: d.id
    }, h)
  }, [t, d, h, f, _, p]);
  return (0, r.jsx)(c.Z, {
    children: (0, r.jsx)(l.Z, {
      isEmbed: true,
      stageInstance: n,
      guild: u,
      onClick: m
    })
  })
}