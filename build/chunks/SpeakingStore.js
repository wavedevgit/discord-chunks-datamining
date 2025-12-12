/** Chunk was on web.js **/
/** chunk id: 606304, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./388685.js"), require("./997841.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk504313 = require("./504313.js"),
  Chunk700785 = require("./700785.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = new Map,
  h = null,
  g = null,
  E = null,
  b = false,
  y = false;

function O() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = m.get(module);
  return null == exports && (t = new Map, m.set(module, exports)), exports
}

function v(e, t) {
  let n = m.get(e);
  if (null == n) returnfalse;
  let r = n.delete(t);
  return 0 === n.size && m.delete(e), r
}

function S(e, t, n) {
  var r, i, a;
  return ((null != (a = null == (i = m.get(e)) || null == (r = i.get(t)) ? true : r.flags) ? a : p.Dg.NONE) & n) === n
}

function I(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = m.get(e);
  if (null == r) returnfalse;
  for (let [e, {
      flags: i
    }] of r)
    if ((!n || e !== h) && (i & t) === t) returntrue;
  returnfalse
}

function T(e, t, n) {
  var r, i;
  let a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : false / 0,
    o = O(e),
    s = o.get(t),
    l = null != (r = null == s ? true : s.flags) ? r : 0;
  if (0 === l && 0 === n) returnfalse;
  if (0 === n) o.delete(t), 0 === o.size && m.delete(e);
  else {
    let e = null != (i = null == s ? true : s.since) ? i : null,
      r = (l & p.Dg.VOICE) === p.Dg.VOICE,
      c = (n & p.Dg.VOICE) === p.Dg.VOICE;
    r !== c && (e = c ? Date.now() : null), o.set(t, {
      flags: n,
      since: e,
      voiceDb: a
    })
  }
  returntrue
}

function C(e) {
  let {
    user: t,
    sessionId: n
  } = e;
  h = t.id, g = n, E = null
}

function A(e) {
  let {
    context: t,
    userId: n,
    speakingFlags: r,
    voiceDb: i
  } = e;
  if ((r & p.Dg.PRIORITY) === p.Dg.PRIORITY) {
    let e = l.Z.getChannel(d.Z.getVoiceChannelId());
    null != e && s.BT({
      permission: f.Plq.PRIORITY_SPEAKER,
      user: n,
      context: e
    }) ? c.Z.setCanHavePriority(n, true) : (c.Z.setCanHavePriority(n, false), r &= ~p.Dg.PRIORITY)
  }
  return (r & p.Dg.HIDDEN) === p.Dg.HIDDEN && (r = 0), T(t, n, r, i)
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
    } = t, a = false, o = E;
    return n === h && i === g && (E = null != r ? r : null), o !== E && (a = m.delete(p.Yn.DEFAULT) || a), null == r ? a = n === h && i === g ? m.delete(p.Yn.DEFAULT) || a : v(p.Yn.DEFAULT, n) || a : n === h && i !== g ? a = m.delete(p.Yn.DEFAULT) || a : n !== h && r !== u.Z.getChannelId() && (a = v(p.Yn.DEFAULT, n) || a), a || e
  }, false)
}

function P(e) {
  let {
    isActive: t,
    isLatched: n
  } = e;
  b = n, y = t
}
class R extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(Chunk592125.Z, Chunk131951.Z, Chunk19780.Z, Chunk944486.Z)
  }
  getSpeakingDuration(e, t) {
    var n, r;
    let i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : p.Yn.DEFAULT,
      a = null == (r = m.get(i)) || null == (n = r.get(e)) ? true : n.since;
    return null != a ? t - a : 0
  }
  getSpeakers() {
    var e, t;
    let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return Array.from(null != (t = null == (e = m.get(require)) ? true : module.keys()) ? exports : []).filter(e => S(n, e, p.Dg.VOICE))
  }
  isSpeaking(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : p.Yn.DEFAULT;
    return S(t, e, p.Dg.VOICE)
  }
  isPrioritySpeaker(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : p.Yn.DEFAULT;
    return S(t, e, p.Dg.PRIORITY)
  }
  isSoundSharing(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : p.Yn.DEFAULT;
    return S(t, e, p.Dg.SOUNDSHARE)
  }
  isAnyoneElseSpeaking() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return I(module, Chunk65154.Dg.VOICE, true)
  }
  isCurrentUserSpeaking() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return null != h && this.isSpeaking(h, module)
  }
  isCurrentUserPTTActive() {
    return y
  }
  isCurrentUserPTTLatched() {
    return b
  }
  isAnyonePrioritySpeaking() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return I(module, Chunk65154.Dg.VOICE | Chunk65154.Dg.PRIORITY)
  }
  isCurrentUserPrioritySpeaker() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return null != h && this.isPrioritySpeaker(h, module)
  }
  isCurrentUserPrioritySpeaking() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return null != h && this.isPrioritySpeaker(h, module) && this.isSpeaking(h, module)
  }
  getVoiceVolume(e) {
    var t, n, r;
    let i = arguments.length > 1 && true !== arguments[1] ? arguments[1] : p.Yn.DEFAULT;
    return (0, o.h)({
      location: "SpeakingStore"
    }).enabled && null != (r = null == (n = m.get(i)) || null == (t = n.get(e)) ? true : t.voiceDb) ? r : false / 0
  }
}
_(R, "displayName", "SpeakingStore");
let w = new R(Chunk570140.Z, {
  CONNECTION_OPEN: C,
  OVERLAY_INITIALIZE: C,
  SPEAKING: A,
  VOICE_STATE_UPDATES: N,
  PUSH_TO_TALK_STATE_CHANGE: P
})