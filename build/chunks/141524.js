/** Chunk was on 4075 **/
/** chunk id: 141524, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  D$: () => u,
  k6: () => l,
  zB: () => i
});
var Chunk985018 = require("./985018.jsx");
let l = "https://discord.com/community/securing-your-server",
  i = ["MESSAGE_SPAM", "DM_SPAM", "MENTION_SPAM", "SUSPICIOUS_USERS", "SETTINGS_SPAM"],
  u = t => {
    switch (t) {
      case "DM_SPAM":
        return n.intl.string(n.t["9CYNmS"]);
      case "MENTION_SPAM":
        return n.intl.string(n.t["hR/IdO"]);
      case "MESSAGE_SPAM":
        return n.intl.string(n.t.fwloj2);
      case "SETTINGS_SPAM":
        return n.intl.string(n.t.ETFVFw);
      case "SUSPICIOUS_USERS":
        return n.intl.string(n.t["lKXu+n"])
    }
    return null
  }