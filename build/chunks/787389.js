/** Chunk was on web.js **/
/** chunk id: 787389, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk522305 = require("./522305.js"),
  Chunk627363 = require("./627363.js"),
  Chunk625180 = require("./625180.js"),
  Chunk91242 = require("./91242.js"),
  Chunk207371 = require("./207371.js"),
  Chunk933958 = require("./933958.js"),
  Chunk748975 = require("./748975.js"),
  Chunk165610 = require("./165610.js");

function p(e) {
  let {
    applicationId: t,
    analyticsLocations: n,
    runBeforeLaunchAttempt: p,
    runAfterLaunchAttempt: _
  } = e, {
    data: h
  } = (0, s.YY)(t), m = (0, i.bG)([u.Ay], () => u.Ay.getCurrentEmbeddedActivity()), g = (0, i.bG)([l.A], () => l.A.getConnectedFrame()), E = (0, c.e)(h);
  return r.useCallback(async () => {
    if (null == t || null == h) return;
    let e = null != m && m.applicationId === t;
    if (null != g && g.applicationId === t) return void o.A.updateFrameLayoutMode({
      applicationId: g.applicationId,
      layoutMode: f.y.FOCUSED
    });
    if (e) {
      let e = m.location;
      (0, d.A)("guild_id" in e ? e.guild_id : null, e);
      return
    }
    null == p || p();
    try {
      if (E) await o.A.launchFrame({
        applicationId: t
      });
      else {
        var r, i;
        (null == h || null == (r = h.bot) ? true : r.id) != null && await (0, a.Q)({
          appId: t,
          botId: null == h || null == (i = h.bot) ? true : i.id,
          analyticsLocations: null != n ? n : []
        })
      }
    } catch (e) {}
    null == _ || _()
  }, [n, h, t, E, m, g, _, p])
}