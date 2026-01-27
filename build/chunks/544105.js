/** Chunk was on web.js **/
/** chunk id: 544105, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  EY: () => o,
  Gp: () => a,
  K8: () => f,
  NL: () => l,
  f$: () => u,
  hv: () => d,
  hw: () => c,
  sS: () => s,
  v_: () => p,
  yM: () => _
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk179771 = require("./179771.js"),
  Chunk652215 = require("./652215.js");
let a = "xbox://communitylinking/donut/audio",
  o = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
  s = [Chunk179771.F.VOICE, Chunk179771.F.DM_CHANNELS_READ, Chunk179771.F.GUILDS, Chunk179771.F.GUILDS_MEMBERS_READ, Chunk179771.F.IDENTIFY, Chunk179771.F.CONNECTIONS, Chunk179771.F.ACTIVITIES_READ],
  l = [Chunk179771.F.VOICE, Chunk179771.F.DM_CHANNELS_READ, Chunk179771.F.GUILDS, Chunk179771.F.GUILDS_MEMBERS_READ, Chunk179771.F.IDENTIFY, Chunk179771.F.CONNECTIONS],
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
Chunk652215.yTV.XBOX, Chunk652215.yTV.PS5;
var f = function(e) {
  return e[e.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED", e[e.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE", e[e.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS", e[e.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED", e[e.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE", e[e.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR", e[e.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED", e[e.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND", e
}({});
let p = new Set([27e4]),
  _ = "console error alert"