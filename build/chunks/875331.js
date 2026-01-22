/** Chunk was on 47841 **/
/** chunk id: 875331, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  E: () => i
});
var Chunk73153 = require("./73153.js");

function i(e, t, n) {
  return r.h.dispatch({
    type: "GUILD_SETTINGS_WIDGET_UPDATE",
    guildId: e,
    enabled: t,
    channelId: null != n ? n : null
  }), Promise.resolve(true)
}