/** Chunk was on 93886 **/
a.d(t, {
  q: () => l,
  v: () => r
});
var n = a(570140);
let r = (e, t) => {
  n.Z.wait(() => {
    n.Z.dispatch({
      type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
      guildId: e,
      premiumCount: t
    })
  })
};

function l() {
  n.Z.dispatch({
    type: "APPLIED_GUILD_BOOST_COUNT_RESET"
  })
}