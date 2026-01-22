/** Chunk was on 47841 **/
/** chunk id: 239484, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk351906 = require("./351906.js"),
  Chunk555337 = require("./555337.js"),
  Chunk328650 = require("./328650.jsx");
let d = function() {
  let e = (0, i.bG)([a.A], () => a.A.hideInstantInvites),
    {
      invites: t,
      guild: n
    } = (0, i.cf)([c.A], () => c.A.getProps(), []),
    {
      analyticsLocations: d
    } = (0, s.Ay)(l.A.GUILD_SETTINGS_PROFILE_PAGE);
  return (0, r.jsx)(s.f5, {
    value: d,
    children: (0, r.jsx)(o.A, {
      invites: t,
      guild: n,
      showChannel: true,
      hide: e,
      withV2Actions: true,
      canCreateInvites: true
    })
  })
}