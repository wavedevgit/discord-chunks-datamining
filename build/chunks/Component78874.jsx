/** Chunk was on 98335 **/
/** chunk id: 78874, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594190 = require("./594190.js"),
  Chunk757266 = require("./757266.js"),
  Chunk283595 = require("./283595.js"),
  Chunk417363 = require("./417363.js"),
  Chunk804739 = require("./804739.js"),
  Chunk346329 = require("./346329.js"),
  Chunk592745 = require("./592745.js"),
  Chunk388032 = require("./388032.jsx");

function p(t, e) {
  let n = (0, i.e7)([a.ZP], () => a.ZP.getRunningVerifiedApplicationIds().includes(t.id), [t.id]),
    p = (0, i.e7)([o.Z, b.Z, u.Z, c.Z], () => (0, s.t)({
      LibraryApplicationStore: o.Z,
      LaunchableGameStore: b.Z,
      DispatchApplicationStore: u.Z,
      ConnectedAppsStore: c.Z,
      applicationId: t.id,
      branchId: t.branchId
    }), [t.branchId, t.id]);
  return n || !p ? null : (0, r.jsx)(l.sNh, {
    id: "launch",
    label: f.intl.string(f.t.XKUw8m),
    action: () => d.playApplication(t.id, t, {
      analyticsParams: {
        location: e
      }
    })
  })
}