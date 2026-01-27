/** Chunk was on web.js **/
/** chunk id: 447031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk587895 = require("./587895.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk811024 = require("./811024.js"),
  Chunk646865 = require("./646865.js"),
  Chunk795816 = require("./795816.js"),
  Chunk933958 = require("./933958.js"),
  Chunk945634 = require("./945634.js"),
  Chunk383497 = require("./383497.js"),
  Chunk969151 = require("./969151.js"),
  Chunk817636 = require("./817636.js"),
  Chunk574152 = require("./574152.js"),
  Chunk108959 = require("./108959.js"),
  Chunk90804 = require("./90804.js"),
  Chunk748975 = require("./748975.js"),
  Chunk360469 = require("./360469.js");

function b(e) {
  return (0, l.w)((0, l.f)(), () => O(e))
}
async function O(e) {
  let t, {
      applicationId: n,
      activityChannelId: l,
      locationObject: b,
      analyticsLocations: O,
      componentId: v,
      sectionName: A,
      source: I,
      inviterUserId: S,
      customId: T,
      referrerId: C
    } = e,
    N = (0, h.A)(),
    w = i.A.getChannel(l),
    R = null == w ? true : w.getGuildId(),
    P = null == R || "" === R,
    D = o.default.getCurrentUser();
  if (null == D) returnfalse;
  if (null == w || P && !w.isPrivate() || null == l) return Promise.resolve(false);
  let L = u.Ay.getCurrentEmbeddedActivity();
  if ((null == L ? true : L.applicationId) != null && (t = r.A.getApplication(null == L ? true : L.applicationId)), a.A.getVoiceChannelId() === l && null != L && L.applicationId === n && (0, p.H)(L.location) === a.A.getVoiceChannelId()) return (0, E.A)(R, L.location), Promise.resolve(true);
  let x = await (0, _.A)(n, l);
  if (!await (0, f.O)({
      applicationId: n,
      application: x,
      channel: w,
      currentEmbeddedApplication: t,
      embeddedActivitiesManager: N,
      user: D
    })) returnfalse;
  if (null != w) {
    let e = (0, m.A)(w.id),
      n = y.lk.includes(w.type);
    if (e) {
      if (!await (0, g.A)({
          channelId: w.id,
          bypassChangeModal: null != t
        })) returnfalse
    } else if (!(0, s.pE)(w) || !n) returnfalse
  } else if (null == w) returnfalse;
  return null != l && (0, d.A)(l), null != L && (0, c.rW)(L.location), await (0, c.su)({
    channelId: l,
    applicationId: n,
    isStart: false,
    embeddedActivitiesManager: N,
    analyticsLocations: O,
    locationObject: b,
    componentId: v,
    sectionName: A,
    source: I,
    inviterUserId: S,
    customId: T,
    referrerId: C
  })
}