/** Chunk was on 76030 **/
n.d(t, {
  W: () => a
});
var r = n(493683),
  i = n(122613);
async function a(e) {
  let {
    appId: t,
    botId: n,
    analyticsLocations: a,
    customId: o,
    referrerId: l
  } = e, s = await r.Z.openPrivateChannel(n);
  return await (0, i.Z)({
    targetApplicationId: t,
    channelId: s,
    analyticsLocations: a,
    customId: o,
    referrerId: l
  })
}