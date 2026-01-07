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
  let s = d.Z.getVoiceChannelId();
  if (null == s) return null;
  let u = h.Z.getStageInstanceByChannel(s);
  if (null == u) return null;
  let y = l.Z.getChannel(s);
  if (null == y || !f.oz(b.Plq.VIEW_CHANNEL, y)) return null;
  let v = c.Z.getGuild(y.getGuildId());
  if (null == v || !v.features.has(b.GuildFeatures.DISCOVERABLE)) return null;
  let S = (0, m.Lw)(y, u),
    I = (null == O || null == (e = O.party) ? true : e.id) === S ? O : null,
    T = p.Z.getMutableParticipants(y.id, _.pV.SPEAKER),
    C = T.filter(e => e.type === _.Ui.STREAM).length,
    A = T.length - C,
    N = p.Z.getParticipantCount(s) - C,
    P = (null == I || null == (t = I.party) ? true : t.size) != null ? I.party.size[1] : 0;
  return {
    application_id: E.gD,
    name: null != (i = null != (r = u.topic) ? r : y.topic) ? i : y.name,
    type: (0, g.xJ)(y.id) ? b.IIU.WATCHING : b.IIU.LISTENING,
    timestamps: {
      start: null != (a = null == I || null == (n = I.timestamps) ? true : n.start) ? a : new Date().getTime()
    },
    assets: {
      small_image: null != (o = v.icon) ? o : true,
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
  return !a()(e, O) && (O = e, true)
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
    this.waitFor(l.Z, c.Z, u.Z, d.Z, p.Z, h.Z)
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