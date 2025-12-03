/** Chunk was on 384 **/
/** chunk id: 845995, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk246946 = require("./246946.js"),
  Chunk999382 = require("./999382.js"),
  Chunk270394 = require("./270394.jsx");
let u = function() {
  let e = (0, Chunk399606.e7)([Chunk246946.Z], () => Chunk246946.Z.hideInstantInvites),
    {
      invites: t,
      guild: n
    } = (0, Chunk399606.cj)([Chunk999382.Z], () => Chunk999382.Z.getProps(), []),
    {
      analyticsLocations: u
    } = (0, Chunk906732.ZP)(Chunk100527.Z.GUILD_SETTINGS_PROFILE_PAGE);
  return (0, Chunk54381.jsx)(Chunk906732.Gt, {
    value: u,
    children: (0, Chunk54381.jsx)(Chunk270394.Z, {
      invites: exports,
      guild: require,
      showChannel: true,
      hide: module,
      withV2Actions: true,
      canCreateInvites: true
    })
  })
}