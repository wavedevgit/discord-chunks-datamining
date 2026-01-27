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

function b(e, t, n) {
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
  let s = d.A.getVoiceChannelId();
  if (null == s) return null;
  let u = m.A.getStageInstanceByChannel(s);
  if (null == u) return null;
  let b = l.A.getChannel(s);
  if (null == b || !f.Ib(y.xBc.VIEW_CHANNEL, b)) return null;
  let v = c.A.getGuild(b.getGuildId());
  if (null == v || !v.features.has(y.GuildFeatures.DISCOVERABLE)) return null;
  let A = (0, h.eL)(b, u),
    I = (null == O || null == (i = O.party) ? true : i.id) === A ? O : null,
    S = p.A.getMutableParticipants(b.id, _.ip.SPEAKER),
    T = S.filter(e => e.type === _.wY.STREAM).length,
    C = S.length - T,
    N = p.A.getParticipantCount(s) - T,
    w = (null == I || null == (a = I.party) ? true : a.size) != null ? I.party.size[1] : 0;
  return {
    application_id: E.SS,
    name: null != (e = null != (t = u.topic) ? t : b.topic) ? e : b.name,
    type: (0, g.xn)(b.id) ? y.$pd.WATCHING : y.$pd.LISTENING,
    timestamps: {
      start: null != (n = null == I || null == (o = I.timestamps) ? true : o.start) ? n : new Date().getTime()
    },
    assets: {
      small_image: null != (r = v.icon) ? r : true,
      small_text: v.name
    },
    party: {
      id: A,
      size: [C, Math.max(N, w)]
    }
  }
}

function A() {
  let e = v();
  return !a()(e, O) && (O = e, true)
}

function I(e) {
  let {
    voiceStates: t
  } = e;
  if (null == O) return;
  let n = (0, h.UW)(O);
  null != n && null != t.find(e => e.channelId === n.channelId) && A()
}

function S(e) {
  var t, n, r;
  let {
    state: i
  } = e, a = null != (t = null == O || null == (r = O.party) || null == (n = r.size) ? true : n[1]) ? t : 0;
  return i === y.S7L.RTC_CONNECTED && !(a > 0) && A()
}
class T extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(l.A, c.A, u.A, d.A, p.A, m.A)
  }
  getActivity() {
    return O
  }
}
b(T, "displayName", "StageChannelSelfRichPresenceStore");
let C = new T(Chunk73153.h, {
  CONNECTION_OPEN: A,
  STAGE_INSTANCE_CREATE: A,
  STAGE_INSTANCE_UPDATE: A,
  STAGE_INSTANCE_DELETE: A,
  VOICE_CHANNEL_SELECT: A,
  RTC_CONNECTION_STATE: S,
  VOICE_STATE_UPDATES: I
})