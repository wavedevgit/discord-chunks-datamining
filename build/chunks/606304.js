/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => A
}), n(47120), n(789020);
var r, i = n(442837),
  o = n(570140),
  a = n(700785),
  s = n(592125),
  l = n(131951),
  c = n(19780),
  u = n(944486),
  d = n(981631),
  f = n(65154);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = new Map,
  h = null,
  m = null,
  g = null;

function E() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT,
    t = _.get(e);
  return null == t && (t = new Map, _.set(e, t)), t
}

function v(e, t) {
  let n = _.get(e);
  if (null == n) return !1;
  let r = n.delete(t);
  return 0 === n.size && _.delete(e), r
}

function b(e, t, n) {
  var r, i, o;
  return ((null !== (o = null === (i = _.get(e)) || void 0 === i ? void 0 : null === (r = i.get(t)) || void 0 === r ? void 0 : r.flags) && void 0 !== o ? o : f.Dg.NONE) & n) === n
}

function y(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = _.get(e);
  if (null == r) return !1;
  for (let [e, {
      flags: i
    }] of r)
    if ((!n || e !== h) && (i & t) === t) return !0;
  return !1
}

function O(e, t, n) {
  var r, i;
  let o = E(e),
    a = o.get(t),
    s = null !== (r = null == a ? void 0 : a.flags) && void 0 !== r ? r : 0;
  if (0 === s && 0 === n) return !1;
  if (0 === n) o.delete(t), 0 === o.size && _.delete(e);
  else {
    let e = null !== (i = null == a ? void 0 : a.since) && void 0 !== i ? i : null,
      r = (s & f.Dg.VOICE) === f.Dg.VOICE,
      l = (n & f.Dg.VOICE) === f.Dg.VOICE;
    r !== l && (e = l ? Date.now() : null), o.set(t, {
      flags: n,
      since: e
    })
  }
  return !0
}

function S(e) {
  let {
    user: t,
    sessionId: n
  } = e;
  h = t.id, m = n, g = null
}

function I(e) {
  let {
    context: t,
    userId: n,
    speakingFlags: r
  } = e;
  if ((r & f.Dg.PRIORITY) === f.Dg.PRIORITY) {
    let e = s.Z.getChannel(u.Z.getVoiceChannelId());
    null != e && a.BT({
      permission: d.Plq.PRIORITY_SPEAKER,
      user: n,
      context: e
    }) ? l.Z.setCanHavePriority(n, !0) : (l.Z.setCanHavePriority(n, !1), r &= ~f.Dg.PRIORITY)
  }
  return O(t, n, r)
}

function T(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    let {
      userId: n,
      channelId: r,
      sessionId: i
    } = t, o = !1, a = g;
    return n === h && i === m && (g = null != r ? r : null), a !== g && (o = _.delete(f.Yn.DEFAULT) || o), null == r ? o = n === h && i === m ? _.delete(f.Yn.DEFAULT) || o : v(f.Yn.DEFAULT, n) || o : n === h && i !== m ? o = _.delete(f.Yn.DEFAULT) || o : n !== h && r !== c.Z.getChannelId() && (o = v(f.Yn.DEFAULT, n) || o), o || e
  }, !1)
}
class N extends(r = i.ZP.Store) {
  initialize() {
    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(c.Z)
  }
  getSpeakingDuration(e, t) {
    var n, r;
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.Yn.DEFAULT,
      o = null === (r = _.get(i)) || void 0 === r ? void 0 : null === (n = r.get(e)) || void 0 === n ? void 0 : n.since;
    return null != o ? t - o : 0
  }
  getSpeakers() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
    return Array.from(null !== (t = null === (e = _.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter(e => b(n, e, f.Dg.VOICE))
  }
  isSpeaking(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
    return b(t, e, f.Dg.VOICE)
  }
  isPrioritySpeaker(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
    return b(t, e, f.Dg.PRIORITY)
  }
  isSoundSharing(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f.Yn.DEFAULT;
    return b(t, e, f.Dg.SOUNDSHARE)
  }
  isAnyoneElseSpeaking() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
    return y(e, f.Dg.VOICE, !0)
  }
  isCurrentUserSpeaking() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
    return null != h && this.isSpeaking(h, e)
  }
  isAnyonePrioritySpeaking() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
    return y(e, f.Dg.VOICE | f.Dg.PRIORITY)
  }
  isCurrentUserPrioritySpeaking() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.Yn.DEFAULT;
    return null != h && this.isPrioritySpeaker(h, e) && this.isSpeaking(h, e)
  }
}
p(N, "displayName", "SpeakingStore");
let A = new N(o.Z, {
  CONNECTION_OPEN: S,
  OVERLAY_INITIALIZE: S,
  SPEAKING: I,
  VOICE_STATE_UPDATES: T
})