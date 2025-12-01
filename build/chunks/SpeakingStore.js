/** Chunk was on web.js **/
/** chunk id: 606304, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
}), require("./388685.js"), require("./997841.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk700785 = require("./700785.js"),
  Chunk592125 = require("./592125.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = new Map,
  m = null,
  h = null,
  g = null,
  E = false,
  b = false;

function y() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT,
    t = _.get(module);
  return null == exports && (t = new Map, _.set(module, exports)), exports
}

function O(e, t) {
  let n = _.get(e);
  if (null == n) returnfalse;
  let r = n.delete(t);
  return 0 === n.size && _.delete(e), r
}

function v(e, t, n) {
  var r, i, a;
  return ((null != (a = null == (i = _.get(e)) || null == (r = i.get(t)) ? true : r.flags) ? a : f.Dg.NONE) & n) === n
}

function S(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
    r = _.get(e);
  if (null == r) returnfalse;
  for (let [e, {
      flags: i
    }] of r)
    if ((!n || e !== m) && (i & t) === t) returntrue;
  returnfalse
}

function I(e, t, n) {
  var r, i;
  let a = y(e),
    o = a.get(t),
    s = null != (r = null == o ? true : o.flags) ? r : 0;
  if (0 === s && 0 === n) returnfalse;
  if (0 === n) a.delete(t), 0 === a.size && _.delete(e);
  else {
    let e = null != (i = null == o ? true : o.since) ? i : null,
      r = (s & f.Dg.VOICE) === f.Dg.VOICE,
      l = (n & f.Dg.VOICE) === f.Dg.VOICE;
    r !== l && (e = l ? Date.now() : null), a.set(t, {
      flags: n,
      since: e
    })
  }
  returntrue
}

function T(e) {
  let {
    user: t,
    sessionId: n
  } = e;
  m = t.id, h = n, g = null
}

function A(e) {
  let {
    context: t,
    userId: n,
    speakingFlags: r
  } = e;
  if ((r & f.Dg.PRIORITY) === f.Dg.PRIORITY) {
    let e = s.Z.getChannel(u.Z.getVoiceChannelId());
    null != e && o.BT({
      permission: d.Plq.PRIORITY_SPEAKER,
      user: n,
      context: e
    }) ? l.Z.setCanHavePriority(n, true) : (l.Z.setCanHavePriority(n, false), r &= ~f.Dg.PRIORITY)
  }
  return (r & f.Dg.HIDDEN) === f.Dg.HIDDEN && (r = 0), I(t, n, r)
}

function C(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    let {
      userId: n,
      channelId: r,
      sessionId: i
    } = t, a = false, o = g;
    return n === m && i === h && (g = null != r ? r : null), o !== g && (a = _.delete(f.Yn.DEFAULT) || a), null == r ? a = n === m && i === h ? _.delete(f.Yn.DEFAULT) || a : O(f.Yn.DEFAULT, n) || a : n === m && i !== h ? a = _.delete(f.Yn.DEFAULT) || a : n !== m && r !== c.Z.getChannelId() && (a = O(f.Yn.DEFAULT, n) || a), a || e
  }, false)
}

function N(e) {
  let {
    isActive: t,
    isLatched: n
  } = e;
  E = n, b = t
}
class P extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(Chunk592125.Z, Chunk131951.Z, Chunk19780.Z, Chunk944486.Z)
  }
  getSpeakingDuration(e, t) {
    var n, r;
    let i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : f.Yn.DEFAULT,
      a = null == (r = _.get(i)) || null == (n = r.get(e)) ? true : n.since;
    return null != a ? t - a : 0
  }
  getSpeakers() {
    var e, t;
    let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return Array.from(null != (t = null == (e = _.get(require)) ? true : module.keys()) ? exports : []).filter(e => v(n, e, f.Dg.VOICE))
  }
  isSpeaking(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
    return v(t, e, f.Dg.VOICE)
  }
  isPrioritySpeaker(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
    return v(t, e, f.Dg.PRIORITY)
  }
  isSoundSharing(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
    return v(t, e, f.Dg.SOUNDSHARE)
  }
  isAnyoneElseSpeaking() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return S(module, Chunk65154.Dg.VOICE, true)
  }
  isCurrentUserSpeaking() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return null != m && this.isSpeaking(m, module)
  }
  isCurrentUserPTTActive() {
    return b
  }
  isCurrentUserPTTLatched() {
    return E
  }
  isAnyonePrioritySpeaking() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return S(module, Chunk65154.Dg.VOICE | Chunk65154.Dg.PRIORITY)
  }
  isCurrentUserPrioritySpeaker() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return null != m && this.isPrioritySpeaker(m, module)
  }
  isCurrentUserPrioritySpeaking() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk65154.Yn.DEFAULT;
    return null != m && this.isPrioritySpeaker(m, module) && this.isSpeaking(m, module)
  }
}
p(P, "displayName", "SpeakingStore");
let R = new P(Chunk570140.Z, {
  CONNECTION_OPEN: T,
  OVERLAY_INITIALIZE: T,
  SPEAKING: A,
  VOICE_STATE_UPDATES: C,
  PUSH_TO_TALK_STATE_CHANGE: N
})