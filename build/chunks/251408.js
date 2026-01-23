/** Chunk was on web.js **/
/** chunk id: 251408, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk58149 = require("./58149.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js"),
  Chunk140547 = require("./140547.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk461213 = require("./461213.js"),
  Chunk529020 = require("./529020.js"),
  Chunk652215 = require("./652215.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  return e.filter(e => e.type === p.$pd.PLAYING && e.application_id).map(e => e.application_id)
}
async function m(e) {
  await a.Ay.fetchApplications(e, false)
}
async function g(e) {
  if (null == e) return;
  let t = c.A.getChannel(e),
    {
      enableHangStatus: n
    } = (0, o.ko)({
      guildId: null == t ? true : t.guild_id,
      location: "GameActivityManager"
    });
  if (null == t || !((0, f.Gf)("running_games_change", false) || n)) return;
  let r = d.A.getActivities();
  if (0 === r.length) return;
  let a = h([...r]);
  await m([...a]);
  let u = s.A.getApplication(a[0]);
  null != u && i.Ay.trackWithMetadata(p.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
    channel_id: e,
    guild_id: t.guild_id,
    game_name: u.name,
    user_id: l.default.getId()
  })
}
class E extends Chunk439372.A {
  handleRunningGamesChange() {
    g(u.A.getVoiceChannelId())
  }
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    g(t)
  }
  constructor(...e) {
    super(...e), _(this, "actions", {
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
    })
  }
}
let y = new E