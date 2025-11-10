/** Chunk was on 384 **/
/** chunk id: 845995, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk246946 = require("./246946.js"),
  Chunk999382 = require("./999382.js"),
  Chunk270394 = require("./270394.jsx");
let d = function() {
  let e = (0, Chunk399606.e7)([Chunk246946.Z], () => Chunk246946.Z.hideInstantInvites),
    {
      invites: t,
      guild: n
    } = (0, Chunk399606.cj)([Chunk999382.Z], () => Chunk999382.Z.getProps(), []),
    {
      analyticsLocations: d
    } = (0, Chunk906732.ZP)(Chunk100527.Z.GUILD_SETTINGS_PROFILE_PAGE);
  return (0, Chunk951288.jsx)(Chunk906732.Gt, {
    value: d,
    children: (0, Chunk951288.jsx)(Chunk270394.Z, {
      invites: exports,
      guild: require,
      showChannel: true,
      hide: module,
      withV2Actions: true,
      canCreateInvites: true
    })
  })
}