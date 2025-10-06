/** Chunk was on 29679 **/
/** chunk id: 800223, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  c: () => i
});
var Chunk570140 = require("./570140.js");

function i(e, t, n) {
  return r.Z.dispatch({
    type: "GUILD_SETTINGS_WIDGET_UPDATE",
    guildId: e,
    enabled: t,
    channelId: null != n ? n : null
  }), Promise.resolve(true)
}