/** Chunk was on 93886 **/
/** chunk id: 667815, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  q: () => l,
  v: () => i
});
var Chunk570140 = require("./570140.js");
let i = (e, n) => {
  r.Z.wait(() => {
    r.Z.dispatch({
      type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
      guildId: e,
      premiumCount: n
    })
  })
};

function l() {
  Chunk570140.Z.dispatch({
    type: "APPLIED_GUILD_BOOST_COUNT_RESET"
  })
}