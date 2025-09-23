/** Chunk was on web.js **/
/** chunk id: 996746, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk696826 = require("./696826.jsx"),
  Chunk181430 = require("./181430.js"),
  Chunk720734 = require("./720734.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js");

function u(e) {
  var t;
  let {
    nameplate: n
  } = e, u = (0, i.e7)([l.default], () => l.default.getCurrentUser()), d = (0, o.Y)({
    location: "AccountPreview"
  }), f = null != (t = c.ZP.useName(u)) ? t : "";
  return (0, r.jsx)(s.m, {
    username: f,
    selfMute: false,
    selfDeaf: false,
    serverMute: false,
    serverDeaf: false,
    suppress: false,
    speaking: false,
    streaming: false,
    status: a.Sk.ONLINE,
    currentUser: u,
    activities: [],
    applicationStream: true,
    userTag: "",
    hidePrivateData: false,
    premiumSubscription: true,
    speakingWhileMuted: false,
    occluded: false,
    dismissibleContents: {
      avatar: [],
      settings: []
    },
    awaitingRemote: false,
    isEligibleForPomelo: false,
    nameplate: n,
    voiceChannel: null,
    voiceActivityStatusEnabled: false,
    isQuestBarEmpty: true,
    hasLoadedQuestBar: true,
    isListenAlongVisible: false,
    isDisplayNameStylesEnabled: d
  })
}