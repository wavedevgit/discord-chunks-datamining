/** Chunk was on 97246 **/
/** chunk id: 230135, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => o,
  u: () => l
});
var Chunk73153 = require("./73153.js");
let l = (e, t) => {
  r.h.wait(() => {
    r.h.dispatch({
      type: "APPLIED_GUILD_BOOST_COUNT_UPDATE",
      guildId: e,
      premiumCount: t
    })
  })
};

function o() {
  r.h.dispatch({
    type: "APPLIED_GUILD_BOOST_COUNT_RESET"
  })
}