/** Chunk was on web.js **/
/** chunk id: 485296, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => P
}), require("./896048.js"), require("./938796.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk124838 = require("./124838.js"),
  Chunk488926 = require("./488926.js"),
  Chunk734057 = require("./734057.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk309010 = require("./309010.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = new Map,
  m = null,
  g = null,
  E = null,
  y = false,
  b = false;

function O() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : p.x.DEFAULT,
    t = h.get(e);
  return null == t && (t = new Map, h.set(e, t)), t
}

function v(e, t) {
  let n = h.get(e);
  if (null == n) returnfalse;
  let r = n.delete(t);
  return 0 === n.size && h.delete(e), r
}

function A(e, t, n) {
  var r, i, a;
  return ((null != (r = null == (a = h.get(e)) || null == (i = a.get(t)) ? true : i.flags) ? r : p.ME.NONE) & n) === n
}

function I(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = h.get(e);
  if (null == r) returnfalse;
  for (let [e, {
      flags: i
    }] of r)
    if ((!n || e !== m) && (i & t) === t) returntrue;
  returnfalse
}

function S(e, t, n) {
  var r, i;
  let a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : false / 0,
    s = O(e),
    o = s.get(t),
    l = null != (r = null == o ? true : o.flags) ? r : 0;
  if (0 === l && 0 === n) returnfalse;
  if (0 === n) s.delete(t), 0 === s.size && h.delete(e);
  else {
    let e = null != (i = null == o ? true : o.since) ? i : null,
      r = (l & p.ME.VOICE) === p.ME.VOICE,
      c = (n & p.ME.VOICE) === p.ME.VOICE;
    r !== c && (e = c ? Date.now() : null), s.set(t, {
      flags: n,
      since: e,
      voiceDb: a
    })
  }
  returntrue
}

function T(e) {
  let {
    user: t,
    sessionId: n
  } = e;
  m = t.id, g = n, E = null
}

function C(e) {
  let {
    context: t,
    userId: n,
    speakingFlags: r,
    voiceDb: i
  } = e;
  if ((r & p.ME.PRIORITY) === p.ME.PRIORITY) {
    let e = l.A.getChannel(d.A.getVoiceChannelId());
    null != e && o.$3({
      permission: f.xBc.PRIORITY_SPEAKER,
      user: n,
      context: e
    }) ? c.A.setCanHavePriority(n, true) : (c.A.setCanHavePriority(n, false), r &= ~p.ME.PRIORITY)
  }
  return (r & p.ME.HIDDEN) === p.ME.HIDDEN && (r = 0), S(t, n, r, i)
}

function N(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    let {
      userId: n,
      channelId: r,
      sessionId: i
    } = t, a = false, s = E;
    return n === m && i === g && (E = null != r ? r : null), s !== E && (a = h.delete(p.x.DEFAULT) || a), null == r ? a = n === m && i === g ? h.delete(p.x.DEFAULT) || a : v(p.x.DEFAULT, n) || a : n === m && i !== g ? a = h.delete(p.x.DEFAULT) || a : n !== m && r !== u.A.getChannelId() && (a = v(p.x.DEFAULT, n) || a), a || e
  }, false)
}

function w(e) {
  let {
    isActive: t,
    isLatched: n
  } = e;
  y = n, b = t
}
class R extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(l.A, c.A, u.A, d.A)
  }
  getSpeakingDuration(e, t) {
    var n, r;
    let i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : p.x.DEFAULT,
      a = null == (r = h.get(i)) || null == (n = r.get(e)) ? true : n.since;
    return null != a ? t - a : 0
  }
  getSpeakers() {
    var e, t;
    let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : p.x.DEFAULT;
    return Array.from(null != (e = null == (t = h.get(n)) ? true : t.keys()) ? e : []).filter(e => A(n, e, p.ME.VOICE))
  }
  isSpeaking(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : p.x.DEFAULT;
    return A(t, e, p.ME.VOICE)
  }
  isPrioritySpeaker(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : p.x.DEFAULT;
    return A(t, e, p.ME.PRIORITY)
  }
  isSoundSharing(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : p.x.DEFAULT;
    return A(t, e, p.ME.SOUNDSHARE)
  }
  isAnyoneElseSpeaking() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : p.x.DEFAULT;
    return I(e, p.ME.VOICE, true)
  }
  isCurrentUserSpeaking() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : p.x.DEFAULT;
    return null != m && this.isSpeaking(m, e)
  }
  isCurrentUserPTTActive() {
    return b
  }
  isCurrentUserPTTLatched() {
    return y
  }
  isAnyonePrioritySpeaking() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : p.x.DEFAULT;
    return I(e, p.ME.VOICE | p.ME.PRIORITY)
  }
  isCurrentUserPrioritySpeaker() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : p.x.DEFAULT;
    return null != m && this.isPrioritySpeaker(m, e)
  }
  isCurrentUserPrioritySpeaking() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : p.x.DEFAULT;
    return null != m && this.isPrioritySpeaker(m, e) && this.isSpeaking(m, e)
  }
  getVoiceVolume(e) {
    var t, n, r;
    let i = arguments.length > 1 && true !== arguments[1] ? arguments[1] : p.x.DEFAULT;
    return (0, s.r)({
      location: "SpeakingStore"
    }).enabled && null != (t = null == (r = h.get(i)) || null == (n = r.get(e)) ? true : n.voiceDb) ? t : false / 0
  }
}
_(R, "displayName", "SpeakingStore");
let P = new R(Chunk73153.h, {
  CONNECTION_OPEN: T,
  OVERLAY_INITIALIZE: T,
  SPEAKING: C,
  VOICE_STATE_UPDATES: N,
  PUSH_TO_TALK_STATE_CHANGE: w
})