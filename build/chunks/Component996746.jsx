/** Chunk was on 11222 **/
/** chunk id: 996746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk696826 = require("./696826.jsx"),
  Chunk181430 = require("./181430.js"),
  Chunk720734 = require("./720734.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js");

function d(e) {
  var t;
  let {
    nameplate: n
  } = e, d = (0, r.e7)([o.default], () => o.default.getCurrentUser()), u = (0, l.Y)({
    location: "AccountPreview"
  }), m = null != (t = c.ZP.useName(d)) ? t : "";
  return (0, a.jsx)(s.m, {
    username: m,
    selfMute: false,
    selfDeaf: false,
    serverMute: false,
    serverDeaf: false,
    suppress: false,
    speaking: false,
    streaming: false,
    status: i.Sk.ONLINE,
    currentUser: d,
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
    isDisplayNameStylesEnabled: u
  })
}