/** Chunk was on 97887 **/
/** chunk id: 844262, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function i(e) {
  let {
    channel: t,
    embeddedApps: n
  } = e;
  if (t.type === r.rbe.GUILD_VOICE) {
    if (null != n && n.length > 0) {
      let e = n.map(e => e.application.name);
      return l.intl.formatToPlainString(l.t.LmYuHT, {
        activeActivities: e.join(", ")
      })
    }
  }
}