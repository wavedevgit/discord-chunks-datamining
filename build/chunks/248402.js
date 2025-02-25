/** Chunk was on web.js **/
"use strict";
let r, i;
n.d(t, {
  Z: () => S
}), n(47120);
var o, a = n(392711),
  s = n.n(a),
  l = n(442837),
  c = n(570140),
  u = n(358221),
  d = n(569545),
  f = n(199902),
  _ = n(314897),
  p = n(131951),
  h = n(606304),
  g = n(354459);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function E() {
  let e, t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (null == r) e = null;
  else {
    var n, o, a, l, c;
    e = u.Z.getSelectedParticipantId(r);
    let t = f.Z.getLastActiveStream(),
      m = null != e ? u.Z.getParticipant(r, e) : null;
    if ((null == m ? void 0 : m.type) !== g.fO.ACTIVITY && ((null == m ? void 0 : m.type) !== g.fO.USER || (null === (n = m.voiceState) || void 0 === n ? void 0 : n.selfVideo)) || (e = null), null != t && null == e && (e = null === (o = u.Z.getParticipant(r, (0, d.V9)(t))) || void 0 === o ? void 0 : o.id), null == e) {
      let t = _.default.getId(),
        n = s()(u.Z.getVideoParticipants(r)).filter(e => e.type === g.fO.USER && e.user.id !== t && !p.Z.isLocalVideoDisabled(e.user.id)),
        o = n.map(e => e.user.id),
        d = Date.now();
      null == (e = null === (a = n.map(e => [e.user.id, h.Z.getSpeakingDuration(e.user.id, d)]).filter(e => {
        let [t, n] = e;
        return 0 !== n
      }).maxBy(e => {
        let [t, n] = e;
        return -n
      })) || void 0 === a ? void 0 : a[0]) && (e = null != i && o.has(i) ? i : null === (c = n.first()) || void 0 === c ? void 0 : null === (l = c.user) || void 0 === l ? void 0 : l.id)
    }
  }
  i !== e && (i = e, t && O.emitChange())
}
let v = s().debounce(E, 300);

function b() {
  return v(), !1
}
class y extends(o = l.ZP.Store) {
  initialize() {
    this.waitFor(u.Z, _.default, h.Z, f.Z, p.Z), this.syncWith([u.Z, f.Z], b)
  }
  getSpeaker(e) {
    return r !== e && (r = e, E(!1)), null != i ? i : _.default.getId()
  }
}
m(y, "displayName", "VideoSpeakerStore");
let O = new y(c.Z, {
    AUDIO_SET_LOCAL_VIDEO_DISABLED: b
  }),
  S = O