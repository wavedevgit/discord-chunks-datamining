/** Chunk was on web.js **/
/** chunk id: 638880, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk812206 = require("./812206.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk595519 = require("./595519.js"),
  Chunk636449 = require("./636449.js"),
  Chunk566620 = require("./566620.js"),
  Chunk317381 = require("./317381.js"),
  Chunk672181 = require("./672181.js"),
  Chunk882347 = require("./882347.js"),
  Chunk16609 = require("./16609.js"),
  Chunk224189 = require("./224189.js"),
  Chunk574952 = require("./574952.js"),
  Chunk917107 = require("./917107.js"),
  Chunk89425 = require("./89425.js"),
  Chunk197386 = require("./197386.js"),
  Chunk701488 = require("./701488.js");

function y(e) {
  return (0, l.C)((0, l.R)(), () => O(e))
}
async function O(e) {
  let t, {
      applicationId: n,
      activityChannelId: l,
      locationObject: y,
      analyticsLocations: O,
      componentId: v,
      sectionName: I,
      source: T,
      inviterUserId: S,
      customId: A,
      referrerId: C
    } = e,
    N = (0, h.Z)(),
    R = i.Z.getChannel(l),
    P = null == R ? true : R.getGuildId(),
    w = null == P || "" === P,
    D = o.default.getCurrentUser();
  if (null == D) returnfalse;
  if (null == R || w && !R.isPrivate() || null == l) return Promise.resolve(false);
  let L = u.ZP.getCurrentEmbeddedActivity();
  if ((null == L ? true : L.applicationId) != null && (t = r.Z.getApplication(null == L ? true : L.applicationId)), a.Z.getVoiceChannelId() === l && null != L && L.applicationId === n && (0, _.p)(L.location) === a.Z.getVoiceChannelId()) return (0, E.Z)(P, L.location), Promise.resolve(true);
  let x = await (0, p.Z)(n, l);
  if (!await (0, f.p)({
      applicationId: n,
      application: x,
      channel: R,
      currentEmbeddedApplication: t,
      embeddedActivitiesManager: N,
      user: D
    })) returnfalse;
  if (null != R) {
    let e = (0, m.Z)(R.id),
      n = b.wP.includes(R.type);
    if (e) {
      if (!await (0, g.Z)({
          channelId: R.id,
          bypassChangeModal: null != t
        })) returnfalse
    } else if (!(0, s.WS)(R) || !n) returnfalse
  } else if (null == R) returnfalse;
  return null != l && (0, d.Z)(l), null != L && (0, c.cG)(L.location), await (0, c.G6)({
    channelId: l,
    applicationId: n,
    isStart: false,
    embeddedActivitiesManager: N,
    analyticsLocations: O,
    locationObject: y,
    componentId: v,
    sectionName: I,
    source: T,
    inviterUserId: S,
    customId: A,
    referrerId: C
  })
}