/** Chunk was on 9354 **/
/** chunk id: 781208, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  $l: () => u,
  RI: () => l,
  Ud: () => i
});
var Chunk388032 = require("./388032.jsx");
let l = "https://discord.com/community/securing-your-server",
  i = ["MESSAGE_SPAM", "DM_SPAM", "MENTION_SPAM", "SUSPICIOUS_USERS", "SETTINGS_SPAM"],
  u = t => {
    switch (t) {
      case "DM_SPAM":
        return r.intl.string(r.t["9CYNmS"]);
      case "MENTION_SPAM":
        return r.intl.string(r.t["hR/IdO"]);
      case "MESSAGE_SPAM":
        return r.intl.string(r.t.fwloj2);
      case "SETTINGS_SPAM":
        return r.intl.string(r.t.ETFVFw);
      case "SUSPICIOUS_USERS":
        return r.intl.string(r.t["lKXu+n"])
    }
    return null
  }