/** Chunk was on 32098 (8d42f73987ffffd5.js) **/
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