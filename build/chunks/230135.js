/** Chunk was on 97246 **/
/** chunk id: 230135, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => o,
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

function o() {
  l.h.dispatch({
    type: "APPLIED_GUILD_BOOST_COUNT_RESET"
  })
}