/** Chunk was on 51333 **/
/** chunk id: 667815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => l,
  v: () => i
});
var Chunk570140 = require("./570140.js");
let i = (e, t) => {
  r.Z.wait(() => {
    r.Z.dispatch({
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