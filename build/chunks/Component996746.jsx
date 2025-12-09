/** Chunk was on 75393 **/
/** chunk id: 996746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk696826 = require("./696826.jsx"),
  Chunk720734 = require("./720734.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js");

function c(e) {
  var t;
  let {
    nameplate: n
  } = e, c = (0, r.e7)([s.default], () => s.default.getCurrentUser()), d = null != (t = o.ZP.useName(c)) ? t : "";
  return (0, a.jsx)(l.m, {
    username: d,
    selfMute: false,
    selfDeaf: false,
    serverMute: false,
    serverDeaf: false,
    suppress: false,
    speaking: false,
    streaming: false,
    status: i.Sk.ONLINE,
    currentUser: c,
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
    isListenAlongVisible: false
  })
}