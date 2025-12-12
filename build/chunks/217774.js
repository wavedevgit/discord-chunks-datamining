/** Chunk was on web.js **/
/** chunk id: 217774, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk915346 = require("./915346.js"),
  Chunk728345 = require("./728345.js"),
  Chunk48131 = require("./48131.js"),
  Chunk591472 = require("./591472.js"),
  Chunk813370 = require("./813370.js"),
  Chunk317381 = require("./317381.js"),
  Chunk197386 = require("./197386.js"),
  Chunk408491 = require("./408491.js");

function p(e) {
  let {
    applicationId: t,
    analyticsLocations: n,
    runBeforeLaunchAttempt: p,
    runAfterLaunchAttempt: _
  } = e, {
    data: m
  } = (0, o.IX)(t), h = (0, i.e7)([u.ZP], () => u.ZP.getCurrentEmbeddedActivity()), g = (0, i.e7)([l.Z], () => l.Z.getConnectedFrame()), E = (0, c.A)(m);
  return r.useCallback(async () => {
    if (null == t || null == m) return;
    let e = null != h && h.applicationId === t;
    if (null != g && g.applicationId === t) return void s.Z.updateFrameLayoutMode({
      applicationId: g.applicationId,
      layoutMode: f.U.FOCUSED
    });
    if (e) {
      let e = h.location;
      (0, d.Z)("guild_id" in e ? e.guild_id : null, e);
      return
    }
    null == p || p();
    try {
      if (E) s.Z.launchFrame({
        applicationId: t
      });
      else {
        var r, i;
        (null == m || null == (r = m.bot) ? true : r.id) != null && await (0, a.W)({
          appId: t,
          botId: null == m || null == (i = m.bot) ? true : i.id,
          analyticsLocations: null != n ? n : []
        })
      }
    } catch (e) {}
    null == _ || _()
  }, [n, m, t, E, h, g, _, p])
}