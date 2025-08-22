/** Chunk was on 93886 **/
/** chunk id: 667815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => l,
  v: () => r
});
var Chunk570140 = require("./570140.js");
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
  Chunk570140.Z.dispatch({
    type: "APPLIED_GUILD_BOOST_COUNT_RESET"
  })
}