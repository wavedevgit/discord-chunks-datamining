/** Chunk was on web.js **/
/** chunk id: 996746, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk696826 = require("./696826.jsx"),
  Chunk181430 = require("./181430.js"),
  Chunk720734 = require("./720734.jsx"),
  Chunk594174 = require("./594174.js");

function c(e) {
  let {
    nameplate: t
  } = e, n = (0, i.e7)([l.default], () => l.default.getCurrentUser()), c = (0, o.Y)({
    location: "AccountPreview"
  });
  return (0, r.jsx)(s.m, {
    selfMute: false,
    selfDeaf: false,
    serverMute: false,
    serverDeaf: false,
    suppress: false,
    speaking: false,
    streaming: false,
    status: a.Sk.ONLINE,
    currentUser: n,
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
    nameplate: t,
    voiceChannel: null,
    voiceActivityStatusEnabled: false,
    isQuestBarEmpty: true,
    isListenAlongVisible: false,
    isDisplayNameStylesEnabled: c
  })
}