/** Chunk was on web.js **/
/** chunk id: 981668, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk367907 = require("./367907.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk574176 = require("./574176.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk885110 = require("./885110.js"),
  Chunk649739 = require("./649739.js"),
  Chunk981631 = require("./981631.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  return e.filter(e => e.type === p.IIU.PLAYING && e.application_id).map(e => e.application_id)
}
async function m(e) {
  await a.ZP.fetchApplications(e, false)
}
async function g(e) {
  if (null == e) return;
  let t = c.Z.getChannel(e),
    {
      enableHangStatus: n
    } = (0, s.gx)({
      guildId: null == t ? true : t.guild_id,
      location: "GameActivityManager"
    });
  if (null == t || !((0, f.Ku)("running_games_change", false) || n)) return;
  let r = d.Z.getActivities();
  if (0 === r.length) return;
  let a = h([...r]);
  await m([...a]);
  let u = o.Z.getApplication(a[0]);
  null != u && i.ZP.trackWithMetadata(p.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
    channel_id: e,
    guild_id: t.guild_id,
    game_name: u.name,
    user_id: l.default.getId()
  })
}
class E extends Chunk147913.Z {
  handleRunningGamesChange() {
    g(u.Z.getVoiceChannelId())
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
let b = new E