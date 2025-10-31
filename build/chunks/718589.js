/** Chunk was on 83546 **/
/** chunk id: 718589, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let {
    channel: t,
    embeddedApps: n
  } = e;
  if (t.type === r.d4z.GUILD_VOICE) {
    if (null != n && n.length > 0) {
      let e = n.map(e => e.application.name);
      return i.intl.formatToPlainString(i.t.LmYuHT, {
        activeActivities: e.join(", ")
      })
    }
  }
}