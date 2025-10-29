/** Chunk was on 91053 **/
/** chunk id: 82888, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk522474 = require("./522474.js"),
  Chunk595519 = require("./595519.js"),
  Chunk317381 = require("./317381.js"),
  Chunk16609 = require("./16609.js"),
  Chunk917107 = require("./917107.js"),
  Chunk9145 = require("./9145.jsx"),
  Chunk918559 = require("./918559.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
  let {
    maxHeight: t,
    renderExternalHeader: n
  } = e, {
    connectedChannelId: p,
    connectedActivity: f,
    activityPanelMode: g
  } = (0, i.cj)([s.ZP], () => {
    let e = s.ZP.getConnectedActivityLocation(),
      t = s.ZP.getSelfEmbeddedActivityForLocation(e);
    return {
      connectedChannelId: (0, o.p)(e),
      connectedActivity: t,
      activityPanelMode: s.ZP.getActivityPanelMode()
    }
  }), m = (0, i.e7)([l.Z], () => l.Z.getWindowOpen(h.KJ3.ACTIVITY_POPOUT));
  if (!(0, a.NX)(p)) return null;
  let b = null == f ? true : f.applicationId;
  return g !== u.Ez.PANEL || null == b || m || null == p || null == f || (0, c.Z)(p) ? null : (0, r.jsx)(d.Z, {
    maxHeight: t,
    connectedLocation: f.location,
    renderExternalHeader: n
  })
}