/** Chunk was on 25222 **/
t.d(n, {
  W: () => a
});
var o = t(493683),
  r = t(122613);
async function a(e) {
  let {
    appId: n,
    botId: t,
    analyticsLocations: a,
    customId: i,
    referrerId: c
  } = e, l = await o.Z.openPrivateChannel(t);
  return await (0, r.Z)({
    targetApplicationId: n,
    channelId: l,
    analyticsLocations: a,
    customId: i,
    referrerId: c
  })
}