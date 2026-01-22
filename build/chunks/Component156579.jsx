/** Chunk was on 97492 **/
/** chunk id: 156579, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let {
    maxHeight: t,
    renderExternalHeader: n
  } = e, {
    connectedChannelId: p,
    connectedActivity: h,
    activityPanelMode: b
  } = (0, l.cf)([s.Ay], () => {
    let e = s.Ay.getConnectedActivityLocation(),
      t = s.Ay.getSelfEmbeddedActivityForLocation(e);
    return {
      connectedChannelId: (0, o.H)(e),
      connectedActivity: t,
      activityPanelMode: s.Ay.getActivityPanelMode()
    }
  }), g = (0, l.bG)([i.A], () => i.A.getWindowOpen(f.MLl.ACTIVITY_POPOUT));
  if (!(0, a.Gp)(p)) return null;
  let m = null == h ? true : h.applicationId;
  return b !== d.Gd.PANEL || null == m || g || null == p || null == h || (0, c.A)(p) ? null : (0, r.jsx)(u.A, {
    maxHeight: t,
    connectedLocation: h.location,
    renderExternalHeader: n
  })
}