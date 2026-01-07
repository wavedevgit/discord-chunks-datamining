/** Chunk was on 9536 **/
/** chunk id: 845995, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk246946 = require("./246946.js"),
  Chunk999382 = require("./999382.js"),
  Chunk270394 = require("./270394.jsx");
let d = function() {
  let e = (0, i.e7)([s.Z], () => s.Z.hideInstantInvites),
    {
      invites: t,
      guild: n
    } = (0, i.cj)([o.Z], () => o.Z.getProps(), []),
    {
      analyticsLocations: d
    } = (0, a.ZP)(l.Z.GUILD_SETTINGS_PROFILE_PAGE);
  return (0, r.jsx)(a.Gt, {
    value: d,
    children: (0, r.jsx)(c.Z, {
      invites: t,
      guild: n,
      showChannel: true,
      hide: e,
      withV2Actions: true,
      canCreateInvites: true
    })
  })
}