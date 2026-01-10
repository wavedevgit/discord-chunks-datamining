/** Chunk was on 83772 **/
/** chunk id: 667815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => i,
  v: () => l
});
var Chunk570140 = require("./570140.js");
let l = (e, t) => {
  r.Z.wait(() => {
    r.Z.dispatch({
      type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
      guildId: e,
      premiumCount: t
    })
  })
};

function i() {
  r.Z.dispatch({
    type: "APPLIED_GUILD_BOOST_COUNT_RESET"
  })
}