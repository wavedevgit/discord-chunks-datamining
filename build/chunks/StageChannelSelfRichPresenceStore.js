/** Chunk was on web.js **/
/** chunk id: 732755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => C
});
var r, Chunk812729 = require("./812729.js"),
  a = require.n(Chunk812729),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk488926 = require("./488926.js"),
  Chunk63995 = require("./63995.js"),
  Chunk69407 = require("./69407.js"),
  Chunk82149 = require("./82149.js"),
  Chunk446600 = require("./446600.js"),
  Chunk96566 = require("./96566.js"),
  Chunk516607 = require("./516607.js"),
  Chunk652215 = require("./652215.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let O = null;

function A() {
  var e, t, n, r, i, a, s;
  let o = d.A.getVoiceChannelId();
  if (null == o) return null;
  let u = m.A.getStageInstanceByChannel(o);
  if (null == u) return null;
  let y = l.A.getChannel(o);
  if (null == y || !f.Ib(b.xBc.VIEW_CHANNEL, y)) return null;
  let A = c.A.getGuild(y.getGuildId());
  if (null == A || !A.features.has(b.GuildFeatures.DISCOVERABLE)) return null;
  let v = (0, h.eL)(y, u),
    S = (null == O || null == (i = O.party) ? true : i.id) === v ? O : null,
    I = p.A.getMutableParticipants(y.id, _.ip.SPEAKER),
    T = I.filter(e => e.type === _.wY.STREAM).length,
    C = I.length - T,
    N = p.A.getParticipantCount(o) - T,
    R = (null == S || null == (a = S.party) ? true : a.size) != null ? S.party.size[1] : 0;
  return {
    application_id: E.SS,
    name: null != (e = null != (t = u.topic) ? t : y.topic) ? e : y.name,
    type: (0, g.xn)(y.id) ? b.$pd.WATCHING : b.$pd.LISTENING,
    timestamps: {
      start: null != (n = null == S || null == (s = S.timestamps) ? true : s.start) ? n : new Date().getTime()
    },
    assets: {
      small_image: null != (r = A.icon) ? r : true,
      small_text: A.name
    },
    party: {
      id: v,
      size: [C, Math.max(N, R)]
    }
  }
}

function v() {
  let e = A();
  return !a()(e, O) && (O = e, true)
}

function S(e) {
  let {
    voiceStates: t
  } = e;
  if (null == O) return;
  let n = (0, h.UW)(O);
  null != n && null != t.find(e => e.channelId === n.channelId) && v()
}

function I(e) {
  var t, n, r;
  let {
    state: i
  } = e, a = null != (t = null == O || null == (r = O.party) || null == (n = r.size) ? true : n[1]) ? t : 0;
  return i === b.S7L.RTC_CONNECTED && !(a > 0) && v()
}
class T extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(l.A, c.A, u.A, d.A, p.A, m.A)
  }
  getActivity() {
    return O
  }
}
y(T, "displayName", "StageChannelSelfRichPresenceStore");
let C = new T(Chunk73153.h, {
  CONNECTION_OPEN: v,
  STAGE_INSTANCE_CREATE: v,
  STAGE_INSTANCE_UPDATE: v,
  STAGE_INSTANCE_DELETE: v,
  VOICE_CHANNEL_SELECT: v,
  RTC_CONNECTION_STATE: I,
  VOICE_STATE_UPDATES: S
})