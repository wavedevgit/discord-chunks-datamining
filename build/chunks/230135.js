/** Chunk was on 20725 **/
/** chunk id: 230135, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => s,
  u: () => r
});
var Chunk73153 = require("./73153.js");
let r = (e, t) => {
  l.h.wait(() => {
    l.h.dispatch({
      type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
      guildId: e,
      premiumCount: t
    })
  })
};

function s() {
  l.h.dispatch({
    type: "APPLIED_GUILD_BOOST_COUNT_RESET"
  })
}