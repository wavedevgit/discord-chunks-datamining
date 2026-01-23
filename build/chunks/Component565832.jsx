/** Chunk was on 36054 **/
/** chunk id: 565832, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk935154 = require("./935154.jsx"),
  Chunk748319 = require("./748319.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js");

function c(e) {
  var t;
  let {
    nameplate: n
  } = e, c = (0, l.bG)([s.default], () => s.default.getCurrentUser()), d = null != (t = o.Ay.useName(c)) ? t : "";
  return (0, a.jsx)(i.g, {
    username: d,
    selfMute: false,
    selfDeaf: false,
    serverMute: false,
    serverDeaf: false,
    suppress: false,
    speaking: false,
    streaming: false,
    status: r.cl.ONLINE,
    currentUser: c,
    activities: [],
    applicationStream: true,
    userTag: "",
    hidePrivateData: false,
    premiumSubscription: true,
    speakingWhileMuted: false,
    speakingWhilePTTInactive: false,
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