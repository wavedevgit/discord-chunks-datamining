/** Chunk was on 93886 **/
n.d(t, {
  q: () => l,
  v: () => r
});
var a = n(570140);
let r = (e, t) => {
  a.Z.wait(() => {
    a.Z.dispatch({
      type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
      guildId: e,
      premiumCount: t
    })
  })
};

function l() {
  a.Z.dispatch({
    type: "APPLIED_GUILD_BOOST_COUNT_RESET"
  })
}