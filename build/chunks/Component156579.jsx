/** Chunk was on 42402 **/
/** chunk id: 156579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk87001 = require("./87001.js"),
  Chunk811024 = require("./811024.js"),
  Chunk933958 = require("./933958.js"),
  Chunk969151 = require("./969151.js"),
  Chunk108959 = require("./108959.js"),
  Chunk829861 = require("./829861.jsx"),
  Chunk5867 = require("./5867.js"),
  Chunk652215 = require("./652215.js");

function h(e) {
  let {
    maxHeight: t,
    renderExternalHeader: n
  } = e, {
    connectedChannelId: h,
    connectedActivity: g,
    activityPanelMode: f
  } = (0, l.cf)([a.Ay], () => {
    let e = a.Ay.getConnectedActivityLocation(),
      t = a.Ay.getSelfEmbeddedActivityForLocation(e);
    return {
      connectedChannelId: (0, o.H)(e),
      connectedActivity: t,
      activityPanelMode: a.Ay.getActivityPanelMode()
    }
  }), m = (0, l.bG)([i.A], () => i.A.getWindowOpen(p.MLl.ACTIVITY_POPOUT));
  if (!(0, s.Gp)(h)) return null;
  let b = null == g ? true : g.applicationId;
  return f !== d.Gd.PANEL || null == b || m || null == h || null == g || (0, c.A)(h) ? null : (0, r.jsx)(u.A, {
    maxHeight: t,
    connectedLocation: g.location,
    renderExternalHeader: n
  })
}