/** Chunk was on 7384 **/
/** chunk id: 996746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk696826 = require("./696826.jsx"),
  Chunk181430 = require("./181430.js"),
  Chunk720734 = require("./720734.jsx"),
  Chunk594174 = require("./594174.js");

function c(e) {
  let {
    nameplate: t
  } = e, n = (0, r.e7)([o.default], () => o.default.getCurrentUser()), c = (0, a.Y)({
    location: "AccountPreview"
  });
  return (0, i.jsx)(l.m, {
    selfMute: false,
    selfDeaf: false,
    serverMute: false,
    serverDeaf: false,
    suppress: false,
    speaking: false,
    streaming: false,
    status: s.Sk.ONLINE,
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