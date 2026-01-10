/** Chunk was on 81985 **/
/** chunk id: 82888, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk522474 = require("./522474.js"),
  Chunk595519 = require("./595519.js"),
  Chunk317381 = require("./317381.js"),
  Chunk16609 = require("./16609.js"),
  Chunk917107 = require("./917107.js"),
  Chunk9145 = require("./9145.jsx"),
  Chunk918559 = require("./918559.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  let {
    maxHeight: t,
    renderExternalHeader: n
  } = e, {
    connectedChannelId: f,
    connectedActivity: h,
    activityPanelMode: g
  } = (0, i.cj)([o.ZP], () => {
    let e = o.ZP.getConnectedActivityLocation(),
      t = o.ZP.getSelfEmbeddedActivityForLocation(e);
    return {
      connectedChannelId: (0, s.p)(e),
      connectedActivity: t,
      activityPanelMode: o.ZP.getActivityPanelMode()
    }
  }), m = (0, i.e7)([l.Z], () => l.Z.getWindowOpen(p.KJ3.ACTIVITY_POPOUT));
  if (!(0, a.NX)(f)) return null;
  let b = null == h ? true : h.applicationId;
  return g !== d.Ez.PANEL || null == b || m || null == f || null == h || (0, c.Z)(f) ? null : (0, r.jsx)(u.Z, {
    maxHeight: t,
    connectedLocation: h.location,
    renderExternalHeader: n
  })
}