/** Chunk was on web.js **/
/** chunk id: 742738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
});
var r, Chunk348327 = require("./348327.js"),
  a = require.n(Chunk348327),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk700785 = require("./700785.js"),
  Chunk565799 = require("./565799.js"),
  Chunk501655 = require("./501655.js"),
  Chunk750154 = require("./750154.js"),
  Chunk427679 = require("./427679.js"),
  Chunk368442 = require("./368442.js"),
  Chunk157925 = require("./157925.js"),
  Chunk981631 = require("./981631.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let O = null;

function v() {
  var e, t, n, r, i, a, o;
  let s = Chunk944486.Z.getVoiceChannelId();
  if (null == Chunk570140) return null;
  let u = Chunk427679.Z.getStageInstanceByChannel(Chunk570140);
  if (null == Chunk19780) return null;
  let y = Chunk592125.Z.getChannel(Chunk570140);
  if (null == y || !Chunk700785.oz(Chunk981631.Plq.VIEW_CHANNEL, y)) return null;
  let v = Chunk430824.Z.getGuild(y.getGuildId());
  if (null == v || !v.features.has(Chunk981631.GuildFeatures.DISCOVERABLE)) return null;
  let S = (0, Chunk750154.Lw)(y, Chunk19780),
    I = (null == O || null == (e = O.party) ? true : module.id) === S ? O : null,
    T = Chunk565799.Z.getMutableParticipants(y.id, Chunk501655.pV.SPEAKER),
    C = T.filter(e => e.type === _.Ui.STREAM).length,
    A = T.length - C,
    N = Chunk565799.Z.getParticipantCount(Chunk570140) - C,
    P = (null == I || null == (t = I.party) ? true : exports.size) != null ? I.party.size[1] : 0;
  return {
    application_id: Chunk157925.gD,
    name: null != (i = null != (r = Chunk19780.topic) ? r : y.topic) ? Chunk348327 : y.name,
    type: (0, Chunk368442.xJ)(y.id) ? Chunk981631.IIU.WATCHING : Chunk981631.IIU.LISTENING,
    timestamps: {
      start: null != (a = null == I || null == (n = I.timestamps) ? true : require.start) ? a : new Date().getTime()
    },
    assets: {
      small_image: null != (o = v.icon) ? Chunk442837 : true,
      small_text: v.name
    },
    party: {
      id: S,
      size: [A, Math.max(N, P)]
    }
  }
}

function S() {
  let e = v();
  return !a()(module, O) && (O = module, true)
}

function I(e) {
  let {
    voiceStates: t
  } = e;
  if (null == O) return;
  let n = (0, m.rq)(O);
  null != n && null != t.find(e => e.channelId === n.channelId) && S()
}

function T(e) {
  var t, n, r;
  let {
    state: i
  } = e, a = null != (r = null == O || null == (n = O.party) || null == (t = n.size) ? true : t[1]) ? r : 0;
  return i === b.hes.RTC_CONNECTED && !(a > 0) && S()
}
class C extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk430824.Z, Chunk19780.Z, Chunk944486.Z, Chunk565799.Z, Chunk427679.Z)
  }
  getActivity() {
    return O
  }
}
y(C, "displayName", "StageChannelSelfRichPresenceStore");
let A = new C(Chunk570140.Z, {
  CONNECTION_OPEN: S,
  STAGE_INSTANCE_CREATE: S,
  STAGE_INSTANCE_UPDATE: S,
  STAGE_INSTANCE_DELETE: S,
  VOICE_CHANNEL_SELECT: S,
  RTC_CONNECTION_STATE: T,
  VOICE_STATE_UPDATES: I
})