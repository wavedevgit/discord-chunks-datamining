/** Chunk was on 32098 (8d42f73987ffffd5.js) **/
n.d(t, {
  Z: () => l
});
var r = n(981631),
  i = n(388032);

function l(e) {
  let {
    channel: t,
    embeddedApps: n
  } = e;
  if (t.type === r.d4z.GUILD_VOICE) {
    if (null == n || !(n.length > 0)) return;
    {
      let e = n.map(e => e.application.name);
      return i.NW.formatToPlainString(i.t.LmYuHR, {
        activeActivities: e.join(", ")
      })
    }
  }
}