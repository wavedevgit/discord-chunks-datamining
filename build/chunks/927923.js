/** Chunk was on web.js **/
/** chunk id: 927923, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  KL: () => l,
  Lc: () => c,
  Lw: () => _,
  Ry: () => f,
  X3: () => o,
  YE: () => u,
  al: () => d,
  bJ: () => a,
  e8: () => p,
  tA: () => s
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk243814 = require("./243814.js"),
  Chunk981631 = require("./981631.js");
let a = "xbox://communitylinking/donut/audio",
  o = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
  s = [Chunk243814.x.VOICE, Chunk243814.x.DM_CHANNELS_READ, Chunk243814.x.GUILDS, Chunk243814.x.GUILDS_MEMBERS_READ, Chunk243814.x.IDENTIFY, Chunk243814.x.CONNECTIONS, Chunk243814.x.ACTIVITIES_READ],
  l = [Chunk243814.x.VOICE, Chunk243814.x.DM_CHANNELS_READ, Chunk243814.x.GUILDS, Chunk243814.x.GUILDS_MEMBERS_READ, Chunk243814.x.IDENTIFY, Chunk243814.x.CONNECTIONS],
  c = e => {
    let {
      guildId: t,
      channelName: n,
      guildName: r,
      channelId: i,
      muted: a,
      deafened: o,
      nonce: s
    } = e, l = {
      channelid: i,
      guildid: t,
      channelname: n,
      guildname: r,
      muted: String(a),
      deafened: String(o)
    };
    return null != s && (l.nonce = s), new URLSearchParams(l)
  };
var u = function(e) {
  return e.PLAYSTATION = "playstation", e.XBOX = "xbox", e
}({});
let d = new Set(["xbox", "playstation"]);
Chunk981631.M7m.XBOX, Chunk981631.M7m.PS5;
var f = function(e) {
  return e[e.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED", e[e.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE", e[e.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS", e[e.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED", e[e.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE", e[e.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR", e[e.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED", e[e.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND", e
}({});
let p = new Set([27e4]),
  _ = "console error alert"