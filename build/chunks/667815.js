/** Chunk was on 32098 (809533fdbc51a5c1.js) **/
n.d(t, {
  v: () => i
});
var r = n(570140);
let i = (e, t) => {
  r.Z.wait(() => {
    r.Z.dispatch({
      type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
      guildId: e,
      premiumCount: t
    })
  })
}